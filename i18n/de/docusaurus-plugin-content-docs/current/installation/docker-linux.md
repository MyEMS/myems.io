---
sidebar_position: 4
---

# Docker unter Linux/macOS

In diesem Leitfaden stellen Sie MyEMS mit Docker unter Linux (oder macOS) bereit.

## Voraussetzungen
- Installierter Docker, npm auf dem Host.
- Installierter MySQL-Server.
- Die MySQL-Datenbank kann von dem Host verbunden werden, auf dem die Docker Engine läuft.
- Hardware-Anforderungen: Mindestens 4 GB RAM und 20 GB Speicher (Datenbank und Docker-Container).

Quellcode klonen:
```bash
cd ~
git clone https://github.com/myems/myems
```

## Schritt 1 Database

Sehen [Database](./database.md)

## Schritt 2 myems-api

In diesem Abschnitt installieren Sie myems-api auf Docker.

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

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-api .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-api .
```

* Führen Sie einen Docker-Container aus

Erstellen Sie auf dem Host einen Dateiordner für Freigabe-Uploads:
```bash
mkdir /myems-upload
```

Erstellen eines Containers, binden-mounten des Freigabeordners an den Container und binden-mounten der .env an den Container:
```bash
docker run -d -p 8000:8000 -v /myems-upload:/var/www/myems-admin/upload -v /myems-api/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-api myems/myems-api
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -p Veröffentlichen Sie die Ports eines Containers auf dem Host. 8000:8000 (Host:Container) bindet Port 8000 (rechts) des Containers an TCP-Port 8000 (links) des Hostcomputers.

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist, erstellt -v den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
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
* Exportieren Sie das Bild in eine tar-Datei

```bash
docker save --output myems-api.tar myems/myems-api
```
* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei

```bash
docker load --input .\myems-api.tar
```

## Schritt 3 myems-admin

In diesem Abschnitt installieren Sie myems-admin auf Docker.

* Kopieren Sie den Quellcode in das Stammverzeichnis

```bash
cp -r myems/myems-admin /
```
```bash
cd /myems-admin
```

:::caution

Ersetzen Sie manuell ~~127.0.0.1:8000~~ in nginx.conf durch die tatsächliche **HOST** IP Adresse und den Port von myems-api

:::

```bash
nano nginx.conf
```

```bash
      proxy_pass http://127.0.0.1:8000/;
```

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-admin .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-admin .
```

* Führen Sie einen Docker-Container aus

Erstellen Sie auf dem Host einen Dateiordner für Freigabe-Uploads:
```bash
mkdir /myems-upload
```

Erstellen Sie einen Container, binden-mounten Sie den Freigabe-Upload-Dateiordner in den Container und binden-mount nginx.conf
```bash
docker run -d -p 8001:8001 -v /myems-upload:/var/www/myems-admin/upload -v /myems-admin/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-admin myems/myems-admin
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -p Veröffentlichen Sie die Ports eines Containers auf dem Host, 8001:8001 (Host:Container) bindet Port 8001 (rechts) des Containers an TCP-Port 8001 (links) des Hostcomputers.

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Wenn Sie das Image auf einen anderen Computer immigrieren möchten,
* Exportieren Sie das Bild in eine tar-Datei

```bash
docker save --output myems-admin.tar myems/myems-admin
```

* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei

```bash
docker load --input .\myems-admin.tar
```

## Schritt 4 myems-modbus-tcp

In diesem Abschnitt installieren Sie myems-modbus-tcp auf Docker.

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

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-modbus-tcp .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-modbus-tcp .
```


* Führen Sie einen Docker-Container aus (run as superuser)

```bash
docker run -d -v /myems-modbus-tcp/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-modbus-tcp myems/myems-modbus-tcp
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist,
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

* Immigrieren Sie den Docker-Container

Um den Container auf einen anderen Computer zu immigrieren,
* Exportieren Sie das Bild in eine tar-Datei

```bash
docker save --output myems-modbus-tcp.tar myems/myems-modbus-tcp
```
* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei

```bash
docker load --input .\myems-modbus-tcp.tar
```

## Schritt 5 myems-cleaning

In diesem Abschnitt installieren Sie myems-cleaning auf Docker.

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

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-cleaning .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-cleaning .
```

* Führen Sie einen Docker-Container aus (run as superuser)
```bash
docker run -d -v /myems-cleaning/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-cleaning myems/myems-cleaning
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist,
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

* Immigrieren Sie den Docker-Container

Um den Container auf einen anderen Computer zu immigrieren,
* Exportieren Sie das Bild in eine tar-Datei
```bash
docker save --output myems-cleaning.tar myems/myems-cleaning
```
* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei
```bash
docker load --input .\myems-cleaning.tar
```

## Schritt 6 myems-normalization

In diesem Abschnitt installieren Sie myems-normalization auf Docker.

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

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-normalization .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-normalization .
```

* Führen Sie einen Docker-Container aus (run as superuser)

```bash
docker run -d -v /myems-normalization/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-normalization myems/myems-normalization
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist,
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

* Immigrieren Sie den Docker-Container

Um den Container auf einen anderen Computer zu immigrieren,
* Exportieren Sie das Bild in eine tar-Datei
```bash
docker save --output myems-normalization.tar myems/myems-normalization
```

* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei
```bash
docker load --input .\myems-normalization.tar
```

## Schritt 7 myems-aggregation

In diesem Abschnitt installieren Sie myems-aggregation auf Docker.

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

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-aggregation .
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-aggregation .
```

* Führen Sie einen Docker-Container aus (run as superuser)

```bash
docker run -d -v /myems-aggregation/.env:/app/.env:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-aggregation myems/myems-aggregation
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist,
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

* Immigrieren Sie den Docker-Container

* Exportieren Sie das Bild in eine tar-Datei
```bash
docker save --output myems-aggregation.tar myems/myems-aggregation
```
* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei
```bash
docker load --input .\myems-aggregation.tar
```


## Schritt 8 myems-web

In diesem Abschnitt installieren Sie myems-web auf Docker.

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
Sie können den Befehl „npm run build“ in diesem Abschnitt getrost ignorieren, da er in das Dockerfile eingebaut ist
:::

* Docker-Image aus Quellcode erstellen

```bash
docker build -t myems/myems-web .
```
```bash
docker image prune -f
```

Um für mehrere Plattformen zu bauen und nicht nur für die Architektur und das Betriebssystem, die der Benutzer, der den Build aufruft, gerade ausführt.
Sie können buildx verwenden und das Flag --platform setzen, um die Zielplattform für die Build-Ausgabe anzugeben (z. B. linux/amd64, linux/arm64 oder darwin/amd64).
```bash
docker buildx build --platform=linux/amd64 -t myems/myems-web .
```
```bash
docker image prune -f
```

* Führen Sie einen Docker-Container aus

Binden Sie auf dem Host nginx.conf ein
```bash
docker run -d -p 80:80 -v /myems-web/nginx.conf:/etc/nginx/nginx.conf:ro --log-opt max-size=1m --log-opt max-file=2 --restart always --name myems-web myems/myems-web
```

* -d Container im Hintergrund ausführen und Container-ID drucken

* -p Veröffentlichen Sie die Ports eines Containers auf dem Host, 80:80 (Host:Container) bindet Port 80 (rechts) des Containers an TCP-Port 80 (links) des Hostcomputers.

* -v Wenn Sie -v oder --volume verwenden, um eine Datei oder ein Verzeichnis per Bind-Mount bereitzustellen, das noch nicht auf dem Docker-Host vorhanden ist,
-v erstellt den Endpunkt für Sie. Es wird immer als Verzeichnis angelegt.
Die Option ro bewirkt, falls vorhanden, dass der Bind-Mount schreibgeschützt in den Container gemountet wird.
Verwenden Sie für v4.7.0 oder frühere Versionen '/code/.env' anstelle von '/app/.env'.

* --log-opt max-size=2m Die maximale Größe des Protokolls, bevor es gerollt wird. Eine positive ganze Zahl plus ein Modifikator, der die Maßeinheit darstellt (k, m oder g).

* --log-opt max-file=2 Die maximale Anzahl von Protokolldateien, die vorhanden sein können. Wenn beim Rollieren der Protokolle überschüssige Dateien entstehen, wird die älteste Datei entfernt. Eine positive Ganzzahl.

* --restart Neustartrichtlinie, die angewendet werden soll, wenn ein Container beendet wird

* --name Weisen Sie dem Behälter einen Namen zu

Wenn Sie das Image auf einen anderen Computer immigrieren möchten,
* Exportieren Sie das Bild in eine tar-Datei
```bash
docker save --output myems-web.tar myems/myems-web
```

* Kopieren Sie die tar-Datei auf einen anderen Computer und laden Sie dann das Bild aus der tar-Datei
```bash
docker load --input .\myems-web.tar
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
