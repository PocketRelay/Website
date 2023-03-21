---
layout: "@layouts/GuideLayout.astro"
title: "Logging"
---

# Logging

[Back](/guide/config)

This logging configuration tells the server what level of logging it should show in both the log file and the program output.

```json
{
  "logging": "info"
}
```

The server logs are stored in the following file:

```
data/server.log
```

There are a few levels each one showing all of the levels below it

- **debug** - Shows all logging including debug messages
- **info** - Shows informational logging, warning and error logging
- **warn** - Only shows warning and error logs
- **error** - Only shows error logs
- **off** - Doesn't show any logs
