# Request Experience release
Build: V16-request-experience-2026-10-02t.

Built: Home visitor/member starting buttons; readable request cards instead of a wide table; combined status/need/search filters with result counts and clear recovery; accessible native details dialog with next-step explanations; direct edit and case-progress navigation; clean new-request entry; local owner edit guard at both entry and save; supporter details refreshed to redact private test information after a role change.

Tested: 444/444 isolated headless Edge assertions passed, including existing navigation, accounts, statistics mocks, aid/appeal/safety/mission flows, request filtering/empty states/dialog actions, rejected other-member edits, details redaction, refresh persistence and 320/375/768/1280 layouts. Dialog width is explicitly tested at each viewport. No captured application errors. These checks do not prove production authorization, all security tests or physical-device acceptance.

Preserved: 41 screens, all 145 requirement IDs, browser storage key and saved-record schema. No backend code or secrets changed. Old live receipts remain historical for their recorded builds.

Not connected: secure real casework, staff/partners, aid dispatch, payments, official feeds, account verification delivery and all required production workflows. Local edit guards and role projections are usability safeguards, not a production security boundary.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; all twelve conditions require exact-build per-variable evidence before GREEN.

Deployment: static root on Render with no build command; automatic deploy is off, so publish only after regression checks and authorized push. Local regression: node tests/organized-navigation.mjs on Windows with Node and Edge.

Live verification: Published deployment dep-db02vle7bikc73fvr5qg is live at commit 805a81e2929760b5d602bea71ea99261b51b7ec8. On 2026-10-02, all 16 read-only smoke and source-integrity checks passed. Published HTML matches the tested source after newline normalization. See Request-Experience-Live-Results.json. These checks do not constitute full production acceptance; statuses remain 0 green, 112 yellow, 33 red.
