# MyEMS 資料庫設計文檔

> 本文檔面向程式設計師，詳細說明 MyEMS 能源管理系統的資料庫架構、表結構和設計理念。

## 目錄

- [資料庫架構設計](#資料庫架構設計)
- [資料庫詳細說明](#資料庫詳細說明)
- [數據流轉關係](#數據流轉關係)
- [表結構設計規範](#表結構設計規範)


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
