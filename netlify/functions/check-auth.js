// Lightweight session check used by dashboard.html on page load, before it decides whether to
// show the password form or proceed to loadAllData(). Deliberately separate from data-proxy.js so
// checking login status never triggers a GCS signed-URL computation.

const { isValidSession } = require('./_auth');

exports.handler = async (event) => {
  const cookieSecret = process.env.COOKIE_SECRET;
  const ok = !!cookieSecret && isValidSession(event.headers && event.headers.cookie, cookieSecret);
  return {
    statusCode: ok ? 200 : 401,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok }),
  };
};
