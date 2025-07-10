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