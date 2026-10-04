# Message editing, removal and history
Build: V16-message-history-2026-10-04aj.

Built locally: sender-only text editing and confirmed removal from the conversation. Edited messages show a timestamp; removal clears the live body, attachment reference, quoted-parent reference and reactions, then displays Message removed. Sender change history records event, timestamp, actor and previous text/file reference. History is displayed only in that sender's account view. Native Edit/Remove dialogs include validation, cancellation and feedback.

Guards: recipients/visitors cannot edit or remove another sender's message; blocked conversations and stale revisions are rejected. Switching account or blocking the conversation closes and clears the editor. Removed messages cannot be edited, reacted to or selected for a new reply. Existing quotes show an unavailable-original fallback. Search and recipient/My Hub previews exclude removed text. Private bookmarks on removed placeholders can still be cleared.

Tested: 820/820 isolated Edge browser assertions passed, including 37 new edit/removal/history and responsive-modal checks. Scope covers native controls, validation, ownership, stale edits, confirmation, escaping, account/block changes, quote fallback, attachment denial, bookmark cleanup, recipient search, fresh-page persistence, My Hub previews and both dialog modes at 320/375/768/1280. Backend regression: 40/40 simulated-database API contract assertions and 28/28 provider/store tests passed. These scoped checks do not fulfill all 12 production gates.

Limits: removal is not permanent erasure. Sender-only UI history, attachment metadata and IndexedDB bytes remain on the device. The local prototype is not a production security boundary. Secure server authorization, audit access, retention, erasure, synchronization and moderation are unconnected. No real production user/message record was changed.

Preserved: 41 screens and all 146 requirement IDs, earlier onboarding, reactions, private marks, quotations and navigation, plus before-source snapshots and historical evidence.

Remaining: threaded conversation layout, group reaction tools, voice notes, notifications/calling, secure messaging backend and real two-account/device/network acceptance. Binary cleanup for removed or abandoned uploads remains to be implemented.

Publication: built and tested locally; NOT DEPLOYED. Publishing still awaits approval after automatic review rejected the source push. Live services remain on V16-provider-persistence-2026-10-03af. No new production migration or provider flow was executed.

Status: 0 green, 113 yellow, 33 red. Strict production-verified completion remains 0%; all 12 gates are required before GREEN.
