---
sidebar_position: 8
---

# WAN

Information for users planning on hosting **WAN (Wide Area Network)** servers

:::caution 
If you are exposing your Pocket Relay server to the internet you are expected to have an existing understanding of cybersecurity and server hosting. This guide does not show you how to set up a secure/hardened setup; rather, it just shows you what is required to make your server work with Pocket Relay. You are expected to configure your servers properly yourself.

If you expose your Pocket Relay server to the internet, anyone with the Connection URL will be able to connect to it (unless you specifically prevent them with things such as firewalls or IP whitelisting on your server). 

If you would like to expose your server but only want authorized users to access it you can see the [Client Certificate Auth](./reverse-proxy.md#client-certificate-auth) section for how to use client certificates for cryptographic authentication.
:::

## Joining issues

> There is new server connection tunneling which is a beta feature included in server version >= v0.6.0-beta and client version >= 0.4.0
>
> Tunneling solves the issue mentioned below so using the official QoS servers will likely no longer be required for
> WAN servers in upcoming releases
>
> For details about tunneling see https://github.com/PocketRelay/Server/issues/64

If you're hosting a **WAN (Wide Area Network)** server and some players experience issues joining each other in the game, particularly getting stuck in matchmaking indefinitely (while the server dashboard shows them as in the game), the problem may be related to the **QoS (Quality of Service)** server.

This issue is a limitation of the current server setup.

You can *resolve* this problem by instructing your server to use the *"official"* QoS server. Refer to the [Official](configuration.md#official) option under [QoS](configuration.md#qos). By default, this setting is "local" to avoid relying on official servers for general LAN usage. However, due to the current circumstances, it's necessary to switch to the "official" QoS servers to prevent joining issues for some WAN users.

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