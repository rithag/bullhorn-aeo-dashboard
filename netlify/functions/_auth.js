// Shared cookie sign/verify helper for login.js + data-proxy.js. Pure Node built-ins only (no
// npm dependency) -- avoids relying on Netlify's function-bundler picking up a package.json
// correctly, which we can't live-verify from here before the first real deploy.
//
// Cookie format: "<expiryEpochSeconds>.<base64url HMAC-SHA256 signature over that expiry, keyed
// by COOKIE_SECRET>". Not a JWT -- there's nothing to encode beyond "is this session still
// valid," so a plain signed timestamp is simpler and has no library/format surface to get wrong.

const crypto = require('crypto');

const COOKIE_NAME = 'aeo_dash_auth';
const SESSION_SECONDS = 30 * 24 * 60 * 60; // 30 days

function base64url(buf) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function sign(expiry, secret) {
  const mac = crypto.createHmac('sha256', secret).update(String(expiry)).digest();
  return base64url(mac);
}

function makeCookieHeader(secret) {
  const expiry = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const value = `${expiry}.${sign(expiry, secret)}`;
  return `${COOKIE_NAME}=${value}; Path=/; Max-Age=${SESSION_SECONDS}; HttpOnly; Secure; SameSite=Lax`;
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

function isValidSession(cookieHeader, secret) {
  const raw = parseCookies(cookieHeader)[COOKIE_NAME];
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

module.exports = { COOKIE_NAME, makeCookieHeader, isValidSession };
