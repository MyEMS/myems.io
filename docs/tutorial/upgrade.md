---
sidebar_position: 2
---

# Upgrade

## Upgrade from v4.7.0 to v4.8.0 - 2024-08-13
### Warning
- **MUST** replace '/code/.env' with '/app/.env' in the 'docker run' commands because WORKDIR in Dockerfile was changed from '/code' to '/app'
### database
- Run upgrade script in myems/database/upgrade/upgrade4.8.0.sql
### myems-admin
- Must be reinstalled because there are new features
### myems-aggregation
- Optional be reinstalled since only version.txt was changed
### myems-api
- Must be reinstalled because there are new features
### myems-cleaning
- Optional be reinstalled since only version.txt was changed
### myems-modbus-tcp
- Optional be reinstalled since only version.txt was changed
### myems-normalization
- Optional be reinstalled since only version.txt was changed
### myems-web
- Must be reinstalled because there are new features


