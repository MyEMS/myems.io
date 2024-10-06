---
sidebar_position: 2
---

# Upgrade

## Upgrade von v4.9.0 auf v4.9.1 - 5.10.2024
### database
- Ausführen myems/database/upgrade/upgrade4.9.1.sql
### myems-admin
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-aggregation
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-api
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-cleaning
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-modbus-tcp
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-normalization
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-web
- Muss neu installiert werden, da es neue Funktionen gibt

## Upgrade von v4.8.0 auf v4.9.0 - 29.09.2024
### database
- Ausführen myems/database/upgrade/upgrade4.9.0.sql
### myems-admin
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-aggregation
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-api
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-cleaning
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-modbus-tcp
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-normalization
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-web
- Muss neu installiert werden, da es neue Funktionen gibt

## Upgrade von v4.7.0 auf v4.8.0 - 13.08.2024
### Warnung
- **MUSS** ersetzen '/code/.env' mit '/app/.env' im 'docker run' Befehle, da WORKDIR in Dockerfile von '/code' an '/app'
### database
- Ausführen myems/database/upgrade/upgrade4.8.0.sql
### myems-admin
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-aggregation
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-api
- Muss neu installiert werden, da es neue Funktionen gibt
### myems-cleaning
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-modbus-tcp
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-normalization
- Optional kann neu installiert werden, da nur version.txt geändert wurde
### myems-web
- Muss neu installiert werden, da es neue Funktionen gibt