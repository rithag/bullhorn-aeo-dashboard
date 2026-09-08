// GET (via the /api/data/* -> /.netlify/functions/data-proxy/:splat rewrite in netlify.toml).
// Validates the session cookie, then 302-redirects to a short-lived GCS V4 signed URL for the
// requested object -- the browser follows the redirect and downloads directly from GCS, so
// there's no function response-size limit involved (citations.json alone is 216MB, far past any
// Netlify Function payload limit; proxying the bytes through the function body was never viable).
// The signed URL only exists because the cookie was valid, expires in minutes, and is scoped to
// exactly one object -- it does not grant standing/public access the way the old allUsers grant did.

const { isValidSession } = require('./_auth');
const { signV4Url } = require('./_gcs_sign');

const BUCKET = 'aeo-dashboard-assets-bullhorn';
const SIGNED_URL_TTL_SECONDS = 300; // 5 minutes -- plenty for the browser to start the download

exports.handler = async (event) => {
  const cookieSecret = process.env.COOKIE_SECRET;
  if (!cookieSecret || !isValidSession(event.headers && event.headers.cookie, cookieSecret)) {
    return { statusCode: 401, body: JSON.stringify({ ok: false, error: 'unauthorized' }) };
  }

  // event.path is the full function path including the splat, e.g.
  // "/.netlify/functions/data-proxy/text/AZ-01.json" -> relPath "text/AZ-01.json".
  const relPath = decodeURIComponent((event.path || '').replace(/^.*\/data-proxy\/?/, ''));
  if (!relPath) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'missing path' }) };
  }
  // Guard against path traversal escaping the dashboard-data/ prefix -- these are always simple
  // flat filenames or one-level-deep (text/<race>.json), never expected to contain "..".
  if (relPath.includes('..')) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'invalid path' }) };
  }

  const objectName = `dashboard-data/${relPath}`;

  let signedUrl;
  try {
    signedUrl = signV4Url(BUCKET, objectName, SIGNED_URL_TTL_SECONDS);
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'server misconfigured' }) };
  }

  return {
    statusCode: 302,
    headers: { Location: signedUrl, 'Cache-Control': 'no-store' },
    body: '',
  };
};
