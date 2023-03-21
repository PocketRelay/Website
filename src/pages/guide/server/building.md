---
layout: "@layouts/GuideLayout.astro"
title: "Building"
---

# Building Server Guide

[Back](/guide/server)

This guide is for manually building the server binary

- [Requirements](#requirements) Programs required to follow this guide
- [Crates.io](#cratesio) Guide for installing through crates.io
- [Combined Answer](#combined-answer) Combined quick answer to skip all the steps
  1. [Clone Repository](#1-clone-repository) First step to clone the git repository
  2. [Directory](#2-directory) Move to the source directory
  3. [Compiling](#3-compiling) Start compiling the source code
  4. [Server Binary](#4-server-binary) Finding the server binary

---

## Requirements

- **Rust & Cargo** Rust version 1.65.0 or greater is required in order to compile the server you can install both of these using Rustup which you can install using the guide [Here](https://www.rust-lang.org/learn/get-started)
- **Git** Git is required to clone the github repository to your system. You can ignore this step if you manually download the latest source archive from github directly [Here](https://github.com/PocketRelay/ServerRust/archive/refs/heads/master.zip)

> If you are using the source zip directly then extract it to a folder and skip the "Clone Repository" step

---

## Crates.io

![License](https://img.shields.io/github/license/PocketRelay/ServerRust?style=for-the-badge)
![Cargo Version](https://img.shields.io/crates/v/pocket-relay?style=for-the-badge)
![Build](https://img.shields.io/github/actions/workflow/status/PocketRelay/ServerRust/rust.yml?style=for-the-badge)

If you have Cargo installed you can automatically download, compile, and install the latest version of the server. Note this can be quite intensive and isn't
recommended for lower end devices. You can install with cargo using the following
command:

```bash
cargo install pocket-relay
```

When a new version of **Pocket Relay** is released you can run the same command
and cargo will automatically install the newest version.

After the command finishes running the server will be available through the `pocket-relay` command
which you can use to start it and you're done.

---

## Combined Answer

If you want skip all the steps and just have a list of commands to paste in for the default setup you can paste the following command into your terminal. (This is using the bash syntax for multiple commands)

```bash
git clone --depth 1 https://github.com/PocketRelay/Server.git pocket-relay && cd pocket-relay && cargo build --release
```

---

## 1) Clone Repository

> If you have already directly downloaded the repository source code from GitHub you can skip this step.

First you will need to clone the GitHub repository for the server. The following
command will clone only the latest code changes from the GitHub repository

```bash
git clone --depth 1 https://github.com/PocketRelay/Server.git pocket-relay
```

---

## 2) Directory

In order to build the server using commands you will need to open the server source code
directory that you've just cloned within your terminal. You can do that using the `cd` command.
The following command will set your current directory to the server source code:

```bash
cd pocket-relay
```

> The above command will only work if you run it in the same place that you've cloned the
> repository to

---

## 3) Compiling

Now to compile the server source into a binary that you can run you need to run the following command:

```bash
cargo build --release
```

---

## 4) Server Binary

Once the server building finishes you can now find the server executable which will be located
in the following folder

```
target/release
```

If you are on Windows the file will be named `pocket-relay.exe` and if you are on Linux it will be named `pocket-relay`

Now you can use that binary the same way as the pre-built binaries. Refer back to the [Server Executable Guide](/guide/server/executable) for what to do next
