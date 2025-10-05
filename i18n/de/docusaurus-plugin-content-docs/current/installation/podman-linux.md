---
sidebar_position: 14
---

# Podman unter Linux

In diesem Leitfaden stellen Sie MyEMS mit Podman unter Linux bereit.

## Voraussetzungen
- Installierter Podman, npm auf dem Host.
- Installierter MySQL-Server.
- Die MySQL-Datenbank kann von dem Host verbunden werden, auf dem die Podman Engine läuft.

:::caution

- Es wird empfohlen, Root-Rechte zu verwenden, um podman-Befehle auszuführen.

- Nach der Installation von Podman verwenden Sie den Befehl `systemctl status podman-restart.service`, um zu überprüfen, ob die Container für den automatischen Start und die Richtlinien konfiguriert sind. Wenn `Unit not found` angezeigt wird, bedeutet dies, dass der Container nicht automatisch gestartet werden kann.

:::

## Schritt 1 Database

Sehen [Database](./database.md)

## Schritt 2 myems-api

In diesem Abschnitt installieren Sie myems-api auf Podman.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-api /
```
```bash
cd /myems-api
```

* Erstellen Sie eine .env-Datei basierend auf der example.env-Datei

:::caution

Ersetzen Sie ~~127.0.0.1~~ manuell durch die echte **HOST** IP Adresse.

:::

```bash
cp example.env .env
```

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-api .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-api .
```

* Führen Sie einen Podman-Container aus

Erstellen Sie auf dem Host einen Dateiordner für Freigabe-Uploads:
```bash
mkdir /myems-upload
```

Erstellen eines Containers, binden-mounten des Freigabeordners an den Container und binden-mounten der .env an den Container:
```bash
podman run -d -p 8000:8000 -v /myems-upload:/var/www/myems-admin/upload -v /myems-api/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-api myems/myems-api
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -p Veröffentlichen Sie die Ports eines Containers auf dem Host. 8000:8000 (Host:Container) bindet Port 8000 (rechts) des Containers an TCP-Port 8000 (links) des Hostcomputers.

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist, erstellt -v den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Der absolute Pfad vor dem Doppelpunkt ist für den Pfad auf dem Host und kann auf Ihrem System variieren.
Der absolute Pfad nach dem Doppelpunkt ist für den Pfad im Container und kann NICHT geändert werden.
Indem Sie .env als Bind-Mount-Parameter übergeben, können Sie die Konfigurationswerte später ändern.
Wenn Sie die .env-Datei geändert haben, starten Sie den Container neu, damit die Änderung wirksam wird.

Wenn Sie das Image auf einen anderen Computer immigrieren möchten,
* Exportieren Sie das Bild in eine Tarball-Datei

```bash
podman save --output myems-api.tar myems/myems-api
```
* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei

```bash
podman load --input .\myems-api.tar
```

## Schritt 3 myems-admin

In diesem Abschnitt installieren Sie myems-admin auf Podman.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-admin /
```
```bash
cd /myems-admin
```

:::caution

Ersetzen Sie manuell ~~127.0.0.1:8000~~ in nginx.conf durch die tatsächliche **HOST**-IP und den Port von myems-api

:::

```bash
nano nginx.conf
```

```bash
      proxy_pass http://127.0.0.1:8000/;
```

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-admin .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-admin .
```

* Führen Sie einen Podman-Container aus

Erstellen Sie auf dem Host einen Dateiordner für Freigabe-Uploads:
```bash
mkdir /myems-upload
```

Erstellen Sie einen Container, binden-mounten Sie den Freigabe-Upload-Dateiordner in den Container und binden-mount nginx.conf
```bash
podman run -d -p 8001:8001 -v /myems-upload:/var/www/myems-admin/upload -v /myems-admin/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-admin myems/myems-admin
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -p Veröffentlichen Sie die Ports eines Containers auf dem Host, 8001:8001 (Host:Container) bindet Port 8001 (rechts) des Containers an TCP-Port 8001 (links) des Hostcomputers.

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Wenn Sie das Image auf einen anderen Computer immigrieren möchten,
* Exportieren Sie das Bild in eine Tarball-Datei

```bash
podman save --output myems-admin.tar myems/myems-admin
```

* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei

```bash
podman load --input .\myems-admin.tar
```

## Schritt 4 myems-modbus-tcp

In diesem Abschnitt installieren Sie myems-modbus-tcp auf Podman.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-modbus-tcp /
```
```bash
cd /myems-modbus-tcp
```

* Erstellen Sie eine .env-Datei basierend auf der example.env-Datei

:::caution

Ersetzen Sie manuell ~~127.0.0.1~~ durch die echte **HOST**-IP-Adresse.

:::

```bash
cp example.env .env
```

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-modbus-tcp .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-modbus-tcp .
```


* Führen Sie einen Podman-Container aus (run as superuser)

```bash
podman run -d -v /myems-modbus-tcp/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-modbus-tcp myems/myems-modbus-tcp
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Der absolute Pfad vor dem Doppelpunkt ist für den Pfad auf dem Host und kann auf Ihrem System variieren.
Der absolute Pfad nach dem Doppelpunkt ist für den Pfad im Container und kann NICHT geändert werden.
Indem Sie .env als Bind-Mount-Parameter übergeben, können Sie die Konfigurationswerte später ändern.
Wenn Sie die .env-Datei geändert haben, starten Sie den Container neu, damit die Änderung wirksam wird.

* Immigrieren Sie den Podman-Container

Um den Container auf einen anderen Computer zu immigrieren,
* Exportieren Sie das Bild in eine Tarball-Datei

```bash
podman save --output myems-modbus-tcp.tar myems/myems-modbus-tcp
```
* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei

```bash
podman load --input .\myems-modbus-tcp.tar
```

## Schritt 5 myems-cleaning

In diesem Abschnitt installieren Sie myems-cleaning auf Podman.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-cleaning /
```
```bash
cd /myems-cleaning
```

* Erstellen Sie eine .env-Datei basierend auf der example.env-Datei

:::caution

Ersetzen Sie manuell ~~127.0.0.1~~ durch die echte **HOST**-IP-Adresse.

:::

```bash
cp example.env .env
```

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-cleaning .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-cleaning .
```

* Führen Sie einen Podman-Container aus (run as superuser)
```bash
podman run -d -v /myems-cleaning/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-cleaning myems/myems-cleaning
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Der absolute Pfad vor dem Doppelpunkt ist für den Pfad auf dem Host und kann auf Ihrem System variieren.
Der absolute Pfad nach dem Doppelpunkt ist für den Pfad im Container und kann NICHT geändert werden.
Indem Sie .env als Bind-Mount-Parameter übergeben, können Sie die Konfigurationswerte später ändern.
Wenn Sie die .env-Datei geändert haben, starten Sie den Container neu, damit die Änderung wirksam wird.

* Immigrieren Sie den Podman-Container

Um den Container auf einen anderen Computer zu immigrieren,
* Exportieren Sie das Bild in eine Tarball-Datei
```bash
podman save --output myems-cleaning.tar myems/myems-cleaning
```
* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei
```bash
podman load --input .\myems-cleaning.tar
```

## Schritt 6 myems-normalization

In diesem Abschnitt installieren Sie myems-normalization auf Podman.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-normalization /
```
```bash
cd /myems-normalization
```

* Erstellen Sie eine .env-Datei basierend auf der example.env-Datei

:::caution

Ersetzen Sie manuell ~~127.0.0.1~~ durch die echte **HOST**-IP-Adresse.

:::

```bash
cp example.env .env
```

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-normalization .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-normalization .
```

* Führen Sie einen Podman-Container aus (run as superuser)

```bash
podman run -d -v /myems-normalization/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-normalization myems/myems-normalization
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Der absolute Pfad vor dem Doppelpunkt ist für den Pfad auf dem Host und kann auf Ihrem System variieren.
Der absolute Pfad nach dem Doppelpunkt ist für den Pfad im Container und kann NICHT geändert werden.
Indem Sie .env als Bind-Mount-Parameter übergeben, können Sie die Konfigurationswerte später ändern.
Wenn Sie die .env-Datei geändert haben, starten Sie den Container neu, damit die Änderung wirksam wird.

* Immigrieren Sie den Podman-Container

Um den Container auf einen anderen Computer zu immigrieren,
* Exportieren Sie das Bild in eine Tarball-Datei
```bash
podman save --output myems-normalization.tar myems/myems-normalization
```

* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei
```bash
podman load --input .\myems-normalization.tar
```

## Schritt 7 myems-aggregation

In diesem Abschnitt installieren Sie myems-aggregation auf Podman.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-aggregation /
```
```bash
cd /myems-aggregation
```

* Erstellen Sie eine .env-Datei basierend auf der example.env-Datei

```bash
cp example.env .env
```

:::caution

Ersetzen Sie manuell ~~127.0.0.1~~ durch die echte **HOST**-IP-Adresse.

:::

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-aggregation .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-aggregation .
```

* Führen Sie einen Podman-Container aus (run as superuser)

```bash
podman run -d -v /myems-aggregation/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-aggregation myems/myems-aggregation
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Der absolute Pfad vor dem Doppelpunkt ist für den Pfad auf dem Host und kann auf Ihrem System variieren.
Der absolute Pfad nach dem Doppelpunkt ist für den Pfad im Container und kann NICHT geändert werden.
Indem Sie .env als Bind-Mount-Parameter übergeben, können Sie die Konfigurationswerte später ändern.
Wenn Sie die .env-Datei geändert haben, starten Sie den Container neu, damit die Änderung wirksam wird.

* Immigrieren Sie den Podman-Container

* Exportieren Sie das Bild in eine Tarball-Datei
```bash
podman save --output myems-aggregation.tar myems/myems-aggregation
```
* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei
```bash
podman load --input .\myems-aggregation.tar
```


## Schritt 8 myems-web

In diesem Abschnitt installieren Sie myems-web auf Podman.

* Konfigurationsdateien ändern：

:::note

Von https://mapbox.com Holen Sie sich das mapboxToken und setzen Sie showOnlineMap auf true Wenn Sie die Online-Kartenfunktion deaktivieren möchten, setzen Sie showOnlineMap auf false

:::

```bash
cd myems/myems-web
```
```bash
nano src/config.js
```

:::caution

Ersetzen Sie ~~127.0.0.1:8000~~ in nginx.conf durch die echte **HOST**-IP und den Port von myems-api

:::

```bash
cd myems/myems-web
```
```bash
nano nginx.conf
```

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-web /
```
```bash
cd /myems-web
```

:::info
Sie können den Befehl „npm run build“ in diesem Abschnitt getrost ignorieren, da er in das Podmanfile eingebaut ist
:::

* Podman-Image aus Quellcode erstellen

```bash
podman build -t myems/myems-web .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
podman buildx build --platform=linux/amd64 -t myems/myems-web .
```

* Führen Sie einen Podman-Container aus

Binden Sie auf dem Host nginx.conf ein
```bash
podman run -d -p 80:80 -v /myems-web/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-web myems/myems-web
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -p Veröffentlichen Sie die Ports eines Containers auf dem Host, 80:80 (Host:Container) bindet Port 80 (rechts) des Containers an TCP-Port 80 (links) des Hostcomputers.

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Podman-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Wenn Sie das Image auf einen anderen Computer immigrieren möchten,
* Exportieren Sie das Bild in eine Tarball-Datei
```bash
podman save --output myems-web.tar myems/myems-web
```

* Kopieren Sie die Tarball-Datei auf einen anderen Computer und laden Sie dann das Bild aus der Tarball-Datei
```bash
podman load --input .\myems-web.tar
```

## Nach der Installation

Glückwunsch! Sie können sich jetzt bei der MyEMS Admin-Benutzeroberfläche und der Web-Benutzeroberfläche anmelden.

### Standardports

MyEMS Web UI: 80

MyEMS API: 8000

MyEMS Admin UI: 8001

Angenommen, die Serveradresse ist 192.168.1.8 (ersetzen Sie durch die tatsächliche Serveradresse)
Zugriff auf MyEMS Web UI unter http://192.168.1.8 (80 kann weggelassen werden)
Zugriff auf MyEMS Admin UI unter http://192.168.1.8:8001

### Standardpasswörter

MyEMS Admin UI

Benutzername:
```
administrator
```
Passwort:
```
!MyEMS1
```


MyEMS Web UI

Benutzername:
```
administrator@myems.io
```

Passwort:
```
!MyEMS1
```


## Fehlerbehebung
