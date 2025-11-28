---
sidebar_position: 1
---


## Déploiement de l'Architecture de la Base de Données

Installez l'architecture et les scripts de base de données pour MyEMS.

### Prérequis

MyEMS peut fonctionner sur les serveurs de base de données compatibles MySQL suivants :

[MySQL 8.0 (64 bits) et versions ultérieures](https://www.mysql.com/)

[MariaDB 10.5 (64 bits) et versions ultérieures](https://mariadb.org/)

[SingleStore 7.0 et versions ultérieures](https://www.singlestore.com/)

### Déploiement

Exécutez le script suivant dans l'invite de commande MySQL ou dans d'autres outils clients MySQL tels que MySQL Workbench, Navicat, DBaver, phpMyAdmin, etc.


```bash
cd ~/myems/database/install
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

Les données de présentation sont facultatives. Pour insérer des données de présentation, exécutez le script suivant:


```bash
cd ~/myems/database/demo-cn
```
```bash
mysql -u root -p < myems_system_db.sql
```
:::tip 如何修复MySQL错误“用户拒绝访问”

添加远程访问用户

```bash
sudo mysql -u root -p
```

mysql>
```bash
CREATE USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '!MyEMS1';
```
mysql>
```bash
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
```
mysql>
```bash
FLUSH PRIVILEGES;
```
mysql>
```bash
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '!MyEMS1';
```

:::
::: tip comment changer le COLLATE avant la version 8.0 du serveur MySQL

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
:::


::: tip comment corriger l'erreur MySQL "un paquet plus grand que 'max - allowed - Packet' octets"

Changez le fichier my.cnf ou my.ini sous la section mysqld (généralement trouvé dans / etc / MySQL /) et définissez:

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

Ne pas installer la base de données dans un conteneur docker dans un environnement de production

:::


Définition de la base de données

:::info

La version Enterprise fournit une définition de base de données détaillée.

:::


#### myems_billing_db

#### myems_carbon_db

#### myems_energy_baseline_db

#### myems_energy_db

#### myems_energy_model_db

#### myems_energy_plan_db

#### myems_energy_prediction_db

#### myems_fdd_db

#### myems_historical_db

#### myems_production_db

#### myems_reporting_db

#### myems_system_db

#### myems_user_db
