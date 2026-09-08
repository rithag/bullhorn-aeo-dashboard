// Hand-rolled GCS V4 signed-URL generation (https://cloud.google.com/storage/docs/access-control/signing-urls-manually)
// using only Node's built-in crypto -- no @google-cloud/storage dependency, so there's nothing
// for Netlify's function bundler to install/resolve incorrectly on a deploy we can't live-debug.
// V4 signing needs only the service account's own RSA private key (self-contained signature, no
// OAuth2 token exchange / network round-trip to Google required to produce the URL).

const crypto = require('crypto');

function getServiceAccount() {
  const b64 = process.env.GCP_SA_KEY_B64;
  if (!b64) throw new Error('GCP_SA_KEY_B64 not set');
  const key = JSON.parse(Buffer.from(b64, 'base64').toString('utf8'));
  return { email: key.client_email, privateKey: key.private_key };
}

function sha256Hex(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

// bucket: plain bucket name. objectName: full object path within the bucket (e.g.
// "dashboard-data/citations.json"), NOT url-encoded by the caller -- this function encodes it.
function signV4Url(bucket, objectName, expiresSeconds) {
  const { email, privateKey } = getServiceAccount();
  const now = new Date();
  const isoBasic = now.toISOString().replace(/[:-]|\.\d{3}/g, ''); // -> YYYYMMDDTHHMMSSZ
  const dateStamp = isoBasic.slice(0, 8);
  const credentialScope = `${dateStamp}/auto/storage/goog4_request`;
  const credential = `${email}/${credentialScope}`;
  const host = 'storage.googleapis.com';
  const canonicalUri = `/${bucket}/${objectName.split('/').map(encodeURIComponent).join('/')}`;

  const queryParams = {
    'X-Goog-Algorithm': 'GOOG4-RSA-SHA256',
    'X-Goog-Credential': credential,
    'X-Goog-Date': isoBasic,
    'X-Goog-Expires': String(expiresSeconds),
    'X-Goog-SignedHeaders': 'host',
  };
  const canonicalQuery = Object.keys(queryParams)
    .sort()
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`)
    .join('&');

  const canonicalRequest = [
    'GET',
    canonicalUri,
    canonicalQuery,
    `host:${host}\n`,
    'host',
    'UNSIGNED-PAYLOAD',
  ].join('\n');

  const stringToSign = [
    'GOOG4-RSA-SHA256',
    isoBasic,
    credentialScope,
    sha256Hex(canonicalRequest),
  ].join('\n');

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(stringToSign, 'utf8');
  const signatureHex = signer.sign(privateKey).toString('hex');

  return `https://${host}${canonicalUri}?${canonicalQuery}&X-Goog-Signature=${signatureHex}`;
}

module.exports = { signV4Url };
