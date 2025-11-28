# MyEMS Database Design Document

> This document is aimed at programmers and provides a detailed explanation of the database architecture, table structure, and design philosophy of the MyEMS energy management system.

## Table of Contents

- [Database Architecture Design](#database-architecture-design)
- [Database Detailed Description](#database-detailed-description)
- [Data Flow Relationships](#data-flow-relationships)
- [Table Structure Design Specifications](#table-structure-design-specifications)

---

## Database architecture design

### Design concept

1. **Data separation**: Separate data into different databases based on data type and usage to avoid a single database becoming too large
2. **Read-write separation**: Historical data is stored in a time series format, enabling efficient querying
3. **Horizontal scaling**: Large databases (historical_db, energy_db) can be scaled independently
4. **Unified standards**: All databases use the same character set and sorting rules

### Database configuration

All databases use the following configuration uniformly:

- **Character Set**: `utf8mb4` (supports the complete UTF-8 character set, including emoji)
- **Sorting rule**: `utf8mb4_unicode_ci` (Unicode sorting rule)
- **Storage engine**: InnoDB (default, supports transactions and foreign keys)

### Naming conventions

- **Database Naming**: ` myems_ {Function} d_db ` (lowercase, underline separated)
- **Table Naming**: ` tbl_ {Entity Name} ` (lowercase, underline separated)
- **Field Naming**: Lowercase, separated by underscores, such as ` start_datetime_utc '`
- **Index Naming**: ` tbl_ {Table Name} _index_ {Sequence Number}`

---

## Detailed database description

### 1. Myems_system_deb (system configuration database)

**Purpose**: The basic configuration and metadata of the storage system, serving as the core configuration library of the entire system.

**Features**:
- Contains the most tables (approximately 150+tables)
- The data volume is relatively small, but the structure is complex
- Contains a large number of association tables

**Main Table Classification**:

#### 1.1 Basic Configuration Table

|table name|Instructions|key field|
|------|------|----------|
|`tbl_energy_categories`|Energy classification (electricity, water, gas, cold, heat, etc.)|`id`, `name`, `unit_of_measure`, `kgce`, `kgco2e`|
|`tbl_energy_items`|Energy consumption sub items (lighting, air conditioning, power, etc.)|`id`, `name`, `energy_category_id`|
|`tbl_cost_centers`|cost center|`id`, `name`, `external_id`|
|`tbl_data_sources`|Data Source Configuration|`id`, `name`, `gateway_id`, `protocol`, `connection`|
|`tbl_protocols`|Protocol Configuration|`id`, `name`, `protocol_type`|

#### 1.2 Equipment Management Table

|table name|Instructions|key field|
|------|------|----------|
|`tbl_equipments`|Device Information|`id`, `name`, `uuid`, `equipment_type_id`, `cost_center_id`|
|`tbl_combined_equipments`|Combination device (combination of multiple devices)|`id`, `name`, `is_input_counted`, `is_output_counted`|
|`tbl_meters`|Meter information|`id`, `name`, `uuid`, `energy_category_id`, `is_counted`|
|`tbl_offline_meters`|Offline meter (manually entered)|`id`, `name`, `energy_category_id`|
|`tbl_virtual_meters`|Virtual Meter (Calculated)|`Id, name, expression (in JSON format)|
|`tbl_points`|Data point information|`id`, `name`, `data_source_id`, `object_type`, `object_id`|

#### 1.3 Spatial Organization Table

|table name|Instructions|key field|
|------|------|----------|
|`tbl_spaces`|Spatial information (rooms, floors, etc.)|`id`, `name`, `uuid`, `parent_space_id`, `area`|
|`tbl_stores`|Store Information|`id`, `name`, `uuid`, `space_id`|
|`tbl_tenants`|tenant information|`id`, `name`, `uuid`, `space_id`|
|`tbl_shopfloors`|Workshop information|`id`, `name`, `uuid`, `space_id`|

#### 1.4 Association Relationship Table

The system uses a large number of association tables to establish many to many relationships:

- `tbl_equipments_meters`: Association between equipment and meters
- `tbl_equipments_offline_meters`: Association between equipment and offline meters
- `tbl_equipments_virtual_meters`: Association between equipment and virtual meters
- `tbl_spaces_equipments`: The association between space and equipment
- `tbl_spaces_meters`: The association between space and meters
- `tbl_combined_equipments_equipments`: Association between combined equipment and devices
- etc...

#### 1.5 List of New Energy Equipment

|table name|Instructions|key field|
|------|------|----------|
|`tbl_photovoltaic_power_stations`|photovoltaic power station|`id`, `name`, `capacity`, `contact_id`|
|`tbl_energy_storage_containers`|Energy storage container|`id`, `name`, `rated_capacity`, `rated_power`|
|`tbl_energy_storage_power_stations`|energy storage power station|`id`, `name`, `rated_capacity`|
|`tbl_microgrids`|microgrid|`id`, `name`, `address`|
|`tbl_charging_stations`|charging station|`id`, `name`, `rated_capacity`, `rated_power`|

#### 1.6 Control and Scheduling Table

|table name|Instructions|key field|
|------|------|----------|
|`tbl_commands`|control command|`Id, name, topic, payload (in JSON format)|
|`tbl_control_modes`|control mode|`id`, `name`, `is_active`|
|`tbl_control_modes_times`|Control mode time period|`id`, `control_mode_id`, `start_time_of_day`, `end_time_of_day`|

#### 1.7 Other Configuration Table

- `tbl_contacts`: Contact information
- `tbl_distribution_systems`: Distribution systems
- `tbl_distribution_circuits`: Distribution circuits
- `tbl_energy_flow_diagrams`: Energy Flow Diagram
- `tbl_tariffs`: Electricity pricing configuration
- `tbl_working_calendars`: Work calendars
- `tbl_web_messages`: Web Messages

**Development precautions**:
-All tables have 'id' (BIGINT AUTO-INCREMENT) as the primary key
-Most tables have a 'uuid' (CHAR (36)) field for external system integration
-Association tables usually only have 'id' and two foreign key fields
-JSON fields use the 'LONGTEX' type to store formatted JSON strings

---

### 2. Myems_historics_db (Historical Data Database)

**Purpose**: To store real-time monitoring data and historical data, and is one of the largest databases in terms of system data volume.

**Features**:
- The amount of data is huge, and time series storage is used
- Contains raw data and the latest value cache table
- Support data quality labeling (`is_bad`, `is_published`)


**Main Table Structure**:

|table name|Instructions|key field|Index strategy|
|------|------|----------|----------|
|`tbl_analog_value`|Analog historical data|`point_id`, `utc_date_time`, `actual_value`, `is_bad`, `is_published`|`(point_id, utc_date_time)`, `(utc_date_time)`|
|`tbl_analog_value_latest`|Latest analog value (cache)|`point_id`, `utc_date_time`, `actual_value`|`(point_id, utc_date_time)`|
|`tbl_digital_value`|Digital historical data|`point_id`, `utc_date_time`, `actual_value` (INT)|`(point_id, utc_date_time)`, `(utc_date_time)`|
|`tbl_digital_value_latest`|Latest numerical value (cache)|`point_id`, `utc_date_time`, `actual_value`|`(point_id, utc_date_time)`|
|`tbl_energy_value`|Historical energy consumption data|`point_id`, `utc_date_time`, `actual_value`, `is_bad`, `is_published`|`(point_id, utc_date_time)`, `(utc_date_time)`|
|`tbl_energy_value_latest`|Latest energy consumption value (cache)|`point_id`, `utc_date_time`, `actual_value`|`(point_id, utc_date_time)`|
|`tbl_text_value`|Text volume historical data|`point_id`, `utc_date_time`, `actual_value` (LONGTEXT)|`(point_id, utc_date_time)`, `(utc_date_time)`|
|`tbl_text_value_latest`|Latest text volume value (cache)|`point_id`, `utc_date_time`, `actual_value`|`(point_id, utc_date_time)`|

**File Storage Table**:

|table name|Instructions|key field|
|------|------|----------|
|`tbl_cost_files`|Cost document (Excel/CSV)|`file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object` (LONGBLOB)|
|`tbl_offline_meter_files`|Offline meter data file|`file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object`|
|`tbl_data_repair_files`|Data repair file|`file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object`|
|`tbl_energy_plan_files`|Energy consumption plan document|`file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object`|

**Data Type Description**:
- `practice_value`: DECIMAL (21,6) - Supports high-precision numerical values with 6 decimal places
- `utc_date_time`: DATETIME - UTC time, all times use UTC uniformly
- `is_bad`: BOOL - Data Quality Label, True indicates bad data
- `is_published`: BOOL - publish flag, True indicates published

**Development precautions**:
- All time fields use UTC time, and the front-end display is converted to local time
- The `_latest` table is used to quickly query the latest values and avoid scanning historical tables
- The file table uses `LONGBLOB` to store binary files, pay attention to size restrictions
- Regularly clean historical data to avoid tables being too large and affecting performance


---

### 3. Myems_energy_db (energy consumption database)

**Purpose**: To store energy consumption statistics of various devices and aggregate them by hour, day, month, and year.

**Features**:
- The data is calculated and generated by the `myems-aggregation` service
- Divided by time granularity into hourly, daily, monthly, and yearly tables
- Support statistics by energy category and energy consumption item

**Table Naming Rules**:
- `tbl_{Object Type}_{Direction}_{Classification}_{Time Granularity}`
- Object type:` meter`, `equipment`, `combined_equipment`, `space`, `store`, `tenant`, `shopfloor`
- Direction: `input`(input), `output`(output)
- Categories: `category` (energy category), `item` (energy consumption sub item)
- Time granularity: `hourly`, `daily`, `monthly`, `yearly`


**Main Table Structure**:

#### 3.1 Energy consumption meter

|table name|Instructions|key field|
|------|------|----------|
|`tbl_meter_hourly`|Hourly energy consumption of the meter|`meter_id`, `start_datetime_utc`, `actual_value`|
|`tbl_meter_daily`|Daily energy consumption of the meter|`meter_id`, `start_datetime_utc`, `actual_value`|
|`tbl_meter_monthly`|Monthly energy consumption of the meter|`meter_id`, `start_datetime_utc`, `actual_value`|
|`tbl_meter_yearly`|Annual energy consumption of the meter|`meter_id`, `start_datetime_utc`, `actual_value`|
|`tbl_offline_meter_hourly`|Offline meter hourly energy consumption|`offline_meter_id`, `start_datetime_utc`, `actual_value`|
|`tbl_virtual_meter_hourly`|Virtual meter hourly energy consumption|`virtual_meter_id`, `start_datetime_utc`, `actual_value`|

#### 3.2 Equipment Energy Consumption Table

|table name|Instructions|key field|
|------|------|----------|
|`tbl_equipment_input_category_hourly`|Equipment input energy consumption (by category)|`equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_equipment_input_item_hourly`|Equipment input energy consumption (by item)|`equipment_id`, `energy_item_id`, `start_datetime_utc`, `actual_value`|
|`tbl_equipment_output_category_hourly`|Equipment output energy consumption (by category)|`equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_combined_equipment_input_category_hourly`|Combination device input energy consumption (by category)|`combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_combined_equipment_output_category_hourly`|Energy consumption of combined equipment output (by classification)|`combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|

#### 3.3 Space Energy Consumption Table

|table name|Instructions|key field|
|------|------|----------|
|`tbl_space_input_category_hourly`|Space input energy consumption (by category)|`space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_space_input_item_hourly`|Space input energy consumption (by item)|`space_id`, `energy_item_id`, `start_datetime_utc`, `actual_value`|
|`tbl_space_output_category_hourly`|Space output energy consumption (by classification)|`space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_store_input_category_hourly`|Store input energy consumption|`store_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_tenant_input_category_hourly`|Tenant inputs energy consumption|`tenant_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_shopfloor_input_category_hourly`|Workshop input energy consumption|`shopfloor_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|

#### 3.4 Energy Consumption Table of New Energy Equipment

|table name|Instructions|key field|
|------|------|----------|
|`tbl_photovoltaic_power_station_hourly`|Hourly power generation of photovoltaic power station|`photovoltaic_power_station_id`, `start_datetime_utc`, `actual_value`|
|`tbl_energy_storage_container_charge_hourly`|Charging capacity of energy storage container|`energy_storage_container_id`, `start_datetime_utc`, `actual_value`|
|`tbl_energy_storage_container_discharge_hourly`|Discharge capacity of energy storage container|`energy_storage_container_id`, `start_datetime_utc`, `actual_value`|
|`tbl_energy_storage_container_grid_buy_hourly`|Energy storage container purchases electricity|`energy_storage_container_id`, `start_datetime_utc`, `actual_value`|
|`tbl_energy_storage_container_grid_sell_hourly`|Electricity sales from energy storage containers|`energy_storage_container_id`, `start_datetime_utc`, `actual_value`|
|`tbl_microgrid_charge_hourly`|Microgrid charging capacity|`microgrid_id`, `start_datetime_utc`, `actual_value`|
|`tbl_microgrid_discharge_hourly`|Microgrid discharge capacity|`microgrid_id`, `start_datetime_utc`, `actual_value`|

**Index Design**:
-All tables have a composite index: ` (Object ID, Classification ID, start_datetime_utc) ` or ` (Object ID, start_datetime_utc)`
-Support quick queries by object and time range

**Development precautions**:
- `start_datetime_utc` represents the start time of the time period (e.g. January 1, 2024-01 00:00:00 represents January 1 from 0:00 to 1:00)
- `actual_value` is the aggregated value, not the original value
- The data is periodically calculated by the aggregation service, not written in real-time
- Pay attention to time zone conversion when querying
---
### 4. myems_billing_db (Billing Database)

**Purpose**: Stores billing-related energy consumption data. Its structure is similar to `myems_energy_db`, but the data is calculated based on electricity tariffs.

**Features**:
- Table structure is identical to `myems_energy_db`
- Data is calculated by the `myems-aggregation` service using tariff configurations
- Supports complex billing rules such as time-of-use tariffs and tiered pricing

**Main Tables**:
- Same table structure as `myems_energy_db`
- Data values are multiplied by the corresponding tariff, typically in currency units (e.g., CNY, USD)

**Development Notes**:
- Billing data depends on the tariff configuration in `myems_system_db.tbl_tariffs`
- Must be associated with cost centers (`cost_center`)
- Supports multiple tariff strategies (time-of-use, tiered, capacity-based, etc.)

---

### 5. myems_carbon_db (Carbon Emission Database)

**Purpose**: Stores carbon emission–related energy data for carbon footprint calculations.

**Features**:
- Table structure is identical to `myems_energy_db`
- Data is calculated by the `myems-aggregation` service based on carbon emission factors
- Carbon emission factors are stored in `myems_system_db.tbl_energy_categories.kgco2e`

**Main Tables**:
- Same table structure as `myems_energy_db`
- Data values are multiplied by the carbon emission factor, typically in kgCO2e (kilograms of CO₂ equivalent)

**Development Notes**:
- Carbon emission factors may change over time, so historical factors must be supported
- Different energy types (electricity, gas, oil, etc.) have different emission factors
- Supports Scope 1, Scope 2, and Scope 3 carbon emission calculation

---

### 6. myems_energy_baseline_db (Energy Baseline Database)

**Purpose**: Stores energy baseline data for energy-saving analysis and energy efficiency evaluation.

**Features**:
- Table structure is similar to `myems_energy_db`
- Baseline data is typically calculated based on historical data or standard values
- Used for comparing actual energy consumption with baseline consumption to calculate energy savings

**Main Tables**:
- Same table structure as `myems_energy_db`
- Stores baseline values rather than actual values

**Development Notes**:
- Baseline data needs to be updated regularly
- Supports multiple baseline calculation methods (historical average, regression analysis, standard values, etc.)

---

### 7. Myems_energy_model_deb (energy consumption model database)

**Purpose**: To store 8760 hours of annual energy consumption model data (8760 hours per year).

**Features**:
- Each object stores 8760 records (hourly data for one year)
- Used for energy consumption forecasting and planning
- The table name contains the suffix `_8760`

**Main Table**:

|table name|Instructions|key field|
|------|------|----------|
|`tbl_meter_8760`|Meter 8760 hour model|`meter_id`, `start_datetime_utc`, `actual_value`|
|`tbl_equipment_input_category_8760`|Equipment input energy consumption model|`equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_combined_equipment_input_category_8760`|Combination device input energy consumption model|`combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_space_input_category_8760`|Space input energy consumption model|`space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_shopfloor_input_category_8760`|Workshop input energy consumption model|`shopfloor_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_store_input_category_8760`|Store input energy consumption model|`store_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|
|`tbl_tenant_input_category_8760`|Tenant input energy consumption model|`tenant_id`, `energy_category_id`, `start_datetime_utc`, `actual_value`|

**Development precautions**:
- The 8760 hour model is typically generated based on historical data or standard models
- Used for annual energy consumption forecasting and budget preparation
- Support viewing by dimensions such as week, month, quarter, etc

---

### 8. myems_energy_plan_db (Energy Plan Database)

**Purpose**: Stores energy plan and target data.

**Features**:
- Table structure is similar to `myems_energy_db`
- Stores planned values rather than actual values
- Used for energy consumption budgeting and target management

**Main Tables**:
- Same table structure as `myems_energy_db`
- Data comes from plan files or manual entry

**Development Notes**:
- Plan data needs to be compared with actual data for analysis
- Supports multi-level plans (annual, monthly, weekly, etc.)

---

### 9. myems_energy_prediction_db (Energy Prediction Database)

**Purpose**: Stores energy consumption prediction data.

**Features**:
- Table structure is similar to `myems_energy_db`
- Stores predicted values rather than actual values
- Used for energy consumption forecasting and warnings

**Main Tables**:
- Same table structure as `myems_energy_db`
- Data is generated by prediction algorithms

**Development Notes**:
- Prediction data needs to be updated regularly
- Supports multiple prediction algorithms (time series, machine learning, etc.)
- Prediction accuracy needs continuous optimization

---

### 10. Myems_fdd_db (Fault Diagnosis Database)

**Purpose**: To store data related to fault detection and diagnosis.

**Features**:
- Support multiple alert channels (web, email, SMS, WeChat, phone)
- The rule engine supports complex fault detection logic
- Support the confirmation and handling of fault messages

**Main Table Structure**:

|table name|Instructions|key field|
|------|------|----------|
|`tbl_rules`|Diagnostic rules|`id`, `name`, `category`, `fdd_code`, `priority`, `channel`, `expression` (JSON), `message_template`, `is_enabled`|
|`tbl_web_messages`|Web Message|`id`, `rule_id`, `user_id`, `subject`, `category`, `priority`, `message`, `status`, `belong_to_object_type`, `belong_to_object_id`|
|`tbl_email_messages`|Email message|`id`, `rule_id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `status`|
|`tbl_text_messages_outbox`|SMS inbox|`id`, `rule_id`, `recipient_mobile`, `message`, `status`, `acknowledge_code`|
|`tbl_text_messages_inbox`|sms inbox |`id`, `sender_mobile`, `message`, `status`|
|`tbl_wechat_messages_outbox`|WeChat message sender box|`id`, `rule_id`, `recipient_openid`, `message_template_id`, `message_data` (JSON)|
|`tbl_wechat_messages_inbox`|WeChat message inbox|`id`, `sender_openid`, `message`, `status`|
|`tbl_email_servers`|Email Server Configuration|`id`, `host`, `port`, `requires_authentication`, `user_name`, `password`, `from_addr`|
|`tbl_wechat_configs`|WeChat configuration|`id`, `api_server`, `app_id`, `app_secret`, `access_token`, `expires_datetime_utc`|
**Rule Categories (category)**:
- `REALTIME`: Real-time alarms
- `SYSTEM`: System alarms
- `SPACE`: Space alarms
- `METER`: Meter alarms
- `TENANT`: Tenant alarms
- `STORE`: Store alarms
- `SHOPFLOOR`: Shopfloor alarms
- `EQUIPMENT`: Equipment alarms
- `COMBINEDEQUIPMENT`: Combined equipment alarms

**Priority (priority)**:
- `CRITICAL`: Critical
- `HIGH`: High
- `MEDIUM`: Medium
- `LOW`: Low

**Development Notes**:
- The `expression` field stores the rule expression in JSON format
- `message_template` supports variable substitution (e.g., `$name`, `$value`)
- Rules support both scheduled execution and immediate execution
- Message status: `new` → `sent` → `acknowledged` / `timeout`

---

### 11. myems_user_db (User Database)

**Purpose**: Stores user authentication, API keys, email messages, etc.

**Features**:
- Small data volume, but high security requirements
- Supports user permissions management
- Supports API key authentication

**Main Table Structure**:

|table name|Instructions|key field|
|------|------|----------|
|`tbl_users`|User information|`id`, `name`, `uuid`, `display_name`, `email`, `salt`, `password`, `is_admin`, `is_read_only`, `privilege_id`, `account_expiration_datetime_utc`, `password_expiration_datetime_utc`, `failed_login_count`|
|`tbl_privileges`|Permission Configuration|`Id, name, data (in JSON format)|
|`tbl_sessions`|user session|`id`, `user_uuid`, `token`, `utc_expires`|
|`tbl_api_keys`|API Key|`id`, `name`, `token`, `created_datetime_utc`, `expires_datetime_utc`|
|`tbl_email_messages`|Email message|`id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `status`, `scheduled_datetime_utc`|
|`tbl_email_message_sessions`|Email conversation|`id`, `recipient_email`, `token`, `expires_datetime_utc`|
|`tbl_logs`|Operation log|`id`, `user_uuid`, `request_datetime_utc`, `request_method`, `resource_type`, `resource_id`, `request_body` (JSON)|
|`tbl_notifications`|Notification message|`id`, `user_id`, `created_datetime_utc`, `status`, `subject`, `message`, `url`|
|`tbl_new_users`|New user (to be activated)|`id`, `name`, `uuid`, `display_name`, `email`, `salt`, `password`|
|`tbl_verification_codes`|CAPTCHA|`id`, `recipient_email`, `verification_code`, `created_datetime_utc`, `expires_datetime_utc`|
**Security Design**:
- Passwords are stored using salt + hash, no plain text storage
- Supports account and password expiration time
- Supports login failure attempt limits
- API keys support expiration time

**Development Notes**:
- Password fields should be encrypted for storage, do not query directly
- Session tokens should be periodically cleaned to remove expired records
- Operation logs should record all critical actions for auditing
- Notification statuses: `unread` → `read` → `archived`

---

### 12. myems_reporting_db (Reporting Database)

**Purpose**: Stores email messages and attachments related to reports.

**Features**:
- Small data volume
- Supports storing report templates and generated files

**Main Table Structure**:

|table name|Instructions|key field|
|------|------|----------|
|`tbl_reports`|Report Configuration|`id`, `name`, `uuid`, `expression` (JSON), `is_enabled`, `last_run_datetime_utc`, `next_run_datetime_utc`, `is_run_immediately`|
|`tbl_reports_files`|report document|`id`, `uuid`, `create_datetime_utc`, `file_name`, `file_type` (xlsx/pdf/docx), `file_object` (LONGBLOB)|
|`tbl_template_files`|Report Template File|`id`, `uuid`, `report_id`, `file_name`, `file_type`, `file_object`|
|`tbl_email_messages`|Email message|`id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `attachment_file_object`, `status`|
**Development Notes**:
- Report files support Excel, PDF, and Word formats
- Template files are used for generating reports
- Reports support both scheduled generation and immediate generation
- Files are stored using `LONGBLOB`; pay attention to size limitations

---

### 13. myems_production_db (Production Database)

**Purpose**: Stores production-related product data.

**Characteristics**:
- Small data volume
- Used for production energy consumption correlation analysis

**Main Table Structure**:

|table name|Instructions|key field|
|------|------|----------|
|`tbl_products`|Product Information|`id`, `name`, `uuid`, `unit_of_measure`, `tag`, `standard_product_coefficient`|
|`tbl_teams`|Team Information|`id`, `name`, `uuid`, `description`|
|`tbl_shifts`|Shift information|`id`, `shopfloor_id`, `team_id`, `product_id`, `product_count`, `start_datetime_utc`, `end_datetime_utc`, `reference_timestamp`|
|`tbl_shopfloor_hourly`|Workshop hourly output|`id`, `shopfloor_id`, `start_datetime_utc`, `product_id`, `product_count`|
|`tbl_space_hourly`|Space hour output|`id`, `space_id`, `start_datetime_utc`, `product_id`, `product_count`|
|`tbl_shopfloors_products`|Workshop and product association|`id`, `shopfloor_id`, `product_id`|
|`tbl_shopfloors_teams`|Workshop and team association|`id`, `shopfloor_id`, `team_id`|

**Development precautions**:
- Production data is used to calculate unit product energy consumption
- Support statistics based on dimensions such as product, team, workshop, etc
- Associate with energy consumption data to calculate energy efficiency indicators

---

## Data flow relationship

### Data collection process

### Data Acquisition Flow

Device / Sensor
↓ (Modbus TCP / MQTT / HTTP)
myems-modbus-tcp (Data Acquisition Service)
↓ (Write)
myems_historical_db.tbl_analog_value / tbl_digital_value / tbl_energy_value
↓ (Data Normalization)
myems-normalization (Normalization Service)
↓ (Data Cleaning)
myems-cleaning (Cleaning Service)
↓ (Data Aggregation)
myems-aggregation (Aggregation Service)
↓ (Write)
myems_energy_db (Energy Data)
myems_billing_db (Billing Data)
myems_carbon_db (Carbon Emission Data)
---

### Data Query Flow

User Request
↓
myems-api (API Service)
↓ (Query)
myems_system_db (Configuration Data)
myems_historical_db (Historical Data)
myems_energy_db (Energy Data)
↓ (Response)
myems-web / myems-admin (Frontend Display)

---

### Data Relationship Diagram

myems_system_db.tbl_points
↓ (point_id)
myems_historical_db.tbl_analog_value
↓ (Aggregation Calculation)
myems_energy_db.tbl_meter_hourly
↓ (Link)
myems_system_db.tbl_meters
↓ (Link)
myems_system_db.tbl_equipments
↓ (Link)
myems_system_db.tbl_spaces

---

## Table Structure Design Specification

### General fields

All tables contain the following common fields:

|field name|type|Instructions|
|--------|------|------|
|`id`|BIGINT NOT NULL AUTO_INCREMENT|Primary key, auto increment|
|`name`|VARCHAR(255)|name|
|`uuid`|CHAR(36)|UUID， Used for external system integration|
|`description`|VARCHAR(255)|Description (optional)|

### Time field

|field name|type|Instructions|
|--------|------|------|
|`utc_date_time`|DATETIME|UTC time (historical data table)|
|`start_datetime_utc`|DATETIME|Starting time of time period (aggregated data table)|
|`created_datetime_utc`|DATETIME|Creation Time|
|`updated_datetime_utc`|DATETIME|Update time|
|`last_run_datetime_utc`|DATETIME|Last running time|
|`next_run_datetime_utc`|DATETIME|Next run time|

**Attention * *: All time fields should use UTC time uniformly, and the front-end display should be converted to local time.

### Numerical field

|field name|type|Instructions|
|--------|------|------|
|`actual_value`|DECIMAL(21, 6)|Actual value, supports high precision (6 decimal places)|
|`set_value`|DECIMAL(21, 6)|set value|
|`rated_capacity`|DECIMAL(21, 6)|Rated capacity|
|`rated_power`|DECIMAL(21, 6)|rated power|

### JSON fields

|field name|type|Instructions|
|--------|------|------|
|`connection`|LONGTEXT|Connection configuration (JSON format)|
|`expression`|LONGTEXT|Expression (JSON format)|
|`payload`|LONGTEXT|Load (JSON format)|
|`data`|LONGTEXT|Data (JSON format)|

**Note: JSON fields store formatted JSON strings and need to be parsed before use.

### Status field

|field name|type|Instructions|
|--------|------|------|
|`is_enabled`|BOOL|Enable or not|
|`is_active`|BOOL|Activation status|
|`is_bad`|BOOL|Is there bad data|
|`is_published`|BOOL|Has it been released?|
|`is_counted`|BOOL|Is it included in the statistics|
|`status`|VARCHAR(32)|Status (e.g. new, sent, done, error)|

### Index Design

**Primary key index**:
- All tables have a  `PRIMARY KEY (id)`

**Unique index**:
- Key fields (such as `name`, `uuid`) usually have unique indexes

**Composite index**:
- Establish a composite index for frequently queried field combinations
- For example: ` (point_id, utc_date_time) `, ` (meter_id, start_datetime_utc)`

**Time index**:
- The time field is usually indexed separately and supports time range queries
