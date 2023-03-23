---
layout: "@layouts/GuideLayout.astro"
title: "Client Setup"
---

# Client Setup

[Back](/guide)
[Github](https://github.com/PocketRelay/Client)

This guide is for using the client tool. (**Pocket Relay Client**)

This guide will only work on Windows

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

> Make sure you keep this executable somewhere you will remember, as you will need to use this tool any time you want to connect to a Pocket Relay server

---

## 2) Run Client

Next open the executable by Double Clicking it or Right Click + Run As Administrator

After the application starts up you will see the following screen or something similar to this (It may look slightly different in the future)

![Client Home Screen](/guide/pocket-relay-client.jpg)

---

## 3) Patch Game

In order for Mass Effect 3 to be able to communicate with the **Pocket Relay** server you will need to patch your game

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

If the connection to the server succeeded you will see something similar following message

![Client Set Window](/guide/client-set.jpg)

Press "Ok" to return to the home screen

---

## 5) All Done

You **MUST** leave the app running while you play Mass Effect. Closing the app will cause you to switch back to the official servers

You should now be able to connect to the **Pocket Relay** server that you specified.

If you were already logged into the _Official_ servers and you are using a Cracked game client you will get a message saying connection failed when you first open the game, You can ignore this message and press okay
then the multiplayer button and you will then be prompted to login where you can create yourself a new **Pocket Relay** account. (The menu says EA account as thats baked into the game code and the server can't change it)

---

## 6) Official Servers

If you would like to connect back to the official servers all you have to do is close the app.

If your game is running you will need to close it and open it again after closing **Pocket Relay Client** in order for it to switch to the Official servers

This does not remove the patch if you would like to remove the patch you must push the "Remove Patch" button however you don't need to do this to play on the official servers.

---

## 7) Uninstalling

If you would like to uninstall **Pocket Relay** press the "Remove Patch" buttons and then it is completely uninstalled and at this point you can delete the client exe files
