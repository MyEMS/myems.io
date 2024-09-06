---
sidebar_position: 2
---

# Upgrade

## Upgrade von v4.7.0 auf v4.8.0 - 13.08.2024
### Warnung
- **MUSS** ersetzen '/code/.env' mit '/app/.env' im 'docker run' Befehle, da WORKDIR in Dockerfile von '/code' an '/app'
### database
- Führen Sie das Upgrade-Skript in myems/database/upgrade/upgrade4.8.0.sql
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


