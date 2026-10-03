# Group Workspace release
Build: V16-group-workspace-2026-10-03x.

Built: All seven planned group tabs, including Updates. Owner/admin/moderator test announcements with title/body validation, local role guards and escaped display. Group members can move tasks between Open, In progress and Done, reopen work, and preserve a status-change history. Visitor/nonmember actions are rejected, invalid task targets/statuses are rejected and repeated same-status actions add no duplicate history. Updates and task controls clearly state browser-local storage and no notification delivery.

Tested: 539/539 isolated headless Edge assertions passed without captured application errors. All 507 earlier checks retained plus the Updates-tab check, 23 announcement/task assertions and eight Tasks/Updates panel layout checks across 320/375/768/1280 widths. Tests cover native submit/buttons, role and membership guards, invalid lengths/test labels, escaped markup, task history/reopening and fresh-page persistence. Local fixtures are not real verified production accounts; full production/security acceptance remains pending.

Preserved: all 41 screens, 145 requirement IDs, saved-record schema and storage key. Legacy groups get an empty updates array without losing existing content. Before-source backup and historical releases preserved. No backend or secrets changed.

Not connected: group backend synchronization, server-enforced ownership/membership, verification delivery, invite approvals, production moderation/file scanning, notification delivery and calling. Local role/task controls are usability safeguards, not a production security boundary. Task Done is a task state, not GREEN project acceptance.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; every variable needs exact-build evidence for all 12 conditions before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Regression command: node tests/organized-navigation.mjs on Windows with Node and Edge. README includes deployment instructions. Live integrity and read-only health recorded separately.

Live verification: All 25 live source-integrity and read-only smoke checks passed at 2026-10-03T15:18:01.258Z for source commit 408dffb9c8d50d1f886c14fec2bc8dcfe54327bd. Published HTML matches the tested source after newline normalization and the existing API/database health check passed. See Group-Workspace-Live-Results.json. These checks do not constitute full production acceptance or change status counts.
