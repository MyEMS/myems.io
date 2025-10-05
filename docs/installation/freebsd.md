---
sidebar_position: 13
---

# FreeBSD

In this guide, you will deploy MyEMS on FreeBSD server.


## Prerequisites

This guide describes how to install MyEMS on FreeBSD 13.2. Hardware requirements depend on chosen database and amount of devices connected to the system. To run MyEMS and MySQL on a single machine you will need at least 4GB of RAM.

Update the system and install tools
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
cp -r ~/myems/myems-api /myems-api
```
```bash
cd /myems-api
```
```bash
pip install -r requirements.txt
```
:::tip

If you encounter 'Failed building wheel for pillow' error, you need to [Installation Pillow](https://pillow.readthedocs.io/en/latest/installation.html)

:::

Create .env file based on example.env and edit the .env file if needed:

```bash
cp /myems-api/example.env /myems-api/.env
```
```bash
nano /myems-api/.env
```

Use the monit monitoring service and edit the monit configuration file:

```bash
nano /etc/monit.d/myems-api
check process mymes-api with pidfile /var/run/myems-api/pid
start program = "/usr/local/bin/gunicorn -b 0.0.0.0:8000 --pid /var/run/myems-api/pid --timeout 600 --workers=4 app:api &"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Start the services :
```bash
monit restart
```

## Step 3 myems-admin

* Install NGINX Server

refer to http://nginx.org/en/docs/install.html

Enable the nginx service:
```bash
service nginx enable
```
* Configure NGINX
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

Add a new file under /etc/nginx/conf.d/
```bash
nano /etc/nginx/conf.d/myems-admin.conf
```

Write with directives as below, and replace the default myems-api url http://127.0.0.1:8000/ with actual url if the myems-api servcie hosted on different server
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

* Install myems-admin :
  If the server can not connect to the internet, please compress the myems/myems-admin folder and upload it to the server and extract it to ~/myems/myems-admin
```bash
mkdir /var/www
```
```bash
cp -r ~/myems/myems-admin  /var/www/myems-admin
```
```bash
chmod 0755 /var/www/myems-admin
```
  Check the config file and change it if necessary:
```bash
nano /var/www/myems-admin/app/api.js
```

:::caution

The 'upload' folder is for user uploaded files. DO NOT delete/move/overwrite the 'upload' folder when you upgraded myems-admin.
```bash
 /var/www/myems-admin/upload
```

:::

Restart the nginx service:
```bash
service nginx restart
```

## Step 4 myems-modbus-tcp

In this step, you will install myems-modbus-tcp service.

```bash
cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
```
```bash
cd /myems-modbus-tcp
```
```bash
pip install -r requirements.txt
```

Create .env file based on example.env and edit the .env file if needed:

```bash
cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
```
```bash
nano /myems-modbus-tcp/.env
```

Use the monit monitoring service and edit the monit configuration file:

```bash
nano /etc/monit.d/myems-modbus-tcp
check file myems-modbus-tcp path /myems-modbus-tcp/main.py
start program = "/usr/local/bin/python3 /myems-modbus-tcp/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Start the service:
```bash
monit restart
```
## Step 5 myems-cleaning

In this step, you will install myems-cleaning service.

```bash
cp -r ~/myems/myems-cleaning /myems-cleaning
```
```bash
cd /myems-cleaning
```
```bash
pip install -r requirements.txt
```

Create .env file based on example.env and edit the .env file if needed:

```bash
cp /myems-cleaning/example.env /myems-cleaning/.env
```
```bash
nano /myems-cleaning/.env
```

Use the monit monitoring service and edit the monit configuration file:

```bash
nano /etc/monit.d/myems-cleaning
check file myems-cleaning path /myems-cleaning/main.py
start program = "/usr/local/bin/python3 /myems-cleaning/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Start the service:
```bash
monit restart
```
## Step 6 myems-normalization

In this step, you will install myems-normalization service.

```bash
cp -r ~/myems/myems-normalization /myems-normalization
```
```bash
cd /myems-normalization
```
```bash
pip install -r requirements.txt
```

Create .env file based on example.env and edit the .env file if needed:

```bash
cp /myems-normalization/example.env /myems-normalization/.env
```
```bash
nano /myems-normalization/.env
```

Use the monit monitoring service and edit the monit configuration file:

```bash
nano /etc/monit.d/myems-normalization
check file myems-normalization path /myems-normalization/main.py
start program = "/usr/local/bin/python3 /myems-normalization/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Start the service:
```bash
monit restart
```
## Step 7 myems-aggregation

In this step, you will install myems-aggregation service.

```bash
cp -r ~/myems/myems-aggregation /myems-aggregation
```
```bash
cd /myems-aggregation
```
```bash
pip install -r requirements.txt
```
Create .env file based on example.env and edit the .env file if needed:

```bash
cp /myems-aggregation/example.env /myems-aggregation/.env
```
```bash
nano /myems-aggregation/.env
```

Use the monit monitoring service and edit the monit configuration file:

```bash
nano /etc/monit.d/myems-aggregation
check file myems-aggregation path /myems-aggregation/main.py
start program = "/usr/local/bin/python3 /myems-aggregation/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Start the service:
```bash
monit restart
```

## Step 8 myems-web

In this step, you will install myems-web UI service.

*   Install NGINX  Server

refer to http://nginx.org/en/docs/install.html

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

* Install MyEMS Web UI:

Setup NodeJS:
```bash
pkg install node-18.16.0
```

Modify the config.js file:

:::note

Get mapboxToken at https://mapbox.com and then set showOnlineMap to true. If you want to turn off online map feature, set showOnlineMap to false

:::

```bash
cd ~/myems/myems-web
```
```bash
nano src/config.js
```

Build
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

Restart the nginx service:
```bash
service nginx restart
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
