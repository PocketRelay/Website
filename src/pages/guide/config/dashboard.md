---
layout: "@layouts/GuideLayout.astro"
title: "Dashboard"
---

# Dashboard

[Back](/guide/config)

The dashboard config section contains the details of the account which should be given Super Admin

```json
{
  "dashboard": {
    "super_email": "example@example.com",
    "super_password": "password"
  }
}
```

In order to access the administrative side of the dashboard you need to assign a **Super Admin**. The super admin is assigned by setting the [Super Email](#super-email) property to the email address of the account you wan't to give **Super Admin** access.

You must create the account in game using the in-game account creation tool and then assign [Super Email](#super-email) to the account email and restart the server (Close it and open it again).

If you are using an **Origin** account your account by default wont have a password linked to it this is where the [Super Password](#super-password) property comes in handy as it can set the password of the super admin account to whatever you set it to whenever the server starts.

---

## Super Email

```json
"super_email": "example@example.com",
```

You should set this field to the email address of the account that you would like to give **Super Admin** access to.

The server will attempt to give **Super Admin** access to the account whenever the server starts. If the account doesn't exist no access will be given.

---

## Super Password

```json
"super_password": "password"
```

This field is optional but helpful if you wan't to use an **Origin** account as your **Super User**. If you don't want your password to change
to this on startup delete it from your configuration.

If the [Super Email](#super-email) property is set and the account exists that accounts password will be set to the provided password when the server starts up.

## Disable dashboard account registration 

```json
"disable_registration": false
```

You can use this field to disable registering accounts through the dashboard (Only allows player to create account in-game) this can be useful
if you are running a public server and dont want people who arent using the server creating accounts

Change this config value to `true` in order to prevent accounts from registering through the dashboard

> This feature is not yet release but will be available in v0.5.7 