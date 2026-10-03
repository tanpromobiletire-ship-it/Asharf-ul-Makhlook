# Provider identity-check component and remaining membership work
VAR-146 · Build V16-provider-persistence-2026-10-03af · YELLOW / in progress.

## Implemented
The server exposes a public configuration-status endpoint and opt-in identity-check start/callback handlers for Google, Microsoft personal accounts (Hotmail/Outlook) and Apple. It uses pinned openid-client 6.8.8, authorization code + S256 PKCE and nonce, browser-bound state with 10-minute expiry and one-time consumption, bounded temporary state, fixed HTTPS origins, secure HttpOnly cookies and explicit JWS signature validation. Apple form_post callbacks are supported.

This component does not create a user/session, link accounts, retain provider profile/token data or activate membership. A successful identity check returns only a generic verification-pending marker to the account page. Membership sign-in and onboarding remain unconnected.

## Routes and disabled default
- GET /api/auth/providers — readiness booleans and explicit identity-check-only mode; no credentials.
- GET /api/auth/provider/{google|microsoft|apple}/start — disabled with 503 unless configuration and the explicit proof flag are present.
- GET/POST /api/auth/provider/{google|microsoft|apple}/callback — validates the matching browser transaction; failures never grant membership.

Temporary transactions now use a private PostgreSQL table with 10-minute expiry, hashed state/browser bindings and transient nonce/PKCE verifier fields. Capacity is capped at 400 using a transaction-scoped advisory lock. Matching callbacks use one conditional DELETE RETURNING for atomic consumption across server instances. No raw state, profile, provider token or member identity is stored in this table. Expired rows are removed at startup and new starts; they are rejected immediately at expiry. Transient nonce/verifier fields are not encrypted separately at rest; database access is restricted to server-side infrastructure. Production never falls back to in-memory storage. Membership onboarding and real provider persistence tests are still pending. The deployed proof flag is kept off.

## Server-side configuration for future controlled tests
OAUTH_PROVIDER_PROOF_ENABLED=true explicitly opts into identity checks; it is not a production membership launch flag.
OAUTH_PUBLIC_ORIGIN=https://asharf-ul-makhlook-api.onrender.com
FRONTEND_ORIGIN=https://asharf-ul-makhlook.onrender.com

Google: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.
Microsoft: MICROSOFT_CLIENT_ID and MICROSOFT_CLIENT_SECRET; register support for personal Microsoft accounts. Work/school identity support is not part of this component.
Apple: APPLE_SERVICES_ID and APPLE_CLIENT_SECRET (server-generated, expiring Apple client-secret JWT; signing-key provisioning/rotation is still owner setup).

Approved callback URLs:
https://asharf-ul-makhlook-api.onrender.com/api/auth/provider/google/callback
https://asharf-ul-makhlook-api.onrender.com/api/auth/provider/microsoft/callback
https://asharf-ul-makhlook-api.onrender.com/api/auth/provider/apple/callback

Register these URLs in the provider developer applications before any controlled live test. Keep credentials in server environment settings. No provider credentials were configured or committed in this release.

## Still required before membership launch
Durable issuer+subject identity mappings; explicit verified account linking rather than email matching; full display-name/country/consent onboarding; mandatory phone verification; appropriate email/Apple relay handling; membership sessions/revocation/logout/recovery; distributed abuse rate limits/monitoring; real provider cancellation/error/token validation; real signup/sign-in with two verified accounts and physical devices/networks. All 12 production gates need exact-build per-variable evidence.

## Tests and limits
22 provider component tests and 6 SQL-store adapter tests use simulated OIDC responses; they test boundary rejection, parameter forwarding, replay/expiry, cookie binding, cancellation, provider mix-up, form_post and configured/disabled behavior. Real JWT/JWKS/provider integration is not proven by these mocks.
26 API contract assertions use an isolated simulated database and retain the existing account-service checks.
723 isolated Edge assertions cover all prior workflows plus provider status loading/error/response validation and unchanged account/session state.

## References
https://github.com/panva/openid-client/blob/main/examples/oidc.ts
https://github.com/panva/openid-client/blob/main/docs/functions/enableNonRepudiationChecks.md
https://developers.google.com/identity/openid-connect/openid-connect
https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
https://developer.apple.com/documentation/signinwithapple/configuring-your-environment-for-sign-in-with-apple
