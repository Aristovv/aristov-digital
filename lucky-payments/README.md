# Lucky City: isolated payment server (staging only)

This service is an HTTPS-ready API scaffold intended to be deployed as a **free Render Web Service**. It intentionally does not accept payments or grant premium entitlements. No secret keys are embedded in the repository.

- Build: `npm install` (root directory: `payments`)
- Start: `npm start`
- Health: `GET /health`
- Product list: `GET /api/catalog`
- Sync and purchase routes: return HTTP 503 until secure SDK verification and durable storage are connected.

Before real-money checkout: verify the *actual* signed Yandex Games payload format, link accounts to signed identity, deploy a durable PostgreSQL database, implement idempotent verified entitlements + restore, make sure all products (including seasonal pass and premium buildings) function in the game, perform authorized Yandex test payments, and review platform restrictions for gambling-like games. Never sell LC usable as stake currency without a policy/legal review.

Free Render instances sleep after inactivity and are unsuitable for reliable payment availability without considering latency and operational constraints. Do **not** use expiring free Render Postgres to store paid purchases.
