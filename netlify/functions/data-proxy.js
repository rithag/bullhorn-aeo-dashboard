// GET (via the /api/data/* -> /.netlify/functions/data-proxy/:splat rewrite in netlify.toml).
// Validates the session cookie, then 302-redirects to a short-lived GCS V4 signed URL for the
// requested object -- the browser follows the redirect and downloads directly from GCS, so
// there's no function response-size limit involved (citations.json alone is 216MB, far past any
// Netlify Function payload limit; proxying the bytes through the function body was never viable).
// The signed URL only exists because the cookie was valid, expires in minutes, and is scoped to
// exactly one object -- it does not grant standing/public access the way the old allUsers grant did.

const { SITE_ANALYTICS_COOKIE_NAME, isValidSession, purposeSecret } = require('./_auth');
const { signV4Url } = require('./_gcs_sign');

const BUCKET = 'aeo-dashboard-assets-bullhorn';
const SIGNED_URL_TTL_SECONDS = 300; // 5 minutes -- plenty for the browser to start the download

exports.handler = async (event) => {
  const cookieSecret = process.env.COOKIE_SECRET;
  // event.path reflects the ORIGINAL public request path for a status-200 rewrite rule (not the
  // rewritten /.netlify/functions/data-proxy/... target) -- confirmed empirically against the
  // live deploy, e.g. "/api/data/citations.json" -> relPath "citations.json".
  const relPath = decodeURIComponent((event.path || '').replace(/^.*\/api\/data\/?/, ''));
  if (!relPath) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'missing path' }) };
  }
  // Guard against path traversal escaping the dashboard-data/ prefix -- these are always simple
  // flat filenames or one-level-deep (text/<race>.json), never expected to contain "..".
  if (relPath.includes('..')) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'invalid path' }) };
  }
  // Site Analytics is a second, intentionally narrower gate. The main dashboard session can
  // read all of its normal data, but its legacy objects and every immutable Site Analytics
  // release require an additional cookie only issued after the separate Site Analytics password
  // succeeds.
  const siteAnalyticsAsset = new Set(['site_analytics.json', 'site_analytics_responses.json']).has(relPath)
    || relPath.startsWith('site-analytics-releases/');
  const signingSecret = siteAnalyticsAsset ? purposeSecret(cookieSecret || '', 'site-analytics') : cookieSecret;
  const authed = cookieSecret && isValidSession(
    event.headers && event.headers.cookie,
    signingSecret,
    siteAnalyticsAsset ? SITE_ANALYTICS_COOKIE_NAME : undefined,
  );
  if (!authed) {
    return { statusCode: 401, body: JSON.stringify({ ok: false, error: 'unauthorized' }) };
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
