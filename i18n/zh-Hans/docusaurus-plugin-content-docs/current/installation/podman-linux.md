---
sidebar_position: 14
---

# Linux上的Podman

在本指南中，您将在Linux上使用Podman部署MyEMS。

## 前提

- 主机上已安装podman、npm。
- 已安装MySQL服务器。
- MySQL数据库可以从Podman Engine运行的主机连接。

:::caution

- 建议使用root权限来执行podman命令。
- 安装podman后，使用命令 `systemctl status podman-restart.service` 检查容器是否配置为自动启动和策略。如果显示 `Unit not found` 表示容器无法自动启动。 

:::

## 第1步 数据库

参考 [Database](./database.md)

## 第2步 myems-api

在本节中，您将在Podman上安装myems-api。

* 将源代码复制到根目录

```bash
cp -r myems/myems-api /
cd /myems-api
```

* 基于example.env文件创建.env

:::caution

用真实的**主机**IP地址手动替换~~127.00.1~~。

:::

```bash
cp example.env .env
```

* 用源代码编译镜像

```bash
podman build -t myems/myems-api .
```

为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-api .
```

* 运行Podman容器

在主机上， 创建一个共享上传文件的文件夹:
```bash
mkdir /myems-upload
```
创建一个容器，将共享上传文件夹绑定到容器，并将.env绑定到容器：
```bash
podman run -d -p 8000:8000 -v /myems-upload:/var/www/myems-admin/upload -v /myems-api/.env:/code/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-api myems/myems-api
```

* -d 在后台运行容器并打印容器ID

* -p 向主机发布容器的端口，8000:8000（主机：容器）将容器的端口8000（右侧）绑定到主机的TCP端口8000（左侧）。

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，-v将为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

冒号前的绝对路径表示主机上的路径，可能因系统而异。
冒号后的绝对路径用于容器上的路径，不能更改。
通过将.env作为绑定装载参数传递，您可以稍后更改配置值。
如果更改了.env文件，请重新启动容器以使更改生效。

如果您想将镜像迁移到另一台计算机，

* 将镜像导出到tarball文件
```bash
podman save --output myems-api.tar myems/myems-api
```
* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像

```bash
podman load --input .\myems-api.tar
```

## 第3步 myems-admin

在本节中，您将在Podman上安装myems-admin。

* 将源代码复制到根目录

```bash
cp -r myems/myems-admin /
cd /myems-admin
```

:::caution

手动将nginx.conf中的~~127.00.1:8000~~替换为实际的**HOST**ip和myems-api端口

:::

```bash
nano nginx.conf
```

```bash
      proxy_pass http://127.0.0.1:8000/;
```

* 用源代码编译镜像

```bash
podman build -t myems/myems-admin .
```

如果为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-admin .
```

* 运行Podman容器

在主机上， 创建一个共享上传文件的文件夹:
```bash
mkdir /myems-upload
```
将共享上传文件夹绑定到容器，并将.env绑定到容器：
创建一个容器，绑定挂载共享上传文件文件夹到容器，并绑定挂载nginx.conf
```bash
podman run -d -p 8001:8001 -v /myems-upload:/var/www/myems-admin/upload -v /myems-admin/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-admin myems/myems-admin
```

* -d 在后台运行容器并打印容器ID

* -p 将容器的端口发布到主机，8001:8001（主机：容器）将容器的8001端口（右侧）绑定到主机的TCP端口8001（左侧）。

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，
-v为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

如果您想将镜像迁移到另一台计算机，
* 将镜像导出到tarball文件
```bash
podman save --output myems-admin.tar myems/myems-admin
```

* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像
```bash
podman load --input .\myems-admin.tar
```

## 第4步 myems-modbus-tcp

在本节中，您将在Podman上安装myems-modbus-tcp。

* 将源代码复制到根目录

```bash
cp -r myems/myems-modbus-tcp /
cd /myems-modbus-tcp
```

* 基于example.env文件创建.env

:::caution

用真实的**主机**IP地址手动替换~~127.00.1~~。

:::

```bash
cp example.env .env
```

* 用源代码编译镜像

```bash
podman build -t myems/myems-modbus-tcp .
```

为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-modbus-tcp .
```


* 运行Podman容器 (以超级用户运行)
```bash
podman run -d -v /myems-modbus-tcp/.env:/code/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-modbus-tcp myems/myems-modbus-tcp
```

* -d 在后台运行容器并打印容器ID

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，
-v为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

冒号前的绝对路径表示主机上的路径，可能因系统而异。
冒号后的绝对路径用于容器上的路径，不能更改。
通过将.env作为绑定装载参数传递，您可以稍后更改配置值。
如果更改了.env文件，请重新启动容器以使更改生效。

* 迁移Podman容器

为了将容器迁移到另一台计算机，
* 将镜像导出到tarball文件
```bash
podman save --output myems-modbus-tcp.tar myems/myems-modbus-tcp
```
* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像
```bash
podman load --input .\myems-modbus-tcp.tar
```

## 第5步 myems-cleaning

在本节中，您将在Podman上安装myems-cleaning。

* 将源代码复制到根目录

```bash
cp -r myems/myems-cleaning /
cd /myems-cleaning
```

* 基于example.env文件创建.env

:::caution

用真实的**主机**IP地址手动替换~~127.00.1~~。

:::

```bash
cp example.env .env
```

* 用源代码编译镜像

```bash
podman build -t myems/myems-cleaning .
```

为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-cleaning .
```

* 运行Podman容器 (以超级用户运行)
```bash
podman run -d -v /myems-cleaning/.env:/code/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-cleaning myems/myems-cleaning
```

* -d 在后台运行容器并打印容器ID

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，
-v为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

冒号前的绝对路径表示主机上的路径，可能因系统而异。
冒号后的绝对路径用于容器上的路径，不能更改。
通过将.env作为绑定装载参数传递，您可以稍后更改配置值。
如果更改了.env文件，请重新启动容器以使更改生效。

* 迁移Podman容器

为了将容器迁移到另一台计算机，
* 将镜像导出到tarball文件
```bash
podman save --output myems-cleaning.tar myems/myems-cleaning
```
* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像
```bash
podman load --input .\myems-cleaning.tar
```

## 第6步 myems-normalization

在本节中，您将在Podman上安装myems-normalization。

* 将源代码复制到根目录

```bash
cp -r myems/myems-normalization /
cd /myems-normalization
```

* 基于example.env文件创建.env

:::caution

用真实的**主机**IP地址手动替换~~127.00.1~~。

:::

```bash
cp example.env .env
```

* 用源代码编译镜像

```bash
podman build -t myems/myems-normalization .
```

为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-normalization .
```

* 运行Podman容器 (以超级用户运行)
```bash
podman run -d -v /myems-normalization/.env:/code/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-normalization myems/myems-normalization
```

* -d 在后台运行容器并打印容器ID

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，
-v为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

冒号前的绝对路径表示主机上的路径，可能因系统而异。
冒号后的绝对路径用于容器上的路径，不能更改。
通过将.env作为绑定装载参数传递，您可以稍后更改配置值。
如果更改了.env文件，请重新启动容器以使更改生效。

* 迁移Podman容器

为了将容器迁移到另一台计算机，
* 将镜像导出到tarball文件
```bash
podman save --output myems-normalization.tar myems/myems-normalization
```

* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像
```bash
podman load --input .\myems-normalization.tar
```

## 第7步 myems-aggregation

在本节中，您将在Podman上安装myems-aggregation。

* 将源代码复制到根目录

```bash
cp -r myems/myems-aggregation /
cd /myems-aggregation
```

* 基于example.env文件创建.env


```bash
cp example.env .env
```

:::caution

用真实的**主机**IP地址手动替换~~127.00.1~~。

:::

* 用源代码编译镜像

```bash
podman build -t myems/myems-aggregation .
```

为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-aggregation .
```

* 运行Podman容器 (以超级用户运行)
```bash
podman run -d -v /myems-aggregation/.env:/code/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-aggregation myems/myems-aggregation
```

* -d 在后台运行容器并打印容器ID

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，
-v为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

冒号前的绝对路径表示主机上的路径，可能因系统而异。
冒号后的绝对路径用于容器上的路径，不能更改。
通过将.env作为绑定装载参数传递，您可以稍后更改配置值。
如果更改了.env文件，请重新启动容器以使更改生效。

* 迁移Podman容器

* 将镜像导出到tarball文件
```bash
podman save --output myems-aggregation.tar myems/myems-aggregation
```
* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像
```bash
podman load --input .\myems-aggregation.tar
```

## 第8步 myems-web

在本节中，您将在Podman上安装myems-web。

* 如有必要，检查并更改配置文件：

```bash
cd myems/myems-web
nano src/config.js
```

:::caution

将nginx.conf中的~~127.00.1:8000~~替换为真正的**HOST** IP和myems-api端口

:::

```bash
cd myems/myems-web
nano nginx.conf
```

* 将源代码复制到根目录

```bash
cp -r myems/myems-web /
cd /myems-web
```

:::info

您可以安全地忽略本节中的命令“npm run build”，因为它内置在Podmanfile中

:::

* 用源代码编译镜像

```bash
podman build -t myems/myems-web .
```

为多个平台构建，而不仅仅是为当前用户运行的体系结构和操作系统构建。
您可以使用buildx并设置--platform标志来指定构建输出的目标平台（例如，linux/amd64、linux/arm64或darwin/amd64）。
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-web .
```

* 运行Podman容器

在主机上，将nginx.conf绑定到容器
```bash
podman run -d -p 80:80 -v /myems-web/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-web myems/myems-web
```

* -d 在后台运行容器并打印容器ID

* -p 向主机发布容器的端口，80:80（主机：容器）将容器的端口80（右）绑定到主机的TCP端口80（左）。

* -v 如果使用-v或--volume绑定装载Podman主机上尚不存在的文件或目录，
-v为您创建端点。它始终创建为目录。
ro选项（如果存在）会导致绑定装载以只读方式装载到容器中。

* --log-opt max-size=2m 滚动前日志的最大大小。正整数加上表示度量单位（k、m或g）的修饰符。

* --log-opt max-file=2 可以存在的最大日志文件数。如果滚动日志会创建多余的文件，则会删除最旧的文件。正整数。

* --restart 重新启动策略以在容器退出时应用

* --name 为容器指定名称

如果您想将镜像迁移到另一台计算机，
* 将镜像导出到tarball文件
```bash
podman save --output myems-web.tar myems/myems-web
```

* 将tarball文件复制到另一台计算机，然后从tarball文件加载镜像
```bash
podman load --input .\myems-web.tar
```

## 安装后

祝贺！您现在可以登录MyEMS Admin UI和Web UI。

### 默认端口

MyEMS Web UI: 80

MyEMS API: 8000

MyEMS Admin UI: 8001

### 默认密码
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


## 故障排除
