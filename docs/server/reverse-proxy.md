---
sidebar_position: 5
---

# Reverse Proxy

Setting up a reverse proxy to work with Pocket Relay

If you are using your server with a reverse proxy such as [Nginx](https://nginx.org/en/) you will need to configure your server to allow HTTP Upgrades.

The Pocket Relay Clients and server use HTTP Upgrades to connect the game clients to the server, see [Technical Overview](../technical/client#connection-upgrading). Most reverse proxies don't support handling HTTP upgrades out of the box

Currently this guide only has an example for **Nginx**, and **Traefik**, if you are using another proxy create a suggestion on the Discord or raise a GitHub issue to have an example added.

## Configuring Nginx

:::tip
If you are using the Nginx reverse proxy within Docker through docker-compose you can use the [Docker Compose Reverse Proxy](docker.md#docker-compose-reverse-proxy) example as a base for your setup
:::

:::info
You can find your Nginx configuration using the guide here: https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/
it will likely be present at `/etc/nginx/nginx.conf` 
:::

In order to support HTTP Upgrades and X-Real-IP in your Nginx config you'll need to add the following lines inside the location block for your Pocket Relay server:


```conf
      
# Provide server with real IP address of clients
proxy_set_header X-Real-IP $remote_addr;

# Upgrade websocket connections 
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_http_version 1.1;
```

An example config using this is the following (This example is a modified version of the example found on https://www.nginx.com/blog/websocket-nginx/)

```conf

events {}

http {
    server {
        listen       80;

        server_name  localhost;

        location / {
            # Update this with the address and port to your Pocket Relay server 
            proxy_pass  http://server:80;
            
            # Provide server with real IP address of clients
            proxy_set_header X-Real-IP $remote_addr;

            # Upgrade websocket connections 
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_http_version 1.1;
        }
    }
}

```



## Configuring Traefik

**Traefik** already supports the X-Real-IP header out of the box so you don't need to enable that, however you do need to enable Web Socket Support