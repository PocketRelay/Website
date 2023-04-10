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
6. [Playing with Cracked](#6-playing-with-cracked) Playing with cracked accounts
7. [Origin Unlinker](#7-origin-unlinker) Unlinking Origin game from Origin
8. [Official Servers](#8-official-servers) Guide for reverting to the official servers
9. [Uninstalling](#9-uninstalling) Guide to uninstall Pocket Relay

---

## 1) Download Client

In order to use the automatic client tool you must first download it from the link below:

| Platform                                           | Link                                                                                                      |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![Windows Icon](/icons/windows.svg) Windows        | [Download](https://github.com/PocketRelay/Client/releases/latest/download/pocket-relay-client.exe)        |
| ![Windows Icon](/icons/windows.svg) Windows Native | [Download](https://github.com/PocketRelay/Client/releases/latest/download/pocket-relay-client-native.exe) |

> The Windows Native version of the client is the same in functionality as the non-native version however its UI is less appealing but it only uses 3mb of ram instead of the 30mb that the normal version uses. It's up to your preference for which you decide.

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

If you are using a cracked game or _Origin Unlinker_ continue reading the next section.

If you have an **Origin** copy of the game and would like to play offline or create "cracked" accounts to play with you can follow the [Origin Unlinker Section](#7-origin-unlinker) which explains how to do this

## 6) Playing with Cracked

If you are using a cracked game client you will likely see the following message after starting the game

![ME3 Login Error](/guide/me-error.png)

This error is because the game attempted to login with the account details from the official server which don't exist on the Pocket Relay server. Simply press "OK" (You may be prompted with this screen twice)

You should be taken back to the main menu screen where you can push one of the two following buttons to visit the login prompt

![ME3 Multiplayer Button](/guide/me-multiplayer.png)

Or

![ME3 Multiplayer Button Alternative](/guide/me-multiplayer-alt.png)

After clicking this button you should see the following screen asking you to login

![ME3 Login](/guide/me-login.png)

If you've already previously created an account on this server you can simply enter the email and password and press login.

Otherwise to create an account press "Create an Origin Account (EA)"

You should then see the following screen:

![ME3 Create](/guide/me-create.png)

On this screen enter your email and password, you can leave all the other fields as is because they will not be stored by the Pocket Relay server. Once you've entered your details press the "Accept" button.

> This screen mentions it's creating an "Origin Account" however it's not actually. This text is just part of the game and cannot be changed by Pocket Relay

After pressing "Accept" you should see the following screen

![ME3 Accept](/guide/me-accept.png)

Here you simply press "I Have Read and Accept Both Documents" after this you should see the following screen

![ME3 Done](/guide/me-done.png)

On this screen you can press "Continue" and you should be taken to the main menu if you pressed the second button or the select character screen if you pressed "Multiplayer". From this point on you can continue as normal

---

## 7) Origin Unlinker

If you would like to make your Origin copy of the game act like the cracked game (Allow you to create and login to different accounts in game rather than being locked into your Origin account)

This is also useful if you would like to play offline as the server cannot handle Origin accounts offline

You can use the _Origin Unlinker ASI Plugin_

To install this plugin simply download the ME3OriginUnlinker.asi file from [Here](https://github.com/PocketRelay/ME3-ASI/raw/master/ME3OriginUnlinker/Release/ME3OriginUnlinker.asi) and place the ME3OriginUnlinker.asi file into the same directory as your MassEffect3.exe file.

To remove this plugin simply delete the ME3OriginUnlinker.asi file

## 8) Official Servers

If you would like to connect back to the official servers all you have to do is close the app.

If your game is running you will need to close it and open it again after closing **Pocket Relay Client** in order for it to switch to the Official servers.

> Note if you have installed the Origin Unlinker Plugin you will need to remove that in order to login properly with Origin

This does not remove the patch if you would like to remove the patch you must push the "Remove Patch" button however you don't need to do this to play on the official servers.

---

## 9) Uninstalling

If you would like to uninstall **Pocket Relay** press the "Remove Patch" buttons and then it is completely uninstalled and at this point you can delete the client exe files
