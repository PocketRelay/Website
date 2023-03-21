---
layout: "@layouts/GuideLayout.astro"
title: "Menu Message"
---

# Menu Message

[Back](/guide/config)

The menu message configuration contains the message that will be displayed on the Main Menu within Mass Effect 3.

```json
{
  "menu_message": "<font color='#B2B2B2'>Pocket Relay</font> - <font color='#FFFF66'>Logged as: {n}</font>"
}
```

The menu message can make use of the font element to change
the color of the text contained with. This uses hex color codes

```html
<font color="#FFFFFF"></font>
```

The menu message also has some placeholder variables that you can use. The server will replace the placeholders before sending the message to the client

| Placeholder | Description               |
| ----------- | ------------------------- |
| {v}         | The server version number |
| {n}         | The player account name   |
| {ip}        | The player IP address     |
