# Hub Conversations release
Build: V16-hub-conversations-2026-10-03ab.

Built: My Hub includes a Messages filter and one tile per current-account local direct conversation. Tiles show participant, message count and latest-added preview; attachment names provide a fallback preview. Most recently added conversation is listed first. Search matches participant and preview. Native tiles open the exact thread, clear incompatible search, enable selected-conversation filtering, preserve recipient selection and focus the composer. Bidirectional blocks, missing participants, visitors and unrelated threads are excluded or rejected.

Tested: 641/641 isolated headless Edge assertions passed, retaining all 614 prior checks. Added deduplication, ordering, message counts, privacy exclusion, native filters/navigation, search/empty recovery, selected-thread sending, attachment preview, bidirectional blocking, stale/foreign targets, escaped participant names, account isolation, visitor gating and fresh-page persistence. Existing desktop/responsive checks retained at 320/375/768/1280. Fixtures are fictional browser-local accounts, not two verified production accounts.

Preserved: 41 screens, 145 requirement IDs, existing browser records/storage key, old evidence reports and before-source backup. No backend or secrets changed.

Not connected: production real-time/cross-device messaging, real authenticated account verification delivery, shared backend community records, cloud file storage, calling and notifications. These conversation tiles use local test records; local guards are not production authorization boundaries. Filter choice remains temporary.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%. All 12 gates must have exact-build per-variable evidence before GREEN.

Deployment: existing Render static root; automatic deployment off. Node/Edge regression command: node tests/organized-navigation.mjs. README retains source/deployment instructions. Live source-integrity/read-only smoke evidence is separate from full production acceptance.
