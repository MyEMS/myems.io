---
sidebar_position: 7
---

# 树莓派

在本指南中，您将把 MyEMS 部署到 Raspberry Pi 上。

## 先决条件

* Raspberry Pi 4 Model B (4GB RAM)
* Raspberry Pi OS Lite (64 bit)

## 克隆源代码

```
sudo apt install git
sudo apt install pip
sudo apt install ufw
cd ~
git clone https://github.com/myems/myems
```

## 第1步 数据库

* 设置 MySQL 服务器

```
sudo apt update
sudo apt upgrade
sudo apt install mariadb-server
```
默认情况下，MySQL 安装时没有设置任何密码，这意味着您无需任何身份验证即可访问 MySQL 服务器。
运行以下命令以开始 MySQL 保护过程。

```
sudo mysql_secure_installation
```
```
Enter current password for root (enter for none): [Enter key or return key]
Switch to unix_socket authentication [Y/n] Y
Change the root password? [Y/n] Y
New password: !MyEMS1
Re-enter new password: !MyEMS1
Remove anonymous users? [Y/n] Y
Disallow root login remotely? [Y/n] n
Remove test database and access to it? [Y/n] Y
Reload privilege tables now? [Y/n] Y
```

* 为 MyEMS 安装数据库架构和脚本。

参见 [Database](./database.md)



## 第2步 myems-api

* 安装 myems-api 服务:
```bash
sudo cp -r ~/myems/myems-api /myems-api
cd /myems-api
sudo pip install -r requirements.txt
```

根据example.env创建.env文件，并根据需要编辑.env：
```bash
sudo cp /myems-api/example.env /myems-api/.env
sudo nano /myems-api/.env
```
检查或更改myems-api.service和myems-api.socket中的侦听端口（默认值为8000）：
```bash
sudo nano /myems-api/myems-api.service
```
```bash
ExecStart=/usr/local/bin/gunicorn -b 0.0.0.0:8000 --pid /run/myems-api/pid --timeout 600 --workers=4 app:api
```
```bash
sudo nano /myems-api/myems-api.socket
```
```bash
ListenStream=0.0.0.0:8000
```
将端口添加到防火墙：
```bash
sudo ufw allow 8000
```
安装 systemd 配置文件:
```bash
sudo cp /myems-api/myems-api.service /lib/systemd/system/
sudo cp /myems-api/myems-api.socket /lib/systemd/system/
sudo cp /myems-api/myems-api.conf /usr/lib/tmpfiles.d/
```
接下来启用这些服务，以便它们在启动时自动启动：
```bash
sudo systemctl enable myems-api.socket
sudo systemctl enable myems-api.service
```
启动服务：
```bash
sudo systemctl start myems-api.socket
sudo systemctl start myems-api.service
```

## 第3步 myems-admin

* 安装 NGINX 服务器

参考 http://nginx.org/en/linux_packages.html#Debian
```
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/debian `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list

echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx

sudo apt update
sudo apt install nginx

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

添加一个新的“server”部分，其指令如下：
```
  server {
      listen                 8001;
      server_name     myems-admin;
      location / {
          root    /var/www/myems-admin;
          index index.html index.htm;
      }
      ## To avoid CORS issue, use Nginx to proxy myems-api to path /api
      ## Add another location /api in 'server' and replace demo address http://127.0.0.1:8000/ with actual url
      location /api {
          proxy_pass http://127.0.0.1:8000/;
          proxy_connect_timeout 75;
          proxy_read_timeout 600;
          send_timeout 600;
      }
  }
```

* 安装 myems-admin :

```bash
sudo mkdir /var/www
sudo cp -r ~/myems/myems-admin  /var/www/myems-admin
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
sudo ufw allow 8001
```

## 第4步 myems-modbus-tcp

在此步骤中，您将安装myems-modbus-tcp服务。

```bash
sudo cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
cd /myems-modbus-tcp
sudo pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
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
cd /myems-cleaning
sudo pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-cleaning/example.env /myems-cleaning/.env
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
cd /myems-normalization
sudo pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-normalization/example.env /myems-normalization/.env
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
cd /myems-aggregation
sudo pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```
将exmaple.ev文件复制到.env并修改.env文件：
```bash
sudo cp /myems-aggregation/example.env /myems-aggregation/.env
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
参考 http://nginx.org/en/docs/install.html

*   配置 NGINX
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

添加一个新的“server”部分，其指令如下：
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
      ## NOTE: replace dafulat address http://127.0.0.1:8000/ with actual IP or URL
      location /api {
          proxy_pass http://127.0.0.1:8000/;
          proxy_connect_timeout 75;
          proxy_read_timeout 600;
          send_timeout 600;
      }
  }
```
重启 NGINX
```bash
sudo systemctl restart nginx
```

* 安装 MyEMS Web UI:

安装NodeJS:
```
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

修改配置文件：

:::note

从 https://mapbox.com 获取 mapboxToken 然后设置 showOnlineMap 为 true. 如果要关闭在线地图功能，设置 showOnlineMap 为 false

:::

```bash
cd ~/myems/myems-web
sudo nano src/config.js
```

编译和压缩：
```bash
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
sudo npm run build
```

安装
```bash
sudo mv build  /var/www/myems-web
```

将端口添加到防火墙：
```bash
sudo ufw allow 80
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