---
layout: "@layouts/GuideLayout.astro"
title: "Server Port"
---

# Server Port

[Back](/guide/config)

The port property of the config is the port that the server will listen for
connections on.

```json
{
  "port": 80
}
```

The port can be any number between 1 and 65536 however ports below 1024 on Linux require that the server be launched with sudo

> Note: Changing this port will require you to specify the port in both Connection URLs and when accessing the Dashboard from the browser
