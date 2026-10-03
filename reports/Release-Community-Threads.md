# Community Threads release
Build: V16-community-threads-2026-10-03v.

Built: Ask the World responses now have compact native Reply details/forms, reply-to-reply relationships, public parent-author context and capped visual indentation. Member-only submission is enforced in the handler, stale parent/post targets and invalid lengths are rejected, text is escaped, and reply IDs are unique. Legacy responses without parent IDs remain readable; orphan/cyclic thread records render once without recursive loops. Reply reactions use delegated safe data attributes. Cause-board Open buttons clear filters, open the selected cause, focus it and scroll to it.

Tested: 485/485 isolated headless Edge assertions passed. All earlier checks retained plus 17 thread/cause assertions: visitor preview versus gated submit/direct function, member native submit, reply-to-reply relationships, IDs, stale targets, blank/overlong text, escaped markup, delegated reaction targeting, legacy orphan/cycle rendering, selected-cause navigation, refresh persistence. Responsive checks include 320/375/768/1280 widths. No captured application errors. Local account fixtures are not two real verified production accounts; this is scoped regression, not full security/production acceptance.

Preserved: all 41 screens, 145 requirements and existing saved records/storage key. Before-source backup retained on the connected development computer. Earlier release/evidence files remain historical. No backend or secret changes.

Not connected: community backend synchronization, server-enforced permissions, account verification delivery, moderation/abuse operations, notification delivery and real messaging/calling. Local handlers are usability safeguards, not a production security boundary. Replies and reactions currently stay in this browser.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; all 12 conditions require per-variable exact-build evidence before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Run node tests/organized-navigation.mjs on Windows with Node and Edge. README includes deployment instructions. Live source integrity and read-only API health are recorded separately after publication.

Live verification: All 21 live source-integrity and read-only smoke checks passed at 2026-10-03T14:50:03.627Z for source commit 40055593e456cedddfda81e59900044ab372a772. Published HTML matches the tested source after newline normalization, and the existing API/database health check passed. See Community-Threads-Live-Results.json. These checks do not constitute full production acceptance or change status counts.
