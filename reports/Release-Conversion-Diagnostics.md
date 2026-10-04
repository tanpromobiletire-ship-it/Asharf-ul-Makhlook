# Conversion connection — before and after

Current build: V16-conversion-diagnostics-2026-10-04ao.
Previous build: V16-advertiser-workflows-2026-10-04an.
The previous release was published from the original repository on main. This report records the tested candidate before its deployment; Publication-Latest.md records the latest delivery state.

| Area | Before | Now |
|---|---|---|
| Provider errors | Every failure returned generic 503 | Safe reason for access required/refused, rate limit, provider outage, timeout/network, stale or invalid data |
| Customer guidance | Generic unavailable message | Plain-language explanation, waiting guidance, and owner connection information |
| Retry handling | Fixed 30-second server backoff | Bounded Retry-After guidance and exponential server backoff, capped at five minutes |
| Repeated clicks | No client cooldown | Duplicate checks blocked while loading or cooling down; no automatic provider polling |
| Owner setup | Limited explanation | Collapsed owner guide with official documentation; keys belong in backend environment only |
| Diagnostics privacy | No cause information | Allowlisted fields only; raw bodies, error messages and credentials excluded from responses/logs |
| Current-build evidence | 990 browser, 43 API, 45 Node tests | 1014 browser, 47 API, 58 Node tests |

All 1014 Chrome assertions passed with no recorded runtime errors or failed assertions. 47 simulated-database API contract checks and 58 provider/store/rate tests passed. The rate module now has 30 tests. Added browser coverage includes all diagnostic messages, failed snapshots, retry guards, sanitized hostile input, timeouts, recovery, duplicate checks, connection status and owner guide privacy. Existing workflows and 320/375/768/1280 responsive checks still pass.

CoinGecko remains the single provider. US$1/week, six currencies, surcharge exemptions, exact rounding, quote expiry and no assumed USDT peg are unchanged. Failed or stale sources still block non-USD checkout. No real payment service or wallet is connected.

The previous deployed feed returned 503; its original response did not prove the cause. These changes add diagnostics to identify it after deployment. Do not treat improved diagnostics as a repaired external connection or as successful production conversion.

The client does not accept keys or configure accounts. An optional Demo key uses COINGECKO_DEMO_API_KEY privately on the backend and the fixed api.coingecko.com endpoint with the x-cg-demo-api-key header. No provider plan was purchased or configured.

Primary documentation:
- https://docs.coingecko.com/demo/reference/authentication
- https://docs.coingecko.com/docs/errors-and-rate-limits
- https://docs.coingecko.com/docs/keyless-public-api

42 screens and all 171 requirement IDs retained; 0 green, 125 yellow, 46 red. Strict production-verified completion stays 0%. The full 12 production gates, real accounts/devices/persistence/security review and recorded per-variable acceptance remain required.

Preview: http://127.0.0.1:18777/#advertising
Public website: https://asharf-ul-makhlook.onrender.com/#advertising
Deployment state: reports/Publication-Latest.md

Real payments, merchant settlement, wallet signing, blockchain broadcasting/confirmations, ad delivery, refunds and external marketing remain unconnected. Existing account verification delivery gaps remain. No funds or advertisements were sent.
