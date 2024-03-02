---
sidebar_position: 4
---

# API

View in Postman: import the file MyEMS.postman_collection.json with Postman

### AdvancedReportConfig

*   Get All Advanced Report Configs

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/advancedreports
```

*   Get All Advanced Report Config by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/advancedreports/{id}
```

*   POST Create an Advanced Report Config

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"Space Daily Report1", "expression":"{\"space_id\":1}",  "is_enabled":true, "next_run_datetime": "2023-09-06T20:00:00", "is_run_immediately": false}}' {{base_url}}/advancedreports
```

*   PUT Update an Advanced Report Config

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Space Monthly Report", "expression":"{\"space_id\":1}",  "is_enabled":true, "next_run_datetime":"2023-09-01T00:00:00", "is_run_immediately": false}}' {{base_url}}/advancedreports/{id}
```

*   PUT Run an Advanced Report

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{}}' {{base_url}}/advancedreports/{id}/run
```

*   DELETE an Advanced Report Config

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/advancedreports/{id}
```

### Combined Equipment
*   GET a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}
```
Result

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Combined Equipment ID                                        |
| name              | string    | Combined Equipment name                                      |
| uuid              | string    | Combined Equipment UUID                                      |
| is_input_counted  | boolean   | Indicates if the combined equipment's energy input is counted for aggregating |
| is_output_counted | boolean   | Indicates if the combined equipment's energy output is counted for aggregating |
| cost_center       | Object    | Cost Center Object                                           |
| description       | string    | Combined Equipment description                               |
| qrcode            | string    | QRCode in String                                             |

*   GET All Equipments
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments
```
*   DELETE a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}
```
*   POST Create a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"MyEMS Chiller Plant", "is_input_counted":true, "is_output_counted":false, "cost_center_id":1, "svg":"<svg></svg>", "camera_url":"http://XXX", "description":"equipment description"}}' {{base_url}}/combinedequipments
```
*   PUT Update a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"MyEMS Combined Chiller Plant", "is_input_counted":true, "is_output_counted":true, "cost_center_id":1, "svg":"<svg></svg>", "camera_url":"http://XXXs", "description":"equipment description"}}' {{base_url}}/combinedequipments/{id}
```
*   POST Clone a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{}}' {{base_url}}/combinedequipments/{id}
```
*   GET All Equipments of a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/equipments
```
*   POST Bind an Equipment to a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"equipment_id":1}}' {{base_url}}/combinedequipments/{id}/equipments
```
*   DELETE an Equipment from a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/equipments/{eid}
```
*   GET All Meters of a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/meters
```
*   POST Bind a Meter to a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":1, "is_output":false}}' {{base_url}}/combinedequipments/{id}/meters
```
*   DELETE a Meter from a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/meters/{mid}
```
*   GET All Parameters of a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/parameters
```
*   GET a Parameter of a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/parameters/{pid}
```
Result

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Parameter ID                                                 |
| name              | string    | Parameter name                                               |
| parameter_type    | string    | Parameter Type: constant, point, meter                       |
| is_input_counted  | boolean   | Indicates if the Combined Equipment's energy input is counted for aggregating |
| is_output_counted | boolean   | Indicates if the Combined Equipment's energy output is counted for aggregating |
| constant          | string    | Parameter constant value                                     |
| point             | object    | Parameter point object                                       |
| numerator_meter   | object    | Parameter numerator meter object                             |
| denominator_meter | object    | Parameter numerator meter object                             |

*   POST Create a constant Parameter for a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test constant parameter", "parameter_type":"constant", "constant":"test constant", "point_id":null, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/combinedequipments/{id}/parameters
```
*   PUT Update a constant Parameter for a Combined Equipment

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"test parameter1", "parameter_type":"constant", "constant":"test constant1", "point_id":null, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/combinedequipments/{id}/parameters/{id}
```

*   POST Create a point Parameter for a Combined Equipment

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"point", "constant":null, "point_id":1, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/combinedequipments/{id}/parameters
```
*   PUT Update a point Parameter for a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"test parameter", "parameter_type":"point", "constant":null, "point_id":3, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/combinedequipments/{id}/parameters/{id}
```

*   POST Create a meter Parameter for a Combined Equipment

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test fraction parameter", "parameter_type":"fraction", "constant":null, "point_id":null, "numerator_meter_uuid":"8449878f-b368-4ad9-a41c-e2c49189297a", "denominator_meter_uuid":"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd"}}' {{base_url}}/combinedequipments/{id}/parameters
```
*   DELETE a Parameter from a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/parameters/{pid}
```
*   GET All Offline Meters of a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/offlinemeters
```
*   POST Bind an Offline Meter to a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1}}' {{base_url}}/combinedequipments/{id}/offlinemeters
```
*   DELETE an Offline Meter from a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/offlinemeters/{mid}
```
*   GET All Virtual Meters of a Combined Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/virtualmeters
```
*   POST Bind Virtual Meter to a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1, "is_output":false}}' {{base_url}}/combinedequipments/{id}/virtualmeters
```
*   DELETE an Virtual Meter from a Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/virtualmeters/{mid}
```

*   GET All Commands associated with Combined Equipment ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/combinedequipments/{id}/commands
```

*   POST Bind Command to Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":3}}' {{base_url}}/combinedequipments/{id}/commands
```

*   DELETE Unbind Command from Combined Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":3}}' {{base_url}}/combinedequipments/{id}/commands/{id}
```

### Contact

*   GET Contact by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/contacts/{id}
```
| Name        | Data Type | Description         |
| ----------- | --------- | ------------------- |
| id          | integer   | Contact ID          |
| name        | string    | Contact name        |
| uuid        | string    | Contact UUID        |
| email       | string    | Contact email       |
| phone       | string    | Contact phone       |
| description | string    | Contact description |

*   GET All Contacts

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/contacts
```
*   DELETE Contact by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/contacts/{id}
```
*   POST Create a New Contact
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"albert", "email":"albert@myems.io", "phone":"+8613888888888", "description":"contact description"}}' {{base_url}}/contacts
```
*   PUT Update a Contact
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"albert", "email":"albert@myems.io", "phone":"+8613888888899", "description":"contact description"}}' {{base_url}}/contacts/{id}
```

### Command

*   Get All Commands

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/commands
```

*   GET a Comand by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/commands/{id}
```

*   POST Create New Command (without set_value)

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"turn_off_light", "topic":"myems/point/2", "payload":"{address:1, slave_id:1}", "description":"turn off light"}}' {{base_url}}/commands
```

*   POST Create New Command (with set_value)

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"turn_up_light", "topic":"myems/point/2", "payload":"{address:1, slave_id:1, set_value: $s1}", "set_value": 2.0, "description":"turn up light"}}' {{base_url}}/commands
```

*   PUT Update a Command (without set_value)

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"turn_up_light", "topic":"myems/point/2", "payload":"{address:1, slave_id:1}", "description":"turn up light"}}' {{base_url}}/commands/{id}
```

*   PUT Update a Command (with set_value)

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"turn_up_light", "topic":"myems/point/2", "payload":"{address:1, slave_id:1, set_value: $s1}", "set_value": 2.0, "description":"turn up light"}}' {{base_url}}/commands/{id}
```

*   DELETE a Command by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/commands/{id}
```

*   PUT Send a Command by ID

```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"set_value": 2.0}}' {{base_url}}/commands/{id}/send
```

### Cost Center
*   GET Cost Center by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/costcenters/{id}
```
Result in JSON

| Name        | Data Type | Description                                               |
| ----------- | --------- | --------------------------------------------------------- |
| id          | integer   | Cost Center ID                                            |
| name        | string    | Cost Center name                                          |
| uuid        | string    | Cost Center UUID                                          |
| external_id | string    | Cost Center External ID ( For example, ID in SAP, ERP...) |

*   GET all Cost Centers
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/costcenters
```
*   DELETE Cost Center by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/costcenters/{id}
```
*   POST Create New Cost Center
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"动力中心", "external_id":"21829198980001"}}' {{base_url}}/costcenters
```
*   PUT Update a Cost Center
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"动力中心2", "external_id":"21829198980002"}}' {{base_url}}/costcenters/{id}
```
*   GET All Tariffs associated with Cost Center ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/costcenters/{id}/tariffs
```
*   POST Create a Cost Center and Tariff Relation
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"tariff_id":"3"}}' {{base_url}}/costcenters/{id}/tariffs
```
*   DELETE a Cost Center and Tariff Relation by tid
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/costcenters/{id}/tariffs/{tid}
```

### Cost File
*   GET a Cost File by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/costfiles/{id}
```
Result

| Name            | Data Type | Description                                    |
| --------------- | --------- | ---------------------------------------------- |
| id              | integer   | Cost File ID                                   |
| file_name       | string    | Cost File name                                 |
| uuid            | string    | Cost File UUID                                 |
| upload_datetime | string    | Upload Datetime in Local Timezone              |
| status          | string    | Cost File processing status (new, done, error) |
| file_object     | BLOB      | Cost File Object                               |

*   GET All Cost Files
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/costfiles
```
*   DELETE a Cost File by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/costfiles/{id}
```
*   POST Upload a Cost File (call users login API to get 'User-UUID' and 'Token')
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/TBD" -X POST -d 'file: (binary)' {{base_url}}/costfiles
```
*   GET Restore a Cost File by ID from database to disk
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/costfiles/{id}/restore
```

### Data Source

*   GET Data Source by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/datasources/{id}
```
Result in JSON

| Name               | Data Type | Description                                                  |
| ------------------ | --------- | ------------------------------------------------------------ |
| id                 | integer   | Data Source ID                                               |
| name               | string    | Data Source name                                             |
| gateway            | object    | Gateway                                                      |
| uuid               | string    | Data Source UUID                                             |
| protocol           | string    | Protocol Type Supported: 'modbus-tcp', 'modbus-rtu', 'bacnet-ip', 's7', 'profibus', 'profinet', 'opc-ua', 'lora', 'simulation', 'controllogix', 'weather', 'mysql', 'sqlserver', 'postgresql', 'oracle', 'mongodb', 'influxdb', 'mqtt'          |
| connection         | json      | Connection data in JSON.                                     |
| last_seen_datetime | string    | Indicates the last time when the data source was seen in local timezone |
| status             | string    | 'online' or 'offline' determined by last seen datetime       |

*   GET all Data Sources
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/datasources
```
*   DELETE Data Source by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/datasources/{id}
```
*   POST Create Data Source
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Modbus1", "gateway_id": 1, "protocol":"modbus-tcp", "connection":"{\"host\":\"10.1.2.88\", \"port\":502}", "description":"Modbus1"}}' {{base_url}}/datasources
```
*   PUT Update Data Source by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Modbus1", "gateway_id":1, "protocol":"modbus-tcp", "connection":"{\"host\":\"10.1.2.99\", \"port\":502}", "description":"Modbus1"}}' {{base_url}}/datasources/{id}
```
*   GET all points of the Data Source by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/datasources/{id}/points
```

### Distribution Circuit
*   GET Distribution Circuit by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/distributioncircuits/{id}
```
Result in JSON

| Name                | Data Type     | Description                   |
| ------------------- | ------------- | ----------------------------- |
| id                  | integer       | Distribution Circuit ID       |
| name                | string        | Distribution Circuit name     |
| uuid                | string        | Distribution Circuit UUID     |
| distribution_system | object        | Distribution System Object    |
| distribution_room   | string        | Distribution Room             |
| switchgear          | string        | Switchgear                    |
| peak_load           | decimal(18,3) | Peak Load (KW)                |
| peak_current        | decimal(18,3) | Peak Current (A)              |
| customers           | string        | Customers or users            |
| meters              | string        | Meters (output or next level) |

*   GET all Distribution Circuits
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/distributioncircuits
```
*   POST Create new Distribution Circuit
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"51W92", "distribution_system_id":1, "distribution_room":"EW1", "switchgear":"51AL9", "peak_load": 30, "peak_current": 53.6, "customers": "地下室应急照明", "meters": "ALE-1102, ALE-1082"}}' {{base_url}}/distributioncircuits
```
*   DELETE a Distribution Circuit by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/distributioncircuits/{id}
```
*   PUT Update a Distribution Circuit by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"51W92", "distribution_system_id":1, "distribution_room":"EW1", "switchgear":"51AL9", "peak_load": 30, "peak_current": 53.6, "customers": "地下室应急照明", "meters": "ALE-1102, ALE-1082"}}' {{base_url}}/distributioncircuits/{id}
```
*   GET All Points associated with Distribution Circuit ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/distributioncircuits/{id}/points
```
*   POST Bind Point to Distribution Circuit
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":"2"}}' {{base_url}}/distributioncircuits/{id}/points
```
*   DELETE Unbind Point from Distribution Circuit
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/distributioncircuits/{id}/points/{pid}
```

### Data Repair File
*   GET a Data Repair File by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/datareapirfiles/{id}
```
Result

| Name            | Data Type | Description                                           |
| --------------- | --------- | ----------------------------------------------------- |
| id              | integer   | Data Repair File ID                                   |
| file_name       | string    | Data Repair File name                                 |
| uuid            | string    | Data Repair File UUID                                 |
| upload_datetime | string    | Upload Datetime in Local Timezone                     |
| status          | string    | Data Repair File processing status (new, done, error) |
| file_object     | BLOB      | Data Repair File Object                               |

*   GET All Data Repair Files
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/datareapirfiles
```
*   DELETE a Data Repair File by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/datareapirfiles/{id}
```
*   POST Upload a Data Repair File
    (call users login API to get 'User-UUID' and 'Token')
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN"  -H "Content-Type: application/TBD" -X POST -d 'file: (binary)' {{base_url}}/datareapirfiles
```
*   GET Restore a Data Repair File by ID from database to disk
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/datareapirfiles/{id}/restore
```

### Distribution System
*   GET Distribution System by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/distributionsystems/{id}
```
Result in JSON

| Name        | Data Type | Description              |
| ----------- | --------- | ------------------------ |
| id          | integer   | Distribution System ID   |
| name        | string    | Distribution System name |
| uuid        | string    | Distribution System UUID |
| svg         | string    | SVG file in plain text   |
| description | string    | Description (allow None) |

*   GET all Distribution Systems
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/distributionsystems
```
*   DELETE a Distribution System by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/distributionsystems/{id}
```
*   POST Create new Distribution System
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"示例配电系统2", "svg":"<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"5cm\" height=\"4cm\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><desc>Four separate rectangles</desc><rect x=\".5cm\" y=\".5cm\" width=\"2cm\" height=\"1cm\"/></svg>", "description":"demo description"}}' {{base_url}}/distributionsystems
```
*   PUT Update a Distribution System
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"示例配电系统1", "svg":"<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"5cm\" height=\"4cm\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><desc>Four separate rectangles</desc><rect x=\".5cm\" y=\".5cm\" width=\"2cm\" height=\"1cm\"/></svg>", "description":"demo description"}}' {{base_url}}/distributionsystems/{id}
```
*   GET All Distribution Circuits associated with Distribution Circuit
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/distributionsystems/{id}/distributioncircuits
```

### Email Message
*   GET an Email Message by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/emailmessages/{id}
```

Result in JSON

| Name                 | Data Type | Description                                                 |
| -------------------- | --------- | ----------------------------------------------------------- |
| id                   | integer   | Email Message ID                                            |
| recipient_name       | string    | Recipient Name                                              |
| recipient_email      | string    | Recipient Email                                             |
| subject              | string    | Email Message Subject                                       |
| message              | string    | Email Message Body                                          |
| attachment_file_name | string    | Email Attachment File Name                                  |
| create_datetime      | float     | Email Message Created Datetime (POSIX timestamp *   1000)   |
| scheduled_datetime   | float     | Email Message Scheduled Datetime (POSIX timestamp *   1000) |
| status               | string    | Status ('new', 'sent', 'timeout'                            |


* POST Create New Email Message
```bash
curl --location --request POST '{{base_url}}/emailmessages' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: GET-TOKEN-AFTER-LOGIN' \
--form 'file=@"/D:/myems/meterenergy.xlsx"' \
--form 'req="{\"data\":{\"rule_id\":1, \"recipient_name\":\"myems\", \"recipient_email\":\"myems@163.com\", \"subject\":\"report_01_2021_12_24\", \"message\":\"report_01_2021_12_24\", \"created_datetime\":\"2021-12-24T00:00:00\", \"scheduled_datetime\":\"2021-12-24T00:00:00\"}}"'
```
* GET Email Messages by Datetime Range
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/emailmessages?startdatetime={startdatetime}&enddatetime={enddatetime}
```
*   DELETE an Email Message by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/emailmessages/{id}
```

### Email Server
*   GET an Email Server by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/emailservers/{id}
```
Result in JSON

| Name                    | Data Type | Description                                       |
| ----------------------- | --------- | ------------------------------------------------- |
| id                      | integer   | Email Server ID                                   |
| host                    | string    | Email Server host                                 |
| port                    | integer   | Email Server port                                 |
| requires_authentication | boolean   | Indicates if the server requires authentication   |
| user_name               | string    | Email Server user name                            |
| password                | string    | Email Server password                             |
| from_addr               | string    | Indicates from which email address to send emails |

*   GET All Email Servers
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/emailservers
```
*   DELETE an Email Server by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/emailservers/{id}
```
*   POST Create New Email Server
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"host":"smtp.126.com","port":25, "requires_authentication":true, "user_name":"myems" , "password":"!MyEMS1" , "from_addr":"myems@126.com"}}' {{base_url}}/emailservers
```
*   PUT Update an Email Server
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"host":"smtp.myems.io","port":25, "requires_authentication":true, "user_name":"myems" , "password":"!MyEMS1" , "from_addr":"myems@myems.io"}}' {{base_url}}/emailservers/{id}
```

### Energy Category
*   GET an Energy Category by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energycategories/{id}
```
Result in JSON

| Name            | Data Type | Description                  |
| --------------- | --------- | ---------------------------- |
| id              | integer   | Energy Category ID           |
| name            | string    | Energy Category name         |
| uuid            | string    | Energy Category UUID         |
| unit_of_measure | string    | Unit of measure              |
| kgce            | string    | KG coal equivalent           |
| kgco2e          | string    | KG Carbon dioxide equivalent |


*   GET All Energy Categories
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energycategories
```
*   DELETE an Energy Category by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/energycategories/{id}
```
*   POST Create an Energy Category
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"柴油","unit_of_measure":"L", "kgce":0.1229 , "kgco2e":0.8825}}' {{base_url}}/energycategories
```
*   PUT Update an Energy Category
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"汽油","unit_of_measure":"L", "kgce":0.1229 , "kgco2e":0.8825}}' {{base_url}}/energycategories/{id}
```

### Energy Flow Diagram
*   GET an Energy Flow Diagram by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energyflowdiagrams/{id}
```
Result

| Name | Data Type | Description    |
| ---- | --------- | -------------- |
| id   | integer   | Equipment ID   |
| name | string    | Equipment name |
| uuid | string    | Equipment UUID |

*   GET All Energy Flow Diagrams
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energyflowdiagrams
```
*   DELETE an Energy Flow Diagram by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/energyflowdiagrams/{id}
```
*   POST Create an Energy Flow Diagram
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"MyEMS Energy Flow"}}' {{base_url}}/energyflowdiagrams
```
*   PUT Update an Energy Flow Diagram
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"MyEMS Energy Flow Diagram"}}' {{base_url}}/energyflowdiagrams/{id}
```
*   GET All Nodes of an Energy Flow Diagram by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energyflowdiagrams/{id}/nodes
```
*   POST Create a Node of an Energy Flow Diagram
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"10KV#3"}}' {{base_url}}/energyflowdiagrams/{id}/nodes
```
*   PUT Update a Node of an Energy Flow Diagram
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"10KV Input #1"}}' {{base_url}}/energyflowdiagrams/{id}/nodes/{nid}
```
*   DELETE a Node of an Energy Flow Diagram
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/energyflowdiagrams/{id}/nodes/{nid}
```
*   GET All Links of an Energy Flow Diagram by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energyflowdiagrams/{id}/links
```
*   POST Create a Link of an Energy Flow Diagram
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"source_node_id":1000000, "target_node_id":1000008, "meter_uuid":"eb78f7f9-f26f-463b-92fa-d9daf5b3651c"}}' {{base_url}}/energyflowdiagrams/{id}/links
```
*   PUT Update a Link of an Energy Flow Diagram
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"source_node_id":1000000, "target_node_id":1000009, "meter_uuid":"eb78f7f9-f26f-463b-92fa-d9daf5b3651c"}}' {{base_url}}/energyflowdiagrams/{id}/links/{lid}
```
*   DELETE a Link of an Energy Flow Diagram
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/energyflowdiagrams/{id}/links/{lid}
```

### Energy Item
*   GET an Energy Item by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energyitems/{id}
```
Result in JSON

| Name            | Data Type | Description            |
| --------------- | --------- | ---------------------- |
| id              | integer   | Energy Item ID         |
| name            | string    | Energy Item name       |
| uuid            | string    | Energy Item UUID       |
| Energy Category | object    | Energy Category Object |


*   GET All Energy Items
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energyitems
```
*   DELETE an Energy Item by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/energyitems/{id}
```
*   POST Create an Energy Item
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"租户用电","energy_category_id":1}}' {{base_url}}/energyitems
```
*   PUT Update an Energy Item
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"空调用","energy_category_id":1}}' {{base_url}}/energyitems/{id}
```

### Energy Storage Power Station

*   GET All Energy Storage Power Stations
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energystoragepowerstations
```

*   GET an Energy Storage Power Station by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/energystoragepowerstations/{id}
```

*   POST Create New Energy Storage Power Station
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/energystoragepowerstations
```

*   PUT Update an Energy Storage Power Station
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/energystoragepowerstations/{id}
```

*   DELETE an Energy Storage Power Station by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/energystoragepowerstations/{id}
```

### Equipment
*   GET Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments/{id}
```
Result

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Equipment ID                                                 |
| name              | string    | Equipment name                                               |
| uuid              | string    | Equipment UUID                                               |
| is_input_counted  | boolean   | Indicates if the Equipment's energy input is counted for aggregating |
| is_output_counted | boolean   | Indicates if the Equipment's energy output is counted for aggregating |
| cost_center       | Object    | Cost Center Object                                           |
| description       | string    | Equipment description                                        |
| qrcode            | string    | QRCode in String                                             |

*   GET All Equipments
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments
```
*   DELETE Equipment by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/equipments/{id}
```
*   POST Create an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"MyEMS Chiller", "is_input_counted":true, "is_output_counted":false, "cost_center_id":1, "svg":"<svg></svg>", "camera_url":"http://XXX", "description":"equipment description"}}' {{base_url}}/equipments
```
*   PUT Update an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"new MyEMS Chiller", "is_input_counted":true, "is_output_counted":true, "cost_center_id":1, "svg":"<svg></svg>", "camera_url":"http://XXX", "description":"equipment description"}}' {{base_url}}/equipments/{id}
```
*   POST Clone an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{}}' {{base_url}}/equipments/{id}
```
*   GET All Meters of Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments/{id}/meters
```
*   POST Bind a Meter to an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":3, "is_output":false}}' {{base_url}}/equipments/{id}/meters
```
*   DELETE a Meter from an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/equipments/{id}/meters/{mid}
```
*   GET All Parameters of Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments/{id}/parameters
```
*   GET a Parameter of Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments/{id}/parameters/{pid}
```
Result

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Parameter ID                                                 |
| name              | string    | Parameter name                                               |
| parameter_type    | string    | Parameter Type: constant, point, meter                       |
| is_input_counted  | boolean   | Indicates if the equipment's energy input is counted for aggregating |
| is_output_counted | boolean   | Indicates if the equipment's energy output is counted for aggregating |
| constant          | string    | Parameter constant value                                     |
| point             | object    | Parameter point object                                       |
| numerator_meter   | object    | Parameter numerator meter object                             |
| denominator_meter | object    | Parameter numerator meter object                             |

*   POST Create a constant Parameter for an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"constant", "constant":"test constant", "point_id":null, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/equipments/{id}/parameters
```
*   POST Create a point Parameter for an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"point", "constant":null, "point_id":1, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/equipments/{id}/parameters
```
*   POST Create a meter Parameter for an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"fraction", "constant":null, "point_id":null, "numerator_meter_uuid":"89ff5118-d0c2-4dd8-8098-a8698189b2ea", "denominator_meter_uuid":"5ca62d2a-908e-40c5-a6b5-a8e436d60db4"}}' {{base_url}}/equipments/{id}/parameters
```
*   DELETE a Parameter from an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/equipments/{id}/parameters/{pid}
```
*   GET All Offline Meters of Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments/{id}/offlinemeters
```
*   POST Bind an Offline Meter to an Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1, "is_output":false}}' {{base_url}}/equipments/{id}/offlinemeters
```
*   DELETE an Offline Meter from an Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/equipments/{id}/offlinemeters/{mid}
```
*   GET All Virtual Meters of Equipment by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/equipments/{id}/virtualmeters
```
*   POST Bind Virtual Meter to an Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1, "is_output":false}}' {{base_url}}/equipments/{id}/virtualmeters
```
*   DELETE an Virtual Meter from an Equipment
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/equipments/{id}/virtualmeters/{mid}
```

### Combined Equipment
*   GET a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}
```
Result

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Combined Equipment ID                                        |
| name              | string    | Combined Equipment name                                      |
| uuid              | string    | Combined Equipment UUID                                      |
| is_input_counted  | boolean   | Indicates if the combined equipment's energy input is counted for aggregating |
| is_output_counted | boolean   | Indicates if the combined equipment's energy output is counted for aggregating |
| cost_center       | Object    | Cost Center Object                                           |
| description       | string    | Combined Equipment description                               |
| qrcode            | string    | QRCode in String                                             |

*   GET All Equipments
```bash
curl -i -X GET {{base_url}}/combinedequipments
```
*   DELETE a Combined Equipment by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}
```
*   POST Create a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"MyEMS Chiller Plant", "is_input_counted":true, "is_output_counted":false, "cost_center_id":1, "description":"equipment description"}}' {{base_url}}/combinedequipments
```
*   PUT Update a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"MyEMS Chiller Plant", "is_input_counted":true, "is_output_counted":true, "cost_center_id":1, "description":"equipment description"}}' {{base_url}}/combinedequipments/{id}
```
*   POST Clone a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{}}' {{base_url}}/combinedequipments/{id}
```
*   GET All Equipments of a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}/equipments
```
*   POST Bind an Equipment to a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"equipment_id":1}}' {{base_url}}/combinedequipments/{id}/equipments
```
*   DELETE an Equipment from a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/equipments/{eid}
```
*   GET All Meters of a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}/meters
```
*   POST Bind a Meter to a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":1}}' {{base_url}}/combinedequipments/{id}/meters
```
*   DELETE a Meter from a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/meters/{mid}
```
*   GET All Parameters of a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}/parameters
```
*   GET a Parameter of a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}/parameters/{pid}
```
Result

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Parameter ID                                                 |
| name              | string    | Parameter name                                               |
| parameter_type    | string    | Parameter Type: constant, point, meter                       |
| is_input_counted  | boolean   | Indicates if the Combined Equipment's energy input is counted for aggregating |
| is_output_counted | boolean   | Indicates if the Combined Equipment's energy output is counted for aggregating |
| constant          | string    | Parameter constant value                                     |
| point             | object    | Parameter point object                                       |
| numerator_meter   | object    | Parameter numerator meter object                             |
| denominator_meter | object    | Parameter numerator meter object                             |

*   POST Create a constant Parameter for a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"constant", "constant":"test constant", "point_id":null, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/combinedequipments/{id}/parameters
```
*   POST Create a point Parameter for a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"point", "constant":null, "point_id":1, "numerator_meter_uuid":null, "denominator_meter_uuid":null}}' {{base_url}}/combinedequipments/{id}/parameters
```
*   POST Create a meter Parameter for a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"test parameter", "parameter_type":"fraction", "constant":null, "point_id":null, "numerator_meter_uuid":"89ff5118-d0c2-4dd8-8098-a8698189b2ea", "denominator_meter_uuid":"5ca62d2a-908e-40c5-a6b5-a8e436d60db4"}}' {{base_url}}/combinedequipments/{id}/parameters
```
*   DELETE a Parameter from a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/parameters/{pid}
```
*   GET All Offline Meters of a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}/offlinemeters
```
*   POST Bind an Offline Meter to a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1}}' {{base_url}}/combinedequipments/{id}/offlinemeters
```
*   DELETE an Offline Meter from a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/offlinemeters/{mid}
```
*   GET All Virtual Meters of a Combined Equipment by ID
```bash
curl -i -X GET {{base_url}}/combinedequipments/{id}/virtualmeters
```
*   POST Bind Virtual Meter to a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1}}' {{base_url}}/combinedequipments/{id}/virtualmeters
```
*   DELETE an Virtual Meter from a Combined Equipment
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/combinedequipments/{id}/virtualmeters/{mid}
```

### Gateway
*   GET Gateway by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/gateways/{id}
```
Result in JSON

| Name               | Data Type | Description                                                  |
| ------------------ | --------- | ------------------------------------------------------------ |
| id                 | integer   | Gateway ID                                                   |
| name               | string    | Gateway name                                                 |
| uuid               | string    | Data Source UUID                                             |
| token              | string    | Data Source Token                                            |
| last_seen_datetime | float     | Indicates the last time when the gateway was seen in a number of milliseconds since January 1, 1970, 00:00:00, universal time |
| status             | string    | 'online' or 'offline' determined by last seen datetime       |

*   GET all Gateways
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/gateways
```
*   DELETE Gateway by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/gateways/{id}
```
*   POST Gateway
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"MyEMS Gateway 3", "description":"Gateway 3"}}' {{base_url}}/gateways
```
*   PUT Gateway
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"MyEMS Gateway #3", "description":"Gateway #3"}}' {{base_url}}/gateways/{id}
```
*   GET all data sources of the Gateway by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/gateways/{id}/datasources
```

### Knowledge File
*   GET Knowledge File by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/knowledgefiles/{id}
```
Result

| Name              | Data Type | Description                       |
| ----------------- | --------- | --------------------------------- |
| id                | integer   | Knowledge File ID                 |
| file_name         | string    | Knowledge File name               |
| uuid              | string    | Knowledge File UUID               |
| upload_datetime   | string    | Upload Datetime in Local Timezone |
| user_display_name | string    | Upload user's display name        |
| file_object       | BLOB      | Knowledge File Object             |

*   GET All Knowledge Files
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/knowledgefiles
```
*   DELETE a Knowledge File by id
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/knowledgefiles/{id}
```
*   POST Upload a Knowledge File (call users login API to get 'User-UUID' and 'Token')
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/TBD" -X POST -d 'file: (binary)' {{base_url}}/knowledgefiles
```
*   GET Restore a Knowledge File by id from database to disk
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/knowledgefiles/{id}/restore
```

### Menu
*   GET Menu by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/menus/{id}
```
Result

| Name           | Data Type | Description     |
| -------------- | --------- | --------------- |
| id             | integer   | Menu ID         |
| name           | string    | Menu name       |
| path           | string    | Menu path       |
| parent_menu_id | integer   | Parent Menu ID  |
| is_hidden      | boolean   | The menu status |

*   GET All Menus
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/menus
```
*   PUT Update a Menu
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"is_hidden":true}}' {{base_url}}/menus/{id}
```
*   Get All Menus for Web UI
```bash
curl -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/menus/web
```
*   GET All Children of Menu by ID
```bash
curl -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/menus/{id}/children
```

### Meter
*   GET Meter by ID

```bash
curl -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/meters/{id}
```
Result

| Name              | Data Type     | Description                                                  |
| ----------------- | ------------- | ------------------------------------------------------------ |
| id                | integer       | Meter ID                                                     |
| name              | string        | Meter name                                                   |
| uuid              | string        | Meter UUID                                                   |
| energy_category   | Object        | Energy Category Object                                       |
| is_counted        | boolean       | Meter is counted in associated unit                          |
| hourly_low_limit  | decimal(18,3) | Inclusive. Default is 0. If the meter has accuracy problems, set the value to a small positive value, such as 0.100 |
| hourly_high_limit | decimal(18,3) | Inclusive. Maximum energy consumption per hour, Rated total active Power, Rated Flow, etc. |
| cost_center       | Object        | Cost Center Object                                           |
| energy_item       | Object        | Energy Item Object                                           |
| master_meter      | Object        | Master Meter Object                                          |
| description       | string        | Meter description                                            |
| qrcode            | string        | Meter QRCode String                                          |

*   GET All Meters
```bash
curl -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/meters
```
*   DELETE Meter by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/meters/{id}
```
*   POST Create a Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data":{"name":"PM20", "energy_category_id":1, "hourly_low_limit":0.000, "hourly_high_limit":999.99, "is_counted":true, "cost_center_id":1, "energy_item_id":1, "master_meter_id":1, "description":"空调用电"}}' {{base_url}}/meters
```
*   PUT Update a Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"PM201", "energy_category_id":1, "hourly_low_limit":0.000, "hourly_high_limit":999.99, "is_counted":true, "cost_center_id":1, "energy_item_id":1, "master_meter_id":1, "description":"空调用电"}}' {{base_url}}/meters/{id}
```
*   GET All Sub-meters of Meter by ID
```bash
curl -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/meters/{id}/submeters
```
*   GET All Points associated with Meter ID
```bash
curl -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/meters/{id}/points
```
*   POST Bind Point to Meter
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":"3"}}' {{base_url}}/meters/{id}/points
```
*   DELETE Unbind Point from Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/meters/{id}/points/{pid}
```

*   GET All Commands associated with Meter ID
```bash
curl -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/meters/{id}/commands
```

*   POST Bind Command to Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":3}}' {{base_url}}/meters/{id}/commands
```

*   DELETE Unbind Command from Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{{base_url}}/meters/{id}/commands/{id}
```

### Microgrid

*   GET All Microgrids

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids
```

*   GET a Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}
```

*   POST Create New Microgrid
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "architecture_type_id":1, "owner_type_id":1, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/microgrids
```

*   PUT Update a Microgrid

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "architecture_type_id":1, "owner_type_id":1, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/microgrids/{id}
```

*   DELETE a Microgrid by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgrids/{id}
```

*   GET All Sensors of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/sensors
```

*   POST Bind a Sensor to a Microgrid
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"sensor_id":1}}' {{base_url}}/microgrids/{id}/sensors
```

*   DELETE a Sensor from a Microgrid
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgrids/{id}/sensors/{id}
```

*   GET All Batteries of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{{base_url}}/microgrids/{id}/batteries
```

*   GET All EVChargers of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/evchargers
```

*   GET All Generators of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/generators
```

*   GET All Grids of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/grids
```

*   GET All Heatpumps of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/heatpumps
```

*   GET All Loads of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/loads
```

*   GET All Photovoltaics of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/photovoltaics
```

*   GET All Power Conversion Systems of Microgrid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/powerconversionsystems
```

*   GET All User By Microgrid ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgrids/{id}/users
```

*   POST Bind a User to a Microgrid
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"user_id":1}}' {{base_url}}/microgrids/{id}/users
```

*   DELETE a User from a Microgrid
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgrids/{id}/users/{id}
```


### Microgrid Battery

*   GET All Microgrid Batteries
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridbatteries
```

*   GET a Microgrid Battery by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridbatteries/{id}
```

*   POST Create new Microgrid Battery
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Battery", "microgrid_id":1, "battery_state_point_id":1, "soc_point_id":2, "power_point_id":3, "charge_meter_id":1, "discharge_meter_id":2, "capacity": 30}}' {{base_url}}/microgridbatteries
```

*   DELETE a Microgrid Battery by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridbatteries/{id}
```

*   PUT Update Microgrid Battery by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Battery", "microgrid_id":1, "battery_state_point_id":1, "soc_point_id":2, "power_point_id":3, "charge_meter_id":1, "discharge_meter_id":2, "capacity": 50}}' {{base_url}}/microgridbatteries/{id}
```

### Microgrid EVCharger

*   GET All Microgrid Batteries
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridevchargers
```

*   GET a Microgrid Battery by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridevchargers/{id}
```

*   POST Create new Microgrid Battery
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"EVCharger", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 30}}' {{base_url}}/microgridevchargers
```

*   PUT Update Microgrid Battery by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"EVCharger", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 50}}' {{base_url}}/microgridevchargers/{id}
```

*   DELETE a Microgrid Battery by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridevchargers/{id}
```

### Microgrid Generator

*   GET All Microgrid Generators
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridgenerators
```

*   GET a Microgrid Generator by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridgenerators/{id}
```

*   POST Create new Microgrid Geratror
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Generator", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 30}}' {{base_url}}/microgridgenerators
```

*   PUT Update Microgrid Generator by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Generator", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 50}}' {{base_url}}/microgridgenerators/{id}
```

*   DELETE a Microgrid Generator by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridgenerators/{id}
```

### Microgrid Grid

*   GET All Microgrid Grids
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridgrids
```

*   GET a Microgrid Grid by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridgrids/{id}
```

*   POST Create new Microgrid Grid
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Grid", "microgrid_id":1, "buy_meter_id":1, "sell_meter_id":2, "capacity": 30}}' {{base_url}}/microgridgrids
```

*   PUT Update Microgrid Grid by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Grid", "microgrid_id":1, "buy_meter_id":1, "sell_meter_id":2, "capacity": 50}}' {{base_url}}/microgridgrids/{id}
```

*   DELETE a Microgrid Grid by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridgrids/{id}
```

### Microgrid Heatpump

*   GET All Microgrid Heatpumps
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridheatpumps
```

*   GET a Microgrid Heatpump by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridheatpumps/{id}
```

*   POST Create new Microgrid Heatpump
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Heatpump", "microgrid_id":1, "power_point_id":1, "electricity_meter_id":1, "heat_meter_id":2, "cooling_meter_id":3, "capacity": 30}}' {{base_url}}/microgridheatpumps
```

*   PUT Update Microgrid Heatpump by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Heatpump", "microgrid_id":1, "power_point_id":1, "electricity_meter_id":1, "heat_meter_id":2, "cooling_meter_id":3, "capacity": 50}}' {{base_url}}/microgridheatpumps/{id}
```

*   DELETE a Microgrid Heatpump by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridheatpumps/{id}
```

### Microgrid Load

*   GET All Microgrid Loads
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridloads
```

*   GET a Microgrid Load by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridloads/{id}
```

*   POST Create new Microgrid Load
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Load", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 30}}' {{base_url}}/microgridloads
```

*   PUT Update Microgrid Load by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Load", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 50}}' {{base_url}}/microgridloads/{id}
```

*   DELETE a Microgrid Load by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridloads/{id}
```

### Microgrid Photovoltaic

*   GET All Microgrid Photovoltaics
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridphotovoltaics
```

*   GET a Microgrid Photovoltaic by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridphotovoltaics/{id}
```

*   POST Create new Microgrid Photovoltaic
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Photovoltaic", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 30}}' {{base_url}}/microgridphotovoltaics
```

*   PUT Update Microgrid Photovoltaic by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Photovoltaic", "microgrid_id":1, "power_point_id":1, "meter_id":1, "capacity": 50}}' {{base_url}}/microgridphotovoltaics/{id}
```

*   DELETE a Microgrid Photovoltaic by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridphotovoltaics/{id}
```

### Microgrid Power Conversion Systems

*   GET All Microgrid Power Conversion Systems
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridpowerconversionsystems
```

*   GET a Microgrid Power Conversion System by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/microgridpowerconversionsystems/{id}
```

*   POST Create new Microgrid Power Conversion System
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Power Conversion System", "microgrid_id":1, "run_state_point_id":1, "capacity": 30}}' {{base_url}}/microgridpowerconversionsystems
```

*   PUT Update Microgrid Power Conversion System by ID
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"Power Conversion System", "microgrid_id":1, "run_state_point_id":1, "capacity": 50}}' {{base_url}}/microgridpowerconversionsystems/{id}
```

*   DELETE a Microgrid Power Conversion System by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/microgridpowerconversionsystems/{id}
```


### Notification

NOTE: Login before call these APIs, and then update User-UUID and Token in Headers

*   GET a Notification by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/notifications/{id}
```
Result

| Name             | Data Type | Description                                  |
| ---------------- | --------- | -------------------------------------------- |
| id               | integer   | Notification ID                              |
| created_datetime | string    | Created Datetime                             |
| status           | string    | Notification Status (unread, read, archived) |
| subject          | string    | Notification Subject                         |
| message          | string    | Notification Message                         |
| url              | string    | Notification URL                             |

*   GET All Notifications
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/notifications?startdatetime={startdatetime}&enddatetime={enddatetime}&status={status}
```
*   DELETE Notification by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/notifications/{id}
```
*   PUT Update a Notification
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"status":"read"}}' {{base_url}}/notifications/{id}
```
*   DELETE Notification
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/notifications/{id}
```

### Offline Meter
*   GET Offline Meter by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/offlinemeters/{id}
```
Result

| Name              | Data Type     | Description                                                  |
| ----------------- | ------------- | ------------------------------------------------------------ |
| id                | integer       | Offline Meter ID                                             |
| name              | string        | Offline Meter name                                           |
| uuid              | string        | Offline Meter UUID                                           |
| energy_category   | Object        | Energy Category Object                                       |
| is_counted        | boolean       | Offline Meter is counted in associated unit                  |
| hourly_low_limit  | decimal(18,3) | Inclusive. Default is 0. If the meter has accuracy problems, set the value to a small positive value, such as 0.100 |
| hourly_high_limit | decimal(18,3) | Inclusive. Maximum energy consumption per hour, Rated total active Power, Rated Flow, etc. |
| cost_center       | Object        | Cost Center Object                                           |
| energy_item       | Object        | Energy Item Object                                           |
| description       | string        | Offline Meter description                                    |

*   GET All Offline Meters
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/offlinemeters
```
*   DELETE Offline Meter by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/offlinemeters/{id}
```
*   POST Create an Offline Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"OfflinePM21", "energy_category_id":1, "hourly_low_limit":0.000, "hourly_high_limit":999.99, "is_counted":true, "cost_center_id":1, "energy_item_id":1, "description":"空调用电"}}' {{base_url}}/offlinemeters
```
*   PUT Update an Offline Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"OfflinePM201", "energy_category_id":1, "hourly_low_limit":0.000, "hourly_high_limit":999.99, "is_counted":true, "cost_center_id":1, "energy_item_id":1, "description":"空调用电"}}' {{base_url}}/offlinemeters/{id}
```

### Offline Meter File
*   GET an Offline Meter File by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/offlinemeterfiles/{id}
```
Result

| Name            | Data Type | Description                                             |
| --------------- | --------- | ------------------------------------------------------- |
| id              | integer   | Offline Meter File ID                                   |
| file_name       | string    | Offline Meter File name                                 |
| uuid            | string    | Offline Meter File UUID                                 |
| upload_datetime | string    | Upload Datetime in Local Timezone                       |
| status          | string    | Offline Meter File processing status (new, done, error) |
| file_object     | BLOB      | Offline Meter File Object                               |

*   GET All Offline Meter Files
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/offlinemeterfiles
```
*   DELETE an Offline Meter File by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/offlinemeterfiles/{id}
```
*   POST Upload an Offline Meter File
    (call users login API to get 'User-UUID' and 'Token')
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/TBD" -X POST -d 'file: (binary)' {{base_url}}/offlinemeterfiles
```
*   GET Restore an Offline Meter File by ID from database to disk
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/offlinemeterfiles/{id}/restore
```

### Photovoltaic Power Station

*   GET All Photovoltaic Power Stations
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/photovoltaicpowerstations
```

*   GET a Photovoltaic Power Station by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{{base_url}}/photovoltaicpowerstations/{id}
```

*   POST Create New Photovoltaic Power Station
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/TBD" -X POST -d '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/photovoltaicpowerstations
```

*   PUT Update a Photovoltaic Power Station
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/photovoltaicpowerstations/{id}
```

*   DELETE a Photovoltaic Power Station by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/photovoltaicpowerstations/{id}
```

### Point

*   GET Point by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/points/{id}
```
Result in JSON

| Name                  | Data Type    | Description                                                  |
| --------------------- | ------------ | ------------------------------------------------------------ |
| id                    | integer      | Point ID                                                     |
| name                  | string       | Point Name                                                   |
| data_source           | object       | Data Source Object                                           |
| object_type           | string       | Object Type ('ENERGY_VALUE', 'ANALOG_VALUE', 'BINARY_VALUE') |
| units                 | string       | Units of Measure                                             |
| high_limit            | float        | High Limit of the Point Value                                |
| low_limit             | float        | Low Limit of the Point Value                                 |
| ratio                 | float        | Raw value will be multiplied by ratio value. It is not applicable to virtual point. |
| is_trend              | boolean      | Indicates that trend value will be saved                     |
| is_virtual            | boolean      | Indicates a virtual point. It is only applicable to object type 'ANALOG_VALUE' |
| address               | json         | Address structure varied by protocol                         |
|                       |              | Modbus TCP Structure                                         |
| ├slave_id             | integer      | Slave ID                                                     |
| ├function_code        | integer      | Modbus functions:READ_COILS = 1, READ_DISCRETE_INPUTS = 2, READ_HOLDING_REGISTERS = 3, READ_INPUT_REGISTERS = 4 |
| ├offset               | integer      | Offset                                                       |
| ├number_of_registers  | integer      | Number of Registers                                          |
| └format               | string       | Data Format. see below introductions                         |
|                       |              | BACnet/IP Structure                                          |
| ├object_type          | string       | BACnet Object Type ('analogValue', 'analogInput', 'analogOutput', 'binaryValue', 'binaryInput', 'binaryOutput') |
| ├object_id            | integer      | BACnet Object Instance Number                                |
| ├property_name        | string       | BACnet Property Name ('presentValue')                        |
| └property_array_index | integer/null | BACnet Property Array Index or None of Object Type is not Array |
|                       |              | Virtual Point Structure                                      |
| ├expression           | string       | Expression                                                   |
| └substitutions        | string       | Substitutions                                                |
| description           | string       | Point description, allow null                                |

*   GET all Points
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/points
```
*   DELETE Point by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN"  -X DELETE {{base_url}}/points/{id}
```
*   POST Create Point
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"ModbusPoint2", "data_source_id":1, "object_type": "ENERGY_VALUE", "units":"kWh", "high_limit":999999999, "low_limit":0, "higher_limit":1099999998.9, "lower_limit":0, "ratio":1,"is_trend":true, "is_virtual":false, "address":"{\"slave_id\":1, \"function_code\":3, \"offset\":1, \"number_of_registers\":2, \"data_format\":\"float\"}", "description":null}}' {{base_url}}/points
```
*   PUT Update Point
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"ModbusPoint1", "data_source_id":1, "object_type": "ENERGY_VALUE", "units":"kWh", "high_limit":999999999, "low_limit":0, "higher_limit":1099999998.9, "lower_limit":0, "ratio":100, "is_trend":true, "is_virtual":false, "address":"{\"slave_id\":1, \"function_code\":3, \"offset\":1, \"number_of_registers\":2, \"data_format\":\"float\"}", "description":null}}' {{base_url}}/points/{id}
```

### Privilege
*   GET All Privileges
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/privileges
```
*   DELETE Privilege by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/privileges/{id}
```
*   POST Create New Privilege
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X POST -d '{"data": {"name": "privilege 1", "data":"{\"spaces\":[1, 3]}"}}' {{base_url}}/privileges
```
*   PUT Update Privilege
```bash
curl -i -H "Content-Type: application/json" -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X PUT -d '{"data":{"name":"privilege 1", "data":"{\"spaces\":[1, 3]}"}}' {{base_url}}/privileges/{id}
```

### Rule
*   GET Rule by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/rules/{id}
```

Result in JSON

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Rule ID                                                      |
| name              | string    | Rule Name                                                    |
| uuid              | string    | Rule UUID                                                    |
| fdd_code          | string    | SYSTEM01, SYSTEM02, ..., REALTIME01, REALTIME02, ..., SPACE01, SPACE02, ... METER01, METER02, ... |
| category          | string    | SYSTEM, REALTIME, SPACE, METER, TENANT, STORE, SHOPFLOOR, EQUIPMENT, COMBINEDEQUIPMENT |
| priority          | string    | CRITICAL, HIGH, MEDIUM, LOW                                  |
| channel           | string    | WEB, EMAIL, SMS, WECHAT, CALL                                |
| expression        | string    | JSON string of diagnosed objects, points, values, and recipients |
| message_template  | string    | Plain text template that supports $-substitutions            |
| is_enabled        | boolean   | Indicates if this rule is enabled                            |
| last_run_datetime | float     | null, or the last run datetime string in local timezone      |
| next_run_datetime | float     | null, or the next run datetime string in local timezone      |

*   GET All Rules
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/rules
```
*   DELETE a Rule by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/rules/{id}
```
*   POST Create New Rule
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Space Energy Consumption Over Limit", "fdd_code":"SPACE01", "category":"SPACE", "priority":"HIGH", "channel":"WEB", "expression":"{\"space_id\":1, \"high_limit\":1000.000}", "message_template":"%s截止到目前电耗%s，超标%s。", "is_enabled":true, "is_run_immediately":true}}' {{base_url}}/rules
```
*   PUT Update a Rule
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Space Energy Consumption Over Limit", "fdd_code":"SPACE01", "category":"SPACE", "priority":"HIGH", "channel":"WEB", "expression":"{\"space_id\":1, \"high_limit\":1000.000}", "message_template":"%s截止到目前电耗%s，超标%s。", "is_enabled":true, "is_run_immediately":true}}' {{base_url}}/rules/{id}
```

### Sensor
*   GET a Sensor by ID

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/sensors/{id}
```
Result

| Name        | Data Type | Description        |
| ----------- | --------- | ------------------ |
| id          | integer   | Sensor ID          |
| name        | string    | Sensor name        |
| uuid        | string    | Sensor UUID        |
| description | string    | Sensor description |

*   GET All Sensors
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/sensors
```
*   POST Create New Sensor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Sensor10", "description":"sensor description"}}' {{base_url}}/sensors
```
*   PUT Update a Sensor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Sensor10", "description":"sensor description"}}' {{base_url}}/sensors/{id}
```
*   DELETE Sensor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/sensors/{id}
```
*   POST Bind Point to Sensor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":"2"}}' {{base_url}}/sensors/{id}/points
```
*   GET All Points associated with Sensor by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/sensors/{id}/points
```
*   DELETE Unbind Point from Sensor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/sensors/{id}/points/{pid}
```

### Shopfloor
*   GET Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}
```
Result

| Name             | Data Type      | Description                                                  |
| ---------------- | -------------- | ------------------------------------------------------------ |
| id               | integer        | Shopfloor ID                                                 |
| name             | string         | Shopfloor name                                               |
| uuid             | string         | Shopfloor UUID                                               |
| area             | decimal(18, 3) | Area                                                         |
| is_input_counted | boolean        | Indicates if the Shopfloor's energy input is counted for aggregating |
| contact          | Object         | Contact Object                                               |
| cost_center      | Object         | Cost Center Object                                           |
| description      | string         | Shopfloor description                                        |
| qrcode           | string         | QRCode in String                                             |

*   GET All Shopfloors
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors
```
*   DELETE a Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}
```
*   POST Create a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"MyEMS Shopfloor2", "area":999.99, "is_input_counted":true, "contact_id":1, "cost_center_id":1, "description":"Shopfloor description"}}' {{base_url}}/shopfloors
```
*   PUT Update a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"MyEMS Shopfloor2", "area":999.99, "is_input_counted":true, "contact_id":1, "cost_center_id":1, "description":"Shopfloor description"}}' {{base_url}}/shopfloors/{id}
```
*   GET All Equipments of Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/equipments
```
*   POST Bind Equipment to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"equipment_id":1}}' {{base_url}}/shopfloors/{id}/equipments
```
*   DELETE Equipment from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/equipments/{eid}
```
*   GET All Meters of Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/meters
```
*   POST Bind a Meter to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":1}}' {{base_url}}/shopfloors/{id}/meters
```
*   DELETE a Meter from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/meters/{mid}
```
*   GET All Offline Meters of Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/offlinemeters
```
*   POST Bind an Offline Meter to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1}}' {{base_url}}/shopfloors/{id}/offlinemeters
```
*   DELETE an Offline Meter from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/offlinemeters/{mid}
```
*   GET All Points of Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/points
```
*   POST Bind a Point to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":1}}' {{base_url}}/shopfloors/{id}/points
```
*   DELETE a Point from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/points/{pid}
```
*   GET All Sensors of Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/sensors
```
*   POST Bind a Sensor to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"sensor_id":1}}' {{base_url}}/shopfloors/{id}/sensors
```
*   DELETE a Sensor from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/sensors/{sid}
```
*   GET All Virtual Meters of Shopfloor by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/virtualmeters
```
*   POST Bind Virtual Meter to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1}}' {{base_url}}/shopfloors/{id}/virtualmeters
```
*   DELETE Virtual Meter from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/virtualmeters/{mid}
```

*   GET All Working Calendars of a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/workingcalendars
```

*   POST Bind a Working Calendar to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"working_calendar_id":6}}' {{base_url}}/shopfloors/{id}/virtualmeters
```

*   DELETE a Working Calendar from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/workingcalendars/{id}
```

*   POST Bind a Command to a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":1}}' {{base_url}}/shopfloors/{id}/commands
```

*   GET All Commands of a Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/shopfloors/{id}/commands
```

*   DELETE Unbind a Command from Shopfloor
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/shopfloors/{id}/commands/{id}
```

### Space
*   GET Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}
```
Result

| Name              | Data Type      | Description                                                  |
| ----------------- | -------------- | ------------------------------------------------------------ |
| id                | integer        | Space ID                                                     |
| name              | string         | Space name                                                   |
| uuid              | string         | Space UUID                                                   |
| parent_space_id   | integer        | Parent Space ID                                              |
| area              | decimal(18, 3) | Area                                                         |
| timezone          | Object         | Timezone Object                                              |
| is_input_counted  | boolean        | Indicates if the space's energy input is counted for aggregating |
| is_output_counted | boolean        | Indicates if the space's energy output is counted for aggregating |
| contact           | Object         | Contact Object                                               |
| cost_center       | Object         | Cost Center Object                                           |
| description       | string         | Space description                                            |
| qrcode            | string         | QRCode in String                                             |

*   GET All Spaces
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces
```
*   DELETE Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}
```
*   POST Create a Space
```bash
curl -i -H "User-UUID: 7dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"MyEMSSpace", "parent_space_id":1, "area":999.99, "timezone_id":56, "is_input_counted":true, "is_output_counted":false, "contact_id":1, "cost_center_id":1, "latitude":39.909429, "longitude":116.416993, "description":"Space description"}}' {{base_url}}/spaces
```
*   PUT Update a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"MyEMSSpace", "parent_space_id":2, "area":999.99, "timezone_id":56, "is_input_counted":true, "is_output_counted":true, "contact_id":1, "cost_center_id":1, "latitude":39.909429, "longitude":116.416993, "description":"Space description"}}' {{base_url}}/spaces/{id}
```
*   GET All Children of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/children
```
*   GET All Combined Equipments of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/combinedequipments
```
*   POST Bind a Combined Equipment to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"combined_equipment_id":1}}' {{base_url}}/spaces/{id}/equipments
```
*   DELETE a Combined Equipment from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/combinedequipments/{eid}
```
*   GET All Equipments of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/equipments
```
*   POST Bind Equipment to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"equipment_id":1}}' {{base_url}}/spaces/{id}/equipments
```
*   DELETE Equipment from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/equipments/{eid}
```
*   GET All Meters of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/meters
```
*   POST Bind a Meter to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":1}}' {{base_url}}/spaces/{id}/meters
```
*   DELETE a Meter from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/meters/{mid}
```
*   GET All Offline Meters of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/offlinemeters
```
*   POST Bind an Offline Meter to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1}}' {{base_url}}/spaces/{id}/offlinemeters
```
*   DELETE an Offline Meter from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/offlinemeters/{mid}
```
*   GET All Points of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/points
```
*   POST Bind a Point to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":1}}' {{base_url}}/spaces/{id}/points
```
*   DELETE a Point from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/points/{pid}
```
*   GET All Sensors of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/sensors
```
*   POST Bind a Sensor to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"sensor_id":1}}' {{base_url}}/spaces/{id}/sensors
```
*   DELETE a Sensor from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/sensors/{sid}
```

*   GET All Shopfloors of a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/shopfloors
```

*   POST Bind a Shopfloor to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"shopfloor_id":1}}' {{base_url}}/spaces/{id}/shopfloors
```

*   DELETE Unbind a Shopfloor from a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/shopfloors/{id}
```

*   GET All Stores of Space by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/stores
```
*   POST Bind a Store to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"store_id":1}}' {{base_url}}/spaces/{id}/stores
```
*   DELETE a Store from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/stores/{tid}
```
*   GET All Tenants of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/tenants
```
*   POST Bind a Tenant to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"tenant_id":1}}' {{base_url}}/spaces/{id}/tenants
```
*   DELETE a Tenant from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/tenants/{tid}
```
*   GET All Virtual Meters of Space by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/virtualmeters
```
*   POST Bind Virtual Meter to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1}}' {{base_url}}/spaces/{id}/virtualmeters
```
*   DELETE Virtual Meter from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/virtualmeters/{mid}
```
*   GET Space Tree of User
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/tree
```
*   GET Energy Categories of all Meters in the Space Tree
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/treemetersenergycategories
```

*   GET All Working Calendars of a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/workingcalendars
```

*   POST Bind a Working Calendar to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"working_calendar_id":6}}' {{base_url}}/spaces/{id}/workingcalendars
```

*   DELETE Unbind a Working Calendar from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/workingcalendars/{mid}
```

*   GET All Commands of a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/spaces/{id}/commands
```

*   POST Bind a Command to a Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":1}}' {{base_url}}/spaces/{id}/commands
```

*   DELETE Unbind a Command from Space
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/spaces/{id}/commands/{mid}
```

### Store
*   GET Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}
```
Result

| Name             | Data Type      | Description                                                  |
| ---------------- | -------------- | ------------------------------------------------------------ |
| id               | integer        | Store ID                                                     |
| name             | string         | Store name                                                   |
| uuid             | string         | Store UUID                                                   |
| address          | string         | Address                                                      |
| latitude         | decimal(9, 6)  | Latitude                                                     |
| longitude        | decimal(9, 6)  | Longitude                                                    |
| area             | decimal(18, 3) | Area                                                         |
| store_type       | Object         | Store Type object                                            |
| is_input_counted | boolean        | Indicates if this store's input energy is counted into parent space |
| contact          | Object         | Contact Object                                               |
| cost_center      | Object         | Cost Center Object                                           |
| description      | string         | Store description                                            |
| qrcode           | string         | QRCode in String                                             |

*   GET All Stores
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores
```
*   POST Create New Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"麦当劳(新王府井店)", "address":"北京市东城区王府井大街200号工美大厦1层010-65120499", "latitude":39.909429, "longitude":116.416993, "area":600.000, "store_type_id":1, "is_input_counted":true, "contact_id":1, "cost_center_id":1, "description":"Classic, long-running fast-food chain known for its burgers, fries & shakes."}}' {{base_url}}/stores
```
*   PUT Update a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"麦当劳(新王府井店)", "address":"北京市东城区王府井大街200号工美大厦1层010-65120499", "latitude":39.909429, "longitude":116.416993, "area":600.000, "store_type_id":1, "is_input_counted":true, "contact_id":1, "cost_center_id":1, "description":"Classic, long-running fast-food chain known for its burgers, fries & shakes."}}' {{base_url}}/stores/{id}
```
*   DELETE Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}
```
*   GET All Meters of Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/meters
```
*   POST Bind a Meter to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":1}}' {{base_url}}/stores/{id}/meters
```
*   DELETE a Meter from Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/meters/{mid}
```
*   GET All Offline Meters of Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/offlinemeters
```
*   POST Bind an Offline Meter to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1}}' {{base_url}}/stores/{id}/offlinemeters
```
*   DELETE an Offline Meter from Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/offlinemeters/{mid}
```
*   GET All Points of Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/points
```
*   POST Bind a Point to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":1}}' {{base_url}}/stores/{id}/points
```
*   DELETE a Point from Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/points/{pid}
```
*   GET All Sensors of Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/sensors
```
*   POST Bind a Sensor to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"sensor_id":1}}' {{base_url}}/stores/{id}/sensors
```
*   DELETE a Sensor from Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/sensors/{sid}
```
*   GET All Virtual Meters of Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/virtualmeters
```
*   POST Bind Virtual Meter to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1}}' {{base_url}}/stores/{id}/virtualmeters
```
*   DELETE Virtual Meter from Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/virtualmeters/{mid}
```

*   GET All Working Calendars of Store by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/workingcalendars
```

*   POST Bind a Working Calendar to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"working_calendar_id":6}}' {{base_url}}/stores/{id}/workingcalendars
```

*   DELETE a Working Calendar from Stores
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/workingcalendars/{id}
```

*   GET All Commands of a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/stores/{id}/commands
```

*   POST Bind a Command to a Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":1}}' {{base_url}}/stores/{id}/workingcalendars
```

*   DELETE Unbind a Command from Store
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/stores/{id}/commands/{id}
```

### Store Type
*   GET a Store Type by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/storetypes/{id}
```
Result

| Name            | Data Type | Description                |
| --------------- | --------- | -------------------------- |
| id              | integer   | Store Type ID              |
| name            | string    | Store Type name            |
| uuid            | string    | Store Type UUID            |
| description     | string    | Store Type description     |
| simplified_code | string    | Store Type simplified code |

*   GET All Store Types
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/storetypes
```
*   POST Create New Store Types
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name": "Car", "description":"汽车", "simplified_code":"CA"}}' {{base_url}}/storetypes
```
*   PUT Update a Store Types
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name": "Auto", "description":"汽车", "simplified_code":"AT"}}' {{base_url}}/storetypes/{id}
```
*   DELETE a Store Types by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/storetypes/{id}
```


### Tariff
*   GET Tariff by id

```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tariffs/{id}
```
Result in JSON

| Name                | Data Type  | Description                               |
| ------------------- | ---------- | ----------------------------------------- |
| id                  | integer    | Tariff ID                                 |
| name                | string     | Tariff name                               |
| uuid                | string     | Tariff UUID                               |
| unit_of_price       | string     | Unit of Price                             |
| valid_from          | float      | Valid From (POSIX timestamp *   1000)     |
| valid_through       | float      | Valid Through (POSIX timestamp *   1000)  |
| tariff_type         | string     | Tariff type (timeofuse or block)          |
| timeofuse[]         | json array | Time Of Use items                         |
| ├                   | integer    | array index                               |
| ├ start_time_of_day | string     | Start time of day                         |
| ├ end_time_of_day   | string     | End time of day                           |
| ├ peak_type         | string     | Peak type: toppeak,onpeak,midpeak,offpeak |
| └ price             | decimal    | Price                                     |
| block[]             | json array | Block items                               |
| ├                   | integer    | array index                               |
| ├ start_amount      | decimal    | Start amount                              |
| ├ end_amount        | decimal    | End amount                                |
| └ price             | decimal    | Price                                     |

*   GET All Tariffs
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tariffs
```
*   DELETE Tariff by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tariffs/{id}
```
* POST Create a Tariff

  To POST a block tariff:
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"阶梯电价","energy_category_id":1, "tariff_type":"block", "unit_of_price":"元/千瓦时", "valid_from":"2020-01-01T00:00:00", "valid_through":"2021-01-01T00:00:00", "block":[{"start_amount":"0", "end_amount":"10000", "price":"0.567"}, {"start_amount":"10000", "end_amount":"30000", "price":"0.678"}, {"start_amount":"30000", "end_amount":"100000", "price":"0.789"}]}}' {{base_url}}/tariffs
```
To POST a time of use tariff:
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"2020分时电价1-6","energy_category_id":1, "tariff_type":"timeofuse", "unit_of_price":"元/千瓦时", "valid_from":"2020-01-01T00:00:00", "valid_through":"2020-07-01T00:00:00", "timeofuse":[{"start_time_of_day":"00:00:00", "end_time_of_day":"05:59:59", "peak_type":"offpeak", "price":0.345}, {"start_time_of_day":"06:00:00", "end_time_of_day":"07:59:59", "peak_type":"midpeak", "price":0.708}, {"start_time_of_day":"08:00:00", "end_time_of_day":"10:59:59", "peak_type":"onpeak", "price":1.159}, {"start_time_of_day":"11:00:00", "end_time_of_day":"17:59:59", "peak_type":"midpeak", "price":0.708}, {"start_time_of_day":"18:00:00", "end_time_of_day":"20:59:59", "peak_type":"onpeak", "price":1.159}, {"start_time_of_day":"21:00:00", "end_time_of_day":"21:59:59", "peak_type":"midpeak", "price":0.708}, {"start_time_of_day":"22:00:00", "end_time_of_day":"23:59:59", "peak_type":"offpeak", "price":0.345}]}}' {{base_url}}/tariffs
```

*   PUT Update a Tariff
To update a block tariff:
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"阶梯电价","energy_category_id":1, "tariff_type":"block", "unit_of_price":"元/千瓦时", "valid_from":"2020-01-01T00:00:00", "valid_through":"2021-01-01T00:00:00", "block":[{"start_amount":"0", "end_amount":"20000", "price":"0.567"}, {"start_amount":"20000", "end_amount":"30000", "price":"0.678"}, {"start_amount":"30000", "end_amount":"100000", "price":"0.789"}]}}' {{base_url}}/tariffs/{id}
```
To update a time of use tariff:
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"2020分时电价1-6","energy_category_id":1, "tariff_type":"timeofuse", "unit_of_price":"元/千瓦时", "valid_from":"2020-01-01T00:00:00", "valid_through":"2020-07-01T00:00:00", "timeofuse":[{"start_time_of_day":"00:00:00", "end_time_of_day":"05:59:59", "peak_type":"offpeak", "price":0.456}, {"start_time_of_day":"06:00:00", "end_time_of_day":"07:59:59", "peak_type":"midpeak", "price":0.708}, {"start_time_of_day":"08:00:00", "end_time_of_day":"10:59:59", "peak_type":"onpeak", "price":1.159}, {"start_time_of_day":"11:00:00", "end_time_of_day":"17:59:59", "peak_type":"midpeak", "price":0.708}, {"start_time_of_day":"18:00:00", "end_time_of_day":"20:59:59", "peak_type":"onpeak", "price":1.159}, {"start_time_of_day":"21:00:00", "end_time_of_day":"21:59:59", "peak_type":"midpeak", "price":0.708}, {"start_time_of_day":"22:00:00", "end_time_of_day":"23:59:59", "peak_type":"offpeak", "price":0.345}]}}' {{base_url}}/tariffs/{id}
```


### Tenant
*   GET Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}
```
Result

| Name                 | Data Type      | Description                                                  |
| -------------------- | -------------- | ------------------------------------------------------------ |
| id                   | integer        | Tenant ID                                                    |
| name                 | string         | Tenant name                                                  |
| uuid                 | string         | Tenant UUID                                                  |
| buildings            | string         | Buildings (one or many)                                      |
| floors               | string         | Floors (one or many)                                         |
| rooms                | string         | Rooms (one or many)                                          |
| area                 | decimal(18, 3) | Area                                                         |
| tenant_type          | Object         | Tenant Type object                                           |
| is_input_counted     | boolean        | Indicates if this tenant's input energy is counted into parent space |
| is_key_tenant        | boolean        | Indicates if this is a key tenant                            |
| lease_number         | string         | Tenant lease number                                          |
| lease_start_datetime | string         | Lease start datetime string in local timezone                |
| lease_end_datetime   | string         | Lease end datetime string in local timezone                  |
| is_in_lease          | boolean        | Indicates if this tenant is in lease                         |
| contact              | Object         | Contact Object                                               |
| cost_center          | Object         | Cost Center Object                                           |
| description          | string         | Tenant description                                           |
| qrcode               | string         | QRCode in String                                             |

*   GET All Tenants
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants
```
*   POST Create New Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Starbucks", "buildings":"Building #1", "floors":"L1 L2 L3", "rooms":"1201b+2247+3F", "area":418.8, "tenant_type_id":9, "is_input_counted":true, "is_key_tenant":true,
"lease_number":"6b0da806",  "lease_start_datetime":"2021-01-01T00:00:00", "lease_end_datetime":"2022-01-01T00:00:00", "is_in_lease":true, "contact_id":1, "cost_center_id":1, "description":"my description"}}' {{base_url}}/tenants
```
*   PUT Update a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Hermes 爱马仕", "buildings":"Building #1", "floors":"L1 L2 L3 L4 L5", "rooms":"1201b+2247+3F", "area":818.8, "tenant_type_id":9, "is_input_counted":true, "is_key_tenant":true,
"lease_number":"6b0da806",  "lease_start_datetime_utc":"2021-01-01T00:00:00", "lease_end_datetime_utc":"2022-01-01T00:00:00", "is_in_lease":true, "contact_id":1, "cost_center_id":1, "description":"my description"}}' {{base_url}}/tenants/{id}
```
*   DELETE Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}
```
*   GET All Meters of Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/meters
```
*   POST Bind a Meter to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"meter_id":1}}' {{base_url}}/tenants/{id}/meters
```
*   DELETE a Meter from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/meters/{mid}
```
*   GET All Offline Meters of Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/offlinemeters
```
*   POST Bind an Offline Meter to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"offline_meter_id":1}}' {{base_url}}/tenants/{id}/offlinemeters
```
*   DELETE an Offline Meter from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/offlinemeters/{mid}
```
*   GET All Points of Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/points
```
*   POST Bind a Point to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"point_id":1}}' {{base_url}}/tenants/{id}/points
```
*   DELETE a Point from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/points/{pid}
```
*   GET All Sensors of Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/sensors
```
*   POST Bind a Sensor to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"sensor_id":1}}' {{base_url}}/tenants/{id}/sensors
```
*   DELETE a Sensor from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/sensors/{sid}
```
*   GET All Virtual Meters of Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/virtualmeters
```
*   POST Bind Virtual Meter to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"virtual_meter_id":1}}' {{base_url}}/tenants/{id}/virtualmeters
```
*   DELETE an Virtual Meter from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/virtualmeters/{mid}
```

*   GET All Working Calendars of Tenant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/workingcalendars
```

*   POST Bind a Working Calendar to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"working_calendar_id":6}}' {{base_url}}/tenants/{id}/virtualmeters
```

*   DELETE a Working Calendar from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/workingcalendars/{id}
```

*   GET All Commands of a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenants/{id}/commands
```

*   POST Bind a Command to a Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"command_id":1}}' {{base_url}}/tenants/{id}/commands
```

*   DELETE Unbind a Command from Tenant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenants/{id}/workingcalendars/{id}
```

### Tenant Type
*   GET a Tenant Type by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/tenanttypes/{id}
```
Result

| Name            | Data Type | Description                 |
| --------------- | --------- | --------------------------- |
| id              | integer   | Tenant Type ID              |
| name            | string    | Tenant Type name            |
| uuid            | string    | Tenant Type UUID            |
| description     | string    | Tenant Type description     |
| simplified_code | string    | Tenant Type simplified code |

*   GET All Tenant Types
```bash
curl -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -i -X GET {{base_url}}/tenanttypes
```
*   POST Create New Tenant Types
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name": "Office1", "description":"办公", "simplified_code":"OF1"}}' {{base_url}}/tenanttypes
```
*   PUT Update a Tenant Types
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name": "Office1", "description":"办公", "simplified_code":"OF1"}}' {{base_url}}/tenanttypes/{id}
```
*   DELETE a Tenant Types by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/tenanttypes/{id}
```

### Text Message
*   GET Text Message by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/textmessages/{id}
```

Result in JSON

| Name                 | Data Type | Description                                                 |
| -------------------- | --------- | ----------------------------------------------------------- |
| id                   | integer   | Text Message ID                                             |
| recipient_name       | string    | Recipient Name                                              |
| recipient_mobile     | string    | Recipient Mobile Number                                     |
| message              | string    | Email Message Body                                          |
| attachment_file_name | string    | Email Attachment File Name                                  |
| create_datetime      | float     | Email Message Created Datetime (POSIX timestamp *   1000)   |
| scheduled_datetime   | float     | Email Message Scheduled Datetime (POSIX timestamp *   1000) |
| acknowledge_code     | string    | Recipient reply with Acknowledge code to acknowledge        |
| status               | string    | Status ('new', 'sent', 'acknowledged', 'timeout'            |
* POST Create New Text Message
```bash
curl --location --request POST '{{base_url}}/textmessages' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: GET-TOKEN-AFTER-LOGIN' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"rule_id":1, "recipient_name":"myems", "recipient_mobile":"13888888888", "message":"report_01_2021年12月24日", "acknowledge_code":"123456", "created_datetime":"2021-12-24T00:00:00", "scheduled_datetime":"2021-12-24T00:00:00"}}'
```
* GET Text Messages by Datetime Range
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/textmessages?startdatetime={startdatetime}&enddatetime={enddatetime}
```
*   DELETE Text Message by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/textmessages/{id}
```

### Timezone
*   GET a Timezone by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/timezones/{id}
```
*   GET all Timezones
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/timezones
```
*   PUT Update a Timezone by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"夏威夷标准时间","description":"(GMT-10:00) Hawaii", "utc_offset":"-10:00"}}' {{base_url}}/timezones/{id}
```

### User
*   GET All Users
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users
```
*   GET a User by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users/{id}
```
*   DELETE User by id
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/users/{id}
```
*   POST New User
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"demo", "display_name":"Demo", "email":"demo@myems.io", "is_admin":false, "privilege_id":1, "password":"!MyEMS1", "account_expiration_datetime":"2100-01-01T00:00:00","password_expiration_datetime":"2100-01-01T00:00:00"}}' {{base_url}}/users
```
*   PUT Update User Profile
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"albert", "display_name":"Mr. Albert", "email":"albert@myems.io", "is_admin":false, "privilege_id":1, "password":"!MyEMS1", "account_expiration_datetime":"2100-01-01T00:00:00","password_expiration_datetime":"2100-01-01T00:00:00"}}' {{base_url}}/users/{id}
```
*   PUT User Login by Username
```bash
curl -i -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"administrator", "password":"!MyEMS1"}}' {{base_url}}/users/login
```
*   PUT User Login by Email
```bash
curl -i -H "Content-Type: application/json" -X PUT -d '{"data":{"email":"administrator@myems.io", "password":"!MyEMS1"}}' {{base_url}}/users/login
```
*   PUT User Logout
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT {{base_url}}/users/logout
```
*   PUT User change password
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"old_password":"!MyEMS1", "new_password":"!MyEMS2"}}' {{base_url}}/users/changepassword
```
*   PUT User reset other user's password by administrator
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"johnson","password":"NewPassword2"}}'  {{base_url}}/users/resetpassword
```
*   PUT User Unlock
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT  {{base_url}}/users/unlock/{id}
```

*   PUT Forgot Password
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"password":"!MyEMS2", "email":"demo@myems.io", "token":"100d4d9f1a262b3169bf5ca49d66121823856bec4d6b18b09ddeb0afbc14207246de906705e8788ae42633095eb1cad2eb991cd96f73b885cfa0b93569c1f34e"}}'  {{base_url}}/users/forgotpassword
```

*   GET Forgot Password Expires Datetime by Email and Token
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users/forgotpassword?email={email}&token={token}
```

*   POST Create New Forgot Password Email Message
```bash
curl -i -H "Content-Type: application/json" -X POST -d '{"data":{"token":"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a", "recipient_email":"demo@myems.io", "subject":"Forgot Password", "message":"demo message", "scheduled_datetime":"2023-05-24T11:10:53", "created_datetime":"2023-05-24T11:10:53"}}' {{base_url}}/users/emailmessages
```

*   PUT Update Forgot Password Email Message
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"recipient_name":"Demo", "recipient_email":"demo@myems.io", "subject":"Forgot Password", "message":"demo message", "status":"new", "scheduled_datetime":"2023-05-24T11:10:53", "created_datetime":"2023-05-24T11:10:53"}}'  {{base_url}}/users/emailmessages/{id}
```

*   GET All Forgot Password Email Messages
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users/emailmessages?startdatetime={startdatetime}&enddatetime={enddatetime}
```

*   GET Forgot Email Message by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users/emailmessages/{id}
```

*   DELETE Forgot Password Email Message by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/users/emailmessages/{id}
```

*   POST Create New Register User
```bash
curl -i -H "Content-Type: application/json" -X POST -d '{"data":{"name":"demo1", "display_name":"Demo1", "email":"demo1@myems.io", "password":"!MyEMS1", "token":"f2f1956d1951a9ba7cabb33307b8beaa4c252434aa1378a4766133a46eb1b5c28cb28da7120795596b494f4000a5a718289f20382120ca455beafde74551851a"}}' {{base_url}}/users/newusers
```

*   GET All New Register Users
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users/newusers
```

*   GET a New Register User by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/users/newusers/{id}
```

*   PUT Update a New Register User
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"demo2", "display_name":"Demo2", "email":"demo2@myems.io"}}'  {{base_url}}/users/newusers/{id}
```

*   DELETE a New Register User
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/users/newusers/{id}
```

*   PUT Approve a New Register User (by Administrator)
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"is_admin":true, "is_read_only":false, "privilege_id":1, "account_expiration_datetime":"2024-05-31T16:00:00", "password_expiration_datetime":"2024-05-31T16:00:00"}}'  {{base_url}}/users/newusers/{id}/approve
```
### Virtual Power Plant

*   GET All Virtual Power Plants
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/virtualpowerplants
```

*   GET a Virtual Power Plant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/virtualpowerplants/{id}
```

*   POST Create New Virtual Power Plant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"Beijing VPP", "cost_center_id":1, "balancing_price_point_id":1, "svg":"<svg></svg>", "description":"Classic"}}' {{base_url}}/virtualpowerplants
```

*   PUT Update a Virtual Power Plant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"Beijing VPP1", "cost_center_id":1, "balancing_price_point_id":1, "svg":"<svg></svg>", "description":"New"}}' {{base_url}}/virtualpowerplants/{id}
```

*   DELETE a Virtual Power Plant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/virtualpowerplants/{id}
```

*   GET All Microgrids of Virtual Power Plant by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/virtualpowerplants/{id}/microgrids
```

*   POST Bind a Microgrid to a Virtual Power Plant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"microgrid_id":1}}' {{base_url}}/virtualpowerplants/{id}/microgrids
```

*   DELETE a Microgrid from Virtual Power Plant
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/virtualpowerplants/{id}/microgrids/{mid}
```

### Virtual Meter
*   GET a Virtual Meter by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/virtualmeters/{id}
```
Result

| Name            | Data Type  | Description                                           |
| --------------- | ---------- | ----------------------------------------------------- |
| id              | integer    | Virtual Meter ID                                      |
| name            | string     | Virtual Meter name                                    |
| uuid            | string     | Virtual Meter UUID                                    |
| energy_category | Object     | Energy Category Object                                |
| is_counted      | boolean    | the Virtual Meter is counted in                       |
| cost_center     | Object     | Cost Center Object                                    |
| energy_item     | Object     | Energy Item Object                                    |
| description     | string     | Offline Meter description                             |
| expression      | json       | Expression                                            |
| ├ id            | integer    | Expression ID                                         |
| ├ uuid          | string     | Expression UUID                                       |
| ├ equation      | string     | Expression Equation                                   |
| └ variables[]   | json array | Expression Variables                                  |
| ├               | integer    | array index                                           |
| ├ id            | integer    | Variable ID                                           |
| ├ name          | string     | Variable Name                                         |
| ├ meter_type    | string     | Meter Type ('meter', 'offline_meter', 'virtual_meter' |
| ├ meter_name    | string     | Meter Name                                            |

*   GET All Virtual Meters
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/virtualmeters
```
*   DELETE a Virtual Meter by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/virtualmeters/{id}
```
*   POST Create New Virtual Meter
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X POST -d '{"data":{"name":"VM10", "energy_category_id":1, "is_counted": true, "cost_center_id":1, "energy_item_id":1, "description":"virtual description", "expression": {"equation":"x1+x2-x3", "variables":[{"name":"x1", "meter_type":"meter", "meter_id":1},{"name":"x2", "meter_type":"meter", "meter_id":2},{"name":"x3", "meter_type":"meter", "meter_id":3}] } }}' {{base_url}}/virtualmeters
```
*   PUT Update a Virtual Meter by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "Content-Type: application/json" -X PUT -d '{"data":{"name":"VM11", "energy_category_id":1, "is_counted": true, "cost_center_id":1, "energy_item_id":1, "description":"virtual description", "expression": {"equation":"x1+x2-x3", "variables":[{"name":"x1", "meter_type":"meter", "meter_id":1},{"name":"x2", "meter_type":"meter", "meter_id":2},{"name":"x3", "meter_type":"meter", "meter_id":3}] } }}' {{base_url}}/virtualmeters/{id}
```

### Web Message
*   GET a Web Message by ID

```bash
curl --location --request GET '{{base_url}}/webmessages/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 24bb236244f26784fb1397344d926b4871e87a90096eae926a0e448396dbd3ff4a2f70f727089f025238cb47bdbccdc877ef4a50fad8f05a4e5100c5d3eb0d3c'
```

Result in JSON

| Name              | Data Type | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| id                | integer   | Web Message ID                                               |
| user_id           | integer   | Web Message User ID                                          |
| user_display_name | string    | User Display Name                                            |
| subject           | string    | Web Message Subject                                          |
| message           | string    | Web Message Body                                             |
| created_datetime  | float     | Web Message Created Datetime (POSIX timestamp *   1000)      |
| status            | string    | Status ('new', 'acknowledged', 'timeout')                    |
| reply             | string    | User's Reply text, required for 'acknowledged' status, otherwise allow null |
*   GET Web Messages by Datetime Range
```bash
curl --location --request GET '{{base_url}}/webmessages?startdatetime=2021-12-11T00:00:00&enddatetime=2021-12-21T00:00:00' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9ac434f394c735092cfeb083612e533ca33ca6db4815ebb0c3ff47896d7eaa610e7dc312c04279253f817d65d1ef379378d4a5d07150faee5f6d899adb8b7ca7'
```
*   GET New Web Messages
```bash
curl --location --request GET '{{base_url}}/webmessagesnew' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a'
```
* PUT Update a Web Message (Acknowledge)
```bash
curl --location --request PUT '{{base_url}}/webmessages/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"status":"acknowledged", "reply":"this is my reply"}}'
```
* PUT Update a Web Message (Mark As Read)
```bash
curl --location --request PUT '{{base_url}}/webmessages/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"status":"read"}}'
```
* PUT Update All New Web Messages (Mark All As Read)
```bash
curl --location --request PUT '{{base_url}}/webmessagesnew' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"status":"read"}}'
```

* PUT Update All New Web Messages (Acknowledge All)

```bash
curl --location --request PUT '{{base_url}}/webmessagesnew' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"status":"acknowledged", "reply":"OK"}}'
```

* PUT Batch Update Web Messages (Mark As Read)

```bash
curl --location --request PUT '{{base_url}}/webmessagesbatch' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{"ids":"123,456"}'
```

* DELETE Batch Web Messages by IDs

```bash
curl --location --request DELETE '{{base_url}}/webmessagesbatch' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 24bb236244f26784fb1397344d926b4871e87a90096eae926a0e448396dbd3ff4a2f70f727089f025238cb47bdbccdc877ef4a50fad8f05a4e5100c5d3eb0d3c'
```

* DELETE a Web Message by ID

```bash
curl --location --request DELETE '{{base_url}}/webmessages/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 24bb236244f26784fb1397344d926b4871e87a90096eae926a0e448396dbd3ff4a2f70f727089f025238cb47bdbccdc877ef4a50fad8f05a4e5100c5d3eb0d3c'
--header 'Content-Type: text/plain' \
--data-raw '{"ids":"123,456"}'
```

### Wechat Message
*   GET Wechat Message by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/wechatmessages/{id}
```

Result in JSON

| Name                | Data Type | Description                                           |
| ------------------- | --------- | ----------------------------------------------------- |
| id                  | integer   | Message ID                                            |
| recipient_name      | string    | Recipient Name                                        |
| recipient_openid    | string    | Recipient OpenID                                      |
| message_template_id | string    | Message Template ID                                   |
| message_data        | json      | Message Data in JSON                                  |
| created_datetime    | float     | Message Created Datetime (POSIX timestamp *   1000)   |
| scheduled_datetime  | float     | Message Scheduled Datetime (POSIX timestamp *   1000) |
| acknowledge_code    | string    | Recipient reply with Acknowledge code to acknowledge  |
| status              | string    | Status ('new', 'sent', 'acknowledged', 'timeout'      |
* POST Create New Wechat Message
```bash
curl --location --request POST '{{base_url}}/wechatmessages' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: GET-TOKEN-AFTER-LOGIN' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"rule_id":1, "recipient_name":"myems", "recipient_openid":"oia2TjuEGTNoeX76QEjQNrcURxG8", "message_template_id":"Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk", "message_data":"{\"space_id\":1, \"high_limit\":1000.000}", "acknowledge_code":"9e52ad6d", "created_datetime":"2021-12-24T00:00:00", "scheduled_datetime":"2021-12-24T00:00:00"}}'
```
* GET Wechat Messages by Datetime Range
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/wechatmessages?startdatetime={startdatetime}&enddatetime={enddatetime}
```
*   DELETE Wechat Message by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/wechatmessages/{id}
```

### Wind Farm
*   GET All Wind Farms
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/windfarms
```

*   GET a Wind Farm by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/windfarms/{id}
```

*   POST Create New Wind Farm
```bash
curl --location --request POST '{{base_url}}/windfarms' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: GET-TOKEN-AFTER-LOGIN' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}'
```

*   PUT Update a Wind Farm
```bash
curl --location --request PUT '{{base_url}}/windfarms/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{"data":{"name":"Beijing Office", "address":"Wangfujing Street, Dongcheng District, Beijing", "postal_code":"100000", "latitude":39.909429, "longitude":116.416993, "capacity":600.000, "contact_id":1, "cost_center_id":1, "svg":"<svg></svg>", "description":"Classic"}}'
```

*   DELETE a Wind Farm by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/windfarms/{id}
```

### Working Calendar
*   GET All Working Calendars
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/workingcalendars
```

*   GET a Working Calendar by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/workingcalendars/{id}
```

*   POST Create New Working Calendar
```bash
curl --location --request POST '{{base_url}}/workingcalendars' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: GET-TOKEN-AFTER-LOGIN' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "data": {
        "name": "new_working_calendar",
        "description":"test"
    }
}'
```

*   PUT Update a Working Calendar
```bash
curl --location --request PUT '{{base_url}}/workingcalendars/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "data": {
        "name": "测试日历",
        "description":"test_update"
    }
}'
```

*  DELETE a Working Calendar by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/workingcalendars/{id}
```

### Non Working Day
*   GET All Non Working Days by Working Calendar ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/workingcalendars/{id}/nonworkingdays
```

*   GET a Non Working Day by ID
```bash
curl -i -H "User-UUID: 3a7acfe1-f3c3-4561-a985-8a4d23ef54d0" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/nonworkingdays/{id}
```

*   POST Create New Non Working Day  by Working Calendar ID
```bash
curl --location --request PUT '{{base_url}}/workingcalendars/{id}/nonworkingdays' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "data": {
        "date_local": "2023-03-01",
        "description":"test"
    }
}'
```

*   PUT Update a Non Working Day by ID
```bash
curl --location --request PUT '{{base_url}}/nonworkingdays/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "data": {
        "date_local": "2023-03-01",
        "working_calendar_id": 2,
        "description":"test_update3"
    }
}'
```

*   DELETE a Non Working Day by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/nonworkingdays/{id}
```

### API KEY
*   POST Create New API Key
```bash
curl --location --request PUT '{{base_url}}/apikeys' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "data": {"name": "myems", "expires_datetime_utc": "2023-06-30T12:00:00"}
}'
```

*   GET an API Key by ID

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/apikeys/{id}
```

*   GET All API Keys
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/apikeys
```

*   PUT Update an API Key by ID
```bash
curl --location --request PUT '{{base_url}}/apikeys/{id}' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 9bcd171e4f4169f1f45791aeadc8f90cfe8694be92f21af7bf95673f8cc910ca7a91bfd4a577d48d0720155de497eb02baab614be5c6c83891f1a856f9cf666a' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "data":{
        "name": "myems",
        "expires_datetime_utc": "2024-06-06T12:00:00"
    }
}'
```

*   DELETE an API Key by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X DELETE {{base_url}}/apikeys/{id}
```

### Reports
*   GET AdvancedReports
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/advancedreports?reportingperiodstartdatetime={reportingperiodstartdatetime}&reportingperiodenddatetime={reportingperiodenddatetime}
```
*   GET AdvancedReport by ID
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/advancedreports/{id}
```
*   DELETE AdvancedReport by ID
```bash
curl -i -H "User-UUID: 793f1bb4-6e25-4242-8cdc-2f662b25484f" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/advancedreports/{id}
```
*   GET Combined Equipment Batch Analysis Report
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09
```
*   GET Combined Equipment Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09&quickmode=true
```
*   GET Combined Equipment Carbon Dioxide Emission Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Carbon Dioxide Emission Report (Quick mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentcarbon?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Cost Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Cost Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentcost?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Efficiency Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -X GET {{base_url}}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Efficiency Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentefficiency?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Energy Category Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Energy Category Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentenergycategory?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Energy Item Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Energy Item Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentenergyitem?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Income Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Income Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentincome?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Load Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Load Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentload?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Output Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Output Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentoutput?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Saving Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Saving Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/combinedequipmentsaving?combinedequipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Combined Equipment Statistics Report

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Combined Equipment Statistics Report (Quick Mode)

(parameter combinedequipmentid can be replaced with combinedequipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Dashboard
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/dashboard?useruuid={useruuid}&periodtype={periodtype}&baseperiodstartdatetime={baseperiodstartdatetime}&baseperiodenddatetime={baseperiodenddatetime}&reportingperiodstartdatetime={reportingperiodstartdatetime}&reportingperiodenddatetime={reportingperiodenddatetime}
```
*   GET Distribution System Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/distributionsystem?distributionsystemid=1
```
*   GET Energy Flow Diagram Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/energyflowdiagram?energyflowdiagramid=1&reportingperiodstartdatetime={reportingperiodstartdatetime}&reportingperiodenddatetime={reportingperiodenddatetime}
```
*   GET Equipment Batch Analysis Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09
```
*   GET Equipment Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09&quickmode=true
```
*   GET Equipment Carbon Dioxide Emission Report           删

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -X GET {{base_url}}/reports/equipmentcarbon?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Carbon Dioxide Emission Report (Quick Mode)            删

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -X GET {{base_url}}/reports/equipmentcarbon?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Cost Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Cost Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentcost?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Efficiency Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Efficiency Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentefficiency?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Energy Category Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Energy Category Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentenergycategory?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Energy Item Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Energy Item Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentenergyitem?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Income Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Income Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentincome?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Load Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Load Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentload?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Output Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Output Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentoutput?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Saving Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Saving Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentsaving?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Equipment Statistics Report

(parameter equipmentid can be replaced with equipmentuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Equipment Statistics Report (Quick Mode)

(parameter equipmentid can be replaced with equipmentuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/equipmentstatistics?equipmentid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Meter Batch Analysis Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09&language=en
```
*   GET Meter Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/meterbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09&language=en&quickmode=true
```
* GET Meter Carbon Dioxide Emission Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
* GET Meter Carbon Dioxide Emission Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metercarbon?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
* GET Meter Comparison Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metercomparison?meterid1=6&meterid2=7&periodtype=hourly&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&
```
* GET Meter Comparison Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metercomparison?meterid1=6&meterid2=7&periodtype=hourly&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
* GET Meter Cost Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metercost?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

* GET Meter Cost Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metercost?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

* GET Meter Energy Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

* GET Meter Energy Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/meterenergy?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

* GET Meter Realtime Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/meterrealtime?meterid=1
```
* GET Meter Realtime Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/meterrealtime?meterid=1&quickmode=true
```
* GET Meter Submeters Balance Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
* GET Meter Submeters Balance Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metersubmetersbalance?meterid=1&periodtype=daily&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

* GET Meter Saving Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```

* GET Meter Saving Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metersaving?meterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

* GET Meter Trend Report

(parameter meterid can be replaced with meteruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metertrend?meterid=6&reportingperiodstartdatetime=2020-09-10T00:00:00&reportingperiodenddatetime=2020-09-11T00:00:00
```
* GET Meter Trend Report (Quick Mode)

(parameter meterid can be replaced with meteruuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metertrend?meterid=6&reportingperiodstartdatetime=2020-09-10T00:00:00&reportingperiodenddatetime=2020-09-11T00:00:00&quickmode=true
```
*   GET Meter Tracking Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59
```
*   GET Meter Tracking Report (Quick Mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metertracking?spaceid=1&reportingperiodstartdatetime=2022-05-01T00:00:00&reportingperiodenddatetime=2022-05-31T23:59:59&&quickmode=true
```

*   GET Microgrid Report
```bash
curl --location 'http://127.0.0.1:8000/reports/microgrid?microgridid=1' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: d63477ddcc607bddaefd540a8aa534cacc7dcbdae39dd5838f409f96c8769083f9f76a33b02db0421c8ec174b75f7eadfa5deb6ea996b78ca6fa1ec2fd6863ed'
```

*   GET Microgrid List Report
```bash
curl --location 'http://127.0.0.1:8000/reports/microgridlist' \
--header 'User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4' \
--header 'Token: 004672e92312854fd360d7e5fbbfba1973e49bf33f9ab96cecc1fe6d37af4173821152ae436804752dfca1d51e281981dc302a2ddc83c33dd1c2d69a4e375512'
```

*   GET Offline Meter Batch Analysis Report

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09
```
*   GET Offline Meter Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemeterbatch?spaceid=1&reportingperiodstartdatetime=2021-05-01T00:00:00&reportingperiodenddatetime=2021-05-20T11:41:09&quickmode=true
```
* GET Offline Meter Carbon Dioxide Emission Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
* GET Offline Meter Carbon Dioxide Emission Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemetercarbon?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Offline Meter Cost Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Offline Meter Cost Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemetercost?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Offline Meter Energy Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Offline Meter Energy Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemeterenergy?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Offline Meter Saving Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Offline Meter Saving Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/offlinemetersaving?offlinemeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Shopfloor Batch Analysis Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```
*   GET Shopfloor Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```
* GET Shopfloor Carbon Dioxide Emission Report        删？

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -X GET {{base_url}}/reports/shopfloorcarbon?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
* GET Shopfloor Carbon Dioxide Emission Report (Quick Mode)      删？

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -X GET {{base_url}}/reports/shopfloorcarbon?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
* GET Shopfloor Cost Report

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
* GET Shopfloor Cost Report (Quick Mode)

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorcost?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Shopfloor Energy Category Report

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Shopfloor Energy Category Report (Quick Mode)

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorenergycategory?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Shopfloor Energy Item Report

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Shopfloor Energy Item Report (Quick Mode)

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorenergyitem?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Shopfloor Load Report

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Shopfloor Load Report (Quick Mode)

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorload?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Shopfloor Saving Report

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Shopfloor Saving Report (Quick Mode)

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorsaving?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Shopfloor Statistics Report

(parameter shopfloorid can be replaced with shopflooruuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Shopfloor Statistics Report (Quick Mode)

(parameter shopfloorid can be replaced with shopflooruuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/shopfloorstatistics?shopfloorid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Carbon Dioxide Emission Report         删？

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -X GET {{base_url}}/reports/spacecarbon?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Carbon Dioxide Emission Report (Quick Mode)  删？

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -X GET {{base_url}}/reports/spacecarbon?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Cost Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Cost Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spacecost?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Efficiency Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Efficiency Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceefficiency?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Energy Category Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Energy Category Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceenergycategory?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Energy Item Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Energy Item Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceenergyitem?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Income Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Income Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceincome?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Load Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Load Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceload?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Output Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Output Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spaceoutput?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Saving Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Saving Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spacesaving?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Space Statistics Report

(parameter spaceid can be replaced with spaceuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Space Statistics Report (Quick Mode)

(parameter spaceid can be replaced with spaceuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/spacestatistics?spaceid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Batch Analysis Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```
*   GET Store Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storebatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```
*   GET Store Carbon Dioxide Emission Report           删？

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -X GET {{base_url}}/reports/storetcarbon?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Carbon Dioxide Emission Report (Quick Mode)     删？

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -X GET {{base_url}}/reports/storetcarbon?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Cost Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storetcost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Cost Report (Quick Mode)

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storetcost?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Energy Category Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Energy Category Report (Quick Mode)

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storeenergycategory?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Energy Item Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Energy Item Report (Quick Mode)

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storeenergyitem?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Load Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Load Report (Quick Mode)

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storeload?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Saving Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Saving Report (Quick Mode)

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storesaving?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Store Statistics Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Store Statistics Report (Quick Mode)

(parameter storeid can be replaced with storeuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/storestatistics?storeid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Batch Analysis Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```
*   GET Tenant Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```
*   GET Tenant Bill Report

(parameter storeid can be replaced with storeuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantbill?tenantid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```
*   GET Tenant Carbon Dioxide Emission Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantcarbon?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Carbon Dioxide Emission Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantcarbon?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Cost Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Cost Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantcost?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Energy Category Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Energy Category Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantenergycategory?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Energy Item Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Energy Item Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantenergyitem?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Load Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Load Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantload?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Saving Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Saving Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantsaving?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Tenant Statistics Report

(parameter tenantid can be replaced with tenantuuid)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Tenant Statistics Report (Quick Mode)

(parameter tenantid can be replaced with tenantuuid)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/tenantstatistics?tenantid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Virtual Meter Batch Analysis Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00
```
*   GET Virtual Meter Batch Analysis Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmeterbatch?spaceid=1&reportingperiodstartdatetime=2020-10-01T00:00:00&reportingperiodenddatetime=2020-11-01T00:00:00&quickmode=true
```
* GET Virtual Meter Carbon Dioxide Emission Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
* GET Virtual Meter Carbon Dioxide Emission Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmetercarbon?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Virtual Meter Cost Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Virtual Meter Cost Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmetercost?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Virtual Meter Energy Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Virtual Meter Energy Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmeterenergy?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```
*   GET Virtual Meter Saving Report
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00
```
*   GET Virtual Meter Saving Report (Quick Mode)
(It does not return parameters and Excel file in quick mode)

```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/virtualmetersaving?virtualmeterid=1&periodtype=daily&baseperiodstartdatetime=2020-08-01T00:00:00&baseperiodenddatetime=2020-09-01T00:00:00&reportingperiodstartdatetime=2020-09-01T00:00:00&reportingperiodenddatetime=2020-10-01T00:00:00&quickmode=true
```

*   POST Offline Meter Modify Value

```bash
curl -i -H -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -X POST -d '{"meter":1,"value":[["2023-07-01","123"],["2023-07-02","123"]]}' {{base_url}}/reports/offlinemeterinput
```

*   GET Offline Meter Value List
```bash
curl -i -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -X GET {{base_url}}/reports/metermonthgenerate?offlinemeterid=1&reportingperiodstartdatetime=2023-07-01T00:00:00&reportingperiodenddatetime=2023-07-31T23:59:59
```