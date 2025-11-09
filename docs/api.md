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
View in Postman: import the file MyEMS.postman_collection.json with Postman

*   GET Version
```bash
curl -i -X GET -H "User-UUID: YOUR-USER-UUID" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" {base_url}/version
```

### Core/Advanced Report Config Ⓔ
*   GET All Advanced Report Configs

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports
```

*   GET All Advanced Report Config by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1
```

*   GET Export an Advanced Report Config by ID to JOSN

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/export
```

*   POST Create an Advanced Report Config

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Daily Report1\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports
```

*   POST Import an Advanced Report Config from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Space Daily Report2\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}" {base_url}/advancedreports/import
```

*   POST Clone an Advanced Report Config by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/clone
```

*   PUT Run an Advanced Report by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/run
```

*   PUT Update an Advanced Report Config

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Monthly Report\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-01T00:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports/1
```

*   PUT Run an Advanced Report

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/advancedreports/1/run
```

*   DELETE an Advanced Report Config

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/2
```


### Core/Combined Equipment

*   GET All Combined Equipments

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments
```

*   POST Create New Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments
```

*   GET a Combined Equipment by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1
```

*   PUT Update a Combined Equipment by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Combined Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXXs\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments/1
```

*   POST Clone a Combined Equipment by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/combinedequipments/1
```

*   DELETE a Combined Equipment by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/6
```

*   POST Bind an Equipment to a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/combinedequipments/1/equipments
```

*   GET All Equipments of a Combined Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments
```

*   DELETE an Equipment from a Combined Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments/1
```

*   GET All Meters of a Combined Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters
```

*   POST Bind a Meter to a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/meters
```

*   DELETE a Meter from a Combined Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters/1
```

*   POST Bind a Offline Meter to a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/offlinemeters
```

*   GET All Offline Meters of a Combined Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters
```

*   DELETE an Offline Meter from a Combined Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters/1
```

*   GET All Parameters of a Combined Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters
```

*   GET a Parameter of a Combined Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/1
```

*   POST Create a point Parameter for a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   PUT Update a point Parameter for a Combined Equipment

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/1
```

*   POST Create a constant Parameter for a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test constant parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   PUT Update a constant Parameter for a Combined Equipment

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/2
```

*   POST Create a fraction Parameter for a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters
```

*   PUT Update a fraction Parameter for a Combined Equipment

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters/3
```

*   DELETE a Parameter from a Combined Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/16
```

*   POST Bind a Virtual Meter to a Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/virtualmeters
```

*   GET All Virtual Meters of a Combined Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters
```

*   DELETE a Virtual Meter from a Combined Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters/1
```

*   GET All Commands associated with Combined Equipment ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands
```

*   POST Bind Command to Combined Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/combinedequipments/1/commands
```

*   DELETE Unbind Command from Combined Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands/3
```

*   GET Export a Combined Equipment by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/export
```

*   POST Import a Combined Equipment from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"组合式设备_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"equipments\":[{\"id\":1,\"name\":\"设备1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":2,\"name\":\"manufacturer\",\"parameter_type\":\"constant\",\"constant\":\"York\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":3,\"name\":\"maintainer\",\"parameter_type\":\"constant\",\"constant\":\"Johnson Controls\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":4,\"name\":\"use life start\",\"parameter_type\":\"constant\",\"constant\":\"2016-01-01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":5,\"name\":\"use life end\",\"parameter_type\":\"constant\",\"constant\":\"2025-12-31\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":6,\"name\":\"model number\",\"parameter_type\":\"constant\",\"constant\":\"CH01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":7,\"name\":\"nominal cooling capacity\",\"parameter_type\":\"constant\",\"constant\":\"90.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":8,\"name\":\"nominal cooling input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":9,\"name\":\"nominal cooling cop\",\"parameter_type\":\"constant\",\"constant\":\"5\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":10,\"name\":\"nominal cooling operating current\",\"parameter_type\":\"constant\",\"constant\":\"120.000 A\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":11,\"name\":\"rated input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":12,\"name\":\"nominal chilled water flow rate\",\"parameter_type\":\"constant\",\"constant\":\"30 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":13,\"name\":\"nominal cooling water flow_rate\",\"parameter_type\":\"constant\",\"constant\":\"50 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":14,\"name\":\"status\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":15,\"name\":\"inlet chilled water temperature\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":2,\"name\":\"Working hours counter\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":16,\"name\":\"chilled_water instantaneous flow rate\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":3,\"name\":\"Current a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":17,\"name\":\"instantaneous power\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":4,\"name\":\"Active Power a\"},\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/combinedequipments/import
```

*   POST Clone a Combined Equipment by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/clone
```


### Core/Contact

*   GET All Contacts

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts
```

*   GET a Contact by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/1
```

*   POST Create New Contact

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888888\",\"description\":\"contact description\"}}" {base_url}/contacts
```

*   PUT Update a Contact

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888899\",\"description\":\"contact description\"}}" {base_url}/contacts/3
```

*   DELETE a Contact by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/3
```


### Core/Command

*   GET All Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands
```

*   GET a Command by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1
```

*   POST Create New Command (without set_value)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_off_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn off light\"}}" {base_url}/commands
```

*   POST Create New Command (with set_value)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands
```

*   PUT Update a Command (without set_value)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   PUT Update a Command (with set_value)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   DELETE a Command by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/7
```

*   PUT Send a Command by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"set_value\":2}}" {base_url}/commands/1/send
```

*   GET Export a Command by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/export
```

*   POST Import a Command from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"turn_up_light1\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}" {base_url}/commands/import
```

*   POST Clone a Command by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/clone
```


### Core/Control Mode

*   GET All Control Modes

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes
```

*   GET a Control Mode by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1
```

*   POST Create New Control Mode

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"CM11\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}}" {base_url}/controlmodes
```

*   PUT Update a Control Mode

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"削峰填谷\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":-5}]}}" {base_url}/controlmodes/1
```

*   DELETE a Control Mode by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/11
```

*   GET Export a Control Mode by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/export
```

*   POST Import a Control Mode from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"自发自用\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}" {base_url}/controlmodes/import
```

*   POST Clone a Control Mode by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/clone
```

*   POST Get All Times of Control Mode by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" {base_url}/controlmodes/1/times
```


### Core/Cost Center

*   GET all Cost Centers

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters
```

*   GET a Cost Center by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1
```

*   POST Creat a Cost Center

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"动力中心\",\"external_id\":\"21829198980001\"}}" {base_url}/costcenters
```

*   PUT Update a Cost Center

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"动力中心2\",\"external_id\":\"21829198980002\"}}" {base_url}/costcenters/1
```

*   DELETE a Cost Center by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/3
```

*   POST Bind  Tariff to Cost Center

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"tariff_id\":\"3\"}}" {base_url}/costcenters/1/tariffs
```

*   GET All Tariffs associated with Cost Center by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs
```

*   DELETE Unbind Tariff from Cost Center

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs/3
```


### Core/Cost File

*   GET All Cost Files

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles
```

*   GET a Cost File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   POST Upload a Cost File

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/costfiles
```

*   DELETE a Cost File by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   GET Rstore a Cost File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/2/restore
```


### Core/Data Repair File

*   GET All Data Repair Files

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles
```

*   GET a Data Repair File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   POST Upload a Data Repair File

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/datarepairfiles
```

*   DELETE a Data Repair File by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   GET Rstore a Data Repair File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1/restore
```


### Core/Data Source

*   GET All Data Sources

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources
```

*   GET Data Source by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1
```

*   POST Create Data Source

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources
```

*   DELETE Data Source by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/14
```

*   PUT Update Data Source by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.99\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources/1
```

*   GET All Points by Data Source ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1/points
```

*   GET Export Data Source by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/16/export
```

*   POST Import Data Source from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Modbus1\",\"gateway\":{\"id\":1,\"name\":\"Gateway1\",\"uuid\":\"dc681938-5053-8660-98ed-266c58227231\"},\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\",\"points\":[{\"name\":\"Active Energy Import 1\",\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null},{\"name\":\"Active Power  2\",\"object_type\":\"ANALOG_VALUE\",\"units\":\"kW\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":209, \\"number_of_registers\\":2, \\"format\\":\\"=L\\", \\"byte_swap\\":true}\",\"description\":null}]}" {base_url}/datasources/import
```

*   POST Clone a Data Source

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/2/clone
```


### Core/Distribution System

*   GET All Distribution Systems

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems
```

*   GET a Distribution System by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1
```

*   POST Create Distribution System

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例配电系统2\",\"svg_id\":1,\"description\":\"demo description\"}}" {base_url}/distributionsystems
```

*   DELETE Distribution Systems by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/2
```

*   PUT Update Distribution System by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例配电系统1\",\"svg_id\":2,\"description\":\"demo description\"}}" {base_url}/distributionsystems/1
```

*   GET All Distribution Circuits of Distribution System

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/distributioncircuits
```

*   GET Export a Distribution System by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/export
```

*   POST Import a Distribution System from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"示例配电系统_1\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"demo distribution system\",\"circuits\":[{\"id\":1,\"name\":\"AHa01\",\"uuid\":\"52f7abe1-ba0e-47a6-a327-4faac42a1d11\",\"distribution_room\":\"1ES\",\"switchgear\":\"AHa01\",\"peak_load\":5100,\"peak_current\":1250,\"customers\":\"11#电源进线1WHj2\",\"meters\":\"AHa01\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}]}" {base_url}/distributionsystems/import
```

*   POST Clone a Distribution System by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/clone
```


### Core/Distribution Circuit

*   GET All Distribution Circuits

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits
```

*   GET a Distribution Circuit by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1
```

*   POST Create new Distribution Circuit

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W92\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室应急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits
```

*   DELETE a Distribution Circuit by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/2
```

*   PUT Update Distribution Circuit by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W91\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室应急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits/1
```

*   POST Bind Point to Distribution Circuit

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/distributioncircuits/1/points
```

*   GET All Points of a Distribution Circuit

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points
```

*   DELETE Unbind Point from Distribution Circuit

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points/2
```


### Core/Email Server

*   GET All Email Servers

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers
```

*   POST Create New Email Server

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.126.com\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@126.com\"}}" {base_url}/emailservers
```

*   GET an Email Server by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/1
```

*   PUT Update an Email Server

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.myems.io\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@myems.io\"}}" {base_url}/emailservers/1
```

*   DELETE an Email Server by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/2
```


### Core/Email Message

*   GET Email Messages by Date Range

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages?startdatetime=2021-10-01T00:00:00&enddatetime=2021-10-11T00:00:00
```

*   GET an Email Message by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/1
```

*   POST Create New Email Message

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/emailmessages
```

*   PUT Update an Email Message

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/emailmessages/1
```

*   DELETE an Email Message by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/2
```


### Core/Energy Category

*   GET All Energy Categories

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories
```

*   GET an Energy Category by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/1
```

*   POST Create an Energy Category

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"柴油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories
```

*   PUT Update an Energy Category

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"汽油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories/12
```

*   DELETE an Energy Category

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/12
```


### Core/Energy Flow Diagram

*   GET All Energy Flow Diagrams

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams
```

*   GET an Energy Flow Diagram by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1
```

*   POST Create an Energy Flow Diagram

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow\"}}" {base_url}/energyflowdiagrams
```

*   PUT Update an Energy Flow Diagram

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow Diagram\"}}" {base_url}/energyflowdiagrams/2000000
```

*   DELETE an Energy Flow Diagram

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/2000000
```

*   GET All Nodes of an Energy Flow Diagram

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/nodes
```

*   POST Create new Node of an Energy Flow Diagram

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"10KV#3\"}}" {base_url}/energyflowdiagrams/1000000/nodes
```

*   PUT Update an Node of an Energy Flow Diagram

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"10KV Input #1\"}}" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   DELETE an Node of an Energy Flow Diagram

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   GET All Links of an Energy Flow Diagram

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/links
```

*   POST Create new Link of an Energy Flow Diagram

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000008,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links
```

*   PUT Update a Link of an Energy Flow Diagram

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000009,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   DELETE a Link of an Energy Flow Diagram

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   GET Export an Energy Flow Diagram by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/export
```

*   POST Import an Energy Flow Diagram from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"示例能流图_3\",\"uuid\":\"3ccbc9c6-9575-4212-a63a-a688d1154302\",\"nodes\":[{\"id\":1,\"name\":\"10KV进线#1\"},{\"id\":2,\"name\":\"10KV进线#2\"},{\"id\":3,\"name\":\"租区\"},{\"id\":4,\"name\":\"公区\"},{\"id\":5,\"name\":\"酒店\"},{\"id\":6,\"name\":\"车库\"},{\"id\":7,\"name\":\"餐饮\"},{\"id\":8,\"name\":\"零售\"},{\"id\":9,\"name\":\"照明\"},{\"id\":10,\"name\":\"电梯\"}],\"links\":[{\"id\":1,\"source_node\":{\"id\":1,\"name\":\"10KV进线#1\"},\"target_node\":{\"id\":3,\"name\":\"租区\"},\"meter\":{\"type\":\"meter\",\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}}]}" {base_url}/energyflowdiagrams/import
```

*   POST Clone an Energy Flow Diagram by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/clone
```


### Core/Energy Item

*   GET All Energy Items

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems
```

*   GET an Energy Item

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/1
```

*   POST Create an Energy Item

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"租户用电\",\"energy_category_id\":1}}" {base_url}/energyitems
```

*   PUT Update an Energy Item

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"空调用\",\"energy_category_id\":1}}" {base_url}/energyitems/1
```

*   DELETE an Energy Item

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/4
```


### Core/Energy Storage Container Ⓔ

*   GET All Energy Storage Containers

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers
```

*   GET an Energy Storage Container by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   GET Export an Energy Storage Container by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/export
```

*   POST Create New Energy Storage Container

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers
```

*   POST Import Energy Storage Container from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"9b963448-1235-4239-b0c9-c71d926cec5f\",\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"albert\",\"uuid\":\"076ea179-5a7e-4a48-9fcd-f452f95f5376\"},\"cost_center\":{\"id\":1,\"name\":\"动力中心\",\"uuid\":\"6fc174dc-9c57-4934-9896-9226e696dbf2\"},\"description\":\"Classic\",\"qrcode\":\"energystoragecontainer:9b963448-1235-4239-b0c9-c71d926cec5f\"}" {base_url}/energystoragecontainers/import
```

*   POST Clone an Energy Storage Container by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/clone
```

*   PUT Update an Energy Storage Container

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":300,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers/1
```

*   DELETE an Energy Storage Container by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   GET All Batteries of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries
```

*   GET an Energy Storage Container Battery

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   POST Create new Energy Storage Container Battery

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":300,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries
```

*   PUT Update an Energy Storage Container Battery

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":500,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries/1
```

*   DELETE an Energy Storage Container Battery

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   GET All Grids of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids
```

*   GET an Energy Storage Container Grid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   POST Create new Energy Storage Container Grid

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids
```

*   PUT Update an Energy Storage Container Grid

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids/1
```

*   DELETE an Energy Storage Container Grid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   POST Create new Energy Storage Container HVAC

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs
```

*   GET All HVACs of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs
```

*   GET an Energy Storage Container HVAC

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   PUT Update an Energy Storage Container HVAC

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs/1
```

*   DELETE an Energy Storage Container HVAC

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   POST Create new Energy Storage Container Firecontrol

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols
```

*   GET All Firecontrols of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols
```

*   GET an Energy Storage Container Firecontrol

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   PUT Update an Energy Storage Container Firecontrol

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   DELETE an Energy Storage Container Firecontrol

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   GET All Loads of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads
```

*   GET an Energy Storage Container Load

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   POST Create new Energy Storage Container Load

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads
```

*   PUT Update an Energy Storage Container Load

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads/1
```

*   DELETE an Energy Storage Container Load

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   GET All Power Conversion Systems of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   GET an Energy Storage Container Power Conversion System

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   POST Create new Energy Storage Container Power Conversion System

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":null,\"device_status_point_id\":null,\"control_mode_point_id\":null,\"total_ac_active_power_point_id\":null,\"total_ac_reactive_power_point_id\":null,\"total_ac_apparent_power_point_id\":null,\"total_ac_power_factor_point_id\":null,\"ac_frequency_point_id\":null,\"phase_a_active_power_point_id\":null,\"phase_b_active_power_point_id\":null,\"phase_c_active_power_point_id\":null,\"phase_a_reactive_power_point_id\":null,\"phase_b_reactive_power_point_id\":null,\"phase_c_reactive_power_point_id\":null,\"phase_a_apparent_power_point_id\":null,\"phase_b_apparent_power_point_id\":null,\"phase_c_apparent_power_point_id\":null,\"ab_voltage_point_id\":null,\"bc_voltage_point_id\":null,\"ca_voltage_point_id\":null,\"ab_current_point_id\":null,\"bc_current_point_id\":null,\"ca_current_point_id\":null,\"phase_a_voltage_point_id\":null,\"phase_b_voltage_point_id\":null,\"phase_c_voltage_point_id\":null,\"phase_a_current_point_id\":null,\"phase_b_current_point_id\":null,\"phase_c_current_point_id\":null,\"pcs_module_temperature_point_id\":null,\"pcs_ambient_temperature_point_id\":null,\"a1_module_temperature_point_id\":null,\"b1_module_temperature_point_id\":null,\"c1_module_temperature_point_id\":null,\"a2_module_temperature_point_id\":null,\"b2_module_temperature_point_id\":null,\"c2_module_temperature_point_id\":null,\"air_inlet_temperature_point_id\":null,\"air_outlet_temperature_point_id\":null,\"dc_power_point_id\":null,\"dc_voltage_point_id\":null,\"dc_current_point_id\":null}}" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   PUT Update an Energy Storage Container Power Conversion System

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":60,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":6,\"device_status_point_id\":7,\"control_mode_point_id\":8,\"total_ac_active_power_point_id\":9,\"total_ac_reactive_power_point_id\":10,\"total_ac_apparent_power_point_id\":11,\"total_ac_power_factor_point_id\":12,\"ac_frequency_point_id\":13,\"phase_a_active_power_point_id\":null,\"phase_b_active_power_point_id\":null,\"phase_c_active_power_point_id\":null,\"phase_a_reactive_power_point_id\":null,\"phase_b_reactive_power_point_id\":null,\"phase_c_reactive_power_point_id\":null,\"phase_a_apparent_power_point_id\":null,\"phase_b_apparent_power_point_id\":null,\"phase_c_apparent_power_point_id\":null,\"ab_voltage_point_id\":null,\"bc_voltage_point_id\":null,\"ca_voltage_point_id\":null,\"ab_current_point_id\":null,\"bc_current_point_id\":null,\"ca_current_point_id\":null,\"phase_a_voltage_point_id\":null,\"phase_b_voltage_point_id\":null,\"phase_c_voltage_point_id\":null,\"phase_a_current_point_id\":null,\"phase_b_current_point_id\":null,\"phase_c_current_point_id\":null,\"pcs_module_temperature_point_id\":null,\"pcs_ambient_temperature_point_id\":null,\"a1_module_temperature_point_id\":null,\"b1_module_temperature_point_id\":null,\"c1_module_temperature_point_id\":null,\"a2_module_temperature_point_id\":null,\"b2_module_temperature_point_id\":null,\"c2_module_temperature_point_id\":null,\"air_inlet_temperature_point_id\":null,\"air_outlet_temperature_point_id\":null,\"dc_power_point_id\":null,\"dc_voltage_point_id\":null,\"dc_current_point_id\":null}}" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   DELETE an Energy Storage Container Power Conversion System

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   GET All Schedules of an Energy Storage Container

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules
```

*   POST Create new Energy Storage Container Schedule

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules
```

*   GET an Energy Storage Container Schedule

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

*   PUT Update an Energy Storage Container Schedule

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules/1
```

*   DELETE an Energy Storage Container Schedule

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```


### Core/Energy Storage Power Station Ⓔ

*   GET All Energy Storage Power Stations

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations
```

*   GET an Energy Storage Power Station by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1
```

*   POST Create New Energy Storage Power Station

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations
```

*   PUT Update an Energy Storage Power Station

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations/1
```

*   DELETE an Energy Storage Power Station by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/2
```

*   GET All Energy Storage Containers of an Energy Storage Power Station

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers
```

*   POST Bind an Energy Storage Container to an Energy Storage Power Station

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_storage_container_id\":1}}" {base_url}/energystoragepowerstations/1/containers
```

*   DELETE an Energy Storage  from an Energy Storage Container

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers/1
```

*   GET All Users of an Energy Storage Power Station

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users
```

*   POST Bind an User to an Energy Storage Power Station

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/energystoragepowerstations/1/users
```

*   DELETE an User from an Energy Storage Power Station

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users/1
```

*   GET Export an Energy Storage Power Station by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/export
```

*   POST Import Energy Storage Power Station from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"7297cfc1-8978-487b-a14b-fedb9b3525f5\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/energystoragepowerstations/import
```

*   POST Clone an Energy Storage Power Station

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/clone
```


### Core/Equipment

*   GET All Equipments

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments
```

*   POST Create New Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments
```

*   GET an Equipment by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1
```

*   PUT Update an Equipment by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments/1
```

*   DELETE an Equipment by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/4
```

*   POST Bind a Meter to an Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":3,\"is_output\":false}}" {base_url}/equipments/1/meters
```

*   GET All Meters of an Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters
```

*   DELETE a Meter from an Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters/1
```

*   POST Bind a Offline Meter to an Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/offlinemeters
```

*   GET All Offline Meters of an Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/offlinemeters
```

*   DELETE an Offline Meter from an Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/offlinemeters/1
```

*   GET All Parameters of an Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters
```

*   GET a Parameter of an Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/2
```

*   POST Create a point Parameter for an Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   PUT Update a point Parameter for an Equipment

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/14
```

*   POST Create a constant Parameter for an Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   PUT Update a constant Parameter for an Equipment

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/25
```

*   POST Create a fraction Parameter for an Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters
```

*   PUT Update a fraction Parameter for an Equipment

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters/24
```

*   DELETE a Parameter from an Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/16
```

*   POST Bind a Virtual Meter to an Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/virtualmeters
```

*   GET All Virtual Meters of an Equipment

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/virtualmeters
```

*   DELETE a Virtual Meter from an Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/virtualmeters/1
```

*   GET All Commands associated with Equipment ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/commands
```

*   POST Bind Command to Equipment

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/equipments/1/commands
```

*   DELETE Unbind Command from Equipment

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/commands/3
```

*   GET Export an Equipment by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/export
```

*   POST Import an Equipment from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"设备_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":2,\"name\":\"manufacturer\",\"parameter_type\":\"constant\",\"constant\":\"York\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":3,\"name\":\"maintainer\",\"parameter_type\":\"constant\",\"constant\":\"Johnson Controls\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":4,\"name\":\"use life start\",\"parameter_type\":\"constant\",\"constant\":\"2016-01-01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":5,\"name\":\"use life end\",\"parameter_type\":\"constant\",\"constant\":\"2025-12-31\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":6,\"name\":\"model number\",\"parameter_type\":\"constant\",\"constant\":\"CH01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":7,\"name\":\"nominal cooling capacity\",\"parameter_type\":\"constant\",\"constant\":\"90.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":8,\"name\":\"nominal cooling input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":9,\"name\":\"nominal cooling cop\",\"parameter_type\":\"constant\",\"constant\":\"5\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":10,\"name\":\"nominal cooling operating current\",\"parameter_type\":\"constant\",\"constant\":\"120.000 A\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":11,\"name\":\"rated input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":12,\"name\":\"nominal chilled water flow rate\",\"parameter_type\":\"constant\",\"constant\":\"30 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":13,\"name\":\"nominal cooling water flow_rate\",\"parameter_type\":\"constant\",\"constant\":\"50 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":14,\"name\":\"status\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":15,\"name\":\"inlet chilled water temperature\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":2,\"name\":\"Working hours counter\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":16,\"name\":\"chilled_water instantaneous flow rate\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":3,\"name\":\"Current a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":17,\"name\":\"instantaneous power\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":4,\"name\":\"Active Power a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":18,\"name\":\"COP\",\"parameter_type\":\"fraction\",\"constant\":null,\"point\":null,\"numerator_meter\":{\"type\":\"meter\",\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"},\"denominator_meter\":{\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}}]}" {base_url}/equipments/import
```

*   POST Clone an Equipment by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/clone
```


### Core/Gateway

*   GET All Gateways

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways
```

*   GET Gateway by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1
```

*   POST Create Gateway

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway 3\",\"description\":\"Gateway 3\"}}" {base_url}/gateways
```

*   DELETE Gateway by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/3
```

*   PUT Update Gateway by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway #3\",\"description\":\"Gateway #3\"}}" {base_url}/gateways/3
```

*   GET All Data Sources by Gateway ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/datasources
```

*   GET Export a Gateway by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/export
```

*   POST Import a Gateway from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Gateway10\",\"description\":null}" {base_url}/gateways/import
```

*   POST Clone a Gateway by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/clone
```


### Core/Knowledge File

*   GET All Knowledge Files

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles
```

*   GET a Knowledge File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   POST Upload a Knowledge File

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/knowledgefiles
```

*   DELETE a Knowledge File by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   GET Rstore a Knowledge File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1/restore
```


### Core/Menu

*   GET All Menus

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus
```

*   GET Menu by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100
```

*   PUT Update a Menu

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"is_hidden\":true}}" {base_url}/menus/100
```

*   GET All Children of Menu by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100/children
```

*   GET All Menus for Web UI

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/web
```


### Core/Meter

*   GET All Meters

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters
```

*   GET Meter by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1
```

*   POST Create New Meter

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"PM20\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空调用电\"}}" {base_url}/meters
```

*   PUT Update a Meter

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"PM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空调用电\"}}" {base_url}/meters/4
```

*   DELETE Meter by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/4
```

*   GET All Submeters of a Meter

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/submeters
```

*   POST Bind Point to Meter

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"3\"}}" {base_url}/meters/1/points
```

*   GET All Points associated with Meter ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/points
```

*   DELETE Unbind Point from Meter

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/points/3
```

*   GET All Commands associated with Meter ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/commands
```

*   POST Bind Command to Meter

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/meters/1/commands
```

*   DELETE Unbind Command from Meter

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/commands/3
```

*   GET Export a Meter by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/export
```

*   POST Clone a Meter by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/clone
```

*   POST Import a Meter from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"cost_center\":{\"id\":1,\"name\":\"test\",\"uuid\":\"76d86222-96c5-4653-8162-bfbcd7edd5ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"master_meter\":null,\"description\":\"meter1\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}" {base_url}/meters/import
```


### Core/Microgrid Ⓔ

*   GET All Microgrids

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids
```

*   GET a Microgrid by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1
```

*   POST Create New Microgrid

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/microgrids
```

*   PUT Update a Microgrid

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/microgrids/1
```

*   GET Export a Microgrid by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/export
```

*   POST Import a Microgrid from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":300,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"serial_number\":\"S1234567890\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/microgrids/import
```

*   POST Clone a Microgrid by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/clone
```

*   DELETE a Microgrid by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/3
```

*   GET All Sensors of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/sensors
```

*   POST Bind a Sensor to a Microgrid

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/microgrids/1/sensors
```

*   DELETE a Sensor from a Microgrid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/sensors/1
```

*   GET All Batteries of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries
```

*   GET a Microgrid Battery

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries/1
```

*   POST Create new Microgrid Battery

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":10,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries
```

*   PUT Update Microgrid Battery

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":30,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries/1
```

*   DELETE a Microgrid Battery

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries/1
```

*   GET All EVChargers of Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers
```

*   GET a Microgrid EVCharger

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers/1
```

*   POST Create new Microgrid EVCharger

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/evchargers
```

*   PUT Update a Microgrid EVCharger

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/evchargers/1
```

*   DELETE a Microgrid EVCharger

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers/1
```

*   GET All Generators of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators
```

*   GET a Microgrid Generator

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators/1
```

*   POST Create new Microgrid Geratror

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/generators
```

*   PUT Update a Microgrid Generator

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/generators/1
```

*   DELETE a Microgrid Generator

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators/1
```

*   GET All Grids of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids
```

*   GET a Microgrid Grid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids/1
```

*   POST Create new Microgrid Grid

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30}}" {base_url}/microgrids/1/grids
```

*   PUT Update a Microgrid Grid

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":50}}" {base_url}/microgrids/1/grids/1
```

*   DELETE a Microgrid Grid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids/1
```

*   GET All Heatpumps of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps
```

*   GET a Microgrid Heatpump

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   POST Create new Microgrid Heatpump

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":30}}" {base_url}/microgrids/1/heatpumps
```

*   PUT Update a Microgrid Heatpump

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":50}}" {base_url}/microgrids/1/heatpumps/1
```

*   DELETE a Microgrid Heatpump

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   GET All Loads of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads
```

*   GET a Microgrid Load

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   POST Create new Microgrid Load

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30}}" {base_url}/microgrids/1/loads
```

*   PUT Update a Microgrid Load

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":60}}" {base_url}/microgrids/1/loads/1
```

*   DELETE a Microgrid Load

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   GET All Photovoltaics of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics
```

*   GET a Microgrid Photovoltaic

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   POST Create new Microgrid Photovoltaic

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":30}}" {base_url}/microgrids/1/photovoltaics
```

*   PUT Update a Microgrid Photovoltaic

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":50}}" {base_url}/microgrids/1/photovoltaics/1
```

*   DELETE a Microgrid Photovoltaic

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   GET All Power Conversion Systems of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems
```

*   GET a Microgrid Power Conversion System

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   POST Create new Microgrid Power Conversion System

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems
```

*   PUT Update a Microgrid Power Conversion System

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":50,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems/1
```

*   DELETE a Microgrid Power Conversion System

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   GET All Schedules of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules
```

*   GET a Microgrid Schedule

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   PUT Update a Microgrid Schedule

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules/1
```

*   POST Create new Microgrid Schedule

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules
```

*   DELETE a Microgrid Schedule

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   GET All Users of a Microgrid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users
```

*   POST Bind an User to a Microgrid

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/microgrids/1/users
```

*   DELETE an User from a Microgrid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users/1
```


### Core/Notification

*   GET Notifications

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications?startdatetime=2021-01-01T00:00:00&enddatetime=2021-01-02T00:00:00&status=unread
```

*   GET a Notification by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/1
```

*   PUT Update a Notification

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/notifications/1
```

*   DELETE a Notification by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/2
```


### Core/Offline Meter

*   GET All Offline Meters

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters
```

*   GET Offline Meter by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1
```

*   POST Create New Offline Meter

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"OfflinePM21\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空调用电\"}}" {base_url}/offlinemeters
```

*   PUT Update a Offline Meter

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"OfflinePM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空调用电\"}}" {base_url}/offlinemeters/3
```

*   DELETE Offline Meter by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/3
```

*   GET Export Offline Meter by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/export
```

*   POST Import Offline Meter from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"离线表101\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"offlinemeter1\"}" {base_url}/offlinemeters/import
```

*   POST Clone Offline Meter by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/clone
```


### Core/Offline Meter File

*   GET All Offline Meter Files

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles
```

*   GET a Offline Meter File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   POST Upload a Offline Meter File

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/offlinemeterfiles
```

*   DELETE a Offline Meter File by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   GET Rstore an Offline Meter File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1/restore
```


### Core/Energy Plan File

*   GET All Energy Plan Files

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles
```

*   GET a Energy Plan File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   POST Upload a Energy Plan File

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暂无数据" {base_url}/energyplanfiles
```

*   DELETE a Energy Plan File by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   GET Rstore an Energy Plan File by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1/restore
```


### Core/Photovoltaic Power Station Ⓔ

*   GET All Photovoltaic Power Stations

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations
```

*   GET a Photovoltaic Power Station by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1
```

*   POST Create New Photovoltaic Power Station

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Harbin Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations
```

*   PUT Update a Photovoltaic Power Station

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations/1
```

*   DELETE a Photovoltaic Power Station by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/2
```

*   GET Export a Photovoltaic Power Station by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/export
```

*   POST Import a Photovoltaic Power Station from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Harbin Office\",\"uuid\":\"fd19346c-0e5a-4a1c-b3c3-3ef4fea9c1ea\",\"station_code\":\"XAAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"a0e79d2e-8756-457e-b1f2-4152e3591bff\"},\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}" {base_url}/photovoltaicpowerstations/import
```

*   POST Clone a Photovoltaic Power Station by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/clone
```

*   GET All Grids of a Photovoltaic Power Station

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids
```

*   GET a Photovoltaic Power Station Grid

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   POST Create new a Photovoltaic Power Station Grid

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids
```

*   PUT Update a Photovoltaic Power Station Grid

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   DELETE a Photovoltaic Power Station Grid

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   GET All Invertors of a Photovoltaic Power Station

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors
```

*   GET a Photovoltaic Power Station Invertor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   POST Create new a Photovoltaic Power Station Invertor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors
```

*   PUT Update a Photovoltaic Power Station Invertor

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   DELETE a Photovoltaic Power Station Invertor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   GET All Loads of a Photovoltaic Power Station

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads
```

*   GET a Photovoltaic Power Station Load

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   POST Create new Photovoltaic Power Station  Load

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads
```

*   PUT Update a Photovoltaic Power Station  Load

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   DELETE a Photovoltaic Power Station  Load

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   GET All Users of a Photovoltaic Power Station

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users
```

*   POST Bind an User to an Energy Storage Power Station Copy

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/photovoltaicpowerstations/1/users
```

*   DELETE an User from a Photovoltaic Power Station

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users/1
```


### Core/Point

*   GET All Points

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points
```

*   GET Point by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/1
```

*   POST Create Point

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"ModbusPoint3\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_registers\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null}}" {base_url}/points
```

*   DELETE Point by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/2
```

*   PUT Update Point by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"ModbusPoint1\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":100,\"offset_constant\":12,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_registers\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null,\"definitions\":null}}" {base_url}/points/1
```

*   PUT Update Point Limits by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0}}" {base_url}/pointlimits/10001
```

*   GET Export Point by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/export
```

*   POST Import Point from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Active Energy Import 1\",\"data_source\":{\"id\":1,\"name\":\"示例ModbusTCP数据源\",\"uuid\":\"b3ace9d4-b63b-419b-818f-0f6d1d0603a4\"},\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null,\"faults\":null,\"definitions\":null}" {base_url}/points/import
```

*   POST Clone Point by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/clone
```


### Core/Privilege

*   GET All Privileges

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges
```

*   PUT Update Privilege Data

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges/1
```

*   DELETE Privilege

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges/1
```

*   POST Create Privilege

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges
```


### Core/Protocol

*   GET All Protocols

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols
```

*   GET a Protocol by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1
```

*   POST Create New Protocol

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols
```

*   PUT Update a Protocol

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols/3
```

*   DELETE a Protocol by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/3
```

*   GET Export a Protocol by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/export
```

*   POST Import a Protocol from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}" {base_url}/protocols/import
```

*   POST Clone a Protocol by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/clone
```


### Core/Rule Ⓔ

*   GET All Rules

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules
```

*   GET a Rule by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1
```

*   GET Export a Rule by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/export
```

*   POST Create New Rule

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules
```

*   POST Import a Rule from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Space Energy Consumption Over Limit_1\",\"category\":\"SPACE\",\"fdd_code\":\"SPACE01\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":null,\"is_run_immediately\":true}" {base_url}/rules/import
```

*   POST Clone a Rule by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/clone
```

*   PUT Run a Rule by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/run
```

*   PUT Update a Rule

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules/2
```

*   DELETE a Rule by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/2
```


### Core/Sensor

*   GET All Sensors

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors
```

*   GET Sensor by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1
```

*   POST Create New Sensor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors
```

*   PUT Update a Sensor

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors/3
```

*   DELETE Sensor by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/3
```

*   POST Bind Point to Sensor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/sensors/1/points
```

*   GET All Points associated with Sensor by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points
```

*   DELETE Unbind Point from Sensor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points/2
```

*   GET Export a Sensor by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/export
```

*   POST Import a Sensor from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"传感器123\",\"description\":\"sensor description\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},{\"id\":2,\"name\":\"Working hours counter\"}]}" {base_url}/sensors/import
```

*   POST Clone a Sensor by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/clone
```


### Core/Shopfloor

*   GET All Shopfloors

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors
```

*   GET a Shopfloor by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1
```

*   POST Create New Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors
```

*   PUT Update a Shopfloor

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors/3
```

*   DELETE a Shopfloor by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/2
```

*   GET All Equipments of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments
```

*   POST Bind an Equipment to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/shopfloors/1/equipments
```

*   DELETE an Equipment from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments/1
```

*   GET All Meters of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters
```

*   POST Bind a Meter to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/shopfloors/1/meters
```

*   DELETE a Meter from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters/1
```

*   GET All OfflineMeters of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters
```

*   POST Bind an OfflineMeter to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/shopfloors/1/offlinemeters
```

*   DELETE an Offline Meter from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters/1
```

*   GET All Points of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points
```

*   POST Bind a Point to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/shopfloors/1/points
```

*   DELETE a Point from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points/1
```

*   GET All Sensors of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors
```

*   POST Bind a Sensor to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/shopfloors/1/sensors
```

*   DELETE a Sensor from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors/1
```

*   GET All Virtual Meters of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters
```

*   POST Bind a Virtual Meter to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/shopfloors/1/virtualmeters
```

*   DELETE a Virtual Meter from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters/1
```

*   GET All Working Calendars of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars
```

*   POST Bind a Working Calendar to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/shopfloors/1/workingcalendars
```

*   DELETE a Working Calendar from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars/6
```

*   POST Bind a Command to a Shopfloor

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/shopfloors/1/commands
```

*   GET All Commands of a Shopfloor

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands
```

*   DELETE Unbind a Command from Shopfloor

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands/1
```

*   GET Export a Shopfloor by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/export
```

*   POST Import a Shopfloor from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"车间_1\",\"area\":99999.999,\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MyEMS Project\",\"equipments\":[{\"id\":1,\"name\":\"设备1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/shopfloors/import
```

*   POST Clone a Shopfloor by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/clone
```


### Core/Space

*   GET All Spaces

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces
```

*   GET a Space by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1
```

*   POST Create New Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":1,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":false,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces
```

*   PUT Update a Space

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":2,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces/1
```

*   DELETE a Space by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/57
```

*   GET All Children of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/children
```

*   GET All Combined Equipments of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments
```

*   POST Bind a Combined Equipment to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"combined_equipment_id\":1}}" {base_url}/spaces/1/combinedequipments
```

*   DELETE a Combined Equipment from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments/1
```

*   GET All Distribution Systems of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems
```

*   POST Bind a Distribution System to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"distribution_system_id\":1}}" {base_url}/spaces/1/distributionsystems
```

*   DELETE Unbind a Distribution System from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems/1
```

*   GET All Energy Flow Diagrams of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams
```

*   POST Bind an Energy Flow Diagram to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_flow_diagram_id\":1}}" {base_url}/spaces/1/energyflowdiagrams
```

*   DELETE Unbind an Energy Flow Diagram from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams/1
```

*   GET All Energy Storage Power Stations of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations
```

*   POST Bind an Energy Storage Power Station to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_storage_power_station_id\":1}}" {base_url}/spaces/1/energystoragepowerstations
```

*   DELETE Unbind an Energy Storage Power Station from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations/1
```

*   GET All Equipments of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments
```

*   POST Bind an Equipment to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/spaces/1/equipments
```

*   DELETE Unbind an Equipment from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments/1
```

*   GET All Meters of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters
```

*   POST Bind a Meter to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/spaces/1/meters
```

*   DELETE Unbind a Meter from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters/1
```

*   GET All Microgrids of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids
```

*   POST Bind a Microgrid to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/spaces/1/microgrids
```

*   DELETE Unbind a Microgrid from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids/1
```

*   GET All OfflineMeters of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters
```

*   POST Bind an OfflineMeter to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/spaces/1/offlinemeters
```

*   DELETE Unbind an Offline Meter from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters/1
```

*   GET All Photovoltaic Power Stations of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations
```

*   POST Bind a Photovoltaic Power Station to a Space Copy

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"photovoltaic_power_station_id\":1}}" {base_url}/spaces/1/photovoltaicpowerstations
```

*   DELETE Unbind a Photovoltaic Power Station from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations/1
```

*   GET All Points of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   POST Bind a Point to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/spaces/1/points
```

*   DELETE Unbind a Point from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/points/3
```

*   GET All Sensors of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors
```

*   POST Bind a Sensor to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/spaces/1/sensors
```

*   DELETE Unbind a Sensor from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors/1
```

*   GET All Shopfloors of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors
```

*   POST Bind a Shopfloor to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"shopfloor_id\":1}}" {base_url}/spaces/1/shopfloors
```

*   DELETE Unbind a Shopfloor from a Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors/1
```

*   GET All Stores of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores
```

*   POST Bind a Store to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"store_id\":1}}" {base_url}/spaces/1/stores
```

*   DELETE Unbind a Store from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores/1
```

*   GET All Tenants of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants
```

*   POST Bind a Tenant to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"tenant_id\":1}}" {base_url}/spaces/1/tenants
```

*   DELETE Unbind a Tenant from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants/1
```

*   GET All Virtual Meters of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   POST Bind a Virtual Meter to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/spaces/1/virtualmeters
```

*   DELETE Unbind a Virtual Meter from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters/1
```

*   GET Space Tree  of User

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/tree
```

*   GET Energy Categories of all Meters in the Space Tree

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/treemetersenergycategories
```

*   GET All Working Calendars of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars
```

*   POST Bind a Working Calendar to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/spaces/1/workingcalendars
```

*   DELETE Unbind a Working Calendar from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars/6
```

*   GET All Commands of a Space

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands
```

*   POST Bind a Command to a Space

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/spaces/1/commands
```

*   DELETE Unbind a Command from Space

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands/1
```

*   GET Export a Space by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/export
```

*   POST Import a Space from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"1号楼_1\",\"parent_space_id\":{\"id\":1,\"name\":\"MyEMS\",\"uuid\":\"9dfb7cff-f19f-4a1e-8c79-3adf6425bfd9\"},\"area\":88888.888,\"timezone\":{\"id\":56,\"name\":\"China Standard Time\",\"utc_offset\":\"+08:00\"},\"is_input_counted\":true,\"is_output_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"latitude\":39.915119,\"longitude\":116.403963,\"description\":\"MyEMS Space\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"shopfloors\":[{\"id\":1,\"name\":\"车间1\",\"uuid\":\"d03837fd-9d30-44fe-9443-154f7c7e15f1\"}],\"combined_equipments\":null,\"equipments\":null,\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"tenants\":[{\"id\":1,\"name\":\"Starbucks星巴克\",\"uuid\":\"6b0da806-a4cd-431a-8116-2915e90aaf8b\"}],\"stores\":[{\"id\":1,\"name\":\"麦当劳\",\"uuid\":\"d8a24322-4bab-4ba2-aedc-5d55a84c3db8\"}],\"working_calendars\":null}" {base_url}/spaces/import
```

*   POST Clone a Space by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/clone
```


### Core/Store

*   GET All Sotres

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores
```

*   GET a Store by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1
```

*   POST Create New Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"麦当劳(新王府井店)\",\"address\":\"北京市东城区王府井大街200号工美大厦1层010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores
```

*   PUT Update a Store

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"麦当劳(新王府井店)\",\"address\":\"北京市东城区王府井大街200号工美大厦1层010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores/3
```

*   DELETE a Store by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/3
```

*   GET All Meters of Store by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters
```

*   POST Bind a Meter to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/stores/1/meters
```

*   DELETE a Meter from Store

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters/1
```

*   GET All OfflineMeters of Store

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters
```

*   POST Bind an OfflineMeter to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/stores/1/offlinemeters
```

*   DELETE an Offline Meter from Store

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters/1
```

*   GET All Points of Store by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points
```

*   POST Bind a Point to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/stores/1/points
```

*   DELETE a Point from Store

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points/1
```

*   GET All Sensors of Store by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors
```

*   POST Bind a Sensor to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/stores/1/sensors
```

*   DELETE a Sensor from Stores

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors/1
```

*   GET All Virtual Meters of Store by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters
```

*   POST Bind a Virtual Meter to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/stores/1/virtualmeters
```

*   DELETE a Virtual Meter from Store

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters/1
```

*   GET All Working Calendars of Store by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars
```

*   POST Bind a Working Calendar to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/stores/1/workingcalendars
```

*   DELETE a Working Calendar from Stores

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars/6
```

*   GET All Commands of a Store

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands
```

*   POST Bind a Command to a Store

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/stores/1/commands
```

*   DELETE Unbind a Command from Store

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands/1
```

*   POST Clone a Store by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/clone
```

*   GET Export a Store by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/export
```

*   POST Import a Store from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"麦当劳_1\",\"address\":\"北京市东城区东打磨厂街7号\",\"latitude\":39.899493,\"longitude\":116.412041,\"area\":500,\"store_type\":{\"id\":1,\"name\":\"餐饮\",\"uuid\":\"494d7d5e-e139-4629-b957-99ea4caf0401\"},\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MacDonalds\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/stores/import
```


### Core/StoreType

*   GET All Store Types

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes
```

*   GET a Store Type by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/1
```

*   POST Create New Store Type

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Car\",\"description\":\"汽车\",\"simplified_code\":\"CA\"}}" {base_url}/storetypes
```

*   PUT Update a Store Type

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Auto\",\"description\":\"汽车\",\"simplified_code\":\"AT\"}}" {base_url}/storetypes/4
```

*   DELETE a Store Type by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/4
```


### Core/SVG Ⓔ

*   GET All SVGs

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs
```

*   GET a SVG by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1
```

*   POST Create SVG

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例SVG图形1\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs
```

*   DELETE SVG by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/2
```

*   PUT Update SVG by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例SVG图形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Three separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs/1
```

*   GET Export a SVG by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/export
```

*   POST Import a SVG from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"示例SVG图形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo SVG\"}" {base_url}/svgs/import
```

*   POST Clone a SVG by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/clone
```


### Core/Tariff

*   GET All Tariffs

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs
```

*   GET a Tariff by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1
```

*   POST Create a Tariff (Time of Use)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new2020分时电价1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs
```

*   PUT Update a Tariff (time of use)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new2020分时电价1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.456},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs/18
```

*   DELETE a Tariff

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/18
```

*   GET Export a Tariff by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/export
```

*   POST Import a Tariff from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"2024分时电价1-7\",\"energy_category\":{\"id\":1,\"name\":\"电\"},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2024-01-01T00:00:00\",\"valid_through\":\"2024-06-30T23:59:59\",\"timeofuse\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}" {base_url}/tariffs/import
```

*   POST Clone a Tariff by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/clone
```


### Core/Tenant

*   GET All Tenants

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants
```

*   GET a Tenant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1
```

*   POST Create New Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Starbucks\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2021-01-01T00:00:00\",\"lease_end_datetime\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants
```

*   PUT Update a Tenant

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Hermes 爱马仕\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3 L4 L5\",\"rooms\":\"1201b+2247+3F\",\"area\":818.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime_utc\":\"2021-01-01T00:00:00\",\"lease_end_datetime_utc\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants/2
```

*   DELETE a Tenant by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/2
```

*   GET All Meters of Tenant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters
```

*   POST Bind a Meter to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/tenants/1/meters
```

*   DELETE a Meter from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters/1
```

*   GET All OfflineMeters of Tenant

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters
```

*   POST Bind an OfflineMeter to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/tenants/1/offlinemeters
```

*   DELETE an Offline Meter from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters/1
```

*   GET All Points of Tenant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points
```

*   POST Bind a Point to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/tenants/1/points
```

*   DELETE a Point from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points/1
```

*   GET All Sensors of Tenant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors
```

*   POST Bind a Sensor to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/tenants/1/sensors
```

*   DELETE a Sensor from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors/1
```

*   GET All Virtual Meters of Tenant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters
```

*   POST Bind a Virtual Meter to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/tenants/1/virtualmeters
```

*   DELETE a Virtual Meter from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters/1
```

*   GET All Working Calendars of Tenant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars
```

*   POST Bind a Working Calendar to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/tenants/1/workingcalendars
```

*   DELETE a Working Calendar from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars/6
```

*   GET All Commands of a Tenant

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands
```

*   POST Bind a Command to a Tenant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/tenants/1/commands
```

*   DELETE Unbind a Command from Tenant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands/1
```

*   GET Export a Tenant by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/export
```

*   POST Import a Tenant from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Starbucks星巴克_1\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type\":{\"id\":9,\"name\":\"非整层办公租户\",\"uuid\":\"55bbcba7-d8a0-44a0-9a9f-2f085e3cb044\"},\"is_key_tenant\":true,\"is_input_counted\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2020-01-01T00:00:00\",\"lease_end_datetime\":\"2023-01-01T00:00:00\",\"is_in_lease\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"my description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/tenants/import
```

*   POST Clone a Tenant by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/clone
```


### Core/TenantType

*   GET All Tenant Types

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes
```

*   GET a Tenant Type by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/1
```

*   POST Create New Tenant Type

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"办公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes
```

*   PUT Update a Tenant Type

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"办公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes/10
```

*   DELETE a Tenant Type by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/10
```


### Core/Text Message

*   GET Text Messages by Date Range

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   GET aText Message by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/1
```

*   POST Create New Text Message

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/textmessages
```

*   PUT Update a Text Message

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888899\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/textmessages/1000001
```

*   DELETE a Text Message by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/2
```


### Core/Ticket Ⓔ

*   GET All Tickets

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00&status=all
```

*   GET a Ticket by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/49
```

*   POST Create New Ticket

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/tickets
```

*   PUT Update a Ticket

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{}}" {base_url}/tickets/1
```

*   DELETE a Ticket by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/2
```


### Core/Timezone

*   GET All Timezones

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones
```

*   GET a Timezone by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones/1
```

*   PUT Update a Timezone

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"夏威夷标准时间\",\"description\":\"(GMT-10:00) Hawaii\",\"utc_offset\":\"-10:00\"}}" {base_url}/timezones/3
```


### Core/User

*   GET All Users

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users
```

*   GET a User by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/1
```

*   POST Create New User (by Administrator)

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo\",\"display_name\":\"Demo\",\"email\":\"demo@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users
```

*   PUT User Login by Username

```bash
curl -i -X PUT -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"administrator\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   DELETE User

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/2
```

*   PUT Update User Profile

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"display_name\":\"Mr. Albert\",\"email\":\"albert@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users/2
```

*   PUT User Logout

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "暂无数据" {base_url}/users/logout
```

*   PUT User Change Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"old_password\":\"!MyEMS1\",\"new_password\":\"!MyEMS2\"}}" {base_url}/users/changepassword
```

*   PUT Reset Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"johnson\",\"password\":\"NewPassword2\"}}" {base_url}/users/resetpassword
```

*   PUT User Login by Email

```bash
curl -i -X PUT -H "Content-Type: application/json" -d "{\"data\":{\"email\":\"administrator@myems.io\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   PUT Unlock User

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/unlock/2
```

*   PUT Forgot Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"password\":\"!MyEMS2\",\"email\":\"demo@myems.io\",\"token\":\"100d4d9f1a262b3169bf5ca49d66121823856bec4d6b18b09ddeb0afbc14207246de906705e8788ae42633095eb1cad2eb991cd96f73b885cfa0b93569c1f34e\"}}" {base_url}/users/forgotpassword
```

*   GET Forgot Password Expires Datetime by Email and Token

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/forgotpassword?email=demo@myems.io&token=1da65d0c141597b9d58adcba46001a119dc4ada3283049122e3f4f39b2fa7aa2182a3f48a0ddf0d0d631833041fa0f1f0873f68f664bd733f8a39512ff89123f
```

*   POST Create New Forgot Password Email Message

```bash
curl -i -X POST -H "Content-Type: application/json" -d "{\"data\":{\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages
```

*   PUT Update Forgot Password Email Message

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"recipient_name\":\"Demo\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"status\":\"new\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages/1
```

*   GET All Forgot Password Email Messages

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages?startdatetime=2023-05-01T00:00:00&enddatetime=2023-05-31T00:00:00
```

*   GET Forgot Email Message by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   DELETE Forgot Password Email Message by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   POST Create New Register User

```bash
curl -i -X POST -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo1\",\"display_name\":\"Demo1\",\"email\":\"demo1@myems.io\",\"password\":\"!MyEMS1\",\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\"}}" {base_url}/users/newusers
```

*   GET All New Register Users

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers
```

*   GET a New Register User by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   PUT Update a New Register User

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo2\",\"display_name\":\"Demo2\",\"email\":\"demo2@myems.io\"}}" {base_url}/users/newusers/2
```

*   DELETE a New Register User

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   PUT Approve a New Register User (by Administrator)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"is_admin\":true,\"is_read_only\":false,\"privilege_id\":1,\"account_expiration_datetime\":\"2024-05-31T16:00:00\",\"password_expiration_datetime\":\"2024-05-31T16:00:00\"}}" {base_url}/users/newusers/2/approve
```


### Core/Virtual Power Plant Ⓔ

*   GET All Virtual Power Plants

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants
```

*   GET a Virtual Power Plant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1
```

*   POST Create New Virtual Power Plant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing VPP\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/virtualpowerplants
```

*   PUT Update a Virtual Power Plant

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing VPP1\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"New\"}}" {base_url}/virtualpowerplants/1
```

*   DELETE a Virtual Power Plant by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/3
```

*   GET All Microgrids of Virtual Power Plant by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids
```

*   POST Bind a Microgrid to a Virtual Power Plant

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/virtualpowerplants/1/microgrids
```

*   DELETE a Microgrid from Virtual Power Plant

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids/1
```

*   GET Export a Virtual Power Plant by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/export
```

*   POST Import a Virtual Power Plant from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing VPP_1\",\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"balancing_price_point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/virtualpowerplants/import
```

*   POST Clone a Virtual Power Plant by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/clone
```


### Core/Virtual Meter

*   GET All Virtual Meters

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters
```

*   GET a Virtual Meter by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1
```

*   POST Create New Virtual Meter

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"VM10\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters
```

*   PUT Update a Virtual Meter by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"VM11\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters/3
```

*   DELETE a Virtual Meter by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/3
```

*   GET Export a Virtual Meter by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/export
```

*   POST Import a Virtual Meter from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"虚拟表12\",\"equation\":\"x1+x2+x3\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2+x3\",\"variables\":[{\"id\":1,\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1,\"meter_name\":\"计量表1\"},{\"id\":2,\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2,\"meter_name\":\"计量表2\"},{\"id\":3,\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3,\"meter_name\":\"计量表3\"}]}}" {base_url}/virtualmeters/import
```

*   POST Clone a Virtual Meter by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/clone
```


### Core/Web Message

*   GET Web Messages by Datetime Range

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   GET All New Web Messages

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessagesnew
```

*   PUT Update All New Web Messages (Mark All As Read)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessagesnew
```

*   PUT Update All New Web Messages (Acknowledge All)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"OK\"}}" {base_url}/webmessagesnew
```

*   GET a Web Message by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   POST Create New Web Message TODO

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages
```

*   PUT Update a Web Message (Acknowledge)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"this is my reply\"}}" {base_url}/webmessages/1
```

*   PUT Update a Web Message (Mark As Read)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessages/1
```

*   DELETE a Web Message by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   PUT Batch Update Web Messages (Mark As Read)

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```

*   DELETE Batch Web Messages by IDs

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```


### Core/Wechat Message

*   GET Wechat Messages by Date Range

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   GET a Wechat Message by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/1
```

*   POST Create New Wechat Message

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"oia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/wechatmessages
```

*   PUT Update a Wechat Message

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"1ia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/wechatmessages/1000001
```

*   DELETE a Wechat Message by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/2
```


### Core/Wind Farm Ⓔ

*   GET All Wind Farms

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms
```

*   GET a Wind Farm by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1
```

*   POST Create New Wind Farm

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":600,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms
```

*   PUT Update a Wind Farm

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms/1
```

*   DELETE a Wind Farm by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/2
```

*   GET Export a Wind Farm by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/export
```

*   POST Import a Wind Farm from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/windfarms/import
```

*   POST Clone a Wind Farm by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/clone
```


### Core/Working Calendar

*   GET All Working Calendars

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars
```

*   GET a Working Calendar by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1
```

*   POST Create New Working Calendar

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new_working_calendar\",\"description\":\"test\"}}" {base_url}/workingcalendars
```

*   PUT Update a Working Calendar

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"测试日历\",\"description\":\"test_update\"}}" {base_url}/workingcalendars/2
```

*   DELETE a Working Calendar by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/8
```

*   GET Export a Working Calendar by ID to JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/export
```

*   POST Clone a Working Calendar by ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/clone
```

*   POST Import a Working Calendar from JSON

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"new_working_calendar_1\",\"description\":\"test\",\"non_working_days\":[{\"id\":2,\"working_calendar_id\":1,\"date_local\":\"2023-03-01\",\"description\":\"test\"},{\"id\":3,\"working_calendar_id\":1,\"date_local\":\"2023-03-02\",\"description\":\"test\"},{\"id\":4,\"working_calendar_id\":1,\"date_local\":\"2023-03-03\",\"description\":\"test\"},{\"id\":5,\"working_calendar_id\":1,\"date_local\":\"2023-03-04\",\"description\":\"test\"},{\"id\":6,\"working_calendar_id\":1,\"date_local\":\"2023-03-08\",\"description\":\"test\"},{\"id\":14,\"working_calendar_id\":1,\"date_local\":\"2023-03-09\",\"description\":\"test\"},{\"id\":15,\"working_calendar_id\":1,\"date_local\":\"2023-03-10\",\"description\":\"test\"},{\"id\":16,\"working_calendar_id\":1,\"date_local\":\"2023-03-11\",\"description\":\"test\"},{\"id\":17,\"working_calendar_id\":1,\"date_local\":\"2023-03-12\",\"description\":\"test\"},{\"id\":18,\"working_calendar_id\":1,\"date_local\":\"2023-03-13\",\"description\":\"test\"}]}" {base_url}/workingcalendars/import
```


### Core/Non Working Day

*   GET All Non Working Days by Working Calendar ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/2/nonworkingdays
```

*   GET a Non Working Day by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/42
```

*   POST Create New Non Working Day  by Working Calendar ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"description\":\"test\"}}" {base_url}/workingcalendars/1/nonworkingdays
```

*   PUT Update a Non Working Day by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"working_calendar_id\":2,\"description\":\"test_update3\"}}" {base_url}/nonworkingdays/42
```

*   DELETE a Non Working Day by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/41
```


### Core/API KEY

*   POST Create New API Key

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2023-06-30T12:00:00\"}}" {base_url}/apikeys
```

*   GET an API Key by ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/1
```

*   GET All API Keys

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys
```

*   PUT Update an API Key by ID

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2024-06-06T12:00:00\"}}" {base_url}/apikeys/1
```

*   DELETE an API Key by ID

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/3
```

### Reports
*   GET AdvancedReport Files Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports?reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET AdvancedReport File by ID Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   DELETE AdvancedReport File by ID Ⓔ
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   GET Combined Equipment Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Combined Equipment Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Carbon Dioxide Emission Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Carbon Dioxide Emission Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Combined Equipment comparison (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?quickmode=true&combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Combined Equipment Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Efficiency Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Efficiency Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Energy Category Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Energy Category Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Energy Item Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Energy Item Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Income Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Income Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Load Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Load Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Output Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Output Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentplan?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Combined Equipment Statistics Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Combined Equipment Statistics Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Dashboard
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/dashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Distribution System Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/distributionsystem?distributionsystemid=1
```

*   GET Energy Flow Diagram Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energyflowdiagram?energyflowdiagramid=1&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Energy Storage Power Station Dashboard Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Energy Storage Power Station Details Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdetails?id=1
```

*   GET Energy Storage Power Station List Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationlist
```

*   GET Energy Storage Power Stations Energy Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   GET Energy Storage Power Stations Billing Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   GET Energy Storage Power Stations Carbon Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   GET Equipment Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Equipment Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Equipment comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Equipment comparison (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?quickmode=true&equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Equipment Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Efficiency Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Efficiency Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Energy Category Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Energy Category Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Energy Item Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Energy Item Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Income Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Income Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Load Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Load Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Output Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Output Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Equipment Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentplan?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Statistics Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Equipment Statistics Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Meter Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN
```

*   GET Meter Batch Analysis Report (QuickMode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN&quickmode=true
```

*   GET Meter Carbon Dioxide Emission Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Meter Carbon Dioxide Emission Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Meter Comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00&periodtype=hourly
```

*   GET Meter Comparison Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00
```

*   GET Meter Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Meter Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Meter Energy Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Meter Energy Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Meter Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Meter Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterplan?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Meter Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Meter Realtime Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1
```

*   GET Meter Realtime Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1&quickmode=true
```

*   GET Meter Submeters Balance Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Meter Submeters Balance Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Meter Trend Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertrend?meterid=6&reportingperiodstartdatetime=2020-09-10T00:00:00&reportingperiodenddatetime=2020-09-11T00:00:00
```

*   GET Meter Trend Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 21895d99b1157e665664a729be6fd8f71471c78d2ee797e57c32442f4d5084b0fcbbd6f799002c9b4a0a41d580fcdd64899f158f1ace0931da1e31bd81958294" {base_url}/reports/metertrend?quickmode=true&reportingperiodenddatetime=2024-12-18T00:00:00&meterid=6&reportingperiodstartdatetime=2024-12-10T00:00:00
```

*   GET Meter Tracking Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59
```

*   GET Meter Tracking Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59&quickmode=true
```

*   GET Microgrid Dashboard Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Microgrids Energy Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   GET Microgrids Billing Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   GET Microgrids Carbon Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   GET Microgrid Details Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddetails?microgridid=1
```

*   GET Microgrid List Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridlist
```

*   GET Offline Meter Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Offline Meter Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Offline Meter Carbon Dioxide Emission Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Offline Meter Carbon Dioxide Emission Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Offline Meter Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Offline Meter Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Offline Meter Energy Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Offline Meter Energy Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Offline Meter Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Offline Meter Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterplan?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Offline Meter Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Point Realtime Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/pointrealtime
```

*   GET Shopfloor Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Shopfloor Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Shopfloor comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Shopfloor comparison (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?quickmode=true&shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Shopfloor Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Shopfloor Dashboard
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloordashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Energy Category Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Energy Category Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Shopfloor Energy Item Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Energy Item Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Shopfloor Load Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Load Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Shopfloor Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorplan?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Shopfloor Statistics Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Shopfloor Statistics Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Efficiency Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Efficiency Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Energy Category Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Energy Category Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Energy Item Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Energy Item Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Income Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Income Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Load Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Load Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Output Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Output Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceplan?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Space Statistics Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Space Statistics Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Store Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Store Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Store comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Store comparison (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?quickmode=true&storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Store Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Store Dashboard
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storedashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Energy Category Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Energy Category Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Store Energy Item Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Energy Item Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Store Load Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Load Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Store Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeplan?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Store Statistics Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Store Statistics Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Tenant Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Tenant Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Tenant Bill Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbill?tenantid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Tenant comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Tenant comparison (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?quickmode=true&tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Tenant Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Tenant Dashboard
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Energy Category Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Energy Category Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Tenant Energy Item Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Energy Item Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Tenant Load Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Load Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Tenant Saving Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Plan Report Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantplan?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Saving Report (Quick Mode) Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Tenant Statistics Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Tenant Statistics Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Vitrual Meter Batch Analysis Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   GET Vitrual Meter Batch Analysis Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   GET Virtual Meter Carbon Dioxide Emission Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Virtual Meter Carbon Dioxide Emission Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Virtual Meter comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Virtual Meter comparison (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   GET Virtual Meter Cost Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Virtual Meter Cost Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Virtual Meter Energy Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Virtual Meter Energy Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   GET Virtual Meter Saving Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Virtual Meter Plan Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterplan?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   GET Virtual Meter Saving Report (Quick Mode)
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   POST Offline Meter Modify Value
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"meter\":1,\"value\":[[\"2023-07-01\",\"123\"],[\"2023-07-02\",\"123\"]]}" {base_url}/reports/offlinemeterinput
```

*   GET Offline Meter Value List
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metermonthgenerate?offlinemeterid=1&reportingperiodstartdatetime=2023-07-01T00:00:00&reportingperiodenddatetime=2023-07-31T23:59:59
```

