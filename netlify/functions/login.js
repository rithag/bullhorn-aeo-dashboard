// POST { "password": "..." } -> 200 + Set-Cookie on match, 401 otherwise.
// Requires two Netlify env vars: DASHBOARD_PASSWORD, COOKIE_SECRET (see README in this dir).

const crypto = require('crypto');
const { makeCookieHeader } = require('./_auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let password;
  try {
    password = JSON.parse(event.body || '{}').password;
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request' };
  }

  const expected = process.env.DASHBOARD_PASSWORD || '';
  // Cap both sides before comparing -- padEnd doesn't truncate an over-length input, and
  // timingSafeEqual throws (rather than returning false) on a buffer-length mismatch, which would
  // otherwise surface as a 502 for a wrong password that happens to be very long.
  const given = String(password || '').slice(0, 256);
  // Constant-time comparison, and pad to equal length first since timingSafeEqual throws on a
  // length mismatch rather than just returning false -- an attacker shouldn't learn the real
  // password's length from a fast-fail on length alone.
  const a = Buffer.from(given.padEnd(256, '\0'));
  const b = Buffer.from(expected.slice(0, 256).padEnd(256, '\0'));
  const match = expected.length > 0 && expected.length <= 256 && crypto.timingSafeEqual(a, b);

  if (!match) {
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
      'Set-Cookie': makeCookieHeader(cookieSecret),
    },
    body: JSON.stringify({ ok: true }),
  };
};
