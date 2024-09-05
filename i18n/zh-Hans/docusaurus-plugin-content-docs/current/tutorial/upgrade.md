---
sidebar_position: 2
---

# Upgrade

## Upgrade from v4.7.0 to v4.8.0 - 2024-08-13
### Warning
- **MUST** 取代 '/code/.env' 跟 '/app/.env' 在 'docker run' 命令，因为 Dockerfile 中的 WORKDIR 已从 '/code' 自 '/app'
### database
- 在 myems/database/upgrade/upgrade4.8.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 可选重新安装，因为仅更改了 version.txt
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt
### myems-modbus-tcp
- 可选重新安装，因为仅更改了 version.txt
### myems-normalization
- 可选重新安装，因为仅更改了 version.txt
### myems-web
- 必须重新安装，因为有新功能


