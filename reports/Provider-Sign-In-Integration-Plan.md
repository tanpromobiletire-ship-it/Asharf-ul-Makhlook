# Existing-account sign-in integration plan
Requirement: VAR-146. Build: V16-hub-requests-2026-10-03ad.
Status: RED — live provider authentication is not implemented or connected. The provider chooser is a navigation/status preview only. It does not authenticate, register, link or activate accounts.

## Requested providers
| Provider | Member-facing option | Required owner setup |
|---|---|---|
| Google | Google | Register a web OAuth client, approved origins/redirects and consent configuration. Store client credentials on the server. |
| Microsoft | Hotmail / Outlook | Register a Microsoft identity application that supports personal Microsoft accounts. Store client credentials on the server. Decide separately whether work/school accounts should also be supported. |
| Apple | Apple | Configure a Sign in with Apple-enabled application, Services ID, domain/return URL association and server-side signing credentials. |

Do not send passwords, client secrets or Apple private keys in chat or commit them to source. Configure sensitive values in server-side Render environment settings when the integration is implemented. No credentials were copied into this release.

## Implementation still required
1. Server-managed authorization-code sign-in using a maintained OIDC library. Validate state, nonce, issuer, audience, expiry and token signatures; use PKCE where supported and consume callback state only once.
2. Provider-specific callbacks, including Apple's response handling. Callback URLs must be registered only after the actual routes are implemented and deployed. This release creates no callback endpoints.
3. Store a provider issuer + subject identity mapping. Do not silently merge accounts based only on an email address. Linking an existing account requires an authenticated, reverified member session and explicit confirmation.
4. Complete membership onboarding: display name, country, community rules/consent and mandatory mobile verification. A provider login must not bypass phone verification or automatically promote a pending user to active.
5. Handle Apple private relay email and missing/unverified provider email without assuming identity equivalence or exposing email/phone to other members.
6. Implement production sessions, logout/revocation, provider failures/cancellation, throttling, account recovery and audit evidence. Request only identity scopes; mailbox access is not needed.
7. Verify the full signup/sign-in/link/logout flows with two real accounts, target devices/networks, backend persistence and permission checks.

## Acceptance cases
Provider cancellation; missing configuration; network/token errors; wrong state/nonce; replayed callback; wrong issuer/audience; expired/forged token; account collision; consent refusal; unverified phone; identity-link abuse; logout/revocation; refresh/session behavior; accessibility/mobile layouts. These are future integration tests, not passed tests.

## Official references
- Google OpenID Connect: https://developers.google.com/identity/openid-connect/openid-connect
- Microsoft authorization-code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
- Apple environment configuration: https://developer.apple.com/documentation/signinwithapple/configuring-your-environment-for-sign-in-with-apple

## Current release evidence
Only provider chooser/navigation and unchanged-account/session behavior are browser-tested. Production configuration, real provider end-to-end, two verified accounts and cross-device authentication remain pending. Keep VAR-146 RED until its live integration work begins and do not mark GREEN until all 12 exact-build acceptance gates pass.
