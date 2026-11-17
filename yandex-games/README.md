# Lucky City — Yandex Games release candidate

This is a **separate HTML5 build** for Yandex Games. The existing browser demo and VK implementation are unchanged.

## Files and publishing

- `index.html` — self-contained Russian-language game with `/sdk.js` (Yandex Games SDK), cloud progress sync through Player.getData/setData where available, guest/local saves, Game Ready and GameplayAPI signals, game instructions and virtual-currency disclosure.
- GitHub Actions workflow: [lucky-city-yandex.yml](../.github/workflows/lucky-city-yandex.yml).
- Download the workflow artifact from **Actions → Build Lucky City for Yandex Games → latest successful run → Artifacts → lucky-city-yandex-games**. The artifact contains `lucky-city-yandex-games.zip`; upload that **inner ZIP** to the Yandex console. The archive root is `index.html`.

## Moderation checklist

1. SDK version & Game Ready must be inspected in Yandex Games sandbox.
2. Choose **Russian** as the only supported language unless translations are added.
3. Because Plinko, Mines, Crash and prize wheel resemble simulated gambling, request a **conservative 18+** classification and clarify that LC cannot be redeemed for cash or physical prizes. Moderation decides the final classification.
4. Add actual developer support contact, verified rights to creative assets, title **Lucky City**, icon **512×512 PNG** and cover **800×470 PNG**, required gameplay screenshots.
5. Mark **cloud saves enabled** because this build calls Player.setData.
6. In developer comment, state that this build has **no monetization and no ad calls**, as recommended in Yandex documentation for intentionally unmonetized games.
7. Test Chrome, Yandex Browser, mobile Safari and Android, layout orientation, progress after refresh and input keyboard.
8. Only after approval of this checklist submit through the Yandex developer console.

## Data

Game progress lives under `lucky_city_yandex_v1`; it is intentionally independent from `lucky_city_public_demo_1` and VK player data. No payment integration, user-to-user currency transfer, cash-out or external real prizes are included.

This is a **release candidate**, not an approved or published Yandex Games title.
