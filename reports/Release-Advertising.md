# Advertising — before and after

Current local build: V16-advertiser-demo-2026-10-04am.
Previous local build: V16-conversation-tiles-2026-10-04al.
Published build remains V16-provider-persistence-2026-10-03af.

| Component | Before | Now |
|---|---|---|
| Advertiser workspace | Not present | Seven organized tabs: campaigns, creation, payments, review, wallets, transactions, connections |
| Weekly pricing | Not present | US$1 per week; 1–52 whole weeks |
| Currency choices | Not present | USD, CAD, MXN, BTC, ETH, USDT |
| Conversion surcharge | Not present | 0% for USD/CAD/USDT; 3% for MXN/BTC/ETH |
| Conversion source | Not present | CoinGecko only; retrieval time, five-minute expiry, precise rounding and no fallback |
| Campaign records | Not present | Create, view, edit, search, filter, cancel, revision history and refresh persistence |
| Review | Not present | Explicit fictional reviewer mode, independent reviewer, approve/request changes/reject and reasons |
| Checkout | Not present | Fresh quote, acknowledgement and one clearly marked simulated receipt |
| Wallets | Not present | BTC/ETH/USDT demo references, compatible network selection, archive and account scope |
| Transactions | Not present | Demo asset/network/quote/fee/history; no invented blockchain hash or confirmations |
| Register | 146 requirements, 41 screens | 171 requirements, 42 screens; prior IDs retained |

## How pricing works

Base price = US$1 × weeks. A conversion surcharge is added in USD before conversion: 3% for MXN, BTC and ETH, zero for USD, CAD and USDT. The result is converted using the displayed CoinGecko quote, rounded half-up to the configured currency precision. Tax, blockchain/network fees and processor fees are not calculated; real checkout stays disconnected.

CAD/MXN/BTC/ETH units per USD are derived from CoinGecko BTC exchange rates divided by its BTC/USD rate. USDT uses the reciprocal of CoinGecko's tether/USD quote. USDT is not assumed to equal exactly one dollar. Quotes expire after five minutes; missing, stale, invalid or unavailable rates stop non-USD checkout. USD uses the fixed base price without a conversion feed.

The backend reads two public endpoints from the single provider. Rates are cached, concurrent requests are combined, and failures do not silently switch providers. An optional COINGECKO_DEMO_API_KEY stays server-side. This source worked in a live read-only local preview check; ongoing API availability and commercial plan/terms still need production configuration.

Source documentation:
- https://docs.coingecko.com/reference/exchange-rates
- https://docs.coingecko.com/reference/simple-price

## Built and tested

TEST DATA campaigns, wallet references and receipts persist in this browser. Local account scoping is a prototype convenience, not server authorization. No card information, wallet address, private key or recovery phrase is collected.

Passed: 969/969 isolated Edge browser assertions, 43/43 API contract checks and 45/45 Node provider/store/rate tests. Previous browser count: 854; this release adds 115 assertions. No browser runtime errors or failing assertions were recorded.

Tests cover validation, independent review, renewed edit consent, duplicate-payment prevention, account/revision races, quote expiry, surcharge exemptions, exact currency precision, wallet/network compatibility, storage failures and refresh persistence. Responsive checks cover 320, 375, 768 and 1280 pixels. Tests use fictional accounts, isolated storage and mocked payment/rate responses. The local preview separately retrieved CoinGecko rates and rejected backend source and environment-file URLs.

## Status and remaining work

🟢 0 verified; 🟡 125 in progress; 🔴 46 not started/not connected. Strict production-verified completion: 0%. All 12 production gates remain required for every feature; test counts do not replace those gates.

Not connected: real fiat/crypto collection, merchant settlement, deposit addresses, wallet signing, blockchain broadcast/confirmation monitoring, server campaign storage/authorization, ad delivery/inventory, recurring billing, refunds/disputes/reconciliation, production content/fraud controls, tax receipts, external marketing and real performance analytics. No money moved and no advertisement was published.

The 25 advertising/growth components each have their own status and evidence link in the workspace and full register. That register includes future integrations so they cannot disappear behind a demo button.

## Open and deploy

Latest preview on the connected Windows computer: http://127.0.0.1:18777/#advertising
Roadmap/status: http://127.0.0.1:18777/#variableAudit
Existing public website: https://asharf-ul-makhlook.onrender.com

Run node tests/organized-navigation.mjs on Windows with Edge and Node. Run node tests/api-contract.mjs and node --test server/advertising-rates.test.js server/provider-auth.test.js server/provider-flow-store.test.js using the actual repository test filenames.

Deploy the frontend repository root as a static site; deploy the backend from server with npm install --omit=dev and npm start. Both need the same approved code revision. The frontend uses GET /api/advertising/rates on its configured backend; this new route is not on the published backend yet. Database credentials and optional provider keys belong in private hosting environment settings.

Not deployed. Automatic approval review previously rejected the push because exact repository/branch approval was missing. No push, deployment, production migration, real payment or marketing launch occurred during this update.
