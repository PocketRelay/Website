---
sidebar_position: 9
pagination_prev: null
pagination_next: null
slug: "ngrok"
---

# Ngrok

Exposing the server to WAN through Ngrok

:::tip

If you want to allow Open NAT type users to bypass the tunneling then you should
set `reverse_proxy` mode in the server config. [Server Config Reverse Proxy](./4-configuration.md#reverse-proxy)

:::

Using ngrok requires creating a free account, you do *not* need the payed features to work with Pocket Relay and the free version will suffice.

If you are on a network where you can't directly expose the server or if you don't want to port forward, you can instead use `Ngrok` as a temporary reverse proxy. 

With ngrok you will be given a public HTTPS url that you can give to your friends like: `https://xxxx-xxx-xxx-xx-xx.ngrok-free.app`, they can
use this URL as the Connection URL and will be able to connect to you without requiring any additional setup such as port forwarding.

## Setup Ngrok

To setup ngrok you can follow the [Getting Started](https://ngrok.com/docs/getting-started/) guide on their website. After you've completed "Step 2: Connect your account" you can continue here

## Start the server

Start the Pocket Relay server through the server executable 

## Start Ngrok

Open a terminal and run the following command to start ngrok:

```sh
ngrok http 80
```

:::note
If you've downloaded ngrok through the zip option make sure you open the terminal
in the same directory as ngrok.exe
:::

After running this command you will be given a "Forwarding" URL (Underlined in red), this is the Connection URL you should provide to players:

![Ngrok](./img/ngrok.png)

