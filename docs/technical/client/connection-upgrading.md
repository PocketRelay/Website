---
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Connection Upgrading

When originally developing this solution I created a blog post, which goes more into the underlying technical changes and code. However, it is slightly outdated; but you can find it [Here](https://jacobtread.com/blog/pocket-relay-http/)

## The problem

Mass Effect 3 normally contacts servers using a bi-directional communication protocol named "Blaze" for sending messages back
and forth between the game and it's various servers. Due to the distributed nature of the game servers theres often times many
different types of servers all bound to different ports and speaking different protocols (Blaze over TCP, Blaze over SSL, HTTPS, etc). Previously this made it quite difficult to host an unofficial server as you'd have to juggle upwards of 5 different ports (Most of which likely wouldn't be properly secured)

To solve this problem and make hosting simple and easy (Only requiring a single port), Pocket Relay reduces this burden in two ways:

- Local handling of insecure requests 
- Using [HTTP Upgrades](https://www.rfc-editor.org/rfc/rfc9110#field.upgrade) to create a pipe for custom protocols


## Local handling of insecure requests 

In order to simplify the hosting process the client application / plugin binds a handful of local servers:

* Redirector - Locally emulates the official [Redirector](./redirector.md) server removing the need to insecurely allow this connection elsewhere
* Blaze - Captures messages from the Blaze protocol and sends them over an [upgraded connection](#http-upgrades)
* HTTP - Captures insecure HTTP requests and proxies them to the Pocket Relay server
* Tunnel - Not present in the official servers, handles the Pocket Relay [Tunneling](./tunneling.md)
* QoS - Previously handled QoS communications but is mostly unused now that tunneling is available
* Telemetry - Locally processes game telemetry protocol messages and sends them as normal HTTP(s) requests to the server


In order to support the two-way communication that the BlazeSDK uses to communicate between the main server and the clients, without requiring binding a separate port for the main server and HTTP server, The server and client make use of [HTTP Upgrades](https://www.rfc-editor.org/rfc/rfc9110#field.upgrade) in order to upgrade an HTTP connection.


## HTTP Upgrades

Making using of [HTTP Upgrades](https://www.rfc-editor.org/rfc/rfc9110#field.upgrade) allows the client to establish a widely accepted and well standardized connection over a simple HTTP(s) request. This request using some special headers can be upgraded from a simple HTTP request to a raw TCP stream allowing any custom protocol to be used (WebSockets use this functionality). We can take advantage of this in order to upgrade an HTTP(s) connection into a raw TCP stream that is transporting the Blaze protocol (EAs custom protocol)

Since the requests are no longer going over a custom TCP connection/protocol and are instead done through an established HTTP(s) connection we get all the benefits that come with HTTP(s). Because the app is using HTTP(s) the app works seamlessly behind a Reverse Proxy (You don't need to expose your game server directly to the internet) this also allows you to properly secure your sever using HTTPS and also enable other features like client certificate authentication