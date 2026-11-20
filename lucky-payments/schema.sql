-- Run in a dedicated Lucky City PostgreSQL database, never against an unrelated game's tables.
CREATE TABLE IF NOT EXISTS lucky_purchase_tokens(
 token TEXT PRIMARY KEY,
 product_id TEXT NOT NULL,
 player_id TEXT NOT NULL,
 verified_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 signed_payload_hash TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS lucky_entitlements(
 player_id TEXT NOT NULL,
 product_id TEXT NOT NULL,
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 PRIMARY KEY(player_id,product_id)
);
CREATE INDEX IF NOT EXISTS lucky_entitlements_player_idx ON lucky_entitlements(player_id);
-- A transaction that grants any entitlement must atomically INSERT a unique token
-- and the entitlement after binding player_id to a verified Yandex player identity.
