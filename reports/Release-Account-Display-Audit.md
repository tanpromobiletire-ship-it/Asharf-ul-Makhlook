# Account, messaging and roadmap update

Build: V16-account-display-audit-2026-10-04ap. Previous published build: V16-conversion-diagnostics-2026-10-04ao.

Before: hidden reply controls could appear without a reply; the recipient list could be empty without a next step; profile fields and unblock controls were incomplete; progress evidence mixed old numbers with current status.

After: hidden controls stay hidden; empty recipients link to account setup and own-block management; profile editing supports phone, country, account type, validation, discard and save/error feedback; local blocks can be removed; message IDs use random UUIDs. Account sections have named shortcuts. Roadmap and progress show current-build catalog counts with implementation coverage clearly separated from production verification.

Tests for the exact current source: 1,159 Chrome assertions, 189 model/structure checks, 47 isolated API contract checks, and 58 Node server/provider/store tests passed. Browser widths cover desktop and mobile layouts; they are not separate physical devices or independent networks. Detailed source hashes and output evidence are in Account-Display-Results.json.

Ten fictional personas: TEST Leo and Omar (boys), Maya and Zara (girls), Daniel and Arjun (men), Sofia and Amina (women), Grace and Victor (seniors). Open Membership & profile, click Load the 10 test accounts, then Use test account. Loading preserves existing accounts/session and is idempotent. It sends no SMS/email and creates no production members. Shared demo password: DemoOnly!2026; never reuse it for real accounts. Each persona was exercised for local sign-in, profile changes/discard, messages, replies/reactions/bookmarks and persistence. Model checks cover each persona's block/unblock and privacy rejection; browser checks cover the unblock UI and fresh-page persistence. All other workflows also ran in the existing regression suite, but every persona/feature combination has not been exhausted.

All 171 requirement IDs and 42 screens retained. 0 GREEN, 125 YELLOW, 46 RED. Production-verified completion is 0%. 73% implementation coverage means 125/171 have at least partial work; it is not a verified complete-build percentage. Full 12-gate feature acceptance remains outstanding.

Still missing or incomplete: approved production-account/profile synchronization, SMS/email verification delivery, provider setup, recovery/password changes/MFA, age assurance/safeguarding, server-enforced privacy, real-time cross-device messaging/read receipts/notifications, secure shared attachments, full data erasure, production calling/TURN/background ringing, complete group/moderation/storage permissions, screened aid review/fulfillment, official safety feeds, real merchant payments/wallet settlement and ad delivery. CoinGecko last returned upstream HTTP 429 on the published backend; non-USD conversion stays blocked without fresh rates.

The two real emails, phone numbers and supplied address are not embedded in this update or public fixtures. No messages were sent to those contacts. Real verification tests remain blocked by missing provider integration; fictional personas do not satisfy the two real authenticated accounts gate.

Publication and live evidence: see Publication-Latest.md. Application source is tested before deployment; no real account/contact records are manually changed by these tests.
