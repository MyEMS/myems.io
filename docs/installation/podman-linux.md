---
sidebar_position: 14
---

# Podman on Linux

In this guide, you will deploy MyEMS with Podman on Linux.

## Prerequisites
- Installed podman, npm on the host.
- Installed MySQL server.
- The MySQL database can be connected from the host on which the Podman Engine runs.

:::caution

- It is recommended to use root privileges to execute podman commands.

- After installing podman, use the command `systemctl status podman-restart.service` to check if the containers are configured for automatic startup and policy. If `Unit not found` is displayed, it means that the container cannot be automatic startup.

:::

## Step 1 Database

See [Database](./database.md)

## Step 2 myems-api

In this section, you will install myems-api on Podman.

* Copy source code to root directory
```bash
cp -r myems/myems-api /
```
```bash
cd /myems-api
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
podman build -t myems/myems-api .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-api .
```

* Run a Podman container

On host, create a share upload file folder:
```bash
mkdir /myems-upload
```

Create a container, bind-mount the share folder to the container, and also bind-mount the .env to the container:
```bash
podman run -d -p 8000:8000 -v /myems-upload:/var/www/myems-admin/upload -v /myems-api/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-api myems/myems-api
```

* -d Run container in background and print container ID

* -p Publish a container's port(s) to the host, 8000:8000 (Host:Container) binds port 8000 (right)  of the container to
TCP port 8000 (left) of the host machine.

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

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
podman save --output myems-api.tar myems/myems-api
```
* Copy the tarball file to another computer, and then load image from tarball file

```bash
podman load --input .\myems-api.tar
```

## Step 3 myems-admin

In this section, you will install myems-admin on Podman.

* Copy source code to root directory

```bash
cp -r myems/myems-admin /
```
```bash
cd /myems-admin
```

:::caution

Manually replace ~~127.0.0.1:8000~~ in nginx.conf with actual **HOST** ip and port of myems-api

:::

```bash
nano nginx.conf
```

```bash
      proxy_pass http://127.0.0.1:8000/;
```

* Build Image from Source Code

```bash
podman build -t myems/myems-admin .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-admin .
```

* Run a Podman container

On host, create a share upload file folder:
```bash
mkdir /myems-upload
```

Create a container, bind-mount the share upload file folder to the container and also bind-mount nginx.conf
```bash
podman run -d -p 8001:8001 -v /myems-upload:/var/www/myems-admin/upload -v /myems-admin/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-admin myems/myems-admin
```

* -d Run container in background and print container ID

* -p Publish a container's port(s) to the host, 8001:8001 (Host:Container) binds port 8001 (right)  of the container to
TCP port 8001 (left) of the host machine.

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

If you want to immigrate the image to another computer,

* Export image to tarball file
```bash
podman save --output myems-admin.tar myems/myems-admin
```

* Copy the tarball file to another computer, and then load image from tarball file

```bash
podman load --input .\myems-admin.tar
```

## Step 4 myems-modbus-tcp

In this section, you will install myems-modbus-tcp on Podman.

* Copy source code to root directory

```bash
cp -r myems/myems-modbus-tcp /
```
```bash
cd /myems-modbus-tcp
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
podman build -t myems/myems-modbus-tcp .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-modbus-tcp .
```

* Run a Podman container (run as superuser)

```bash
podman run -d -v /myems-modbus-tcp/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-modbus-tcp myems/myems-modbus-tcp
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Podman container

To immigrate the container to another computer,
* Export image to tarball file

```bash
podman save --output myems-modbus-tcp.tar myems/myems-modbus-tcp
```

* Copy the tarball file to another computer, and then load image from tarball file

```bash
podman load --input .\myems-modbus-tcp.tar
```

## Step 5 myems-cleaning

In this section, you will install myems-cleaning on Podman.

* Copy source code to root directory

```bash
cp -r myems/myems-cleaning /
```
```bash
cd /myems-cleaning
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
podman build -t myems/myems-cleaning .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-cleaning .
```

* Run a Podman container (run as superuser)

```bash
podman run -d -v /myems-cleaning/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-cleaning myems/myems-cleaning
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Podman container

To immigrate the container to another computer,
* Export image to tarball file

```bash
podman save --output myems-cleaning.tar myems/myems-cleaning
```
* Copy the tarball file to another computer, and then load image from tarball file

```bash
podman load --input .\myems-cleaning.tar
```

## Step 6 myems-normalization

In this section, you will install myems-normalization on Podman.

* Copy source code to root directory

```bash
cp -r myems/myems-normalization /
```
```bash
cd /myems-normalization
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
podman build -t myems/myems-normalization .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-normalization .
```

* Run a Podman container (run as superuser)

```bash
podman run -d -v /myems-normalization/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-normalization myems/myems-normalization
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Podman container

To immigrate the container to another computer,
* Export image to tarball file

```bash
podman save --output myems-normalization.tar myems/myems-normalization
```

* Copy the tarball file to another computer, and then load image from tarball file

```bash
podman load --input .\myems-normalization.tar
```

## Step 7 myems-aggregation

In this section, you will install myems-aggregation on Podman.

* Copy source code to root directory

```bash
cp -r myems/myems-aggregation /
```
```bash
cd /myems-aggregation
```

* Create .env file based on example.env file

```bash
cp example.env .env
```

:::caution

Manually replace ~~127.0.0.1~~ with real **HOST** IP address.

:::

* Build Image from Source Code

```bash
podman build -t myems/myems-aggregation .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-aggregation .
```

* Run a Podman container (run as superuser)

```bash
podman run -d -v /myems-aggregation/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-aggregation myems/myems-aggregation
```

* -d Run container in background and print container ID

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

The absolute path before colon is for path on host  and that may vary on your system.
The absolute path after colon is for path on container and that CANNOT be changed.
By passing .env as bind-mount parameter, you can change the configuration values later.
If you changed .env file, restart the container to make the change effective.

* Immigrate the Podman container

* Export image to tarball file
```bash
podman save --output myems-aggregation.tar myems/myems-aggregation
```
* Copy the tarball file to another computer, and then load image from tarball file
```bash
podman load --input .\myems-aggregation.tar
```


## Step 8 myems-web

In this section, you will install myems-web on Podman.

* Modify the config.js file:

:::note

Get mapboxToken at https://mapbox.com and then set showOnlineMap to true. If you wnat to turn off online map feature, set showOnlineMap to false

:::

```bash
cd myems/myems-web
```
```bash
nano src/config.js
```

:::caution

Replace ~~127.0.0.1:8000~~ in nginx.conf with real **HOST** ip and port of myems-api

:::

```bash
cd myems/myems-web
```
```bash
nano nginx.conf
```

* Copy source code to root directory

```bash
cp -r myems/myems-web /
```
```bash
cd /myems-web
```

:::info

You can safely ignore the command 'npm run build' in this section, because it is built into the Podmanfile

:::

* Build Image from Source Code

```bash
podman build -t myems/myems-web .
```

To build for multiple platforms and not only for the architecture and operating system that the user invoking the build happens to run.
You can use buildx and set the --platform flag to specify the target platform for the build output, (for example, linux/amd64, linux/arm64, or darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-web .
```

* Run a Podman container

On host, bind-mount nginx.conf
```bash
podman run -d -p 80:80 -v /myems-web/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-web myems/myems-web
```

* -d Run container in background and print container ID

* -p Publish a container's port(s) to the host, 80:80 (Host:Container) binds port 80 (right)  of the container to
TCP port 80 (left) of the host machine.

* -v If you use -v or --volume to bind-mount a file or directory that does not yet exist on the Podman host,
-v creates the endpoint for you. It is always created as a directory.
The ro option, if present, causes the bind mount to be mounted into the container as read-only.
For v4.7.0 or earlier versions, use '/code/.env' instead of '/app/.env'.

* --log-opt max-size=2m The maximum size of the log before it is rolled. A positive integer plus a modifier representing the unit of measure (k, m, or g).

* --log-opt max-file=2 The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer.

* --restart Restart policy to apply when a container exits

* --name Assign a name to the container

If you want to immigrate the image to another computer,
* Export image to tarball file
```bash
podman save --output myems-web.tar myems/myems-web
```

* Copy the tarball file to another computer, and then load image from tarball file
```bash
podman load --input .\myems-web.tar
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