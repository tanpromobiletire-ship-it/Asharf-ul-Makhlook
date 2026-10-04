# Build comparison and latest preview

Current build: V16-build-comparison-2026-10-04ak.
Previous local build: V16-message-history-2026-10-04aj.
Live build: V16-provider-persistence-2026-10-03af.

## Changed from previous to current

Added a What changed section directly on the Progress report page. It identifies current, previous and live versions; separates added work from retained work; shows remaining integrations; and links to Messages, all variables, verification gates and the current release report. Previously these details were spread across progress totals and separate release files.

Retained sender editing, confirmed conversation removal, sender change history, quoted replies, reactions, private bookmarks/useful marks, all 41 screens and all 146 requirements. No existing feature was removed.

## Tested

827/827 isolated Edge browser assertions passed with no recorded runtime errors or failures, up from 820 in the previous build. Seven new checks cover the comparison, build labels, retained-data explanation, three navigation routes and report destination. The existing browser regression includes four responsive widths and refresh persistence. Backend source is unchanged from the previous build; its 40 simulated-database API checks and 28 provider/store checks are historical regression evidence and were not rerun for this presentation-only change.

The local HTTP preview serves the exact current build on this computer. The preview and report response were checked; backend and environment files are excluded from this preview server.

## Not connected / not deployed

Production publishing awaits explicit approval after automatic review rejected the GitHub push. The public site still runs the earlier af build. Secure server messaging, notification delivery, permanent erasure and real two-account/device/network acceptance remain pending. Conversation removal is not permanent deletion: sender history and local attachment data remain.

146 requirements: 0 green, 113 yellow, 33 red. Strict production-verified completion is 0%. Browser regression checks do not fulfill the complete 12-gate production checklist.

Latest local preview: http://127.0.0.1:18777/#progress
Public site: https://asharf-ul-makhlook.onrender.com
