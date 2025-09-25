---
sidebar_position: 6
---

# Docker Compose

在本指南中，您将通过Docker compse使用一个命令创建和启动所有服务来的方式部署MyEMS。

### 前提

- 主机已安装docker、docker-compose、npm
- MySQL数据库已安装，拥有一个账号为root，密码为!MyEMS1的用户
- MySQL数据库可正常登陆，可被安装Docker的主机Ping通以及远程访问

### 配置

:::tip

主机指的是运行Docker引擎的服务器, IP和账号密码请酌情修改。

:::

| --                | --          |
| ----------        | ----------- |
| Host IP           | 192.168.0.1 |
| Database IP       | 192.168.0.2 |
| Database User     | root        |
| Database Password | !MyEMS1     |

### 安装

1.  克隆仓库
```bash
git clone https://gitee.com/myems/myems.git
```

2.  导入数据库结构

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
注： 详情可查看[database](./database.md)


3.  修改配置

:::tip

假定的主机IP为 192.168.0.1，数据库IP为 192.168.0.2，数据库账号为：root,数据库密码:!MyEMS1,请酌情修改

:::

3.1  修改nginx.conf里的API配置
```bash
cd myems
```
```bash
nano myems-admin/nginx.conf
```
```bash
nano myems-web/nginx.conf
```

3.2  分别复制下列目录中的example.env为.env并修改.env里的数据库IP，账号，密码
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

3.3 修改docker-compose.yml中upload文件夹路径
如果是Windows主机，在api和admin服务中，volumes/source使用 c:\upload
如果是Linux主机，在api和admin服务中，volumes/source使用 /upload
应确保api和admin共享同一主机文件夹。

4.  编译Web UI

修改配置文件：

:::note

从 https://mapbox.com 获取 mapboxToken 然后设置 showOnlineMap 为 true. 如果要关闭在线地图功能，设置 showOnlineMap 为 false

:::

```bash
cd myems/myems-web
```
```bash
sudo nano src/config.js
```

编译：
```bash
cd myems/myems-web
```
```bash
npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
npm run build
```

5. 运行docker-compose命令

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

6. 验证

|             | 网址                    | 期望结果           |
| ----------- | ----------------------- | ---------------- |
| myems-web   | 192.168.0.1:80          | 输入账号密码登录成功 |
| myems-admin | 192.168.0.1:8001        | 输入账号密码登录成功 |
| myems-api   | 192.168.0.1:8000/version| 返回版本信息       |

:::info

如果api报错，请确认.env里的数据库IP，数据库账号，数据库密码是否正确，如果不正确，请修改后执行：

```bash
docker-compose up --build -d
```

:::


:::tip 如何解决镜像拉取超时问题
由于运营商网络问题，可能会导致您拉取镜像变慢，可以使用第三方加速服务
:::
