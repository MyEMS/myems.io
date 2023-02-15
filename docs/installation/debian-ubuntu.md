---
sidebar_position: 2
---

# Debian/Ubuntu

In this guide, you will deploy MyEMS onto Debian or Ubuntu server with physical or virtual machines.

## Prerequisites

This guide describes how to install MyEMS on Debian 10 Buster / Debian 11 Bullseye / Debian 12 Bookworm / Ubuntu 18.04 LTS / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS. Hardware requirements depend on chosen database and amount of devices connected to the system. To run MyEMS and MySQL on a single machine you will need at least 4GB of RAM.

## Step 1 Database

See [Database](./database.md)

## Step 2 myems-api

* Copy source code to a production Ubuntu Server and then install tools
```bash
cd myems/myems-api
sudo pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

* Install myems-api service:
```bash
sudo cp -r myems/myems-api /myems-api
```
Create .env file based on example.env and edit the .env file if needed:
```bash
sudo cp /myems-api/example.env /myems-api/.env
sudo nano /myems-api/.env
```
Check or change the listening port (default is 8000) in myems-api.service and myems-api.socket:
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
Add port to firewall:
```bash
sudo ufw allow 8000
```
Setup systemd configure files:
```bash
sudo cp /myems-api/myems-api.service /lib/systemd/system/
sudo cp /myems-api/myems-api.socket /lib/systemd/system/
sudo cp /myems-api/myems-api.conf /usr/lib/tmpfiles.d/
```
Next enable the services so that they autostart at boot:
```bash
sudo systemctl enable myems-api.socket
sudo systemctl enable myems-api.service
```
Start the services :
```bash
sudo systemctl start myems-api.socket
sudo systemctl start myems-api.service
```

## Step 3 myems-admin

* Install NGINX Server

refer to http://nginx.org/en/docs/install.html

* Configure NGINX
```bash
sudo nano /etc/nginx/nginx.conf
```
In the 'http' section, add some directives:
```
http{
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

Add a new 'server' section with directives as below:
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

* Install myems-admin :
  If the server can not connect to the internet, please compress the myems/myems-admin folder and upload it to the server and extract it to ~/myems/myems-admin
```bash
sudo mkdir /var/www
sudo cp -r myems/myems-admin  /var/www/myems-admin
sudo chmod 0755 -R /var/www/myems-admin
```
  Check the config file and change it if necessary:
```bash
sudo nano /var/www/myems-admin/app/api.js
```

:::caution

The 'upload' folder is for user uploaded files. DO NOT delete/move/overwrite the 'upload' folder when you upgraded myems-admin.
```bash
 /var/www/myems-admin/upload
```

:::

## Step 4 myems-modbus-tcp

In this step, you will install myems-modbus-tcp service.

```bash
cp -r myems/myems-modbus-tcp /myems-modbus-tcp
cd /myems-modbus-tcp
pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

Copy exmaple.env file to .env and modify the .env file:
```bash
cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
nano /myems-modbus-tcp/.env
```
Setup systemd service:
```bash
cp myems-modbus-tcp.service /lib/systemd/system/
```
Enable the service:
```bash
systemctl enable myems-modbus-tcp.service
```
Start the service:
```bash
systemctl start myems-modbus-tcp.service
```
Monitor the service:
```bash
systemctl status myems-modbus-tcp.service
```
View the log:
```bash
cat /myems-modbus-tcp.log
```

## Step 5 myems-cleaning

In this step, you will install myems-cleaning service.

```bash
cp -r myems-cleaning /myems-cleaning
cd /myems/myems-cleaning
pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

Copy exmaple.env file to .env and modify the .env file:
```bash
cp /myems-cleaning/example.env /myems-cleaning/.env
nano /myems-cleaning/.env
```
Setup systemd service:
```bash
cp myems-cleaning.service /lib/systemd/system/
```
Enable the service:
```bash
systemctl enable myems-cleaning.service
```
Start the service:
```bash
systemctl start myems-cleaning.service
```
Monitor the service:
```bash
systemctl status myems-cleaning.service
```
View the log:
```bash
cat /myems-cleaning.log
```

## Step 6 myems-normalization

In this step, you will install myems-normalization service.

```bash
cp -r myems/myems-normalization /myems-normalization
cd /myems-normalization
pip install -r requirements.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

Copy exmaple.env file to .env and modify the .env file:
```bash
cp /myems-normalization/example.env /myems-normalization/.env
nano /myems-normalization/.env
```
Setup systemd service:
```bash
cp myems-normalization.service /lib/systemd/system/
```
Enable the service:
```bash
systemctl enable myems-normalization.service
```
Start the service:
```bash
systemctl start myems-normalization.service
```
Monitor the service:
```bash
systemctl status myems-normalization.service
```
View the log:
```bash
cat /myems-normalization.log
```

## Step 7 myems-aggregation

In this step, you will install myems-aggregation service.

```bash
cp -r myems/myems-aggregation /myems-aggregation
cd /myems-aggregation
pip install -r requirements.txt
```
Copy exmaple.env file to .env and modify the .env file:
```bash
cp /myems-aggregation/example.env /myems-aggregation/.env
nano /myems-aggregation/.env
```
Setup systemd service:
```bash
cp myems-aggregation.service /lib/systemd/system/
```
Enable the service:
```bash
systemctl enable myems-aggregation.service
```
Start the service:
```bash
systemctl start myems-aggregation.service
```
Monitor the service:
```bash
systemctl status myems-aggregation.service
```
View the log:
```bash
cat /myems-aggregation.log
```


## Step 8 myems-web

In this step, you will install myems-web UI service.

*   Install NGINX  Server
refer to http://nginx.org/en/docs/install.html

*   Configure NGINX
```bash
sudo nano /etc/nginx/nginx.conf
```
In the 'http' section, add some directives:
```
http{
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

Add a new 'server' section with directives as below:
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
      ## Add another location /api in 'server' and replace demo address http://127.0.0.1:8000/ with actual url
      location /api {
          proxy_pass http://127.0.0.1:8000/;
          proxy_connect_timeout 75;
          proxy_read_timeout 600;
          send_timeout 600;
      }
  }
```
Restart NGINX
```bash
sudo systemctl restart nginx
```

* Install MyEMS Web UI:

Check and change the config file if necessary:
```bash
cd myems/myems-web
sudo nano src/config.js
```

Build and Compress
```bash
sudo npm run build
tar czvf myems-web.tar.gz build
```

Install
Upload the file myems-web.tar.gz to you web server. 
Note that the following path should be same as that was configured in nginx.conf.
```bash
tar xzf myems-web.tar.gz
sudo rm -r /var/www/myems-web
sudo mv build  /var/www/myems-web
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
