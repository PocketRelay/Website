---
sidebar_position: 5
---

# Reverse Proxy

Setting up a reverse proxy to work with Pocket Relay

If you are using your server with a reverse proxy such as [Nginx](https://nginx.org/en/) you will need to configure your server to allow HTTP Upgrades.

The Pocket Relay Clients and server use HTTP Upgrades to connect the game clients to the server, see [Technical Overview](../technical/intro). Most reverse proxies don't support handling HTTP upgrades out of the box

Currently this guide only has an example for Nginx, if you are using another proxy create a suggestion on the Discord or raise a GitHub issue to have an example added.

## Configuring Nginx

In order to support HTTP Upgrades in your Nginx config you'll need to add the following lines inside the location block for your Pocket Relay server:

:::info
You can find your Nginx configuration for using https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/
:::

```conf
# Upgrade websocket connections 
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_http_version 1.1;
```

An example config using this is the following (This example is a modified version of the example found on https://www.nginx.com/blog/websocket-nginx/)

```conf

server {
    location / {
        proxy_pass $upstream;

        # Upgrade websocket connections 
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
    }
}
```
