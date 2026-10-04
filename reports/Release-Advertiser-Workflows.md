# Advertiser workflows — before and after

Current local build: V16-advertiser-workflows-2026-10-04an.
Previous local build: V16-advertiser-demo-2026-10-04am.
Published build remains V16-provider-persistence-2026-10-03af.

| Area | Before | After |
|---|---|---|
| Rejected/cancelled campaigns | No copy action | Copy any owned campaign into an unsaved new draft; confirm consent before saving |
| Review and payment history | No copy workflow | Fresh campaign identity; review decisions, payments and transaction records are not copied |
| Wallet references | Create/archive | Edit labels, retained history, archive and restore |
| Wallet identity | Demo asset/network selection | Asset/network fixed during label edits; revisions prevent stale saves |
| Account switching | Cleared wallet form | Also clears wallet edit context and unlocks the new-reference form |
| Receipts | Amount and timestamp | Expand source quote, base price, fee, amount, network and demo transaction reference |
| Progress button | Incorrectly said 146 variables | Corrected to 171 variables |
| GitHub | Not checked this round | Repository/branch, authenticated account, read access and write permissions verified |

GitHub connection: https://github.com/tanpromobiletire-ship-it/Asharf-ul-Makhlook on main.
Authentication succeeded as tanpromobiletire-ship-it. Remote main and local HEAD matched 26db89989d33c7a7687dc0ca51794cf3bae07bb6 at the connection check. Current changes remain local and unpushed. GitHub permissions alone do not authorize a previously rejected publication action.

990/990 isolated Chrome browser assertions passed with no recorded runtime errors or failures. Previous count 969; 21 additional assertions. Edge timed out twice without results; the successful run used Chrome. Those Edge runs are not recorded as passes.

The browser suite uses fictional accounts, isolated test storage and mocked external responses. Added coverage includes membership gates, native copy/edit/restore buttons, fresh consent, new identities, unchanged receipts, wallet ownership, immutable asset/network, stale revisions, escaped labels, account-switch cleanup, history and refresh persistence. Four responsive widths remain covered.

Backend source is unchanged from the preceding advertising release: 43 API contract checks and 45 provider/store/rate tests passed for those source hashes in that release; they were not rerun for this frontend-only follow-up.

All 42 screens and 171 requirement IDs remain. Status is unchanged: 🟢 0 production verified, 🟡 125 in progress, 🔴 46 not started/not connected. Strict production-verified completion remains 0%. The 12 production verification gates remain incomplete.

Pricing is retained: US$1/week; no conversion surcharge for USD/CAD/USDT; 3% for MXN/BTC/ETH. CoinGecko remains the single conversion provider, with five-minute expiry and no fallback or fixed USDT peg.

Not connected: real payment collection, wallet connection/signing, blockchain broadcast and confirmation monitoring, campaign backend authorization/storage, live ad placement, performance analytics, refunds and external marketing. No real money or ad campaign was sent.

Preview on the connected Windows computer: http://127.0.0.1:18777/#advertising
Progress: http://127.0.0.1:18777/#progress
Existing public site: https://asharf-ul-makhlook.onrender.com

Source review copy is in ADVERTISER-WORKFLOWS-REVIEW beside the existing repo on the computer. Deployment instructions remain in README.md and Release-Advertising.md. Both frontend and backend must use the approved revision before production testing.

Not deployed. Automatic approval review previously rejected the push for missing exact repository/branch approval. This connection check did not retry that push or change any Render service.
