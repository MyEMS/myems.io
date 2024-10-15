---
sidebar_position: 7
---

# Raspberry Pi

In diesem Handbuch stellen Sie MyEMS auf Raspberry Pi bereit.

## Voraussetzungen

* Raspberry Pi 4 Model B (4GB RAM)
* Raspberry Pi OS (64 bit)

## Quellcode klonen

```bash
sudo apt install git
```
```bash
sudo apt install pip
```
```bash
sudo apt install ufw
```
```bash
cd ~
git clone https://github.com/myems/myems
```

## Schritt 1 Datenbank

* MySQL-Server einrichten

```bash
sudo apt update
```
```bash
sudo apt upgrade
```
```bash
sudo apt install mariadb-server
```
Standardmäßig wird MySQL ohne Passwort installiert, was bedeutet, dass Sie ohne Authentifizierung auf den MySQL-Server zugreifen können.
Führen Sie den folgenden Befehl aus, um den MySQL-Sicherungsprozess zu starten.

```bash
sudo mysql_secure_installation
```
```bash
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

* Datenbankschema und Skripte für MyEMS installieren.

Sehen [Database](./database.md)



## Schritt 2 myems-api

* Installieren Sie den myems-api-Dienst:
```bash
sudo cp -r ~/myems/myems-api /myems-api
```
```bash
cd /myems-api
```

Um 'error: external-managed-environment' zu verhindern, erstellen Sie einen Konfigurationsordner für virtuelle Umgebungen:
```bash
sudo python -m venv venv
```
Starten Sie die virtuelle Umgebung
```
source venv/bin/activate
```
Installation der Anforderungen
```bash
pip install -r requirements.txt
```

Erstellen Sie eine .env-Datei basierend auf example.env und bearbeiten Sie die .env-Datei bei Bedarf:
```bash
sudo cp /myems-api/example.env /myems-api/.env
```
```bash
sudo nano /myems-api/.env
```
Überprüfen oder ändern Sie den Überwachungsport (Standard ist 8000) in myems-api.service und myems-api.socket:
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
Port zur Firewall hinzufügen:
```bash
sudo ufw allow 8000
```
Systemd-Konfigurationsdateien einrichten:
```bash
sudo cp /myems-api/myems-api.service /lib/systemd/system/
```
```bash
sudo cp /myems-api/myems-api.socket /lib/systemd/system/
```
```bash
sudo cp /myems-api/myems-api.conf /usr/lib/tmpfiles.d/
```
Als nächstes aktivieren Sie die Dienste, damit sie beim Booten automatisch starten:
```bash
sudo systemctl enable myems-api.socket
```
```bash
sudo systemctl enable myems-api.service
```
Starten Sie die Dienste:
```bash
sudo systemctl start myems-api.socket
```
```bash
sudo systemctl start myems-api.service
```

## Schritt 3 myems-admin

* NGINX-Server installieren

beziehen auf http://nginx.org/en/linux_packages.html#Debian
```bash
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring
```
```bash
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
```
```bash
gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```
```bash
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/debian `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list
```
```bash
echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx
```
```bash
sudo apt update
```
```bash
sudo apt install nginx
```

* Konfigurieren Sie NGINX
```bash
sudo nano /etc/nginx/nginx.conf
```
Fügen Sie im Abschnitt „http“ einige Anweisungen hinzu:
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

Fügen Sie einen neuen Abschnitt „Server“ mit den folgenden Anweisungen hinzu:
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

* myems-admin installieren:

```bash
sudo mkdir /var/www
```
```bash
sudo cp -r ~/myems/myems-admin  /var/www/myems-admin
```
```bash
sudo chmod 0755 -R /var/www/myems-admin
```
  Überprüfen Sie die Konfigurationsdatei und ändern Sie sie gegebenenfalls:
```bash
sudo nano /var/www/myems-admin/app/api.js
```

:::caution

Der Ordner „Upload“ ist für vom Benutzer hochgeladene Dateien. Löschen/verschieben/überschreiben Sie den Ordner „Upload“ NICHT, wenn Sie myems-admin aktualisiert haben.
```bash
 /var/www/myems-admin/upload
```

:::

Starten Sie die Nginx:
```bash
sudo systemctl start nginx
```
Port zur Firewall hinzufügen:
```bash
sudo ufw allow 8001
```

## Schritt 4 myems-modbus-tcp

In diesem Schritt installieren Sie den Dienst myems-modbus-tcp.

```bash
sudo cp -r ~/myems/myems-modbus-tcp /myems-modbus-tcp
```
```bash
cd /myems-modbus-tcp
```

Um 'error: external-managed-environment' zu verhindern, erstellen Sie einen Konfigurationsordner für virtuelle Umgebungen:
```bash
sudo python -m venv venv
```
Starten Sie die virtuelle Umgebung
```
source venv/bin/activate
```
Installation der Anforderungen
```bash
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env nach .env und ändern Sie die .env-Datei:
```bash
sudo cp /myems-modbus-tcp/example.env /myems-modbus-tcp/.env
```
```bash
sudo nano /myems-modbus-tcp/.env
```
systemd-Dienst einrichten:
```bash
sudo cp myems-modbus-tcp.service /lib/systemd/system/
```
Aktivieren Sie den Dienst:
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
Protokoll anzeigen:
```bash
cat /myems-modbus-tcp.log
```

## Schritt 5 myems-cleaning

In diesem Schritt installieren Sie den myems-cleaning service.

```bash
sudo cp -r ~/myems/myems-cleaning /myems-cleaning
```
```bash
cd /myems-cleaning
```

Um 'error: external-managed-environment' zu verhindern, erstellen Sie einen Konfigurationsordner für virtuelle Umgebungen:
```bash
sudo python -m venv venv
```
Starten Sie die virtuelle Umgebung
```
source venv/bin/activate
```
Installation der Anforderungen
```bash
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env nach .env und ändern Sie die .env-Datei:
```bash
sudo cp /myems-cleaning/example.env /myems-cleaning/.env
```
```bash
nano /myems-cleaning/.env
```
systemd-Dienst einrichten:
```bash
sudo cp /myems-cleaning/myems-cleaning.service /lib/systemd/system/
```
Aktivieren Sie den Dienst:
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
Protokoll anzeigen:
```bash
cat /myems-cleaning.log
```

## Schritt 6 myems-normalization

In diesem Schritt installieren Sie den Dienst myems-normalization.

```bash
sudo cp -r ~/myems/myems-normalization /myems-normalization
```
```bash
cd /myems-normalization
```

Um 'error: external-managed-environment' zu verhindern, erstellen Sie einen Konfigurationsordner für virtuelle Umgebungen:
```bash
sudo python -m venv venv
```
Starten Sie die virtuelle Umgebung
```
source venv/bin/activate
```
Installation der Anforderungen
```bash
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env nach .env und ändern Sie die .env-Datei:
```bash
sudo cp /myems-normalization/example.env /myems-normalization/.env
```
```bash
nano /myems-normalization/.env
```
systemd-Dienst einrichten:
```bash
sudo cp /myems-normalization/myems-normalization.service /lib/systemd/system/
```
Aktivieren Sie den Dienst:
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
Protokoll anzeigen:
```bash
cat /myems-normalization.log
```

## Schritt 7 myems-aggregation

In diesem Schritt installieren Sie den myems-aggregation service.

```bash
sudo cp -r ~/myems/myems-aggregation /myems-aggregation
```
```bash
cd /myems-aggregation
```

Um 'error: external-managed-environment' zu verhindern, erstellen Sie einen Konfigurationsordner für virtuelle Umgebungen:
```bash
sudo python -m venv venv
```
Starten Sie die virtuelle Umgebung
```
source venv/bin/activate
```
Installation der Anforderungen
```bash
pip install -r requirements.txt
```

Kopieren Sie die Datei exmaple.env nach .env und ändern Sie die .env-Datei:
```bash
sudo cp /myems-aggregation/example.env /myems-aggregation/.env
```
```bash
sudo nano /myems-aggregation/.env
```
systemd-Dienst einrichten:
```bash
sudo cp /myems-aggregation/myems-aggregation.service /lib/systemd/system/
```
Aktivieren Sie den Dienst:
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
Protokoll anzeigen:
```bash
cat /myems-aggregation.log
```


## Schritt 8 myems-web

In diesem Schritt installieren Sie den UI-Dienst myems-web.

*   NGINX-Server installieren (Falls bereits in myems-admin installiert, kann ignoriert werden)
refer to http://nginx.org/en/docs/install.html

*   Konfigurieren Sie NGINX (Falls bereits in myems-admin konfiguriert, kann ignoriert werden)
```bash
sudo nano /etc/nginx/nginx.conf
```
Fügen Sie im Abschnitt „http“ einige Anweisungen hinzu:
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

Löschen Sie den Standardabschnitt „server“ in /etc/nginx/nginx.conf oder in /etc/nginx/conf.d/default.conf und fügen Sie einen neuen Abschnitt „server“ mit den folgenden Anweisungen hinzu:
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
      ## NOTE: replace dafault address http://127.0.0.1:8000/ with actual IP or URL
      location /api {
          proxy_pass http://127.0.0.1:8000/;
          proxy_connect_timeout 75;
          proxy_read_timeout 600;
          send_timeout 600;
      }
  }
```

* Installieren Sie die MyEMS Web UI:

Installieren Sie NodeJS:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
```
```bash
sudo apt-get install -y nodejs
```

Konfigurationsdateien ändern：

:::note

Von https://mapbox.com Holen Sie sich das mapboxToken und setzen Sie showOnlineMap auf true Wenn Sie die Online-Kartenfunktion deaktivieren möchten, setzen Sie showOnlineMap auf false

:::

```bash
cd ~/myems/myems-web
```
```bash
sudo nano src/config.js
```

Erstellen und komprimieren:
```bash
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
sudo npm run build
```

Installieren:
```bash
sudo mv build /var/www/myems-web
```

Starten Sie NGINX neu:
```bash
sudo systemctl restart nginx
```

Port zur Firewall hinzufügen:
```bash
sudo ufw allow 80
```

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
```
```
!MyEMS1
```
</details>

<details>
  <summary>Web UI</summary>

```
administrator@myems.io
```
```
!MyEMS1
```
</details>


## Fehlerbehebung
