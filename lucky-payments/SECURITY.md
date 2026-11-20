# Payment security: deployment checklist

**State:** staging; no real charges, no entitlement grants.

Implemented pure signature verification in `verify.mjs`, plus database schema for unique
purchase tokens and non-consumable entitlements. Production endpoints remain unavailable.

**Next steps**:
1. Create a *dedicated* Neon PostgreSQL database; save its connection string only in Render Environment (DATABASE_URL), not the repo/chat.
2. Set YANDEX_PURCHASE_SECRET from the Yandex Games in-app purchases settings in Render Environment, never in source or chat.
3. Verify signed *player identity* and bind it to purchase request before any grant. A bare Yandex purchase signature does not prove which currently signed-in user should receive it.
4. Use DB transactions for exactly-once records. Verify signed response status, product ID, token, and account binding; consume only appropriate consumables, after durable award.
5. Implement the promised permanent goods in the Yandex game client, then run official sandbox purchases, recovery, and multi-device tests.
6. Keep LC currency sales disabled pending gambling-like-game policy and regulatory review.

**Do not** deploy an expiring Render Free PostgreSQL database for real-money entitlements.
