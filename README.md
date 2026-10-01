# Asharf-ul-Makhlook V16

Current build: V16-statistics-workspace-2026-10-01n.

## Integrity

`index.html` SHA-256:
`daeedbeae49295741520d08e723def2ac5172603d3d345ed3a9c9d77931f4bab`

The deployment copy must match this checksum before production verification begins.

## Verification policy

A feature is not 100% GREEN merely because it is deployed or code-complete.

Lifecycle: Built -> Tested -> Integrated -> Pre-production Verified -> Production Verified -> 100% GREEN.

Production GREEN requires the project's full production verification policy, including successful production deployment/configuration, real end-to-end flows, two authenticated accounts where applicable, device/network testing where applicable, persistence/backend verification, no unresolved critical/high defects, and recorded production evidence.

Material changes invalidate prior GREEN status until affected regression and production verification pass again.

## Navigation update

39 screens; six home task tiles; grouped searchable directory; breadcrumbs; compact mobile menu. Existing demo records remain in browser local storage. Demo roles are not production authentication.

## Deployment

The frontend is a static site: publish the repository root with no build command. Render automatic deploys are disabled; trigger a manual frontend deploy after pushing to main. Backend configuration is separate; run npm install --omit=dev and npm start from server. Supply private database and authentication configuration through the hosting service. Never commit secrets.

## Validation

The organized navigation passed 223 headless Edge checks across 39 screens and 320, 375, 768, and 1280 pixel widths. Live integrations and production verification remain subject to the policy above.

Run the navigation regression on Windows with Node and Microsoft Edge installed: node tests/organized-navigation.mjs. The test uses an isolated temporary browser profile and disables external requests.

## Statistics workspace

Open Statistics from Community or All sections. Choose Live service for API status and public visitor counts, or TEST DATA preview for sample visitor totals and local member aggregates. Member test totals require local sign-in. Admin preview requires a separate explicit test-preview action and grants no production permissions. Data source preference persists across page loads. No identities or message contents appear in metrics.

Built and tested: public/member/admin view navigation, metric search, loading, pending database, success, empty and error states, request timeouts, stale-response protection, local account creation/sign-in/profile changes, saved-state initialization and responsive layouts.

Not connected: production database, production member/admin authorization, live presence, privacy-safe geography, signup-failure analytics, retention, verification-rate analytics, SMS and email verification. No feature is promoted to production green by this release.
