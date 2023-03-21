---
layout: "@layouts/GuideLayout.astro"
title: "Retriever"
---

# Retriever

[Back](/guide/config)

The retriever section contains settings for how the server will handle needing to reach out to the official servers for data

```json
{
  "retriever": {
    "enabled": true,
    "origin_fetch": true,
    "origin_fetch_data": true
  }
}
```

---

## Enabled

```json
"enabled": true,
```

This setting determines whether fetching data from the official servers is allowed or not. Setting this to false will disable both [Origin Fetch](#origin-fetch) and [Origin Fetch Data](#origin-fetch-data)

---

## Origin Fetch

```json
"origin_fetch": true,
```

This setting determines whether the server is allowed to use the official server to authenticate **Origin** accounts. If you disable this **Origin** accounts won't work on the server.

After accounts are authenticated through the **Official** server local copies are stored in order to have independant data from the **Official** servers

---

## Origin Fetch Data

```json
"origin_fetch_data": true
```

This setting determines whether the server should also fetch and copy over the player data of **Origin** accounts when creating them for the first time.

The player data is only copied over when the account is first authenticated, future logins won't cause the data to be loaded account.
