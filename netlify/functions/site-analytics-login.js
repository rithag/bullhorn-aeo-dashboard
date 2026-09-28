// POST { "password": "..." } -> Site Analytics-specific signed session cookie.
// Requires SITE_ANALYTICS_PASSWORD and COOKIE_SECRET as Netlify environment variables.

const { SITE_ANALYTICS_COOKIE_NAME, makeCookieHeader, passwordMatches, purposeSecret } = require('./_auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  let password;
  try {
    password = JSON.parse(event.body || '{}').password;
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request' };
  }
  if (!passwordMatches(password, process.env.SITE_ANALYTICS_PASSWORD || '')) {
    return { statusCode: 401, body: JSON.stringify({ ok: false }) };
  }
  const cookieSecret = process.env.COOKIE_SECRET;
  if (!cookieSecret) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'server misconfigured' }) };
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': makeCookieHeader(purposeSecret(cookieSecret, 'site-analytics'), SITE_ANALYTICS_COOKIE_NAME),
    },
    body: JSON.stringify({ ok: true }),
  };
};
