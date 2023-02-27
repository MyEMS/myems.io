---
sidebar_position: 7
---

# Raspberry Pi

In this guide, you will deploy MyEMS onto Raspberry Pi.

## Prerequisites

* Raspberry Pi 4 Model B (4GB RAM)
* Raspberry Pi OS Lite (64 bit)

## Clone Source Code

```
sudo apt install git
sudo apt install pip
sudo apt install ufw
cd ~
git clone https://github.com/myems/myems
```

## Step 1 Database

* Setup MySQL Server

```
sudo apt update
sudo apt upgrade
sudo apt install mariadb-server
```
By default, MySQL is installed without any password set up meaning you can access the MySQL server without any authentication.
Run the following command to begin the MySQL securing process.

```
sudo mysql_secure_installation
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

* Install database schema and scripts for MyEMS.

See [Database](./database.md)



## Step 2 myems-api

* Install myems-api service:
```bash
sudo cp -r ~/myems/myems-api /myems-api
cd /myems-api
sudo pip install -r requirements.txt 
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

refer to http://nginx.org/en/linux_packages.html#Debian
```
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/debian `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list

echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx

sudo apt update
sudo apt install nginx

```

* Configure NGINX
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

```bash
sudo mkdir /var/www
sudo cp -r ~/myems/myems-admin  /var/www/myems-admin
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

Add port to firewall:
```bash
sudo ufw allow 8001
```

## Step 4 myems-modbus-tcp

In this step, you will install myems-modbus-tcp service.

```bash
sudo cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
cd /myems-modbus-tcp
sudo pip install -r requirements.txt 
```

Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
sudo nano /myems-modbus-tcp/.env
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
cd /myems-cleaning
sudo pip install -r requirements.txt 
```

Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-cleaning/example.env /myems-cleaning/.env
nano /myems-cleaning/.env
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
cd /myems-normalization
sudo pip install -r requirements.txt 
```

Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-normalization/example.env /myems-normalization/.env
nano /myems-normalization/.env
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
cd /myems-aggregation
sudo pip install -r requirements.txt 
```
Copy exmaple.env file to .env and modify the .env file:
```bash
sudo cp /myems-aggregation/example.env /myems-aggregation/.env
sudo nano /myems-aggregation/.env
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
refer to http://nginx.org/en/docs/install.html

*   Configure NGINX
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

Delete the default 'server' section in /etc/nginx/nginx.conf or in /etc/nginx/conf.d/default.conf and add a new 'server' section with directives as below:
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
Restart NGINX:
```bash
sudo systemctl restart nginx
```

* Install MyEMS Web UI:

Install NodeJS:
```
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

Check and change the config file if necessary:
```bash
cd ~/myems/myems-web
sudo nano src/config.js
```

Build and Compress:
```bash
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
sudo npm run build
```

Install
```bash
sudo mv build  /var/www/myems-web
```

Add port to firewall:
```bash
sudo ufw allow 80
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
