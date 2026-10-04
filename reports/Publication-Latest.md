# Publication — live release

Build: V16-advertiser-workflows-2026-10-04an. Published on October 4, 2026.
Website: https://asharf-ul-makhlook.onrender.com
Advertising: https://asharf-ul-makhlook.onrender.com/#advertising
Progress: https://asharf-ul-makhlook.onrender.com/#progress

Repository: tanpromobiletire-ship-it/Asharf-ul-Makhlook, branch main. Only the existing Asharf-ul-Makhlook frontend and backend in the confirmed My Workspace were deployed. Application commit: 50a69757037ca5be14ce5789589574691c64ffe5.

Both initial deploys reached live: frontend dep-db1a84favr4c73b034p0; backend dep-db1a82u0tbcc73a8m7gg. Published HTML SHA-256 after CRLF normalization: 9ad3ed560f265878eac6e970494fed47ca0800333eb24e0710e1f5c4926873c9, matching the exact source tested with 990 Chrome assertions. Pre-publication backend checks: 43 API and 45 provider/store/rate tests passed.

Live HTTP checks: 17/19 passed. Verified exact source, 42 screens, 171 IDs, honest status, public report/CSV, database and API health, public statistics, rejection of anonymous member/account access, rate-route CORS and method restrictions. Recent error-log query returned no errors. These are smoke checks, not real two-account or full production acceptance.

## Outstanding conversion connection
CoinGecko source retrieval returned HTTP 503 from the Render endpoint, including a separate retry. Fresh non-USD quotes are unavailable and fail closed; no alternate provider or fixed USDT peg is substituted. USD fixed-price simulation still works. Check provider access from the hosting environment and configure an appropriate CoinGecko API plan/key if needed; then repeat the live rate checks. The cause was not proven by these generic endpoint responses.

## Remaining integrations
Real fiat/crypto payments, wallet connection/signing, blockchain broadcasting/confirmations, campaign backend/ad delivery, refunds and external marketing are not connected. No money or ad campaign was sent. SMS/email verification and full real account acceptance remain pending. Backend startup includes its existing additive schema initialization; no manual applicant/donor record edits were performed.

Status: 0 green, 125 yellow, 46 red. Strict production-verified completion remains 0%. Publishing does not satisfy all 12 production gates or approve every variable automatically. Edge did not complete this build's regression; Chrome passed.

This evidence update changes documentation only and leaves application source unchanged. Historical release reports describe their own pre-publication state.
