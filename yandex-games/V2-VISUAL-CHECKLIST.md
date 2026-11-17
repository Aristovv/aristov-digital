# LUCKY CITY 2.0 — Visual implementation checklist

Five reference screens were generated in the design discussion: City Hub, Casino District, Royal Slots, Blackjack and Premium Shop. The branch contains CSS-illustrated **working** versions of all five, with live game state and navigation.

## Reference correspondence
| Screen | Interactive implementation | Still needed to match concept art |
|---|---|---|
| City Hub | Top profile/XP + LC wallet from actual state, city skyline, daily income, quests, casino entrance, store link, 5-tab nav | Integrate approved high-resolution city artwork as a static background asset (no duplicate UI or fake currency balances); polish parallax and reflections |
| Casino District | Decorative golden palace/arch, eight live game cards | Replace procedural CSS hall art with optimized unique original game artwork; test landscape and portrait |
| Royal Slots | 3 functioning reels, payout history, actual bet control, jeweled cabinet | Higher-quality reel sprites, staggered transitions, opt-out animation; **do not** add advertised 5 reels / massive jackpots without matching gameplay rules |
| Blackjack | Full live dealer table, dealer silhouette, actual cards and hit/stand controls | Original dealer portrait asset (if desired), hand-dealing motion, soft-17 clear rules; **do not** display Double/Split as functional until implemented |
| Premium Shop | 5 functional filter tabs, preview catalog, live earned-LC skins | Original crown/building pack illustrations and products with verified catalog pricing. Keep pay buttons disabled until real Yandex purchases are integrated |

## Design system
- Midnight purple `#090716`, royal gold `#f0c67b`, light gold `#ffebbc`, neon purple `#b861ee`.
- Art deco casino aesthetic; border highlights, volumetric shadows, layered glass panels, restrained animated reflections.
- Real in-game values only, no sample player names, gems or purchased VIP levels.
- No emoji buttons in production UI. The current icon conversion covers most but not all symbols; finish with SVG sprite set.
- Never claim CSS drawings or UI composites to be true photoreal-time 3D.
- Accessible responsive layout: portrait iPhone first, tablet and desktop, reduced motion respect.
- Text in Russian for the actual game; decorative brand names can be English.

## Active release gate
The screenshots are **visual concepts**, not yet final artwork shipped in the game. This branch has code-only styled equivalents. Review visually on real iPhone before merging. Keep existing Yandex Console game 654118 ZIP untouched. No real payments, no moderation submission.
