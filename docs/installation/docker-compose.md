---
sidebar_position: 6
---

# Docker Compose

In this guide, you will deploy MyEMS with Docker compse by creating and starting all the services with a single command .

### Prerequisite

- Installed docker, docker-compose, npm on the host.
- Installed MySQL server with username 'root' and password '!MyEMS1'.
- The MySQL database can be connected from the host on which the Docker Engine runs.

### Configuration

:::tip

The host refers to the server on which the docker engine runs. The IP and account password are assumed and used to show instructions. Please modify them as appropriate.

:::

| --                | --          |
| ----------        | ----------- |
| Host IP           | 192.168.0.1 |
| Database IP       | 192.168.0.2 |
| Database User     | root        |
| Database Password | !MyEMS1     |

### Installation

1.  Clone repository
```bash
git clone https://github.com/myems/myems.git 
```

2.  Import database schema

```bash
cd myems/database/install
```
```bash
mysql -u root -p < myems_billing_baseline_db.sql
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
Note: Refer to [database](./database.md)


3.  Modify Config

:::tip

Assume the host IP is 192.168.0.1, the database IP is 192.168.0.2, the database account is: root, and the database password is: !MyEMS1, please modify them as appropriate

:::

3.1  Modify API's address in nginx.conf
```bash
cd myems
```
```bash
nano myems-admin/nginx.conf
```
```bash
nano myems-web/nginx.conf
```

3.2  Copy example.env to .env in each folder and modify database IP, username and password in .env
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

3.3 Modify upload folder in docker-compose.yml
If Windows host, use c:\upload for volumes/source in api and admin services.
If Linux host, use /upload for volumes/source in api and admin services.
Make sure the upload folders in api and admin are same folder on host.

4.  Build Web UI

```bash
cd myems/myems-web
```
```bash
npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```
```bash
npm run build
```

5. Run docker-compose command

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

|             | Address                 | Expected Result  |
| ----------- | ----------------------- | ---------------- |
| myems-web   | 192.168.0.1:80          | Login succeeded by entering account and password |
| myems-admin | 192.168.0.1:8001        | Login succeeded by entering account and password |
| myems-api   | 192.168.0.1:8000/version| Return version information |

:::info

If the API reports an error, please confirm Whether the database IP, database account and database password in .env are correct. If not, please modify them then execute:

```bash
docker-compose up --build -d
```

:::
