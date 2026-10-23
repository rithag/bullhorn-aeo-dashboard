// POST { "password": "..." } -> investment-analytics-only signed session cookie.
// INVESTMENT_ANALYTICS_PASSWORD can be configured independently. Until then, the existing
// internal Site Analytics password is the fallback; partner-tab passwords never unlock this card.

const {
  INVESTMENT_ANALYTICS_COOKIE_NAME,
  makeCookieHeader,
  passwordMatches,
  purposeSecret,
} = require('./_auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  let password;
  try {
    password = JSON.parse(event.body || '{}').password;
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request' };
  }
  const expected = process.env.INVESTMENT_ANALYTICS_PASSWORD || process.env.SITE_ANALYTICS_PASSWORD || '';
  if (!passwordMatches(password, expected)) {
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
      'Set-Cookie': makeCookieHeader(
        purposeSecret(cookieSecret, 'investment-analytics'),
        INVESTMENT_ANALYTICS_COOKIE_NAME,
      ),
    },
    body: JSON.stringify({ ok: true }),
  };
};
