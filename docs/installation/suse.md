---
sidebar_position: 9
---

# SUSE

In this guide, you will deploy MyEMS on SUSE Linux Enterprise Server.

## Prerequisites

This guide describes how to install MyEMS on SUSE Linux Enterprise Server 15. Hardware requirements depend on chosen database and amount of devices connected to the system. To run MyEMS and MySQL on a single machine you will need at least 4GB of RAM.

Clone source code:
```bash
cd ~
git clone https://github.com/myems/myems
```

## Step 1 Database

See [Database](./database.md)

## Step 2 myems-api

* Install myems-api service:
```bash
sudo cp -r ~/myems/myems-api /myems-api
```
```bash
cd /myems-api
```
```bash
sudo pip install -r requirements.txt
```
Create .env file based on example.env and edit the .env file if needed:
```bash
sudo cp /myems-api/example.env /myems-api/.env
```
```bash
sudo vi /myems-api/.env
```
Add port to firewall:
```bash
sudo firewall-cmd --zone=public --add-port=8000/tcp --permanent
```
```bash
sudo firewall-cmd --reload
```
Setup systemd configure files:
```bash
sudo cp /myems-api/myems-api.service /lib/systemd/system/
```
```bash
sudo cp /myems-api/myems-api.socket /lib/systemd/system/
```
```bash
sudo cp /myems-api/myems-api.conf /usr/lib/tmpfiles.d/
```
Next enable the services so that they autostart at boot:
```bash
sudo systemctl enable myems-api.socket
```
```bash
sudo systemctl enable myems-api.service
```
Start the services :
```bash
sudo systemctl start myems-api.socket
```
```bash
sudo systemctl start myems-api.service
```

## Step 3 myems-admin

* Install NGINX Server

refer to http://nginx.org/en/linux_packages.html#Debian

Enable the nginx service:
```bash
sudo systemctl enable nginx.service
```

* Configure NGINX
```bash
sudo vi /etc/nginx/nginx.conf
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

Add a new file under /etc/nginx/conf.d/
```bash
sudo vi /etc/nginx/conf.d/myems-admin.conf
```
Write with directives as below, replace the default myems-api url http://127.0.0.1:8000/ with actual url if the myems-api servcie hosted on a different server
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
    ## Replace the default myems-api url http://127.0.0.1:8000/ with actual url if the myems-api servcie hosted on a different server
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
```
```bash
sudo cp -r ~/myems/myems-admin  /var/www/myems-admin
```
```bash
sudo chmod 0755 -R /var/www/myems-admin
```
  Check the config file and change it if necessary:
```bash
sudo vi /var/www/myems-admin/app/api.js
```

:::caution

The 'upload' folder is for user uploaded files. DO NOT delete/move/overwrite the 'upload' folder when you upgraded myems-admin.
```bash
 /var/www/myems-admin/upload
```

:::

Add port to firewall:
```bash
sudo firewall-cmd --zone=public --add-port=8001/tcp --permanent
```
```bash
sudo firewall-cmd --reload
```

## Step 4 myems-modbus-tcp

In this step, you will install myems-modbus-tcp service.

```bash
sudo cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
```
```bash
cd /myems-modbus-tcp
```
```bash
sudo pip install -r requirements.txt
```

Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
```
```bash
sudo vi /myems-modbus-tcp/.env
```
Setup systemd service:
```bash
sudo cp myems-modbus-tcp.service /lib/systemd/system/
```
Enable the service:
```bash
sudo systemctl enable myems-modbus-tcp.service
```
Start the service:
```bash
sudo systemctl start myems-modbus-tcp.service
```
Monitor the service:
```bash
sudo systemctl status myems-modbus-tcp.service
```
View the log:
```bash
cat /myems-modbus-tcp.log
```

## Step 5 myems-cleaning

In this step, you will install myems-cleaning service.

```bash
sudo cp -r ~/myems/myems-cleaning /myems-cleaning
```
```bash
cd /myems-cleaning
```
```bash
sudo pip install -r requirements.txt
```

Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-cleaning/example.env /myems-cleaning/.env
```
```bash
sudo vi /myems-cleaning/.env
```
Setup systemd service:
```bash
sudo cp /myems-cleaning/myems-cleaning.service /lib/systemd/system/
```
Enable the service:
```bash
sudo systemctl enable myems-cleaning.service
```
Start the service:
```bash
sudo systemctl start myems-cleaning.service
```
Monitor the service:
```bash
sudo systemctl status myems-cleaning.service
```
View the log:
```bash
cat /myems-cleaning.log
```

## Step 6 myems-normalization

In this step, you will install myems-normalization service.

```bash
sudo cp -r ~/myems/myems-normalization /myems-normalization
```
```bash
cd /myems-normalization
```
```bash
sudo pip install -r requirements.txt
```

Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-normalization/example.env /myems-normalization/.env
```
```bash
sudo vi /myems-normalization/.env
```
Setup systemd service:
```bash
sudo cp /myems-normalization/myems-normalization.service /lib/systemd/system/
```
Enable the service:
```bash
sudo systemctl enable myems-normalization.service
```
Start the service:
```bash
sudo systemctl start myems-normalization.service
```
Monitor the service:
```bash
sudo systemctl status myems-normalization.service
```
View the log:
```bash
cat /myems-normalization.log
```

## Step 7 myems-aggregation

In this step, you will install myems-aggregation service.

```bash
sudo cp -r ~/myems/myems-aggregation /myems-aggregation
```
```bash
cd /myems-aggregation
```
```bash
pip install -r requirements.txt
```
Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-aggregation/example.env /myems-aggregation/.env
```
```bash
vi /myems-aggregation/.env
```
Setup systemd service:
```bash
sudo cp /myems-aggregation/myems-aggregation.service /lib/systemd/system/
```
Enable the service:
```bash
sudo systemctl enable myems-aggregation.service
```
Start the service:
```bash
sudo systemctl start myems-aggregation.service
```
Monitor the service:
```bash
sudo systemctl status myems-aggregation.service
```
View the log:
```bash
cat /myems-aggregation.log
```


## Step 8 myems-web

In this step, you will install myems-web UI service.

*   Install NGINX  Server
refer to http://nginx.org/en/linux_packages.html#Debian

*   Configure NGINX

Remove default files
```bash
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/conf.d/default.conf
```

Add a new file under /etc/nginx/conf.d/
```bash
sudo nano /etc/nginx/conf.d/myems-web.conf
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

Setup NodeJS:
```bash
sudo zypper install -y nodejs
```

* Modify the config.js file:

:::note

Get mapboxToken at https://mapbox.com and then set showOnlineMap to true. If you want to turn off online map feature, set showOnlineMap to false

:::

```bash
cd myems/myems-web
```
```bash
sudo vi src/config.js
```

Build and Compress
```bash
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
sudo npm run build
```

Install
Upload the files to you web server.
Note that the following path should be same as that was configured in nginx.conf.
```bash
sudo mv build  /var/www/myems-web
```

Add port to firewall:
```bash
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
```
```bash
sudo firewall-cmd --reload
```

## Post-installation

Congratulations! You are able to login the MyEMS Admin UI and Web UI now.

### Default Ports

MyEMS Web UI: 80

MyEMS API: 8000

MyEMS Admin UI: 8001

Assuming the server address is 192.168.1.8 (replace with the actual server address)
Access MyEMS Web UI at http://192.168.1.8 (80 can be omitted)
Access MyEMS Admin UI at http://192.168.1.8:8001

### Default Passwords

MyEMS Admin UI

Username:
```
administrator
```
Password:
```
!MyEMS1
```


MyEMS Web UI

Username:
```
administrator@myems.io
```

Password:
```
!MyEMS1
```


## Troubleshooting
