---
sidebar_position: 6
---

# Docker Compose

In dieser Anleitung stellen Sie ein MyEMS mit Docker compse bereit, indem Sie alle Dienste mit einem einzigen Befehl erstellen und starten.

### Voraussetzung

- Installierter Docker, docker-compose, npm auf dem Host.
- Installierter MySQL Server mit Benutzername 'root' und Passwort '! MyEMS1".
- Die MySQL-Datenbank kann von dem Host aus verbunden werden, auf dem die Docker-Engine läuft.

### Konfiguration

:::tip

Der Host bezieht sich auf den Server, auf dem Docker-Engine läuft. Bitte ändern Sie die IP und das Kontopasswort entsprechend..

:::

| --                | --          |
| ----------        | ----------- |
| Host IP           | 192.168.0.1 |
| Database IP       | 192.168.0.2 |
| Database User     | root        |
| Database Password | !MyEMS1     |

### Installation

1.  Repository klonen
```bash
git clone https://github.com/myems/myems.git
```

2.  Datenbankschema importieren

```bash
cd myems/database/install
```
```bash
mysql -u root -p < myems_billing_db.sql
```
```bash
mysql -u root -p < myems_carbon_db.sql
```
```bash
mysql -u root -p < myems_energy_baseline_db.sql
```
```bash
mysql -u root -p < myems_energy_db.sql
```
```bash
mysql -u root -p < myems_energy_model_db.sql
```
```bash
mysql -u root -p < myems_energy_plan_db.sql
```
```bash
mysql -u root -p < myems_energy_prediction_db.sql
```
```bash
mysql -u root -p < myems_fdd_db.sql
```
```bash
mysql -u root -p < myems_historical_db.sql
```
```bash
mysql -u root -p < myems_production_db.sql
```
```bash
mysql -u root -p < myems_reporting_db.sql
```
```bash
mysql -u root -p < myems_system_db.sql
```
```bash
mysql -u root -p < myems_user_db.sql
```
Anmerkung: Siehe unter [database](./database.md)


3. Konfiguration ändern

:::tip

Die angenommene Host-IP ist 192.168.0.1, die Datenbank-IP ist 192.168.0.2, das Datenbankkonto ist: root und das Datenbank-Passwort ist:! Myems1, bitte ändern Sie dies entsprechend

:::

3.1  API-Adresse ändern in nginx.conf
```bash
cd myems
```
```bash
nano myems-admin/nginx.conf
```
```bash
nano myems-web/nginx.conf
```

3.2 Kopieren Sie das folgende Beispiel in das Verzeichnis bzw. Env ist Env und modifizieren Datenbank IP, Kontonummer und Passwort in Env
```bash
cd myems
```
```bash
cp myems-aggregation/example.env myems-aggregation/.env
```
```bash
nano myems-aggregation/.env
```
```bash
cp myems-api/example.env myems-api/.env
```
```bash
nano myems-api/.env
```
```bash
cp myems-cleaning/example.env myems-cleaning/.env
```
```bash
nano myems-cleaning/.env
```
```bash
cp myems-modbus-tcp/example.env myems-modbus-tcp/.env
```
```bash
nano myems-modbus-tcp/.env
```
```bash
cp myems-normalization/example.env myems-normalization/.env
```
```bash
nano myems-normalization/.env
```

3.3 Upload-Ordner ändern in docker-compose.yml
If Windows host, use c:\upload for volumes/source in api and admin services.
If Linux host, use /upload for volumes/source in api and admin services.
Make sure the upload folders in api and admin are same folder on host.

4.  Web UI erstellen

```bash
cd myems/myems-web
```
```bash
npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
npm run build
```

5. Befehl Docker-compose ausführen

On Windows Host:
```bash
cd myems
```
```bash
docker-compose -f docker-compose-on-windows.yml up -d
```

On Linux Host:

```bash
cd myems
```
```bash
docker-compose -f docker-compose-on-linux.yml up -d
```

6. Verification

|             | Address                 | Erwartetes Ergebnis  |
| ----------- | ----------------------- | ---------------- |
| myems-web   | 192.168.0.1:80          | Login erfolgreich durch Eingabe von Konto und Passwort |
| myems-admin | 192.168.0.1:8001        | Login erfolgreich durch Eingabe von Konto und Passwort |
| myems-api   | 192.168.0.1:8000/version| Versionsinformationen zurückgeben |

:::info

Wenn die API einen Fehler meldet, bestätigen Sie bitte, ob die Datenbank-IP, das Datenbankkonto und das Datenbankkennwort in .env sind korrekt. Wenn nicht, ändern Sie sie bitte und führen Sie：
```bash
docker-compose up --build -d
```

:::
