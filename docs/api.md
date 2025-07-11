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

### Core/Advanced Report Config Ⓔ
*   GET Get All Advanced Report Configs
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/advancedreports
```

*   POST Create an Advanced Report Config
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Daily Report1\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports
```

*   GET Get All Advanced Report Config by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/advancedreports/1
```

*   PUT Update an Advanced Report Config
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Space Monthly Report\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"next_run_datetime\":\"2023-09-01T00:00:00\",\"is_run_immediately\":false}}" {base_url}/advancedreports/1
```

*   GET Export an Advanced Report Config by ID to JOSN
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/advancedreports/1/export
```

*   POST Import an Advanced Report Config from JSON
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"name\":\"Space Daily Report2\",\"expression\":\"{\\"space_id\\":1}\",\"is_enabled\":true,\"last_run_datetime\":null,\"next_run_datetime\":\"2023-09-06T20:00:00\",\"is_run_immediately\":false}" {base_url}/advancedreports/import
```

*   POST Clone an Advanced Report Config by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/advancedreports/1/clone
```

*   PUT PUT Run an Advanced Report
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/advancedreports/1/run
```

*   DELETE DELETE an Advanced Report Config
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/advancedreports/2
```

### Core/Combined Equipment
*   GET GET All Combined Equipments
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments
```

*   POST Create New Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXX\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments
```

*   GET GET a Combined Equipment by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1
```

*   PUT Update a Combined Equipment by ID
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"MyEMS Combined Chiller Plant\",\"is_input_counted\":true,\"is_output_counted\":true,\"cost_center_id\":1,\"svg_id\":1,\"camera_url\":\"http://XXXs\",\"description\":\"equipment description\"}}" {base_url}/combinedequipments/1
```

*   POST POST Clone a Combined Equipment by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{}}" {base_url}/combinedequipments/1
```

*   DELETE DELETE a Combined Equipment by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/6
```

*   POST Bind an Equipment to a Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"equipment_id\":1}}" {base_url}/combinedequipments/1/equipments
```

*   GET GET All Equipments of a Combined Equipment
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/equipments
```

*   DELETE DELETE an Equipment from a Combined Equipment
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/equipments/1
```

*   GET GET All Meters of a Combined Equipment
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/meters
```

*   POST Bind a Meter to a Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/meters
```

*   DELETE DELETE a Meter from a Combined Equipment
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/meters/1
```

*   POST Bind a Offline Meter to a Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"offline_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/offlinemeters
```

*   GET GET All Offline Meters of a Combined Equipment
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/offlinemeters
```

*   DELETE DELETE an Offline Meter from a Combined Equipment
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/offlinemeters/1
```

*   GET GET All Parameters of a Combined Equipment
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/parameters
```

*   POST Create a fraction Parameter for a Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters
```

*   GET GET a Parameter of a Combined Equipment
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/parameters/1
```

*   PUT Update a point Parameter for a Combined Equipment
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter\",\"parameter_type\":\"point\",\"constant\":null,\"point_id\":3,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/1
```

*   PUT Update a constant Parameter for a Combined Equipment
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test parameter1\",\"parameter_type\":\"constant\",\"constant\":\"test constant1\",\"point_id\":null,\"numerator_meter_uuid\":null,\"denominator_meter_uuid\":null}}" {base_url}/combinedequipments/1/parameters/2
```

*   PUT Update a fraction Parameter for a Combined Equipment
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"test fraction parameter\",\"parameter_type\":\"fraction\",\"constant\":null,\"point_id\":null,\"numerator_meter_uuid\":\"8449878f-b368-4ad9-a41c-e2c49189297a\",\"denominator_meter_uuid\":\"3f8a66c4-8fbe-4e6d-8b40-15dee5290afd\"}}" {base_url}/combinedequipments/1/parameters/3
```

*   DELETE DELETE a Parameter from a Combined Equipment
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/parameters/16
```

*   POST Bind a Virtual Meter to a Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"virtual_meter_id\":1,\"is_output\":false}}" {base_url}/combinedequipments/1/virtualmeters
```

*   GET GET All Virtual Meters of a Combined Equipment
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/virtualmeters
```

*   DELETE DELETE a Virtual Meter from a Combined Equipment
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/virtualmeters/1
```

*   GET GET All Commands associated with Combined Equipment ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/commands
```

*   POST Bind Command to Combined Equipment
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"command_id\":3}}" {base_url}/combinedequipments/1/commands
```

*   DELETE Unbind Command from Combined Equipment
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/commands/3
```

*   GET Export a Combined Equipment by ID to JSON
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/export
```

*   POST Import a Combined Equipment from JSON
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"name\":\"\u7ec4\u5408\u5f0f\u8bbe\u5907_1\",\"is_input_counted\":true,\"is_output_counted\":false,\"cost_center\":{\"id\":1,\"name\":\"\u6210\u672c\u4e2d\u5fc3\",\"uuid\":\"d97b9736-c4f9-4005-a534-6af3487303ad\"},\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"camera_url\":\"http://XXX\",\"description\":\"description\",\"equipments\":[{\"id\":1,\"name\":\"\u8bbe\u59071\",\"uuid\":\"bfa8b106-89a1-49ca-9b2b-a481ac41a873\"}],\"commands\":null,\"meters\":[{\"id\":1,\"name\":\"\u8ba1\u91cf\u88681\",\"uuid\":\"5ca47bc5-22c2-47fc-b906-33222191ea40\",\"is_output\":false}],\"offline_meters\":[{\"id\":1,\"name\":\"\u79bb\u7ebf\u88681\",\"uuid\":\"62f473e0-1a35-41f3-9c30-8110d75d65bb\",\"is_output\":false}],\"virtual_meters\":[{\"id\":1,\"name\":\"\u865a\u62df\u88681\",\"uuid\":\"3fff2cfb-f755-44c8-a919-6135205a8573\",\"is_output\":false}],\"parameters\":[{\"id\":1,\"name\":\"serial number\",\"parameter_type\":\"constant\",\"constant\":\"bfa8b106\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":2,\"name\":\"manufacturer\",\"parameter_type\":\"constant\",\"constant\":\"York\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":3,\"name\":\"maintainer\",\"parameter_type\":\"constant\",\"constant\":\"Johnson Controls\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":4,\"name\":\"use life start\",\"parameter_type\":\"constant\",\"constant\":\"2016-01-01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":5,\"name\":\"use life end\",\"parameter_type\":\"constant\",\"constant\":\"2025-12-31\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":6,\"name\":\"model number\",\"parameter_type\":\"constant\",\"constant\":\"CH01\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":7,\"name\":\"nominal cooling capacity\",\"parameter_type\":\"constant\",\"constant\":\"90.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":8,\"name\":\"nominal cooling input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":9,\"name\":\"nominal cooling cop\",\"parameter_type\":\"constant\",\"constant\":\"5\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":10,\"name\":\"nominal cooling operating current\",\"parameter_type\":\"constant\",\"constant\":\"120.000 A\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":11,\"name\":\"rated input power\",\"parameter_type\":\"constant\",\"constant\":\"100.000 kW\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":12,\"name\":\"nominal chilled water flow rate\",\"parameter_type\":\"constant\",\"constant\":\"30 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":13,\"name\":\"nominal cooling water flow_rate\",\"parameter_type\":\"constant\",\"constant\":\"50 m2/h\",\"point\":null,\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":14,\"name\":\"status\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":15,\"name\":\"inlet chilled water temperature\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":2,\"name\":\"Working hours counter\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":16,\"name\":\"chilled_water instantaneous flow rate\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":3,\"name\":\"Current a\"},\"numerator_meter\":null,\"denominator_meter\":null},{\"id\":17,\"name\":\"instantaneous power\",\"parameter_type\":\"point\",\"constant\":null,\"point\":{\"id\":4,\"name\":\"Active Power a\"},\"numerator_meter\":null,\"denominator_meter\":null}]}" {base_url}/combinedequipments/import
```

*   POST Clone a Combined Equipment by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/combinedequipments/1/clone
```

### Core/Contact
*   GET Get All Contacts
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/contacts
```

*   POST Create New Contact
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888888\",\"description\":\"contact description\"}}" {base_url}/contacts
```

*   GET GET a Contact by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/contacts/1
```

*   PUT Update a Contact
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"albert\",\"email\":\"albert@myems.io\",\"phone\":\"+8613888888899\",\"description\":\"contact description\"}}" {base_url}/contacts/3
```

*   DELETE DELETE a Contact by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/contacts/3
```

### Core/Command
*   GET Get All Commands
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/commands
```

*   POST Create New Command (with set_value)
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands
```

*   GET GET a Command by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/commands/1
```

*   PUT Update a Command (with set_value)
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"turn_up_light\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}}" {base_url}/commands/3
```

*   DELETE DELETE a Command by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/commands/7
```

*   PUT PUT Send a Command by ID
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"set_value\":2}}" {base_url}/commands/1/send
```

*   GET Export a Command by ID to JSON
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/commands/1/export
```

*   POST Import a Command from JSON
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"name\":\"turn_up_light1\",\"topic\":\"myems/point/2\",\"payload\":\"{address:1, slave_id:1, set_value: $s1}\",\"set_value\":2,\"description\":\"turn up light\"}" {base_url}/commands/import
```

*   POST Clone a Command by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/commands/1/clone
```

### Core/Control Mode
*   GET Get All Control Modes
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/controlmodes
```

*   POST Create New Control Mode
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"CM11\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}}" {base_url}/controlmodes
```

*   GET GET a Control Mode by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/controlmodes/1
```

*   PUT Update a Control Mode
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u524a\u5cf0\u586b\u8c37\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":-5}]}}" {base_url}/controlmodes/1
```

*   DELETE DELETE a Control Mode by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/controlmodes/11
```

*   GET Export a Control Mode by ID to JSON
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/controlmodes/1/export
```

*   POST Import a Control Mode from JSON
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"name\":\"\u81ea\u53d1\u81ea\u7528\",\"is_active\":false,\"times\":[{\"start_time_of_day\":\"0:00:00\",\"end_time_of_day\":\"5:59:59\",\"power_value\":10},{\"start_time_of_day\":\"6:00:00\",\"end_time_of_day\":\"7:59:59\",\"power_value\":0},{\"start_time_of_day\":\"8:00:00\",\"end_time_of_day\":\"10:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"11:00:00\",\"end_time_of_day\":\"17:59:59\",\"power_value\":10},{\"start_time_of_day\":\"18:00:00\",\"end_time_of_day\":\"20:59:59\",\"power_value\":-5},{\"start_time_of_day\":\"21:00:00\",\"end_time_of_day\":\"21:59:59\",\"power_value\":0},{\"start_time_of_day\":\"22:00:00\",\"end_time_of_day\":\"23:59:59\",\"power_value\":10}]}" {base_url}/controlmodes/import
```

*   POST Clone a Control Mode by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/controlmodes/1/clone
```

*   POST Get All Times of Control Mode by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/controlmodes/1/times
```

### Core/Cost Center
*   GET GET all Cost Centers
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costcenters
```

*   POST POST Creat a Cost Center
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u52a8\u529b\u4e2d\u5fc3\",\"external_id\":\"21829198980001\"}}" {base_url}/costcenters
```

*   GET GET a Cost Center by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costcenters/1
```

*   PUT Update a Cost Center
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u52a8\u529b\u4e2d\u5fc32\",\"external_id\":\"21829198980002\"}}" {base_url}/costcenters/1
```

*   DELETE DELETE a Cost Center by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costcenters/3
```

*   POST Bind  Tariff to Cost Center
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"tariff_id\":\"3\"}}" {base_url}/costcenters/1/tariffs
```

*   GET GET All Tariffs associated with Cost Center by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costcenters/1/tariffs
```

*   DELETE Unbind Tariff from Cost Center
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costcenters/1/tariffs/3
```

### Core/Cost File
*   GET GET All Cost Files
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costfiles
```

*   POST POST Upload a Cost File
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{}" {base_url}/costfiles
```

*   GET GET a Cost File by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costfiles/1
```

*   DELETE DELETE a Cost File by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costfiles/1
```

*   GET Rstore a Cost File by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/costfiles/2/restore
```

### Core/Data Repair File
*   GET GET All Data Repair Files
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datarepairfiles
```

*   POST POST Upload a Data Repair File
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{}" {base_url}/datarepairfiles
```

*   GET GET a Data Repair File by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datarepairfiles/1
```

*   DELETE DELETE a Data Repair File by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datarepairfiles/1
```

*   GET Rstore a Data Repair File by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datarepairfiles/1/restore
```

### Core/Data Source
*   GET GET All Data Sources
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datasources
```

*   POST Create Data Source
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources
```

*   GET GET Data Source by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datasources/1
```

*   PUT Update Data Source by ID
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"Modbus1\",\"gateway_id\":1,\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.99\\", \\"port\\":502}\",\"description\":\"Modbus1\"}}" {base_url}/datasources/1
```

*   DELETE DELETE Data Source by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datasources/14
```

*   GET GET All Points by Data Source ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datasources/1/points
```

*   GET Export Data Source by ID to JSON
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datasources/16/export
```

*   POST Import Data Source from JSON
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"name\":\"Modbus1\",\"gateway\":{\"id\":1,\"name\":\"Gateway1\",\"uuid\":\"dc681938-5053-8660-98ed-266c58227231\"},\"protocol\":\"modbus-tcp\",\"connection\":\"{\\"host\\":\\"10.1.2.88\\", \\"port\\":502}\",\"description\":\"Modbus1\",\"points\":[{\"name\":\"Active Energy Import 1\",\"object_type\":\"ENERGY_VALUE\",\"units\":\"kWh\",\"high_limit\":99999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":801, \\"number_of_registers\\":4, \\"format\\":\\"=d\\", \\"byte_swap\\":false}\",\"description\":null},{\"name\":\"Active Power  2\",\"object_type\":\"ANALOG_VALUE\",\"units\":\"kW\",\"high_limit\":999999999,\"low_limit\":0,\"higher_limit\":null,\"lower_limit\":null,\"ratio\":1,\"is_trend\":true,\"is_virtual\":false,\"address\":\"{\\"slave_id\\":1, \\"function_code\\":3, \\"offset\\":209, \\"number_of_registers\\":2, \\"format\\":\\"=L\\", \\"byte_swap\\":true}\",\"description\":null}]}" {base_url}/datasources/import
```

*   POST Clone a Data Source
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/datasources/2/clone
```

### Core/Distribution System
*   GET GET All Distribution Systems
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributionsystems
```

*   POST Create Distribution System
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u793a\u4f8b\u914d\u7535\u7cfb\u7edf2\",\"svg_id\":1,\"description\":\"demo description\"}}" {base_url}/distributionsystems
```

*   GET GET  a Distribution System by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributionsystems/1
```

*   PUT Update Distribution System by ID
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u793a\u4f8b\u914d\u7535\u7cfb\u7edf1\",\"svg_id\":2,\"description\":\"demo description\"}}" {base_url}/distributionsystems/1
```

*   DELETE DELETE Distribution Systems by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributionsystems/2
```

*   GET GET All Distribution Circuits of Distribution System
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributionsystems/1/distributioncircuits
```

*   GET Export a Distribution System by ID to JSON
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributionsystems/1/export
```

*   POST Import a Distribution System from JSON
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"name\":\"\u793a\u4f8b\u914d\u7535\u7cfb\u7edf_1\",\"svg\":{\"id\":1,\"name\":\"SVG1\",\"uuid\":\"9d6d23fe-8014-4c0d-bb91-32eb2fa48862\"},\"description\":\"demo distribution system\",\"circuits\":[{\"id\":1,\"name\":\"AHa01\",\"uuid\":\"52f7abe1-ba0e-47a6-a327-4faac42a1d11\",\"distribution_room\":\"1ES\",\"switchgear\":\"AHa01\",\"peak_load\":5100,\"peak_current\":1250,\"customers\":\"11#\u7535\u6e90\u8fdb\u7ebf1WHj2\",\"meters\":\"AHa01\",\"points\":[{\"id\":1,\"name\":\"Active Energy Import Tariff 1\"}]}]}" {base_url}/distributionsystems/import
```

*   POST Clone a Distribution System by ID
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributionsystems/1/clone
```

### Core/Distribution Circuit
*   GET GET All Distribution Circuits
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributioncircuits
```

*   POST Create new Distribution Circuit
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W92\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"\u5730\u4e0b\u5ba4\u5e94\u6025\u7167\u660e\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits
```

*   GET GET a Distribution Circuit by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributioncircuits/1
```

*   PUT Update Distribution Circuit by ID
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"51W91\",\"distribution_system_id\":1,\"distribution_room\":\"EW1\",\"switchgear\":\"51AL9\",\"peak_load\":30,\"peak_current\":53.6,\"customers\":\"\u5730\u4e0b\u5ba4\u5e94\u6025\u7167\u660e\",\"meters\":\"ALE-1102, ALE-1082\"}}" {base_url}/distributioncircuits/1
```

*   DELETE DELETE a Distribution Circuit by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributioncircuits/2
```

*   POST Bind Point to Distribution Circuit
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"point_id\":\"2\"}}" {base_url}/distributioncircuits/1/points
```

*   GET GET All Points of a Distribution Circuit
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributioncircuits/1/points
```

*   DELETE Unbind Point from Distribution Circuit
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/distributioncircuits/1/points/2
```

### Core/Email Server
*   GET GET All Email Servers
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/emailservers
```

*   POST Create New Email Server
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.126.com\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@126.com\"}}" {base_url}/emailservers
```

*   GET GET an Email Server by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/emailservers/1
```

*   PUT Update an Email Server
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"host\":\"smtp.myems.io\",\"port\":25,\"requires_authentication\":true,\"user_name\":\"myems\",\"password\":\"!MyEMS1\",\"from_addr\":\"myems@myems.io\"}}" {base_url}/emailservers/1
```

*   DELETE DELETE an Email Server by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/emailservers/2
```

### Core/Email Message
*   GET GET Email Messages by Date Range
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/emailmessages?startdatetime=2020-01-01T00:00:00&enddatetime=2020-01-01T00:00:00
```

*   POST Create New Email Message
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{}" {base_url}/emailmessages
```

*   GET GET an Email Message by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/emailmessages/1
```

*   PUT Update an Email Message
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{}" {base_url}/emailmessages/1
```

*   DELETE DELETE an Email Message by ID
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/emailmessages/2
```

### Core/Energy Category
*   GET GET All Energy Categories
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/energycategories
```

*   POST Create an Energy Category
```bash
curl -i -X POST -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u67f4\u6cb9\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories
```

*   GET GET an Energy Category by ID
```bash
curl -i -X GET -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/energycategories/1
```

*   PUT Update an Energy Category
```bash
curl -i -X PUT -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" -H "Content-Type: application/json" -d "{\"data\":{\"name\":\"\u6c7d\u6cb9\",\"unit_of_measure\":\"L\",\"kgce\":0.1229,\"kgco2e\":0.8825}}" {base_url}/energycategories/12
```

*   DELETE DELETE an Energy Category
```bash
curl -i -X DELETE -H "User-UUID: dcdb67d1-6116-4987-916f-6fc6cf2bc0e4" -H "Token: GET-TOKEN-AFTER-LOGIN" -H "API-Key: 0196ef3251ad46301f9831f41e1ee96f443ed7d20e0e7ddb82ccc0355acbe0e76352104191d337c2bce53da5fa454b73b19ca614f45d68b4aabd7335daf91882" {base_url}/energycategories/12
```

