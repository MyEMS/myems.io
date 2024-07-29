---
sidebar_position: 5
---

# Docker on Windows

In this guide, you will deploy MyEMS with Docker on Windows.

## Prerequisites
- Installed docker, npm on the host.
- Installed MySQL server.
- The MySQL database can be connected from the host on which the Docker Engine runs.

## Step 1 Database

See [Database](./database.md)

## Step 2 myems-api

In this section, you will install myems-api on Docker.

* Copy source code to root directory

```bash
cp -r myems/myems-api c:\
cd c:\myems-api
```

* Create .env file based on example.env file

:::caution

Manually replace ~~127.0.0.1~~ with real **HOST** IP address.

:::

```bash
cp example.env .env
```

* Build Image from Source Code

```bash
docker build -t myems/myems-api .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-api .
```

* Run a Docker container

On host, create a folder at c:\myems-upload, and bind-mount it to the container, and also bind-mount the .env to the container:
```bash
docker run -d -p 8000:8000 -v c:\myems-upload:/var/www/myems-admin/upload -v c:\myems-api\.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-api myems/myems-api
```

* -d Run container in background and print container ID

* -p Publish a container's port(s) to the host, 8000:8000 (Host:Container) binds port 8000 (right)  of the container to
TCP port 8000 (left) of the host machine.

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

If you want to immigrate the image to another computer,
* Export image to tarball file
```bash
docker save --output myems-api.tar myems/myems-api
```
* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-api.tar
```

## Step 3 myems-admin

In this section, you will install myems-admin on Docker.

* Copy source code to root directory

```bash
cp -r myems/myems-admin c:\
cd c:\myems-admin
```

:::caution

Manually replace ~~127.0.0.1:8000~~ in nginx.conf with actual **HOST** IP address and port of myems-api

:::

```bash
notepad nginx.conf
```

```bash
      proxy_pass http://127.0.0.1:8000/;
```

* Build Image from Source Code

```bash
docker build -t myems/myems-admin .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-admin .
```

* Run a Docker container

On host, create a folder at c:\myems-upload, and bind-mount it to the container, and also bind-mount the nginx.conf to the container:
-v parameter for upload folder must be same with that in myems-api
```bash
docker run -d -p 8001:8001 -v c:\myems-upload:/var/www/myems-admin/upload -v c:\myems-admin/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-admin myems/myems-admin
```

* -d Run container in background and print container ID

* -p Publish a container's port(s) to the host, 8001:8001 (Host:Container) binds port 8001 (right)  of the container to
TCP port 8001 (left) of the host machine.

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

If you want to immigrate the image to another computer,
* Export image to tarball file
```bash
docker save --output myems-admin.tar myems/myems-admin
```

* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-admin.tar
```

## Step 4 myems-modbus-tcp

In this section, you will install myems-modbus-tcp on Docker.

* Copy source code to root directory

```bash
cp -r myems/myems-modbus-tcp c:\
cd c:\myems-modbus-tcp
```

* Create .env file based on example.env file

:::caution

Manually replace ~~127.0.0.1~~ with real **HOST** IP address.

:::

```bash
cp example.env .env
```

* Build Image from Source Code

```bash
docker build -t myems/myems-modbus-tcp .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-modbus-tcp .
```

* Run a Docker container (Run as Administrator)
```bash
docker run -d -v c:\myems-modbus-tcp\.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-modbus-tcp myems/myems-modbus-tcp
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Docker container

To immigrate the container to another computer,
* Export image to tarball file
```bash
docker save --output myems-modbus-tcp.tar myems/myems-modbus-tcp
```
* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-modbus-tcp.tar
```

## Step 5 myems-cleaning

In this section, you will install myems-cleaning on Docker.

* Copy source code to root directory

```bash
cp -r myems/myems-cleaning c:\
cd c:\myems-cleaning
```

* Create .env file based on example.env file

:::caution

Manually replace ~~127.0.0.1~~ with real **HOST** IP address.

:::

```bash
cp example.env .env
```

* Build Image from Source Code

```bash
docker build -t myems/myems-cleaning .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-cleaning .
```

* Run a Docker container (Run as Administrator)
```bash
docker run -d -v c:\myems-cleaning\.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-cleaning myems/myems-cleaning
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Docker container

To immigrate the container to another computer,
* Export image to tarball file
```bash
docker save --output myems-cleaning.tar myems/myems-cleaning
```
* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-cleaning.tar
```

## Step 6 myems-normalization

In this section, you will install myems-normalization on Docker.

* Copy source code to root directory

```bash
cp -r myems/myems-normalization c:\
cd c:\myems-normalization
```

* Create .env file based on example.env file

:::caution

Manually replace ~~127.0.0.1~~ with real **HOST** IP address.

:::

```bash
cp example.env .env
```

* Build Image from Source Code

```bash
docker build -t myems/myems-normalization .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-normalization .
```

* Run a Docker container (Run as Administrator)
```bash
docker run -d -v c:\myems-normalization\.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-normalization myems/myems-normalization
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Docker container

To immigrate the container to another computer,
* Export image to tarball file
```bash
docker save --output myems-normalization.tar myems/myems-normalization
```

* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-normalization.tar
```

## Step 7 myems-aggregation

In this section, you will install myems-aggregation on Docker.

* Copy source code to root directory

```bash
cp -r myems/myems-aggregation c:\
cd c:\myems-aggregation
```

* Create .env file based on example.env file

:::caution

Manually replace ~~127.0.0.1~~ with real **HOST** IP address.

:::

```bash
cp example.env .env
```

* Build Image from Source Code

```bash
docker build -t myems/myems-aggregation .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-aggregation .
```

* Run a Docker container (run as Administrator)
```bash
docker run -d -v c:\myems-aggregation\.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-aggregation myems/myems-aggregation
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Docker container

* Export image to tarball file
```bash
docker save --output myems-aggregation.tar myems/myems-aggregation
```
* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-aggregation.tar
```


## Step 8 myems-web

In this section, you will install myems-web on Docker.

* Modify the config.js file:

:::note

Get mapboxToken at https://mapbox.com and then set showOnlineMap to true. If you wnat to turn off online map feature, set showOnlineMap to false

:::

```bash
cd myems/myems-web
notepad src/config.js
```

:::caution

Replace ~~127.0.0.1:8000~~ in nginx.conf with real **HOST** ip and port of myems-api

:::

```bash
cd myems/myems-web
notepad nginx.conf
```

* Copy source code to root directory

```bash
cp -r myems/myems-web c:\
cd c:\myems-web
```

:::info

You can safely ignore the command 'npm run build' in this section, because it is built into the Dockerfile

:::

* Build Image from Source Code

```bash
docker build -t myems/myems-web .
docker image prune -f
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-web .
docker image prune -f
```

* Run a Docker container

On host, bind-mount nginx.conf
```bash
docker run -d -p 80:80 -v c:\myems-web/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-web myems/myems-web
```

* -d Run container in background and print container ID

* -p Publish a container's port(s) to the host, 80:80 (Host:Container) binds port 80 (right)  of the container to
TCP port 80 (left) of the host machine.

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Docker host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

If you want to immigrate the image to another computer,
* Export image to tarball file
```bash
docker save --output myems-web.tar myems/myems-web
```

* Copy the tarball file to another computer, and then load image from tarball file
```bash
docker load --input .\myems-web.tar
```

## Post-installation

Congratulations! You are able to login the MyEMS Admin UI and Web UI now.

### Default Ports

MyEMS Web UI: 80

MyEMS API: 8000

MyEMS Admin UI: 8001

### Default Passwords
<details>
  <summary>Admin UI</summary>

```
administrator

!MyEMS1
```
</details>

<details>
  <summary>Web UI</summary>

```
administrator@myems.io

!MyEMS1
```
</details>


## Troubleshooting

