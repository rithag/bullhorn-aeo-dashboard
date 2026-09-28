// Shared cookie sign/verify helper for login.js + data-proxy.js. Pure Node built-ins only (no
// npm dependency) -- avoids relying on Netlify's function-bundler picking up a package.json
// correctly, which we can't live-verify from here before the first real deploy.
//
// Cookie format: "<expiryEpochSeconds>.<base64url HMAC-SHA256 signature over that expiry, keyed
// by COOKIE_SECRET>". Not a JWT -- there's nothing to encode beyond "is this session still
// valid," so a plain signed timestamp is simpler and has no library/format surface to get wrong.

const crypto = require('crypto');

const COOKIE_NAME = 'aeo_dash_auth';
const SITE_ANALYTICS_COOKIE_NAME = 'aeo_site_analytics_auth';
const SESSION_SECONDS = 30 * 24 * 60 * 60; // 30 days

function base64url(buf) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function sign(expiry, secret) {
  const mac = crypto.createHmac('sha256', secret).update(String(expiry)).digest();
  return base64url(mac);
}

function makeCookieHeader(secret, cookieName = COOKIE_NAME) {
  const expiry = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const value = `${expiry}.${sign(expiry, secret)}`;
  return `${cookieName}=${value}; Path=/; Max-Age=${SESSION_SECONDS}; HttpOnly; Secure; SameSite=Lax`;
}

function parseCookies(cookieHeader) {
  const out = {};
  (cookieHeader || '').split(';').forEach(part => {
    const idx = part.indexOf('=');
    if (idx === -1) return;
    out[part.slice(0, idx).trim()] = part.slice(idx + 1).trim();
  });
  return out;
}

function isValidSession(cookieHeader, secret, cookieName = COOKIE_NAME) {
  const raw = parseCookies(cookieHeader)[cookieName];
  if (!raw) return false;
  const dot = raw.indexOf('.');
  if (dot === -1) return false;
  const expiryStr = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);
  const expiry = parseInt(expiryStr, 10);
  if (!Number.isFinite(expiry) || expiry < Math.floor(Date.now() / 1000)) return false;
  const expected = sign(expiryStr, secret);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function passwordMatches(password, expected) {
  // Cap both sides before comparing -- padEnd doesn't truncate an over-length input, and
  // timingSafeEqual throws (rather than returning false) on a buffer-length mismatch.
  const given = String(password || '').slice(0, 256);
  const a = Buffer.from(given.padEnd(256, '\0'));
  const b = Buffer.from(String(expected || '').slice(0, 256).padEnd(256, '\0'));
  return !!expected && String(expected).length <= 256 && crypto.timingSafeEqual(a, b);
}

// A cookie's HMAC must be bound to its purpose. Otherwise a dashboard user could copy the value
// of their valid main-session cookie into a differently named Site Analytics cookie and bypass the
// second password. This deterministic derivation keeps one stored Netlify secret while producing
// independent signing keys for the two authorization scopes.
function purposeSecret(secret, purpose) {
  return crypto.createHmac('sha256', secret).update(`aeo-dashboard:${purpose}`).digest('hex');
}

module.exports = { COOKIE_NAME, SITE_ANALYTICS_COOKIE_NAME, makeCookieHeader, isValidSession, passwordMatches, purposeSecret };
