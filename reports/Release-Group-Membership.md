# Group Membership release
Build: V16-group-membership-2026-10-03y.

Built: Approval-required groups support local owner/admin/moderator review through a compact Members queue. Approve/Decline requires a test reason; decisions record actor/time/history and approval adds one local membership. Requesters see their own status/reason, can cancel a pending request and re-request after decline/cancellation. Duplicate pending requests and decided-request replays are rejected. Queue details/decision forms are shown only to local group managers. Invite-only requests stay pending with explicit unconnected invitation delivery; direct approval cannot bypass that limit.

Tested: 569/569 isolated headless Edge assertions passed without captured app errors. All 539 prior checks retained plus 26 membership workflow checks and queue layouts at 320/375/768/1280. Includes native submit/cancel, visitor/nonmanager guards, validation/stale targets, decisions/history, cancellation/re-request, idempotent membership, invite bypass rejection and fresh-page persistence. Local account fixtures are not real verified production accounts; full production/security acceptance remains pending.

Preserved: 41 screens, all 145 requirement IDs and the existing storage key. Membership history is an additive array; existing groups/requests and previous release evidence are retained. Before-source backup preserved. No backend or secret changes.

Not connected: server-enforced group permissions, cross-device group/member synchronization, real invitation/notification delivery, organization verification, production moderation and file scanning. Local review controls are usability safeguards, not a production authorization boundary. All membership decisions are browser-local test actions.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; each variable needs exact-build evidence for all 12 required conditions before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Regression: node tests/organized-navigation.mjs on Windows with Node and Edge. README includes deployment instructions. Live integrity and read-only API health recorded separately after publication.
