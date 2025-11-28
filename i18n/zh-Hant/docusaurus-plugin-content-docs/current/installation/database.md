---
sidebar_position: 1
---

# 資料庫

為MyEMS安裝資料庫架構和腳本。

### 先決條件

MyEMS可以運行在以下MySQL兼容的資料庫伺服器。

[MySQL 8.0 (64bit) 及以上版本](https://www.mysql.com/)

[MariaDB 10.5 (64bit) 及以上版本](https://mariadb.org/)

[SingleStore 7.0 及以上版本](https://www.singlestore.com/)


### 部署

在MySQL命令行中執行以下腳本，或在其他MySQL客戶端工具中執行，如MySQL Workbench、Navicat、DBaver、phpMyAdmin等。

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

演示數據是可選的。要插入演示數據，請執行以下腳本：

```bash
cd ~/myems/database/demo-cn
```
```bash
mysql -u root -p < myems_system_db.sql
```
:::tip 如何修復MySQL錯誤「用戶拒絕訪問」

添加遠程訪問用戶

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

:::tip 如何更改MySQL伺服器8.0版之前的COLLATE

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

:::tip 如何修復MySQL錯誤「一個大於'max_allowed_packet'字節的數據包」

更改mysqld部分下的my.cnf或my.ini文件（通常在/etc/mysql/中找到），並設置：

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

不要在生產環境將資料庫安裝到的Docker容器中

:::

---


### 資料庫定義

::: info

企業版提供了詳細資訊資料庫定義。

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
