# Hosts file

The standalone version of Pocket Relay modifies the system [Hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) this is why it requires Administrative permissions to run (Because this is a protected file)

Pocket Relay uses this file to tell your system to send requests that would normally go to the official [Redirector Server](./redirector.md) at `gosredirector.ea.com` to instead go to a server running locally on your device at `127.0.0.1`.

The plugin version of Pocket Relay does not require modifying this file which is why it does not require Administrative permissions, instead the plugin client version hooks into the game code and replaces the code which would normally resolve DNS queries allowing it to intercept the request for `gosredirector.ea.com` directly without needing to modify the hosts file. You can find the plugin client [Here](../../client/5-plugin-client.mdx)

