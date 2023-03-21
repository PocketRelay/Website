---
layout: "@layouts/GuideLayout.astro"
title: "Galaxy At War"
---

# Galaxy At War

[Back](/guide/config)

The galaxy at war configuration controls the daily decay amount and whether to include promotions in Galaxy At War assets

```json
{
  "galaxy_at_war": {
    "decay": 0.0,
    "promotions": true
  }
}
```

---

## Daily Decay

```json
"decay": 0.0
```

In the default server configuration your **Galaxy At War** progress will not decay at all, this is because "decay" is set to 0.0 which doesn't decay at all.

An example of this is:

> 0.5 = -1% for each galaxy at war area over each day passed that the player wasn't active for

Setting this to 0.0 will prevent any decay from happening

---

## Include Promotions

```json
"promotions": true
```

This property determines whether your total character promotions is included as a **Galaxy At War** asset
