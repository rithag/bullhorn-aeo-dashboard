// Lightweight check for the separately signed investment-analytics session.

const {
  INVESTMENT_ANALYTICS_COOKIE_NAME,
  isValidSession,
  purposeSecret,
} = require('./_auth');

exports.handler = async (event) => {
  const cookieSecret = process.env.COOKIE_SECRET;
  const ok = !!cookieSecret && isValidSession(
    event.headers && event.headers.cookie,
    purposeSecret(cookieSecret || '', 'investment-analytics'),
    INVESTMENT_ANALYTICS_COOKIE_NAME,
  );
  return {
    statusCode: ok ? 200 : 401,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok }),
  };
};
