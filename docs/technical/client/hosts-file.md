# Hosts file

:::info
This section is why the client requires administrative permissions to run because the
systems host file is a protected file
:::

The normal client implementation makes use of the Windows system [Hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) in order to tell Mass Effect 3 to talk to the local client instead of the remote servers.

It does this by pointing the `gosredirector.ea.com` address to `127.0.0.1` (Localhost) rather than its actual address.

:::tip Experimental Version
There is an of the client named _Plugin Client_ which doesn't require admin privileges you can view the documentation for it [Here](../../client/plugin-client) this works by rather than modifying the hosts file it instead directly hooks into the games host resolution function through an ASI plugin
:::