---
sidebar_position: 2
---

# Client


## Official servers

The official servers are structured very differently than Pocket Relay as they have many distributed servers bound to many different ports. 

Keeping all this logic on the server-side can make the server difficulty to host due to all of the different ports and protocols.

To counterract this Pocket Relay moves the handling and binding for all these ports over to the client-side instead opting for proxying all the traffic through improved/more secure protocols.

An example of this is the game is still stuck using the SSLv3 protocol which is very un-supported by most of the internet these days. The client combats this my locally handling the SSLv3 connections using the [blaze-ssl-async](https://github.com/jacobtread/blaze-ssl-async) library that was created for this purpose and then the client proxies the connection over TLSv3 using [Connection Upgrading](#connection-upgrading).


## Connection Upgrading

In order to support the two-way communication that the BlazeSDK uses to communicate between the main server and the clients, without requiring binding a seperate port for the main server and HTTP server, The server and client make use of [HTTP Upgrades](https://www.rfc-editor.org/rfc/rfc9110#field.upgrade) in order to upgrade an HTTP connection.

Rather than having a seperate server upgrading connections over HTTP to client streams allows the server to operate seemlessly over a single port, allows the server to be placed behind a reverse proxy which enables security through TLS, and prevents the server from needing to implement any extra SSL protocol logic.

The initial stages of this can be seen in my blog post of the migration to this new structure https://jacobtread.com/blog/pocket-relay-http/

## Bink patch

The `binkw32.dll` patch is a DLL that replaces the normal `binkw32.dll` of the game with a modified DLL that hooks into certain functionality of the game to do things like disabling DLC checking, enabling the in-game console, and disabling certificate verification. This DLL also proxies the original DLL functions to the original DLL which is usually renamed to something like `binkw23.dll` or `binkw32-old.dll`

Pocket Relay uses this patch in order to disable the certificate verification of the game which allows the game to use the servers self-signed SSL certificate which the game would normally reject

The patch included in the current Pocket Relay Client comes from https://github.com/Erik-JS/masseffect-binkw32 

The [Experimental Embedded Client](../client/embedded-client) extends this `binkw32.dll` concept by directly integrating the Pocket Relay client into the DLL and hooking additional functions in order to better redirect the game

## Proxing

Documentation unfinished

## Hosts file

:::info
This section is why the client requires administrative permissions to run because the
systems host file is a protected file
:::

The normal client implementation makes use of the Windows system [Hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) in order to tell Mass Effect 3 to talk to the local client instead of the remote servers.

It does this by pointing the `gosredirector.ea.com` address to `127.0.0.1` (Localhost) rather than its actual address.

:::tip Experimental Version
There is an experimental version of the client named _Embedded Client_ which doesn't require admin privilleges you can view the documentation for it [Here](../client/embedded-client) this works by rather than modifying the hosts file it instead directly hooks into the games host resolution function
:::

## Components

Documentation unfinished

### Redirector

### QOS

### Telemetry

### Main

### HTTP