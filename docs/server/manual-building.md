---
sidebar_position: 6
---

# Manual Building

Learn how to manually compile the server executable from source.

Keep in mind that when manually building the server, the master branch contains the latest changes, which may be untested or not intended for general use. It's recommended to checkout a specific release tag instead of master to ensure the compiled version is stable.

## Requirements

- **Rust & Cargo:** Rust version 1.70.0 or newer is required. You can install both using Rustup; follow the guide [here](https://www.rust-lang.org/learn/get-started).
- **Git:** Git is required to clone the GitHub repository to your system. You can ignore this step if you manually download the latest source archive directly from GitHub [here](https://github.com/PocketRelay/ServerRust/archive/refs/heads/master.zip).

:::note
If you are using the source zip directly, extract it to a folder and skip the "Clone Repository" step.
:::

## Combined Answer

If you want to skip all the steps and just have a list of commands to paste in for the default setup, you can use the following command in your terminal (bash syntax for multiple commands):

```shell
git clone --depth 1 https://github.com/PocketRelay/Server.git pocket-relay && cd pocket-relay && cargo build --release
```

---

## 1) Clone Repository

:::note
If you have already directly downloaded the repository source code from GitHub, you can skip this step.
:::

First, clone the GitHub repository for the server. The following command will clone only the latest code changes from the GitHub repository:

```shell
git clone --depth 1 https://github.com/PocketRelay/Server.git pocket-relay
```

---

## 2) Directory

To build the server using commands, open the server source code directory you've just cloned in your terminal. You can do that using the `cd` command. The following command will set your current directory to the server source code:

```shell
cd pocket-relay
```

:::note
The above command will only work if you run it in the same place that you've cloned the repository to.
:::

---

## 3) Compiling

Now, to compile the server source into a binary, run the following command:

```shell
cargo build --release
```

---

## 4) Server Binary

Once the server building finishes, you can find the server executable in the following folder:

```
target/release
```

:::note
If you are on Windows, the file will be named `pocket-relay.exe`, and if you are on Linux, it will be named `pocket-relay`.
:::

Now you can use that binary the same way as the pre-built binaries. Refer back to the [Executable](executable.mdx) guide for what to do next.