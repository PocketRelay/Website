---
sidebar_position: 1
pagination_prev: null
pagination_next: null
slug: "creating"
---

# Creating a server

Create up your own **Pocket Relay** server using one of the guides below.

<div class="row margin-bottom--lg margin-top--md">
    <div class="col">
        <div class="card">
            <div class="card__header">
                <h3>I want to run my server using an executable </h3>
            </div>
            <div class="card__body">
            <p>
                This is the standard setup is usually the best option for most users
                if you haven't used docker before or don't want to use docker and just want to quickly setup a server
            </p>
            </div>
            <div class="card__footer">
                <a class="button button--secondary button--block" href="/docs/server/executable">View Guide</a>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card">
            <div class="card__header">
                <h3>I want to run my server within Docker</h3>
            </div>
            <div class="card__body">
                <p>
                    This is intended for those who already have docker setup and would like to run Pocket Relay as a container rather than an executable
                </p>
            </div>
            <div class="card__footer">
                <a class="button button--secondary button--block" href="/docs/server/docker">View Guide</a>
            </div>
        </div>
    </div>
</div>

After setting up your server you can check out the [Configuration Builder](./configuration-builder.mdx) and [Configuration](./4-configuration.md) documentation to configure your server to your liking

:::caution WAN Servers 
If you plan to host a **WAN** server aka a server that you are exposing to users outside of your local network, it's crucial to review the [WAN](./8-wan.md) guide.
:::

:::caution Reverse Proxy Setup
Pocket Relay works behind reverse proxies, if you intend on using one make sure you follow the  [Reverse Proxy](./5-reverse-proxy.md) guide.
:::