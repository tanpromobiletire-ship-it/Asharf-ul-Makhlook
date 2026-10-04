# Publication status

Published build: V16-conversion-diagnostics-2026-10-04ao. Application commit: 74a11da8b9cf5410f463fd00c70254cd21597cf3. Both existing Render services deployed successfully. The public HTML matches the exact tested SHA-256 dfb95a1aa905250476e0742b0701dac3f9eca35a0769bd412e46ccd1a4164089.

Before: conversion failures gave a generic unavailable message. After: safe typed reasons, bounded retries, no repeated calls during cooldown, an owner connection guide, and failure handling that blocks non-USD conversions without fresh rates. No payment processing was connected.

Tests: 1,014 Chrome browser assertions, 47 isolated API checks, and 58 Node tests passed. Fifteen scoped live delivery/authentication/diagnostic checks passed. This checks safe failure behavior; external conversion availability remains FAIL. Render logs confirm CoinGecko exchange_rates returned HTTP 429 (rate limited). The private optional Demo key is not configured by this update; no alternative provider or stale fallback was added. API health reports databaseConnected=true.

API deployment: dep-db1eb3ad0e5s73fbgtdg. Frontend deployment: dep-db1eb4favr4c73bgr790.

Website: https://asharf-ul-makhlook.onrender.com
Local preview: http://127.0.0.1:18777/#advertising

All 171 tracked IDs retained: 0 green, 125 yellow, 46 red. The full 12-gate production acceptance remains outstanding. Real payments, blockchain settlements, advertising delivery, and other unconnected integrations remain explicitly labelled. No other project was changed.

Evidence: Conversion-Diagnostics-Results.json, Conversion-Diagnostics-Live.json, Release-Conversion-Diagnostics.md, All-Variables.csv.
