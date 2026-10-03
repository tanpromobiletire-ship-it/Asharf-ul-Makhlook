# Provider engine release
Build: V16-provider-engine-2026-10-03ae.

Built: opt-in, server-side provider identity-check component for Google, Microsoft personal accounts (Hotmail/Outlook) and Apple. Includes pinned openid-client 6.8.8, authorization-code exchange, nonce/PKCE, signed-ID-token validation, secure browser-cookie binding, one-time state/expiry, cancellation, provider mix-up protection, bounded temporary state, fixed HTTPS return origins and Apple form_post. Configuration-status API is public and discloses no secrets. Account page adds connection checking with loading, error/retry and validated status responses. User/session creation and membership activation are deliberately absent.

Tested: 723/723 isolated headless Edge assertions, 19/19 simulated-provider component tests, and 25/25 API contract assertions with an isolated simulated database passed. No captured frontend errors or unexpected alerts. Dependency install audit reported zero vulnerabilities; this is not comprehensive security acceptance. Provider mocks do not prove real JWT/JWKS, credentials or production provider behavior.

Preserved: 41 screens, all 146 requirement IDs, prior browser/database records, before-source backups and historical evidence. No database schema, user identities, passwords or existing sessions changed. Frontend and backend deploys require separate manual Render deployments.

Not connected: provider developer applications/credentials, real external provider tests, membership onboarding/linking, phone/email verification delivery, production provider sessions/revocation/recovery, durable transaction/identity storage and cross-device provider membership. The identity-check flag stays off. Temporary transactions are process-local, expire after 10 minutes, and are lost on restart; multi-instance routing is not supported. See Provider-Sign-In-Integration-Plan.md.

Status: 0 green, 113 yellow, 33 red. VAR-146 moves from RED to YELLOW because integration work has begun; it is not production verified. Strict production-verified completion remains 0%. All 12 per-variable gates require exact-build evidence before GREEN.

Deployment: existing Render static root; backend uses cd server && npm install --omit=dev and cd server && npm start. No provider secrets or enable flags are set by this release. Commands: node tests/organized-navigation.mjs; node tests/api-contract.mjs; node --test server/provider-auth.test.js. Live source-integrity/read-only probes and disabled provider-start checks are recorded separately.
