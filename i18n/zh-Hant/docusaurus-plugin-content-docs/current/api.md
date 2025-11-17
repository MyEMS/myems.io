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
在 Postman 中查看：使用 Postman 導入文件 MyEMS.postman_collection.json

*   獲取版本信息
```bash
curl -i -X GET -H "User-UUID: YOUR-USER-UUID" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" {base_url}/version
```

### 核心/高級報表配置 Ⓔ
*   獲取全部高級報表配置

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports
```

*   根據 ID 獲取高級報表配置

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1
```

*   根據 ID 導出高級報表配置為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/export
```

*   創建高級報表配置

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Daily Report1\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports
```

*   從 JSON 導入高級報表配置

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Space Daily Report2\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}" {base_url}/advancedreports/import
```

*   根據 ID 克隆高級報表配置

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/clone
```

*   根據 ID 運行高級報表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/run
```

*   更新高級報表配置

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Monthly Report\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-01T00:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports/1
```

*   運行高級報表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/advancedreports/1/run
```

*   刪除高級報表配置

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/2
```


### 核心/組合設備

*   獲取全部組合設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments
```

*   創建組合設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments
```

*   根據 ID 獲取組合設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1
```

*   根據 ID 更新組合設備

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Combined Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXXs\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments/1
```

*   根據 ID 克隆組合設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/combinedequipments/1
```

*   根據 ID 刪除組合設備

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/6
```

*   為組合設備綁定設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/combinedequipments/1/equipments
```

*   獲取組合設備的所有設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments
```

*   從組合設備移除設備

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments/1
```

*   獲取組合設備的所有計量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters
```

*   為組合設備綁定計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/meters
```

*   從組合設備移除計量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters/1
```

*   為組合設備綁定離線計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/offlinemeters
```

*   獲取組合設備的所有離線計量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters
```

*   從組合設備移除離線計量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters/1
```

*   獲取組合設備的所有參數

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters
```

*   獲取組合設備的單個參數

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/1
```

*   為組合設備創建點類型參數

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   更新組合設備的點類型參數

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/1
```

*   為組合設備創建常量類型參數

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test constant parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   更新組合設備的常量類型參數

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/2
```

*   為組合設備創建分數類型參數

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters
```

*   更新組合設備的分數類型參數

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters/3
```

*   從組合設備刪除參數

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/16
```

*   為組合設備綁定虛擬計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/virtualmeters
```

*   獲取組合設備的所有虛擬計量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters
```

*   從組合設備移除虛擬計量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters/1
```

*   獲取與組合設備關聯的所有命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands
```

*   為組合設備綁定命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/combinedequipments/1/commands
```

*   從組合設備解綁命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands/3
```

*   根據 ID 導出組合設備為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/export
```

*   從 JSON 導入組合設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"組合式設備_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"equipments\":[{\"id\":1,\"name\":\"設備1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"離線表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虛擬表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":2,\"name\":\"manufacturer\",\"parameter_type\":\"constant\",\"constant\":\"York\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":3,\"name\":\"maintainer\",\"parameter_type\":\"constant\",\"constant\":\"Johnson Controls\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":4,\"name\":\"use life start\",\"parameter_type\":\"constant\",\"constant\":\"2016-01-01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":5,\"name\":\"use life end\",\"parameter_type\":\"constant\",\"constant\":\"2025-12-31\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":6,\"name\":\"model number\",\"parameter_type\":\"constant\",\"constant\":\"CH01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":7,\"name\":\"nominal cooling capacity\",\"parameter_type\":\"constant\",\"constant\":\"90.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":8,\"name\":\"nominal cooling input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":9,\"name\":\"nominal cooling cop\",\"parameter_type\":\"constant\",\"constant\":\"5\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":10,\"name\":\"nominal cooling operating current\",\"parameter_type\":\"constant\",\"constant\":\"120.000 A\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":11,\"name\":\"rated input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":12,\"name\":\"nominal chilled water flow rate\",\"parameter_type\":\"constant\",\"constant\":\"30 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":13,\"name\":\"nominal cooling water flow_rate\",\"parameter_type\":\"constant\",\"constant\":\"50 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":14,\"name\":\"status\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":15,\"name\":\"inlet chilled water temperature\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":2,\"name\":\"Working hours counter\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":16,\"name\":\"chilled_water instantaneous flow rate\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":3,\"name\":\"Current a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":17,\"name\":\"instantaneous power\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":4,\"name\":\"Active Power a\"},\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/combinedequipments/import
```

*   根據 ID 克隆組合設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/clone
```


### 核心/聯繫人

*   獲取全部聯繫人

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts
```

*   根據 ID 獲取聯繫人

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/1
```

*   新建聯繫人

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888888\",\"description\":\"contact description\"}}" {base_url}/contacts
```

*   更新聯繫人

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888899\",\"description\":\"contact description\"}}" {base_url}/contacts/3
```

*   根據 ID 刪除聯繫人

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/3
```


### 核心/命令

*   獲取全部命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands
```

*   根據 ID 獲取命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1
```

*   新建命令（不含 set_value）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_off_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn off light\"}}" {base_url}/commands
```

*   新建命令（包含 set_value）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands
```

*   更新命令（不含 set_value）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   更新命令（包含 set_value）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   根據 ID 刪除命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/7
```

*   根據 ID 發送命令

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"set_value\":2}}" {base_url}/commands/1/send
```

*   根據 ID 導出命令為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/export
```

*   從 JSON 導入命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"turn_up_light1\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}" {base_url}/commands/import
```

*   根據 ID 克隆命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/clone
```


### 核心/控制模式

*   獲取全部控制模式

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes
```

*   根據 ID 獲取控制模式

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1
```

*   新建控制模式

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"CM11\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}}" {base_url}/controlmodes
```

*   更新控制模式

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"削峰填谷\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":-5}]}}" {base_url}/controlmodes/1
```

*   根據 ID 刪除控制模式

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/11
```

*   根據 ID 導出控制模式為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/export
```

*   從 JSON 導入控制模式

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"自發自用\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}" {base_url}/controlmodes/import
```

*   根據 ID 克隆控制模式

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/clone
```

*   根據 ID 獲取控制模式的全部時段

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" {base_url}/controlmodes/1/times
```


### 核心/成本中心

*   獲取全部成本中心

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters
```

*   根據 ID 獲取成本中心

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1
```

*   新建成本中心

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"動力中心\",\"external_id\":\"21829198980001\"}}" {base_url}/costcenters
```

*   更新成本中心

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"動力中心2\",\"external_id\":\"21829198980002\"}}" {base_url}/costcenters/1
```

*   根據 ID 刪除成本中心

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/3
```

*   為成本中心綁定費率

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"tariff_id\":\"3\"}}" {base_url}/costcenters/1/tariffs
```

*   獲取與成本中心關聯的所有費率

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs
```

*   從成本中心解綁費率

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs/3
```


### 核心/成本文件

*   獲取全部成本文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles
```

*   根據 ID 獲取成本文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   上傳成本文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/costfiles
```

*   根據 ID 刪除成本文件

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   根據 ID 恢復成本文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/2/restore
```


### 核心/數據修復文件

*   獲取全部數據修復文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles
```

*   根據 ID 獲取數據修復文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   上傳數據修復文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/datarepairfiles
```

*   根據 ID 刪除數據修復文件

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   根據 ID 恢復數據修復文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1/restore
```


### 核心/數據源

*   獲取全部數據源

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources
```

*   根據 ID 獲取數據源

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1
```

*   新建數據源

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources
```

*   根據 ID 刪除數據源

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/14
```

*   根據 ID 更新數據源

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.99\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources/1
```

*   根據數據源 ID 獲取所有點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1/points
```

*   根據 ID 導出數據源為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/16/export
```

*   從 JSON 導入數據源

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Modbus1\",\"gateway\":{\"id\":1,\"name\":\"Gateway1\",\"uuid\":\"dc681938-5053-8660-98ed-266c58227231\"},\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\",\"points\":[{\"name\":\"Active Energy Import 1\",\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null},{\"name\":\"Active Power  2\",\"object_type\":\"ANALOG_VALUE\",\"units\":\"kW\",\"high_limit\":999999999\",\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":209, \\"number_of_registers\\":2, \\"format\\":\\"=L\\", \\"byte_swap\\":true}\",\"description\":null}]}" {base_url}/datasources/import
```

*   克隆數據源

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/2/clone
```


### 核心/配電系統

*   獲取全部配電系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems
```

*   根據 ID 獲取配電系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1
```

*   新建配電系統

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例配電系統2\",\"svg_id\":1,\"description\":\"demo description\"}}" {base_url}/distributionsystems
```

*   根據 ID 刪除配電系統

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/2
```

*   根據 ID 更新配電系統

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例配電系統1\",\"svg_id\":2,\"description\":\"demo description\"}}" {base_url}/distributionsystems/1
```

*   獲取配電系統下的全部配電迴路

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/distributioncircuits
```

*   根據 ID 導出配電系統為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/export
```

*   從 JSON 導入配電系統

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"示例配電系統_1\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"demo distribution system\",\"circuits\":[{\"id\":1,\"name\":\"AHa01\",\"uuid\":\"52f7abe1-ba0e-47a6-a327-4faac42a1d11\",\"distribution_room\":\"1ES\",\"switchgear\":\"AHa01\",\"peak_load\":5100,\"peak_current\":1250,\"customers\":\"11#電源進線1WHj2\",\"meters\":\"AHa01\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}]}" {base_url}/distributionsystems/import
```

*   根據 ID 克隆配電系統

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/clone
```


### 核心/配電迴路

*   獲取全部配電迴路

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits
```

*   根據 ID 獲取配電迴路

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1
```

*   新建配電迴路

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W92\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室應急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits
```

*   根據 ID 刪除配電迴路

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/2
```

*   根據 ID 更新配電迴路

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W91\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室應急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits/1
```

*   為配電迴路綁定點位

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/distributioncircuits/1/points
```

*   獲取配電迴路的所有點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points
```

*   從配電迴路解綁點位

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points/2
```


### 核心/郵件服務器

*   獲取全部郵件服務器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers
```

*   新建郵件服務器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.126.com\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@126.com\"}}" {base_url}/emailservers
```

*   根據 ID 獲取郵件服務器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/1
```

*   更新郵件服務器

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.myems.io\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@myems.io\"}}" {base_url}/emailservers/1
```

*   根據 ID 刪除郵件服務器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/2
```


### 核心/郵件消息

*   按時間範圍獲取郵件消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages?startdatetime=2021-10-01T00:00:00&enddatetime=2021-10-11T00:00:00
```

*   根據 ID 獲取郵件消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/1
```

*   新建郵件消息

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/emailmessages
```

*   更新郵件消息

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/emailmessages/1
```

*   根據 ID 刪除郵件消息

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/2
```


### 核心/能源種類

*   獲取全部能源種類

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories
```

*   根據 ID 獲取能源種類

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/1
```

*   新建能源種類

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"柴油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories
```

*   更新能源種類

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"汽油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories/12
```

*   刪除能源種類

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/12
```


### 核心/能流圖

*   獲取全部能流圖

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams
```

*   根據 ID 獲取能流圖

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1
```

*   新建能流圖

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow\"}}" {base_url}/energyflowdiagrams
```

*   更新能流圖

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow Diagram\"}}" {base_url}/energyflowdiagrams/2000000
```

*   刪除能流圖

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/2000000
```

*   獲取能流圖的全部節點

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/nodes
```

*   新建能流圖節點

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"10KV#3\"}}" {base_url}/energyflowdiagrams/1000000/nodes
```

*   更新能流圖節點

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"10KV Input #1\"}}" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   刪除能流圖節點

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   獲取能流圖的全部連線

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/links
```

*   新建能流圖連線

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000008,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links
```

*   更新能流圖連線

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000009,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   刪除能流圖連線

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   根據 ID 導出能流圖為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/export
```

*   從 JSON 導入能流圖

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"示例能流圖_3\",\"uuid\":\"3ccbc9c6-9575-4212-a63a-a688d1154302\",\"nodes\":[{\"id\":1,\"name\":\"10KV進線#1\"},{\"id\":2,\"name\":\"10KV進線#2\"},{\"id\":3,\"name\":\"租區\"},{\"id\":4,\"name\":\"公區\"},{\"id\":5,\"name\":\"酒店\"},{\"id\":6,\"name\":\"車庫\"},{\"id\":7,\"name\":\"餐飲\"},{\"id\":8,\"name\":\"零售\"},{\"id\":9,\"name\":\"照明\"},{\"id\":10,\"name\":\"電梯\"}],\"links\":[{\"id\":1,\"source_node\":{\"id\":1,\"name\":\"10KV進線#1\"},\"target_node\":{\"id\":3,\"name\":\"租區\"},\"meter\":{\"type\":\"meter\",\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}}]}" {base_url}/energyflowdiagrams/import
```

*   根據 ID 克隆能流圖

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/clone
```


### 核心/能耗分項

*   獲取全部能耗分項

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems
```

*   獲取單個能耗分項

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/1
```

*   新建能耗分項

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"租戶用電\",\"energy_category_id\":1}}" {base_url}/energyitems
```

*   更新能耗分項

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"空調用\",\"energy_category_id\":1}}" {base_url}/energyitems/1
```

*   刪除能耗分項

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/4
```


### 核心/儲能集裝箱 Ⓔ

*   獲取全部儲能集裝箱

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers
```

*   根據 ID 獲取儲能集裝箱

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   根據 ID 導出儲能集裝箱為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/export
```

*   新建儲能集裝箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers
```

*   從 JSON 導入儲能集裝箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"9b963448-1235-4239-b0c9-c71d926cec5f\",\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"albert\",\"uuid\":\"076ea179-5a7e-4a48-9fcd-f452f95f5376\"},\"cost_center\":{\"id\":1,\"name\":\"動力中心\",\"uuid\":\"6fc174dc-9c57-4934-9896-9226e696dbf2\"},\"description\":\"Classic\",\"qrcode\":\"energystoragecontainer:9b963448-1235-4239-b0c9-c71d926cec5f\"}" {base_url}/energystoragecontainers/import
```

*   根據 ID 克隆儲能集裝箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/clone
```

*   更新儲能集裝箱

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":300,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers/1
```

*   根據 ID 刪除儲能集裝箱

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   獲取儲能集裝箱的全部電池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries
```

*   獲取儲能集裝箱的單個電池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   新建儲能集裝箱電池

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":300,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries
```

*   更新儲能集裝箱電池

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":500,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries/1
```

*   刪除儲能集裝箱電池

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   獲取儲能集裝箱的全部電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids
```

*   獲取儲能集裝箱的單個電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   新建儲能集裝箱電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids
```

*   更新儲能集裝箱電網

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids/1
```

*   刪除儲能集裝箱電網

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   新建儲能集裝箱空調（HVAC）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs
```

*   獲取儲能集裝箱的全部空調

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs
```

*   獲取儲能集裝箱的單個空調

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   更新儲能集裝箱空調

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs/1
```

*   刪除儲能集裝箱空調

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   新建儲能集裝箱消防系統

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols
```

*   獲取儲能集裝箱的全部消防系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols
```

*   獲取儲能集裝箱的單個消防系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   更新儲能集裝箱消防系統

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   刪除儲能集裝箱消防系統

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   獲取儲能集裝箱的全部負載

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads
```

*   獲取儲能集裝箱的單個負載

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   新建儲能集裝箱負載

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads
```

*   更新儲能集裝箱負載

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads/1
```

*   刪除儲能集裝箱負載

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   獲取儲能集裝箱的全部變流系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   獲取儲能集裝箱的單個變流系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   新建儲能集裝箱變流系統

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":null,\"device_status_point_id\":null,\"control_mode_point_id\":null,\"total_ac_active_power_point_id\":null,\"total_ac_reactive_power_point_id\":null,\"total_ac_apparent_power_point_id\":null,\"total_ac_power_factor_point_id\":null,\"ac_frequency_point_id\":null,\"phase_a_active_power_point_id\":null,\"phase_b_active_power_point_id\":null,\"phase_c_active_power_point_id\":null,\"phase_a_reactive_power_point_id\":null,\"phase_b_reactive_power_point_id\":null,\"phase_c_reactive_power_point_id\":null,\"phase_a_apparent_power_point_id\":null,\"phase_b_apparent_power_point_id\":null,\"phase_c_apparent_power_point_id\":null,\"ab_voltage_point_id\":null,\"bc_voltage_point_id\":null,\"ca_voltage_point_id\":null,\"ab_current_point_id\":null,\"bc_current_point_id\":null,\"ca_current_point_id\":null,\"phase_a_voltage_point_id\":null,\"phase_b_voltage_point_id\":null,\"phase_c_voltage_point_id\":null,\"phase_a_current_point_id\":null,\"phase_b_current_point_id\":null,\"phase_c_current_point_id\":null,\"pcs_module_temperature_point_id\":null,\"pcs_ambient_temperature_point_id\":null,\"a1_module_temperature_point_id\":null,\"b1_module_temperature_point_id\":null,\"c1_module_temperature_point_id\":null,\"a2_module_temperature_point_id\":null,\"b2_module_temperature_point_id\":null,\"c2_module_temperature_point_id\":null,\"air_inlet_temperature_point_id\":null,\"air_outlet_temperature_point_id\":null,\"dc_power_point_id\":null,\"dc_voltage_point_id\":null,\"dc_current_point_id\":null}}" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   更新儲能集裝箱變流系統

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":60,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":6,\"device_status_point_id\":7,\"control_mode_point_id\":8,\"total_ac_active_power_point_id\":9,\"total_ac_reactive_power_point_id\":10,\"total_ac_apparent_power_point_id\":11,\"total_ac_power_factor_point_id\":12,\"ac_frequency_point_id\":13}}" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   刪除儲能集裝箱變流系統

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   獲取儲能集裝箱的全部時段計劃

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules
```

*   新建儲能集裝箱時段計劃

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules
```

*   獲取儲能集裝箱的單個時段計劃

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

*   更新儲能集裝箱時段計劃

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules/1
```

*   刪除儲能集裝箱時段計劃

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

### 核心/儲能電站 Ⓔ

*   獲取全部儲能電站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations
```

*   根據 ID 獲取儲能電站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1
```

*   新建儲能電站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations
```

*   更新儲能電站

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations/1
```

*   根據 ID 刪除儲能電站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/2
```

*   獲取儲能電站的全部集裝箱

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers
```

*   為儲能電站綁定集裝箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_storage_container_id\":1}}" {base_url}/energystoragepowerstations/1/containers
```

*   從儲能電站移除集裝箱

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers/1
```

*   獲取儲能電站的全部用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users
```

*   為儲能電站綁定用戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/energystoragepowerstations/1/users
```

*   從儲能電站移除用戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users/1
```

*   根據 ID 導出儲能電站為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/export
```

*   從 JSON 導入儲能電站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"7297cfc1-8978-487b-a14b-fedb9b3525f5\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/energystoragepowerstations/import
```

*   克隆儲能電站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/clone
```


### 核心/設備

*   獲取全部設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments
```

*   新建設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments
```

*   根據 ID 獲取設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1
```

*   根據 ID 更新設備

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments/1
```

*   根據 ID 刪除設備

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/4
```

*   為設備綁定計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":3,\"is_output\":false}}" {base_url}/equipments/1/meters
```

*   獲取設備的全部計量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters
```

*   從設備移除計量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters/1
```

*   為設備綁定離線表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/offlinemeters
```

*   獲取設備的全部離線表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/offlinemeters
```

*   從設備移除離線表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/offlinemeters/1
```

*   獲取設備的全部參數

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters
```

*   獲取設備的單個參數

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/2
```

*   為設備創建點類型參數

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   更新設備的點類型參數

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/14
```

*   為設備創建常量類型參數

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   更新設備的常量類型參數

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/25
```

*   為設備創建分數類型參數

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters
```

*   更新設備的分數類型參數

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters/24
```

*   從設備刪除參數

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/16
```

*   為設備綁定虛擬表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/virtualmeters
```

*   獲取設備的全部虛擬表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/virtualmeters
```

*   從設備移除虛擬表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/virtualmeters/1
```

*   獲取與設備關聯的全部命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/commands
```

*   為設備綁定命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/equipments/1/commands
```

*   從設備解綁命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/commands/3
```

*   根據 ID 導出設備為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/export
```

*   從 JSON 導入設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"設備_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"電\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"離線表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"energy_category\":{\"id\":1,\"name\":\"電\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虛擬表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"energy_category\":{\"id\":1,\"name\":\"電\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/equipments/import
```

*   根據 ID 克隆設備

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/clone
```


### 核心/網關

*   獲取全部網關

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways
```

*   根據 ID 獲取網關

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1
```

*   新建設備網關

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway 3\",\"description\":\"Gateway 3\"}}" {base_url}/gateways
```

*   根據 ID 刪除網關

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/3
```

*   根據 ID 更新網關

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway #3\",\"description\":\"Gateway #3\"}}" {base_url}/gateways/3
```

*   獲取網關下的全部數據源

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/datasources
```

*   根據 ID 導出網關為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/export
```

*   從 JSON 導入網關

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Gateway10\",\"description\":null}" {base_url}/gateways/import
```

*   克隆網關

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/clone
```


### 核心/知識文件

*   獲取全部知識文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles
```

*   根據 ID 獲取知識文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   上傳知識文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/knowledgefiles
```

*   根據 ID 刪除知識文件

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   根據 ID 恢復知識文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1/restore
```


### 核心/菜單

*   獲取全部菜單

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus
```

*   根據 ID 獲取菜單

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100
```

*   更新菜單

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"is_hidden\":true}}" {base_url}/menus/100
```

*   獲取指定菜單的全部子菜單

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100/children
```

*   獲取 Web UI 全部菜單

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/web
```


### 核心/計量表

*   獲取全部計量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters
```

*   根據 ID 獲取計量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1
```

*   新建計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"PM20\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空調用電\"}}" {base_url}/meters
```

*   更新計量表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"PM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空調用電\"}}" {base_url}/meters/4
```

*   根據 ID 刪除計量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/4
```

*   獲取某計量表的全部子表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/submeters
```

*   為計量表綁定點位

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"3\"}}" {base_url}/meters/1/points
```

*   獲取與計量表關聯的全部點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/points
```

*   從計量表解綁點位

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/points/3
```

*   獲取與計量表關聯的全部命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/commands
```

*   為計量表綁定命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/meters/1/commands
```

*   從計量表解綁命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/commands/3
```

*   根據 ID 導出計量表為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/export
```

*   克隆計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/meters/1/clone
```

*   從 JSON 導入計量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"電\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"cost_center\":{\"id\":1,\"name\":\"test\",\"uuid\":\"76d86222-96c5-4653-8162-bfbcd7edd5ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用電\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"master_meter\":null,\"description\":\"meter1\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}" {base_url}/meters/import
```


### 核心/微電網 Ⓔ

*   獲取全部微電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids
```

*   根據 ID 獲取微電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1
```

*   新建微電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/microgrids
```

*   更新微電網

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/microgrids/1
```

*   根據 ID 導出微電網為 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/export
```

*   從 JSON 導入微電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":300,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"serial_number\":\"S1234567890\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/microgrids/import
```

*   克隆微電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/clone
```

*   根據 ID 刪除微電網

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/3
```

*   獲取微電網的全部傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/sensors
```

*   為微電網綁定傳感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/microgrids/1/sensors
```

*   從微電網移除傳感器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/sensors/1
```

*   獲取微電網的全部電池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries
```

*   獲取微電網電池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries/1
```

*   新建微電網電池

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":10,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries
```

*   更新微電網電池

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":30,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries/1
```

*   刪除微電網電池

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/batteries/1
```

*   獲取微電網的全部充電樁

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers
```

*   獲取微電網充電樁

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers/1
```

*   新建微電網充電樁

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/evchargers
```

*   更新微電網充電樁

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/evchargers/1
```

*   刪除微電網充電樁

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/evchargers/1
```

*   獲取微電網的所有發電機

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators
```

*   獲取微電網的發電機

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators/1
```

*   新建微電網發電機

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/generators
```

*   更新微電網發電機

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/generators/1
```

*   刪除微電網發電機

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/generators/1
```

*   獲取微電網的全部電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids
```

*   獲取微電網電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids/1
```

*   新建微電網電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30}}" {base_url}/microgrids/1/grids
```

*   更新微電網電網

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":50}}" {base_url}/microgrids/1/grids/1
```

*   刪除微電網電網

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/grids/1
```

*   獲取微電網的全部熱泵

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps
```

*   獲取微電網的熱泵

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   創建微電網的熱泵

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":30}}" {base_url}/microgrids/1/heatpumps
```

*   更新微電網的熱泵

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":50}}" {base_url}/microgrids/1/heatpumps/1
```

*   刪除微電網的熱泵

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   獲取微電網的所有負荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads
```

*   獲取微電網的負荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   新建 微電網 負荷

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30}}" {base_url}/microgrids/1/loads
```

*   更新微電網的負荷

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":60}}" {base_url}/microgrids/1/loads/1
```

*   刪除微電網的負荷

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   獲取微電網的所有光伏

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics
```

*   獲取微電網的光伏

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   新建 微電網 光伏

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":30}}" {base_url}/microgrids/1/photovoltaics
```

*   更新微電網的光伏

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":50}}" {base_url}/microgrids/1/photovoltaics/1
```

*   刪除微電網的光伏

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   獲取微電網的所有功率變換系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems
```

*   獲取微電網的功率變換系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   新建 微電網 功率變換系統

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems
```

*   更新微電網的功率變換系統

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":50,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems/1
```

*   刪除微電網的功率變換系統

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   獲取微電網的所有Schedules

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules
```

*   獲取微電網的Schedule

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   更新微電網的Schedule

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules/1
```

*   新建 微電網 Schedule

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules
```

*   刪除微電網的Schedule

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   獲取微電網的所有用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users
```

*   新建將用戶綁定到微電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/microgrids/1/users
```

*   刪除用戶 from 微電網

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users/1
```


### 核心/通知

*   獲取通知

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications?startdatetime=2021-01-01T00:00:00&enddatetime=2021-01-02T00:00:00&status=unread
```

*   獲取根據ID獲取通知

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/1
```

*   更新通知

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/notifications/1
```

*   刪除通知（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/2
```


### 核心/離線電錶

*   獲取All的離線電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters
```

*   獲取根據ID獲取離線電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1
```

*   新建離線電錶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"OfflinePM21\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空調用電\"}}" {base_url}/offlinemeters
```

*   更新離線電錶

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"OfflinePM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空調用電\"}}" {base_url}/offlinemeters/3
```

*   刪除離線電錶（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/3
```

*   獲取根據ID導出離線電錶為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/export
```

*   新建從JSON導入離線電錶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"離線表101\",\"energy_category\":{\"id\":1,\"name\":\"電\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"energy_item\":{\"id\":1,\"name\":\"照明和插座用電\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"offlinemeter1\"}" {base_url}/offlinemeters/import
```

*   Clone的離線電錶（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/clone
```


### 核心/離線電錶 File

*   獲取All 離線電錶 Files

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles
```

*   獲取根據ID獲取離線電錶的File

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   上傳離線電錶文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/offlinemeterfiles
```

*   刪除離線電錶的File（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   獲取根據ID獲取Rstore 離線電錶 File

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1/restore
```


### 核心/Energy Plan File

*   獲取All的能源計劃文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles
```

*   獲取根據ID獲取能源計劃文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   上傳Energy的Plan文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: multipart/form-data" -d "暫無數據" {base_url}/energyplanfiles
```

*   刪除能源計劃文件（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   獲取根據ID獲取Rstore的能源計劃文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1/restore
```


### 核心/光伏電站 Ⓔ

*   獲取All的光伏電站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations
```

*   獲取根據ID獲取光伏電站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1
```

*   新建光伏電站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Harbin Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations
```

*   更新光伏電站

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations/1
```

*   刪除光伏電站（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/2
```

*   獲取根據ID導出光伏電站為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/export
```

*   新建從JSON導入光伏電站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Harbin Office\",\"uuid\":\"fd19346c-0e5a-4a1c-b3c3-3ef4fea9c1ea\",\"station_code\":\"XAAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"a0e79d2e-8756-457e-b1f2-4152e3591bff\"},\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}" {base_url}/photovoltaicpowerstations/import
```

*   Clone的光伏電站（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/clone
```

*   獲取光伏電站的所有電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids
```

*   獲取光伏電站的電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   新建 光伏電站 電網

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids
```

*   更新光伏電站的電網

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   刪除光伏電站的電網

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   獲取光伏電站的所有逆變器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors
```

*   獲取光伏電站的逆變器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   新建 光伏電站 逆變器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors
```

*   更新光伏電站的逆變器

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   刪除光伏電站的逆變器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   獲取光伏電站的所有負荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads
```

*   獲取光伏電站的負荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   新建 光伏電站 負荷

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads
```

*   更新光伏電站的負荷

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   刪除光伏電站的負荷

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   獲取光伏電站的所有用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users
```

*   新建將用戶綁定到儲能電站的Copy

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/photovoltaicpowerstations/1/users
```

*   刪除用戶 from 光伏電站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users/1
```


### 核心/點位

*   獲取All的點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points
```

*   獲取根據ID獲取點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/1
```

*   創建點位

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"ModbusPoint3\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_registers\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null}}" {base_url}/points
```

*   刪除點位（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/2
```

*   Update的點位（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"ModbusPoint1\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":100,\"offset_constant\":12,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_registers\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null,\"definitions\":null}}" {base_url}/points/1
```

*   Update 點位 Limits（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0}}" {base_url}/pointlimits/10001
```

*   獲取根據ID導出點位為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/export
```

*   新建從JSON導入點位

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Active Energy Import 1\",\"data_source\":{\"id\":1,\"name\":\"示例ModbusTCP數據源\",\"uuid\":\"b3ace9d4-b63b-419b-818f-0f6d1d0603a4\"},\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null,\"faults\":null,\"definitions\":null}" {base_url}/points/import
```

*   Clone的點位（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/clone
```


### 核心/權限

*   獲取All的權限

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges
```

*   更新權限的Data

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges/1
```

*   刪除權限

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges/1
```

*   創建權限

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges
```


### 核心/協議

*   獲取All的協議

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols
```

*   獲取根據ID獲取協議

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1
```

*   新建協議

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols
```

*   更新協議

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols/3
```

*   刪除協議（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/3
```

*   獲取根據ID導出協議為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/export
```

*   新建從JSON導入協議

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}" {base_url}/protocols/import
```

*   Clone的協議（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/clone
```


### 核心/規則 Ⓔ

*   獲取All的規則

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules
```

*   獲取根據ID獲取規則

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1
```

*   獲取根據ID導出規則為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/export
```

*   新建規則

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前電耗%s，超標%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules
```

*   新建從JSON導入規則

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Space Energy Consumption Over Limit_1\",\"category\":\"SPACE\",\"fdd_code\":\"SPACE01\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前電耗%s，超標%s。\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":null,\"is_run_immediately\":true}" {base_url}/rules/import
```

*   Clone的規則（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/clone
```

*   Run的規則（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/run
```

*   更新規則

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前電耗%s，超標%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules/2
```

*   刪除規則（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/2
```


### 核心/Sensor

*   獲取All的傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors
```

*   獲取根據ID獲取傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1
```

*   新建傳感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors
```

*   更新傳感器

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors/3
```

*   刪除傳感器（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/3
```

*   新建將點位綁定到傳感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/sensors/1/points
```

*   獲取根據ID獲取All 點位 associated with 傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points
```

*   刪除從傳感器解綁點位

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points/2
```

*   獲取根據ID導出傳感器為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/export
```

*   新建從JSON導入傳感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"傳感器123\",\"description\":\"sensor description\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},{\"id\":2,\"name\":\"Working hours counter\"}]}" {base_url}/sensors/import
```

*   Clone的傳感器（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/clone
```


### 核心/車間

*   獲取All的車間

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors
```

*   獲取根據ID獲取車間

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1
```

*   新建車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors
```

*   更新車間

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors/3
```

*   刪除車間（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/2
```

*   獲取車間的所有設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments
```

*   新建將設備綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/shopfloors/1/equipments
```

*   刪除設備 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments/1
```

*   獲取車間的所有電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters
```

*   新建將電錶綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/shopfloors/1/meters
```

*   刪除電錶 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters/1
```

*   獲取車間的所有離線電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters
```

*   新建將OfflineMeter綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/shopfloors/1/offlinemeters
```

*   刪除離線電錶 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters/1
```

*   獲取車間的所有點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points
```

*   新建將點位綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/shopfloors/1/points
```

*   刪除點位 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points/1
```

*   獲取車間的所有傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors
```

*   新建將傳感器綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/shopfloors/1/sensors
```

*   刪除傳感器 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors/1
```

*   獲取車間的所有虛擬電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters
```

*   新建將虛擬電錶綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/shopfloors/1/virtualmeters
```

*   刪除虛擬電錶 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters/1
```

*   獲取車間的所有工作日曆

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars
```

*   新建將工作日曆綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/shopfloors/1/workingcalendars
```

*   刪除工作日曆 from 車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars/6
```

*   新建將Command綁定到車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/shopfloors/1/commands
```

*   獲取車間的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands
```

*   刪除從車間解綁Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands/1
```

*   獲取根據ID導出車間為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/export
```

*   新建從JSON導入車間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"車間_1\",\"area\":99999.999,\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MyEMS Project\",\"equipments\":[{\"id\":1,\"name\":\"設備1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"離線表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虛擬表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"傳感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/shopfloors/import
```

*   Clone的車間（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/clone
```


### 核心/空間

*   獲取All的空間

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces
```

*   獲取根據ID獲取空間

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1
```

*   新建空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":1,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":false,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces
```

*   更新空間

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":2,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces/1
```

*   刪除空間（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/57
```

*   獲取空間的所有Children

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/children
```

*   獲取空間的所有聯合設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments
```

*   新建將聯合設備綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"combined_equipment_id\":1}}" {base_url}/spaces/1/combinedequipments
```

*   刪除聯合設備 from 空間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments/1
```

*   獲取空間的所有配電系統

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems
```

*   新建將配電系統綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"distribution_system_id\":1}}" {base_url}/spaces/1/distributionsystems
```

*   刪除從空間解綁配電系統

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems/1
```

*   獲取空間的所有能源流向圖

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams
```

*   新建將能源流向圖綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_flow_diagram_id\":1}}" {base_url}/spaces/1/energyflowdiagrams
```

*   刪除從空間解綁能源流向圖

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams/1
```

*   獲取空間的所有儲能電站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations
```

*   新建將儲能電站綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"energy_storage_power_station_id\":1}}" {base_url}/spaces/1/energystoragepowerstations
```

*   刪除從空間解綁儲能電站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations/1
```

*   獲取空間的所有設備

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments
```

*   新建將設備綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/spaces/1/equipments
```

*   刪除從空間解綁設備

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments/1
```

*   獲取空間的所有電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters
```

*   新建將電錶綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/spaces/1/meters
```

*   刪除從空間解綁電錶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters/1
```

*   獲取空間的所有微電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids
```

*   新建將微電網綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/spaces/1/microgrids
```

*   刪除從空間解綁微電網

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids/1
```

*   獲取空間的所有離線電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters
```

*   新建將OfflineMeter綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/spaces/1/offlinemeters
```

*   刪除從空間解綁離線電錶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters/1
```

*   獲取空間的所有光伏電站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations
```

*   新建將光伏電站綁定到空間的Copy

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"photovoltaic_power_station_id\":1}}" {base_url}/spaces/1/photovoltaicpowerstations
```

*   刪除從空間解綁光伏電站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations/1
```

*   獲取空間的所有點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   新建將點位綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/spaces/1/points
```

*   刪除從空間解綁點位

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/points/3
```

*   獲取空間的所有傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors
```

*   新建將傳感器綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/spaces/1/sensors
```

*   刪除從空間解綁傳感器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors/1
```

*   獲取空間的所有車間

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors
```

*   新建將車間綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"shopfloor_id\":1}}" {base_url}/spaces/1/shopfloors
```

*   刪除從空間解綁車間

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors/1
```

*   獲取空間的所有門店

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores
```

*   新建將門店綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"store_id\":1}}" {base_url}/spaces/1/stores
```

*   刪除從空間解綁門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores/1
```

*   獲取空間的所有租戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants
```

*   新建將租戶綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"tenant_id\":1}}" {base_url}/spaces/1/tenants
```

*   刪除從空間解綁租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants/1
```

*   獲取空間的所有虛擬電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   新建將虛擬電錶綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/spaces/1/virtualmeters
```

*   刪除從空間解綁虛擬電錶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters/1
```

*   獲取空間的Tree的用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/tree
```

*   獲取Energy Categories的all 電錶 in 空間 Tree

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/treemetersenergycategories
```

*   獲取空間的所有工作日曆

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars
```

*   新建將工作日曆綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/spaces/1/workingcalendars
```

*   刪除從空間解綁工作日曆

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars/6
```

*   獲取空間的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands
```

*   新建將Command綁定到空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/spaces/1/commands
```

*   刪除從空間解綁Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands/1
```

*   獲取根據ID導出空間為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/export
```

*   新建從JSON導入空間

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"1號樓_1\",\"parent_space_id\":{\"id\":1,\"name\":\"MyEMS\",\"uuid\":\"9dfb7cff-f19f-4a1e-8c79-3adf6425bfd9\"},\"area\":88888.888,\"timezone\":{\"id\":56,\"name\":\"China Standard Time\",\"utc_offset\":\"+08:00\"},\"is_input_counted\":true,\"is_output_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"latitude\":39.915119,\"longitude\":116.403963,\"description\":\"MyEMS Space\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"離線表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虛擬表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"shopfloors\":[{\"id\":1,\"name\":\"車間1\",\"uuid\":\"d03837fd-9d30-44fe-9443-154f7c7e15f1\"}],\"combined_equipments\":null,\"equipments\":null,\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"傳感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"tenants\":[{\"id\":1,\"name\":\"Starbucks星巴克\",\"uuid\":\"6b0da806-a4cd-431a-8116-2915e90aaf8b\"}],\"stores\":[{\"id\":1,\"name\":\"麥當勞\",\"uuid\":\"d8a24322-4bab-4ba2-aedc-5d55a84c3db8\"}],\"working_calendars\":null}" {base_url}/spaces/import
```

*   Clone的空間（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/clone
```


### 核心/門店

*   獲取All的Sotres

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores
```

*   獲取根據ID獲取門店

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1
```

*   新建門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"麥當勞(新王府井店)\",\"address\":\"北京市東城區王府井大街200號工美大廈1層010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores
```

*   更新門店

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"麥當勞(新王府井店)\",\"address\":\"北京市東城區王府井大街200號工美大廈1層010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores/3
```

*   刪除門店（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/3
```

*   獲取門店 按 ID的所有電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters
```

*   新建將電錶綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/stores/1/meters
```

*   刪除電錶 from 門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters/1
```

*   獲取門店的所有離線電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters
```

*   新建將OfflineMeter綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/stores/1/offlinemeters
```

*   刪除離線電錶 from 門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters/1
```

*   獲取門店 按 ID的所有點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points
```

*   新建將點位綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/stores/1/points
```

*   刪除點位 from 門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points/1
```

*   獲取門店 按 ID的所有傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors
```

*   新建將傳感器綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/stores/1/sensors
```

*   刪除傳感器 from 門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors/1
```

*   獲取門店 按 ID的所有虛擬電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters
```

*   新建將虛擬電錶綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/stores/1/virtualmeters
```

*   刪除虛擬電錶 from 門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters/1
```

*   獲取門店 按 ID的所有工作日曆

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars
```

*   新建將工作日曆綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/stores/1/workingcalendars
```

*   刪除工作日曆 from 門店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars/6
```

*   獲取門店的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands
```

*   新建將Command綁定到門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/stores/1/commands
```

*   刪除從門店解綁Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands/1
```

*   Clone的門店（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/clone
```

*   獲取根據ID導出門店為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/export
```

*   新建從JSON導入門店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"麥當勞_1\",\"address\":\"北京市東城區東打磨廠街7號\",\"latitude\":39.899493,\"longitude\":116.412041,\"area\":500,\"store_type\":{\"id\":1,\"name\":\"餐飲\",\"uuid\":\"494d7d5e-e139-4629-b957-99ea4caf0401\"},\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MacDonalds\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"離線表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虛擬表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"傳感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/stores/import
```


### 核心/StoreType

*   獲取All 門店 Types

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes
```

*   獲取根據ID獲取門店的Type

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/1
```

*   新建門店的Type

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Car\",\"description\":\"汽車\",\"simplified_code\":\"CA\"}}" {base_url}/storetypes
```

*   更新門店的Type

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Auto\",\"description\":\"汽車\",\"simplified_code\":\"AT\"}}" {base_url}/storetypes/4
```

*   刪除門店的Type（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/4
```


### 核心/SVG Ⓔ

*   獲取All的SVG

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs
```

*   獲取根據ID獲取SVG

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1
```

*   創建SVG

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例SVG圖形1\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs
```

*   SVG（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/2
```

*   Update的SVG（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"示例SVG圖形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Three separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs/1
```

*   獲取根據ID導出SVG為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/export
```

*   新建從JSON導入SVG

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"示例SVG圖形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo SVG\"}" {base_url}/svgs/import
```

*   Clone的SVG（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/clone
```


### 核心/費率

*   獲取All的費率

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs
```

*   獲取根據ID獲取費率

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1
```

*   創建費率的（Time的Use）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new2020分時電價1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦時\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs
```

*   更新費率的（time的use）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new2020分時電價1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦時\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.456},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs/18
```

*   刪除費率

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/18
```

*   獲取根據ID導出費率為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/export
```

*   新建從JSON導入費率

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"2024分時電價1-7\",\"energy_category\":{\"id\":1,\"name\":\"電\"},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦時\",\"valid_from\":\"2024-01-01T00:00:00\",\"valid_through\":\"2024-06-30T23:59:59\",\"timeofuse\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}" {base_url}/tariffs/import
```

*   Clone的費率（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/clone
```


### 核心/租戶

*   獲取All的租戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants
```

*   獲取根據ID獲取租戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1
```

*   新建租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Starbucks\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2021-01-01T00:00:00\",\"lease_end_datetime\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants
```

*   更新租戶

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Hermes 愛馬仕\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3 L4 L5\",\"rooms\":\"1201b+2247+3F\",\"area\":818.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime_utc\":\"2021-01-01T00:00:00\",\"lease_end_datetime_utc\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants/2
```

*   刪除租戶（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/2
```

*   獲取租戶 按 ID的所有電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters
```

*   新建將電錶綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/tenants/1/meters
```

*   刪除電錶 from 租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters/1
```

*   獲取租戶的所有離線電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters
```

*   新建將OfflineMeter綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/tenants/1/offlinemeters
```

*   刪除離線電錶 from 租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters/1
```

*   獲取租戶 按 ID的所有點位

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points
```

*   新建將點位綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/tenants/1/points
```

*   刪除點位 from 租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points/1
```

*   獲取租戶 按 ID的所有傳感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors
```

*   新建將傳感器綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/tenants/1/sensors
```

*   刪除傳感器 from 租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors/1
```

*   獲取租戶 按 ID的所有虛擬電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters
```

*   新建將虛擬電錶綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/tenants/1/virtualmeters
```

*   刪除虛擬電錶 from 租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters/1
```

*   獲取租戶 按 ID的所有工作日曆

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars
```

*   新建將工作日曆綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/tenants/1/workingcalendars
```

*   刪除工作日曆 from 租戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars/6
```

*   獲取租戶的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands
```

*   新建將Command綁定到租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/tenants/1/commands
```

*   刪除從租戶解綁Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands/1
```

*   獲取根據ID導出租戶為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/export
```

*   新建從JSON導入租戶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Starbucks星巴克_1\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type\":{\"id\":9,\"name\":\"非整層辦公租戶\",\"uuid\":\"55bbcba7-d8a0-44a0-9a9f-2f085e3cb044\"},\"is_key_tenant\":true,\"is_input_counted\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2020-01-01T00:00:00\",\"lease_end_datetime\":\"2023-01-01T00:00:00\",\"is_in_lease\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"my description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"計量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"離線表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虛擬表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"傳感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/tenants/import
```

*   Clone的租戶（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/clone
```


### 核心/TenantType

*   獲取All 租戶 Types

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes
```

*   獲取根據ID獲取租戶的Type

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/1
```

*   新建租戶的Type

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"辦公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes
```

*   更新租戶的Type

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"辦公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes/10
```

*   刪除租戶的Type（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/10
```


### 核心/短信

*   獲取短信 按 日期範圍

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   獲取根據ID獲取aText的Message

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/1
```

*   新建短信

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/textmessages
```

*   更新短信

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888899\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/textmessages/1000001
```

*   刪除短信（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/2
```


### 核心/Ticket Ⓔ

*   獲取All的Tickets

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00&status=all
```

*   獲取根據ID獲取Ticket

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/49
```

*   新建Ticket

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/tickets
```

*   更新Ticket

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{}}" {base_url}/tickets/1
```

*   Ticket（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/2
```


### 核心/時區

*   獲取All的時區

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones
```

*   獲取根據ID獲取時區

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones/1
```

*   更新時區

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"夏威夷標準時間\",\"description\":\"(GMT-10:00) Hawaii\",\"utc_offset\":\"-10:00\"}}" {base_url}/timezones/3
```


### 核心/用戶

*   獲取All的用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users
```

*   獲取根據ID獲取用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/1
```

*   新建用戶 （按 Administrator）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo\",\"display_name\":\"Demo\",\"email\":\"demo@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users
```

*   更新用戶登錄按的Username

```bash
curl -i -X PUT -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"administrator\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   刪除用戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/2
```

*   更新用戶的Profile

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"display_name\":\"Mr. Albert\",\"email\":\"albert@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users/2
```

*   更新用戶的Logout

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "暫無數據" {base_url}/users/logout
```

*   更新用戶 Change Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"old_password\":\"!MyEMS1\",\"new_password\":\"!MyEMS2\"}}" {base_url}/users/changepassword
```

*   Reset的Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"johnson\",\"password\":\"NewPassword2\"}}" {base_url}/users/resetpassword
```

*   更新用戶登錄按的Email

```bash
curl -i -X PUT -H "Content-Type: application/json" -d "{\"data\":{\"email\":\"administrator@myems.io\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   解鎖用戶

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/unlock/2
```

*   Forgot的Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"password\":\"!MyEMS2\",\"email\":\"demo@myems.io\",\"token\":\"100d4d9f1a262b3169bf5ca49d66121823856bec4d6b18b09ddeb0afbc14207246de906705e8788ae42633095eb1cad2eb991cd96f73b885cfa0b93569c1f34e\"}}" {base_url}/users/forgotpassword
```

*   獲取忘記密碼Expires Datetime 按 Email 和 Token

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/forgotpassword?email=demo@myems.io&token=1da65d0c141597b9d58adcba46001a119dc4ada3283049122e3f4f39b2fa7aa2182a3f48a0ddf0d0d631833041fa0f1f0873f68f664bd733f8a39512ff89123f
```

*   新建Forgot Password 郵件

```bash
curl -i -X POST -H "Content-Type: application/json" -d "{\"data\":{\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages
```

*   更新Forgot Password 郵件

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"recipient_name\":\"Demo\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"status\":\"new\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages/1
```

*   獲取All Forgot Password 郵件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages?startdatetime=2023-05-01T00:00:00&enddatetime=2023-05-31T00:00:00
```

*   獲取根據ID獲取Forgot的郵件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   Forgot Password 郵件（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   新建Register的用戶

```bash
curl -i -X POST -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo1\",\"display_name\":\"Demo1\",\"email\":\"demo1@myems.io\",\"password\":\"!MyEMS1\",\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\"}}" {base_url}/users/newusers
```

*   獲取All New Register 用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers
```

*   獲取根據ID獲取New Register 用戶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   更新New Register 用戶

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"demo2\",\"display_name\":\"Demo2\",\"email\":\"demo2@myems.io\"}}" {base_url}/users/newusers/2
```

*   New Register 用戶

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   審批New Register 用戶 （按 Administrator）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"is_admin\":true,\"is_read_only\":false,\"privilege_id\":1,\"account_expiration_datetime\":\"2024-05-31T16:00:00\",\"password_expiration_datetime\":\"2024-05-31T16:00:00\"}}" {base_url}/users/newusers/2/approve
```


### 核心/虛擬電廠 Ⓔ

*   獲取All的虛擬電廠

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants
```

*   獲取根據ID獲取虛擬電廠

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1
```

*   新建虛擬電廠

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing VPP\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/virtualpowerplants
```

*   更新虛擬電廠

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing VPP1\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"New\"}}" {base_url}/virtualpowerplants/1
```

*   刪除虛擬電廠（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/3
```

*   獲取虛擬電廠 按 ID的所有微電網

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids
```

*   新建將微電網綁定到虛擬電廠

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/virtualpowerplants/1/microgrids
```

*   刪除微電網 from 虛擬電廠

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids/1
```

*   獲取根據ID導出虛擬電廠為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/export
```

*   新建從JSON導入虛擬電廠

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing VPP_1\",\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"balancing_price_point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/virtualpowerplants/import
```

*   Clone的虛擬電廠（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/clone
```


### 核心/虛擬電錶

*   獲取All的虛擬電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters
```

*   獲取根據ID獲取虛擬電錶

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1
```

*   新建虛擬電錶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"VM10\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters
```

*   Update的虛擬電錶（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"VM11\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters/3
```

*   刪除虛擬電錶（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/3
```

*   獲取根據ID導出虛擬電錶為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/export
```

*   新建從JSON導入虛擬電錶

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"虛擬表12\",\"equation\":\"x1+x2+x3\",\"energy_category\":{\"id\":1,\"name\":\"電\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用電\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2+x3\",\"variables\":[{\"id\":1,\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1,\"meter_name\":\"計量表1\"},{\"id\":2,\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2,\"meter_name\":\"計量表2\"},{\"id\":3,\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3,\"meter_name\":\"計量表3\"}]}}" {base_url}/virtualmeters/import
```

*   Clone的虛擬電錶（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/clone
```


### 核心/網頁消息

*   獲取網頁消息 按 時間範圍

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   獲取All New 網頁消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessagesnew
```

*   更新All New 網頁消息 （Mark All As Read）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessagesnew
```

*   更新All New 網頁消息 （Acknowledge All）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"OK\"}}" {base_url}/webmessagesnew
```

*   獲取根據ID獲取網頁消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   新建網頁消息的TODO

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages
```

*   更新網頁消息的（Acknowledge）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"this is my reply\"}}" {base_url}/webmessages/1
```

*   更新網頁消息 （Mark As Read）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessages/1
```

*   刪除網頁消息（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   批量更新網頁消息 （Mark As Read）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```

*   Batch 網頁消息 按 IDs

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```


### 核心/微信消息

*   獲取微信消息 按 日期範圍

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   獲取根據ID獲取微信消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/1
```

*   新建微信消息

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"oia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/wechatmessages
```

*   更新微信消息

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"1ia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/wechatmessages/1000001
```

*   刪除微信消息（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/2
```


### 核心/風電場 Ⓔ

*   獲取All的風電場

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms
```

*   獲取根據ID獲取風電場

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1
```

*   新建風電場

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":600,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms
```

*   更新風電場

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms/1
```

*   刪除風電場（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/2
```

*   獲取根據ID導出風電場為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/export
```

*   新建從JSON導入風電場

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/windfarms/import
```

*   Clone的風電場（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/clone
```


### 核心/工作日曆

*   獲取All的工作日曆

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars
```

*   獲取根據ID獲取工作日曆

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1
```

*   新建工作日曆

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"new_working_calendar\",\"description\":\"test\"}}" {base_url}/workingcalendars
```

*   更新工作日曆

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"測試日曆\",\"description\":\"test_update\"}}" {base_url}/workingcalendars/2
```

*   刪除工作日曆（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/8
```

*   獲取根據ID導出工作日曆為JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/export
```

*   Clone的工作日曆（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/clone
```

*   新建從JSON導入工作日曆

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"new_working_calendar_1\",\"description\":\"test\",\"non_working_days\":[{\"id\":2,\"working_calendar_id\":1,\"date_local\":\"2023-03-01\",\"description\":\"test\"},{\"id\":3,\"working_calendar_id\":1,\"date_local\":\"2023-03-02\",\"description\":\"test\"},{\"id\":4,\"working_calendar_id\":1,\"date_local\":\"2023-03-03\",\"description\":\"test\"},{\"id\":5,\"working_calendar_id\":1,\"date_local\":\"2023-03-04\",\"description\":\"test\"},{\"id\":6,\"working_calendar_id\":1,\"date_local\":\"2023-03-08\",\"description\":\"test\"},{\"id\":14,\"working_calendar_id\":1,\"date_local\":\"2023-03-09\",\"description\":\"test\"},{\"id\":15,\"working_calendar_id\":1,\"date_local\":\"2023-03-10\",\"description\":\"test\"},{\"id\":16,\"working_calendar_id\":1,\"date_local\":\"2023-03-11\",\"description\":\"test\"},{\"id\":17,\"working_calendar_id\":1,\"date_local\":\"2023-03-12\",\"description\":\"test\"},{\"id\":18,\"working_calendar_id\":1,\"date_local\":\"2023-03-13\",\"description\":\"test\"}]}" {base_url}/workingcalendars/import
```


### 核心/非工作日

*   獲取All 非工作日 按 工作日曆 ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/2/nonworkingdays
```

*   獲取根據ID獲取非工作日

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/42
```

*   新建非工作日 按 工作日曆 ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"description\":\"test\"}}" {base_url}/workingcalendars/1/nonworkingdays
```

*   Update的非工作日（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"working_calendar_id\":2,\"description\":\"test_update3\"}}" {base_url}/nonworkingdays/42
```

*   刪除非工作日（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/41
```


### 核心/API KEY

*   新建API密鑰

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2023-06-30T12:00:00\"}}" {base_url}/apikeys
```

*   獲取根據ID獲取API密鑰

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/1
```

*   獲取All的API密鑰

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys
```

*   Update的API密鑰（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2024-06-06T12:00:00\"}}" {base_url}/apikeys/1
```

*   API密鑰（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/3
```

### Reports
*   獲取高級報表文件的Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports?reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取高級報表文件 按 ID Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   刪除高級報表文件 按 ID Ⓔ
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   獲取聯合設備的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取聯合設備 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取聯合設備的二氧化碳排放報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 二氧化碳排放報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的對比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取聯合設備 對比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?quickmode=true&combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取聯合設備的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的效率報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 效率報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的能源分類報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 能源分類報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的能源分項報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 能源分項報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的收入報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 收入報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備 負荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 負荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的輸出報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 輸出報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentplan?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取聯合設備的統計報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取聯合設備 統計報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取儀表盤
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/dashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取配電系統的Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/distributionsystem?distributionsystemid=1
```

*   獲取能源流向圖的Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energyflowdiagram?energyflowdiagramid=1&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取儲能電站 儀表盤 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取儲能電站 詳情報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdetails?id=1
```

*   獲取儲能電站 列表報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationlist
```

*   獲取儲能電站 能耗報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   獲取儲能電站 賬單報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   獲取儲能電站 碳排放報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   獲取設備的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取設備 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取設備的對比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取設備 對比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?quickmode=true&equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取設備的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備的效率報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 效率報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備的能源分類報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 能源分類報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備的能源分項報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 能源分項報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備的收入報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 收入報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備 負荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 負荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備的輸出報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 輸出報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取設備 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentplan?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備的統計報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取設備 統計報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取電錶的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN
```

*   獲取電錶 批量分析報表 （QuickMode）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN&quickmode=true
```

*   獲取電錶的二氧化碳排放報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取電錶 二氧化碳排放報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取電錶的Comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00&periodtype=hourly
```

*   獲取電錶 對比報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00
```

*   獲取電錶的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取電錶 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取電錶的能耗報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取電錶 能耗報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取電錶 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取電錶 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterplan?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取電錶 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取電錶的實時報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1
```

*   獲取電錶 實時報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1&quickmode=true
```

*   獲取電錶的子表平衡報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取電錶 子表平衡報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取電錶的趨勢報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertrend?meterid=6&reportingperiodstartdatetime=2020-09-10T00:00:00&reportingperiodenddatetime=2020-09-11T00:00:00
```

*   獲取電錶 趨勢報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 21895d99b1157e665664a729be6fd8f71471c78d2ee797e57c32442f4d5084b0fcbbd6f799002c9b4a0a41d580fcdd64899f158f1ace0931da1e31bd81958294" {base_url}/reports/metertrend?quickmode=true&reportingperiodenddatetime=2024-12-18T00:00:00&meterid=6&reportingperiodstartdatetime=2024-12-10T00:00:00
```

*   獲取電錶的跟蹤報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59
```

*   獲取電錶 跟蹤報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59&quickmode=true
```

*   獲取微電網 儀表盤 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取微電網 能耗報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   獲取微電網 賬單報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   獲取微電網 碳排放報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   獲取微電網 詳情報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddetails?microgridid=1
```

*   獲取微電網 列表報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridlist
```

*   獲取離線電錶的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取離線電錶 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取離線電錶的二氧化碳排放報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取離線電錶 二氧化碳排放報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取離線電錶的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取離線電錶 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取離線電錶的能耗報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取離線電錶 能耗報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取離線電錶 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取離線電錶 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterplan?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取離線電錶 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取點位的實時報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/pointrealtime
```

*   獲取車間的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取車間 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取車間的對比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取車間 對比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?quickmode=true&shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取車間的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取車間的儀表盤
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloordashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間的能源分類報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 能源分類報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取車間的能源分項報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 能源分項報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取車間 負荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 負荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取車間 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorplan?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取車間的統計報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取車間 統計報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的效率報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 效率報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的能源分類報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 能源分類報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的能源分項報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 能源分項報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的收入報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 收入報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間 負荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 負荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的輸出報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 輸出報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceplan?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取空間的統計報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取空間 統計報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取門店的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取門店 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取門店的對比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取門店 對比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?quickmode=true&storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取門店的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取門店的儀表盤
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storedashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店的能源分類報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 能源分類報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取門店的能源分項報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 能源分項報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取門店 負荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 負荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取門店 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeplan?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取門店的統計報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取門店 統計報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取租戶的批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取租戶 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取租戶 Bill Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbill?tenantid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取租戶的對比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取租戶 對比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?quickmode=true&tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取租戶的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取租戶的儀表盤
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶的能源分類報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 能源分類報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取租戶的能源分項報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 能源分項報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取租戶 負荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 負荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取租戶 節能報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 計劃報表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantplan?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 節能報表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取租戶的統計報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取租戶 統計報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取Vitrual 電錶 批量分析報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   獲取Vitrual 電錶 批量分析報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   獲取虛擬電錶的二氧化碳排放報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取虛擬電錶 二氧化碳排放報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取虛擬電錶的對比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取虛擬電錶 對比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   獲取虛擬電錶的成本報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取虛擬電錶 成本報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取虛擬電錶的能耗報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取虛擬電錶 能耗報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   獲取虛擬電錶的節能報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取虛擬電錶的計劃報表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterplan?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   獲取虛擬電錶 節能報表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   新建離線電錶的修改數值
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-Type: application/json" -d "{\"meter\":1,\"value\":[[\"2023-07-01\",\"123\"],[\"2023-07-02\",\"123\"]]}" {base_url}/reports/offlinemeterinput
```

*   獲取離線電錶的數值列表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metermonthgenerate?offlinemeterid=1&reportingperiodstartdatetime=2023-07-01T00:00:00&reportingperiodenddatetime=2023-07-31T23:59:59
```

