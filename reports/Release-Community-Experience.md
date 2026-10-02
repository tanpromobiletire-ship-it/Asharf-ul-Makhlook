# Community Experience release
Build: V16-community-experience-2026-10-02u.

Built: Ask the World combined search/type/status filters, live result counts, clear-filter recovery and explicit browser-local TEST DATA notices. Responses support toggle Like / Helpful, Dislike and Thanks with pressed-state accessibility. Each local member has one reaction of each supported type; Like and Dislike are mutually exclusive. Old aggregate counts are preserved. Reaction mutations now enforce membership directly, and post resolution/reopening requires its signed-in owner with an allowed status.

Tested: 468/468 isolated headless Edge assertions passed, including all prior navigation/account/help/safety flows, 20 new community assertions and Ask the World at 320/375/768/1280 widths. Tests cover combined filters, empty recovery, visitor function guards, reaction toggles, legacy totals, opposite reaction switching, independent Thanks, two local fixtures, owner guards and refresh persistence. The initial 320px overflow defect was fixed and the complete suite rerun. No captured application errors. Local fixtures are not two real verified production accounts.

Preserved: 41 screens, 145 requirements, the existing storage key and saved-record schema, previous releases and live evidence. Before-source backup retained on the connected development computer. No backend or secret changes.

Not connected: production post/response/reaction synchronization, server-enforced authorization, moderation and verified account delivery. Existing direct messaging/calling and external aid/official feeds remain subject to their recorded integration gaps. Local reaction and owner checks are not a production security boundary. Nested replies and expanded emoji reactions for Ask the World remain future work.

Status: 0 green, 112 yellow, 33 red. Strict production-verified completion remains 0%; all 12 conditions need exact-build per-variable evidence before GREEN.

Deployment: existing Render static root, no build command, automatic deployment off. Regression command: node tests/organized-navigation.mjs on Windows with Node and Edge. README retains deployment instructions. Publish only after full scoped regression and authorized push; record live source integrity and API health separately.

Live verification: On 2026-10-02 at 23:12 UTC, all 19 live source-integrity and read-only smoke checks passed at source commit 32a99f81b1dcd92cc8d3025a914cf945eed5518c. Render deployment dep-db03kfegekts73826vlg is live. Published HTML matches the tested source after newline normalization; the existing API/database health check passed. See Community-Experience-Live-Results.json. These scoped checks do not approve production acceptance or change the status counts.
