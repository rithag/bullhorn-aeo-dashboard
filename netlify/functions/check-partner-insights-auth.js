// GET ?partner=courier|heartland|slea|forwardmajority -> verifies only that partner's secondary session cookie.

const { isValidSession, purposeSecret } = require('./_auth');

const PARTNERS = {
  courier: { cookieName: 'aeo_courier_citations_auth' },
  heartland: { cookieName: 'aeo_heartland_citations_auth' },
  slea: { cookieName: 'aeo_slea_citations_auth' },
  forwardmajority: { cookieName: 'aeo_forward_majority_citations_auth' },
};

exports.handler = async (event) => {
  const key = event.queryStringParameters && event.queryStringParameters.partner;
  const partner = PARTNERS[key];
  const cookieSecret = process.env.COOKIE_SECRET;
  const ok = !!partner && !!cookieSecret && isValidSession(
    event.headers && event.headers.cookie,
    purposeSecret(cookieSecret || '', `partner-insights:${key}`),
    partner && partner.cookieName,
  );
  return {
    statusCode: ok ? 200 : 401,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok }),
  };
};
