---
sidebar_position: 5
pagination_prev: null
pagination_next: null
slug: "reverse-proxy"
---

# Reverse Proxy

Learn how to configure a reverse proxy to work with Pocket Relay.


If you're utilizing a reverse proxy like [Nginx](https://nginx.org/en/), you'll need to adjust your server settings to enable HTTP Upgrades for Pocket Relay. The Pocket Relay Clients and server use HTTP Upgrades to connect game clients to the server (refer to [Technical Overview](../technical/client/connection-upgrading.md)). Most reverse proxies don't enable support for handling HTTP upgrades out of the box so this must be configured.

Currently, this guide provides examples for **Nginx**, **Nginx Proxy Manager**, and **Traefik**. If you're using another proxy, suggest it on Discord or raise a GitHub issue to include an example.

:::caution 
If you are exposing your Pocket Relay server to the internet you are expected to have an existing understanding of cybersecurity and server hosting. This guide does not show you how to set up a secure/hardened setup; rather, it just shows you what is required to make your server work with Pocket Relay. You are expected to configure your servers properly yourself.

If you expose your Pocket Relay server to the internet, anyone with the Connection URL will be able to connect to it (unless you specifically prevent them with things such as firewalls or IP whitelisting on your server). 

If you would like to expose your server but only want authorized users to access it you can see the [Client Certificate Auth](#client-certificate-auth) section for how to use client certificates for cryptographic authentication.
:::

## Basic setup

When using a reverse proxy make sure you enable the `reverse_proxy` mode in the server configuration file. [Server Config Reverse Proxy](./4-configuration.md#reverse-proxy)

### Configuring Nginx 

If you are using Nginx see the guide [Here](./reverse-proxies/nginx.md)


### Configuring Nginx Proxy Manager

If you are using Nginx Proxy Manager see the guide [Here](./reverse-proxies/nginx-proxy-manager.md)

### Configuring Traefik

**Traefik** already supports the X-Real-IP header out of the box so you don't need to enable that, however you do need to enable Web Socket Support
