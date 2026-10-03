# My Hub requests and provider options release
Build: V16-hub-requests-2026-10-03ad.

Built: My Hub adds account-ID-linked help request tiles, a Requests filter, case/status/next-step search, native exact-details and edit navigation, and consent reconfirmation through the existing request editor. Requests belonging to a different account with the same display name are excluded; older unassigned test records remain in the request explorer. The request total uses the same explicit account-ID ownership rule. Corrected HTML escaping in shared case dropdown options.

Provider options: Google, Microsoft (Hotmail/Outlook) and Apple chooser buttons are reachable from the account page. They show clearly labeled pending integration status, preserve account/session state, explain mandatory phone verification and offer email registration or visitor exploration. These buttons do not authenticate, create, link or activate a provider account. Live OAuth/OIDC callbacks are not implemented. Provider setup and future acceptance requirements are in Provider-Sign-In-Integration-Plan.md.

Tested: 715/715 isolated headless browser assertions passed with no captured app errors or unexpected alerts. Retains the previous 668 checks, adjusted registry expectations for the new VAR-146, plus request/provider workflows and four account-service responsive layouts. Added own/same-name/unassigned request scope, search/empty recovery, exact details/progress/edit flows, consent rejection/reconfirmation, local save/status updates, role projection, stale/foreign targets, safe text rendering, account isolation, visitor gates and fresh-page persistence. Provider tests verify chooser/focus/navigation and unchanged account/session state only. No real provider authentication was tested.

Preserved: All 145 earlier requirement IDs and 41 screens, existing records/storage key, before-source backup and historical release evidence. VAR-146 explicitly adds the user's provider sign-in requirement; register now has 146 entries. No database, backend, credentials or stored attachments changed.

Not connected: Google/Microsoft/Apple live authentication, provider app credentials, production identity linking, phone/email verification delivery, secure caseworker review, actual aid delivery and cross-device shared case records. Local request records and guards are prototype behavior, not production authorization boundaries.

Status: 0 green, 112 yellow, 34 red. Strict production-verified completion remains 0%. VAR-146 remains RED until integration work begins; all 12 exact-build gates must pass before GREEN.

Deployment: existing Render static root, no build command; automatic deployment off. Browser regression: node tests/organized-navigation.mjs with Node and Edge on Windows. README retains deployment instructions. Live source-integrity/read-only smoke checks are separate from full production acceptance.
