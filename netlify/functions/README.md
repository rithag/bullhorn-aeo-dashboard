# Dashboard login + data gate

Three Netlify environment variables required (Site settings → Environment variables in the
Netlify dashboard — never commit these):

- `DASHBOARD_PASSWORD` — the shared password typed into the login form.
- `COOKIE_SECRET` — random secret used to HMAC-sign the session cookie. Generate with
  `openssl rand -hex 32`.
- `GCP_SA_KEY_B64` — base64-encoded contents of the `dashboard-data-reader` service account's JSON
  key (`roles/storage.objectViewer` on `aeo-dashboard-assets-bullhorn` only, nothing else). Used
  only to sign short-lived GCS V4 signed URLs locally (no OAuth2 token round-trip) — see
  `_gcs_sign.js`.

## How it works

1. `login.js` — checks the posted password against `DASHBOARD_PASSWORD`, sets a signed,
   HttpOnly session cookie on success (`_auth.js`).
2. `check-auth.js` — cheap cookie-validity check, used by `dashboard.html` on load to decide
   whether to show the password form or the real dashboard.
3. `data-proxy.js` — validates the same cookie, then 302-redirects to a 5-minute GCS V4 signed
   URL for the requested asset. The browser follows the redirect and downloads directly from GCS
   (necessary since some assets, e.g. `citations.json`, are ~216MB — far past any Netlify
   Function response-size limit, so bytes can never be proxied through the function body itself).

The bucket itself has no `allUsers` grant once this is live — only a valid, freshly-signed URL (or
the `dashboard-data-reader` service account directly) can read it. Bucket CORS must still allow the
live Netlify origin for GET, since the browser ultimately fetches the redirect target directly.
