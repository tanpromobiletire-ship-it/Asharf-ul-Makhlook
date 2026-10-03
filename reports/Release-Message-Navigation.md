# Message Navigation release
Build: V16-message-navigation-2026-10-03z.

Built: Inbox search over the current account's visible messages, participant names and attachment names; selected-conversation filtering, result counts and clear-filter recovery. Reply buttons select the proper participant and focus the composer. Recipient preferences are stored per local account and survive rerender/send/refresh. Reply actions reject visitors, stale/foreign messages and blocked or unavailable participants. Narrow-screen fields are constrained.

Tested: 589/589 isolated headless Edge assertions passed with no captured app errors. All 569 earlier checks retained plus 16 message workflow assertions and four Messages layout checks at 320/375/768/1280. Includes private-pair exclusion, search/filter recovery, native Reply, selection persistence, local sending, blocking, stale targets, account isolation, visitor redaction/gate and fresh-page persistence. Local fixtures are not two real verified production accounts; production/security acceptance remains incomplete.

Preserved: 41 screens, 145 requirement IDs, prior records and storage key. Recipient preferences are additive. Before-source backup and historical release evidence retained. No backend or secrets changed.

Not connected: real cross-device messages, delivery/read receipts, unified backend group conversations, notification delivery, production permissions/file scanning and voice/video calling. Current messages and selection are browser-local test data; local checks are not a production authorization boundary.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; all 12 conditions require per-variable exact-build evidence before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Regression: node tests/organized-navigation.mjs on Windows with Node and Edge. README includes deployment instructions. Live source integrity/read-only health recorded separately.
