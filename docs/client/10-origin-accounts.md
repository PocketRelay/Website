---
sidebar_position: 10
pagination_prev: null
pagination_next: null
slug: "origin-accounts"
---

# Origin/EA Accounts

Playing with Origin/EA accounts

## Logging-in 


Pocket Relay supports logging Origin/EA players using the official servers by default. 

:::info
You can disable logging in with Origin through the [Origin Fetch](../server/4-configuration.md#origin-fetch) configuration option (Doing so will prevent Origin/EA players to play without [Unlinking](./3-origin-unlinking.md))
:::

## Official Player data

By default when an Origin/EA player connects to the server for the first time, all their player data and progression will be copied over from the official servers onto the Pocket Relay server.

:::note
This data sync only happens the **first** time the Origin/EA account connects to the server. If there is already an account with a matching email the sync will not occur (So don't create your account manually).

This sync is **NOT** bi-directional, Pocket Relay will **NOT** sync your data back to the official servers. No progress made on the Pocket Relay servers will ever transfer back to official servers.
:::

If you want to load your progression from the official server again then you must delete the account on the Pocket Relay server for the data to be synced again.


:::info
If you don't want player data to be loaded from the official servers you can disable this in your server configuration [Origin Fetch Data](../server/4-configuration.md#origin-fetch-data)
:::


## Playing unlinked

If you would like to load your official data from the server then play unlinked you must first login with Origin/EA so the account is created and then you can assign the account a password through the dashboard (Origin accounts don't have passwords and can only be logged-in through the game unless you assign a password)


## Assigning Password

If you are the owner of the server you'll need to have a super admin account to access the server dashboard (If you aren't you'll need an Admin/Super Admin to assign you a password)

You have the two options below for assigning a password as the server owner:

### A) Using your Origin/EA as the super admin account

1. Assign your Origin/EA email address the super admin role [super admin](../server/4-configuration.md#super-admin)
2. Setup up a [super password](../server/4-configuration.md#super-password) to override the super admin account password (Setting the Origin/EA account password, since Origin accounts don't have a password)
3. Restart the server if its running and your Origin account will now have the password you assigned
4. Login and optionally change the password (Remove the super password from your configuration before your next restart otherwise your password will change back again)

### B) Creating a separate super admin account

1. Set up the [super admin](../server/4-configuration.md#super-admin) email (Make sure its different from your Origin/EA account email)
2. Restart your server if its running 
3. Open the dashboard and create an account with the super email you set
4. Find the Origin/EA account in the dashboard and assign it a password