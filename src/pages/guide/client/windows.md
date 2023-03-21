---
layout: "@layouts/GuideLayout.astro"
title: "Windows Client Setup"
---

# Windows Client Setup

[Github](https://github.com/PocketRelay/Client)

This guide is for using the Automatic setup tool on Windows. (**Pocket Relay Client**)

If you are not on Windows or would like to manually install **Pocket Relay** you can follow the [Client Manual Setup](/guide/client/manual)

1. [Download Client](#1-download-client) Downloading the client executable
2. [Run Client](#2-run-client) Instruction for launching the client
3. [Patch Game](#3-patch-game) Instruction for patching the game
4. [Connection URL](#4-connection-url) Instruction for using the Connection URL
5. [All Done](#5-all-done) End of the guide
6. [Official Servers](#6-official-servers) Guide for reverting to the official servers
7. [Uninstalling](#7-uninstalling) Guide to uninstall Pocket Relay

---

## 1) Download Client

In order to use the automatic client tool you must first download it from the link below:

| Platform                                    | Link                                                                                               |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ![Windows Icon](/icons/windows.svg) Windows | [Download](https://github.com/PocketRelay/Client/releases/latest/download/pocket-relay-client.exe) |

> Make sure that you keep this executable somewhere that you will remember, as you will need to use this tool to change the server IP address, uninstall, switch to the official servers etc

---

## 2) Run Client

Next open the executable by Double Clicking it or Right Click + Run As Administrator

> 📌 This program **MUST** run as Administrator. If you don't grant this program Administrative rights it won't be able to modify the hosts file, Which is required in order to pretend to be the official servers if you want to see whats happening under the hood you can check out the [Manual Setup - Add Hosts file entry](/guide/client/manual#1-add-hosts-file-entry) guide

After the application starts up you will see the following screen or something similar to this (It may look slightly different in the future)

![Client Home Screen](/guide/client-home.jpg)

---

## 3) Patch Game

In order for Mass Effect 3 to be able to communicate with the **Pocket Relay** server you will need to patch your game

> For details on whats happening under the hook check out [Manual Setup - Patch Game](/guide/client/manual#2-patch-game) guide

To patch the game you must press the "Patch Game" button which will show the following "File Picker" window

![Client File Picker Window](/guide/client-patch.jpg)

In this window you need to navigate to your **Mass Effect 3** installation
folder and within that folder browser to the following path

```
Binaries/Win32/
```

In this folder you should find a file named **MassEffect3.exe**. This is the file you should select with the file picket then press the "Open" button.

If everything worked you will see the following screen back in the setup tool

![Client Patch Window](/guide/client-patched.jpg)

Press "Ok" to go back to the home screen

---

## 4) Connection URL

In order to connect to a server you will need to know the _Connection URL_ of the server. If you are the one hosting the sevrer refer to
[Connection URL](/guide/server/executable#4-connection-url) otherwise ask the server owner to provide you the _Connection URL_.

Enter the _Connection URL_ into the input named "Connection URL" then press the "Set" button.

> Note: Currently it's required that the server is running when you press "Set" for the connection to succeed

If the connection to the server succeeded you will see the following message

![Client Set Window](/guide/client-set.jpg)

Press "Ok" to return to the home screen

---

## 5) All Done

You should now be able to connect to the **Pocket Relay** server that you specified when setting up.

The setup tool screen should now look like the following:

![Test](/guide/client-home-set.jpg)

> Note: If the server IP address changes or if you would like to connect to another server change the IP address in the input and then press the "Update" button

If you were already logged into the _Official_ servers and you are using a Cracked game client you will get a message saying connection failed when you first open the game, You can ignore this message and press okay
then the multiplayer button and you will then be prompted to login where you can create yourself a new **Pocket Relay** account. (The menu says EA account as thats baked into the game code and the server can't change it)

---

## 6) Official Servers

If you would like to connect back to the official servers you can simply press the "Remove" button in the setup tool and then if you restart Mass Effect 3 you will connect to the official servers.

This does not remove the patch if you would like to remove the patch you must push the "Remove Patch" button however you don't need to do this to play on the official servers.

---

## 7) Uninstalling

If you would like to uninstall **Pocket Relay** press the "Remove" and "Remove Patch" buttons and then it is completely uninstalled and at this point you can delete the client exe files
