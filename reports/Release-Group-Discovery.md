# Group Discovery release
Build: V16-group-discovery-2026-10-03w.

Built: Groups discovery now combines name/category/purpose search, membership-type filtering and My joined groups. Result counts and clear-filter recovery explain empty states. Cards mark the selected group; opening a group focuses its heading and scrolls to the workspace. All six section buttons expose pressed state. Unknown group IDs and invalid section names are rejected without changing the current workspace. Narrow-screen form and message layouts are constrained.

Tested: 507/507 isolated headless Edge assertions passed with no captured app errors. All 485 prior checks retained plus 18 group workflow assertions and four Groups responsive checks at 320/375/768/1280. Includes search/combined empty/clear, visitor and member joined filters, exact group selection/focus, current marker, all six tabs, invalid targets, Chat reset and fresh-page persistence. Local fixtures do not satisfy real verified-account or physical-device production acceptance.

Preserved: all 41 screens, 145 requirements, existing storage key and saved-record schema. Before-source backup and historical release evidence retained. No backend or secrets changed.

Not connected: cross-device group synchronization, backend membership/permissions, moderation, approval/invite delivery, production file scanning, calling and notifications. Local membership filters and section guards improve the demo experience but are not a production security boundary. Groups remain browser-local test data.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; all 12 conditions require exact-build per-variable evidence before GREEN.

Deployment: Render static root, no build command; automatic deploy off. Regression: node tests/organized-navigation.mjs on Windows with Node and Edge. README includes source/deployment instructions. Live integrity and read-only health checks recorded separately.

Live verification: All 23 live source-integrity and read-only smoke checks passed at 2026-10-03T15:04:21.580Z for source commit a42f209840e733094e529700cfc774a3cfb17d3b. Published HTML matches the tested source after newline normalization and the existing API/database health check passed. See Group-Discovery-Live-Results.json. These checks do not constitute full production acceptance or change status counts.
