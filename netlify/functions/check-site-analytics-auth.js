// Lightweight Site Analytics session check. Unlike check-auth.js, this verifies only the
// second-password cookie and never returns a GCS signed URL.

const { SITE_ANALYTICS_COOKIE_NAME, isValidSession, purposeSecret } = require('./_auth');

exports.handler = async (event) => {
  const cookieSecret = process.env.COOKIE_SECRET;
  const ok = !!cookieSecret && isValidSession(
    event.headers && event.headers.cookie,
    purposeSecret(cookieSecret || '', 'site-analytics'),
    SITE_ANALYTICS_COOKIE_NAME,
  );
  return {
    statusCode: ok ? 200 : 401,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok }),
  };
};
