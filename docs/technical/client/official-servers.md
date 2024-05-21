
# Official servers

The official servers are structured very differently than Pocket Relay as they have many distributed servers bound to many different ports. 

Keeping all this logic on the server-side can make the server difficulty to host due to all of the different ports and protocols.

To counteract this Pocket Relay moves the handling and binding for all these ports over to the client-side instead opting for proxying all the traffic through improved/more secure protocols.

An example of this is the game is still stuck using the SSLv3 protocol which is very un-supported by most of the internet these days. The client combats this my locally handling the SSLv3 connections using the [blaze-ssl-async](https://github.com/jacobtread/blaze-ssl-async) library that was created for this purpose and then the client proxies the connection over TLSv3 using [Connection Upgrading](./connection-upgrading.md).
