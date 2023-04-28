---
sidebar_position: 13
---

# FreeBSD

In this guide, you will deploy MyEMS on FreeBSD server.
In dieser Anleitung stellen Sie MyEMS mit FreeBSD bereit.

## Prerequisites

Diese Anleitung beschreibt, wie Sie MyEMS auf FreeBSD 13.2 installieren. Die Hardwareanforderungen hängen von der gewählten Datenbank und der Anzahl der an das System angeschlossenen Geräte ab. Um MyEMS und MySQL auf einem einzigen Rechner laufen zu lassen, benötigen Sie mindestens 4GB RAM.

Aktualisieren Sie das System und installieren Sie Tools:
```
pkg install git
pkg install python3
pkg install py39-pip-22.3.1
pkg install nginx
pkg install monit
```
Quellcode klonen:
```
cd ~
git clone https://github.com/myems/myems
```

## Schritt 1 Database

Siehe [Database](./database.md)

## Schritt 2 myems-api

* myems-api Dienst installieren:
```bash
cp -r ~/myems/myems-api /myems-api
cd /myems-api
pip install -r requirements.txt
```
:::tip

Wenn der Fehler „Failed Building Wheel for Pillow“ auftritt, müssen Sie [Kissen installieren](https://pillow.readthedocs.io/en/latest/installation.html)

:::

Erstellen Sie eine .env basierend auf example.env und bearbeiten Sie die .env bei Bedarf:

```bash
cp /myems-api/example.env /myems-api/.env
nano /myems-api/.env
```

monit einrichten und Dateien konfigurieren:

```bash
nano /etc/monit.d/myems-api
```
```bash
check process mymes-api with pidfile /var/run/myems-api/pid
start program = "/usr/local/bin/gunicorn -b 0.0.0.0:8000 --pid /var/run/myems-api/pid --timeout 600 --workers=4 app:api &"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Starten Sie die Dienste:
```bash
monit restart
```

## Schritt 3 myems-admin

* NGINX Server installieren

beziehen sich auf http://nginx.org/en/docs/install.html

Enable the nginx service:
```
service nginx enable
```
* NGINX einrichten
```bash
nano /etc/nginx/nginx.conf
```
Fügen Sie im Abschnitt "http" einige Richtlinien hinzu:
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

Fügen Sie eine neue Datei unter /etc/nginx/conf.d/
```
nano /etc/nginx/conf.d/myems-admin.conf
```

Schreiben Sie mit Direktiven wie unten, ersetzen Sie die Standard-myems-api URL http://127.0.0.1:8000/ mit tatsächlicher URL, wenn die myems-ap servcie auf einem anderen Server gehostet wird

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

* myems-admin installieren :
  Wenn der Server keine Verbindung zum Internet herstellen kann, komprimieren Sie bitte den Ordner myems/myems-admin und laden Sie ihn auf den Server hoch und extrahieren Sie ihn in ~/myems/myems-admin
```bash
mkdir /var/www
cp -r ~/myems/myems-admin  /var/www/myems-admin
chmod 0755 /var/www/myems-admin
```
  Überprüfen Sie die Konfigurationsdatei und ändern Sie sie bei Bedarf:
```bash
nano /var/www/myems-admin/app/api.js
```

:::caution


Der Ordner "upload" ist für vom Benutzer hochgeladene Dateien. Löschen/verschieben/überschreiben Sie NICHT den 'upload' Ordner, wenn Sie myems-admin aktualisiert haben.
```bash
 /var/www/myems-admin/upload
```

:::

Starten Sie den nginx-Dienst neu:
```
service nginx restart 
```

:::tip

Wenn der Nginx-Fehler „403 Forbidden“ auftritt, können Sie ihn beheben, indem Sie den SELinx-Modus mit dem Befehl „sudo setenforce 0“ ändern.

:::

## Schritt 4 myems-modbus-tcp

In diesem Schritt installieren Sie den Dienst myems-modbus-tcp.

```bash
cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
cd /myems-modbus-tcp
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:

```bash
cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
nano /myems-modbus-tcp/.env
```

monit Dienst einrichten:

```bash
nano /etc/monit.d/myems-modbus-tcp
```
```bash
check file myems-modbus-tcp path /myems-modbus-tcp/main.py
start program = "/usr/local/bin/python3 /myems-modbus-tcp/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Starten Sie den Dienst:
```bash
monit restart
```
## Schritt 5 myems-cleaning

In diesem Schritt installieren Sie den myems-cleaning Service.

```bash
cp -r ~/myems/myems-cleaning /myems-cleaning
cd /myems-cleaning
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:

```bash
cp /myems-cleaning/example.env /myems-cleaning/.env
nano /myems-cleaning/.env
```

monit Dienst einrichten:

```bash
nano /etc/monit.d/myems-cleaning
```
```bash
check file myems-cleaning path /myems-cleaning/main.py
start program = "/usr/local/bin/python3 /myems-cleaning/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Starten Sie den Dienst:
```bash
monit restart
```
## Schritt 6 myems-normalization

In diesem Schritt installieren Sie den myems-normalization service.

```bash
cp -r ~/myems/myems-normalization /myems-normalization
cd /myems-normalization
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:

```bash
cp /myems-normalization/example.env /myems-normalization/.env
nano /myems-normalization/.env
```

monit Dienst einrichten:

```bash
nano /etc/monit.d/myems-normalization
```
```bash
check file myems-normalization path /myems-normalization/main.py
start program = "/usr/local/bin/python3 /myems-normalization/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Starten Sie den Dienst:
```bash
monit restart
```
## Schritt 7 myems-aggregation

In diesem Schritt installieren Sie den myems-aggregation service.

```bash
cp -r ~/myems/myems-aggregation /myems-aggregation
cd /myems-aggregation
pip install -r requirements.txt
```
Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:

```bash
cp /myems-aggregation/example.env /myems-aggregation/.env
nano /myems-aggregation/.env
```

monit Dienst einrichten:

```bash
nano /etc/monit.d/myems-aggregation
```
```bash
check file myems-aggregation path /myems-aggregation/main.py
start program = "/usr/local/bin/python3 /myems-aggregation/main.py"
stop program = "/bin/kill -s TERM $MAINPID"
if 3 restarts within 5 cycles then unmonitor
```
Starten Sie den Dienst:
```bash
monit restart
```

## Step 8 myems-web

In diesem Schritt installieren Sie den myems-web UI Service.

*   NGINX-Server installieren

beziehen sich auf http://nginx.org/en/docs/install.html

*   Konfigurieren Sie NGINX
```bash
nano /etc/nginx/nginx.conf
```
Fügen Sie im Abschnitt 'http' einige Anweisungen hinzu:
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

Aktualisieren der nginx Standard-Conf-Datei:
```
nano /etc/nginx/conf.d/default.conf
```
Schreiben Sie mit Direktiven wie unten und ersetzen Sie die Standard-myems-api-URL http://127.0.0.1:8000/ mit tatsächlicher URL, wenn die myems-api-Servcie auf einem anderen Server gehostet wird
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

* MyEMS Web UI installieren:

NodeJS einrichten:
```
pkg install node-18.16.0
```

Überprüfen und ändern Sie gegebenenfalls die Konfigurationsdatei:
```bash
cd ~/myems/myems-web
nano src/config.js
```

Erstellen:
```bash
npm i --unsafe-perm=true --allow-root --legacy-peer-deps
npm run build
```

Installieren
Beachten Sie, dass der folgende Pfad mit dem in nginx.conf konfigurierten identisch sein sollte.
```bash
rm -r /var/www/myems-web
mv build  /var/www/myems-web
```

Starten Sie NGINX neu
```
service nginx restart 
```



## Post-installation## Nach der Installation

Glückwunsch! Sie können sich jetzt bei der MyEMS Admin-Benutzeroberfläche und der Web-Benutzeroberfläche anmelden.

### Standardports

MyEMS Web UI: 80

MyEMS API: 8000

MyEMS Admin UI: 8001

### Standardpasswörter
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


## Fehlerbehebung

