# MyEMS 資料庫設計文檔

> 本文檔面向程式設計師，詳細說明 MyEMS 能源管理系統的資料庫架構、表結構和設計理念。

## 目錄

- [系統概述](#系統概述)
- [資料庫架構部署](#資料庫架構部署)
- [資料庫架構設計](#資料庫架構設計)
- [資料庫詳細說明](#資料庫詳細說明)
- [數據流轉關係](#數據流轉關係)
- [表結構設計規範](#表結構設計規範)
- [開發注意事項](#開發注意事項)
- [安裝與升級](#安裝與升級)

---

## 系統概述

MyEMS (My Energy Management System) 是一個行業領先的開源能源管理系統，參考 ISO 50001 能源管理體系標準 (GB/T 23331-2020)，適用於建築、工廠、商場、醫院、園區等場景的能源和碳排放採集、分析、報表。

### 系統模塊

MyEMS 採用微服務架構，主要包含以下模塊：

- **myems-api**: RESTful API 服務 (Python + Falcon)
- **myems-admin**: 管理後臺 UI (AngularJS)
- **myems-web**: 用戶 Web 界面 (ReactJS)
- **myems-modbus-tcp**: Modbus TCP 數據採集服務
- **myems-normalization**: 數據規範化服務
- **myems-cleaning**: 數據清洗服務
- **myems-aggregation**: 數據匯總服務（能耗、計費、碳排放計算）

### 資料庫概覽

MyEMS 採用**多資料庫分離架構**，將不同類型的數據存儲在不同的資料庫中，以提高性能、便於維護和擴展。系統共包含 **13 個資料庫**：

| 資料庫名稱 | 用途 | 主要功能 | 數據量級 |
|-----------|------|----------|---------|
| `myems_system_db` | 系統配置資料庫 | 存儲系統配置、設備信息、用戶權限等基礎數據 | 中小型 |
| `myems_historical_db` | 歷史數據資料庫 | 存儲實時監測數據、歷史數據、成本文件等 | **大型** |
| `myems_energy_db` | 能耗資料庫 | 存儲各種設備的能耗統計數據（按小時、日、月、年） | **大型** |
| `myems_billing_db` | 計費資料庫 | 存儲計費相關的能耗數據 | **大型** |
| `myems_carbon_db` | 碳排放資料庫 | 存儲碳排放相關的能耗數據 | **大型** |
| `myems_energy_baseline_db` | 能耗基線資料庫 | 存儲能耗基線數據，用於節能分析 | 中型 |
| `myems_energy_model_db` | 能耗模型資料庫 | 存儲8760小時年度能耗模型數據 | 中型 |
| `myems_energy_plan_db` | 能耗計劃資料庫 | 存儲能耗計劃和目標數據 | 中型 |
| `myems_energy_prediction_db` | 能耗預測資料庫 | 存儲能耗預測數據 | 中型 |
| `myems_fdd_db` | 故障診斷資料庫 | 存儲故障檢測和診斷相關數據 | 中型 |
| `myems_user_db` | 用戶資料庫 | 存儲用戶認證、API密鑰、郵件消息等 | 小型 |
| `myems_reporting_db` | 報告資料庫 | 存儲報告相關的郵件消息和附件 | 小型 |
| `myems_production_db` | 生產資料庫 | 存儲生產相關的產品數據 | 小型 |

---


## 資料庫架構部署

為MyEMS安裝資料庫架構和腳本。

### 先決條件

MyEMS可以運行在以下MySQL兼容的資料庫伺服器。

[MySQL 8.0 (64bit) 及以上版本](https://www.mysql.com/)

[MariaDB 10.5 (64bit) 及以上版本](https://mariadb.org/)

[SingleStore 7.0 及以上版本](https://www.singlestore.com/)


### 部署

在MySQL命令行中執行以下腳本，或在其他MySQL客戶端工具中執行，如MySQL Workbench、Navicat、DBaver、phpMyAdmin等。

```bash
cd ~/myems/database/install
```
```bash
mysql -u root -p < myems_billing_db.sql
```
```bash
mysql -u root -p < myems_carbon_db.sql
```
```bash
mysql -u root -p < myems_energy_baseline_db.sql
```
```bash
mysql -u root -p < myems_energy_db.sql
```
```bash
mysql -u root -p < myems_energy_model_db.sql
```
```bash
mysql -u root -p < myems_energy_plan_db.sql
```
```bash
mysql -u root -p < myems_energy_prediction_db.sql
```
```bash
mysql -u root -p < myems_fdd_db.sql
```
```bash
mysql -u root -p < myems_historical_db.sql
```
```bash
mysql -u root -p < myems_production_db.sql
```
```bash
mysql -u root -p < myems_reporting_db.sql
```
```bash
mysql -u root -p < myems_system_db.sql
```
```bash
mysql -u root -p < myems_user_db.sql
```

演示數據是可選的。要插入演示數據，請執行以下腳本：

```bash
cd ~/myems/database/demo-cn
```
```bash
mysql -u root -p < myems_system_db.sql
```
:::tip 如何修復MySQL錯誤「用戶拒絕訪問」

添加遠程訪問用戶

```bash
sudo mysql -u root -p
```

mysql>
```bash
CREATE USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '!MyEMS1';
```
mysql>
```bash
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
```
mysql>
```bash
FLUSH PRIVILEGES;
```
mysql>
```bash
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '!MyEMS1';
```

:::

:::tip 如何更改MySQL伺服器8.0版之前的COLLATE

```bash
sudo nano /etc/mysql/my.cnf
```

```bash
[client]
default-character-set = utf8mb4
[mysql]
default-character-set = utf8mb4
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
```
:::

:::tip 如何修復MySQL錯誤「一個大於'max_allowed_packet'字節的數據包」

更改mysqld部分下的my.cnf或my.ini文件（通常在/etc/mysql/中找到），並設置：

```
max_allowed_packet=100M
```
or you could run these commands in a MySQL console connected to that same server:
```
set global net_buffer_length=1000000;
set global max_allowed_packet=1000000000;
```

:::

:::caution

不要在生產環境將資料庫安裝到的Docker容器中

:::

---

## 資料庫架構設計

### 設計理念

1. **數據分離**: 按數據類型和用途分離到不同資料庫，避免單庫過大
2. **讀寫分離**: 歷史數據採用時間序列存儲，支持高效查詢
3. **水平擴展**: 大型資料庫（historical_db, energy_db）可獨立擴展
4. **統一規範**: 所有資料庫使用相同的字符集和排序規則

### 資料庫配置

所有資料庫統一使用以下配置：

- **字符集**: `utf8mb4` (支持完整的 UTF-8 字符，包括 emoji)
- **排序規則**: `utf8mb4_unicode_ci` (Unicode 排序規則)
- **存儲引擎**: InnoDB (默認，支持事務和外鍵)

### 命名規範

- **資料庫命名**: `myems_{功能}_db` (小寫，下劃線分隔)
- **表命名**: `tbl_{實體名}` (小寫，下劃線分隔)
- **欄位命名**: 小寫，下劃線分隔，如 `start_datetime_utc`
- **索引命名**: `tbl_{表名}_index_{序號}`

---

## 資料庫詳細說明

### 1. myems_system_db (系統配置資料庫)

**用途**: 存儲系統的基礎配置和元數據，是整個系統的核心配置庫。

**特點**:
- 包含最多的表（約 150+ 張表）
- 數據量相對較小，但結構複雜
- 包含大量的關聯關係表

**主要表分類**:

#### 1.1 基礎配置表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_energy_categories` | 能源分類（電、水、氣、冷、熱等） | `id`, `name`, `unit_of_measure`, `kgce`, `kgco2e` |
| `tbl_energy_items` | 能耗分項（照明、空調、動力等） | `id`, `name`, `energy_category_id` |
| `tbl_cost_centers` | 成本中心 | `id`, `name`, `external_id` |
| `tbl_data_sources` | 數據源配置 | `id`, `name`, `gateway_id`, `protocol`, `connection` |
| `tbl_protocols` | 協議配置 | `id`, `name`, `protocol_type` |

#### 1.2 設備管理表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_equipments` | 設備信息 | `id`, `name`, `uuid`, `equipment_type_id`, `cost_center_id` |
| `tbl_combined_equipments` | 組合設備（多個設備的組合） | `id`, `name`, `is_input_counted`, `is_output_counted` |
| `tbl_meters` | 計量表信息 | `id`, `name`, `uuid`, `energy_category_id`, `is_counted` |
| `tbl_offline_meters` | 離線計量表（手動錄入） | `id`, `name`, `energy_category_id` |
| `tbl_virtual_meters` | 虛擬計量表（計算得出） | `id`, `name`, `expression` (JSON格式) |
| `tbl_points` | 數據點信息 | `id`, `name`, `data_source_id`, `object_type`, `object_id` |

#### 1.3 空間組織表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_spaces` | 空間信息（房間、樓層等） | `id`, `name`, `uuid`, `parent_space_id`, `area` |
| `tbl_stores` | 門店信息 | `id`, `name`, `uuid`, `space_id` |
| `tbl_tenants` | 租戶信息 | `id`, `name`, `uuid`, `space_id` |
| `tbl_shopfloors` | 車間信息 | `id`, `name`, `uuid`, `space_id` |

#### 1.4 關聯關係表

系統使用大量的關聯表來建立多對多關係：

- `tbl_equipments_meters`: 設備與計量表的關聯
- `tbl_equipments_offline_meters`: 設備與離線計量表的關聯
- `tbl_equipments_virtual_meters`: 設備與虛擬計量表的關聯
- `tbl_spaces_equipments`: 空間與設備的關聯
- `tbl_spaces_meters`: 空間與計量表的關聯
- `tbl_combined_equipments_equipments`: 組合設備與設備的關聯
- 等等...

#### 1.5 新能源設備表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_photovoltaic_power_stations` | 光伏電站 | `id`, `name`, `capacity`, `contact_id` |
| `tbl_energy_storage_containers` | 儲能容器 | `id`, `name`, `rated_capacity`, `rated_power` |
| `tbl_energy_storage_power_stations` | 儲能電站 | `id`, `name`, `rated_capacity` |
| `tbl_microgrids` | 微電網 | `id`, `name`, `address` |
| `tbl_charging_stations` | 充電站 | `id`, `name`, `rated_capacity`, `rated_power` |

#### 1.6 控制與調度表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_commands` | 控制命令 | `id`, `name`, `topic`, `payload` (JSON格式) |
| `tbl_control_modes` | 控制模式 | `id`, `name`, `is_active` |
| `tbl_control_modes_times` | 控制模式時間段 | `id`, `control_mode_id`, `start_time_of_day`, `end_time_of_day` |

#### 1.7 其他配置表

- `tbl_contacts`: 聯繫人信息
- `tbl_distribution_systems`: 配電系統
- `tbl_distribution_circuits`: 配電迴路
- `tbl_energy_flow_diagrams`: 能源流向圖
- `tbl_tariffs`: 電價配置
- `tbl_working_calendars`: 工作日曆
- `tbl_web_messages`: Web 消息

**開發注意事項**:
- 所有表都有 `id` (BIGINT AUTO_INCREMENT) 作為主鍵
- 大部分表都有 `uuid` (CHAR(36)) 欄位，用於外部系統集成
- 關聯表通常只有 `id` 和兩個外鍵欄位
- JSON 欄位使用 `LONGTEXT` 類型，存儲格式化的 JSON 字符串

---

### 2. myems_historical_db (歷史數據資料庫)

**用途**: 存儲實時監測數據和歷史數據，是系統數據量最大的資料庫之一。

**特點**:
- 數據量巨大，採用時間序列存儲
- 包含原始數據和最新值緩存表
- 支持數據質量標記（`is_bad`, `is_published`）

**主要表結構**:

| 表名 | 說明 | 關鍵欄位 | 索引策略 |
|------|------|----------|----------|
| `tbl_analog_value` | 模擬量歷史數據 | `point_id`, `utc_date_time`, `actual_value`, `is_bad`, `is_published` | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_analog_value_latest` | 模擬量最新值（緩存） | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |
| `tbl_digital_value` | 數字量歷史數據 | `point_id`, `utc_date_time`, `actual_value` (INT) | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_digital_value_latest` | 數字量最新值（緩存） | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |
| `tbl_energy_value` | 能耗歷史數據 | `point_id`, `utc_date_time`, `actual_value`, `is_bad`, `is_published` | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_energy_value_latest` | 能耗最新值（緩存） | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |
| `tbl_text_value` | 文本量歷史數據 | `point_id`, `utc_date_time`, `actual_value` (LONGTEXT) | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_text_value_latest` | 文本量最新值（緩存） | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |

**文件存儲表**:

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_cost_files` | 成本文件（Excel/CSV） | `file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object` (LONGBLOB) |
| `tbl_offline_meter_files` | 離線計量表數據文件 | `file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object` |
| `tbl_data_repair_files` | 數據修復文件 | `file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object` |
| `tbl_energy_plan_files` | 能耗計劃文件 | `file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object` |

**數據類型說明**:
- `actual_value`: DECIMAL(21, 6) - 支持高精度數值，6位小數
- `utc_date_time`: DATETIME - UTC 時間，所有時間統一使用 UTC
- `is_bad`: BOOL - 數據質量標記，True 表示壞數據
- `is_published`: BOOL - 發布標記，True 表示已發布

**開發注意事項**:
- 所有時間欄位使用 UTC 時間，前端顯示時轉換為本地時間
- `_latest` 表用於快速查詢最新值，避免掃描歷史表
- 文件表使用 `LONGBLOB` 存儲二進位文件，注意大小限制
- 定期清理歷史數據，避免表過大影響性能

---

### 3. myems_energy_db (能耗資料庫)

**用途**: 存儲各種設備的能耗統計數據，按小時、日、月、年進行聚合。

**特點**:
- 數據由 `myems-aggregation` 服務計算生成
- 按時間粒度分為 hourly, daily, monthly, yearly 表
- 支持按能源分類（category）和能耗分項（item）統計

**表命名規則**:
- `tbl_{對象類型}_{方向}_{分類}_{時間粒度}`
- 對象類型: `meter`, `equipment`, `combined_equipment`, `space`, `store`, `tenant`, `shopfloor`
- 方向: `input` (輸入), `output` (輸出)
- 分類: `category` (能源分類), `item` (能耗分項)
- 時間粒度: `hourly`, `daily`, `monthly`, `yearly`

**主要表結構**:

#### 3.1 計量表能耗表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_meter_hourly` | 計量表小時能耗 | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_meter_daily` | 計量表日能耗 | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_meter_monthly` | 計量表月能耗 | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_meter_yearly` | 計量表年能耗 | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_offline_meter_hourly` | 離線計量表小時能耗 | `offline_meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_virtual_meter_hourly` | 虛擬計量表小時能耗 | `virtual_meter_id`, `start_datetime_utc`, `actual_value` |

#### 3.2 設備能耗表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_equipment_input_category_hourly` | 設備輸入能耗（按分類） | `equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_equipment_input_item_hourly` | 設備輸入能耗（按分項） | `equipment_id`, `energy_item_id`, `start_datetime_utc`, `actual_value` |
| `tbl_equipment_output_category_hourly` | 設備輸出能耗（按分類） | `equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_combined_equipment_input_category_hourly` | 組合設備輸入能耗（按分類） | `combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_combined_equipment_output_category_hourly` | 組合設備輸出能耗（按分類） | `combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |

#### 3.3 空間能耗表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_space_input_category_hourly` | 空間輸入能耗（按分類） | `space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_space_input_item_hourly` | 空間輸入能耗（按分項） | `space_id`, `energy_item_id`, `start_datetime_utc`, `actual_value` |
| `tbl_space_output_category_hourly` | 空間輸出能耗（按分類） | `space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_store_input_category_hourly` | 門店輸入能耗 | `store_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_tenant_input_category_hourly` | 租戶輸入能耗 | `tenant_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_shopfloor_input_category_hourly` | 車間輸入能耗 | `shopfloor_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |

#### 3.4 新能源設備能耗表

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_photovoltaic_power_station_hourly` | 光伏電站小時發電量 | `photovoltaic_power_station_id`, `start_datetime_utc`, `actual_value` |
| `tbl_energy_storage_container_charge_hourly` | 儲能容器充電量 | `energy_storage_container_id`, `start_datetime_utc`, `actual_value` |
| `tbl_energy_storage_container_discharge_hourly` | 儲能容器放電量 | `energy_storage_container_id`, `start_datetime_utc`, `actual_value` |
| `tbl_energy_storage_container_grid_buy_hourly` | 儲能容器購電量 | `energy_storage_container_id`, `start_datetime_utc`, `actual_value` |
| `tbl_energy_storage_container_grid_sell_hourly` | 儲能容器售電量 | `energy_storage_container_id`, `start_datetime_utc`, `actual_value` |
| `tbl_microgrid_charge_hourly` | 微電網充電量 | `microgrid_id`, `start_datetime_utc`, `actual_value` |
| `tbl_microgrid_discharge_hourly` | 微電網放電量 | `microgrid_id`, `start_datetime_utc`, `actual_value` |

**索引設計**:
- 所有表都有複合索引: `(對象_id, 分類_id, start_datetime_utc)` 或 `(對象_id, start_datetime_utc)`
- 支持按對象和時間範圍快速查詢

**開發注意事項**:
- `start_datetime_utc` 表示時間段的開始時間（如 2024-01-01 00:00:00 表示 1 月 1 日 0 點到 1 點）
- `actual_value` 是聚合後的值，不是原始值
- 數據由 aggregation 服務定期計算，不是實時寫入
- 查詢時注意時區轉換

---

### 4. myems_billing_db (計費資料庫)

**用途**: 存儲計費相關的能耗數據，結構與 `myems_energy_db` 類似，但數據經過電價計算。

**特點**:
- 表結構與 `myems_energy_db` 完全一致
- 數據由 `myems-aggregation` 服務根據電價配置計算
- 支持分時電價、階梯電價等複雜計費規則

**主要表**:
- 與 `myems_energy_db` 相同的表結構
- 數據值已乘以對應電價，單位通常是貨幣單位（如元、美元）

**開發注意事項**:
- 計費數據依賴於 `myems_system_db.tbl_tariffs` 電價配置
- 需要與成本中心（`cost_center`）關聯
- 支持多電價策略（分時、階梯、容量等）

---

### 5. myems_carbon_db (碳排放資料庫)

**用途**: 存儲碳排放相關的能耗數據，用於碳足跡計算。

**特點**:
- 表結構與 `myems_energy_db` 完全一致
- 數據由 `myems-aggregation` 服務根據碳排放因子計算
- 碳排放因子存儲在 `myems_system_db.tbl_energy_categories.kgco2e`

**主要表**:
- 與 `myems_energy_db` 相同的表結構
- 數據值已乘以碳排放因子，單位通常是 kgCO2e（千克二氧化碳當量）

**開發注意事項**:
- 碳排放因子可能隨時間變化，需要支持歷史因子
- 不同能源類型的碳排放因子不同（電、氣、油等）
- 支持範圍 1、範圍 2、範圍 3 的碳排放計算

---

### 6. myems_energy_baseline_db (能耗基線資料庫)

**用途**: 存儲能耗基線數據，用於節能分析和能效評估。

**特點**:
- 表結構與 `myems_energy_db` 類似
- 基線數據通常基於歷史數據或標準值計算
- 用於對比實際能耗與基線能耗，計算節能效果

**主要表**:
- 與 `myems_energy_db` 相同的表結構
- 存儲基線值而非實際值

**開發注意事項**:
- 基線數據需要定期更新
- 支持多種基線計算方法（歷史平均、回歸分析、標準值等）

---

### 7. myems_energy_model_db (能耗模型資料庫)

**用途**: 存儲 8760 小時年度能耗模型數據（一年 8760 小時）。

**特點**:
- 每個對象存儲 8760 條記錄（一年的小時數據）
- 用於能耗預測和規劃
- 表名包含 `_8760` 後綴

**主要表**:

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_meter_8760` | 計量表 8760 小時模型 | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_equipment_input_category_8760` | 設備輸入能耗模型 | `equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_combined_equipment_input_category_8760` | 組合設備輸入能耗模型 | `combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_space_input_category_8760` | 空間輸入能耗模型 | `space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_shopfloor_input_category_8760` | 車間輸入能耗模型 | `shopfloor_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_store_input_category_8760` | 門店輸入能耗模型 | `store_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_tenant_input_category_8760` | 租戶輸入能耗模型 | `tenant_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |

**開發注意事項**:
- 8760 小時模型通常基於歷史數據或標準模型生成
- 用於年度能耗預測和預算編制
- 支持按周、月、季度等維度查看

---

### 8. myems_energy_plan_db (能耗計劃資料庫)

**用途**: 存儲能耗計劃和目標數據。

**特點**:
- 表結構與 `myems_energy_db` 類似
- 存儲計劃值而非實際值
- 用於能耗預算和目標管理

**主要表**:
- 與 `myems_energy_db` 相同的表結構
- 數據來自計劃文件或手動錄入

**開發注意事項**:
- 計劃數據需要與實際數據對比分析
- 支持多級計劃（年度、月度、周度等）

---

### 9. myems_energy_prediction_db (能耗預測資料庫)

**用途**: 存儲能耗預測數據。

**特點**:
- 表結構與 `myems_energy_db` 類似
- 存儲預測值而非實際值
- 用於能耗預測和預警

**主要表**:
- 與 `myems_energy_db` 相同的表結構
- 數據由預測算法生成

**開發注意事項**:
- 預測數據需要定期更新
- 支持多種預測算法（時間序列、機器學習等）
- 預測精度需要持續優化

---

### 10. myems_fdd_db (故障診斷資料庫)

**用途**: 存儲故障檢測和診斷相關數據。

**特點**:
- 支持多種告警渠道（Web、Email、SMS、微信、電話）
- 規則引擎支持複雜的故障檢測邏輯
- 支持故障消息的確認和處理

**主要表結構**:

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_rules` | 診斷規則 | `id`, `name`, `category`, `fdd_code`, `priority`, `channel`, `expression` (JSON), `message_template`, `is_enabled` |
| `tbl_web_messages` | Web 消息 | `id`, `rule_id`, `user_id`, `subject`, `category`, `priority`, `message`, `status`, `belong_to_object_type`, `belong_to_object_id` |
| `tbl_email_messages` | 郵件消息 | `id`, `rule_id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `status` |
| `tbl_text_messages_outbox` | 簡訊發件箱 | `id`, `rule_id`, `recipient_mobile`, `message`, `status`, `acknowledge_code` |
| `tbl_text_messages_inbox` | 簡訊收件箱 | `id`, `sender_mobile`, `message`, `status` |
| `tbl_wechat_messages_outbox` | 微信消息發件箱 | `id`, `rule_id`, `recipient_openid`, `message_template_id`, `message_data` (JSON) |
| `tbl_wechat_messages_inbox` | 微信消息收件箱 | `id`, `sender_openid`, `message`, `status` |
| `tbl_email_servers` | 郵件伺服器配置 | `id`, `host`, `port`, `requires_authentication`, `user_name`, `password`, `from_addr` |
| `tbl_wechat_configs` | 微信配置 | `id`, `api_server`, `app_id`, `app_secret`, `access_token`, `expires_datetime_utc` |

**規則分類 (category)**:
- `REALTIME`: 實時告警
- `SYSTEM`: 系統告警
- `SPACE`: 空間告警
- `METER`: 計量表告警
- `TENANT`: 租戶告警
- `STORE`: 門店告警
- `SHOPFLOOR`: 車間告警
- `EQUIPMENT`: 設備告警
- `COMBINEDEQUIPMENT`: 組合設備告警

**優先級 (priority)**:
- `CRITICAL`: 嚴重
- `HIGH`: 高
- `MEDIUM`: 中
- `LOW`: 低

**開發注意事項**:
- `expression` 欄位存儲 JSON 格式的規則表達式
- `message_template` 支持變量替換（如 `$name`, `$value`）
- 規則支持定時執行和立即執行
- 消息狀態: `new` → `sent` → `acknowledged` / `timeout`

---

### 11. myems_user_db (用戶資料庫)

**用途**: 存儲用戶認證、API 密鑰、郵件消息等。

**特點**:
- 數據量小，但安全性要求高
- 支持用戶權限管理
- 支持 API 密鑰認證

**主要表結構**:

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_users` | 用戶信息 | `id`, `name`, `uuid`, `display_name`, `email`, `salt`, `password`, `is_admin`, `is_read_only`, `privilege_id`, `account_expiration_datetime_utc`, `password_expiration_datetime_utc`, `failed_login_count` |
| `tbl_privileges` | 權限配置 | `id`, `name`, `data` (JSON格式) |
| `tbl_sessions` | 用戶會話 | `id`, `user_uuid`, `token`, `utc_expires` |
| `tbl_api_keys` | API 密鑰 | `id`, `name`, `token`, `created_datetime_utc`, `expires_datetime_utc` |
| `tbl_email_messages` | 郵件消息 | `id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `status`, `scheduled_datetime_utc` |
| `tbl_email_message_sessions` | 郵件會話 | `id`, `recipient_email`, `token`, `expires_datetime_utc` |
| `tbl_logs` | 操作日誌 | `id`, `user_uuid`, `request_datetime_utc`, `request_method`, `resource_type`, `resource_id`, `request_body` (JSON) |
| `tbl_notifications` | 通知消息 | `id`, `user_id`, `created_datetime_utc`, `status`, `subject`, `message`, `url` |
| `tbl_new_users` | 新用戶（待激活） | `id`, `name`, `uuid`, `display_name`, `email`, `salt`, `password` |
| `tbl_verification_codes` | 驗證碼 | `id`, `recipient_email`, `verification_code`, `created_datetime_utc`, `expires_datetime_utc` |

**安全設計**:
- 密碼使用 salt + hash 存儲，不存儲明文
- 支持帳戶和密碼過期時間
- 支持登錄失敗次數限制
- API 密鑰支持過期時間

**開發注意事項**:
- 密碼欄位使用加密存儲，不要直接查詢
- 會話 token 需要定期清理過期記錄
- 操作日誌記錄所有關鍵操作，便於審計
- 通知狀態: `unread` → `read` → `archived`

---

### 12. myems_reporting_db (報告資料庫)

**用途**: 存儲報告相關的郵件消息和附件。

**特點**:
- 數據量小
- 支持報告模板和生成的文件存儲

**主要表結構**:

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_reports` | 報告配置 | `id`, `name`, `uuid`, `expression` (JSON), `is_enabled`, `last_run_datetime_utc`, `next_run_datetime_utc`, `is_run_immediately` |
| `tbl_reports_files` | 報告文件 | `id`, `uuid`, `create_datetime_utc`, `file_name`, `file_type` (xlsx/pdf/docx), `file_object` (LONGBLOB) |
| `tbl_template_files` | 報告模板文件 | `id`, `uuid`, `report_id`, `file_name`, `file_type`, `file_object` |
| `tbl_email_messages` | 郵件消息 | `id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `attachment_file_object`, `status` |

**開發注意事項**:
- 報告文件支持 Excel、PDF、Word 格式
- 模板文件用於生成報告
- 報告支持定時生成和立即生成
- 文件使用 `LONGBLOB` 存儲，注意大小限制

---

### 13. myems_production_db (生產資料庫)

**用途**: 存儲生產相關的產品數據。

**特點**:
- 數據量小
- 用於生產能耗關聯分析

**主要表結構**:

| 表名 | 說明 | 關鍵欄位 |
|------|------|----------|
| `tbl_products` | 產品信息 | `id`, `name`, `uuid`, `unit_of_measure`, `tag`, `standard_product_coefficient` |
| `tbl_teams` | 班組信息 | `id`, `name`, `uuid`, `description` |
| `tbl_shifts` | 班次信息 | `id`, `shopfloor_id`, `team_id`, `product_id`, `product_count`, `start_datetime_utc`, `end_datetime_utc`, `reference_timestamp` |
| `tbl_shopfloor_hourly` | 車間小時產量 | `id`, `shopfloor_id`, `start_datetime_utc`, `product_id`, `product_count` |
| `tbl_space_hourly` | 空間小時產量 | `id`, `space_id`, `start_datetime_utc`, `product_id`, `product_count` |
| `tbl_shopfloors_products` | 車間與產品關聯 | `id`, `shopfloor_id`, `product_id` |
| `tbl_shopfloors_teams` | 車間與班組關聯 | `id`, `shopfloor_id`, `team_id` |

**開發注意事項**:
- 生產數據用於計算單位產品能耗
- 支持按產品、班組、車間等維度統計
- 與能耗數據關聯，計算能效指標

---

## 數據流轉關係

### 數據採集流程

```
設備/傳感器
    ↓ (Modbus TCP/MQTT/HTTP)
myems-modbus-tcp (數據採集服務)
    ↓ (寫入)
myems_historical_db.tbl_analog_value / tbl_digital_value / tbl_energy_value
    ↓ (數據規範化)
myems-normalization (數據規範化服務)
    ↓ (數據清洗)
myems-cleaning (數據清洗服務)
    ↓ (數據聚合)
myems-aggregation (數據匯總服務)
    ↓ (寫入)
myems_energy_db (能耗數據)
myems_billing_db (計費數據)
myems_carbon_db (碳排放數據)
```

### 數據查詢流程

```
用戶請求
    ↓
myems-api (API 服務)
    ↓ (查詢)
myems_system_db (配置數據)
myems_historical_db (歷史數據)
myems_energy_db (能耗數據)
    ↓ (返回)
myems-web / myems-admin (前端展示)
```

### 數據關聯關係

```
myems_system_db.tbl_points
    ↓ (point_id)
myems_historical_db.tbl_analog_value
    ↓ (聚合計算)
myems_energy_db.tbl_meter_hourly
    ↓ (關聯)
myems_system_db.tbl_meters
    ↓ (關聯)
myems_system_db.tbl_equipments
    ↓ (關聯)
myems_system_db.tbl_spaces
```

---

## 表結構設計規範

### 通用欄位

所有表都包含以下通用欄位：

| 欄位名 | 類型 | 說明 |
|--------|------|------|
| `id` | BIGINT NOT NULL AUTO_INCREMENT | 主鍵，自增 |
| `name` | VARCHAR(255) | 名稱 |
| `uuid` | CHAR(36) | UUID，用於外部系統集成 |
| `description` | VARCHAR(255) | 描述（可選） |

### 時間欄位

| 欄位名 | 類型 | 說明 |
|--------|------|------|
| `utc_date_time` | DATETIME | UTC 時間（歷史數據表） |
| `start_datetime_utc` | DATETIME | 時間段開始時間（聚合數據表） |
| `created_datetime_utc` | DATETIME | 創建時間 |
| `updated_datetime_utc` | DATETIME | 更新時間 |
| `last_run_datetime_utc` | DATETIME | 最後運行時間 |
| `next_run_datetime_utc` | DATETIME | 下次運行時間 |

**注意**: 所有時間欄位統一使用 UTC 時間，前端顯示時轉換為本地時間。

### 數值欄位

| 欄位名 | 類型 | 說明 |
|--------|------|------|
| `actual_value` | DECIMAL(21, 6) | 實際值，支持高精度（6位小數） |
| `set_value` | DECIMAL(21, 6) | 設定值 |
| `rated_capacity` | DECIMAL(21, 6) | 額定容量 |
| `rated_power` | DECIMAL(21, 6) | 額定功率 |

### JSON 欄位

| 欄位名 | 類型 | 說明 |
|--------|------|------|
| `connection` | LONGTEXT | 連接配置（JSON 格式） |
| `expression` | LONGTEXT | 表達式（JSON 格式） |
| `payload` | LONGTEXT | 負載（JSON 格式） |
| `data` | LONGTEXT | 數據（JSON 格式） |

**注意**: JSON 欄位存儲格式化的 JSON 字符串，需要解析後使用。

### 狀態欄位

| 欄位名 | 類型 | 說明 |
|--------|------|------|
| `is_enabled` | BOOL | 是否啟用 |
| `is_active` | BOOL | 是否激活 |
| `is_bad` | BOOL | 是否壞數據 |
| `is_published` | BOOL | 是否已發布 |
| `is_counted` | BOOL | 是否計入統計 |
| `status` | VARCHAR(32) | 狀態（如: new, sent, done, error） |

### 索引設計

**主鍵索引**:
- 所有表都有 `PRIMARY KEY (id)`

**唯一索引**:
- 關鍵欄位（如 `name`, `uuid`）通常有唯一索引

**複合索引**:
- 查詢頻繁的欄位組合建立複合索引
- 如: `(point_id, utc_date_time)`, `(meter_id, start_datetime_utc)`

**時間索引**:
- 時間欄位通常單獨建立索引，支持時間範圍查詢

---

## 開發注意事項

### 1. 時間處理

- **所有時間使用 UTC**: 資料庫存儲和 API 返回都使用 UTC 時間
- **前端轉換**: 前端負責轉換為本地時間顯示
- **時間格式**: 使用 `DATETIME` 類型，格式: `YYYY-MM-DD HH:MM:SS`
- **時區問題**: 注意夏令時和時區轉換

### 2. 數據類型選擇

- **數值**: 使用 `DECIMAL(21, 6)` 保證精度，避免浮點數誤差
- **文本**: 短文本用 `VARCHAR`，長文本用 `TEXT` 或 `LONGTEXT`
- **JSON**: 使用 `LONGTEXT` 存儲 JSON 字符串
- **二進位**: 使用 `LONGBLOB` 存儲文件

### 3. 查詢優化

- **使用索引**: 查詢條件儘量使用索引欄位
- **避免全表掃描**: 大數據量表避免 `SELECT *`
- **分頁查詢**: 列表查詢必須分頁，避免一次返回大量數據
- **時間範圍**: 歷史數據查詢必須限制時間範圍

### 4. 事務處理

- **配置數據**: 系統配置表使用事務保證一致性
- **歷史數據**: 歷史數據表通常不使用事務，提高寫入性能
- **批量操作**: 批量插入使用事務，失敗時回滾

### 5. 數據一致性

- **外鍵約束**: 系統配置表使用外鍵保證數據一致性
- **關聯查詢**: 使用 JOIN 查詢關聯數據，避免多次查詢
- **數據校驗**: 寫入前校驗數據格式和範圍

### 6. 性能優化

- **讀寫分離**: 歷史數據表支持讀寫分離
- **分區表**: 大數據量表可以考慮按時間分區
- **緩存策略**: 配置數據和最新值使用緩存
- **批量操作**: 批量插入使用 `INSERT ... VALUES (...), (...), (...)`

### 7. 安全考慮

- **SQL 注入**: 使用參數化查詢，避免 SQL 注入
- **密碼加密**: 用戶密碼使用 salt + hash，不存儲明文
- **權限控制**: API 接口需要權限驗證
- **數據脫敏**: 敏感數據（如密碼、密鑰）不記錄日誌

### 8. 錯誤處理

- **異常捕獲**: 資料庫操作需要捕獲異常
- **錯誤日誌**: 記錄詳細的錯誤信息，便於排查
- **重試機制**: 網絡錯誤支持重試
- **降級策略**: 服務不可用時提供降級方案

---

## 安裝與升級

### 安裝順序

建議按以下順序安裝資料庫：

1. **myems_system_db** - 系統配置資料庫（必須先安裝）
2. **myems_user_db** - 用戶資料庫
3. **myems_historical_db** - 歷史數據資料庫
4. **myems_energy_db** - 能耗資料庫
5. **myems_billing_db** - 計費資料庫
6. **myems_carbon_db** - 碳排放資料庫
7. **myems_energy_baseline_db** - 能耗基線資料庫
8. **myems_energy_model_db** - 能耗模型資料庫
9. **myems_energy_plan_db** - 能耗計劃資料庫
10. **myems_energy_prediction_db** - 能耗預測資料庫
11. **myems_fdd_db** - 故障診斷資料庫
12. **myems_reporting_db** - 報告資料庫
13. **myems_production_db** - 生產資料庫

### 安裝命令

```bash
# 進入資料庫安裝目錄
cd database/install

# 按順序執行 SQL 腳本
mysql -u root -p < myems_system_db.sql
mysql -u root -p < myems_user_db.sql
mysql -u root -p < myems_historical_db.sql
mysql -u root -p < myems_energy_db.sql
mysql -u root -p < myems_billing_db.sql
mysql -u root -p < myems_carbon_db.sql
mysql -u root -p < myems_energy_baseline_db.sql
mysql -u root -p < myems_energy_model_db.sql
mysql -u root -p < myems_energy_plan_db.sql
mysql -u root -p < myems_energy_prediction_db.sql
mysql -u root -p < myems_fdd_db.sql
mysql -u root -p < myems_reporting_db.sql
mysql -u root -p < myems_production_db.sql
```

### 資料庫升級

資料庫升級腳本位於 `database/upgrade/` 目錄，按版本號命名（如 `upgrade5.10.0.sql`）。

升級前請：
1. **備份資料庫**: 升級前必須備份所有資料庫
2. **查看升級說明**: 閱讀升級腳本中的注釋
3. **測試環境驗證**: 先在測試環境驗證升級腳本
4. **按版本順序升級**: 按版本號順序執行升級腳本

### 資料庫維護

- **定期備份**: 建議每天備份一次，保留至少 30 天
- **清理歷史數據**: 定期清理過期的歷史數據，避免表過大
- **優化表**: 定期執行 `OPTIMIZE TABLE` 優化表結構
- **監控性能**: 監控資料庫性能，及時發現問題

---

## 相關文檔

- [MyEMS 官方文檔](https://myems.io/docs/installation/database)
- [MyEMS API 文檔](./../myems-api/README.md)
- [MyEMS 數據採集文檔](./../myems-modbus-tcp/README.md)
- [MyEMS 數據匯總文檔](./../myems-aggregation/README.md)

### Mise à jour de la base de données

Les scripts de mise à jour se trouvent dans le répertoire `database/upgrade/`, nommés par version (ex. `upgrade5.10.0.sql`).

Avant toute mise à jour :
1. **Sauvegarder** : sauvegarde complète de toutes les bases obligatoire
2. **Lire les notes** : consulter les commentaires dans le script
3. **Valider en test** : exécuter d』abord sur environnement de test
4. **Ordre des versions** : appliquer les scripts dans l』ordre croissant des versions

### Maintenance

- **Sauvegardes régulières** : quotidiennement, conservation ≥ 30 jours
- **Purge historique** : supprimer régulièrement les données expirées pour éviter la croissance excessive des tables
- **Optimisation** : lancer `OPTIMIZE TABLE` périodiquement
- **Surveillance perf** : monitorer les performances et détecter les anomalies rapidement

---

## Documentation associée

- [Doc officielle MyEMS](https://myems.io/docs/installation/database)
- [API MyEMS](./../myems-api/README.md)
- [Acquisition de données](./../myems-modbus-tcp/README.md)
- [Agrégation](./../myems-aggregation/README.md)