# Message tools and gap review
Build: V16-message-tools-2026-10-04ah.

Built locally: direct messages now have toggleable like/dislike, Care and Thanks emoji reactions, private bookmarks, private useful marks and saved/useful inbox filters. Like/dislike are mutually exclusive. Controls are grouped under React & save to keep message cards organized. Existing recipient selection, replies, attachments, calls placeholders, Block and Report remain. Attachment download now checks membership, conversation participation and blocks before looking up the stored blob.

Tested: 760/760 isolated Edge browser assertions passed, including 25 new message checks for native buttons, visitor/member gating, other-pair rejection, private marks across account switches, reaction independence, block denial, attachment access, empty-filter recovery and persistence on a new page. Responsive checks remain at 320/375/768/1280. The server source is unchanged from the locally tested onboarding update; provider/store and API contract results are recorded separately.

Preserved: all 41 screens and 146 requirement IDs. VAR-044 records these direct-message enhancements; the remaining message subfeatures are explicitly listed as gaps. Existing account, request, group, file and navigation features are retained.

Not connected: all messaging remains a clearly labelled browser-local prototype. No cross-device delivery, real authenticated messaging backend, moderation service, push notifications or calling is connected. Message marks are private within the prototype account UI, not a production security boundary. Quoted/threaded replies, edit/delete history, group-chat reaction tools and later voice notes remain work to do. See Feature-Gap-Audit.md for the broader review.

Status: BUILT AND TESTED LOCALLY; NOT DEPLOYED. Publishing remains pending after automatic approval review rejected the source push. The live site remains V16-provider-persistence-2026-10-03af. The local build includes the previously tested account onboarding and verification guards. No new production database changes or provider flows have been executed.

Register: 0 green, 113 yellow, 33 red. Strict production-verified completion: 0%. All 12 gates are required before GREEN. Local browser counts are not the full production checklist.
