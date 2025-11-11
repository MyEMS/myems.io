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
在 Postman 中查看：使用 Postman 导入文件 MyEMS.postman_collection.json

*   获取版本信息
```bash
curl -i -X GET -H "User-UUID: YOUR-USER-UUID" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-类型: application/json" {base_url}/version
```

### 核心/高级报表配置 Ⓔ
*   获取全部高级报表配置

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports
```

*   根据 ID 获取高级报表配置

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1
```

*   根据 ID 导出高级报表配置为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/export
```

*   创建高级报表配置

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Space Daily Report1\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports
```

*   从 JSON 导入高级报表配置

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Space Daily Report2\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}" {base_url}/advancedreports/import
```

*   根据 ID 克隆高级报表配置

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/clone
```

*   根据 ID 运行高级报表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/1/run
```

*   更新高级报表配置

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Space Monthly Report\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-01T00:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports/1
```

*   运行高级报表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{}}" {base_url}/advancedreports/1/run
```

*   删除高级报表配置

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/advancedreports/2
```


### 核心/组合设备

*   获取全部组合设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments
```

*   创建组合设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments
```

*   根据 ID 获取组合设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1
```

*   根据 ID 更新组合设备

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Combined Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXXs\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments/1
```

*   根据 ID 克隆组合设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{}}" {base_url}/combinedequipments/1
```

*   根据 ID 删除组合设备

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/6
```

*   为组合设备绑定设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/combinedequipments/1/equipments
```

*   获取组合设备的所有设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments
```

*   从组合设备移除设备

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/equipments/1
```

*   获取组合设备的所有计量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters
```

*   为组合设备绑定计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/meters
```

*   从组合设备移除计量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/meters/1
```

*   为组合设备绑定离线计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/offlinemeters
```

*   获取组合设备的所有离线计量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters
```

*   从组合设备移除离线计量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/offlinemeters/1
```

*   获取组合设备的所有参数

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters
```

*   获取组合设备的单个参数

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/1
```

*   为组合设备创建点类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   更新组合设备的点类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/1
```

*   为组合设备创建常量类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test constant parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters
```

*   更新组合设备的常量类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/2
```

*   为组合设备创建分数类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters
```

*   更新组合设备的分数类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters/3
```

*   从组合设备删除参数

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/parameters/16
```

*   为组合设备绑定虚拟计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/virtualmeters
```

*   获取组合设备的所有虚拟计量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters
```

*   从组合设备移除虚拟计量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/virtualmeters/1
```

*   获取与组合设备关联的所有命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands
```

*   为组合设备绑定命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/combinedequipments/1/commands
```

*   从组合设备解绑命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/commands/3
```

*   根据 ID 导出组合设备为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/export
```

*   从 JSON 导入组合设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"组合式设备_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"equipments\":[{\"id\":1,\"name\":\"设备1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":2,\"name\":\"manufacturer\",\"parameter_type\":\"constant\",\"constant\":\"York\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":3,\"name\":\"maintainer\",\"parameter_type\":\"constant\",\"constant\":\"Johnson Controls\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":4,\"name\":\"use life start\",\"parameter_type\":\"constant\",\"constant\":\"2016-01-01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":5,\"name\":\"use life end\",\"parameter_type\":\"constant\",\"constant\":\"2025-12-31\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":6,\"name\":\"model number\",\"parameter_type\":\"constant\",\"constant\":\"CH01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":7,\"name\":\"nominal cooling capacity\",\"parameter_type\":\"constant\",\"constant\":\"90.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":8,\"name\":\"nominal cooling input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":9,\"name\":\"nominal cooling cop\",\"parameter_type\":\"constant\",\"constant\":\"5\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":10,\"name\":\"nominal cooling operating current\",\"parameter_type\":\"constant\",\"constant\":\"120.000 A\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":11,\"name\":\"rated input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":12,\"name\":\"nominal chilled water flow rate\",\"parameter_type\":\"constant\",\"constant\":\"30 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":13,\"name\":\"nominal cooling water flow_rate\",\"parameter_type\":\"constant\",\"constant\":\"50 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":14,\"name\":\"status\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":15,\"name\":\"inlet chilled water temperature\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":2,\"name\":\"Working hours counter\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":16,\"name\":\"chilled_water instantaneous flow rate\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":3,\"name\":\"Current a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":17,\"name\":\"instantaneous power\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":4,\"name\":\"Active Power a\"},\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/combinedequipments/import
```

*   根据 ID 克隆组合设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/combinedequipments/1/clone
```


### 核心/联系人

*   获取全部联系人

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts
```

*   根据 ID 获取联系人

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/1
```

*   新建联系人

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888888\",\"description\":\"contact description\"}}" {base_url}/contacts
```

*   更新联系人

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888899\",\"description\":\"contact description\"}}" {base_url}/contacts/3
```

*   根据 ID 删除联系人

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/contacts/3
```


### 核心/命令

*   获取全部命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands
```

*   根据 ID 获取命令

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1
```

*   新建命令（不含 set_value）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"turn_off_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn off light\"}}" {base_url}/commands
```

*   新建命令（包含 set_value）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands
```

*   更新命令（不含 set_value）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1}\",\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   更新命令（包含 set_value）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   根据 ID 删除命令

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/7
```

*   根据 ID 发送命令

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"set_value\":2}}" {base_url}/commands/1/send
```

*   根据 ID 导出命令为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/export
```

*   从 JSON 导入命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"turn_up_light1\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}" {base_url}/commands/import
```

*   根据 ID 克隆命令

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/commands/1/clone
```


### 核心/控制模式

*   获取全部控制模式

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes
```

*   根据 ID 获取控制模式

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1
```

*   新建控制模式

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"CM11\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}}" {base_url}/controlmodes
```

*   更新控制模式

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"削峰填谷\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":-5}]}}" {base_url}/controlmodes/1
```

*   根据 ID 删除控制模式

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/11
```

*   根据 ID 导出控制模式为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/export
```

*   从 JSON 导入控制模式

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"自发自用\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}" {base_url}/controlmodes/import
```

*   根据 ID 克隆控制模式

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/controlmodes/1/clone
```

*   根据 ID 获取控制模式的全部时段

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" {base_url}/controlmodes/1/times
```


### 核心/成本中心

*   获取全部成本中心

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters
```

*   根据 ID 获取成本中心

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1
```

*   新建成本中心

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"动力中心\",\"external_id\":\"21829198980001\"}}" {base_url}/costcenters
```

*   更新成本中心

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"动力中心2\",\"external_id\":\"21829198980002\"}}" {base_url}/costcenters/1
```

*   根据 ID 删除成本中心

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/3
```

*   为成本中心绑定费率

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"tariff_id\":\"3\"}}" {base_url}/costcenters/1/tariffs
```

*   获取与成本中心关联的所有费率

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs
```

*   从成本中心解绑费率

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costcenters/1/tariffs/3
```


### 核心/成本文件

*   获取全部成本文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles
```

*   根据 ID 获取成本文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   上传成本文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/costfiles
```

*   根据 ID 删除成本文件

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/1
```

*   根据 ID 恢复成本文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/costfiles/2/restore
```


### 核心/数据修复文件

*   获取全部数据修复文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles
```

*   根据 ID 获取数据修复文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   上传数据修复文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/datarepairfiles
```

*   根据 ID 删除数据修复文件

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1
```

*   根据 ID 恢复数据修复文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datarepairfiles/1/restore
```


### 核心/数据源

*   获取全部数据源

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources
```

*   根据 ID 获取数据源

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1
```

*   新建数据源

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources
```

*   根据 ID 删除数据源

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/14
```

*   根据 ID 更新数据源

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.99\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources/1
```

*   根据数据源 ID 获取所有数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/1/points
```

*   根据 ID 导出数据源为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/16/export
```

*   从 JSON 导入数据源

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Modbus1\",\"gateway\":{\"id\":1,\"name\":\"Gateway1\",\"uuid\":\"dc681938-5053-8660-98ed-266c58227231\"},\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\",\"points\":[{\"name\":\"Active Energy Import 1\",\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null},{\"name\":\"Active Power  2\",\"object_type\":\"ANALOG_VALUE\",\"units\":\"kW\",\"high_limit\":999999999\",\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":209, \\"number_of_registers\\":2, \\"format\\":\\"=L\\", \\"byte_swap\\":true}\",\"description\":null}]}" {base_url}/datasources/import
```

*   克隆数据源

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/datasources/2/clone
```


### 核心/配电系统

*   获取全部配电系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems
```

*   根据 ID 获取配电系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1
```

*   新建配电系统

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"示例配电系统2\",\"svg_id\":1,\"description\":\"demo description\"}}" {base_url}/distributionsystems
```

*   根据 ID 删除配电系统

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/2
```

*   根据 ID 更新配电系统

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"示例配电系统1\",\"svg_id\":2,\"description\":\"demo description\"}}" {base_url}/distributionsystems/1
```

*   获取配电系统下的全部配电回路

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/distributioncircuits
```

*   根据 ID 导出配电系统为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/export
```

*   从 JSON 导入配电系统

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"示例配电系统_1\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"demo distribution system\",\"circuits\":[{\"id\":1,\"name\":\"AHa01\",\"uuid\":\"52f7abe1-ba0e-47a6-a327-4faac42a1d11\",\"distribution_room\":\"1ES\",\"switchgear\":\"AHa01\",\"peak_load\":5100,\"peak_current\":1250,\"customers\":\"11#电源进线1WHj2\",\"meters\":\"AHa01\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}]}" {base_url}/distributionsystems/import
```

*   根据 ID 克隆配电系统

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributionsystems/1/clone
```


### 核心/配电回路

*   获取全部配电回路

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits
```

*   根据 ID 获取配电回路

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1
```

*   新建配电回路

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"51W92\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室应急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits
```

*   根据 ID 删除配电回路

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/2
```

*   根据 ID 更新配电回路

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"51W91\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"地下室应急照明\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits/1
```

*   为配电回路绑定数据点

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/distributioncircuits/1/points
```

*   获取配电回路的所有数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points
```

*   从配电回路解绑数据点

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/distributioncircuits/1/points/2
```


### 核心/邮件服务器

*   获取全部邮件服务器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers
```

*   新建邮件服务器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"host\":\"smtp.126.com\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@126.com\"}}" {base_url}/emailservers
```

*   根据 ID 获取邮件服务器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/1
```

*   更新邮件服务器

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"host\":\"smtp.myems.io\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@myems.io\"}}" {base_url}/emailservers/1
```

*   根据 ID 删除邮件服务器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailservers/2
```


### 核心/邮件消息

*   按时间范围获取邮件消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages?startdatetime=2021-10-01T00:00:00&enddatetime=2021-10-11T00:00:00
```

*   根据 ID 获取邮件消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/1
```

*   新建邮件消息

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/emailmessages
```

*   更新邮件消息

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/emailmessages/1
```

*   根据 ID 删除邮件消息

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/emailmessages/2
```


### 核心/能源种类

*   获取全部能源种类

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories
```

*   根据 ID 获取能源种类

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/1
```

*   新建能源种类

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"柴油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories
```

*   更新能源种类

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"汽油\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories/12
```

*   删除能源种类

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energycategories/12
```


### 核心/能流图

*   获取全部能流图

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams
```

*   根据 ID 获取能流图

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1
```

*   新建能流图

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow\"}}" {base_url}/energyflowdiagrams
```

*   更新能流图

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Energy Flow Diagram\"}}" {base_url}/energyflowdiagrams/2000000
```

*   删除能流图

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/2000000
```

*   获取能流图的全部节点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/nodes
```

*   新建能流图节点

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"10KV#3\"}}" {base_url}/energyflowdiagrams/1000000/nodes
```

*   更新能流图节点

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"10KV Input #1\"}}" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   删除能流图节点

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/nodes/3000000
```

*   获取能流图的全部连线

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/links
```

*   新建能流图连线

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000008,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links
```

*   更新能流图连线

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"source_node_id\":1000000,\"target_node_id\":1000009,\"meter_uuid\":\"eb78f7f9-f26f-463b-92fa-d9daf5b3651c\"}}" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   删除能流图连线

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1000000/links/3000000
```

*   根据 ID 导出能流图为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/export
```

*   从 JSON 导入能流图

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"id\":1,\"name\":\"示例能流图_3\",\"uuid\":\"3ccbc9c6-9575-4212-a63a-a688d1154302\",\"nodes\":[{\"id\":1,\"name\":\"10KV进线#1\"},{\"id\":2,\"name\":\"10KV进线#2\"},{\"id\":3,\"name\":\"租区\"},{\"id\":4,\"name\":\"公区\"},{\"id\":5,\"name\":\"酒店\"},{\"id\":6,\"name\":\"车库\"},{\"id\":7,\"name\":\"餐饮\"},{\"id\":8,\"name\":\"零售\"},{\"id\":9,\"name\":\"照明\"},{\"id\":10,\"name\":\"电梯\"}],\"links\":[{\"id\":1,\"source_node\":{\"id\":1,\"name\":\"10KV进线#1\"},\"target_node\":{\"id\":3,\"name\":\"租区\"},\"meter\":{\"type\":\"meter\",\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}}]}" {base_url}/energyflowdiagrams/import
```

*   根据 ID 克隆能流图

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyflowdiagrams/1/clone
```


### 核心/能耗分项

*   获取全部能耗分项

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems
```

*   获取单个能耗分项

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/1
```

*   新建能耗分项

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"租户用电\",\"energy_category_id\":1}}" {base_url}/energyitems
```

*   更新能耗分项

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"空调用\",\"energy_category_id\":1}}" {base_url}/energyitems/1
```

*   删除能耗分项

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyitems/4
```


### 核心/储能集装箱 Ⓔ

*   获取全部储能集装箱

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers
```

*   根据 ID 获取储能集装箱

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   根据 ID 导出储能集装箱为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/export
```

*   新建储能集装箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers
```

*   从 JSON 导入储能集装箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"9b963448-1235-4239-b0c9-c71d926cec5f\",\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"albert\",\"uuid\":\"076ea179-5a7e-4a48-9fcd-f452f95f5376\"},\"cost_center\":{\"id\":1,\"name\":\"动力中心\",\"uuid\":\"6fc174dc-9c57-4934-9896-9226e696dbf2\"},\"description\":\"Classic\",\"qrcode\":\"energystoragecontainer:9b963448-1235-4239-b0c9-c71d926cec5f\"}" {base_url}/energystoragecontainers/import
```

*   根据 ID 克隆储能集装箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/clone
```

*   更新储能集装箱

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"rated_capacity\":600,\"rated_power\":300,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic\"}}" {base_url}/energystoragecontainers/1
```

*   根据 ID 删除储能集装箱

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1
```

*   获取储能集装箱的全部电池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries
```

*   获取储能集装箱的单个电池

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   新建储能集装箱电池

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":300,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries
```

*   更新储能集装箱电池

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":500,\"rated_power\":100,\"nominal_voltage\":48}}" {base_url}/energystoragecontainers/1/batteries/1
```

*   删除储能集装箱电池

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/batteries/1
```

*   获取储能集装箱的全部电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids
```

*   获取储能集装箱的单个电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   新建储能集装箱电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids
```

*   更新储能集装箱电网

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/grids/1
```

*   删除储能集装箱电网

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/grids/1
```

*   新建储能集装箱空调（HVAC）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs
```

*   获取储能集装箱的全部空调

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs
```

*   获取储能集装箱的单个空调

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   更新储能集装箱空调

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"HVAC\",\"working_status_point_id\":1,\"indoor_fan_status_point_id\":2,\"outdoor_fan_status_point_id\":null,\"emergency_fan_status_point_id\":null,\"compressor_status_point_id\":null,\"electric_heating_status_point_id\":null,\"coil_temperature_point_id\":null,\"temperature_outside_point_id\":null,\"temperature_inside_point_id\":null,\"humidity_inside_point_id\":null,\"condensation_temperature_point_id\":null,\"defrosting_temperature_point_id\":null,\"outlet_air_temperature_point_id\":null,\"return_air_temperature_point_id\":null,\"exhaust_temperature_point_id\":null,\"heating_on_temperature_point_id\":null,\"heating_off_temperature_point_id\":null,\"heating_control_hysteresis_point_id\":null,\"cooling_on_temperature_point_id\":null,\"cooling_off_temperature_point_id\":null,\"cooling_control_hysteresis_point_id\":null,\"high_temperature_alarm_set_point_id\":null,\"low_temperature_alarm_set_point_id\":null,\"high_humidity_alarm_set_point_id\":null}}" {base_url}/energystoragecontainers/1/hvacs/1
```

*   删除储能集装箱空调

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/hvacs/1
```

*   新建储能集装箱消防系统

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols
```

*   获取储能集装箱的全部消防系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols
```

*   获取储能集装箱的单个消防系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   更新储能集装箱消防系统

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Firecontrol\",\"water_immersion_point_id\":1,\"emergency_stop_point_id\":2,\"electrical_compartment_smoke_detector_point_id\":null,\"battery_compartment_door_open_point_id\":null,\"electrical_compartment_door_open_point_id\":null,\"first_level_fire_alarm_point_id\":null,\"second_level_fire_alarm_point_id\":null,\"running_light_point_id\":null,\"fault_light_point_id\":null,\"ac_relay_tripping_point_id\":null,\"inside_temperature_point_id\":null,\"outside_temperature_point_id\":null,\"temperature_alarm_point_id\":null,\"smoke_sensor_value_point_id\":null,\"smoke_sensor_alarm_point_id\":null,\"battery_safety_detection_sensor_value_point_id\":null,\"battery_safety_detection_sensor_alarm_point_id\":null,\"fire_extinguishing_device_status_point_id\":null}}" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   删除储能集装箱消防系统

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/firecontrols/1
```

*   获取储能集装箱的全部负载

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads
```

*   获取储能集装箱的单个负载

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   新建储能集装箱负载

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads
```

*   更新储能集装箱负载

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/energystoragecontainers/1/loads/1
```

*   删除储能集装箱负载

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/loads/1
```

*   获取储能集装箱的全部变流系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   获取储能集装箱的单个变流系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   新建储能集装箱变流系统

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":null,\"device_status_point_id\":null,\"control_mode_point_id\":null,\"total_ac_active_power_point_id\":null,\"total_ac_reactive_power_point_id\":null,\"total_ac_apparent_power_point_id\":null,\"total_ac_power_factor_point_id\":null,\"ac_frequency_point_id\":null,\"phase_a_active_power_point_id\":null,\"phase_b_active_power_point_id\":null,\"phase_c_active_power_point_id\":null,\"phase_a_reactive_power_point_id\":null,\"phase_b_reactive_power_point_id\":null,\"phase_c_reactive_power_point_id\":null,\"phase_a_apparent_power_point_id\":null,\"phase_b_apparent_power_point_id\":null,\"phase_c_apparent_power_point_id\":null,\"ab_voltage_point_id\":null,\"bc_voltage_point_id\":null,\"ca_voltage_point_id\":null,\"ab_current_point_id\":null,\"bc_current_point_id\":null,\"ca_current_point_id\":null,\"phase_a_voltage_point_id\":null,\"phase_b_voltage_point_id\":null,\"phase_c_voltage_point_id\":null,\"phase_a_current_point_id\":null,\"phase_b_current_point_id\":null,\"phase_c_current_point_id\":null,\"pcs_module_temperature_point_id\":null,\"pcs_ambient_temperature_point_id\":null,\"a1_module_temperature_point_id\":null,\"b1_module_temperature_point_id\":null,\"c1_module_temperature_point_id\":null,\"a2_module_temperature_point_id\":null,\"b2_module_temperature_point_id\":null,\"c2_module_temperature_point_id\":null,\"air_inlet_temperature_point_id\":null,\"air_outlet_temperature_point_id\":null,\"dc_power_point_id\":null,\"dc_voltage_point_id\":null,\"dc_current_point_id\":null}}" {base_url}/energystoragecontainers/1/powerconversionsystems
```

*   更新储能集装箱变流系统

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":60,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5,\"grid_connection_status_point_id\":6,\"device_status_point_id\":7,\"control_mode_point_id\":8,\"total_ac_active_power_point_id\":9,\"total_ac_reactive_power_point_id\":10,\"total_ac_apparent_power_point_id\":11,\"total_ac_power_factor_point_id\":12,\"ac_frequency_point_id\":13}}" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   删除储能集装箱变流系统

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/powerconversionsystems/1
```

*   获取储能集装箱的全部时段计划

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules
```

*   新建储能集装箱时段计划

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules
```

*   获取储能集装箱的单个时段计划

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

*   更新储能集装箱时段计划

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/energystoragecontainers/1/schedules/1
```

*   删除储能集装箱时段计划

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragecontainers/1/schedules/1
```

### 核心/储能电站 Ⓔ

*   获取全部储能电站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations
```

*   根据 ID 获取储能电站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1
```

*   新建储能电站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations
```

*   更新储能电站

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/energystoragepowerstations/1
```

*   根据 ID 删除储能电站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/2
```

*   获取储能电站的全部集装箱

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers
```

*   为储能电站绑定集装箱

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"energy_storage_container_id\":1}}" {base_url}/energystoragepowerstations/1/containers
```

*   从储能电站移除集装箱

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/containers/1
```

*   获取储能电站的全部用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users
```

*   为储能电站绑定用户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/energystoragepowerstations/1/users
```

*   从储能电站移除用户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/users/1
```

*   根据 ID 导出储能电站为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/export
```

*   从 JSON 导入储能电站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Beijing Office\",\"uuid\":\"7297cfc1-8978-487b-a14b-fedb9b3525f5\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/energystoragepowerstations/import
```

*   克隆储能电站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energystoragepowerstations/1/clone
```


### 核心/设备

*   获取全部设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments
```

*   新建设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments
```

*   根据 ID 获取设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1
```

*   根据 ID 更新设备

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"new MyEMS Chiller\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/equipments/1
```

*   根据 ID 删除设备

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/4
```

*   为设备绑定计量表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"meter_id\":3,\"is_output\":false}}" {base_url}/equipments/1/meters
```

*   获取设备的全部计量表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters
```

*   从设备移除计量表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/meters/1
```

*   为设备绑定离线表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/offlinemeters
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":1,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   更新设备的点类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/14
```

*   为设备创建常量类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"constant\",\"constant\":\"test constant\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters
```

*   更新设备的常量类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/equipments/1/parameters/25
```

*   为设备创建分数类型参数

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters
```

*   更新设备的分数类型参数

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"89ff5118-d0c2-4dd8-8098-a8698189b2ea\",\"denominator_meter_uuid\":\"5ca62d2a-908e-40c5-a6b5-a8e436d60db4\"}}" {base_url}/equipments/1/parameters/24
```

*   从设备删除参数

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/parameters/16
```

*   为设备绑定虚拟表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/equipments/1/virtualmeters
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/equipments/1/commands
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"设备_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/equipments/import
```

*   根据 ID 克隆设备

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/equipments/1/clone
```


### 核心/网关

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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway 3\",\"description\":\"Gateway 3\"}}" {base_url}/gateways
```

*   根据 ID 删除网关

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/3
```

*   根据 ID 更新网关

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Gateway #3\",\"description\":\"Gateway #3\"}}" {base_url}/gateways/3
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Gateway10\",\"description\":null}" {base_url}/gateways/import
```

*   克隆网关

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/gateways/1/clone
```


### 核心/知识文件

*   获取全部知识文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles
```

*   根据 ID 获取知识文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   上传知识文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/knowledgefiles
```

*   根据 ID 删除知识文件

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1
```

*   根据 ID 恢复知识文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/knowledgefiles/1/restore
```


### 核心/菜单

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
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"is_hidden\":true}}" {base_url}/menus/100
```

*   获取指定菜单的全部子菜单

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/100/children
```

*   获取 Web UI 全部菜单

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/menus/web
```


### 核心/计量表

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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"PM20\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空调用电\"}}" {base_url}/meters
```

*   更新计量表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"PM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"master_meter_id\":1,\"description\":\"空调用电\"}}" {base_url}/meters/4
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":\"3\"}}" {base_url}/meters/1/points
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/meters/1/commands
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"cost_center\":{\"id\":1,\"name\":\"test\",\"uuid\":\"76d86222-96c5-4653-8162-bfbcd7edd5ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"master_meter\":null,\"description\":\"meter1\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}" {base_url}/meters/import
```


### 核心/微电网 Ⓔ

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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/microgrids
```

*   更新微电网

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"serial_number\":\"S1234567890\",\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/microgrids/1
```

*   根据 ID 导出微电网为 JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/export
```

*   从 JSON 导入微电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"postal_code\":\"100000\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":300,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"serial_number\":\"S1234567890\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"is_cost_data_displayed\":false,\"description\":\"Classic\"}" {base_url}/microgrids/import
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/microgrids/1/sensors
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":10,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries
```

*   更新微电网电池

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Battery\",\"battery_state_point_id\":1,\"soc_point_id\":2,\"power_point_id\":3,\"charge_meter_id\":1,\"discharge_meter_id\":2,\"rated_capacity\":30,\"rated_power\":30,\"nominal_voltage\":48}}" {base_url}/microgrids/1/batteries/1
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/evchargers
```

*   更新微电网充电桩

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"EVCharger\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/evchargers/1
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":30}}" {base_url}/microgrids/1/generators
```

*   更新微电网发电机

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Generator\",\"power_point_id\":1,\"meter_id\":1,\"rated_output_power\":50}}" {base_url}/microgrids/1/generators/1
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30}}" {base_url}/microgrids/1/grids
```

*   更新微电网电网

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":50}}" {base_url}/microgrids/1/grids/1
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
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":30}}" {base_url}/microgrids/1/heatpumps
```

*   更新微电网的热泵

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Heatpump\",\"power_point_id\":1,\"electricity_meter_id\":1,\"heat_meter_id\":2,\"cooling_meter_id\":3,\"rated_input_power\":50}}" {base_url}/microgrids/1/heatpumps/1
```

*   删除微电网的热泵

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/heatpumps/1
```

*   获取微电网的所有负荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads
```

*   获取微电网的负荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   新建 微电网 负荷

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30}}" {base_url}/microgrids/1/loads
```

*   更新微电网的负荷

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":60}}" {base_url}/microgrids/1/loads/1
```

*   删除微电网的负荷

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/loads/1
```

*   获取微电网的所有光伏

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics
```

*   获取微电网的光伏

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   新建 微电网 光伏

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":30}}" {base_url}/microgrids/1/photovoltaics
```

*   更新微电网的光伏

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Photovoltaic\",\"power_point_id\":1,\"meter_id\":1,\"rated_power\":50}}" {base_url}/microgrids/1/photovoltaics/1
```

*   删除微电网的光伏

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/photovoltaics/1
```

*   获取微电网的所有功率变换系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems
```

*   获取微电网的功率变换系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   新建 微电网 功率变换系统

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Power Conversion System1\",\"run_state_point_id\":1,\"rated_output_power\":30,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems
```

*   更新微电网的功率变换系统

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Power Conversion System\",\"run_state_point_id\":1,\"rated_output_power\":50,\"today_charge_energy_point_id\":2,\"today_discharge_energy_point_id\":3,\"total_charge_energy_point_id\":4,\"total_discharge_energy_point_id\":5}}" {base_url}/microgrids/1/powerconversionsystems/1
```

*   删除微电网的功率变换系统

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/powerconversionsystems/1
```

*   获取微电网的所有Schedules

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules
```

*   获取微电网的Schedule

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   更新微电网的Schedule

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"08:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules/1
```

*   新建 微电网 Schedule

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"07:00:00\",\"peak_type\":\"offpeak\",\"power\":60}}" {base_url}/microgrids/1/schedules
```

*   删除微电网的Schedule

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/schedules/1
```

*   获取微电网的所有用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users
```

*   新建将用户绑定到微电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/microgrids/1/users
```

*   删除用户 from 微电网

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/microgrids/1/users/1
```


### 核心/通知

*   获取通知

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications?startdatetime=2021-01-01T00:00:00&enddatetime=2021-01-02T00:00:00&status=unread
```

*   获取根据ID获取通知

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/1
```

*   更新通知

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/notifications/1
```

*   删除通知（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/notifications/2
```


### 核心/离线电表

*   获取所有的离线电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters
```

*   获取根据ID获取离线电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1
```

*   新建离线电表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"OfflinePM21\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空调用电\"}}" {base_url}/offlinemeters
```

*   更新离线电表

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"OfflinePM201\",\"energy_category_id\":1,\"hourly_low_limit\":0,\"hourly_high_limit\":999.99,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"空调用电\"}}" {base_url}/offlinemeters/3
```

*   删除离线电表（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/3
```

*   获取根据ID导出离线电表为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/export
```

*   新建从JSON导入离线电表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"离线表101\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"hourly_low_limit\":0,\"hourly_high_limit\":999.999,\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"offlinemeter1\"}" {base_url}/offlinemeters/import
```

*   Clone的离线电表（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeters/1/clone
```


### 核心/离线电表

*   获取所有的离线电表文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles
```

*   获取根据ID获取离线电表的文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   上传离线电表文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/offlinemeterfiles
```

*   删除离线电表的文件（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1
```

*   获取根据ID获取Rstore 离线电表 文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/offlinemeterfiles/1/restore
```


### 核心/能源计划文件

*   获取所有的能源计划文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles
```

*   获取根据ID获取能源计划文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   上传Energy的Plan文件

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: multipart/form-data" -d "暂无数据" {base_url}/energyplanfiles
```

*   删除能源计划文件（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1
```

*   获取根据ID获取Rstore的能源计划文件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/energyplanfiles/1/restore
```


### 核心/光伏电站 Ⓔ

*   获取所有的光伏电站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations
```

*   获取根据ID获取光伏电站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1
```

*   新建光伏电站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Harbin Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":100,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"1use\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations
```

*   更新光伏电站

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"station_code\":\"XAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}}" {base_url}/photovoltaicpowerstations/1
```

*   删除光伏电站（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/2
```

*   获取根据ID导出光伏电站为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/export
```

*   新建从JSON导入光伏电站

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Harbin Office\",\"uuid\":\"fd19346c-0e5a-4a1c-b3c3-3ef4fea9c1ea\",\"station_code\":\"XAAAA123456\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_capacity\":600,\"rated_power\":200,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"a0e79d2e-8756-457e-b1f2-4152e3591bff\"},\"is_cost_data_displayed\":false,\"phase_of_lifecycle\":\"2commissioning\",\"description\":\"Classic\"}" {base_url}/photovoltaicpowerstations/import
```

*   Clone的光伏电站（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/clone
```

*   获取光伏电站的所有电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids
```

*   获取光伏电站的电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   新建 光伏电站 电网

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids
```

*   更新光伏电站的电网

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Grid\",\"power_point_id\":1,\"buy_meter_id\":1,\"sell_meter_id\":2,\"capacity\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":10,\"apparent_power_a_point_id\":11,\"apparent_power_b_point_id\":12,\"apparent_power_c_point_id\":13,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   删除光伏电站的电网

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/grids/1
```

*   获取光伏电站的所有逆变器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors
```

*   获取光伏电站的逆变器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   新建 光伏电站 逆变器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors
```

*   更新光伏电站的逆变器

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Invertor\",\"model\":\"XAAA123456\",\"serial_number\":\"SN123456789\",\"invertor_state_point_id\":1,\"communication_state_point_id\":2,\"total_energy_point_id\":3,\"generation_meter_id\":1,\"today_energy_point_id\":4,\"efficiency_point_id\":5,\"temperature_point_id\":6,\"power_factor_point_id\":7,\"active_power_point_id\":8,\"reactive_power_point_id\":9,\"frequency_point_id\":null,\"uab_point_id\":null,\"ubc_point_id\":null,\"uca_point_id\":null,\"ua_point_id\":null,\"ub_point_id\":null,\"uc_point_id\":null,\"ia_point_id\":null,\"ib_point_id\":null,\"ic_point_id\":null,\"pv1_u_point_id\":null,\"pv1_i_point_id\":null,\"pv2_u_point_id\":null,\"pv2_i_point_id\":null,\"pv3_u_point_id\":null,\"pv3_i_point_id\":null,\"pv4_u_point_id\":null,\"pv4_i_point_id\":null,\"pv5_u_point_id\":null,\"pv5_i_point_id\":null,\"pv6_u_point_id\":null,\"pv6_i_point_id\":null,\"pv7_u_point_id\":null,\"pv7_i_point_id\":null,\"pv8_u_point_id\":null,\"pv8_i_point_id\":null,\"pv9_u_point_id\":null,\"pv9_i_point_id\":null,\"pv10_u_point_id\":null,\"pv10_i_point_id\":null,\"pv11_u_point_id\":null,\"pv11_i_point_id\":null,\"pv12_u_point_id\":null,\"pv12_i_point_id\":null,\"pv13_u_point_id\":null,\"pv13_i_point_id\":null,\"pv14_u_point_id\":null,\"pv14_i_point_id\":null,\"pv15_u_point_id\":null,\"pv15_i_point_id\":null,\"pv16_u_point_id\":null,\"pv16_i_point_id\":null,\"pv17_u_point_id\":null,\"pv17_i_point_id\":null,\"pv18_u_point_id\":null,\"pv18_i_point_id\":null,\"pv19_u_point_id\":null,\"pv19_i_point_id\":null,\"pv20_u_point_id\":null,\"pv20_i_point_id\":null,\"pv21_u_point_id\":null,\"pv21_i_point_id\":null,\"pv22_u_point_id\":null,\"pv22_i_point_id\":null,\"pv23_u_point_id\":null,\"pv23_i_point_id\":null,\"pv24_u_point_id\":null,\"pv24_i_point_id\":null,\"pv25_u_point_id\":null,\"pv25_i_point_id\":null,\"pv26_u_point_id\":null,\"pv26_i_point_id\":null,\"pv27_u_point_id\":null,\"pv27_i_point_id\":null,\"pv28_u_point_id\":null,\"pv28_i_point_id\":null,\"mppt_total_energy_point_id\":null,\"mppt_power_point_id\":null,\"mppt_1_energy_point_id\":null,\"mppt_2_energy_point_id\":null,\"mppt_3_energy_point_id\":null,\"mppt_4_energy_point_id\":null,\"mppt_5_energy_point_id\":null,\"mppt_6_energy_point_id\":null,\"mppt_7_energy_point_id\":null,\"mppt_8_energy_point_id\":null,\"mppt_9_energy_point_id\":null,\"mppt_10_energy_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   删除光伏电站的逆变器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/invertors/1
```

*   获取光伏电站的所有负荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads
```

*   获取光伏电站的负荷

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   新建 光伏电站 负荷

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":30,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads
```

*   更新光伏电站的负荷

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Load\",\"power_point_id\":1,\"meter_id\":1,\"rated_input_power\":500,\"total_active_power_point_id\":2,\"active_power_a_point_id\":3,\"active_power_b_point_id\":4,\"active_power_c_point_id\":5,\"total_reactive_power_point_id\":6,\"reactive_power_a_point_id\":7,\"reactive_power_b_point_id\":8,\"reactive_power_c_point_id\":9,\"total_apparent_power_point_id\":null,\"apparent_power_a_point_id\":null,\"apparent_power_b_point_id\":null,\"apparent_power_c_point_id\":null,\"total_power_factor_point_id\":null,\"active_energy_import_point_id\":null,\"active_energy_export_point_id\":null,\"active_energy_net_point_id\":null}}" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   删除光伏电站的负荷

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/loads/1
```

*   获取光伏电站的所有用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users
```

*   新建将用户绑定到储能电站的Copy

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"user_id\":1}}" {base_url}/photovoltaicpowerstations/1/users
```

*   删除用户 from 光伏电站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/photovoltaicpowerstations/1/users/1
```


### 核心/数据点

*   获取所有的数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points
```

*   获取根据ID获取数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/1
```

*   创建数据点

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"ModbusPoint3\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_registers\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null}}" {base_url}/points
```

*   删除数据点（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/2
```

*   Update的数据点（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"ModbusPoint1\",\"data_source_id\":1,\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0,\"ratio\":100,\"offset_constant\":12,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":1, \\"number_of_registers\\":2, \\"data_format\\":\\"float\\"}\",\"description\":null,\"faults\":null,\"definitions\":null}}" {base_url}/points/1
```

*   Update 数据点 Limits（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":1099999998.9,\"lower_limit\":0}}" {base_url}/pointlimits/10001
```

*   获取根据ID导出数据点为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/export
```

*   新建从JSON导入数据点

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Active Energy Import 1\",\"data_source\":{\"id\":1,\"name\":\"示例ModbusTCP数据源\",\"uuid\":\"b3ace9d4-b63b-419b-818f-0f6d1d0603a4\"},\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"offset_constant\":0,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null,\"faults\":null,\"definitions\":null}" {base_url}/points/import
```

*   Clone的数据点（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/points/10001/clone
```


### 核心/权限

*   获取所有的权限

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges
```

*   更新权限的Data

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges/1
```

*   删除权限

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/privileges/1
```

*   创建权限

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"privilege 1\",\"data\":\"{\\"spaces\\":[1, 3]}\"}}" {base_url}/privileges
```


### 核心/协议

*   获取所有的协议

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols
```

*   获取根据ID获取协议

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1
```

*   新建协议

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols
```

*   更新协议

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}}" {base_url}/protocols/3
```

*   删除协议（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/3
```

*   获取根据ID导出协议为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/export
```

*   新建从JSON导入协议

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"modbus-tcp\",\"code\":\"modbus-tcp\"}" {base_url}/protocols/import
```

*   Clone的协议（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/protocols/1/clone
```


### 核心/规则 Ⓔ

*   获取所有的规则

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules
```

*   获取根据ID获取规则

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1
```

*   获取根据ID导出规则为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/export
```

*   新建规则

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules
```

*   新建从JSON导入规则

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Space Energy Consumption Over Limit_1\",\"category\":\"SPACE\",\"fdd_code\":\"SPACE01\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":null,\"is_run_immediately\":true}" {base_url}/rules/import
```

*   Clone的规则（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/clone
```

*   Run的规则（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/1/run
```

*   更新规则

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Space Energy Consumption Over Limit\",\"fdd_code\":\"SPACE01\",\"category\":\"SPACE\",\"priority\":\"HIGH\",\"channel\":\"WEB\",\"expression\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"message_template\":\"%s截止到目前电耗%s，超标%s。\",\"is_enabled\":true,\"is_run_immediately\":true}}" {base_url}/rules/2
```

*   删除规则（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/rules/2
```


### 核心/传感器

*   获取所有的传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors
```

*   获取根据ID获取传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1
```

*   新建传感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors
```

*   更新传感器

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Sensor10\",\"description\":\"sensor description\"}}" {base_url}/sensors/3
```

*   删除传感器（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/3
```

*   新建将数据点绑定到传感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/sensors/1/points
```

*   获取根据ID获取所有 数据点 associated with 传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points
```

*   删除从传感器解绑数据点

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/points/2
```

*   获取根据ID导出传感器为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/export
```

*   新建从JSON导入传感器

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"传感器123\",\"description\":\"sensor description\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},{\"id\":2,\"name\":\"Working hours counter\"}]}" {base_url}/sensors/import
```

*   Clone的传感器（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/sensors/1/clone
```


### 核心/车间

*   获取所有的车间

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors
```

*   获取根据ID获取车间

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1
```

*   新建车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors
```

*   更新车间

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMS Shopfloor2\",\"area\":999.99,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Shopfloor description\"}}" {base_url}/shopfloors/3
```

*   删除车间（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/2
```

*   获取车间的所有设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments
```

*   新建将设备绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/shopfloors/1/equipments
```

*   删除设备 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/equipments/1
```

*   获取车间的所有电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters
```

*   新建将电表绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/shopfloors/1/meters
```

*   删除电表 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/meters/1
```

*   获取车间的所有离线电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters
```

*   新建将OfflineMeter绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/shopfloors/1/offlinemeters
```

*   删除离线电表 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/offlinemeters/1
```

*   获取车间的所有数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points
```

*   新建将数据点绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/shopfloors/1/points
```

*   删除数据点 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/points/1
```

*   获取车间的所有传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors
```

*   新建将传感器绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/shopfloors/1/sensors
```

*   删除传感器 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/sensors/1
```

*   获取车间的所有虚拟电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters
```

*   新建将虚拟电表绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/shopfloors/1/virtualmeters
```

*   删除虚拟电表 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/virtualmeters/1
```

*   获取车间的所有工作日历

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars
```

*   新建将工作日历绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/shopfloors/1/workingcalendars
```

*   删除工作日历 from 车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/workingcalendars/6
```

*   新建将Command绑定到车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/shopfloors/1/commands
```

*   获取车间的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands
```

*   删除从车间解绑Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/commands/1
```

*   获取根据ID导出车间为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/export
```

*   新建从JSON导入车间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"车间_1\",\"area\":99999.999,\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MyEMS Project\",\"equipments\":[{\"id\":1,\"name\":\"设备1\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/shopfloors/import
```

*   Clone的车间（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/shopfloors/1/clone
```


### 核心/空间

*   获取所有的空间

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces
```

*   获取根据ID获取空间

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1
```

*   新建空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":1,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":false,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces
```

*   更新空间

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"MyEMSSpace\",\"parent_space_id\":2,\"area\":999.99,\"number_of_occupants\":1,\"timezone_id\":56,\"is_input_counted\":true,\"is_output_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"latitude\":39.909429,\"longitude\":116.416993,\"description\":\"Space description\"}}" {base_url}/spaces/1
```

*   删除空间（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/57
```

*   获取空间的所有Children

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/children
```

*   获取空间的所有联合设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments
```

*   新建将联合设备绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"combined_equipment_id\":1}}" {base_url}/spaces/1/combinedequipments
```

*   删除联合设备 from 空间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/combinedequipments/1
```

*   获取空间的所有配电系统

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems
```

*   新建将配电系统绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"distribution_system_id\":1}}" {base_url}/spaces/1/distributionsystems
```

*   删除从空间解绑配电系统

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/distributionsystems/1
```

*   获取空间的所有能源流向图

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams
```

*   新建将能源流向图绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"energy_flow_diagram_id\":1}}" {base_url}/spaces/1/energyflowdiagrams
```

*   删除从空间解绑能源流向图

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energyflowdiagrams/1
```

*   获取空间的所有储能电站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations
```

*   新建将储能电站绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"energy_storage_power_station_id\":1}}" {base_url}/spaces/1/energystoragepowerstations
```

*   删除从空间解绑储能电站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/energystoragepowerstations/1
```

*   获取空间的所有设备

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments
```

*   新建将设备绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/spaces/1/equipments
```

*   删除从空间解绑设备

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/equipments/1
```

*   获取空间的所有电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters
```

*   新建将电表绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/spaces/1/meters
```

*   删除从空间解绑电表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/meters/1
```

*   获取空间的所有微电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids
```

*   新建将微电网绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/spaces/1/microgrids
```

*   删除从空间解绑微电网

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/microgrids/1
```

*   获取空间的所有离线电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters
```

*   新建将OfflineMeter绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/spaces/1/offlinemeters
```

*   删除从空间解绑离线电表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/offlinemeters/1
```

*   获取空间的所有光伏电站

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations
```

*   新建将光伏电站绑定到空间的Copy

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"photovoltaic_power_station_id\":1}}" {base_url}/spaces/1/photovoltaicpowerstations
```

*   删除从空间解绑光伏电站

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/photovoltaicpowerstations/1
```

*   获取空间的所有数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   新建将数据点绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/spaces/1/points
```

*   删除从空间解绑数据点

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/points/3
```

*   获取空间的所有传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors
```

*   新建将传感器绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/spaces/1/sensors
```

*   删除从空间解绑传感器

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/sensors/1
```

*   获取空间的所有车间

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors
```

*   新建将车间绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"shopfloor_id\":1}}" {base_url}/spaces/1/shopfloors
```

*   删除从空间解绑车间

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/shopfloors/1
```

*   获取空间的所有门店

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores
```

*   新建将门店绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"store_id\":1}}" {base_url}/spaces/1/stores
```

*   删除从空间解绑门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/stores/1
```

*   获取空间的所有租户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants
```

*   新建将租户绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"tenant_id\":1}}" {base_url}/spaces/1/tenants
```

*   删除从空间解绑租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/tenants/1
```

*   获取空间的所有虚拟电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters
```

*   新建将虚拟电表绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/spaces/1/virtualmeters
```

*   删除从空间解绑虚拟电表

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/virtualmeters/1
```

*   获取空间的Tree的用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/tree
```

*   获取Energy Categories的all 电表 in 空间 Tree

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/treemetersenergycategories
```

*   获取空间的所有工作日历

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars
```

*   新建将工作日历绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/spaces/1/workingcalendars
```

*   删除从空间解绑工作日历

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/workingcalendars/6
```

*   获取空间的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands
```

*   新建将Command绑定到空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/spaces/1/commands
```

*   删除从空间解绑Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/1/commands/1
```

*   获取根据ID导出空间为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/export
```

*   新建从JSON导入空间

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"1号楼_1\",\"parent_space_id\":{\"id\":1,\"name\":\"MyEMS\",\"uuid\":\"9dfb7cff-f19f-4a1e-8c79-3adf6425bfd9\"},\"area\":88888.888,\"timezone\":{\"id\":56,\"name\":\"China Standard Time\",\"utc_offset\":\"+08:00\"},\"is_input_counted\":true,\"is_output_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"latitude\":39.915119,\"longitude\":116.403963,\"description\":\"MyEMS Space\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"shopfloors\":[{\"id\":1,\"name\":\"车间1\",\"uuid\":\"d03837fd-9d30-44fe-9443-154f7c7e15f1\"}],\"combined_equipments\":null,\"equipments\":null,\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"tenants\":[{\"id\":1,\"name\":\"Starbucks星巴克\",\"uuid\":\"6b0da806-a4cd-431a-8116-2915e90aaf8b\"}],\"stores\":[{\"id\":1,\"name\":\"麦当劳\",\"uuid\":\"d8a24322-4bab-4ba2-aedc-5d55a84c3db8\"}],\"working_calendars\":null}" {base_url}/spaces/import
```

*   Clone的空间（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/spaces/2/clone
```


### 核心/门店

*   获取所有的Sotres

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores
```

*   获取根据ID获取门店

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1
```

*   新建门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"麦当劳(新王府井店)\",\"address\":\"北京市东城区王府井大街200号工美大厦1层010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores
```

*   更新门店

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"麦当劳(新王府井店)\",\"address\":\"北京市东城区王府井大街200号工美大厦1层010-65120499\",\"latitude\":39.909429,\"longitude\":116.416993,\"area\":600,\"store_type_id\":1,\"is_input_counted\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"Classic, long-running fast-food chain known for its burgers, fries & shakes.\"}}" {base_url}/stores/3
```

*   删除门店（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/3
```

*   获取门店 按 ID的所有电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters
```

*   新建将电表绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/stores/1/meters
```

*   删除电表 from 门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/meters/1
```

*   获取门店的所有离线电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters
```

*   新建将OfflineMeter绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/stores/1/offlinemeters
```

*   删除离线电表 from 门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/offlinemeters/1
```

*   获取门店 按 ID的所有数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points
```

*   新建将数据点绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/stores/1/points
```

*   删除数据点 from 门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/points/1
```

*   获取门店 按 ID的所有传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors
```

*   新建将传感器绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/stores/1/sensors
```

*   删除传感器 from 门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/sensors/1
```

*   获取门店 按 ID的所有虚拟电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters
```

*   新建将虚拟电表绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/stores/1/virtualmeters
```

*   删除虚拟电表 from 门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/virtualmeters/1
```

*   获取门店 按 ID的所有工作日历

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars
```

*   新建将工作日历绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/stores/1/workingcalendars
```

*   删除工作日历 from 门店

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/workingcalendars/6
```

*   获取门店的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands
```

*   新建将Command绑定到门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/stores/1/commands
```

*   删除从门店解绑Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/commands/1
```

*   Clone的门店（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/clone
```

*   获取根据ID导出门店为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/stores/1/export
```

*   新建从JSON导入门店

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"麦当劳_1\",\"address\":\"北京市东城区东打磨厂街7号\",\"latitude\":39.899493,\"longitude\":116.412041,\"area\":500,\"store_type\":{\"id\":1,\"name\":\"餐饮\",\"uuid\":\"494d7d5e-e139-4629-b957-99ea4caf0401\"},\"is_input_counted\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"MacDonalds\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/stores/import
```


### 核心/门店类型

*   获取所有 门店 类型

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes
```

*   获取根据ID获取门店的类型

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/1
```

*   新建门店的类型

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Car\",\"description\":\"汽车\",\"simplified_code\":\"CA\"}}" {base_url}/storetypes
```

*   更新门店的类型

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Auto\",\"description\":\"汽车\",\"simplified_code\":\"AT\"}}" {base_url}/storetypes/4
```

*   删除门店的类型（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/storetypes/4
```


### 核心/SVG Ⓔ

*   获取所有的SVG

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs
```

*   获取根据ID获取SVG

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1
```

*   创建SVG

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"示例SVG图形1\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs
```

*   SVG（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/2
```

*   Update的SVG（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"示例SVG图形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Three separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo description\"}}" {base_url}/svgs/1
```

*   获取根据ID导出SVG为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/export
```

*   新建从JSON导入SVG

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"示例SVG图形\",\"svg\":\"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg width=\\"5cm\\" height=\\"4cm\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\"><desc>Four separate rectangles</desc><rect x=\\".5cm\\" y=\\".5cm\\" width=\\"2cm\\" height=\\"1cm\\"/></svg>\",\"description\":\"demo SVG\"}" {base_url}/svgs/import
```

*   Clone的SVG（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/svgs/1/clone
```


### 核心/费率

*   获取所有的费率

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs
```

*   获取根据ID获取费率

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1
```

*   创建费率的（Time的Use）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"new2020分时电价1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs
```

*   更新费率的（time的use）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"new2020分时电价1-6\",\"energy_category\":{\"id\":1},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2020-01-01T00:00:00\",\"valid_through\":\"2020-07-01T00:00:00\",\"timeofuse\":[{\"start_time_of_day\":\"00:00:00\",\"end_time_of_day\":\"05:59:59\",\"peak_type\":\"offpeak\",\"price\":0.456},{\"start_time_of_day\":\"06:00:00\",\"end_time_of_day\":\"07:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"08:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}}" {base_url}/tariffs/18
```

*   删除费率

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/18
```

*   获取根据ID导出费率为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/export
```

*   新建从JSON导入费率

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"2024分时电价1-7\",\"energy_category\":{\"id\":1,\"name\":\"电\"},\"tariff_type\":\"timeofuse\",\"unit_of_price\":\"元/千瓦时\",\"valid_from\":\"2024-01-01T00:00:00\",\"valid_through\":\"2024-06-30T23:59:59\",\"timeofuse\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"peak_type\":\"onpeak\",\"price\":1.159},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"peak_type\":\"midpeak\",\"price\":0.708},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"peak_type\":\"offpeak\",\"price\":0.345}]}" {base_url}/tariffs/import
```

*   Clone的费率（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tariffs/1/clone
```


### 核心/租户

*   获取所有的租户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants
```

*   获取根据ID获取租户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1
```

*   新建租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Starbucks\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2021-01-01T00:00:00\",\"lease_end_datetime\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants
```

*   更新租户

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Hermes 爱马仕\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3 L4 L5\",\"rooms\":\"1201b+2247+3F\",\"area\":818.8,\"tenant_type_id\":9,\"is_input_counted\":true,\"is_key_tenant\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime_utc\":\"2021-01-01T00:00:00\",\"lease_end_datetime_utc\":\"2022-01-01T00:00:00\",\"is_in_lease\":true,\"contact_id\":1,\"cost_center_id\":1,\"description\":\"my description\"}}" {base_url}/tenants/2
```

*   删除租户（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/2
```

*   获取租户 按 ID的所有电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters
```

*   新建将电表绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"meter_id\":1}}" {base_url}/tenants/1/meters
```

*   删除电表 from 租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/meters/1
```

*   获取租户的所有离线电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters
```

*   新建将OfflineMeter绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"offline_meter_id\":1}}" {base_url}/tenants/1/offlinemeters
```

*   删除离线电表 from 租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/offlinemeters/1
```

*   获取租户 按 ID的所有数据点

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points
```

*   新建将数据点绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"point_id\":1}}" {base_url}/tenants/1/points
```

*   删除数据点 from 租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/points/1
```

*   获取租户 按 ID的所有传感器

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors
```

*   新建将传感器绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"sensor_id\":1}}" {base_url}/tenants/1/sensors
```

*   删除传感器 from 租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/sensors/1
```

*   获取租户 按 ID的所有虚拟电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters
```

*   新建将虚拟电表绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"virtual_meter_id\":1}}" {base_url}/tenants/1/virtualmeters
```

*   删除虚拟电表 from 租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/virtualmeters/1
```

*   获取租户 按 ID的所有工作日历

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars
```

*   新建将工作日历绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"working_calendar_id\":6}}" {base_url}/tenants/1/workingcalendars
```

*   删除工作日历 from 租户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/workingcalendars/6
```

*   获取租户的所有Commands

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands
```

*   新建将Command绑定到租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"command_id\":1}}" {base_url}/tenants/1/commands
```

*   删除从租户解绑Command

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/commands/1
```

*   获取根据ID导出租户为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/export
```

*   新建从JSON导入租户

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Starbucks星巴克_1\",\"buildings\":\"Building #1\",\"floors\":\"L1 L2 L3\",\"rooms\":\"1201b+2247+3F\",\"area\":418.8,\"tenant_type\":{\"id\":9,\"name\":\"非整层办公租户\",\"uuid\":\"55bbcba7-d8a0-44a0-9a9f-2f085e3cb044\"},\"is_key_tenant\":true,\"is_input_counted\":true,\"lease_number\":\"6b0da806\",\"lease_start_datetime\":\"2020-01-01T00:00:00\",\"lease_end_datetime\":\"2023-01-01T00:00:00\",\"is_in_lease\":true,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"description\":\"my description\",\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"计量表1\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\"}],\"offline_meters\":[{\"id\":1,\"name\":\"离线表1\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\"}],\"virtual_meters\":[{\"id\":1,\"name\":\"虚拟表1\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\"}],\"points\":null,\"sensors\":[{\"id\":1,\"name\":\"传感器1\",\"uuid\":\"ba450606-6f39-41e0-8caf-75b528635511\"}],\"working_calendars\":null}" {base_url}/tenants/import
```

*   Clone的租户（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenants/1/clone
```


### 核心/租户类型

*   获取所有 租户 类型

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes
```

*   获取根据ID获取租户的类型

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/1
```

*   新建租户的类型

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"办公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes
```

*   更新租户的类型

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Office1\",\"description\":\"办公\",\"simplified_code\":\"OF1\"}}" {base_url}/tenanttypes/10
```

*   删除租户的类型（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tenanttypes/10
```


### 核心/短信

*   获取短信 按 日期范围

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   获取根据ID获取aText的Message

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/1
```

*   新建短信

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/textmessages
```

*   更新短信

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888899\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/textmessages/1000001
```

*   删除短信（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/textmessages/2
```


### 核心/令牌 Ⓔ

*   获取所有的令牌

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00&status=all
```

*   获取根据ID获取令牌

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/49
```

*   新建令牌

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_mobile\":\"13888888888\",\"message\":\"report_01_2021年12月24日\",\"acknowledge_code\":\"123456\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/tickets
```

*   更新令牌

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -d "{\"data\":{}}" {base_url}/tickets/1
```

*   令牌（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/tickets/2
```


### 核心/时区

*   获取所有的时区

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones
```

*   获取根据ID获取时区

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/timezones/1
```

*   更新时区

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"夏威夷标准时间\",\"description\":\"(GMT-10:00) Hawaii\",\"utc_offset\":\"-10:00\"}}" {base_url}/timezones/3
```


### 核心/用户

*   获取所有的用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users
```

*   获取根据ID获取用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/1
```

*   新建用户 （按 Administrator）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"demo\",\"display_name\":\"Demo\",\"email\":\"demo@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users
```

*   更新用户登录按的Username

```bash
curl -i -X PUT -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"administrator\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   删除用户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/2
```

*   更新用户的Profile

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"albert\",\"display_name\":\"Mr. Albert\",\"email\":\"albert@myems.io\",\"is_admin\":false,\"privilege_id\":1,\"password\":\"!MyEMS1\",\"account_expiration_datetime\":\"2100-01-01T00:00:00\",\"password_expiration_datetime\":\"2100-01-01T00:00:00\"}}" {base_url}/users/2
```

*   更新用户的Logout

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "暂无数据" {base_url}/users/logout
```

*   更新用户 Change Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"old_password\":\"!MyEMS1\",\"new_password\":\"!MyEMS2\"}}" {base_url}/users/changepassword
```

*   Reset的Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"johnson\",\"password\":\"NewPassword2\"}}" {base_url}/users/resetpassword
```

*   更新用户登录按的Email

```bash
curl -i -X PUT -H "Content-类型: application/json" -d "{\"data\":{\"email\":\"administrator@myems.io\",\"password\":\"!MyEMS1\"}}" {base_url}/users/login
```

*   解锁用户

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/unlock/2
```

*   Forgot的Password

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"password\":\"!MyEMS2\",\"email\":\"demo@myems.io\",\"token\":\"100d4d9f1a262b3169bf5ca49d66121823856bec4d6b18b09ddeb0afbc14207246de906705e8788ae42633095eb1cad2eb991cd96f73b885cfa0b93569c1f34e\"}}" {base_url}/users/forgotpassword
```

*   获取忘记密码Expires Datetime 按 Email 和 Token

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/forgotpassword?email=demo@myems.io&token=1da65d0c141597b9d58adcba46001a119dc4ada3283049122e3f4f39b2fa7aa2182a3f48a0ddf0d0d631833041fa0f1f0873f68f664bd733f8a39512ff89123f
```

*   新建Forgot Password 邮件

```bash
curl -i -X POST -H "Content-类型: application/json" -d "{\"data\":{\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages
```

*   更新Forgot Password 邮件

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"recipient_name\":\"Demo\",\"recipient_email\":\"demo@myems.io\",\"subject\":\"Forgot Password\",\"message\":\"demo message\",\"status\":\"new\",\"scheduled_datetime\":\"2023-05-24T11:10:53\",\"created_datetime\":\"2023-05-24T11:10:53\"}}" {base_url}/users/emailmessages/1
```

*   获取所有 Forgot Password 邮件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages?startdatetime=2023-05-01T00:00:00&enddatetime=2023-05-31T00:00:00
```

*   获取根据ID获取Forgot的邮件

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   Forgot Password 邮件（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/emailmessages/1
```

*   新建Register的用户

```bash
curl -i -X POST -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"demo1\",\"display_name\":\"Demo1\",\"email\":\"demo1@myems.io\",\"password\":\"!MyEMS1\",\"token\":\"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a\"}}" {base_url}/users/newusers
```

*   获取所有 New Register 用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers
```

*   获取根据ID获取New Register 用户

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   更新New Register 用户

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"demo2\",\"display_name\":\"Demo2\",\"email\":\"demo2@myems.io\"}}" {base_url}/users/newusers/2
```

*   New Register 用户

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/users/newusers/1
```

*   审批New Register 用户 （按 Administrator）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"is_admin\":true,\"is_read_only\":false,\"privilege_id\":1,\"account_expiration_datetime\":\"2024-05-31T16:00:00\",\"password_expiration_datetime\":\"2024-05-31T16:00:00\"}}" {base_url}/users/newusers/2/approve
```


### 核心/虚拟电厂 Ⓔ

*   获取所有的虚拟电厂

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants
```

*   获取根据ID获取虚拟电厂

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1
```

*   新建虚拟电厂

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing VPP\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/virtualpowerplants
```

*   更新虚拟电厂

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing VPP1\",\"cost_center_id\":1,\"balancing_price_point_id\":1,\"svg_id\":1,\"description\":\"New\"}}" {base_url}/virtualpowerplants/1
```

*   删除虚拟电厂（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/3
```

*   获取虚拟电厂 按 ID的所有微电网

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids
```

*   新建将微电网绑定到虚拟电厂

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"microgrid_id\":1}}" {base_url}/virtualpowerplants/1/microgrids
```

*   删除微电网 from 虚拟电厂

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/microgrids/1
```

*   获取根据ID导出虚拟电厂为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/export
```

*   新建从JSON导入虚拟电厂

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Beijing VPP_1\",\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"balancing_price_point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/virtualpowerplants/import
```

*   Clone的虚拟电厂（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualpowerplants/1/clone
```


### 核心/虚拟电表

*   获取所有的虚拟电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters
```

*   获取根据ID获取虚拟电表

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1
```

*   新建虚拟电表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"VM10\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters
```

*   Update的虚拟电表（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"VM11\",\"energy_category_id\":1,\"is_counted\":true,\"cost_center_id\":1,\"energy_item_id\":1,\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2-x3\",\"variables\":[{\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1},{\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2},{\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3}]}}}" {base_url}/virtualmeters/3
```

*   删除虚拟电表（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/3
```

*   获取根据ID导出虚拟电表为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/export
```

*   新建从JSON导入虚拟电表

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"虚拟表12\",\"equation\":\"x1+x2+x3\",\"energy_category\":{\"id\":1,\"name\":\"电\",\"uuid\":\"6d0753ed-8b43-4332-b6fd-d2f5813831d3\"},\"is_counted\":true,\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"energy_item\":{\"id\":1,\"name\":\"照明和插座用电\",\"uuid\":\"cade4e78-2b85-4bea-ab6e-0d6accc88d03\"},\"description\":\"virtual description\",\"expression\":{\"equation\":\"x1+x2+x3\",\"variables\":[{\"id\":1,\"name\":\"x1\",\"meter_type\":\"meter\",\"meter_id\":1,\"meter_name\":\"计量表1\"},{\"id\":2,\"name\":\"x2\",\"meter_type\":\"meter\",\"meter_id\":2,\"meter_name\":\"计量表2\"},{\"id\":3,\"name\":\"x3\",\"meter_type\":\"meter\",\"meter_id\":3,\"meter_name\":\"计量表3\"}]}}" {base_url}/virtualmeters/import
```

*   Clone的虚拟电表（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/virtualmeters/1/clone
```


### 核心/网页消息

*   获取网页消息 按 时间范围

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   获取所有 New 网页消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessagesnew
```

*   更新所有 New 网页消息 （Mark 所有 As Read）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessagesnew
```

*   更新所有 New 网页消息 （Acknowledge 所有）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"OK\"}}" {base_url}/webmessagesnew
```

*   获取根据ID获取网页消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   新建网页消息的TODO

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages
```

*   更新网页消息的（Acknowledge）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"status\":\"acknowledged\",\"reply\":\"this is my reply\"}}" {base_url}/webmessages/1
```

*   更新网页消息 （Mark As Read）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"status\":\"read\"}}" {base_url}/webmessages/1
```

*   删除网页消息（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/webmessages/1
```

*   批量更新网页消息 （Mark As Read）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```

*   Batch 网页消息 按 IDs

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"ids\":\"123,456\"}" {base_url}/webmessagesbatch
```


### 核心/微信消息

*   获取微信消息 按 日期范围

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00
```

*   获取根据ID获取微信消息

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/1
```

*   新建微信消息

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"oia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\"}}" {base_url}/wechatmessages
```

*   更新微信消息

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"rule_id\":1,\"recipient_name\":\"myems\",\"recipient_openid\":\"1ia2TjuEGTNoeX76QEjQNrcURxG8\",\"message_template_id\":\"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk\",\"message_data\":\"{\\"space_id\\":1, \\"high_limit\\":1000.000}\",\"acknowledge_code\":\"9e52ad6d\",\"created_datetime\":\"2021-12-24T00:00:00\",\"scheduled_datetime\":\"2021-12-24T00:00:00\",\"status\":\"new\"}}" {base_url}/wechatmessages/1000001
```

*   删除微信消息（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/wechatmessages/2
```


### 核心/风电场 Ⓔ

*   获取所有的风电场

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms
```

*   获取根据ID获取风电场

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1
```

*   新建风电场

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":600,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms
```

*   更新风电场

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"Beijing Office\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact_id\":1,\"cost_center_id\":1,\"svg_id\":1,\"description\":\"Classic\"}}" {base_url}/windfarms/1
```

*   删除风电场（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/2
```

*   获取根据ID导出风电场为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/export
```

*   新建从JSON导入风电场

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"name\":\"Beijing Office_1\",\"address\":\"Wangfujing Street, Dongcheng District, Beijing\",\"latitude\":39.909429,\"longitude\":116.416993,\"rated_power\":800,\"contact\":{\"id\":1,\"name\":\"江工\",\"uuid\":\"5c5ce6e8-8d00-46b3-9602-4e1520a8b43f\"},\"cost_center\":{\"id\":1,\"name\":\"成本中心\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"Classic\"}" {base_url}/windfarms/import
```

*   Clone的风电场（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/windfarms/1/clone
```


### 核心/工作日历

*   获取所有的工作日历

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars
```

*   获取根据ID获取工作日历

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1
```

*   新建工作日历

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"new_working_calendar\",\"description\":\"test\"}}" {base_url}/workingcalendars
```

*   更新工作日历

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"测试日历\",\"description\":\"test_update\"}}" {base_url}/workingcalendars/2
```

*   删除工作日历（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/8
```

*   获取根据ID导出工作日历为JSON

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/export
```

*   Clone的工作日历（按ID）

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/1/clone
```

*   新建从JSON导入工作日历

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"id\":1,\"name\":\"new_working_calendar_1\",\"description\":\"test\",\"non_working_days\":[{\"id\":2,\"working_calendar_id\":1,\"date_local\":\"2023-03-01\",\"description\":\"test\"},{\"id\":3,\"working_calendar_id\":1,\"date_local\":\"2023-03-02\",\"description\":\"test\"},{\"id\":4,\"working_calendar_id\":1,\"date_local\":\"2023-03-03\",\"description\":\"test\"},{\"id\":5,\"working_calendar_id\":1,\"date_local\":\"2023-03-04\",\"description\":\"test\"},{\"id\":6,\"working_calendar_id\":1,\"date_local\":\"2023-03-08\",\"description\":\"test\"},{\"id\":14,\"working_calendar_id\":1,\"date_local\":\"2023-03-09\",\"description\":\"test\"},{\"id\":15,\"working_calendar_id\":1,\"date_local\":\"2023-03-10\",\"description\":\"test\"},{\"id\":16,\"working_calendar_id\":1,\"date_local\":\"2023-03-11\",\"description\":\"test\"},{\"id\":17,\"working_calendar_id\":1,\"date_local\":\"2023-03-12\",\"description\":\"test\"},{\"id\":18,\"working_calendar_id\":1,\"date_local\":\"2023-03-13\",\"description\":\"test\"}]}" {base_url}/workingcalendars/import
```


### 核心/非工作日

*   获取所有 非工作日 按 工作日历 ID

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/workingcalendars/2/nonworkingdays
```

*   获取根据ID获取非工作日

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/42
```

*   新建非工作日 按 工作日历 ID

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"description\":\"test\"}}" {base_url}/workingcalendars/1/nonworkingdays
```

*   Update的非工作日（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"date_local\":\"2023-03-01\",\"working_calendar_id\":2,\"description\":\"test_update3\"}}" {base_url}/nonworkingdays/42
```

*   删除非工作日（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/nonworkingdays/41
```


### 核心/API密钥

*   新建API密钥

```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2023-06-30T12:00:00\"}}" {base_url}/apikeys
```

*   获取根据ID获取API密钥

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/1
```

*   获取所有的API密钥

```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys
```

*   Update的API密钥（按ID）

```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"data\":{\"name\":\"myems\",\"expires_datetime\":\"2024-06-06T12:00:00\"}}" {base_url}/apikeys/1
```

*   API密钥（按ID）

```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/apikeys/3
```

### 报表
*   获取高级报表文件的Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports?reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取高级报表文件 按 ID Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   删除高级报表文件 按 ID Ⓔ
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/advancedreports/1
```

*   获取联合设备的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取联合设备 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取联合设备的二氧化碳排放报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 二氧化碳排放报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的对比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取联合设备 对比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcomparison?quickmode=true&combinedequipmentid1=1&combinedequipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取联合设备的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的效率报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 效率报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的能源分类报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 能源分类报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的能源分项报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 能源分项报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的收入报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 收入报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备 负荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 负荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的输出报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 输出报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentplan?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取联合设备的统计报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取联合设备 统计报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/combinedequipmentstatistics?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取仪表盘
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/dashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取配电系统的Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/distributionsystem?distributionsystemid=1
```

*   获取能源流向图的Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energyflowdiagram?energyflowdiagramid=1&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取储能电站 仪表盘 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取储能电站 详情报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationdetails?id=1
```

*   获取储能电站 列表报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationlist
```

*   获取储能电站 能耗报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   获取储能电站 账单报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   获取储能电站 碳排放报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/energystoragepowerstationscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   获取设备的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取设备 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取设备的对比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取设备 对比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcomparison?quickmode=true&equipmentid1=1&equipmentid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取设备的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备的效率报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 效率报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备的能源分类报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 能源分类报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备的能源分项报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 能源分项报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备的收入报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 收入报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备 负荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 负荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备的输出报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 输出报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取设备 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentplan?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备的统计报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取设备 统计报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取电表的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN
```

*   获取电表 批量分析报表 （QuickMode）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&language=zh_CN&quickmode=true
```

*   获取电表的二氧化碳排放报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取电表 二氧化碳排放报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取电表的Comparison
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00&periodtype=hourly
```

*   获取电表 对比报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercomparison?meterid1=1&meterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2022-09-01T00:00:00&reportingperiodenddatetime=2022-09-02T00:00:00
```

*   获取电表的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取电表 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metercost?meterid=6&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取电表的能耗报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取电表 能耗报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取电表 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取电表 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterplan?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取电表 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取电表的实时报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1
```

*   获取电表 实时报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/meterrealtime?meterid=1&quickmode=true
```

*   获取电表的子表平衡报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取电表 子表平衡报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取电表的趋势报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertrend?meterid=6&reportingperiodstartdatetime=2020-09-10T00:00:00&reportingperiodenddatetime=2020-09-11T00:00:00
```

*   获取电表 趋势报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 21895d99b1157e665664a729be6fd8f71471c78d2ee797e57c32442f4d5084b0fcbbd6f799002c9b4a0a41d580fcdd64899f158f1ace0931da1e31bd81958294" {base_url}/reports/metertrend?quickmode=true&reportingperiodenddatetime=2024-12-18T00:00:00&meterid=6&reportingperiodstartdatetime=2024-12-10T00:00:00
```

*   获取电表的跟踪报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59
```

*   获取电表 跟踪报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59&quickmode=true
```

*   获取微电网 仪表盘 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取微电网 能耗报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsenergy?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   获取微电网 账单报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridsbilling?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   获取微电网 碳排放报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridscarbon?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4
```

*   获取微电网 详情报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgriddetails?microgridid=1
```

*   获取微电网 列表报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/microgridlist
```

*   获取离线电表的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取离线电表 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取离线电表的二氧化碳排放报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取离线电表 二氧化碳排放报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取离线电表的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取离线电表 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取离线电表的能耗报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取离线电表 能耗报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取离线电表 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取离线电表 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemeterplan?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取离线电表 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取数据点的实时报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/pointrealtime
```

*   获取车间的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取车间 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取车间的对比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取车间 对比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcomparison?quickmode=true&shopfloorid1=1&shopfloorid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取车间的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取车间的仪表盘
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloordashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间的能源分类报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 能源分类报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取车间的能源分项报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 能源分项报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取车间 负荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 负荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取车间 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorplan?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取车间的统计报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取车间 统计报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的效率报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 效率报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的能源分类报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 能源分类报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的能源分项报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 能源分项报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的收入报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 收入报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间 负荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 负荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的输出报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 输出报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spaceplan?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取空间的统计报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取空间 统计报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取门店的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取门店 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取门店的对比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取门店 对比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecomparison?quickmode=true&storeid1=1&storeid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取门店的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storecost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取门店的仪表盘
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storedashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店的能源分类报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 能源分类报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取门店的能源分项报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 能源分项报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取门店 负荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 负荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取门店 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storeplan?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取门店的统计报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取门店 统计报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取租户的批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取租户 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取租户 Bill Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantbill?tenantid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取租户的对比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取租户 对比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcomparison?quickmode=true&tenantid1=1&tenantid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取租户的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取租户的仪表盘
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantdashboard?useruuid=dcdb67d1-6116-4987-916f-6fc6cf2bc0e4&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户的能源分类报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 能源分类报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取租户的能源分项报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 能源分项报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取租户 负荷 Report
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 负荷 Report （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取租户 节能报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 计划报表 Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantplan?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 节能报表 （快速模式） Ⓔ
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取租户的统计报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取租户 统计报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取Vitrual 电表 批量分析报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```

*   获取Vitrual 电表 批量分析报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```

*   获取虚拟电表的二氧化碳排放报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取虚拟电表 二氧化碳排放报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取虚拟电表的对比
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取虚拟电表 对比 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercomparison?virtualmeterid1=1&virtualmeterid2=2&quickmode=true&periodtype=hourly&reportingperiodstartdatetime=2025-10-01T00:00:00&reportingperiodenddatetime=2025-11-01T00:00:00
```

*   获取虚拟电表的成本报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取虚拟电表 成本报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取虚拟电表的能耗报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取虚拟电表 能耗报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   获取虚拟电表的节能报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取虚拟电表的计划报表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmeterplan?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

*   获取虚拟电表 节能报表 （快速模式）
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   新建离线电表的修改数值
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" -H "Content-类型: application/json" -d "{\"meter\":1,\"value\":[[\"2023-07-01\",\"123\"],[\"2023-07-02\",\"123\"]]}" {base_url}/reports/offlinemeterinput
```

*   获取离线电表的数值列表
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: c5ee62be2792ed4a59de1096511934288f4c192363529dafc00b3b35f81f224a5cc44c9aae46ac8966dc52f1ea0039395551bdf3f86aff6bb2b6b032834fc139" {base_url}/reports/metermonthgenerate?offlinemeterid=1&reportingperiodstartdatetime=2023-07-01T00:00:00&reportingperiodenddatetime=2023-07-31T23:59:59
```

