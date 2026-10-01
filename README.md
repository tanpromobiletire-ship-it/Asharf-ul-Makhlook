# Asharf-ul-Makhlook V16

Current build: V16-organized-navigation-2026-10-01m.

## Integrity

`index.html` SHA-256:
`e48132cd80cbcc49fb31093ada16ab9d69334b578d31f1ba9c5010da26ddcca1`

The deployment copy must match this checksum before production verification begins.

## Verification policy

A feature is not 100% GREEN merely because it is deployed or code-complete.

Lifecycle: Built -> Tested -> Integrated -> Pre-production Verified -> Production Verified -> 100% GREEN.

Production GREEN requires the project's full production verification policy, including successful production deployment/configuration, real end-to-end flows, two authenticated accounts where applicable, device/network testing where applicable, persistence/backend verification, no unresolved critical/high defects, and recorded production evidence.

Material changes invalidate prior GREEN status until affected regression and production verification pass again.

## Navigation update

38 screens; six home task tiles; grouped searchable directory; breadcrumbs; compact mobile menu. Existing demo records remain in browser local storage. Demo roles are not production authentication.

## Deployment

The frontend is a static site: publish the repository root with no build command. Render automatic deploys are disabled; trigger a manual frontend deploy after pushing to main. Backend configuration is separate; run npm install --omit=dev and npm start from server. Supply private database and authentication configuration through the hosting service. Never commit secrets.

## Validation

The organized navigation passed 183 headless Edge checks across 38 screens and 320, 375, 768, and 1280 pixel widths. Live integrations and production verification remain subject to the policy above.

Run the navigation regression on Windows with Node and Microsoft Edge installed: node tests/organized-navigation.mjs. The test uses an isolated temporary browser profile and disables external requests.
