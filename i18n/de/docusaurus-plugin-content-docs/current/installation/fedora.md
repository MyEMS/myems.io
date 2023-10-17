---
sidebar_position: 10
---

# Fedora

In dieser Anleitung stellen Sie MyEMS mit Fedora Server bereit.


## Prerequisites

Diese Anleitung beschreibt, wie Sie MyEMS auf Fedora 37 Server installieren. Die Hardwareanforderungen hängen von der gewählten Datenbank und der Anzahl der an das System angeschlossenen Geräte ab. Um MyEMS und MySQL auf einem einzigen Rechner laufen zu lassen, benötigen Sie mindestens 4GB RAM.

Aktualisieren Sie das System und installieren Sie Tools:
```
sudo dnf update
sudo dnf install git
sudo dnf install python3-pip
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
sudo cp -r ~/myems/myems-api /myems-api
cd /myems-api
sudo pip install -r requirements.txt
```
Erstellen Sie eine .env basierend auf example.env und bearbeiten Sie die .env bei Bedarf:
```bash
sudo cp /myems-api/example.env /myems-api/.env
sudo nano /myems-api/.env
```
Port zur Firewall hinzufügen:
```bash
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --zone=public --add-port=8000/tcp --permanent
sudo firewall-cmd --reload
```
systemd einrichten und Dateien konfigurieren:
```bash
sudo cp /myems-api/myems-api.service /lib/systemd/system/
sudo cp /myems-api/myems-api.socket /lib/systemd/system/
sudo cp /myems-api/myems-api.conf /usr/lib/tmpfiles.d/
```
Als nächstes aktivieren Sie die Dienste so, dass sie beim Booten automatisch starten:
```bash
sudo systemctl enable myems-api.socket
sudo systemctl enable myems-api.service
```
Starten Sie die Dienste:
```bash
sudo systemctl start myems-api.socket
sudo systemctl start myems-api.service
```

## Schritt 3 myems-admin

* NGINX Server installieren

beziehen sich auf http://nginx.org/en/linux_packages.html#RHEL

Enable the nginx service:
```
sudo systemctl enable nginx.service
```
* NGINX einrichten
```bash
sudo nano /etc/nginx/nginx.conf
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
sudo nano /etc/nginx/conf.d/myems-admin.conf
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
sudo mkdir /var/www
sudo cp -r ~/myems/myems-admin  /var/www/myems-admin
sudo chmod 0755 -R /var/www/myems-admin
```
  Überprüfen Sie die Konfigurationsdatei und ändern Sie sie bei Bedarf:
```bash
sudo nano /var/www/myems-admin/app/api.js
```

:::caution

Der Ordner "upload" ist für vom Benutzer hochgeladene Dateien. Löschen/verschieben/überschreiben Sie NICHT den 'upload' Ordner, wenn Sie myems-admin aktualisiert haben.
```bash
 /var/www/myems-admin/upload
```

:::

Port zur Firewall hinzufügen:
```bash
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --zone=public --add-port=8001/tcp --permanent
sudo firewall-cmd --reload
```
Restart the nginx service:
```
sudo systemctl restart nginx.service
```

:::tip

If you encounter '403 Forbidden' nginx error, you may fix it by changing SELinx mode with command 'sudo setenforce 0'

:::

## Schritt 4 myems-modbus-tcp

In diesem Schritt installieren Sie den Dienst myems-modbus-tcp.

```bash
sudo cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
cd /myems-modbus-tcp
sudo pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:
```bash
sudo cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
sudo nano /myems-modbus-tcp/.env
```
systemd Dienst einrichten:
```bash
sudo cp myems-modbus-tcp.service /lib/systemd/system/
```
Den Dienst aktivieren:
```bash
sudo systemctl enable myems-modbus-tcp.service
```
Starten Sie den Dienst:
```bash
sudo systemctl start myems-modbus-tcp.service
```
Überwachen Sie den Dienst:
```bash
sudo systemctl status myems-modbus-tcp.service
```
Logbuch anzeigen:
```bash
cat /myems-modbus-tcp.log
```

## Schritt 5 myems-cleaning

In diesem Schritt installieren Sie den myems-cleaning Service.

```bash
sudo cp -r ~/myems/myems-cleaning /myems-cleaning
cd /myems-cleaning
sudo pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:
```bash
sudo cp /myems-cleaning/example.env /myems-cleaning/.env
sudo nano /myems-cleaning/.env
```
systemd Dienst einrichten:
```bash
sudo cp myems-cleaning.service /lib/systemd/system/
```
Den Dienst aktivieren:
```bash
sudo systemctl enable myems-cleaning.service
```
Starten Sie den Dienst:
```bash
sudo systemctl start myems-cleaning.service
```
Überwachen Sie den Dienst:
```bash
sudo systemctl status myems-cleaning.service
```
Logbuch anzeigen:
```bash
cat /myems-cleaning.log
```

## Schritt 6 myems-normalization

In diesem Schritt installieren Sie den myems-normalization service.

```bash
sudo cp -r ~/myems/myems-normalization /myems-normalization
cd /myems-normalization
sudo pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:
```bash
sudo cp /myems-normalization/example.env /myems-normalization/.env
sudo nano /myems-normalization/.env
```
systemd Dienst einrichten:
```bash
sudo cp /myems-normalization/myems-normalization.service /lib/systemd/system/
```
Den Dienst aktivieren:
```bash
sudo systemctl enable myems-normalization.service
```
Starten Sie den Dienst:
```bash
sudo systemctl start myems-normalization.service
```
Überwachen Sie den Dienst:
```bash
sudo systemctl status myems-normalization.service
```
Logbuch anzeigen:
```bash
cat /myems-normalization.log
```

## Schritt 7 myems-aggregation

In diesem Schritt installieren Sie den myems-aggregation service.

```bash
sudo cp -r ~/myems/myems-aggregation /myems-aggregation
cd /myems-aggregation
sudo pip install -r requirements.txt
```
Kopieren Sie die Datei exmaple.env in .env und ändern Sie die Datei .env:
```bash
sudo cp /myems-aggregation/example.env /myems-aggregation/.env
sudo nano /myems-aggregation/.env
```
systemd Dienst einrichten:
```bash
sudo cp /myems-aggregation/myems-aggregation.service /lib/systemd/system/
```
Den Dienst aktivieren:
```bash
sudo systemctl enable myems-aggregation.service
```
Starten Sie den Dienst:
```bash
sudo systemctl start myems-aggregation.service
```
Überwachen Sie den Dienst:
```bash
sudo systemctl status myems-aggregation.service
```
Logbuch anzeigen:
```bash
cat /myems-aggregation.log
```


## Schritt 8 myems-web

In diesem Schritt installieren Sie den myems-web UI Service.

*   NGINX-Server installieren

beziehen sich auf http://nginx.org/en/linux_packages.html#RHEL

*   Konfigurieren Sie NGINX
```bash
sudo nano /etc/nginx/nginx.conf
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
sudo nano /etc/nginx/conf.d/default.conf
```
Schreiben Sie mit Direktiven wie unten und ersetzen Sie die Standard-myems-api-URL http://127.0.0.1:8000/ mit tatsächlicher URL, wenn die myems-api-Servcie auf einem anderen Server gehostet wird
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

* MyEMS Web UI installieren:

NodeJS einrichten:
```
sudo dnf install nodejs
```

Überprüfen und ändern Sie gegebenenfalls die Konfigurationsdatei:
```bash
cd ~/myems/myems-web
sudo nano src/config.js
```

Erstellen und komprimieren:
```bash
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
sudo npm run build
```

Installieren
Laden Sie die Datei auf Ihren Webserver hoch.
Beachten Sie, dass der folgende Pfad mit dem in nginx.conf konfigurierten identisch sein sollte.
```bash
sudo mv build  /var/www/myems-web
```

Port zur Firewall hinzufügen:
```bash
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --reload
```
Starten Sie NGINX neu
```bash
sudo systemctl restart nginx
```


:::tip

Wenn Sie auf '500 Internal Server Error' nginx-Fehler stoßen, können Sie ihn beheben, indem Sie den SELinx-Modus mit dem Befehl 'sudo setforce 0' ändern.

:::

## Nach der Installation

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

