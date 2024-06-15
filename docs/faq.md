---
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Frequently Asked Questions

Below are some frequently asked questions and their answers

## Will my progress carry across to the official server?

**No**. Any progress made on **Pocket Relay** will **NEVER** transfer back to the official servers. **Pocket Relay** can load your 
data from the official servers so you can have your progress on Pocket Relay servers but it will **NEVER** sync back to the 
official servers. This is both because its not feasible to implement this feature, and doing so would enable cheating on the official servers
and thus this feature is not something that will ever be implemented.

However, Pocket Relay does support importing and exporting your player data from one Pocket Relay server to another through the dashboard
(This does require admin privileges on the server you are importing/exporting on)

All player progress is stored in the "app.db" file in the "data" folder that the server creates in the same folder as the server .exe file
if you remove this file or go to another server your player data will not exist on that server unless you pull it from the official servers
or import your data

## Can I play completely offline?

*Yes*, but only if you are using an unofficial game exe without DRM (You can make one yourself and that will work). The official version of the game from EA/Origin/Steam has DRM which prevents the game being played offline because the Origin/EA requires internet to launch. I cannot provide guides or links to any of these things so you must obtain them yourself 

If you are using an unofficial exe without DRM you will be able to play completely offline with Pocket Relay without any issues. If you are using the standalone version of the client you will need to add an extra plugin to make *complete* offline possible though [Offline plugin](https://github.com/PocketRelay/me3-offline-plugin/releases/tag/v0.0.1) (The plugin client version supports completely offline out of the box) you can install this the same as any other ASI plugin.

## Does this support bot players?

Pocket Relay doesn't offer bot players nor does it plan on doing so. However, any bots/mods that create bots that work on the official servers will
also work on Pocket Relay


## Can I use this behind a reverse proxy?

Yes, you can. Make sure you follow the [Guide](./server/5-reverse-proxy.md)