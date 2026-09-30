// POST { "partner": "courier"|"heartland"|"slea"|"forwardmajority", "password": "..." }
// -> partner-specific, signed HttpOnly session cookie. Passwords remain server-only Netlify
// environment variables; neither password nor password hash reaches the browser.

const { makeCookieHeader, passwordMatches, purposeSecret } = require('./_auth');

const PARTNERS = {
  courier: { passwordEnv: 'COURIER_CITATIONS_PASSWORD', cookieName: 'aeo_courier_citations_auth' },
  heartland: { passwordEnv: 'HEARTLAND_CITATIONS_PASSWORD', cookieName: 'aeo_heartland_citations_auth' },
  slea: { passwordEnv: 'SLEA_CITATIONS_PASSWORD', cookieName: 'aeo_slea_citations_auth' },
  forwardmajority: { passwordEnv: 'FORWARD_MAJORITY_CITATIONS_PASSWORD', cookieName: 'aeo_forward_majority_citations_auth' },
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request' };
  }
  const partner = PARTNERS[body.partner];
  if (!partner) return { statusCode: 400, body: JSON.stringify({ ok: false }) };
  if (!passwordMatches(body.password, process.env[partner.passwordEnv] || '')) {
    return { statusCode: 401, body: JSON.stringify({ ok: false }) };
  }
  const cookieSecret = process.env.COOKIE_SECRET;
  if (!cookieSecret) return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'server misconfigured' }) };
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': makeCookieHeader(purposeSecret(cookieSecret, `partner-insights:${body.partner}`), partner.cookieName),
    },
    body: JSON.stringify({ ok: true }),
  };
};
