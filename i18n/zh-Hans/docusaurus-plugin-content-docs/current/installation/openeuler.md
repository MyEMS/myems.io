---
sidebar_position: 11
---

# openEuler

在本指南中，您将在openEuler服务器上部署MyEMS。

## 前提

本指南介绍如何在openEuler 23.03上安装MyEMS。硬件需求取决于所选数据库和连接到系统的设备数量。要在一台机器上运行MyEMS和MySQL，您至少需要4GB的RAM。

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
sudo cp -r ~/myems/myems-api /myems-api
```
```bash
cd /myems-api
```
```bash
sudo pip install -r requirements.txt
```
根据example.env创建.env文件，并根据需要编辑.env：
```bash
sudo cp /myems-api/example.env /myems-api/.env
```
```bash
sudo nano /myems-api/.env
```
将端口添加到防火墙：
```bash
sudo firewall-cmd --zone=public --add-port=8000/tcp --permanent
```
```bash
sudo firewall-cmd --reload
```
安装 systemd 配置文件:
```bash
sudo cp /myems-api/myems-api.service /lib/systemd/system/
```
```bash
sudo cp /myems-api/myems-api.socket /lib/systemd/system/
```
```bash
sudo cp /myems-api/myems-api.conf /usr/lib/tmpfiles.d/
```
接下来启用这些服务，以便它们在启动时自动启动：
```bash
sudo systemctl enable myems-api.socket
```
```bash
sudo systemctl enable myems-api.service
```
启动服务：
```bash
sudo systemctl start myems-api.socket
```
```bash
sudo systemctl start myems-api.service
```

## 第3步 myems-admin

* 安装 NGINX 服务器

参考 http://nginx.org/en/linux_packages.html#RHEL

启用nginx服务:
```bash
sudo systemctl enable nginx.service
```
* 配置 NGINX
```bash
sudo nano /etc/nginx/nginx.conf
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
sudo nano /etc/nginx/conf.d/myems-admin.conf
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
sudo mkdir /var/www
```
```bash
sudo cp -r ~/myems/myems-admin  /var/www/myems-admin
```
```bash
sudo chmod 0755 -R /var/www/myems-admin
```
检查配置文件，必要时进行更改：
```bash
sudo nano /var/www/myems-admin/app/api.js
```

:::caution

“upload”文件夹用于用户上传的文件。升级myems-admin时，请勿删除/移动/覆盖“upload”文件夹。
```bash
 /var/www/myems-admin/upload
```

:::

将端口添加到防火墙：
```bash
sudo firewall-cmd --zone=public --add-port=8001/tcp --permanent
```
```bash
sudo firewall-cmd --reload
```
重启nginx服务:
```bash
sudo systemctl restart nginx.service
```

:::tip

如果您遇到“403 Forbidden”nginx错误，可以通过使用命令“sudo setforce 0”更改SELinx模式来修复它

:::

## 第4步 myems-modbus-tcp

在此步骤中，您将安装myems-modbus-tcp服务。

```bash
sudo cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
```
```bash
cd /myems-modbus-tcp
```
```bash
sudo pip install -r requirements.txt
```

将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
```
```bash
sudo nano /myems-modbus-tcp/.env
```
安装 systemd 服务:
```bash
sudo cp myems-modbus-tcp.service /lib/systemd/system/
```
启用服务:
```bash
sudo systemctl enable myems-modbus-tcp.service
```
启动服务:
```bash
sudo systemctl start myems-modbus-tcp.service
```
监控服务:
```bash
sudo systemctl status myems-modbus-tcp.service
```
查看日志:
```bash
cat /myems-modbus-tcp.log
```

## 第5步 myems-cleaning

在此步骤中，您将安装myems-cleaning服务。

```bash
sudo cp -r ~/myems/myems-cleaning /myems-cleaning
```
```bash
cd /myems-cleaning
```
```bash
sudo pip install -r requirements.txt
```

将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-cleaning/example.env /myems-cleaning/.env
```
```bash
sudo nano /myems-cleaning/.env
```
安装systemd服务：
```bash
sudo cp /myems-cleaning/myems-cleaning.service /lib/systemd/system/
```
启用服务：
```bash
sudo systemctl enable myems-cleaning.service
```
启动服务：
```bash
sudo systemctl start myems-cleaning.service
```
监控服务：
```bash
sudo systemctl status myems-cleaning.service
```
查看日志：
```bash
cat /myems-cleaning.log
```

## 第6步 myems-normalization

在此步骤中，您将安装myems-normalization服务。

```bash
sudo cp -r ~/myems/myems-normalization /myems-normalization
```
```bash
cd /myems-normalization
```
```bash
sudo pip install -r requirements.txt
```

将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-normalization/example.env /myems-normalization/.env
```
```bash
sudo nano /myems-normalization/.env
```
安装systemd服务
```bash
sudo cp /myems-normalization/myems-normalization.service /lib/systemd/system/
```
启用服务：
```bash
sudo systemctl enable myems-normalization.service
```
启动服务：
```bash
sudo systemctl start myems-normalization.service
```
监控服务：
```bash
sudo systemctl status myems-normalization.service
```
查看日志：
```bash
cat /myems-normalization.log
```

## 第7步 myems-aggregation

在此步骤中，您将安装myems-aggregation服务。

```bash
sudo cp -r ~/myems/myems-aggregation /myems-aggregation
```
```bash
cd /myems-aggregation
```
```bash
sudo pip install -r requirements.txt
```
将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-aggregation/example.env /myems-aggregation/.env
```
```bash
sudo nano /myems-aggregation/.env
```
安装systemd服务
```bash
sudo cp /myems-aggregation/myems-aggregation.service /lib/systemd/system/
```
启用服务：
```bash
sudo systemctl enable myems-aggregation.service
```
启动服务：
```bash
sudo systemctl start myems-aggregation.service
```
监控服务：
```bash
sudo systemctl status myems-aggregation.service
```
查看日志：
```bash
cat /myems-aggregation.log
```


## 第8步 myems-web

在此步骤中，您将安装myems-web服务。

*   安装 NGINX 服务器
参考 http://nginx.org/en/linux_packages.html#Debian

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
sudo dnf install nodejs
```


修改配置文件：

:::note

从 https://mapbox.com 获取 mapboxToken 然后设置 showOnlineMap 为 true. 如果要关闭在线地图功能，设置 showOnlineMap 为 false

:::

```bash
cd ~/myems/myems-web
```
```bash
sudo nano src/config.js
```

编译和压缩：
```bash
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
sudo npm run build
```

安装:
将文件上传到web服务器。
注意，以下路径应该与nginx.conf中配置的路径相同。
```bash
sudo mv build  /var/www/myems-web
```

将端口添加到防火墙：
```bash
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
```
```bash
sudo firewall-cmd --reload
```

重启 NGINX
```bash
sudo systemctl restart nginx
```


:::tip

如果您遇到“500内部服务器错误”nginx错误，可以通过使用命令“sudo setforce 0”更改SELinx模式来修复它

:::

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

