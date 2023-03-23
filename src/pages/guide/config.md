---
layout: "@layouts/GuideLayout.astro"
title: "Configuration"
---

# Configuration

[Back](/guide)

Check out the configuration sections below

- [Server Port](/guide/config/port) Configure the server port
- [Dashboard](/guide/config/dashboard) Configure server dashboard
  - [Super Email](/guide/config/dashboard#super-email) Super admin email address
  - [Super Password](/guide/config/dashboard#super-password) Super admin email address
- [Menu Message](/guide/config/menu) Configure in game menu message
- [Galaxy At War](/guide/config/gaw) Configure Galaxy At War system
  - [Daily Decay](/guide/config/gaw#daily-decay) Daily galaxy at war decay amount
  - [Include Promotions](/guide/config/gaw#include-promotions) Including promotions in gaw assets
- [Logging](/guide/config/logging) Configure the logging level
- [Retriever](/guide/config/retriever) Configure the retriever system
  - [Enabled](/guide/config/retriever#enabled) Retriever enabled state
  - [Origin Fetch](/guide/config/retriever#origin-fetch) Whether Origin fetching is enabled
  - [Origin Fetch Data](/guide/config/retriever#origin-fetch-data) Whether Origin fetching should include player data

Server configuration is loaded from a file named `config.json` in the same folder as the server.

By default this file will not exist. You will have to create it manually see the default configuration below.

If you are running the server within a Docker container you will need to use the `PR_CONFIG_JSON`
environment variable providing the config JSON as the variable

Use the different configuration sections linked above to modify the default configuration to your liking

## Default Configuration

```json
{
  "port": 80,
  "dashboard": {
    "super_email": "example@example.com",
    "super_password": "password"
  },
  "menu_message": "<font color='#B2B2B2'>Pocket Relay</font> - <font color='#FFFF66'>Logged as: {n}</font>",
  "galaxy_at_war": {
    "decay": 0.0,
    "promotions": true
  },
  "logging": "info",
  "retriever": {
    "enabled": true,
    "origin_fetch": true,
    "origin_fetch_data": true
  }
}
```
