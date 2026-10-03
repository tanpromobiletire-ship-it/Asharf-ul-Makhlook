# Asharf-ul-Makhlook V16

Current build: V16-provider-engine-2026-10-03ae.

## Integrity

`index.html` SHA-256:
`100d13d01a4775b83c938ac692509dfba512ef94eb2cc4407b56d7032a2c68d4`

Normalize CRLF to LF before hashing. The deployment copy must match this checksum before production verification begins.

## Verification policy

A feature is not 100% GREEN merely because it is deployed or code-complete.

Lifecycle: Built -> Tested -> Integrated -> Pre-production Verified -> Production Verified -> 100% GREEN.

Production GREEN requires the project's full production verification policy, including successful production deployment/configuration, real end-to-end flows, two authenticated accounts where applicable, device/network testing where applicable, persistence/backend verification, no unresolved critical/high defects, and recorded production evidence.

Material changes invalidate prior GREEN status until affected regression and production verification pass again.

## Navigation update

41 screens; six home task tiles; grouped searchable directory; breadcrumbs; compact mobile menu. Existing demo records remain in browser local storage. Demo roles are not production authentication.

## Deployment

The frontend is a static site: publish the repository root with no build command. Render automatic deploys are disabled; trigger a manual frontend deploy after pushing to main. Backend configuration is separate; run npm install --omit=dev and npm start from server. Supply private database and authentication configuration through the hosting service. Never commit secrets.

## Validation

Current build: 723 isolated Edge assertions, 19 simulated-provider component tests and 25 simulated-database API contract assertions passed. Full production acceptance remains pending.

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

## Full variable audit

All variables & 12 checks contains 144 variables: the previous 65 roadmap rows and 79 individually tracked requirements, metrics, social profiles and the register itself. Baseline 0 green, 111 yellow, 33 red. reports/All-Variables.md and reports/All-Variables.csv provide the full list and remaining gaps. All 41 screens are in the directory. No previously tracked row was removed.

A lab/closure/hosting check no longer automatically grants every variable production tests/browser/deployed conditions. Only explicit current-build per-variable approvals do. Generic historical acceptance notes do not certify this build.

## Anonymous Help and Safety update
Consent, expectations, scam warnings, fair demo review, independent appeals and categorized test alerts are implemented. Read reports/Release-Help-Safety.md for the exact tested scope and production gaps. The register has 144 variables: 0 green, 111 yellow, 33 red.

Live verification: 15/15 read-only source/service smoke checks passed on 2026-10-02T02:48:04.532Z. Deployed source matched the tested source after CRLF normalization; all 41 screens and 144 variables, current CSV, connected API/Postgres and public stats were verified. This does not certify real casework, emergency delivery or all twelve production conditions. Receipt: reports/Help-Safety-Live-Results.json.

## Current Free Help Mission release
422 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Free-Help.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Request Experience release
444 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Request-Experience.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Community Experience release
468 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Community-Experience.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Community Threads release
485 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Community-Threads.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Group Discovery release
507 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Group-Discovery.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Group Workspace release
539 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Group-Workspace.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Group Membership release
569 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Group-Membership.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Message Navigation release
589 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Message-Navigation.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current My Hub release
614 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-My-Hub.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Hub Conversations release
641 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Hub-Conversations.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Hub Files release
668 browser checks passed. Current register: 145 requirements, 0 green, 112 yellow, 33 red. See reports/Release-Hub-Files.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Hub Requests and Provider Options release
715 browser checks passed. Current register: 146 requirements, 0 green, 112 yellow, 34 red. See reports/Release-Hub-Requests.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.

## Current Provider Engine release
723 browser checks passed. Current register: 146 requirements, 0 green, 113 yellow, 33 red. See reports/Release-Provider-Engine.md for current built/tested/not-connected scope. Earlier release receipts are historical evidence for their recorded builds.
