---
sidebar_position: 4
title: API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---
Voir dans Postman : Utilisez Postman pour importer le fichier MyEMS.postman_collection.json

*   Obtenir des informations sur la version
```bash
curl -i -X GET -H "User-UUID: YOUR-USER-UUID" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" {base_url}/version
```

### Noyau/Configuration des rapports avancés Ⓔ
*   Obtenir toute la configuration avancée des rapports

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports
```

*   Obtenir une configuration de rapport avancée par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1
```

*   Exporter des rapports avancés configurés en json en fonction de l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/export
```

*   Créer une configuration de rapport avancée

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Daily Report1\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports
```

*   Importer une configuration de rapport avancée à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Space Daily Report2\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}" {base_url}/advancedreports/import
```

*   Cloner la configuration avancée des rapports en fonction de l'id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/clone
```

*   Exécuter des rapports avancés en fonction de l'id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/run
```

*   Mise à jour de la configuration avancée des rapports

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Monthly Report\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-01T00:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports/1
```

*   Exécuter des rapports avancés

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/advancedreports/1/run
```

*   Supprimer la configuration avancée des rapports

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/2
```


### Noyau/Équipements combinés

*   Obtenez tout l'équipement combiné

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments
```

*   Créer un appareil combiné

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments
```

*   Obtenez des appareils combinés par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1
```

*   Mise à jour des appareils combinés par id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Combined Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXXs\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments/1
```

*   Cloner les appareils combinés selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/combinedequipments/1
```

*   Supprimer les appareils combinés en fonction de l'id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/6
```

*   Lier l'équipement pour l'équipement combiné

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/combinedequipments/1/equipments
```

*   Obtenez tous les appareils de l'appareil combiné

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments
```

*   Retirer un appareil d'un appareil combiné

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments/1
```

*   Obtenez tous les compteurs pour les appareils combinés

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters
```

*   Lier les compteurs pour les appareils combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/meters
```

*   Retirer le compteur de l'appareil combiné

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters/1
```

*   Lier un compteur hors ligne pour les appareils combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/offlinemeters
```

*   Obtenez tous les compteurs hors ligne pour les appareils combinés

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters
```

*   Retirer le compteur hors ligne de l'appareil combiné

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters/1
```

*   Obtenir tous les paramètres de l'appareil combiné

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters
```

*   Obtenir les paramètres individuels d'un appareil combiné

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/1
```

*   Créer un paramètre de type de point pour les appareils combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   Mise à jour des paramètres de type de point pour les appareils combinés

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/1
```

*   Créer des paramètres de type constant pour les périphériques combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test constant parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   Mise à jour des paramètres de type constant du périphérique combiné

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/2
```

*   Créer un paramètre de type score pour les appareils combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters
```

*   Mise à jour des paramètres de type de score pour les appareils combinés

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters/3
```

*   Supprimer un paramètre d'un périphérique combiné

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/16
```

*   Lier des compteurs virtuels pour les appareils combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/virtualmeters
```

*   Obtenez tous les compteurs virtuels pour les appareils combinés

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters
```

*   Supprimer un compteur virtuel d'un appareil combiné

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters/1
```

*   Obtient toutes les commandes associées au périphérique combiné

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands
```

*   Lier des commandes pour les périphériques combinés

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/combinedequipments/1/commands
```

*   Commande de débranchement à partir de l'équipement combiné

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands/3
```

*   Exporter les périphériques combinés en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/export
```

*   Importer des périphériques combinés à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"组合式设备_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"equipments\":[{\"id\":1,\"name\":\"设备1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":2,\"name\":\"manufacturer\",\"parameter_type\":\"constant\",\"constant\":\"York\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":3,\"name\":\"maintainer\",\"parameter_type\":\"constant\",\"constant\":\"Johnson Controls\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":4,\"name\":\"use life start\",\"parameter_type\":\"constant\",\"constant\":\"2016-01-01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":5,\"name\":\"use life end\",\"parameter_type\":\"constant\",\"constant\":\"2025-12-31\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":6,\"name\":\"model number\",\"parameter_type\":\"constant\",\"constant\":\"CH01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":7,\"name\":\"nominal cooling capacity\",\"parameter_type\":\"constant\",\"constant\":\"90.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":8,\"name\":\"nominal cooling input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":9,\"name\":\"nominal cooling cop\",\"parameter_type\":\"constant\",\"constant\":\"5\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":10,\"name\":\"nominal cooling operating current\",\"parameter_type\":\"constant\",\"constant\":\"120.000 A\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":11,\"name\":\"rated input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":12,\"name\":\"nominal chilled water flow rate\",\"parameter_type\":\"constant\",\"constant\":\"30 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":13,\"name\":\"nominal cooling water flow_rate\",\"parameter_type\":\"constant\",\"constant\":\"50 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":14,\"name\":\"status\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":15,\"name\":\"inlet chilled water temperature\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":2,\"name\":\"Working hours counter\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":16,\"name\":\"chilled_water instantaneous flow rate\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":3,\"name\":\"Current a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":17,\"name\":\"instantaneous power\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":4,\"name\":\"Active Power a\"},\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/combinedequipments/import
```

*   Cloner les appareils combinés selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/clone
```


### Noyau/Contacts

*   Obtenir tous les contacts

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts
```

*   Obtenir un contact par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/1
```

*   Nouveau contact

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888888\",\"description\":\"contact description\"}}" {base_url}/contacts
```

*   Mise à jour des contacts

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888899\",\"description\":\"contact description\"}}" {base_url}/contacts/3
```

*   Supprimer un contact par id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/3
```


### Noyau/Commandes

*   Obtenir toutes les commandes

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands
```

*   Obtenir des commandes selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1
```

*   Nouvelle commande (sans valeur Set)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_off_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn off light\"}}" {base_url}/commands
```

*   Nouvelle commande (contient Set - value)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands
```

*   Mettre à jour la commande (sans set - value)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   Mettre à jour la commande (contient Set - value)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   Supprimer la commande selon l'id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/7
```

*   Envoyer des commandes en fonction de l'id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"set_value\":2}}" {base_url}/commands/1/send
```

*   Exporter la commande en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/export
```

*   Importer des commandes depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"turn_up_light1\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}" {base_url}/commands/import
```

*   Commande clone selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/clone
```


### Noyau/Modes de contrôle

*   Obtenez tous les modes de contrôle

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes
```

*   Obtenir le mode de contrôle selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1
```

*   Nouveau mode de contrôle

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"CM11\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}}" {base_url}/controlmodes
```

*   Mise à jour du mode de contrôle

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"削峰填谷\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":-5}]}}" {base_url}/controlmodes/1
```

*   Supprimer le mode de contrôle en fonction de l'id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/11
```

*   Exporter le mode de contrôle en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/export
```

*   Importer le mode de contrôle depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"自发自用\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}" {base_url}/controlmodes/import
```

*   Cloner le mode de contrôle selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/clone
```

*   Obtenez toute la période du mode de contrôle en fonction de l'id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" {base_url}/controlmodes/1/times
```


### Noyau/Centres de coûts

*   Obtenez le Centre de coûts complet

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters
```

*   Obtenir un centre de coûts par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1
```

*   Nouveau centre de coûts

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"动力中心\",\"external_id\":\"21829198980001\"}}" {base_url}/costcenters
```

*   Mise à jour du Centre de coûts

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"动力中心2\",\"external_id\":\"21829198980002\"}}" {base_url}/costcenters/1
```

*   Supprimer un centre de coûts par id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/3
```

*   Lier les tarifs pour le Centre de coûts

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"tariff_id\":\"3\"}}" {base_url}/costcenters/1/tariffs
```

*   Obtenez tous les tarifs associés au centre de coûts

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs
```

*   Tarifs dégroupés à partir du Centre de coûts

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs/3
```


### Noyau/Fichiers de coûts

*   Obtenir le document de coût complet

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles
```

*   Obtenir des fichiers de coûts selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   Télécharger un fichier de coût

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/costfiles
```

*   Suppression des fichiers de coûts par id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   Récupérer des fichiers de coûts selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/2/restore
```


### Noyau/Fichiers de correction des données

*   Obtenir tous les fichiers de réparation de données

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles
```

*   Obtenir des fichiers de réparation de données par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   Télécharger un fichier de réparation de données

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/datarepairfiles
```

*   Supprimer des fichiers de réparation de données par id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   Récupérer des données pour réparer des fichiers selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1/restore
```


### Noyau/Sources de données

*   Obtenir toutes les sources de données

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources
```

*   Obtenir la source de données selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1
```

*   Nouvelle source de données

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources
```

*   Supprimer la source de données en fonction de l'id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/14
```

*   Mettre à jour la source de données en fonction de l'id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.99\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources/1
```

*   Obtenir tous les points de données selon l'id de la source de données

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1/points
```

*   Exporter la source de données en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/16/export
```

*   Importer des sources de données à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Modbus1\",\"gateway\":{\"id\":1,\"name\":\"Gateway1\",\"uuid\":\"dc681938-5053-8660-98ed-266c58227231\"},\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\",\"points\":[{\"name\":\"Active Energy Import 1\",\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_注册s\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null},{\"name\":\"Active Power  2\",\"object_type\":\"ANALOG_VALUE\",\"units\":\"kW\",\"high_limit\":999999999\",\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":209, \\"number_of_注册s\\":2, \\"format\\":\\"=L\\", \\"byte_swap\\":true}\",\"description\":null}]}" {base_url}/datasources/import
```

*   Cloner une source de données

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/2/clone
```


### Noyau/Systèmes de distribution électrique

*   Obtenez tout le système de distribution

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems
```

*   Acquisition du système de distribution électrique selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1
```

*   Nouveau système de distribution électrique

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例配电系统2\",\"svg_id\":1,\"description\":\"demo description\"}}" {base_url}/distributionsystems
```

*   Supprimer le système de distribution selon id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/2
```

*   Mise à jour du système de distribution selon id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例配电系统1\",\"svg_id\":2,\"description\":\"demo description\"}}" {base_url}/distributionsystems/1
```

*   Acquérir la totalité de la boucle de distribution sous le système de distribution

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/distributioncircuits
```

*   Exporter le système de distribution en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/export
```

*   Importer un système de distribution à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"示例配电系统_1\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"demo distribution system\",\"circuits\":[{\"id\":1,\"name\":\"AHa01\",\"uuid\":\"52f7abe1-ba0e-47a6-a327-4faac42a1d11\",\"distribution_room\":\"1ES\",\"switchgear\":\"AHa01\",\"peak_load\":5100,\"peak_current\":1250,\"customers\":\"11#电源进线1WHj2\",\"meters\":\"AHa01\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}]}" {base_url}/distributionsystems/import
```

*   Cloner le système de distribution électrique selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/clone
```


### Noyau/Circuits de distribution

*   Obtenir toute la boucle de distribution

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits
```

*   Obtenir la boucle de distribution selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1
```

*   Nouvelle boucle de distribution électrique

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W92\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室应急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits
```

*   Supprimer la boucle de distribution selon id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/2
```

*   Mise à jour de la boucle de distribution selon id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W91\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室应急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits/1
```

*   Liaison des points de données pour la boucle de distribution

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/distributioncircuits/1/points
```

*   Obtenir tous les points de données de la boucle de distribution

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points
```

*   Délier les points de données de la boucle de distribution

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points/2
```


### Noyau/Serveurs de messagerie

*   Obtenir tous les serveurs de messagerie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers
```

*   Nouveau serveur de messagerie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.126.com\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@126.com\"}}" {base_url}/emailservers
```

*   Obtenir un serveur de messagerie par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/1
```

*   Mise à jour du serveur de messagerie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.myems.io\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@myems.io\"}}" {base_url}/emailservers/1
```

*   Supprimer le serveur de messagerie en fonction de l'id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/2
```


### Noyau/Messages électroniques

*   Obtenir des messages par intervalle de temps

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages?startdatetime=2021-10-01T00:00:00&enddatetime=2021-10-11T00:00:00
```

*   Obtenir un message mail par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/1
```

*   Nouveau message mail

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/emailmessages
```

*   Mise à jour des messages mail

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/emailmessages/1
```

*   Supprimer des messages par id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/2
```


### Noyau/Types d'énergie

*   Accès à tous les types d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories
```

*   Obtenez les types d'énergie selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/1
```

*   Nouveaux types d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"柴油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories
```

*   Mise à jour des types d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"汽油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories/12
```

*   Supprimer les types d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/12
```


### Noyau/Diagrammes de flux d'énergie

*   Obtenez le diagramme de flux d'énergie complet

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams
```

*   Obtenir un diagramme de flux d'énergie selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1
```

*   Nouvelle carte de flux d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow\"}}" {base_url}/energyflowdiagrams
```

*   Mettre à jour le diagramme de flux d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow Diagram\"}}" {base_url}/energyflowdiagrams/2000000
```

*   Supprimer le diagramme de flux d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/2000000
```

*   Obtenir tous les nœuds du diagramme de flux d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/nodes
```

*   Nouveau nœud de diagramme de flux d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"10KV#3\"}}" {base_url}/energyflowdiagrams/1000000/nodes
```

*   Mettre à jour les nœuds de diagramme de flux d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"10KV Input #1\"}}" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   Supprimer un nœud de diagramme de flux d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   Obtenir toutes les connexions du diagramme de flux d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/links
```

*   Nouvelle connexion de diagramme de flux d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000008,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links
```

*   Mise à jour de la connexion du diagramme de flux d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000009,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   Supprimer une connexion de diagramme de flux d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   Exporter le diagramme de flux d'énergie en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/export
```

*   Importer des diagrammes de flux d'énergie à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"示例能流图_3\",\"uuid\":\"3ccbc9c6-9575-4212-a63a-a688d1154302\",\"nodes\":[{\"id\":1,\"name\":\"10KV进线#1\"},{\"id\":2,\"name\":\"10KV进线#2\"},{\"id\":3,\"name\":\"租区\"},{\"id\":4,\"name\":\"公区\"},{\"id\":5,\"name\":\"酒店\"},{\"id\":6,\"name\":\"车库\"},{\"id\":7,\"name\":\"餐饮\"},{\"id\":8,\"name\":\"零售\"},{\"id\":9,\"name\":\"照明\"},{\"id\":10,\"name\":\"电梯\"}],\"links\":[{\"id\":1,\"source_node\":{\"id\":1,\"name\":\"10KV进线#1\"},\"target_node\":{\"id\":3,\"name\":\"租区\"},\"meter\":{\"type\":\"meter\",\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}}]}" {base_url}/energyflowdiagrams/import
```

*   Cloner le diagramme de flux d'énergie selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/clone
```


### Noyau/Sous-catégories de consommation d'énergie

*   Obtenez tous les détails de consommation d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems
```

*   Obtenir un seul détail de consommation d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/1
```

*   Nouvelle consommation d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"租户用电\",\"energy_category_id\":1}}" {base_url}/energyitems
```

*   Mettre à jour le Sous - ensemble de consommation d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"空调用\",\"energy_category_id\":1}}" {base_url}/energyitems/1
```

*   Supprimer le Sous - point consommation d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/4
```


### Noyau/Conteneurs de stockage d'énergie Ⓔ

*   Obtenez tous les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers
```

*   Acquisition de conteneurs de stockage d'énergie selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   Exporter des conteneurs de stockage d'énergie en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/export
```

*   Nouveau conteneur de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers
```

*   Importation de conteneurs de stockage d'énergie à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"9b963448-1235-4239-b0c9-c71d926cec5f\",\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"albert\",\"uuid\":\"076ea179-5a7e-4a48-9fcd-f452f95f5376\"},\"cost_center\":{\"id\":1,\"name\":\"动力中心\",\"uuid\":\"6fc174dc-9c57-4934-9896-9226e696dbf2\"},\"description\":\"Classic\",\"qrcode\":\"energystoragecontainer:9b963448-1235-4239-b0c9-c71d926cec5f\"}" {base_url}/energystoragecontainers/import
```

*   Cloner des conteneurs de stockage d'énergie selon id

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/clone
```

*   Mise à jour des conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":300,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers/1
```

*   Supprimer des conteneurs de stockage d'énergie selon id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   Obtenez toute la batterie de votre conteneur de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries
```

*   Acquisition de batteries individuelles pour conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   Nouvelle batterie de conteneur de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":300,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries
```

*   Mise à jour de la batterie du conteneur de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":500,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries/1
```

*   Supprimer la batterie du conteneur de stockage d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   Obtenez tout le réseau électrique pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids
```

*   Acquisition d'un seul réseau de conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   Nouveau réseau de conteneurs de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids
```

*   Mise à jour du réseau de conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids/1
```

*   Supprimer le réseau de conteneurs de stockage d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   Nouveau climatiseur de conteneur de stockage d'énergie (HVAC)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs
```

*   Obtenez tous les climatiseurs de conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs
```

*   Acquisition de climatiseurs individuels pour conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   Mise à jour de la climatisation des conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs/1
```

*   Supprimer stockage d'énergie Container Air Conditioning

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   Nouveau système anti - incendie pour conteneurs de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols
```

*   Obtenez tout le système de protection contre l'incendie pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols
```

*   Acquisition d'un seul système de lutte contre l'incendie pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   Mise à jour du système de protection contre l'incendie des conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   Supprimer stockage d'énergie Container Fire System

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   Obtenez la charge complète du conteneur de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads
```

*   Acquisition de charges individuelles pour conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   Nouvelle charge de conteneur de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads
```

*   Mise à jour de la charge des conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads/1
```

*   Supprimer la charge du conteneur de stockage d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   Obtenez un système de flux variable complet pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   Acquisition d'un seul système de flux variable pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   Nouveau système de fluidisation des conteneurs de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":null,\"device_status_point_id\":null,\"control_mode_point_id\":null,\"total_ac_active_power_point_id\":null,\"total_ac_reactive_power_point_id\":null,\"total_ac_apparent_power_point_id\":null,\"total_ac_power_factor_point_id\":null,\"ac_frequency_point_id\":null,\"phase_a_active_power_point_id\":null,\"phase_b_active_power_point_id\":null,\"phase_c_active_power_point_id\":null,\"phase_a_reactive_power_point_id\":null,\"phase_b_reactive_power_point_id\":null,\"phase_c_reactive_power_point_id\":null,\"phase_a_apparent_power_point_id\":null,\"phase_b_apparent_power_point_id\":null,\"phase_c_apparent_power_point_id\":null,\"ab_voltage_point_id\":null,\"bc_voltage_point_id\":null,\"ca_voltage_point_id\":null,\"ab_current_point_id\":null,\"bc_current_point_id\":null,\"ca_current_point_id\":null,\"phase_a_voltage_point_id\":null,\"phase_b_voltage_point_id\":null,\"phase_c_voltage_point_id\":null,\"phase_a_current_point_id\":null,\"phase_b_current_point_id\":null,\"phase_c_current_point_id\":null,\"pcs_module_temperature_point_id\":null,\"pcs_ambient_temperature_point_id\":null,\"a1_module_temperature_point_id\":null,\"b1_module_temperature_point_id\":null,\"c1_module_temperature_point_id\":null,\"a2_module_temperature_point_id\":null,\"b2_module_temperature_point_id\":null,\"c2_module_temperature_point_id\":null,\"air_inlet_temperature_point_id\":null,\"air_outlet_temperature_point_id\":null,\"dc_power_point_id\":null,\"dc_voltage_point_id\":null,\"dc_current_point_id\":null}}" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   Mise à jour du système de fluidisation des conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":60,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":6,\"device_status_point_id\":7,\"control_mode_point_id\":8,\"total_ac_active_power_point_id\":9,\"total_ac_reactive_power_point_id\":10,\"total_ac_apparent_power_point_id\":11,\"total_ac_power_factor_point_id\":12,\"ac_frequency_point_id\":13}}" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   Supprimer stockage d'énergie Container fluiding System

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   Obtenez un plan de période complet pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules
```

*   Nouveau programme de créneaux horaires pour les conteneurs de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules
```

*   Acquisition d'un plan de période unique pour les conteneurs de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

*   Mise à jour du plan de créneaux horaires des conteneurs de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules/1
```

*   Supprimer le plan de période des conteneurs de stockage d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

### Noyau/Centrales de stockage d'énergie Ⓔ

*   Accès à toutes les centrales de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations
```

*   Acquisition d'une centrale de stockage d'énergie selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1
```

*   Nouvelle centrale de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations
```

*   Renouvellement des centrales de stockage d'énergie

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations/1
```

*   Supprimer une centrale de stockage d'énergie selon id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/2
```

*   Obtenez tous les conteneurs de la centrale de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers
```

*   Lier des conteneurs pour les centrales de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_storage_container_id\":1}}" {base_url}/energystoragepowerstations/1/containers
```

*   Retrait des conteneurs des centrales de stockage d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers/1
```

*   Obtenez tous les utilisateurs de la centrale de stockage d'énergie

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users
```

*   Lier les utilisateurs pour les centrales de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/energystoragepowerstations/1/users
```

*   Suppression des utilisateurs des centrales de stockage d'énergie

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users/1
```

*   Exporter la centrale de stockage d'énergie en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/export
```

*   Importer une centrale de stockage d'énergie à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"7297cfc1-8978-487b-a14b-fedb9b3525f5\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/energystoragepowerstations/import
```

*   Station de stockage d'énergie clone

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/clone
```


### Noyau/Équipements

*   Obtenez tout l'équipement

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments
```

*   Nouvel équipement

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments
```

*   Obtenez l'appareil selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1
```

*   Mettre à jour l'appareil en fonction de l'id

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments/1
```

*   Supprimer un appareil en fonction de son id

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/4
```

*   Lier un compteur pour l'équipement

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":3,\"is_output\":false}}" {base_url}/equipments/1/meters
```

*   Obtenez le compteur complet de votre appareil

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters
```

*   从设备移除计量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters/1
```

*   为设备绑定离线表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/offlinemeters
```

*   获取设备的全部离线表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/offlinemeters
```

*   从设备移除离线表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/offlinemeters/1
```

*   获取设备的全部参数

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters
```

*   获取设备的单个参数

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/2
```

*   为设备创建点类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   更新设备的点类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/14
```

*   为设备创建常量类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   更新设备的常量类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/25
```

*   为设备创建分数类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters
```

*   更新设备的分数类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters/24
```

*   从设备删除参数

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/16
```

*   为设备绑定虚拟表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/virtualmeters
```

*   获取设备的全部虚拟表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/virtualmeters
```

*   从设备移除虚拟表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/virtualmeters/1
```

*   获取与设备关联的全部命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/commands
```

*   为设备绑定命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/equipments/1/commands
```

*   从设备解绑命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/commands/3
```

*   根据 ID 导出设备为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/export
```

*   从 JSON 导入设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"设备_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/equipments/import
```

*   根据 ID 克隆设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/clone
```


### Noyau/Passerelles

*   获取全部网关

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways
```

*   根据 ID 获取网关

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1
```

*   新建设备网关

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway 3\",\"description\":\"Gateway 3\"}}" {base_url}/gateways
```

*   根据 ID 删除网关

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/3
```

*   根据 ID 更新网关

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway #3\",\"description\":\"Gateway #3\"}}" {base_url}/gateways/3
```

*   获取网关下的全部数据源

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/datasources
```

*   根据 ID 导出网关为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/export
```

*   从 JSON 导入网关

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Gateway10\",\"description\":null}" {base_url}/gateways/import
```

*   克隆网关

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/clone
```


### Noyau/Base de connaissances

*   获取全部知识库

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles
```

*   根据 ID 获取知识库

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   上传知识库

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/knowledgefiles
```

*   根据 ID 删除知识库

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   根据 ID 恢复知识库

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1/restore
```


### Noyau/Menus

*   获取全部菜单

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus
```

*   根据 ID 获取菜单

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100
```

*   更新菜单

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"is_hidden\":true}}" {base_url}/menus/100
```

*   获取指定菜单的全部子菜单

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100/children
```

*   获取 Web UI 的全部菜单

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/web
```


### Noyau/Compteurs

*   获取全部计量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters
```

*   根据 ID 获取计量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1
```

*   新建计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"PM20\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空调用电\"}}" {base_url}/meters
```

*   更新计量表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"PM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空调用电\"}}" {base_url}/meters/4
```

*   根据 ID 删除计量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/4
```

*   获取某计量表的全部子表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/submeters
```

*   为计量表绑定数据点

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"3\"}}" {base_url}/meters/1/points
```

*   获取与计量表关联的全部数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/points
```

*   从计量表解绑数据点

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/points/3
```

*   获取与计量表关联的全部命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/commands
```

*   为计量表绑定命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/meters/1/commands
```

*   从计量表解绑命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/commands/3
```

*   根据 ID 导出计量表为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/export
```

*   克隆计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/clone
```

*   从 JSON 导入计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"cost_center\":{\"id\":1,\"name\":\"test\",\"uuid\":\"76d86222-96c5-4653-8162-bfbcd7edd5ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"master_meter\":null,\"description\":\"meter1\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}" {base_url}/meters/import
```


### Noyau/Micro-réseaux Ⓔ

*   获取全部微电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids
```

*   根据 ID 获取微电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1
```

*   新建微电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/microgrids
```

*   更新微电网

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/microgrids/1
```

*   根据 ID 导出微电网为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/export
```

*   从 JSON 导入微电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":300,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"serial_number\":\"S1234567890\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/microgrids/import
```

*   克隆微电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/clone
```

*   根据 ID 删除微电网

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/3
```

*   获取微电网的全部传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/sensors
```

*   为微电网绑定传感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/microgrids/1/sensors
```

*   从微电网移除传感器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/sensors/1
```

*   获取微电网的全部电池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries
```

*   获取微电网电池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries/1
```

*   新建微电网电池

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":10,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries
```

*   更新微电网电池

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":30,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries/1
```

*   删除微电网电池

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries/1
```

*   获取微电网的全部充电桩

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers
```

*   获取微电网充电桩

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers/1
```

*   新建微电网充电桩

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/evchargers
```

*   更新微电网充电桩

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/evchargers/1
```

*   删除微电网充电桩

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers/1
```

*   获取微电网的所有发电机

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators
```

*   获取微电网的发电机

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators/1
```

*   新建微电网发电机

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/generators
```

*   更新微电网发电机

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/generators/1
```

*   删除微电网发电机

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators/1
```

*   获取微电网的全部电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids
```

*   获取微电网电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids/1
```

*   新建微电网电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30}}" {base_url}/microgrids/1/grids
```

*   更新微电网电网

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":50}}" {base_url}/microgrids/1/grids/1
```

*   删除微电网电网

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids/1
```

*   获取微电网的全部热泵

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps
```

*   获取微电网的热泵

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   创建微电网的热泵

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":30}}" {base_url}/microgrids/1/heatpumps
```

*   更新微电网的热泵

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":50}}" {base_url}/microgrids/1/heatpumps/1
```

*   删除微电网的热泵

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   Obtenez toutes les charges du Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads
```

*   Acquérir la charge du Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   Charge de nouveaux micro - réseaux

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30}}" {base_url}/microgrids/1/loads
```

*   Mise à jour de la charge du Microgrid

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":60}}" {base_url}/microgrids/1/loads/1
```

*   Supprimer la charge du Microgrid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   Obtenez tout le photovoltaïque pour les micro - réseaux

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics
```

*   Acquérir photovoltaïque pour Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   Photovoltaïque pour un nouveau micro - réseau

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":30}}" {base_url}/microgrids/1/photovoltaics
```

*   Photovoltaïque pour renouveler les micro - réseaux

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":50}}" {base_url}/microgrids/1/photovoltaics/1
```

*   Supprimer photovoltaïque pour micro - réseaux

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   Acquérir tous les systèmes de transformation de puissance pour micro - réseaux

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems
```

*   Acquisition de systèmes de transformation de puissance pour micro - réseaux

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   Système de transformation de puissance pour un nouveau micro - réseau

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems
```

*   Mise à jour du système de transformation de puissance du micro - réseau

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":50,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems/1
```

*   Supprimer le système de transformation de puissance du micro - réseau

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   Obtenez toutes les stratégies de planification pour les microgrids

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules
```

*   Obtenir une stratégie d'ordonnancement pour les microgrids

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   Mise à jour de la stratégie d'ordonnancement des microgrids

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules/1
```

*   Stratégie d'ordonnancement pour les nouveaux microgrids

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules
```

*   Supprimer la stratégie de planification pour les micro - réseaux

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   Obtenez tous les utilisateurs du Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users
```

*   Nouveau lier les utilisateurs au micro - réseau

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/microgrids/1/users
```

*   Supprimer un utilisateur du Microgrid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users/1
```


### Noyau/Notifications

*   Obtenir des notifications

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications?startdatetime=2021-01-01T00:00:00&enddatetime=2021-01-02T00:00:00&status=unread
```

*   Obtenir des notifications selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/1
```

*   Notification de mise à jour

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/notifications/1
```

*   Supprimer une notification (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/2
```


### Noyau/Compteurs hors ligne

*   Obtenez tous vos compteurs hors ligne

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters
```

*   Obtenir un compteur hors ligne selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1
```

*   Nouveau compteur hors ligne

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"OfflinePM21\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空调用电\"}}" {base_url}/offlinemeters
```

*   Mise à jour des compteurs hors ligne

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"OfflinePM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空调用电\"}}" {base_url}/offlinemeters/3
```

*   Supprimer le compteur hors ligne (appuyez sur ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/3
```

*   Obtenir exporter un compteur hors ligne en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/export
```

*   Nouveau importer des compteurs hors ligne depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"离线表101\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"offlinemeter1\"}" {base_url}/offlinemeters/import
```

*   Compteurs hors ligne clonés (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/clone
```


### Noyau/Compteurs hors ligne文件

*   Obtenir tous les fichiers de compteur hors ligne

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles
```

*   Obtenir un fichier pour obtenir un compteur hors ligne selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   Télécharger un fichier de compteur hors ligne

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/offlinemeterfiles
```

*   Supprimer des fichiers pour les compteurs hors ligne (appuyez sur ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   Obtenir un fichier de compteur hors ligne stocké selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1/restore
```


### Noyau/Fichiers de plans énergétiques

*   Accès à tous les documents du plan énergétique

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles
```

*   Obtenir les documents du plan énergétique selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   Télécharger un document de plan énergétique

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/energyplanfiles
```

*   Supprimer un fichier de plan énergétique (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   Obtenir les documents du plan énergétique de rstore selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1/restore
```


### Noyau/Centrales photovoltaïques Ⓔ

*   Obtenez toutes les centrales photovoltaïques

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations
```

*   Obtenir une centrale photovoltaïque selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1
```

*   Nouvelle centrale photovoltaïque

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Harbin Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations
```

*   Renouvellement des centrales photovoltaïques

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations/1
```

*   Supprimer une centrale photovoltaïque (appuyez sur ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/2
```

*   Obtenir exporter une centrale photovoltaïque en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/export
```

*   Nouvelle installation photovoltaïque importée depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Harbin Office\",\"uuid\":\"fd19346c-0e5a-4a1c-b3c3-3ef4fea9c1ea\",\"station_code\":\"XAAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"a0e79d2e-8756-457e-b1f2-4152e3591bff\"},\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}" {base_url}/photovoltaicpowerstations/import
```

*   Centrale photovoltaïque clonée (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/clone
```

*   Obtenez tous les réseaux électriques pour les centrales photovoltaïques

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids
```

*   Acquérir le réseau électrique des centrales photovoltaïques

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   Réseau électrique pour les nouvelles centrales photovoltaïques

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids
```

*   Renouvellement du réseau électrique des centrales photovoltaïques

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   Supprimer le réseau électrique des centrales photovoltaïques

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   Obtenez tous les onduleurs pour les centrales photovoltaïques

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors
```

*   Acquisition d'onduleurs pour centrales photovoltaïques

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   Onduleurs pour les nouvelles centrales photovoltaïques

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors
```

*   Mise à jour des onduleurs des centrales photovoltaïques

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   Supprimer les onduleurs pour les centrales photovoltaïques

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   Obtenez toutes les charges de votre centrale photovoltaïque

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads
```

*   Obtenir la charge d'une centrale photovoltaïque

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   Charge des nouvelles centrales photovoltaïques

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads
```

*   Mise à jour de la charge des centrales photovoltaïques

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   Supprimer la charge des centrales photovoltaïques

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   Obtenez tous les utilisateurs de la centrale photovoltaïque

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users
```

*   Nouvelle copie liant l'utilisateur à la centrale de stockage d'énergie

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/photovoltaicpowerstations/1/users
```

*   Supprimer un utilisateur de Photovoltaic Station

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users/1
```


### Noyau/Points de données

*   Obtenir tous les points de données

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points
```

*   Get get data points par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/1
```

*   Créer un point de données

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"ModbusPoint3\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_注册s\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null}}" {base_url}/points
```

*   Supprimer un point de données (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/2
```

*   Points de données mis à jour (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"ModbusPoint1\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":100,\"offset_constant\":12,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_注册s\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null,\"definitions\":null}}" {base_url}/points/1
```

*   Mettre à jour les limites des points de données (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0}}" {base_url}/pointlimits/10001
```

*   Obtenir exporter des points de données en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/export
```

*   Nouveau importer des points de données à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Active Energy Import 1\",\"data_source\":{\"id\":1,\"name\":\"示例ModbusTCP数据源\",\"uuid\":\"b3ace9d4-b63b-419b-818f-0f6d1d0603a4\"},\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_注册s\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null,\"faults\":null,\"definitions\":null}" {base_url}/points/import
```

*   Points de données clonés (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/clone
```


### Noyau/Autorisations

*   Obtenir toutes les autorisations

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges
```

*   Données pour mettre à jour les autorisations

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges/1
```

*   Supprimer les permissions

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges/1
```

*   Créer des permissions

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges
```


### Noyau/Protocoles

*   Obtenir tous les accords

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols
```

*   Obtenir le Protocole d'obtention selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1
```

*   Nouvel accord

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols
```

*   Mettre à jour l'Accord

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols/3
```

*   Supprimer un accord (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/3
```

*   Obtenir json selon le Protocole d'exportation id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/export
```

*   Nouveau protocole d'importation depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}" {base_url}/protocols/import
```

*   Protocole pour le clonage (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/clone
```


### Noyau/Règles Ⓔ

*   Obtenez toutes les règles

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules
```

*   Get get Rules selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1
```

*   Obtenir json selon la règle d'exportation id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/export
```

*   Nouvelle règle

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules
```

*   Nouvelle règle d'importation depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Space Energy Consumption Over Limit_1\",\"category\":\"SPACE\",\"fdd_code\":\"SPACE01\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":null,\"is_run_immediately\":true}" {base_url}/rules/import
```

*   Règles pour le clonage (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/clone
```

*   Règles exécutées (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/run
```

*   Mise à jour des règles

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules/2
```

*   Supprimer une règle (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/2
```


### Noyau/Capteurs

*   Obtenez tous les capteurs

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors
```

*   Get get capteurs selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1
```

*   Nouveau capteur

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors
```

*   Mise à jour des capteurs

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors/3
```

*   Supprimer le capteur (appuyez sur ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/3
```

*   Nouveau lier un point de données à un capteur

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/sensors/1/points
```

*   Obtenir des points de données pour tous les capteurs liés selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points
```

*   Supprimer les points de données désengagés du capteur

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points/2
```

*   Obtenir exporter le capteur en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/export
```

*   Nouveau importer des capteurs depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"传感器123\",\"description\":\"sensor description\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},{\"id\":2,\"name\":\"Working hours counter\"}]}" {base_url}/sensors/import
```

*   Capteurs clonés (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/clone
```


### Noyau/Ateliers

*   Accès à tous les ateliers

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors
```

*   Get get Workshop par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1
```

*   Nouvel atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors
```

*   Mettre à jour l'atelier

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors/3
```

*   Supprimer un atelier (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/2
```

*   Obtenez tout l'équipement de l'atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments
```

*   Nouveau lier l'équipement à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/shopfloors/1/equipments
```

*   Supprimer un appareil de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments/1
```

*   Obtenez tous les compteurs électriques de l'atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters
```

*   Nouveau lier le compteur à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/shopfloors/1/meters
```

*   Supprimer un compteur électrique de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters/1
```

*   Obtenez tous les compteurs hors ligne de l'atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters
```

*   Nouveau lier une table hors ligne à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/shopfloors/1/offlinemeters
```

*   Supprimer les compteurs hors ligne de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters/1
```

*   Obtenez tous les points de données de votre atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points
```

*   Nouveau lier des points de données à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/shopfloors/1/points
```

*   Supprimer des points de données de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points/1
```

*   Obtenez tous les capteurs de votre atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors
```

*   Nouveau lier le capteur à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/shopfloors/1/sensors
```

*   Supprimer des capteurs de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors/1
```

*   Obtenez tous les compteurs virtuels de l'atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters
```

*   Nouveau lier un compteur virtuel à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/shopfloors/1/virtualmeters
```

*   Supprimer un compteur virtuel de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters/1
```

*   Obtenez tous les calendriers de travail de l'atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars
```

*   Nouveau lier le calendrier de travail à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/shopfloors/1/workingcalendars
```

*   Supprimer le calendrier de travail de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars/6
```

*   Nouveau lier les instructions à l'atelier

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/shopfloors/1/commands
```

*   Obtenez toutes les instructions pour l'atelier

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands
```

*   Supprimer la directive de désengagement de l'atelier

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands/1
```

*   Obtenir Export Workshop en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/export
```

*   Nouvel atelier d'importation depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"车间_1\",\"area\":99999.999,\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MyEMS Project\",\"equipments\":[{\"id\":1,\"name\":\"设备1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/shopfloors/import
```

*   Atelier de clonage (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/clone
```


### Noyau/Espaces

*   Obtenez tout l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces
```

*   Get get Space selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1
```

*   Nouvel espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":1,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":false,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces
```

*   Mettre à jour l'espace

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":2,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces/1
```

*   Supprimer l'espace (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/57
```

*   Obtenir tous les sous - espaces de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/children
```

*   Obtenez tous les appareils combinés pour l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments
```

*   Nouveau lier un périphérique combiné à un espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"combined_equipment_id\":1}}" {base_url}/spaces/1/combinedequipments
```

*   Supprimer un périphérique combiné de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments/1
```

*   Obtenez tous les systèmes de distribution de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems
```

*   Nouveau lier le système de distribution à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"distribution_system_id\":1}}" {base_url}/spaces/1/distributionsystems
```

*   Supprimer désengagement du système de distribution de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems/1
```

*   Obtenez toutes les cartes de flux d'énergie pour l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams
```

*   Nouveau lier le diagramme de flux d'énergie à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_flow_diagram_id\":1}}" {base_url}/spaces/1/energyflowdiagrams
```

*   Supprimer le diagramme de flux d'énergie désengagé de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams/1
```

*   Toutes les centrales de stockage d'énergie pour l'accès à l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations
```

*   Nouveau lier la centrale de stockage d'énergie à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_storage_power_station_id\":1}}" {base_url}/spaces/1/energystoragepowerstations
```

*   Supprimer station de stockage d'énergie désengagée de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations/1
```

*   Obtenez tout l'équipement de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments
```

*   Nouveau lier un périphérique à un espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/spaces/1/equipments
```

*   Supprimer l'équipement de débranchement de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments/1
```

*   Obtenez tous les compteurs d'électricité pour l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters
```

*   Nouveau lier le compteur à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/spaces/1/meters
```

*   Supprimer débrancher le compteur de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters/1
```

*   Obtenez tous les microgrids de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids
```

*   Nouveau lier le Microgrid à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/spaces/1/microgrids
```

*   Supprimer débrancher le Microgrid de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids/1
```

*   Obtenez tous les compteurs hors ligne pour l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters
```

*   Nouveau lier une table hors ligne à un espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/spaces/1/offlinemeters
```

*   Supprimer débrancher le compteur hors ligne de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters/1
```

*   Acquérir toutes les centrales photovoltaïques de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations
```

*   Nouvelle copie liant la centrale photovoltaïque à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"photovoltaic_power_station_id\":1}}" {base_url}/spaces/1/photovoltaicpowerstations
```

*   Supprimer désengagement des centrales photovoltaïques de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations/1
```

*   Obtenir tous les points de données de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   Nouveau lier un point de données à un espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/spaces/1/points
```

*   Supprimer les points de données désengagés de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/points/3
```

*   Obtenez tous les capteurs de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors
```

*   Nouveau lier le capteur à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/spaces/1/sensors
```

*   Supprimer les capteurs désengagés de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors/1
```

*   Tous les ateliers pour obtenir de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors
```

*   Nouveau lier l'atelier à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"shopfloor_id\":1}}" {base_url}/spaces/1/shopfloors
```

*   Supprimer atelier de désengagement de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors/1
```

*   Tous les magasins pour obtenir de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores
```

*   Nouveau lier le magasin à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"store_id\":1}}" {base_url}/spaces/1/stores
```

*   Supprimer un magasin désengagé de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores/1
```

*   Tous les locataires qui acquièrent l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants
```

*   Nouveau lier les locataires à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"tenant_id\":1}}" {base_url}/spaces/1/tenants
```

*   Supprimer dissocier les locataires de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants/1
```

*   Obtenez tous les compteurs virtuels de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   Nouveau lier un compteur virtuel à un espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/spaces/1/virtualmeters
```

*   Supprimer débrancher le compteur virtuel de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters/1
```

*   Obtenir les utilisateurs de Space Tree

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/tree
```

*   Obtenez tous les compteurs dans la catégorie Énergie dans l'arbre spatial

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/treemetersenergycategories
```

*   Obtenez tous les calendriers de travail de l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars
```

*   Nouveau lier le calendrier de travail à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/spaces/1/workingcalendars
```

*   Supprimer le calendrier de travail désengagé de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars/6
```

*   Obtenez toutes les instructions pour l'espace

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands
```

*   Nouveau lier les directives à l'espace

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/spaces/1/commands
```

*   Supprimer la directive unlink de l'espace

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands/1
```

*   Obtenir l'espace d'exportation en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/export
```

*   Nouveau importer de l'espace depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"1号楼_1\",\"parent_space_id\":{\"id\":1,\"name\":\"MyEMS\",\"uuid\":\"9dfb7cff-f19f-4a1e-8c79-3adf6425bfd9\"},\"area\":88888.888,\"timezone\":{\"id\":56,\"name\":\"China Standard Time\",\"utc_offset\":\"+08:00\"},\"is_input_counted\":true,\"is_output_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"latitude\":39.915119,\"longitude\":116.403963,\"description\":\"MyEMS Space\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"shopfloors\":[{\"id\":1,\"name\":\"车间1\",\"uuid\":\"d03837fd-9d30-44fe-9443-154f7c7e15f1\"}],\"combined_equipments\":null,\"equipments\":null,\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"tenants\":[{\"id\":1,\"name\":\"Starbucks星巴克\",\"uuid\":\"6b0da806-a4cd-431a-8116-2915e90aaf8b\"}],\"stores\":[{\"id\":1,\"name\":\"麦当劳\",\"uuid\":\"d8a24322-4bab-4ba2-aedc-5d55a84c3db8\"}],\"working_calendars\":null}" {base_url}/spaces/import
```

*   Espace pour le clonage (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/clone
```


### Noyau/Magasins

*   Obtenir tous les magasins

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores
```

*   Get get Store par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1
```

*   Nouvelle boutique

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"麦当劳(新王府井店)\",\"address\":\"北京市东城区王府井大街200号工美大厦1层010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores
```

*   Mettre à jour la boutique

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"麦当劳(新王府井店)\",\"address\":\"北京市东城区王府井大街200号工美大厦1层010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores/3
```

*   Supprimer un magasin (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/3
```

*   Obtenez tous les compteurs d'électricité par ID du magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters
```

*   Nouveau lier un compteur électrique à un magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/stores/1/meters
```

*   Supprimer un compteur électrique du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters/1
```

*   Obtenez tous les compteurs hors ligne en magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters
```

*   Nouveau lier une table hors ligne à un magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/stores/1/offlinemeters
```

*   Supprimer les compteurs hors ligne du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters/1
```

*   Obtenez tous les points de données par id de votre magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points
```

*   Nouveau lier un point de données à un magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/stores/1/points
```

*   Supprimer des points de données du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points/1
```

*   Obtenez tous les capteurs par ID pour votre magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors
```

*   Nouveau lier le capteur au magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/stores/1/sensors
```

*   Supprimer le capteur du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors/1
```

*   Obtenez tous les compteurs virtuels par ID du magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters
```

*   Nouveau lier un compteur virtuel à un magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/stores/1/virtualmeters
```

*   Supprimer Virtual Meter du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters/1
```

*   Obtenez tous les calendriers de travail par ID pour votre magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars
```

*   Nouveau lier le calendrier de travail au magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/stores/1/workingcalendars
```

*   Supprimer le calendrier de travail du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars/6
```

*   Obtenez toutes les instructions pour votre magasin

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands
```

*   Nouveau lier les directives au magasin

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/stores/1/commands
```

*   Supprimer la directive de désengagement du magasin

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands/1
```

*   Magasins clonés (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/clone
```

*   Obtenir un magasin d'exportation en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/export
```

*   Nouveau magasin d'importation à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"麦当劳_1\",\"address\":\"北京市东城区东打磨厂街7号\",\"latitude\":39.899493,\"longitude\":116.412041,\"area\":500,\"store_type\":{\"id\":1,\"name\":\"餐饮\",\"uuid\":\"494d7d5e-e139-4629-b957-99ea4caf0401\"},\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MacDonalds\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/stores/import
```


### Noyau/Magasins类型

*   Obtenir tous les types de magasins

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes
```

*   Obtenir le type de magasin selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/1
```

*   Types de nouveaux magasins

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Car\",\"description\":\"汽车\",\"simplified_code\":\"CA\"}}" {base_url}/storetypes
```

*   Mettre à jour le type de magasin

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Auto\",\"description\":\"汽车\",\"simplified_code\":\"AT\"}}" {base_url}/storetypes/4
```

*   Supprimer le type de magasin (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/4
```


### Noyau/SVG Ⓔ

*   Obtenez tous les SVG

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs
```

*   Get get SVG par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1
```

*   Créer un SVG

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例SVG图形1\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs
```

*   SVG (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/2
```

*   SVG mis à jour (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例SVG图形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Three separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs/1
```

*   Obtenir exporter SVG en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/export
```

*   Nouveau importer SVG depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"示例SVG图形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo SVG\"}" {base_url}/svgs/import
```

*   SVG cloné (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/clone
```


### Noyau/Tarifs

*   Obtenez tous les tarifs

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs
```

*   Obtenir des tarifs selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1
```

*   Créer un taux (taux en temps partagé)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new2020分时电价1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs
```

*   Mise à jour des tarifs (taux en temps partagé)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new2020分时电价1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.456},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs/18
```

*   Supprimer les tarifs

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/18
```

*   Obtenir le taux d'exportation json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/export
```

*   Nouveau taux d'importation depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"2024分时电价1-7\",\"energy_category\":{\"id\":1,\"name\":\"电\"},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2024-01-01T00:00:00\",\"valid_through\":\"2024-06-30T23:59:59\",\"timeofuse\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}" {base_url}/tariffs/import
```

*   Taux de clonage (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/clone
```


### Noyau/Locataires

*   Obtenir tous les locataires

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants
```

*   Get get locataire par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1
```

*   Nouveaux locataires

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Starbucks\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2021-01-01T00:00:00\",\"lease_end_datetime\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants
```

*   Mise à jour des locataires

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Hermes 爱马仕\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3 L4 L5\",\"rooms\":\"1201b+2247+3F\",\"area\":818.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime_utc\":\"2021-01-01T00:00:00\",\"lease_end_datetime_utc\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants/2
```

*   Supprimer un locataire (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/2
```

*   Obtenez tous les compteurs par ID du locataire

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters
```

*   Nouveau lier un compteur électrique à un locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/tenants/1/meters
```

*   Supprimer un compteur d'électricité du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters/1
```

*   Obtenez tous les compteurs hors ligne de votre locataire

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters
```

*   Nouveau lier une table hors ligne à un locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/tenants/1/offlinemeters
```

*   Supprimer les compteurs hors ligne du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters/1
```

*   Obtenir tous les points de données par ID du locataire

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points
```

*   Nouveau lier un point de données à un locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/tenants/1/points
```

*   Supprimer un point de données du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points/1
```

*   Obtenir tous les capteurs par ID du locataire

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors
```

*   Nouveau lier le capteur au locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/tenants/1/sensors
```

*   Supprimer des capteurs du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors/1
```

*   Obtenir tous les compteurs virtuels par ID du locataire

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters
```

*   Nouveau lier un compteur virtuel au locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/tenants/1/virtualmeters
```

*   Supprimer un compteur virtuel du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters/1
```

*   Obtenir tous les calendriers de travail par ID pour les locataires

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars
```

*   Nouveau lier le calendrier de travail au locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/tenants/1/workingcalendars
```

*   Supprimer le calendrier de travail du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars/6
```

*   Obtenir toutes les instructions pour les locataires

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands
```

*   Nouveau lier la directive au locataire

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/tenants/1/commands
```

*   Supprimer la directive unlink du locataire

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands/1
```

*   Obtenir exporter le locataire en json selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/export
```

*   Nouveau importer des locataires depuis json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Starbucks星巴克_1\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type\":{\"id\":9,\"name\":\"非整层办公租户\",\"uuid\":\"55bbcba7-d8a0-44a0-9a9f-2f085e3cb044\"},\"is_key_tenant\":true,\"is_input_counted\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2020-01-01T00:00:00\",\"lease_end_datetime\":\"2023-01-01T00:00:00\",\"is_in_lease\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"my description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/tenants/import
```

*   Locataire cloné (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/clone
```


### Noyau/Locataires类型

*   Obtenir tous les types de locataires

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes
```

*   Get get type de locataire selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/1
```

*   Types de nouveaux locataires

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"办公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes
```

*   Mettre à jour les types de locataires

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"办公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes/10
```

*   Supprimer le type de locataire (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/10
```


### Noyau/SMS

*   Obtenir des SMS par plage de dates

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   Get get SMS par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/1
```

*   Nouveau SMS

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/textmessages
```

*   Mettre à jour les SMS

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888899\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/textmessages/1000001
```

*   Supprimer un SMS (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/2
```


### Noyau/Jetons Ⓔ

*   Obtenir tous les tokens

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00&status=all
```

*   Get get token selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/49
```

*   Nouveau token

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/tickets
```

*   Mettre à jour le jeton

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{}}" {base_url}/tickets/1
```

*   Token (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/2
```


### Noyau/Fuseaux horaires

*   Obtenir tous les fuseaux horaires

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones
```

*   Get get time zone selon l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones/1
```

*   Mettre à jour le fuseau horaire

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"夏威夷标准时间\",\"description\":\"(GMT-10:00) Hawaii\",\"utc_offset\":\"-10:00\"}}" {base_url}/timezones/3
```


### Noyau/Utilisateurs

*   Obtenir tous les utilisateurs

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users
```

*   Get get utilisateurs selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/1
```

*   Nouvel utilisateur (par administrateur)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo\",\"display_name\":\"Demo\",\"email\":\"demo@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users
```

*   Mettre à jour le nom d'utilisateur par lequel l'utilisateur s'est connecté

```bash
curl -i -X PUT -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"administrator\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   Supprimer un utilisateur

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/2
```

*   Mettre à jour les données des utilisateurs

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"display_name\":\"Mr. Albert\",\"email\":\"albert@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users/2
```

*   Mettre à jour la sortie de l'utilisateur

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "暂无数据" {base_url}/users/logout
```

*   Mettre à jour le mot de passe modifié de l'utilisateur

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"old_password\":\"!MyEMS1\",\"new_password\":\"!MyEMS2\"}}" {base_url}/users/changepassword
```

*   Réinitialiser le mot de passe de l'utilisateur

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"johnson\",\"password\":\"NewPassword2\"}}" {base_url}/users/resetpassword
```

*   Mettre à jour l'email sur lequel l'utilisateur s'est connecté

```bash
curl -i -X PUT -H "Content-Type: application/json" -d "{\"data\":{\"email\":\"administrator@myems.io\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   Déverrouiller l'utilisateur

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/unlock/2
```

*   Mot de passe oublié

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"password\":\"!MyEMS2\",\"email\":\"demo@myems.io\",\"token\":\"100d4d9f1a262b3169bf5ca49d66121823856bec4d6b18b09ddeb0afbc14207246de906705e8788ae42633095eb1cad2eb991cd96f73b885cfa0b93569c1f34e\"}}" {base_url}/users/forgotpassword
```

*   Obtenir le délai d'expiration de la Réinitialisation du mot de passe en fonction de la boîte aux lettres et du jeton

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/forgotpassword?email=demo@myems.io&token=1da65d0c141597b9d58adcba46001a119dc4ada3283049122e3f4f39b2fa7aa2182a3f48a0ddf0d0d631833041fa0f1f0873f68f664bd733f8a39512ff89123f
```

*   Nouveau mot de passe oublié mail

```bash
curl -i -X POST -H "Content-Type: application/json" -d "{\"data\":{\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages
```

*   Mettre à jour mot de passe oublié mail

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"recipient_name\":\"Demo\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"status\":\"new\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages/1
```

*   Obtenir tous les messages mot de passe oublié

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages?startdatetime=2023-05-01T00:00:00&enddatetime=2023-05-31T00:00:00
```

*   Obtenir un message pour obtenir un mot de passe oublié en fonction de l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   Mot de passe oublié mail (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   Utilisateurs nouvellement enregistrés

```bash
curl -i -X POST -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo1\",\"display_name\":\"Demo1\",\"email\":\"demo1@myems.io\",\"password\":\"!MyEMS1\",\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\"}}" {base_url}/users/newusers
```

*   Obtenez tous les nouveaux utilisateurs enregistrés

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers
```

*   Get get nouvel utilisateur enregistré selon id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   Mettre à jour les nouveaux utilisateurs enregistrés

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo2\",\"display_name\":\"Demo2\",\"email\":\"demo2@myems.io\"}}" {base_url}/users/newusers/2
```

*   Nouvel utilisateur enregistré

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   Approbation des nouveaux utilisateurs enregistrés (par administrateur)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"is_admin\":true,\"is_read_only\":false,\"privilege_id\":1,\"account_expiration_datetime\":\"2024-05-31T16:00:00\",\"password_expiration_datetime\":\"2024-05-31T16:00:00\"}}" {base_url}/users/newusers/2/approve
```


### Noyau/Centrales virtuelles Ⓔ

*   Obtenez toutes les centrales virtuelles

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants
```

*   Get get Virtual plant par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1
```

*   Nouvelle centrale virtuelle

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing VPP\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/virtualpowerplants
```

*   Mise à jour de la centrale virtuelle

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing VPP1\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"New\"}}" {base_url}/virtualpowerplants/1
```

*   Supprimer Virtual Plant (appuyez sur ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/3
```

*   Obtenez tous les microgrids de Virtual plant par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids
```

*   Nouvelle construction lier un micro - réseau à une centrale virtuelle

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/virtualpowerplants/1/microgrids
```

*   Supprimer Microgrid de Virtual plant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids/1
```

*   Obtenir exporter une centrale virtuelle en json en fonction de l'id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/export
```

*   Nouvelle importation de centrales virtuelles à partir de json

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing VPP_1\",\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"balancing_price_point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/virtualpowerplants/import
```

*   Centrale virtuelle clonée (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/clone
```


### Noyau/Compteurs virtuels

*   Obtenez tous vos compteurs virtuels

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters
```

*   Get get Virtual Meter par id

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1
```

*   Créer un compteur virtuel

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"VM10\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters
```

*   Mettre à jour un compteur virtuel (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"VM11\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters/3
```

*   Supprimer un compteur virtuel (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/3
```

*   Exporter un compteur virtuel en JSON par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/export
```

*   Importer un compteur virtuel à partir d'un JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"虚拟表12\",\"equation\":\"x1+x2+x3\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2+x3\",\"variables\":[{\"id\":1,\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1,\"meter_name\":\"计量表1\"},{\"id\":2,\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2,\"meter_name\":\"计量表2\"},{\"id\":3,\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3,\"meter_name\":\"计量表3\"}]}}" {base_url}/virtualmeters/import
```

*   Cloner un compteur virtuel (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/clone
```


### Noyau/Messages web

*   Obtenir les messages web par plage temporelle

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   Obtenir tous les nouveaux messages web

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessagesnew
```

*   Mettre à jour tous les nouveaux messages web (tout marquer comme lu)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessagesnew
```

*   Mettre à jour tous les nouveaux messages web (confirmer tous les messages)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"OK\"}}" {base_url}/webmessagesnew
```

*   Obtenir un message web par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   Créer une tâche TODO de message web

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages
```

*   Mettre à jour un message web (accusé de réception)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"this is my reply\"}}" {base_url}/webmessages/1
```

*   Mettre à jour un message web (marquer comme lu)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessages/1
```

*   Supprimer un message web (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   Mettre à jour en lot des messages web (marquer comme lus)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```

*   Supprimer en lot des messages web par ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```


### Noyau/Messages WeChat

*   Obtenir les messages WeChat par plage de dates

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   Obtenir un message WeChat par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/1
```

*   Créer un message WeChat

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"oia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/wechatmessages
```

*   Mettre à jour un message WeChat

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"1ia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/wechatmessages/1000001
```

*   Supprimer un message WeChat (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/2
```


### Noyau/Parcs éoliens Ⓔ

*   Obtenir tous les parcs éoliens

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms
```

*   Obtenir un parc éolien par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1
```

*   Créer un parc éolien

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":600,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms
```

*   Mettre à jour un parc éolien

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms/1
```

*   Supprimer un parc éolien (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/2
```

*   Exporter un parc éolien en JSON par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/export
```

*   Importer un parc éolien à partir d'un JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/windfarms/import
```

*   Cloner un parc éolien (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/clone
```


### Noyau/Calendriers de travail

*   Obtenir tous les calendriers de travail

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars
```

*   Obtenir un calendrier de travail par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1
```

*   Créer un calendrier de travail

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new_working_calendar\",\"description\":\"test\"}}" {base_url}/workingcalendars
```

*   Mettre à jour un calendrier de travail

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"测试日历\",\"description\":\"test_update\"}}" {base_url}/workingcalendars/2
```

*   Supprimer un calendrier de travail (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/8
```

*   Exporter un calendrier de travail en JSON par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/export
```

*   Cloner un calendrier de travail (par ID)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/clone
```

*   Importer un calendrier de travail à partir d'un JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"new_working_calendar_1\",\"description\":\"test\",\"non_working_days\":[{\"id\":2,\"working_calendar_id\":1,\"date_local\":\"2023-03-01\",\"description\":\"test\"},{\"id\":3,\"working_calendar_id\":1,\"date_local\":\"2023-03-02\",\"description\":\"test\"},{\"id\":4,\"working_calendar_id\":1,\"date_local\":\"2023-03-03\",\"description\":\"test\"},{\"id\":5,\"working_calendar_id\":1,\"date_local\":\"2023-03-04\",\"description\":\"test\"},{\"id\":6,\"working_calendar_id\":1,\"date_local\":\"2023-03-08\",\"description\":\"test\"},{\"id\":14,\"working_calendar_id\":1,\"date_local\":\"2023-03-09\",\"description\":\"test\"},{\"id\":15,\"working_calendar_id\":1,\"date_local\":\"2023-03-10\",\"description\":\"test\"},{\"id\":16,\"working_calendar_id\":1,\"date_local\":\"2023-03-11\",\"description\":\"test\"},{\"id\":17,\"working_calendar_id\":1,\"date_local\":\"2023-03-12\",\"description\":\"test\"},{\"id\":18,\"working_calendar_id\":1,\"date_local\":\"2023-03-13\",\"description\":\"test\"}]}" {base_url}/workingcalendars/import
```


### Noyau/Jours non ouvrés

*   Obtenir tous les jours non ouvrés par ID de calendrier de travail

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/2/nonworkingdays
```

*   Obtenir un jour non ouvré par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/42
```

*   Créer un jour non ouvré pour un calendrier de travail

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"description\":\"test\"}}" {base_url}/workingcalendars/1/nonworkingdays
```

*   Mettre à jour un jour non ouvré (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"working_calendar_id\":2,\"description\":\"test_update3\"}}" {base_url}/nonworkingdays/42
```

*   Supprimer un jour non ouvré (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/41
```


### Noyau/Clés API

*   Créer une clé API

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2023-06-30T12:00:00\"}}" {base_url}/apikeys
```

*   Obtenir une clé API par ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/1
```

*   Obtenir toutes les clés API

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys
```

*   Mettre à jour une clé API (par ID)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2024-06-06T12:00:00\"}}" {base_url}/apikeys/1
```

*   Supprimer une clé API (par ID)

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/3
```

### Rapports
*   Obtenir les fichiers de rapports avancés Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports?reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir un fichier de rapport avancé par ID Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   Supprimer un fichier de rapport avancé par ID Ⓔ
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   Obtenir le rapport d'analyse par lots des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport sur les émissions de CO₂ des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport sur les émissions de CO₂ des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport comparatif des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport comparatif des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?quickmode=true&combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport de coûts des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'efficacité des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'efficacité des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par catégorie d'énergie des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par sous-catégorie d'énergie des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par sous-catégorie d'énergie des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de revenus des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de revenus des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de charge des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de charge des équipements combinés (mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de sortie des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de sortie des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie des équipements combinés Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification des équipements combinés Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentplan?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie des équipements combinés (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport statistique des équipements combinés
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique des équipements combinés (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le tableau de bord
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/dashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport du système de distribution électrique
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/distributionsystem?distributionsystemid=1
```

*   Obtenir le rapport du diagramme de flux énergétique
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energyflowdiagram?energyflowdiagramid=1&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le tableau de bord de la centrale de stockage d'énergie Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport détaillé de la centrale de stockage d'énergie Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdetails?id=1
```

*   Obtenir le rapport en liste de la centrale de stockage d'énergie Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationlist
```

*   Obtenir le rapport de consommation d'énergie de la centrale de stockage d'énergie Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   Obtenir le rapport de facturation de la centrale de stockage d'énergie Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   Obtenir le rapport d'émissions de carbone de la centrale de stockage d'énergie Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   Obtenir le rapport d'analyse par lots de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport comparatif de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport comparatif de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?quickmode=true&equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport de coûts de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'efficacité de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'efficacité de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par catégorie d'énergie de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par sous-catégorie d'énergie de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par sous-catégorie d'énergie de l'équipement (mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de revenus de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de revenus de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de charge de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de charge de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de sortie de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de sortie de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie de l'équipement Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification de l'équipement Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentplan?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie de l'équipement (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique de l'équipement
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique de l'équipement (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'analyse par lots du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN
```

*   Obtenir le rapport d'analyse par lots du compteur （QuickMode）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN&quickmode=true
```

*   Obtenir le rapport sur les émissions de CO₂ du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport sur les émissions de CO₂ du compteur (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport comparatif standard du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00&periodtype=hourly
```

*   Obtenir le rapport comparatif du compteur (mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00
```

*   Obtenir le rapport de coûts du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts du compteur (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de consommation d'énergie du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de consommation d'énergie du compteur (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie du compteur Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification du compteur Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterplan?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie du compteur (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport en temps réel du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1
```

*   Obtenir le rapport en temps réel du compteur (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1&quickmode=true
```

*   Obtenir le rapport d'équilibre des sous-compteurs
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'équilibre des sous-compteurs (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de tendance du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertrend?meterid=6&reportingperiodstartdatetime=2020-09-10T00:00:00&reportingperiodenddatetime=2020-09-11T00:00:00
```

*   Obtenir le rapport de tendance du compteur (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 21895d99b1157e665664a729be6fd8f71471c78d2ee797e57c32442f4d5084b0fcbbd6f799002c9b4a0a41d580fcdd64899f158f1ace0931da1e31bd81958294" {base_url}/reports/metertrend?quickmode=true&reportingperiodenddatetime=2024-12-18T00:00:00&meterid=6&reportingperiodstartdatetime=2024-12-10T00:00:00
```

*   Obtenir le rapport de suivi du compteur
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59
```

*   Obtenir le rapport de suivi du compteur (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59&quickmode=true
```

*   Obtenir le tableau de bord du micro-réseau Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de consommation d'énergie du micro-réseau Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   Obtenir le rapport de facturation du micro-réseau Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   Obtenir le rapport d'émissions de carbone du micro-réseau Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   Obtenir le rapport détaillé du micro-réseau Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddetails?microgridid=1
```

*   Obtenir le rapport en liste du micro-réseau Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridlist
```

*   Obtenir le rapport d'analyse par lots du compteur hors ligne
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots du compteur hors ligne (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport sur les émissions de CO₂ du compteur hors ligne
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport sur les émissions de CO₂ du compteur hors ligne (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de coûts du compteur hors ligne
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts du compteur hors ligne (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de consommation d'énergie du compteur hors ligne
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de consommation d'énergie du compteur hors ligne (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie du compteur hors ligne Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification du compteur hors ligne Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterplan?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie du compteur hors ligne (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport en temps réel du point de données
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/pointrealtime
```

*   Obtenir le rapport d'analyse par lots de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport comparatif de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport comparatif de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?quickmode=true&shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport de coûts de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le tableau de bord de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloordashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par sous-catégorie d'énergie de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par sous-catégorie d'énergie de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de charge de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de charge de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie de l'atelier Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification de l'atelier Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorplan?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie de l'atelier (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport statistique de l'atelier
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique de l'atelier (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de coûts de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'efficacité de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'efficacité de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par catégorie d'énergie de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par sous-catégorie d'énergie de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par sous-catégorie d'énergie de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de revenus de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de revenus de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de charge de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de charge de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de sortie de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de sortie de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie de l'espace Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification de l'espace Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceplan?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie de l'espace (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport statistique de l'espace
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique de l'espace (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'analyse par lots du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport comparatif du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport comparatif du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?quickmode=true&storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport de coûts du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le tableau de bord du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storedashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par sous-catégorie d'énergie du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par sous-catégorie d'énergie du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de charge du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de charge du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie du magasin Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification du magasin Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeplan?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie du magasin (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport statistique du magasin
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique du magasin (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'analyse par lots du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de facturation du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbill?tenantid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport comparatif du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport comparatif du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?quickmode=true&tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport de coûts du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le tableau de bord du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par catégorie d'énergie du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport par sous-catégorie d'énergie du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport par sous-catégorie d'énergie du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de charge du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de charge du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie du locataire Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification du locataire Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantplan?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie du locataire (mode rapide) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport statistique du locataire
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport statistique du locataire (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'analyse par lots du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   Obtenir le rapport d'analyse par lots du compteur virtuel (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   Obtenir le rapport sur les émissions de CO₂ du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport sur les émissions de CO₂ du compteur virtuel (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport comparatif du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport comparatif du compteur virtuel (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   Obtenir le rapport de coûts du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de coûts du compteur virtuel (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport de consommation d'énergie du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de consommation d'énergie du compteur virtuel (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Obtenir le rapport d'économie d'énergie du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport de planification du compteur virtuel
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterplan?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   Obtenir le rapport d'économie d'énergie du compteur virtuel (Mode rapide)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   Créer des valeurs corrigées pour un compteur hors ligne
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"meter\":1,\"value\":[[\"2023-07-01\",\"123\"],[\"2023-07-02\",\"123\"]]}" {base_url}/reports/offlinemeterinput
```

*   Obtenir la liste des valeurs d'un compteur hors ligne
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metermonthgenerate?offlinemeterid=1&reportingperiodstartdatetime=2023-07-01T00:00:00&reportingperiodenddatetime=2023-07-31T23:59:59
```

