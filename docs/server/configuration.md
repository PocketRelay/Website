---
sidebar_position: 4
---

# Configuration

Configure your server 

## Default Configuration

```json title=config.json
{
  "port": 80,
  "dashboard": {
    "super_email": "",
    "super_password": "",
    "disable_registration": false
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