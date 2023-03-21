---
layout: "@layouts/GuideLayout.astro"
title: "Server Ports"
---

# Server Ports

[Back](/guide/config)

The server ports section of the configuration file contains the ports that each of the servers will listen on

```json
{
  "ports": {
    "redirector": 42127,
    "main": 42128,
    "telemetry": 42129,
    "qos": 42130,
    "http": 80
  }
}
```

> If you are going to/have port forwarded and change any of these ports you will also need to change your port forwarded ports and if you're in Docker you'll need to change the exposed ports

Ports can be any number between 1 and 65536 however ports below 1024 on linux require that the server be launched with sudo

---

## Redirector

```json
"redirector": 42127,
```

This is the port used by the **Redirector** server. This server is responsible for routing all connections to the **Main** server.

> 📌 WARNING 📌 You should **NOT** change this port unless you are within a Docker container or have some other system redirecting traffic from port 42127 to the port you've changed it to

---

## Main

```json
"main": 42128,
```

This is the port used by the **Main** server. You can freely change this port.

---

## Telemetry

```json
"telemetry": 42129,
```

This is the port used by the **Telemetry** server. You can freely change this port.

---

## Quality of Service

```json
"qos": 42130,
```

This is the port used by the **Quality of Service** server. You can freely change this port.

---

## HTTP

```json
"http": 80
```

This is the port used by the **HTTP** server. You can freely change this port.

> Note: Changing this port will require you to specify the port in both Connection URLs and when accessing the Dashboard from the browser
