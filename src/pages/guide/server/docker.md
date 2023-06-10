---
layout: "@layouts/GuideLayout.astro"
title: "Docker"
---

# Docker Guide

[Back](/guide/server)

This guide is for using **Pocket Relay** within a [Docker](https://www.docker.com/) containerized environment. Refer to the [Executable Guide](/guide/server/executable) if you aren't intending to run your **Pocket Relay** server within Docker

- [Docker Image](#docker-image) Details about the Docker Image
- [Docker Compose](#docker-compose) Instructions for use with docker-compose
- [Docker Run](#docker-run) Instructions for use with docker run

---

## Docker Image

The prebuilt image for compiling and running the **Pocket Relay** server is available on **Docker Hub** under the following name:

```
jacobtread/pocket-relay:latest
```

There is a Dockerfile included in the Server source repository if you would like
to manually build the Docker image

---

## Docker Compose

If you would like to use [Docker Compose](https://docs.docker.com/compose/) to run your server you can create a `docker-compose.yml` file with the following contents:

```yaml
version: "3"
services:
  pocket-relay:
    container_name: pocket-relay
    restart: unless-stopped
    ports:
      # Server port
      - 80:80/tcp
    image: jacobtread/pocket-relay:latest
```

---

## Docker Run

If you would like to use just the `docker run` command you can use the following command to start a new **Pocket Relay** container and expose the nessicary port

```bash
docker run -d -p 80:80/tcp jacobtread/pocket-relay:latest
```

---

## Updating 

When a new version of Pocket Relay is released you will need to update the image using

```bash
docker pull jacobtread/pocket-relay:latest
```