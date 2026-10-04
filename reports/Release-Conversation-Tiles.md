# Before and after — conversation navigation

Current local build: V16-conversation-tiles-2026-10-04al.
Before: V16-build-comparison-2026-10-04ak.
Public website: V16-provider-persistence-2026-10-03af (unchanged).

| Area | Before | After |
|---|---|---|
| Messages navigation | Mixed inbox and recipient dropdown | One tile per accessible conversation, with count and latest-message preview |
| Finding a conversation | Inbox text search | Separate conversation search by member or latest preview; empty-state guidance |
| Opening a conversation | Manual recipient/filter selection | Tile selects the partner, clears incompatible inbox filters and focuses the conversation heading |
| Reply selection | Could remain selected while entering a different conversation from My Hub | Reply selection for a different recipient is cancelled; typed message text is retained |
| My Hub navigation | Separate conversation-opening logic | Uses the same conversation opener; keeps composer focus |
| Missing accounts | Absent from My Hub but still counted in inbox | Excluded consistently from both views |
| Safety of previews | Existing My Hub removal handling | Tile previews reuse those checks; removed messages show a placeholder; names and previews are escaped |
| On-page report | Comparison for the earlier build | Updated before/after description and link to this release report |
| Browser checks | 827 passing assertions | 854 passing assertions; 27 additional checks |

## Built and tested scope

Built locally: conversation tiles, counts, safe previews, search, membership gate, selected-state indication, shared My Hub navigation and orphan-account exclusion. Selected recipient preferences survive refresh. Conversation search/filter controls are temporary view state, not saved records.

Tested: 854/854 isolated Edge browser assertions passed with no recorded runtime errors or failures. New checks cover visitor gates, accessible-account scope, blocked/missing partners, ordering/counts, removal/attachment previews, escaping, search and empty states, native tile clicks, hidden-filter clearing, quote cancellation, focus, selected-state accessibility, account changes, refresh persistence and four responsive widths (320, 375, 768, 1280). The existing regression suite also passed.

Backend source is unchanged in this round. The earlier 40 simulated-database API assertions and 28 provider/store tests remain historical evidence; they were not rerun for this frontend change. These counts are not the user's 12 production verification gates.

The local preview's HTML and report responses were checked, together with rejection of backend source and environment-file routes. Before-source snapshot, current source hash, browser evidence and complete requirements register are retained.

## Preserved and remaining

41 screens and all 146 requirements retained. VAR-044 evidence now includes conversation navigation. Status stays 0 green, 113 yellow, 33 red; strict production-verified completion stays 0%. No item has passed all 12 production conditions.

Secure server messaging, real delivery, notifications, full threaded layout, group reaction tools, voice notes, permanent erasure and real two-account/device/network acceptance remain unfinished. Local prototype accounts are not production authentication. Removal leaves retained sender history and local attachment data; local UI checks are not a production security boundary.

## Open the site

Latest preview on the connected Windows computer: http://127.0.0.1:18777/#messages
Before/after page: http://127.0.0.1:18777/#progress
Public site: https://asharf-ul-makhlook.onrender.com

Not deployed: automatic approval review rejected the GitHub push because explicit approval for that exact push was missing. No push, production migration or real message delivery occurred in this round.
