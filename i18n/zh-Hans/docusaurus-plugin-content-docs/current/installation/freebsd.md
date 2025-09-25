---
sidebar_position: 13
---

# FreeBSD

在本指南中，您将在FreeBSD服务器上部署MyEMS。


## Prerequisites

本指南介绍如何在FreeBSD 13.2上安装MyEMS。硬件需求取决于所选数据库和连接到系统的设备数量。要在一台机器上运行MyEMS和MySQL，您至少需要4GB的RAM。

更新系统并安装工具:
```bash
pkg install git
```
```bash
pkg install python3
```
```bash
pkg install py39-pip-22.3.1
```
```bash
pkg install nginx
```
```bash
pkg install monit
```
克隆源代码：
```bash
cd ~
git clone https://gitee.com/myems/myems
```

## 第1步 数据库

参考 [Database](./database.md)

## 第2步 myems-api

* 安装 myems-api 服务:
```bash
cp -r ~/myems/myems-api /myems-api
```
```bash
cd /myems-api
```
```bash
pip install -r requirements.txt
```
:::tip

如果您遇到'Failed building wheel for pillow'错误, 您需要 [安装 Pillow](https://pillow.readthedocs.io/en/latest/installation.html)

:::

根据example.env创建.env文件，并根据需要编辑.env：

```bash
cp /myems-api/example.env /myems-api/.env
```
```bash
nano /myems-api/.env
```

安装 monit 配置文件:
```bash
nano /etc/monit.d/myems-api
check process mymes-api with pidfile /var/run/myems-api/pid
start program = "/usr/local/bin/gunicorn -b 0.0.0.0:8000 --pid /var/run/myems-api/pid --timeout 600 --workers=4 app:api &"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
接下来启用这些服务，以便它们在启动时自动启动：
```bash
monit restart
```

## 第3步 myems-admin

* 安装 NGINX 服务器

参考 http://nginx.org/en/docs/install.html
启用nginx服务:
```bash
service nginx enable
```
* 配置 NGINX
```bash
nano /etc/nginx/nginx.conf
```
In the 'http' section, add some directives:
```
http {
    client_header_timeout 600;
    client_max_body_size 512M;
    gzip on;
    gzip_min_length 512;
    gzip_proxied any;
    gzip_types *;
    gzip_vary on;
    proxy_buffering off;
    ...

}
```

在目录 /etc/nginx/conf.d/ 下新建一个文件：
```bash
nano /etc/nginx/conf.d/myems-admin.conf
```
编写如下指令, 如果myems-api服务运行在其它服务器上则用实际的地址替换 myems-api 默认地址 http://127.0.0.1:8000/
```
server {
    listen                 8001;
    server_name     myems-admin;
    location / {
        root    /var/www/myems-admin;
        index index.html index.htm;
    }
    ## To avoid CORS issue, use Nginx to proxy myems-api to path /api
    ## Add another location /api in 'server'
    ## Replace the default myems-api url http://127.0.0.1:8000/ with actual url if the myems-api servcie hosted on different server
    location /api {
        proxy_pass http://127.0.0.1:8000/;
        proxy_connect_timeout 75;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

* 安装 myems-admin :
  如果服务器无法连接到internet，请压缩myems/myems-admin文件夹并将其上传到服务器，然后将其解压缩到~/myems/myems-admin
```bash
mkdir /var/www
```
```bash
cp -r ~/myems/myems-admin  /var/www/myems-admin
```
```bash
chmod 0755 /var/www/myems-admin
```
检查配置文件，必要时进行更改：
```bash
nano /var/www/myems-admin/app/api.js
```

:::caution

“upload”文件夹用于用户上传的文件。升级myems-admin时，请勿删除/移动/覆盖“upload”文件夹。
```bash
 /var/www/myems-admin/upload
```

:::

重启nginx服务:
```bash
service nginx restart
```

## 第4步 myems-modbus-tcp

在此步骤中，您将安装myems-modbus-tcp服务。

```bash
cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
```
```bash
cd /myems-modbus-tcp
```
```bash
pip install -r requirements.txt
```

将exmaple.ev文件复制到.env并修改.env文件：

```bash
cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
```
```bash
nano /myems-modbus-tcp/.env
```

安装 monit 服务:

```bash
nano /etc/monit.d/myems-modbus-tcp
check file myems-modbus-tcp path /myems-modbus-tcp/main.py
start program = "/usr/local/bin/python3 /myems-modbus-tcp/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
启动服务：
```bash
monit restart
```
## 第5步 myems-cleaning

在此步骤中，您将安装myems-cleaning服务。

```bash
cp -r ~/myems/myems-cleaning /myems-cleaning
```
```bash
cd /myems-cleaning
```
```bash
pip install -r requirements.txt
```

将exmaple.ev文件复制到.env并修改.env文件：

```bash
cp /myems-cleaning/example.env /myems-cleaning/.env
```
```bash
nano /myems-cleaning/.env
```

安装monit服务：

```bash
nano /etc/monit.d/myems-cleaning
check file myems-cleaning path /myems-cleaning/main.py
start program = "/usr/local/bin/python3 /myems-cleaning/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
启动服务：
```bash
monit restart
```
## 第6步 myems-normalization


在此步骤中，您将安装myems-normalization服务。

```bash
cp -r ~/myems/myems-normalization /myems-normalization
```
```bash
cd /myems-normalization
```
```bash
pip install -r requirements.txt
```

将exmaple.ev文件复制到.env并修改.env文件：

```bash
cp /myems-normalization/example.env /myems-normalization/.env
```
```bash
nano /myems-normalization/.env
```

安装monit服务

```bash
nano /etc/monit.d/myems-normalization
check file myems-normalization path /myems-normalization/main.py
start program = "/usr/local/bin/python3 /myems-normalization/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
启动服务：
```bash
monit restart
```
## 第7步 myems-aggregation

在此步骤中，您将安装myems-aggregation服务。

```bash
cp -r ~/myems/myems-aggregation /myems-aggregation
```
```bash
cd /myems-aggregation
```
```bash
pip install -r requirements.txt
```
将exmaple.ev文件复制到.env并修改.env文件：

```bash
cp /myems-aggregation/example.env /myems-aggregation/.env
```
```bash
nano /myems-aggregation/.env
```

安装monit服务

```bash
nano /etc/monit.d/myems-aggregation
check file myems-aggregation path /myems-aggregation/main.py
start program = "/usr/local/bin/python3 /myems-aggregation/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
启动服务：
```bash
monit restart
```

## 第8步 myems-web

在此步骤中，您将安装myems-web服务。

*   安装 NGINX 服务器
参考 http://nginx.org/en/docs/install.html

*   配置 NGINX
删除默认文件
```bash
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/conf.d/default.conf
```

在目录 /etc/nginx/conf.d/ 下添加一个新文件
```bash
sudo nano /etc/nginx/conf.d/myems-web.conf
```

使用如下指令编写，如果myems-api服务托管在不同的服务器上，则使用实际的地址替换默认的myems-api地址http://127.0.0.1:8000/
```
server {
    listen                 80;
    server_name     myems-web;
    location / {
        root    /var/www/myems-web;
        index index.html index.htm;
        # add try_files directive to avoid 404 error while refreshing pages
        try_files $uri  /index.html;
    }
    ## To avoid CORS issue, use Nginx to proxy myems-api to path /api
    ## Add another location /api in 'server'
    ## replace the default myems-api url http://127.0.0.1:8000/ with actual url if the myems-api servcie hosted on different server
    location /api {
        proxy_pass http://127.0.0.1:8000/;
        proxy_connect_timeout 75;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

* 安装 MyEMS Web UI:

安装NodeJS:
```bash
pkg install node-18.16.0
```


修改配置文件：

:::note

从 https://mapbox.com 获取 mapboxToken 然后设置 showOnlineMap 为 true. 如果要关闭在线地图功能，设置 showOnlineMap 为 false

:::

```bash
cd ~/myems/myems-web
```
```bash
nano src/config.js
```

编译：
```bash
npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
npm run build
```

Install
Note that the following path should be same as that was configured in nginx.conf.
```bash
rm -r /var/www/myems-web
```
```bash
mv build  /var/www/myems-web
```

重启 NGINX
```bash
service nginx restart
```


## 安装后

祝贺您现在可以登录MyEMS Admin UI和Web UI。

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

