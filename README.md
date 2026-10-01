# Asharf-ul-Makhlook V16

Current build: V16-cloud-account-connection-2026-10-01o.

## Integrity

`index.html` SHA-256:
`a850c0bf0cff25fda208be628ebd6a93a1bd343c9798eea5c0a5a44656c148e7`

The deployment copy must match this checksum before production verification begins.

## Verification policy

A feature is not 100% GREEN merely because it is deployed or code-complete.

Lifecycle: Built -> Tested -> Integrated -> Pre-production Verified -> Production Verified -> 100% GREEN.

Production GREEN requires the project's full production verification policy, including successful production deployment/configuration, real end-to-end flows, two authenticated accounts where applicable, device/network testing where applicable, persistence/backend verification, no unresolved critical/high defects, and recorded production evidence.

Material changes invalidate prior GREEN status until affected regression and production verification pass again.

## Navigation update

40 screens; six home task tiles; grouped searchable directory; breadcrumbs; compact mobile menu. Existing demo records remain in browser local storage. Demo roles are not production authentication.

## Deployment

The frontend is a static site: publish the repository root with no build command. Render automatic deploys are disabled; trigger a manual frontend deploy after pushing to main. Backend configuration is separate; run npm install --omit=dev and npm start from server. Supply private database and authentication configuration through the hosting service. Never commit secrets.

## Validation

The organized navigation passed 249 headless Edge checks across 40 screens and 320, 375, 768, and 1280 pixel widths. Live integrations and production verification remain subject to the policy above.

Run the navigation regression on Windows with Node and Microsoft Edge installed: node tests/organized-navigation.mjs. The test uses an isolated temporary browser profile and disables external requests.

## Statistics workspace

Open Statistics from Community or All sections. Choose Live service for API status and public visitor counts, or TEST DATA preview for sample visitor totals and local member aggregates. Member test totals require local sign-in. Admin preview requires a separate explicit test-preview action and grants no production permissions. Data source preference persists across page loads. No identities or message contents appear in metrics.

Built and tested: public/member/admin view navigation, metric search, loading, pending database, success, empty and error states, request timeouts, stale-response protection, local account creation/sign-in/profile changes, saved-state initialization and responsive layouts.

Connected: the API and Postgres database; public visitor statistics are available from the live API.

Not production-verified: member authentication and account lifecycle.

Not connected: production admin authorization, live presence, privacy-safe geography, signup-failure analytics, retention, verification-rate analytics, SMS and email verification. No feature is promoted to production green by this release.

## Account service connection

Open Account service from the account menu, local membership page or All sections. Registration sends details to the API and creates only a pending account. It cannot approve or verify the account. SMS, email verification, recovery and MFA remain unconnected. Only already-active accounts can sign in.

The service token remains in page memory and is discarded on reload. It is never stored with prototype records. A session check fetches the real account and aggregate member totals. Logout revokes the server session; failed revocation is reported explicitly. Local demo accounts and aid records remain separate from production sign-in.

Database setup is through the API service Environment settings: DATABASE_URL is the private Internal Database URL and FRONTEND_ORIGIN is the frontend origin. Do not place connection credentials in this repository. After changing server code, manually deploy both services because automatic code deployment is disabled.

Tests: node tests/organized-navigation.mjs runs browser workflows with mocked API responses and isolated test storage. node tests/api-contract.mjs runs 23 server contract checks with a simulated database. These are not two-account production acceptance tests. Live read-only deployment checks separately verify health, public stats and rejection of anonymous member access.

Production verification still requires real two-account workflows, verification delivery, abuse/rate-limit controls, credential/session review, persistence and security testing, launch privacy review and the full 12-condition policy. Keep status yellow until that evidence exists.

The current free database expires October 31, 2026. Arrange retention and backups before keeping real applicant or donor data.
