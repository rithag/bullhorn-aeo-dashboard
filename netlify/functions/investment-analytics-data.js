// Cost bases never ship in the general Owned Domains release. Return them only after the
// separately purpose-bound protected-analytics session has been verified.

const {
  INVESTMENT_ANALYTICS_COOKIE_NAME,
  isValidSession,
  purposeSecret,
} = require('./_auth');

const DEFAULT_CONFIG = {
  courier: {
    cost: { status: 'allocated_commitment', commitment_usd: 120000, planned_articles: 54 },
  },
  heartland: {
    cost: { status: 'allocated_minimum_commitment', commitment_usd: 50000, planned_articles_minimum: 21 },
  },
};

function protectedConfig() {
  const configured = process.env.INVESTMENT_ANALYTICS_CONFIG_JSON;
  if (!configured) return DEFAULT_CONFIG;
  try {
    const parsed = JSON.parse(configured);
    return parsed && typeof parsed === 'object' ? parsed : DEFAULT_CONFIG;
  } catch (error) {
    return DEFAULT_CONFIG;
  }
}

exports.handler = async (event) => {
  const cookieSecret = process.env.COOKIE_SECRET;
  const ok = !!cookieSecret && isValidSession(
    event.headers && event.headers.cookie,
    purposeSecret(cookieSecret || '', 'investment-analytics'),
    INVESTMENT_ANALYTICS_COOKIE_NAME,
  );
  if (!ok) {
    return {
      statusCode: 401,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ ok: false }),
    };
  }
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
    body: JSON.stringify({ ok: true, groups: protectedConfig() }),
  };
};
