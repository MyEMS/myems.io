---
sidebar_position: 1
---

# 数据库

为MyEMS安装数据库架构和脚本。

### 先决条件

MyEMS可以运行在以下MySQL兼容的数据库服务器。

[MySQL 8.0 (64bit) or later](https://www.mysql.com/)

[MariaDB 10.5 (64bit) or later](https://mariadb.org/)

[SingleStore 7.0 or later](https://www.singlestore.com/)


### 部署

在MySQL命令行中执行以下脚本，或在其他MySQL客户端工具中执行，如MySQL Workbench、Navicat、DBaver、phpMyAdmin等。

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

演示数据是可选的。要插入演示数据，请执行以下脚本：

```bash
cd myems/database/demo-cn
mysql -u root -p < myems_system_db.sql
```

#### 更改MySQL服务器8.0版之前的COLLATE

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

:::tip 如何修复MySQL错误

如果您收到错误消息 “一个大于'max_allowed_packet'字节的数据包”

更改mysqld部分下的my.cnf或my.ini文件（通常在/etc/mysql/中找到），并设置：

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

不要在生产环境将数据库安装到的Docker容器中

:::

### 数据库定义

:::info

企业版提供了详细信息数据库定义。

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
