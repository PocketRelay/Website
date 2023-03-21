---
layout: "@layouts/GuideLayout.astro"
title: "Manual"
---

# Manual

This section is for manually setting up your Mass Effect 3 client and your computer to work with Pocket Relay servers this tutorial is for both Windows and Linux

- [Add Hosts file entry](#1-add-hosts-file-entry) Guide for modifying the hosts file
- [Patch Game](#2-patch-game) Guide for patching the game

---

## 1) Add Hosts file entry

In order for **Pocket Relay** to pretend to be the _Offical_ Mass Effect 3 servers you will need to modify your system hosts file to tell your computer to send the data that would normally go to the _Official_ servers to the **Pocket Relay** server instead.

This modification will redirect traffic from `gosredirector.ea.com` to the server address.

You will need administrative access in order to modify your hosts file

### ![Windows Icon](/icons/windows.svg) Windows

If you would like a tutorial for editing the hosts file that includes screenshots you can view the one on [freeCodeCamp](https://www.freecodecamp.org/news/how-to-find-and-edit-a-windows-hosts-file/)

Open Notepad as a Administrator and open the following file:

```
C:/Windows/System32/drivers/etc/hosts
```

---

### ![Linux Icon](/icons/linux.svg) Linux

Use your desired text editor with sudo to modify the following file:

```
/etc/hosts
```

---

Once you've opened your hosts file as admin add the following line to the bottom of the hosts file:

```
SERVER_IP_ADDRESS gosredirector.ea.com
```

Make sure to replace `SERVER_IP_ADDRESS` with the IP address of the **Pocket Relay**. If you are running the server on the same computer you can use 127.0.0.1

---

## 2) Patch Game

In order to make the Mass Effect 3 client able to connect to our un-official server you need to add a .dll file into the game folder so that the game is able to connect to **Pocket Relay**

The DLL files you need to download are [Here](/downloads/blinkw32.zip) once you've downloaded this zip file extract both the .dll files into the same folder as your `MassEffect3.exe` file and allow the files to be replaced.
