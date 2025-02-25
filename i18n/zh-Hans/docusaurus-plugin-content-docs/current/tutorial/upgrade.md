---
sidebar_position: 2
---

# 升级

## 从v5.1.0 升级到 v5.2.0 - 2025-2-25
### database
- 执行 myems/database/upgrade/upgrade5.2.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-modbus-tcp
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-normalization
- 必须重新安装，因为有新功能
### myems-web
- 必须重新安装，因为有新功能

## 从v4.12.0 升级到 v5.1.0 - 2025-1-20
### database
- 执行 myems/database/upgrade/upgrade5.1.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-modbus-tcp
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-normalization
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-web
- 必须重新安装，因为有新功能

## 从v4.11.0 升级到 v4.12.0 - 2024-12-21
### database
- 执行 myems/database/upgrade/upgrade4.12.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 可选重新安装，因为仅更改了 version.txt
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt
### myems-modbus-tcp
- 可选重新安装，因为仅更改了 version.txt和test.py
### myems-normalization
- 可选重新安装，因为仅更改了 version.txt
### myems-web
- 必须重新安装，因为有新功能

## 从v4.10.0 升级到 v4.11.0 - 2024-11-23
### database
- 执行 myems/database/upgrade/upgrade4.11.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 必须重新安装，因为有新功能
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt
### myems-modbus-tcp
- 必须重新安装，因为有新功能
### myems-normalization
- 可选重新安装，因为仅更改了 version.txt
### myems-web
- 必须重新安装，因为有新功能

## 从v4.9.1 升级到 v4.10.0 - 2024-10-26
### database
- 执行 myems/database/upgrade/upgrade4.10.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-modbus-tcp
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-normalization
- 可选重新安装，因为仅更改了 version.txt和Dockerfile
### myems-web
- 必须重新安装，因为有新功能

## 从v4.9.0 升级到 v4.9.1 - 2024-10-5
### database
- 执行 myems/database/upgrade/upgrade4.9.1.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 可选重新安装，因为仅更改了 version.txt
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt
### myems-modbus-tcp
- 必须重新安装，因为有新功能
### myems-normalization
- 可选重新安装，因为仅更改了 version.txt
### myems-web
- 必须重新安装，因为有新功能

## 从v4.8.0 升级到 v4.9.0 - 2024-09-29
### database
- 执行 myems/database/upgrade/upgrade4.9.0.sql
### myems-admin
- 必须重新安装，因为有新功能
### myems-aggregation
- 必须重新安装，因为有新功能
### myems-api
- 必须重新安装，因为有新功能
### myems-cleaning
- 可选重新安装，因为仅更改了 version.txt
### myems-modbus-tcp
- 可选重新安装，因为仅更改了 version.txt
### myems-normalization
- 必须重新安装，因为有新功能
### myems-web
- 必须重新安装，因为有新功能

## 从v4.7.0 升级到 v4.8.0 - 2024-08-13
### 警告
- **必须** 将 '/code/.env' 替换成'/app/.env' 在 'docker run' 命令，因为 Dockerfile 中的 WORKDIR 从 '/code' 更改为 '/app'
### database
- 执行 myems/database/upgrade/upgrade4.8.0.sql
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