# Private verification-provider setup
1. Create a Twilio Verify service in your own Twilio account. Set the numeric token length supported by the app (4–10 digits). Enable the intended delivery channels and configure SMS sending eligibility/country permissions.
2. For email, complete Twilio Verify's SendGrid integration, verified sender/domain and OTP template setup. An email address alone does not configure this integration.
3. Open the existing Render API service's Environment page. Add the following privately. Never put values in GitHub, browser fields, public reports or chat:
- TWILIO_ACCOUNT_SID: account SID beginning AC.
- TWILIO_API_KEY: API key SID beginning SK.
- TWILIO_API_SECRET: that key's secret.
- TWILIO_VERIFY_SERVICE_SID: Verify service SID beginning VA.
- TWILIO_VERIFY_SMS_ENABLED: true only after SMS setup is ready.
- TWILIO_VERIFY_EMAIL_ENABLED: true only after email integration is ready.
- VERIFY_SMS_PREFIXES: +1 for the currently authorized Canadian test numbers. Other country prefixes require an explicit geography/configuration review.
Keep existing DATABASE_URL, JWT_SECRET and FRONTEND_ORIGIN private and intact. FRONTEND_ORIGIN must equal https://asharf-ul-makhlook.onrender.com. Redeploy the API after changes.
4. Open the public site's Service account section and press Check connection. This reports configuration readiness, not proven delivery.
5. Register each real account with its own email and phone. Request and enter the actual received phone and email codes in the app. Both provider-approved contacts are required before service sign-in. Do not share passwords or codes in chat.
6. Record real delivery, activation, sign-in, persistence and independent-device evidence before updating the 12 production gates. OAuth/social signup and backend messaging need separate implementation/configuration.

Controls: consent required; registered destination only; exact public Origin; JSON/body bounds; durable credential/send/check limits; 60-second resend cooldown; hashed challenge/contact records; 10-minute expiry; five code attempts; account/contact rechecks; no OTP storage; no provider secrets in responses; no automatic outbound retries.
The provider bills the owner's provider account according to its own settings. No provider account or billing was created by this release.

Official documentation:
https://www.twilio.com/docs/verify/api/verification
https://www.twilio.com/docs/verify/api/verification-check
https://www.twilio.com/docs/verify/email
