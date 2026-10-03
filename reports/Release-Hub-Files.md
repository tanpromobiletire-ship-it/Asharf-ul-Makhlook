# Hub Files release
Build: V16-hub-files-2026-10-03ac.

Built: My Hub adds a Files filter and searchable file-location tiles for attachments referenced by the current member's available direct conversations and files in joined/owned groups. Tiles show original context, type and size. Repeated references in one thread are deduplicated; same names in distinct locations remain separate. Native buttons open the precise message or group Files tab and focus the attachment metadata. Visitors, blocked conversations, missing/unreferenced metadata, inconsistent participant metadata, unrelated groups and stale membership/file targets are excluded or rejected.

Tested: 668/668 isolated headless Edge assertions passed with no captured app errors, retaining all 641 previous checks. Added file filtering, scope/deduplication, search/context/empty recovery, native exact-message/group-file navigation and focus, stale/foreign targets, blocking, membership loss, escaped file names, account isolation, visitor gating and fresh-page metadata persistence. Existing 320/375/768/1280 responsive coverage retained. New tests verify file metadata and navigation, not new upload/download byte delivery. Fixtures are fictional local accounts, not two verified production accounts.

Preserved: 41 screens, all 145 requirement IDs, prior records/storage key, before-source backup and historical evidence. No backend, attachments or secrets changed.

Not connected: cloud attachment storage, scanning/quarantine, production file permissions, shared backend groups/messages, cross-device synchronization and real authenticated account verification delivery. Files remain local test data; a metadata entry does not guarantee its stored bytes are available on another device. Local guards are not production authorization boundaries.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%. All 12 gates require per-variable evidence for this exact build before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Regression: node tests/organized-navigation.mjs on Windows with Node and Edge. README retains deployment instructions. Live source-integrity/read-only smoke checks are separate from production acceptance.
