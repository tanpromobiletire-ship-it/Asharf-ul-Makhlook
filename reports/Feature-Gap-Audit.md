# Feature gap audit — Asharf-ul-Makhlook
Build: V16-conversion-diagnostics-2026-10-04ao
Publication: source live; conversion-feed retrieval unavailable and production acceptance incomplete.
Coverage: 42 screens and all 171 registered requirement IDs retained. No requirement was removed from the register.

## Message improvements completed in this local build
Like/dislike toggles, Care/Thanks emoji reactions, private bookmarks, private useful marks, saved/useful filters, organized React & save controls, participant/block checks for attachment downloads; quoted replies with safe original navigation and refresh persistence; sender edit/removal and local change history.
990 browser assertions passed. Backend unchanged; preceding build passed 43 API and 45 provider/store/rate checks. These are scoped tests, not full production verification.

## Specific remaining gaps
| Area | Current implementation | Missing / next work |
|---|---|---|
| Conversation navigation | Searchable local tiles, safe previews, shared My Hub opener, missing-account exclusion | Server synchronization and full threaded layout |
| Direct message replies | Quoted original, cancel, exact navigation and persisted per-account selection | Threaded conversation layout and production delivery |
| Direct messages | Browser-local messages and IndexedDB attachments | Real authenticated service, delivery/retry status, synchronization and server-side authorization |
| Message history | Sender-only local edit/removal/history with revision guards | Secure server authorization/auditing, retention and permanent erasure |
| Group chat | Local chat, workspace files, tasks, events and updates | Reaction/bookmark tools and production moderation/delivery |
| Voice notes | Not connected | Capture/playback, upload/storage, permission and moderation checks |
| Notifications | Not connected | Unified replies/group/file/cause notices, preferences, opt-out and push delivery |
| Calling | Buttons and local privacy checks | Signaling, TURN/STUN, ringing, cross-network audio/video and mobile integration |
| Files/media | Local uploads and browser persistence | Production object storage, scanning, limits, access control and cross-device delivery |
| Membership | Pending email registration, local roles and staged provider engine | SMS/email verification delivery, provider credentials/identity mapping, recovery/MFA and abuse limits |
| Anonymous Help | Local consent, review, appeal and delivery demos | Verified aid partners/staff, secure case backend, duplicate/fraud controls, audit permissions and real aid delivery |
| Emergency/safety alerts | Labelled examples and source/expiry fields | Verified official feeds, source vetting, location consent and reliable urgent delivery |
| Statistics | Connected public visitor service and staged member aggregates | Several role/community/admin metrics, bot/retention controls and privacy-safe production acceptance |
| Legal/privacy | Prototype rules, mission and notices | Final terms/privacy policies, safeguards and regional launch review |
| All features | Screen shell and local prototype checks | Real end-to-end, two authenticated accounts, physical devices/networks and recorded production evidence |

## Complete requirement register: outstanding work
Status counts: 0 green, 113 yellow, 33 red. Strict production-verified completion: 0%.
Yellow means some implementation exists; red means missing or not connected. No row is fully production verified.
These are the tracked gaps from the current source, not a claim that every possible defect has been discovered.

| ID | Requirement | Status | Outstanding work |
|---|---|---|---|
| VAR-001 | Production account connection | 🟡 Yellow | Connect verification delivery, recovery/MFA and abuse limits; execute real two-account and full production verification. |
| VAR-002 | Public, member & admin statistics workspace | 🟡 Yellow | Complete all individual metric and authorization tests; see the detailed Statistics variables. |
| VAR-003 | Core navigation shell | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-004 | Role/view switcher | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-005 | User account & participation roles | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-006 | Local sign-in, session & profile | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-007 | Help request CRUD | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-008 | Case review workflow | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-009 | Corrections & appeals | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-010 | Aid delivery planning | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-011 | Concern reporting | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-012 | Giving shell | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-013 | Safety information shell | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-014 | Purpose & safeguards | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-015 | Roadmap status centre | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-016 | Local persistence | 🟡 Yellow | Replace with secure backend for real use. |
| VAR-017 | Responsive mobile pass | 🟡 Yellow | Re-run verification after layout changes. |
| VAR-018 | Accessibility acceptance | 🟡 Yellow | Re-run verification after UI changes. |
| VAR-019 | Automated regression checks | 🟡 Yellow | Run the audit release suites and complete the remaining workflow/device/production coverage. |
| VAR-020 | Privacy redaction acceptance | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-021 | Personal dashboard | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-022 | Documents & media uploads | 🟡 Yellow | Keep file persistence and permission checks covered by tests. |
| VAR-023 | Provider profile, skills & availability | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-024 | Matching preferences & suggested cases | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-025 | Safe accepted-offer handoff | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-026 | Provider trust profile & demo review | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-027 | Protected appointment scheduling | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-028 | Two-sided completion confirmation | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-029 | Dispute & escalation records | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-030 | Help offers & matching | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-031 | Local messaging & safety controls | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-032 | Permanent before/after release history | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-033 | Release preview screen | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-034 | Service directory & resources | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-035 | Provider availability calendar | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-036 | Case journey & milestone tracker | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-037 | Production verification matrix | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-038 | Current-version verification lab | 🟡 Yellow | Re-run current-version acceptance after any change; downgrade to yellow until reverified. |
| VAR-039 | Community videos & comments | 🟡 Yellow | Re-run current-build video/comment/reaction acceptance and verify persistence before green. |
| VAR-040 | Ask the World & Goodwill Hub | 🟡 Yellow | Production community synchronization, server authorization, moderation, verified accounts and physical-device acceptance pending. |
| VAR-041 | Goal-centered hub navigation | 🟡 Yellow | Complete production usability testing on desktop/mobile and record evidence before green. |
| VAR-042 | Visitor-to-member participation gate | 🟡 Yellow | Verify every participation action in production with signed-out and signed-in users before green. |
| VAR-043 | Community groups workspace | 🟡 Yellow | Move group data to the real backend, add moderation/invite approval, then run two-account cross-device testing. |
|||| VAR-044 | Direct messaging with file sharing | 🟡 Yellow | Finish threaded layout, group reaction tools, notifications, secure server edit/delete/audit/erasure policies, backend messaging and real two-account/device verification. |
| VAR-045 | Member privacy & communication preferences | 🟡 Yellow | Enforce settings server-side and verify against real authenticated accounts before green. |
| VAR-046 | Share & social accounts | 🟡 Yellow | Re-run current-version share acceptance after any change; downgrade to yellow until reverified. |
| VAR-047 | Percentage dashboard & per-variable reporting | 🟡 Yellow | Re-run percentage and matrix acceptance after any change; downgrade to yellow until reverified. |
| VAR-048 | Secure authentication | 🟡 Yellow | Complete security/account lifecycle work and positive real two-account tests. |
| VAR-049 | Role-based authorization | 🔴 Red | Enforce least privilege and resource ownership on the production API. |
| VAR-050 | Encrypted cloud database | 🟡 Yellow | Verify encryption, roles, retention, backups and persistent aid/community records. |
| VAR-051 | Production visitor analytics | 🟡 Yellow | Test visitor writes, duplicate/time-window counting, consent and bot handling. |
| VAR-052 | In-app voice & video calling | 🔴 Red | Implement signaling, TURN/STUN, permissions, call privacy, ringing/push, cross-network media and production call evidence. |
| VAR-053 | Audit logs | 🔴 Red | Add immutable activity/event logging. |
| VAR-054 | Identity verification | 🔴 Red | Select privacy-preserving verification approach. |
| VAR-055 | Translation service | 🔴 Red | Add reviewed translations and interpreter workflow. |
| VAR-056 | Caseworker operations | 🔴 Red | Define staffing, queues, supervision and training. |
| VAR-057 | Referral partners | 🔴 Red | Vet providers and define consent/data-sharing agreements. |
| VAR-058 | Payment processor | 🔴 Red | Implement compliant donation processing and reconciliation. |
| VAR-059 | Fund disbursement | 🔴 Red | Add approvals, fraud controls and reconciliation. |
| VAR-060 | Delivery/logistics partners | 🔴 Red | Integrate vetted partners with minimal data sharing. |
| VAR-061 | Live safety feeds | 🔴 Red | Use authoritative official sources and provenance. |
| VAR-062 | Notifications | 🔴 Red | Implement consent, preference and opt-out handling. |
| VAR-063 | Safeguarding escalation | 🔴 Red | Define monitored escalation and incident response. |
| VAR-064 | Legal/privacy review | 🔴 Red | Complete privacy, consumer, charity and data-law review. |
| VAR-065 | Production monitoring & incident response | 🟡 Yellow | Add monitored alerts, security monitoring and incident response owners. |
| VAR-066 | Help is not guaranteed; funding, review and delays | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-067 | Scam warnings: fees, pressure, passwords, codes, impersonators | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-068 | Request consent and consent record | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-069 | Language preference and human-assistance flag | 🟡 Yellow | Connect translation and trained assistance; test low-literacy use. |
| VAR-070 | Spoken instructions and unavailable-audio fallback | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-071 | No-document exception and assisted appeal | 🟡 Yellow | Add a fair exception workflow with human support. |
| VAR-072 | Screened caseworker access to identifying details | 🔴 Red | Verify staff and enforce private access on the server. |
| VAR-073 | Proportionate verification checklist | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-074 | Different second reviewer for large or repeated cases | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-075 | Independent appeal reviewer and resolution | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-076 | Duplicate claims and decision history | 🟡 Yellow | Secure backend casework, verified staff and all 12 production conditions remain pending. |
| VAR-077 | Anonymous donor/recipient identity separation | 🟡 Yellow | Enforce identity separation for real accounts and payments. |
| VAR-078 | No precise public location or medical/family exposure | 🟡 Yellow | Test every API, upload and permitted update for exposure. |
| VAR-079 | Shelter, meals, transit, treatment and supplies delivery | 🟡 Yellow | Add verified partners, service types, approval and fulfillment. |
| VAR-080 | Pooled fund and case-specific donor funding | 🟡 Yellow | Implement donations, pooled allocation and reconciliation. |
| VAR-081 | Medical support for vulnerable families | 🟡 Yellow | Connect vetted partners and accessible assisted intake. |
| VAR-082 | Addiction recovery and purpose rebuilding | 🟡 Yellow | Design nonjudgmental recovery referrals and reviewed support. |
| VAR-083 | Homelessness and safe overnight shelter | 🟡 Yellow | Connect safe shelter availability and supported booking. |
| VAR-084 | War-affected people: shelter, aid and human support | 🔴 Red | Implement verified relief referrals and privacy-preserving support. |
| VAR-085 | Major donors: housing, recovery and rebuilding reporting | 🔴 Red | Design contributions, approved updates and clear financial reports. |
| VAR-086 | Shared duty, kindness and service pathways | 🟡 Yellow | Verify recovery/service journeys and safeguarding. |
| VAR-087 | Crime alerts: robbery, murder and homicide | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-088 | Radiation hazard alerts | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-089 | Outbreak relative-risk areas and uncertainty | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-090 | Missile attack and air-raid alerts | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-091 | Earthquake alerts | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-092 | Tsunami alerts and evacuation guidance | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-093 | Fictional zombie scenario with FICTION label | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-094 | Alert sources, UTC issue/expiry and uncertainty | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-095 | Free urgent safety guidance and expanded subscriber reports | 🟡 Yellow | Verified official feeds, delivery, source vetting and full production acceptance are not connected. |
| VAR-096 | Regional legal review and launch jurisdictions | 🔴 Red | Set jurisdictions and obtain qualified reviews. |
| VAR-097 | Safeguarding, retention, deletion and consent policies | 🟡 Yellow | Implement retention, consent management, safeguarding and deletion. |
| VAR-098 | Data backups and database retention beyond October 31 | 🔴 Red | Arrange backups and retained hosting before real records. |
| VAR-099 | Loading, empty, success and error states across every form | 🟡 Yellow | Test each form, storage failure and recovery path. |
| VAR-100 | Every menu, icon and tile has a valid destination | 🟡 Yellow | Keep complete routing and keyboard/mobile acceptance. |
| VAR-101 | Screen reader and 200% text enlargement | 🟡 Yellow | Execute assistive-technology and zoom checks. |
| VAR-102 | Source files and deployment instructions | 🟡 Yellow | Verify fresh deployment and all required acceptance. |
| VAR-103 | Email verification delivery | 🔴 Red | Connect delivery, token expiry and verification lifecycle. |
| VAR-104 | SMS verification delivery | 🔴 Red | Connect consented delivery, limits and verification lifecycle. |
| VAR-105 | Account recovery and MFA | 🔴 Red | Implement and review recovery, MFA and abuse controls. |
| VAR-106 | Registration/login rate limits and abuse controls | 🔴 Red | Implement limits and test bypass/abuse handling. |
| VAR-107 | Secure video hosting and transcoding | 🔴 Red | Connect authorized hosting, scanning and transcoding. |
| VAR-108 | Content moderation and abuse reporting operations | 🟡 Yellow | Connect moderation, appeals, scanning and staff operations. |
| VAR-109 | Privacy-safe analytics consent and bot controls | 🔴 Red | Review collection and implement consent, bot and retention rules. |
| VAR-110 | Public: total visitors | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-111 | Public: visitors today | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-112 | Public: visitors this week | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-113 | Public: active now | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-114 | Public: countries and regions | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-115 | Members: registered active accounts | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-116 | Members: active this week | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-117 | Members: new today | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-118 | Members: new this week | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-119 | Members: new this month | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-120 | Members: Need Help role count | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-121 | Members: Help Provider role count | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-122 | Members: Both role count | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-123 | Members: groups created | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-124 | Members: causes joined | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-125 | Members: messages | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-126 | Members: conversations | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-127 | Admin: moderation reports | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-128 | Admin: safeguarding concerns | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-129 | Admin: high-priority defects | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-130 | Admin: failed signups | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-131 | Admin: verification rates | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-132 | Admin: suspicious traffic | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-133 | Admin: retention | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-134 | Admin: storage usage | 🔴 Red | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-135 | Admin: infrastructure health | 🟡 Yellow | Complete the production integration and privacy/access tests for this specific metric. |
| VAR-136 | Facebook profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-137 | Instagram profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-138 | X profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-139 | LinkedIn profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-140 | YouTube profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-141 | TikTok profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-142 | Telegram profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-143 | WhatsApp profile / sharing | 🟡 Yellow | Test this profile/link on the current build; connect provider authorization only if required. |
| VAR-144 | Complete variable register & omission audit | 🟡 Yellow | Execute current-build register, export, status, route and coverage checks; retain evidence. |
| VAR-145 | Free-help mission: humans, animals, plants and all living things | 🟡 Yellow | Verify real operations, care partners, permissions and all 12 production conditions. |
| VAR-146 | Google, Microsoft and Apple account sign-in | 🟡 Yellow | Configure approved provider apps and credentials; finish durable identity mapping/onboarding, mandatory phone verification, recovery, abuse controls and real provider end-to-end/two-account/device tests. |

Publishing remains awaiting approval after automatic review blocked the repository push. Live services still use the previous provider-persistence build. No new database migration, provider login or production messaging test was performed.

Current comparison evidence: reports/Release-Conversation-Tiles.md. This build passed 854 isolated browser assertions; backend evidence is unchanged historical regression evidence. Publication pending.

## Advertising components added

| Requirement | Current scope | Missing / next |
|---|---|---|
| Advertising campaign creation and management | Local TEST DATA campaigns support create/edit/search/filter, ownership, revision checks and refresh persistence. | Connect authenticated campaign backend, storage permissions, production lifecycle and acceptance. |
| Advertising USD amount validation | USD/CAD/MXN/BTC/ETH/USDT quotes use precise integer decimal storage and rounding. Non-USD conversion requires a fresh CoinGecko snapshot; USD/CAD/USDT have no conversion surcharge. | Connect supported settlement, currency-specific pricing, merchant configuration and real payment verification. |
| Advertising CAD amount validation | USD/CAD/MXN/BTC/ETH/USDT quotes use precise integer decimal storage and rounding. Non-USD conversion requires a fresh CoinGecko snapshot; USD/CAD/USDT have no conversion surcharge. | Connect supported settlement, currency-specific pricing, merchant configuration and real payment verification. |
| Advertising MXN amount validation | USD/CAD/MXN/BTC/ETH/USDT quotes use precise integer decimal storage and rounding. Non-USD conversion requires a fresh CoinGecko snapshot; USD/CAD/USDT have no conversion surcharge. | Connect supported settlement, currency-specific pricing, merchant configuration and real payment verification. |
| Advertising BTC amount validation | USD/CAD/MXN/BTC/ETH/USDT quotes use precise integer decimal storage and rounding. Non-USD conversion requires a fresh CoinGecko snapshot; USD/CAD/USDT have no conversion surcharge. | Connect supported settlement, currency-specific pricing, merchant configuration and real payment verification. |
| Advertising ETH amount validation | USD/CAD/MXN/BTC/ETH/USDT quotes use precise integer decimal storage and rounding. Non-USD conversion requires a fresh CoinGecko snapshot; USD/CAD/USDT have no conversion surcharge. | Connect supported settlement, currency-specific pricing, merchant configuration and real payment verification. |
| Advertising USDT amount validation | USDT is supported with exact demo decimal storage and zero conversion surcharge; no fixed peg is assumed. | Verify token/network decimals and connect real USDT quote, wallet and settlement. |
| Advertising review workflow | Explicit local reviewer simulation supports approve, changes or reject with required reason and history. Self-review is rejected. | Implement authorized real reviewers, moderation, appeals, escalation and review notifications. |
| Advertising checkout and demo receipts | Owner-only checkout records clearly labelled fictional receipts; duplicate payments and account/revision races are guarded. No money moves. | Implement real checkout, verified payment webhooks, reconciliation and production receipt permissions. |
| Advertising fiat payment processing | No real USD/CAD/MXN processor configured. | Select and configure merchant account, supported countries, cards/payment methods and verified webhooks. |
| Advertising crypto payment processing | No real BTC/ETH/USDT wallets or payment service configured; no addresses or private keys collected. | Choose custody/provider model; verify network, quote expiry, confirmations, fees and settlement. |
| Advertising weekly pricing and conversion quotes | US$1/week. USD/CAD/USDT surcharge 0%; MXN/BTC/ETH 3%. CoinGecko-only conversions have source, retrieval, expiry and precise rounding. | Verify authoritative server-issued price locks, rate licensing, fees/taxes and actual merchant payment acceptance. |
| Advertising Sponsored delivery and inventory | Escaped Sponsored previews only; no live ad placement. | Implement authorized scheduling, inventory, start/pause/end controls and delivery eligibility after verified payment. |
| Advertising refunds disputes and reconciliation | Demo receipts are retained; no real refunds or disputes processed. | Implement cancellation policy, refunds, chargebacks, crypto refund policy and ledger reconciliation. |
| Advertising fraud and content moderation | Input validation and local review simulation only. | Implement website/content review, restricted categories, fraud screening, abuse reporting and appeal handling. |
| Advertising impressions clicks and performance | No fabricated performance counters are displayed. | Implement privacy-aware measurement, bot filtering, attribution and honest campaign reports. |
| Advertising platform self-promotion campaigns | Worldwide paid and free promotion requested; campaigns are not launched. | Define audiences, consented public content, budgets, multilingual drafts and approved launch controls. |
| Advertising search visibility and sitemap | No new search-engine configuration made in this build. | Implement public indexable pages, metadata, sitemap and Search Console ownership verification. |
| Advertising external marketing channels | No social account or ad-network posting integration connected. | Connect approved owned accounts and advertising networks with scopes, budgets, scheduling and stop controls. |
| Advertising merchant records and launch readiness | No production merchant billing, tax receipts or finalized advertising terms. | Configure merchant identity, invoicing, retention, terms, policies and jurisdiction-specific launch review. |
| Advertising real end-to-end acceptance | Scoped local tests do not certify paid advertising. | Complete all 12 gates with real accounts, test-mode processor flows, devices/networks and recorded production evidence. |
| Advertising wallet and network references | Owner-scoped demo BTC/ETH/USDT wallet references support compatible networks and archiving. No addresses, keys or signatures. | Connect verified merchant wallet/custody model, token contracts, network IDs and secure signing/checkout. |
| Advertising transaction records and history | Crypto demo receipts record asset/network/amount/quote/fee/history; chain hashes and confirmations remain null. | Connect real chain watchers, transaction verification, explorers, replay/reorganization controls and reconciliation. |
| Advertising blockchain broadcast and confirmations | No real transaction broadcast, address generation or confirmations. | Implement matching assets and chains, broadcast status, pending/failed/confirmed records, finality and settlement. |
| Advertising quote expiry and payment exceptions | Expired local quotes fail closed; no real under/over/late-payment processing. | Implement authoritative quotes, idempotent webhooks, expiry, late payments, underpayments/overpayments and refund policies. |

## Advertiser workflow follow-up
Campaign copies create unsaved fresh drafts; wallet label/history/restore controls preserve network and receipt identity; receipts have full quote details. GitHub authentication/repository permissions checked read-only. No push or real payment occurred.

## Conversion diagnostics
Safe failure categories, Retry-After, capped exponential backoff, customer guidance, owner setup links and secret-exclusion tests are implemented. 1014 browser, 47 API and 58 Node tests passed. These do not prove the external feed has recovered; read current publication evidence.
