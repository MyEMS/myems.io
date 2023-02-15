---
sidebar_position: 1
---

# Datenbank

Installieren Sie Datenbankschema und Skripte für MyEMS.

### Voraussetzungen

MyEMS arbeitet mit den folgenden MySQL-kompatiblen Datenbankservern.

[MySQL 8.0 (64bit) or later](https://www.mysql.com/)

[MariaDB 10.5 (64bit) or later](https://mariadb.org/)

[SingleStore 7.0 or later](https://www.singlestore.com/)


### Einsatz

Führen Sie die folgenden Skripte in der MySQL-Kommandozeile aus oder führen Sie sie in anderen MySQL-Client-Tools wie MySQL Workbench, Navicat, DBaver, phpMyAdmin usw. aus.

```bash
cd myems/database/install
mysql -u root -p < myems_billing_baseline_db.sql
mysql -u root -p < myems_billing_db.sql
mysql -u root -p < myems_carbon_db.sql
mysql -u root -p < myems_energy_baseline_db.sql
mysql -u root -p < myems_energy_db.sql
mysql -u root -p < myems_energy_model_db.sql
mysql -u root -p < myems_fdd_db.sql
mysql -u root -p < myems_historical_db.sql
mysql -u root -p < myems_production_db.sql
mysql -u root -p < myems_reporting_db.sql
mysql -u root -p < myems_system_db.sql
mysql -u root -p < myems_user_db.sql
```

Die Demodaten sind optional. Um Demodaten einzufügen, führen Sie folgende Skripte aus:

```bash
cd myems/database/demo-de
mysql -u root -p < myems_system_db.sql
```

#### Ändern Sie COLLATE für MySQL Server vor Version 8.0
```bash
sudo nano /etc/mysql/my.cnf
```

```bash
[client]
default-character-set = utf8mb4
[mysql]
default-character-set = utf8mb4
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
```

:::tip So beheben Sie MySQL Fehler

Wenn Sie die Fehlermeldung "ein Paket größer als 'max_allowed_packet' Bytes" erhalten haben

Ändern Sie die Datei my.cnf oder my.ini (normalerweise in /etc/mysql/) unter dem Abschnitt mysqld und legen Sie Folgendes fest:

```
max_allowed_packet=100M
```
or you could run these commands in a MySQL console connected to that same server:
```
set global net_buffer_length=1000000;
set global max_allowed_packet=1000000000;
```

:::

:::caution

Datenbank nicht in Docker-Container für Produktionsumgebung installieren

:::

### Datenbankdefinition

:::info

Die Definition der Detaildatenbank ist mit der Enterprise Edition verfügbar.

:::

#### myems_billing_baseline_db

#### myems_billing_db

#### myems_carbon_db

#### myems_energy_baseline_db

#### myems_energy_db

#### myems_energy_model_db

#### myems_fdd_db

#### myems_historical_db

#### myems_production_db

#### myems_reporting_db

#### myems_system_db

#### myems_user_db
