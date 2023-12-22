---
sidebar_position: 10
---

# Cloudflare Tunnel

Exposing the server to WAN through Cloudflare Tunnel. 

:::note
This documentation is limited and may be incomplete for more information 
check out the cloudflare tunnel documentation https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/
:::

:::tip
If you don't have your own domain [Ngrok](./ngrok.md) might work better for you
:::

Cloudflare Tunnel is another more periminent option instead of `ngrok`. You can set and forget a Cloudflare Tunnel however they require that you have your own domain setup with Cloudflare.

This can be a good alternative if you don't want to expose your server directly to the internet or cant due to a lack of static ip or other issues.

## Login

First you must login to cloudflare with cloudflared

```sh
cloudflared tunnel login
```

When logging in choose the domain you wish to use for your tunneling

## Create tunnel

After logging in you can create a new tunnel for pocket relay. In all the following commands replace `{NAME}` with a name of your choosing for the tunnel.

```sh
cloudflared tunnel create {NAME}
```

## Associate DNS

After creating the tunnel you will need to associate it with a sub domain on your domain:

```sh
cloudflared tunnel route dns {NAME} {YOUR SUB DOMAIN HERE}
```

Replacing `{YOUR SUB DOMAIN HERE}` with your desired sub domain. An example of this would be:

```sh
cloudflared tunnel route dns pocket-relay-tunnel pocket-relay
```

I have `cloudflared` configured to use my `jacobtread.com` domain so this tunnel will appear at `pocket-relay.jacobtread.com`.

## Start the tunnel

The following command will start a tunnel from the subdomain to the `http://localhost:80` so any connections that reach the subdomain will be forwarded through the tunnel to that address

```sh
cloudflared tunnel --url=http://localhost:80 run {NAME}
```

For more information see the official documentation: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/