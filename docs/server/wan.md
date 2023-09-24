---
sidebar_position: 8
---

# WAN

Information for users planning on hosting **WAN** servers


## Joining issues

If you are hosting a **WAN** server and some of your players are not able to join each other within the game (Usually this appears as the user stuck infinitely matchmaking, but the server dashboard will show them as in the game).

This is because of the **QoS** server this is a limitation of the current server. 

You can *fix* this issue by telling your server to use the *"official"* QoS server see the [Official](configuration.md#official) option under [QoS](configuration.md#qos) by default this is set to "local" as to not rely on the official servers for general LAN usage. However currently it is required that the "official" QoS servers be used instead to prevent the joining issue for some WAN users.

:::note QoS Configuration

Below is a snippet taken from the configuration section, your config should contain the below in order to fix the above mentioned


```json
{
  "qos": {
    "type": "official"
  }
}
```

:::


## Reverse Proxy

If you are using a reverse proxy in front of your server you should check out the [Reverse Proxy](reverse-proxy.md) guide