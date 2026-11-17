# LUCKY CITY 2.0 — Casino Empire (development branch)

## Product direction
- Adult (18+) fictional casino-city simulation. No real-money wagers, cashouts, physical gifts, crypto, or redeemable prizes.
- Eight halls: existing Plinko, Mines, Crash, Lucky Wheel; NEW Royal Slots, European Roulette (single zero), Blackjack vs dealer, Video Poker.
- Rebrand: purple midnight city, polished gold trim, casino felt, 3D-style CSS cards, metallic wheels. No misleading claims of real 3D or real multiplayer.
- Player progression stays grounded in districts, buildings, levels, quests and owned items. Cloud saves under luckyCityV1 and local saves under lucky_city_yandex_v1: preserve both.

## Newly implemented on this branch
- Slots: three symbols, pair x1, three identical x5–x25, independently random.
- Roulette: 0–36, colors/even/odd x2, zero x36, authentic European 37-outcome rules.
- Blackjack: 52-card deck, ace soft/hard, player hit/stand, dealer draws below 17, push x1, win x2, natural blackjack x2.5.
- Video Poker: five-card draw, select held cards, single replacement, Jacks-or-Better table up to royal flush x250.
- Premium Shop showroom: Silver, Gold and Diamond VIP concepts, luxury buildings, skins, seasonal pass. **No purchase() call yet and no displayed fake live prices.**
- Player-owned themes: classic, gold, emerald, ice, unlockable for earned virtual LC, saved across sessions.
- Safety of single active game round and valid denominations.
- Cosmetic store is independent from chance game payouts.
- No ZIP uploaded to Yandex Console in this phase. Existing Lucky City draft 654118 remains unchanged.

## Economy and engagement principles
- Stakes 10, 50, 100, 200, 500 LC. All outcomes, tables and winnings use only fictional LC.
- Roulette return: 36/37 on outside bets and zero bets (mathematical house edge 1/37); no real-money value.
- Blackjack is standard dealer-draw style, no additional splits/insurance yet; clearly show rules before publication.
- Video Poker and Slots have fixed public pay tables. Re-evaluate expected returns after simulation (minimum 100k hands).
- Daily city payouts and rewards are capped once/day; add an optional free basic grant for truly exhausted users after economic review, not an addictive purchase prompt.
- Cosmetics must never improve win probability or provide hidden advantage.
- The game should discourage misconceptions about near misses and 'due' wins; no fake "live wins" ticker or simulated real people.

## Additional features proposed for next work passes
1. Casino map / virtual lobby: eight physically distinct rooms with cinematic transition animations, different architecture, sound design with mute control.
2. City prestige: unlock visual skyline landmarks and cosmetic titles for non-random progress.
3. Casino album: collect themed badges by completing challenges, with visible rarity odds.
4. Seasonal events: new environment lighting, quests and cosmetic season track; never pay-to-win.
5. Player profile with fully accurate win/loss history, per-mode RTP info, and explicit chance disclosures.
6. Challenges against scripted non-player characters clearly labelled as NPC; real players only after server-backed multiplayer.
7. Accessibility: reduced motion, contrast, scalable text, keyboard navigation, no auto-play paid actions.
8. Anonymous analytics: only after privacy notice and optional Yandex-approved integration.

## Monetization before any activation
- Confirm Yandex partnership and entitlement to in-app purchases.
- Catalog products must match console exactly; prices and currency must come from payments.getCatalog().
- Add verification and payments.getPurchases / consumePurchase recovery, test interrupted purchases and cross-device entitlement restoring.
- Restrict paid content to skins, VIP cosmetics, non-random buildings, season-pass visual rewards. Do not sell LC usable in chance games.
- If purchases are unavailable in console, keep items unavailable and do not imitate live purchasing.
- No monetization code enabled at present.

## QA gates before new archive
- Exhaustive 8-mode smoke tests incl. mobile iPhone and desktop.
- Save/load tests with local storage failure, cloud storage failure, stale cloud saves and browser restart.
- Verify visible casino odds and actual payout tables with large simulations.
- Verify no duplicate claims (daily quest, daily city payout, Lucky Wheel), no negative or non-integer balances.
- Verify SDK Game Ready / Gameplay Start / Gameplay Stop, pause while hidden, orientation, banners and safe areas.
- Verify required 18+ rating, all support contacts, marketing artwork and correct Yandex language configuration.
- Only then merge branch into main, produce root-index ZIP and replace Yandex draft archive. Do not send to moderation without user approval.
