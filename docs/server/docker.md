---
sidebar_position: 3
---

# Docker

Create a server that runs within a Docker container

## Docker Image

**Pocket Relay** ships a minimal alpine linux docker image that downloads and runs the server. This image is

```
jacobtread/pocket-relay:latest
```

The Dockerfile used for this image can be found in the server repository [Here](https://github.com/PocketRelay/Server/blob/master/Dockerfile)

:::caution
You **MUST** create a config.json file before you run any of these docker script as otherwise you will run into an error where
docker creates a folder named "config.json" rather than binding the to file.

See [Configuration](./configuration) for a default configuration
:::


## Docker Compose

The following docker-compose file will bind the config.json and data folder for Pocket Relay to the same directory that the server
is running in. As mentioned in the caution note make sure that config.json exists in the same folder as this docker-compose.yaml file.

```yml title=docker-compose.yml
version: "3"
services:
  pocket-relay:
    container_name: pocket-relay
    restart: unless-stopped
    ports:
      # Server port
      - 80:80/tcp
    image: jacobtread/pocket-relay:latest
    volumes:
      # Bind the server config to a local config.json file
      - ./config.json:/app/config.json
      # Binding the server data to a local data folder
      - ./data:/app/data
```

Once you've created the above docker-compose.yml file you can use the following command to start the container

```shell
docker-compose up
```

If you change the server port in the config.json file make sure to change the docker-compose file port exposing
```yml
  ports:
    # Server port
    - {NEW PORT}:{NEW PORT}/tcp
```

## Docker Run

You can directly create a server using the docker run command below. As mentioned in the caution note make sure that config.json exists in the same folder as you are running this command. The container will bind to the current folder you are in and will store the server data there

This version doesn't support locally binding a configuration file, so you will be stuck using the default configuration unless you use the docker compose example above:

```shell
docker run -d -p 80:80/tcp -v ./data:/app/data jacobtread/pocket-relay:latest
```


## Updating
