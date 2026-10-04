# Account onboarding and verification guard release
Build: V16-account-onboarding-2026-10-04ag.

Built: pending cloud registration now captures country/region, participation preference (Need Help, Help Provider or Both), test consent and acceptance of versioned prototype community rules. Role tiles, readable rules dialog and clear field validation are included. The API stores the country, preference, accepted rules version and server timestamp in PostgreSQL. Password hashes remain server-side; passwords and service tokens are not written to prototype storage. Registration always remains pending and does not create a session.

Fixed: active status alone no longer permits API login or existing-session access. Both email_verified and phone_verified must also be true. Member and active-week aggregate queries use those same verification conditions; expired sessions are excluded from active-week counts.

Tested: 735/735 isolated Edge browser assertions, 40/40 simulated-database API contract assertions and 28/28 provider/store component tests passed. Browser scope includes all prior workflows, onboarding transport and guards, rules dialog and widths 320/375/768/1280. These are scoped checks, not all 12 production acceptance gates. A malformed control-character test fixture was corrected and the full API contract re-run. The first browser run did not produce a result before its virtual-time budget; the allowance was raised from 3 to 10 seconds and progress diagnostics added, after which all assertions passed.

Preserved: 41 screens, all 146 requirement IDs, existing records and prior evidence. Four nullable columns are added to users with IF NOT EXISTS. Existing rows are not backfilled, consent is not invented, and no accounts are promoted. Existing unverified active accounts lose API access until both verification flags are genuinely completed.

Not connected: SMS/email delivery, account recovery/MFA, abuse/rate limits, real provider credentials and membership, durable provider identity mapping, secure production aid workflows and real two-account/device/network acceptance. Prototype rules are not final legal terms or proof of legal readiness. Provider proof remains disabled.

Status: 0 green, 113 yellow, 33 red. Strict production-verified completion remains 0%. Every requirement needs all 12 gates before GREEN.

Deployment: existing Render frontend and API, separate manual deployments. Backend uses cd server && npm install --omit=dev and cd server && npm start. Additive migrations run on API startup. Local commands: node tests/organized-navigation.mjs; node tests/api-contract.mjs; node --test server/provider-auth.test.js server/provider-flow-store.test.js. No secrets, provider enable flags, account verification flags or database networking are changed by this release.

Publication status: BUILT AND TESTED LOCALLY; NOT DEPLOYED. Automatic approval review blocked the source push to main pending explicit user approval. Live Render services still use the previous V16-provider-persistence-2026-10-03af build. No migration or new live tests for this update have been executed.
