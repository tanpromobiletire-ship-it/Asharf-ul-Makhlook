# Quoted replies — local release
Build: V16-message-replies-2026-10-04ai.

Built: direct-message Reply now selects an exact parent and recipient, shows an escaped original-message excerpt in the composer, supports cancel, and clears the reply when the recipient is changed through the selector. Sent responses store replyToId rather than a copied original body. View original clears inbox filters and focuses the exact original card. Pending selection is private per local account and survives refresh; message text drafts are not persisted by this change.

Safety and recovery: quotations resolve only within the same participant pair and available conversation. Different-conversation, blocked and missing originals reveal no quote body. An unavailable original leaves a cancel control visible; quoted sending is rejected until resolved or cancelled. After attachment storage returns, sending rechecks the account, recipient, reply selection, blocks and recipient privacy settings.

Tested: 783/783 isolated Edge assertions, including 23 quoted-reply checks. Coverage includes native Reply, escaped excerpts, recipient changes, cancellation, parent references, exact navigation, forged references, account separation, blocked/missing originals, new-page persistence and account/block/cancel changes during mocked attachment storage. 40 simulated-database API contract assertions and 28 provider/store tests passed. Responsive checks remain at 320/375/768/1280. This is scoped test evidence, not full production verification.

Preserved: 41 screens, all 146 requirements and the prior local onboarding, reactions, bookmarks, useful marks, search and attachment controls. Before-source snapshots and historical receipts remain.

Remaining: threaded conversation layout, message edit/delete history, group reaction tools, voice notes, notifications, secure backend delivery/storage, real authenticated accounts and cross-device acceptance. Cleanup of binary blobs after abandoned uploads needs further work. Prototype storage is not a production privacy boundary.

Publication: BUILT AND TESTED LOCALLY; NOT DEPLOYED. Automatic approval review previously rejected the source push, which still awaits explicit approval. Live services remain on V16-provider-persistence-2026-10-03af. No new production migration or provider flow has been run.

Register: 0 green, 113 yellow, 33 red. Strict production-verified completion remains 0%; all 12 conditions are required before GREEN.
