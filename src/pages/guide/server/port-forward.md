---
layout: "@layouts/GuideLayout.astro"
title: "Port Forward"
---

# Port Forwarding

[Back](/guide/server)

If you would like to make your server accessible from outside your local network you will need to port forward on your router the following are the ports that you will need to forward.

| Protocol | Port  | What                      |
| -------- | ----- | ------------------------- |
| TCP      | 42127 | Redirector Server         |
| TCP      | 14219 | Main Server               |
| TCP      | 80    | HTTP Server               |
| TCP      | 9988  | Telemetry Server          |
| UDP      | 17499 | Quality of Service Server |

If you have changed the server ports if the Configuration you will need to also change the ports you port forward to the new port
