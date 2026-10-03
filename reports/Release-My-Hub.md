# My Hub release
Build: V16-my-hub-2026-10-03aa.

Built: My Hub lists the current local account's owned/joined groups, followed questions and volunteer commitments. Type filters, text search, result counts and clear-filter recovery organize the workspace. Native buttons open the selected group or community post. Saved-video buttons clear incompatible feed filters and focus the exact saved video. Stale/foreign targets are rejected and visitor workspace content is cleared.

Tested: 614/614 isolated headless Edge assertions passed with no captured app errors, retaining all 589 previous checks. Added account isolation, each filter, search and empty recovery, exact group/post navigation, stale and foreign targets, exact saved-video navigation, visitor gates and fresh-page record persistence. My Hub layout checked at 320/375/768/1280 widths. Local fixtures are not two real verified production accounts.

Preserved: 41 screens, all 145 requirement IDs, existing records/storage key, previous release evidence and before-source backup. No backend or secrets changed.

Not connected: real shared backend groups, questions, volunteer commitments and saved videos; production account verification delivery, casework, payments, official alert feeds, notifications and calling. This workspace uses browser-local test records; local guards are not a production authorization boundary. Search/type filter selection is temporary.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%. All 12 conditions require per-variable exact-build evidence before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Run node tests/organized-navigation.mjs with Node and Edge on Windows. README contains deployment instructions. Live source-integrity/read-only smoke evidence is recorded separately.
