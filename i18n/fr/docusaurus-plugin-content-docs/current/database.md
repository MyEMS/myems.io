# MyEMS Documentation de conception de la base de données

> À l'usage des développeurs : architecture, structure des tables et philosophie de MyEMS.

## Sommaire

- [Vue d'ensemble](#vue-d-ensemble)
- [Déploiement de l'architecture](#déploiement-de-l-architecture)
- [Architecture & design](#architecture--design)
- [Détail des bases](#détail-des-bases)
- [Flux de données](#flux-de-données)
- [Normes de structure](#normes-de-structure)
- [Points de vigilance](#points-de-vigilance)
- [Installation & mises à jour](#installation--mises-à-jour)

---

## Vue d'ensemble

MyEMS (My Energy Management System) est une plate-forme open-source conforme à la norme ISO 50001 (GB/T 23331-2020) destinée au monitoring énergétique et carbone des bâtiments, usines, centres commerciaux, hôpitaux, campus, etc.

### Micro-services

- **myems-api** : API REST (Python + Falcon)
- **myems-admin** : back-office (AngularJS)
- **myems-web** : interface utilisateur (ReactJS)
- **myems-modbus-tcp** : acquisition Modbus TCP
- **myems-normalization** : normalisation des données
- **myems-cleaning** : nettoyage des données
- **myems-aggregation** : agrégats énergie, facturation, carbone

## Aperçu de la Base de Données

MyEMS adopte une **architecture de bases de données multiples séparées**, stockant différents types de données dans différentes bases pour améliorer les performances, faciliter la maintenance et l'extension. Le système comprend **13 bases de données** au total :

| Nom de la Base de Données | Usage | Fonction Principale | Volume de Données |
|-----------|------|----------|---------|
| `myems_system_db` | Base de données de configuration système | Stocke les données de base : configuration système, informations des équipements, permissions utilisateurs, etc. | Petit à Moyen |
| `myems_historical_db` | Base de données des données historiques | Stocke les données de surveillance en temps réel, les données historiques, les fichiers de coûts, etc. | **Volume Important** |
| `myems_energy_db` | Base de données énergétique | Stocke les statistiques de consommation d'énergie de divers équipements (par heure, jour, mois, année) | **Volume Important** |
| `myems_billing_db` | Base de données de facturation | Stocke les données de consommation liées à la facturation | **Volume Important** |
| `myems_carbon_db` | Base de données des émissions carbone | Stocke les données de consommation liées aux émissions de carbone | **Volume Important** |
| `myems_energy_baseline_db` | Base de données de référence énergétique | Stocke les données de référence de consommation pour l'analyse d'économies d'énergie | Moyen |
| `myems_energy_model_db` | Base de données du modèle énergétique | Stocke les données du modèle de consommation annuel sur 8760 heures | Moyen |
| `myems_energy_plan_db` | Base de données du plan énergétique | Stocke les données du plan et des objectifs de consommation | Moyen |
| `myems_energy_prediction_db` | Base de données de prévision énergétique | Stocke les données de prévision de consommation | Moyen |
| `myems_fdd_db` | Base de données de diagnostic de défauts | Stocke les données liées à la détection et au diagnostic de défauts | Moyen |
| `myems_user_db` | Base de données utilisateur | Stocke l'authentification des utilisateurs, les clés API, les messages électroniques, etc. | Petit |
| `myems_reporting_db` | Base de données de rapports | Stocke les messages électroniques et pièces jointes liés aux rapports | Petit |
| `myems_production_db` | Base de données de production | Stocke les données produits liées à la production | Petit |

---

## Déploiement de l'Architecture de la Base de Données

Installez l'architecture et les scripts de base de données pour MyEMS.

### Prérequis

MyEMS peut fonctionner sur les serveurs de base de données compatibles MySQL suivants :

[MySQL 8.0 (64 bits) et versions ultérieures](https://www.mysql.com/)

[MariaDB 10.5 (64 bits) et versions ultérieures](https://mariadb.org/)

[SingleStore 7.0 et versions ultérieures](https://www.singlestore.com/)

### Déploiement

Exécutez le script suivant dans l'invite de commande MySQL ou dans d'autres outils clients MySQL tels que MySQL Workbench, Navicat, DBaver, phpMyAdmin, etc.


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

Les données de présentation sont facultatives. Pour insérer des données de présentation, exécutez le script suivant:


```bash
cd ~/myems/database/demo-cn
```
```bash
mysql -u root -p < myems_system_db.sql
```
:::tip 如何修复MySQL错误“用户拒绝访问”

添加远程访问用户

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
::: tip comment changer le COLLATE avant la version 8.0 du serveur MySQL

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


::: tip comment corriger l'erreur MySQL "un paquet plus grand que 'max - allowed - Packet' octets"

Changez le fichier my.cnf ou my.ini sous la section mysqld (généralement trouvé dans / etc / MySQL /) et définissez:

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

Ne pas installer la base de données dans un conteneur docker dans un environnement de production

:::

- - -

## Conception de l'Architecture de la Base de Données

### Philosophie de Conception

1.  **Séparation des Données** : Séparer les données dans différentes bases de données selon leur type et leur utilisation pour éviter qu'une base unique ne devienne trop volumineuse.
2.  **Séparation Lecture/Écriture** : Les données historiques utilisent un stockage de séries temporelles pour supporter des requêtes efficaces.
3.  **Extensibilité Horizontale** : Les grandes bases de données (`historical_db`, `energy_db`) peuvent être étendues indépendamment.
4.  **Normalisation Unifiée** : Toutes les bases de données utilisent le même jeu de caractères et les mêmes règles de classement.

### Configuration de la Base de Données

Toutes les bases de données utilisent la configuration uniforme suivante :

-   **Jeu de caractères** : `utf8mb4` (Prend en charge l'ensemble des caractères UTF-8, y compris les émojis)
-   **Collation** : `utf8mb4_unicode_ci` (Règles de tri Unicode)
-   **Moteur de Stockage** : InnoDB (Par défaut, prend en charge les transactions et les clés étrangères)

### Conventions de Nommage

-   **Nommage des Bases de Données** : `myems_{fonctionnalité}_db` (minuscules, séparés par des underscores)
-   **Nommage des Tables** : `tbl_{nom_entité}` (minuscules, séparés par des underscores)
-   **Nommage des Champs** : minuscules, séparés par des underscores, par exemple `start_datetime_utc`
-   **Nommage des Index** : `tbl_{nom_table}_index_{numéro}`

---

## Description Détaillée des Bases de Données

### 1. myems_system_db (Base de Données de Configuration du Système)

**Usage** : Stocke la configuration de base et les métadonnées du système. C'est la base de données centrale de configuration pour l'ensemble du système.

**Caractéristiques** :
-   Contient le plus grand nombre de tables (environ 150+)
-   Volume de données relativement faible, mais structure complexe
-   Contient de nombreuses tables de relations

**Catégories Principales de Tables** :

#### 1.1 Tables de Configuration de Base

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_energy_categories` | Catégories d'énergie (électricité, eau, gaz, froid, chaleur, etc.) | `id`, `name`, `unit_of_measure`, `kgce`, `kgco2e` |
| `tbl_energy_items` | Postes de consommation d'énergie (éclairage, climatisation, puissance, etc.) | `id`, `name`, `energy_category_id` |
| `tbl_cost_centers` | Centres de coût | `id`, `name`, `external_id` |
| `tbl_data_sources` | Configuration des sources de données | `id`, `name`, `gateway_id`, `protocol`, `connection` |
| `tbl_protocols` | Configuration des protocoles | `id`, `name`, `protocol_type` |

#### 1.2 Tables de Gestion des Équipements

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_equipments` | Informations sur les équipements | `id`, `name`, `uuid`, `equipment_type_id`, `cost_center_id` |
| `tbl_combined_equipments` | Équipements combinés (combinaison de plusieurs équipements) | `id`, `name`, `is_input_counted`, `is_output_counted` |
| `tbl_meters` | Informations sur les compteurs | `id`, `name`, `uuid`, `energy_category_id`, `is_counted` |
| `tbl_offline_meters` | Compteurs hors ligne (saisie manuelle) | `id`, `name`, `energy_category_id` |
| `tbl_virtual_meters` | Compteurs virtuels (calculés) | `id`, `name`, `expression` (format JSON) |
| `tbl_points` | Informations sur les points de données | `id`, `name`, `data_source_id`, `object_type`, `object_id` |

#### 1.3 Tables d'Organisation Spatiale

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_spaces` | Informations spatiales (pièces, étages, etc.) | `id`, `name`, `uuid`, `parent_space_id`, `area` |
| `tbl_stores` | Informations sur les magasins | `id`, `name`, `uuid`, `space_id` |
| `tbl_tenants` | Informations sur les locataires | `id`, `name`, `uuid`, `space_id` |
| `tbl_shopfloors` | Informations sur les ateliers | `id`, `name`, `uuid`, `space_id` |

#### 1.4 Tables de Relations

Le système utilise de nombreuses tables d'association pour établir des relations plusieurs-à-plusieurs :

-   `tbl_equipments_meters`: Association équipement-compteur
-   `tbl_equipments_offline_meters`: Association équipement-compteur hors ligne
-   `tbl_equipments_virtual_meters`: Association équipement-compteur virtuel
-   `tbl_spaces_equipments`: Association espace-équipement
-   `tbl_spaces_meters`: Association espace-compteur
-   `tbl_combined_equipments_equipments`: Association équipement combiné-équipement
-   etc...

#### 1.5 Tables des Équipements d'Énergies Nouvelles

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_photovoltaic_power_stations` | Centrales photovoltaïques | `id`, `name`, `capacity`, `contact_id` |
| `tbl_energy_storage_containers` | Conteneurs de stockage d'énergie | `id`, `name`, `rated_capacity`, `rated_power` |
| `tbl_energy_storage_power_stations` | Centrales de stockage d'énergie | `id`, `name`, `rated_capacity` |
| `tbl_microgrids` | Micro-réseaux | `id`, `name`, `address` |
| `tbl_charging_stations` | Stations de recharge | `id`, `name`, `rated_capacity`, `rated_power` |

#### 1.6 Tables de Contrôle et de Planification

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_commands` | Commandes de contrôle | `id`, `name`, `topic`, `payload` (format JSON) |
| `tbl_control_modes` | Modes de contrôle | `id`, `name`, `is_active` |
| `tbl_control_modes_times` | Périodes de mode de contrôle | `id`, `control_mode_id`, `start_time_of_day`, `end_time_of_day` |

#### 1.7 Autres Tables de Configuration

-   `tbl_contacts`: Informations de contact
-   `tbl_distribution_systems`: Systèmes de distribution
-   `tbl_distribution_circuits`: Circuits de distribution
-   `tbl_energy_flow_diagrams`: Diagrammes de flux d'énergie
-   `tbl_tariffs`: Configuration des tarifs
-   `tbl_working_calendars`: Calendriers de travail
-   `tbl_web_messages`: Messages Web

**Considérations pour le Développement** :
-   Toutes les tables ont un `id` (BIGINT AUTO_INCREMENT) comme clé primaire.
-   La plupart des tables ont un champ `uuid` (CHAR(36)) pour l'intégration avec des systèmes externes.
-   Les tables d'association n'ont généralement que `id` et deux champs de clé étrangère.
-   Les champs JSON utilisent le type `LONGTEXT`, stockant des chaînes JSON formatées.

### 2. myems_historical_db (Base de données historique)

**Usage** : stocke les données temps-réel et l’historique ; c’est l’une des bases les plus volumineuses du système.

**Caractéristiques** :
- Volume très important, stockage en séries temporelles
- Tables de valeurs brutes et tables « latest » pour accès rapide
- Marqueurs de qualité (`is_bad`, `is_published`)

**Structure principale** :

| Table | Description | Champs clés | Stratégie d’index |
|-------|-------------|-------------|-------------------|
| `tbl_analog_value` | Historique analogique | `point_id`, `utc_date_time`, `actual_value`, `is_bad`, `is_published` | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_analog_value_latest` | Dernière valeur analogique (cache) | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |
| `tbl_digital_value` | Historique digital | `point_id`, `utc_date_time`, `actual_value` (INT) | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_digital_value_latest` | Dernière valeur digital | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |
| `tbl_energy_value` | Historique énergétique | `point_id`, `utc_date_time`, `actual_value`, `is_bad`, `is_published` | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_energy_value_latest` | Dernière valeur énergétique | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |
| `tbl_text_value` | Historique texte | `point_id`, `utc_date_time`, `actual_value` (LONGTEXT) | `(point_id, utc_date_time)`, `(utc_date_time)` |
| `tbl_text_value_latest` | Dernière valeur texte | `point_id`, `utc_date_time`, `actual_value` | `(point_id, utc_date_time)` |

**Tables de fichiers** :

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_cost_files` | Fichiers de coût (Excel/CSV) | `file_name`, `uuid`, `upload_datetime_utc`, `status`, `file_object` (LONGBLOB) |
| `tbl_offline_meter_files` | Fichiers compteurs hors-ligne | … |
| `tbl_data_repair_files` | Fichiers de réparation de données | … |
| `tbl_energy_plan_files` | Fichiers de plan énergétique | … |

**Types de données** :
- `actual_value` : DECIMAL(21, 6) – haute précision, 6 décimales
- `utc_date_time` : DATETIME – toujours en UTC
- `is_bad` : BOOL – True = donnée invalide
- `is_published` : BOOL – True = donnée publiée

**Notes développement** :
- Toutes les dates sont UTC ; convertir côté front
- Les tables `_latest` évitent le scan de l’historique
- Tables fichier en LONGBLOB – attention à la taille
- Nettoyage régulier pour préserver les perfs

---

### 3. myems_energy_db (Base de données énergie)

**Usage** : agrège les consommations par heure, jour, mois, année pour tous les équipements.

**Caractéristiques** :
- Données calculées par le service `myems-aggregation`
- Granularités : hourly, daily, monthly, yearly
- Stats par catégorie énergétique et par poste

**Règle de nommage** :
`tbl_{type}_{flux}_{cat/item}_{granularité}`  
type : `meter`, `equipment`, `combined_equipment`, `space`, `store`, `tenant`, `shopfloor`  
flux : `input` / `output`  
granularité : `hourly`, `daily`, `monthly`, `yearly`

#### 3.1 Consommation des compteurs

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_meter_hourly` | Conso horaire compteur | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_meter_daily` | Conso journalière | … |
| `tbl_meter_monthly` | Conso mensuelle | … |
| `tbl_meter_yearly` | Conso annuelle | … |
| `tbl_offline_meter_hourly` | Conso horaire compteur hors-ligne | `offline_meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_virtual_meter_hourly` | Conso horaire compteur virtuel | `virtual_meter_id`, `start_datetime_utc`, `actual_value` |

#### 3.2 Consommation des équipements

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_equipment_input_category_hourly` | Entrée équip. par catégorie | `equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_equipment_input_item_hourly` | Entrée équip. par poste | `equipment_id`, `energy_item_id`, `start_datetime_utc`, `actual_value` |
| `tbl_equipment_output_category_hourly` | Sortie équip. par catégorie | … |
| `tbl_combined_equipment_input_category_hourly` | Entrée équip. combiné | … |
| `tbl_combined_equipment_output_category_hourly` | Sortie équip. combiné | … |

#### 3.3 Consommation des espaces

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_space_input_category_hourly` | Entrée espace par catégorie | `space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_space_input_item_hourly` | Entrée espace par poste | … |
| `tbl_space_output_category_hourly` | Sortie espace | … |
| `tbl_store_input_category_hourly` | Entrée magasin | … |
| `tbl_tenant_input_category_hourly` | Entrée tenant | … |
| `tbl_shopfloor_input_category_hourly` | Entrée atelier | … |

#### 3.4 Énergies renouvelables & stockage

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_photovoltaic_power_station_hourly` | Prod. horaire PV | `photovoltaic_power_station_id`, `start_datetime_utc`, `actual_value` |
| `tbl_energy_storage_container_charge_hourly` | Charge batterie | `energy_storage_container_id`, `start_datetime_utc`, `actual_value` |
| `tbl_energy_storage_container_discharge_hourly` | Décharge batterie | … |
| `tbl_energy_storage_container_grid_buy_hourly` | Achat réseau | … |
| `tbl_energy_storage_container_grid_sell_hourly` | Vente réseau | … |
| `tbl_microgrid_charge_hourly` | Charge micro-réseau | `microgrid_id`, `start_datetime_utc`, `actual_value` |
| `tbl_microgrid_discharge_hourly` | Décharge micro-réseau | … |

**Index** :
Index composite : `(objet_id, catégorie_id, start_datetime_utc)` ou `(objet_id, start_datetime_utc)`

**Notes développement** :
- `start_datetime_utc` = début de la période (ex. 00:00:00 pour 00-01h)
- `actual_value` = valeur agrégée, non brute
- Données calculées périodiquement, pas en temps réel
- Gestion des fuseaux horaires côté requête

### 4. myems_billing_db (Base de Données de Facturation)

**Usage** : Stocke les données de consommation d'énergie liées à la facturation. Structure similaire à `myems_energy_db`, mais les données sont calculées avec les tarifs appliqués.

**Caractéristiques** :
- Structure de table identique à `myems_energy_db`
- Les données sont calculées par le service `myems-aggregation` en fonction de la configuration des tarifs
- Prend en charge des règles de facturation complexes telles que les tarifs temporels, les tarifs progressifs, etc.

**Tables Principales** :
- Structure de table identique à `myems_energy_db`
- Les valeurs des données sont multipliées par le tarif correspondant, l'unité est généralement monétaire (par exemple, Yuan, Dollar)

**Considérations pour le Développement** :
- Les données de facturation dépendent de la configuration des tarifs dans `myems_system_db.tbl_tariffs`
- Nécessite une association avec le centre de coût (`cost_center`)
- Prend en charge plusieurs stratégies tarifaires (temporelle, progressive, de capacité, etc.)

---

### 5. myems_carbon_db (Base de Données des Émissions de Carbone)

**Usage** : Stocke les données de consommation d'énergie liées aux émissions de carbone, utilisées pour le calcul de l'empreinte carbone.

**Caractéristiques** :
- Structure de table identique à `myems_energy_db`
- Les données sont calculées par le service `myems-aggregation` en fonction des facteurs d'émission de carbone
- Les facteurs d'émission de carbone sont stockés dans `myems_system_db.tbl_energy_categories.kgco2e`

**Tables Principales** :
- Structure de table identique à `myems_energy_db`
- Les valeurs des données sont multipliées par le facteur d'émission de carbone, l'unité est généralement le kgCO2e (kilogramme d'équivalent CO2)

**Considérations pour le Développement** :
- Les facteurs d'émission de carbone peuvent varier dans le temps, nécessitant la prise en charge des facteurs historiques
- Les facteurs d'émission diffèrent selon le type d'énergie (électricité, gaz, pétrole, etc.)
- Prend en charge le calcul des émissions de carbone de scope 1, scope 2 et scope 3

---

### 6. myems_energy_baseline_db (Base de Données de Référence Énergétique)

**Usage** : Stocke les données de référence de consommation d'énergie, utilisées pour l'analyse des économies d'énergie et l'évaluation de l'efficacité énergétique.

**Caractéristiques** :
- Structure de table similaire à `myems_energy_db`
- Les données de référence sont généralement calculées sur la base de données historiques ou de valeurs standard
- Utilisées pour comparer la consommation réelle à la consommation de référence et calculer les économies d'énergie

**Tables Principales** :
- Structure de table identique à `myems_energy_db`
- Stocke les valeurs de référence plutôt que les valeurs réelles

**Considérations pour le Développement** :
- Les données de référence doivent être mises à jour régulièrement
- Prend en charge plusieurs méthodes de calcul de référence (moyenne historique, analyse de régression, valeur standard, etc.)

---

### 7. myems_energy_model_db (Base de Données du Modèle Énergétique)

**Usage** : Stocke les données du modèle de consommation énergétique annuel sur 8760 heures (nombre d'heures dans une année).

**Caractéristiques** :
- Stocke 8760 enregistrements par objet (données horaires pour une année)
- Utilisé pour la prévision et la planification de la consommation d'énergie
- Les noms des tables contiennent le suffixe `_8760`

**Tables Principales** :

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_meter_8760` | Modèle 8760h du compteur | `meter_id`, `start_datetime_utc`, `actual_value` |
| `tbl_equipment_input_category_8760` | Modèle de consommation d'énergie en entrée de l'équipement | `equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_combined_equipment_input_category_8760` | Modèle de consommation d'énergie en entrée de l'équipement combiné | `combined_equipment_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_space_input_category_8760` | Modèle de consommation d'énergie en entrée de l'espace | `space_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_shopfloor_input_category_8760` | Modèle de consommation d'énergie en entrée de l'atelier | `shopfloor_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_store_input_category_8760` | Modèle de consommation d'énergie en entrée du magasin | `store_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |
| `tbl_tenant_input_category_8760` | Modèle de consommation d'énergie en entrée du locataire | `tenant_id`, `energy_category_id`, `start_datetime_utc`, `actual_value` |

**Considérations pour le Développement** :
- Le modèle 8760h est généralement généré à partir de données historiques ou de modèles standard
- Utilisé pour la prévision de la consommation annuelle et l'établissement du budget
- Permet la visualisation par semaine, mois, trimestre, etc.

---

### 8. myems_energy_plan_db (Base de Données du Plan Énergétique)

**Usage** : Stocke les données du plan et des objectifs de consommation d'énergie.

**Caractéristiques** :
- Structure de table similaire à `myems_energy_db`
- Stocke les valeurs planifiées plutôt que les valeurs réelles
- Utilisé pour le budget énergétique et la gestion des objectifs

**Tables Principales** :
- Structure de table identique à `myems_energy_db`
- Les données proviennent de fichiers de plan ou de saisies manuelles

**Considérations pour le Développement** :
- Les données planifiées doivent être comparées et analysées avec les données réelles
- Prend en charge la planification multi-niveaux (annuelle, mensuelle, hebdomadaire, etc.)

---

### 9. myems_energy_prediction_db (Base de Données de Prédiction Énergétique)

**Usage** : Stocke les données de prévision de consommation d'énergie.

**Caractéristiques** :
- Structure de table similaire à `myems_energy_db`
- Stocke les valeurs prédites plutôt que les valeurs réelles
- Utilisé pour la prévision et l'alerte sur la consommation d'énergie

**Tables Principales** :
- Structure de table identique à `myems_energy_db`
- Les données sont générées par des algorithmes de prédiction

**Considérations pour le Développement** :
- Les données de prédiction doivent être mises à jour régulièrement
- Prend en charge plusieurs algorithmes de prédiction (séries temporelles, apprentissage automatique, etc.)
- La précision des prévisions doit être optimisée en continu

---

### 10. myems_fdd_db (Base de Données de Détection et de Diagnostic de Défauts - FDD)

**Usage** : Stocke les données liées à la détection et au diagnostic de défauts.

**Caractéristiques** :
- Prend en charge plusieurs canaux d'alerte (Web, Email, SMS, WeChat, Appel téléphonique)
- Le moteur de règles prend en charge une logique complexe de détection de défauts
- Prend en charge l'acquittement et le traitement des messages d'alerte

**Structure Principale des Tables** :

| Nom de la Table | Description | Champs Clés |
|------|------|----------|
| `tbl_rules` | Règles de diagnostic | `id`, `name`, `category`, `fdd_code`, `priority`, `channel`, `expression` (JSON), `message_template`, `is_enabled` |
| `tbl_web_messages` | Messages Web | `id`, `rule_id`, `user_id`, `subject`, `category`, `priority`, `message`, `status`, `belong_to_object_type`, `belong_to_object_id` |
| `tbl_email_messages` | Messages Email | `id`, `rule_id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `status` |
| `tbl_text_messages_outbox` | Boîte d'envoi des SMS | `id`, `rule_id`, `recipient_mobile`, `message`, `status`, `acknowledge_code` |
| `tbl_text_messages_inbox` | Boîte de réception des SMS | `id`, `sender_mobile`, `message`, `status` |
| `tbl_wechat_messages_outbox` | Boîte d'envoi des messages WeChat | `id`, `rule_id`, `recipient_openid`, `message_template_id`, `message_data` (JSON) |
| `tbl_wechat_messages_inbox` | Boîte de réception des messages WeChat | `id`, `sender_openid`, `message`, `status` |
| `tbl_email_servers` | Configuration du serveur de messagerie | `id`, `host`, `port`, `requires_authentication`, `user_name`, `password`, `from_addr` |
| `tbl_wechat_configs` | Configuration WeChat | `id`, `api_server`, `app_id`, `app_secret`, `access_token`, `expires_datetime_utc` |

**Catégories de Règles (category)** :
- `REALTIME` : Alerte en temps réel
- `SYSTEM` : Alerte système
- `SPACE` : Alerte spatiale
- `METER` : Alerte de compteur
- `TENANT` : Alerte de locataire
- `STORE` : Alerte de magasin
- `SHOPFLOOR` : Alerte d'atelier
- `EQUIPMENT` : Alerte d'équipement
- `COMBINEDEQUIPMENT` : Alerte d'équipement combiné

**Priorités (priority)** :
- `CRITICAL` : Critique
- `HIGH` : Élevée
- `MEDIUM` : Moyenne
- `LOW` : Faible

**Considérations pour le Développement** :
- Le champ `expression` stocke l'expression de la règle au format JSON
- `message_template` prend en charge le remplacement de variables (comme `$name`, `$value`)
- Les règles prennent en charge l'exécution planifiée et immédiate
- Statut du message : `new` → `sent` → `acknowledged` / `timeout`

---

### 11. myems_user_db (Base utilisateurs)

**Usage** : authentification, clés API, messages e-mail, etc.

**Caractéristiques** :
- Faible volume, haute sécurité
- Gestion des droits utilisateurs
- Authentification par clé API

**Structure principale** :

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_users` | Utilisateurs | `id`, `name`, `uuid`, `display_name`, `email`, `salt`, `password`, `is_admin`, `is_read_only`, `privilege_id`, `account_expiration_datetime_utc`, `password_expiration_datetime_utc`, `failed_login_count` |
| `tbl_privileges` | Privilèges | `id`, `name`, `data` (JSON) |
| `tbl_sessions` | Sessions | `id`, `user_uuid`, `token`, `utc_expires` |
| `tbl_api_keys` | Clés API | `id`, `name`, `token`, `created_datetime_utc`, `expires_datetime_utc` |
| `tbl_email_messages` | E-mails | `id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `status`, `scheduled_datetime_utc` |
| `tbl_email_message_sessions` | Sessions e-mail | `id`, `recipient_email`, `token`, `expires_datetime_utc` |
| `tbl_logs` | Journal d’audit | `id`, `user_uuid`, `request_datetime_utc`, `request_method`, `resource_type`, `resource_id`, `request_body` (JSON) |
| `tbl_notifications` | Notifications | `id`, `user_id`, `created_datetime_utc`, `status`, `subject`, `message`, `url` |
| `tbl_new_users` | Nouveaux comptes (attente activation) | `id`, `name`, `uuid`, `display_name`, `email`, `salt`, `password` |
| `tbl_verification_codes` | Codes de vérification | `id`, `recipient_email`, `verification_code`, `created_datetime_utc`, `expires_datetime_utc` |

**Sécurité** :
- Mots de passe : salt + hash, jamais en clair
- Dates d’expiration compte & mot de passe
- Limite de tentatives de connexion
- Clés API avec date d’expiration

**Notes développement** :
- Ne jamais lire le champ password en clair
- Nettoyer régulièrement les tokens expirés
- Conserver tous les logs pour audit
- Cycle notification : `unread` → `read` → `archived`

---

### 12. myems_reporting_db (Base rapports)

**Usage** : stockage des messages e-mail et pièces jointes liés aux rapports.

**Caractéristiques** :
- Faible volume
- Modèles et fichiers générés conservés

**Structure principale** :

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_reports` | Configuration rapport | `id`, `name`, `uuid`, `expression` (JSON), `is_enabled`, `last_run_datetime_utc`, `next_run_datetime_utc`, `is_run_immediately` |
| `tbl_reports_files` | Fichiers générés | `id`, `uuid`, `create_datetime_utc`, `file_name`, `file_type` (xlsx/pdf/docx), `file_object` (LONGBLOB) |
| `tbl_template_files` | Modèles | `id`, `uuid`, `report_id`, `file_name`, `file_type`, `file_object` |
| `tbl_email_messages` | Messages e-mail | `id`, `recipient_name`, `recipient_email`, `subject`, `message`, `attachment_file_name`, `attachment_file_object`, `status` |

**Notes développement** :
- Formats supportés : Excel, PDF, Word
- Modèles utilisés pour génération
- Génération planifiée ou immédiate
- LONGBLOB – surveiller la taille

---

### 13. myems_production_db (Base production)

**Usage** : données de production (produits, équipes, shifts…).

**Caractéristiques** :
- Faible volume
- Analyses d’efficacité énergétique par produit

**Structure principale** :

| Table | Description | Champs clés |
|-------|-------------|-------------|
| `tbl_products` | Produits | `id`, `name`, `uuid`, `unit_of_measure`, `tag`, `standard_product_coefficient` |
| `tbl_teams` | Équipes | `id`, `name`, `uuid`, `description` |
| `tbl_shifts` | Shifts | `id`, `shopfloor_id`, `team_id`, `product_id`, `product_count`, `start_datetime_utc`, `end_datetime_utc`, `reference_timestamp` |
| `tbl_shopfloor_hourly` | Production atelier (horaire) | `id`, `shopfloor_id`, `start_datetime_utc`, `product_id`, `product_count` |
| `tbl_space_hourly` | Production espace (horaire) | `id`, `space_id`, `start_datetime_utc`, `product_id`, `product_count` |
| `tbl_shopfloors_products` | Lien atelier-produit | `id`, `shopfloor_id`, `product_id` |
| `tbl_shopfloors_teams` | Lien atelier-équipe | `id`, `shopfloor_id`, `team_id` |

**Notes développement** :
- Calcul consommation spécifique par produit
- Statistiques par produit, équipe, atelier
- Corrélation avec les données énergétiques pour indicateurs d’efficacité

## Relations de Flux de Données

### Processus d'Acquisition des Données

```
Équipements/Capteurs
    ↓ (Modbus TCP/MQTT/HTTP)
myems-modbus-tcp (Service d'acquisition de données)
    ↓ (Écriture)
myems_historical_db.tbl_analog_value / tbl_digital_value / tbl_energy_value
    ↓ (Normalisation des données)
myems-normalization (Service de normalisation des données)
    ↓ (Nettoyage des données)
myems-cleaning (Service de nettoyage des données)
    ↓ (Agrégation des données)
myems-aggregation (Service d'agrégation des données)
    ↓ (Écriture)
myems_energy_db (Données de consommation d'énergie)
myems_billing_db (Données de facturation)
myems_carbon_db (Données d'émissions de carbone)
```

### Processus de Requête des Données

```
Requête Utilisateur
    ↓
myems-api (Service API)
    ↓ (Requête)
myems_system_db (Données de configuration)
myems_historical_db (Données historiques)
myems_energy_db (Données de consommation d'énergie)
    ↓ (Retour)
myems-web / myems-admin (Affichage frontal)
```

### Relations des Données

```
myems_system_db.tbl_points
    ↓ (point_id)
myems_historical_db.tbl_analog_value
    ↓ (Calcul d'agrégation)
myems_energy_db.tbl_meter_hourly
    ↓ (Relation)
myems_system_db.tbl_meters
    ↓ (Relation)
myems_system_db.tbl_equipments
    ↓ (Relation)
myems_system_db.tbl_spaces
```

---

## Normes de Conception de la Structure des Tables

### Champs Universels

Toutes les tables incluent les champs universels suivants :

| Nom du Champ | Type | Description |
|--------|------|------|
| `id` | BIGINT NOT NULL AUTO_INCREMENT | Clé primaire, auto-incrémentée |
| `name` | VARCHAR(255) | Nom |
| `uuid` | CHAR(36) | UUID, pour l'intégration avec des systèmes externes |
| `description` | VARCHAR(255) | Description (optionnelle) |

### Champs Temporels

| Nom du Champ | Type | Description |
|--------|------|------|
| `utc_date_time` | DATETIME | Heure UTC (tables de données historiques) |
| `start_datetime_utc` | DATETIME | Heure de début de la période (tables de données agrégées) |
| `created_datetime_utc` | DATETIME | Heure de création |
| `updated_datetime_utc` | DATETIME | Heure de mise à jour |
| `last_run_datetime_utc` | DATETIME | Heure de la dernière exécution |
| `next_run_datetime_utc` | DATETIME | Heure de la prochaine exécution |

**Remarque** : Tous les champs temporels utilisent uniformément l'heure UTC. La conversion vers l'heure locale est effectuée par l'interface frontale pour l'affichage.

### Champs Numériques

| Nom du Champ | Type | Description |
|--------|------|------|
| `actual_value` | DECIMAL(21, 6) | Valeur réelle, supporte une haute précision (6 décimales) |
| `set_value` | DECIMAL(21, 6) | Valeur de consigne |
| `rated_capacity` | DECIMAL(21, 6) | Capacité nominale |
| `rated_power` | DECIMAL(21, 6) | Puissance nominale |

### Champs JSON

| Nom du Champ | Type | Description |
|--------|------|------|
| `connection` | LONGTEXT | Configuration de connexion (format JSON) |
| `expression` | LONGTEXT | Expression (format JSON) |
| `payload` | LONGTEXT | Charge utile (format JSON) |
| `data` | LONGTEXT | Données (format JSON) |

**Remarque** : Les champs JSON stockent des chaînes JSON formatées et doivent être analysés avant utilisation.

### Champs d'État

| Nom du Champ | Type | Description |
|--------|------|------|
| `is_enabled` | BOOL | Est activé |
| `is_active` | BOOL | Est actif |
| `is_bad` | BOOL | Est une donnée erronée |
| `is_published` | BOOL | Est publié |
| `is_counted` | BOOL | Est comptabilisé dans les statistiques |
| `status` | VARCHAR(32) | Statut (ex: new, sent, done, error) |

### Conception des Index

**Index Primaire** :
- Toutes les tables ont une `PRIMARY KEY (id)`

**Index Unique** :
- Les champs clés (comme `name`, `uuid`) ont généralement un index unique

**Index Composite** :
- Les combinaisons de champs fréquemment interrogées utilisent un index composite
- Ex: `(point_id, utc_date_time)`, `(meter_id, start_datetime_utc)`

**Index Temporel** :
- Les champs temporels sont généralement indexés séparément pour supporter les requêtes par plage de temps

---

## Considérations pour le Développement

### 1. Traitement du Temps

- **Tout le temps en UTC** : Le stockage en base de données et les retours d'API utilisent l'heure UTC
- **Conversion Frontale** : L'interface frontale est responsable de la conversion en heure locale pour l'affichage
- **Format de l'Heure** : Utiliser le type `DATETIME`, format : `YYYY-MM-DD HH:MM:SS`
- **Problèmes de Fuseau Horaire** : Attention à l'heure d'été et à la conversion des fuseaux horaires

### 2. Choix des Types de Données

- **Numériques** : Utiliser `DECIMAL(21, 6)` pour garantir la précision, éviter les erreurs de virgule flottante
- **Texte** : Utiliser `VARCHAR` pour les textes courts, `TEXT` ou `LONGTEXT` pour les textes longs
- **JSON** : Utiliser `LONGTEXT` pour stocker les chaînes JSON
- **Binaires** : Utiliser `LONGBLOB` pour stocker les fichiers

### 3. Optimisation des Requêtes

- **Utiliser les Index** : Les conditions de requête doivent autant que possible utiliser des champs indexés
- **Éviter les Balayages Complets** : Éviter `SELECT *` sur les tables de grandes tailles
- **Requêtes Paginées** : Les requêtes de liste doivent être paginées pour éviter de retourner un grand volume de données en une fois
- **Plage Temporelle** : Les requêtes de données historiques doivent limiter la plage temporelle

### 4. Gestion des Transactions

- **Données de Configuration** : Les tables de configuration système utilisent les transactions pour garantir la cohérence
- **Données Historiques** : Les tables de données historiques n'utilisent généralement pas de transactions pour améliorer les performances d'écriture
- **Opérations par Lot** : Les insertions par lot utilisent les transactions, avec rollback en cas d'échec

### 5. Cohérence des Données

- **Contraintes de Clé Étrangère** : Les tables de configuration système utilisent les clés étrangères pour garantir la cohérence des données
- **Requêtes de Jointure** : Utiliser les jointures (JOIN) pour les données associées, éviter les requêtes multiples
- **Validation des Données** : Valider le format et la plage des données avant l'écriture

### 6. Optimisation des Performances

- **Séparation Lecture/Écriture** : Les tables de données historiques supportent la séparation lecture/écriture
- **Tables Partitionnées** : Envisager le partitionnement par temps pour les tables de grandes tailles
- **Stratégie de Cache** : Utiliser le cache pour les données de configuration et les dernières valeurs
- **Opérations par Lot** : Utiliser `INSERT ... VALUES (...), (...), (...)` pour les insertions par lot

### 7. Considérations de Sécurité

- **Injection SQL** : Utiliser des requêtes paramétrées pour éviter les injections SQL
- **Chiffrement des Mots de Passe** : Utiliser salt + hash pour les mots de passe utilisateur, ne pas stocker en clair
- **Contrôle des Permissions** : Les interfaces API nécessitent une validation des permissions
- **Anonymisation des Données** : Ne pas enregistrer les données sensibles (comme les mots de passe, les clés) dans les journaux

### 8. Gestion des Erreurs

- **Capture des Exceptions** : Les opérations de base de données doivent capturer les exceptions
- **Journaux d'Erreurs** : Enregistrer des informations d'erreur détaillées pour faciliter le dépannage
- **Mécanisme de Nouvelle Tentative** : Supporter les nouvelles tentatives en cas d'erreur réseau
- **Stratégie de Repli** : Fournir une solution de repli en cas d'indisponibilité du service

---

## Installation et Mise à Niveau

### Ordre d'Installation

Il est recommandé d'installer les bases de données dans l'ordre suivant :

1.  **myems_system_db** - Base de données de configuration du système (doit être installée en premier)
2.  **myems_user_db** - Base de données des utilisateurs
3.  **myems_historical_db** - Base de données des données historiques
4.  **myems_energy_db** - Base de données de consommation d'énergie
5.  **myems_billing_db** - Base de données de facturation
6.  **myems_carbon_db** - Base de données des émissions de carbone
7.  **myems_energy_baseline_db** - Base de données de référence énergétique
8.  **myems_energy_model_db** - Base de données du modèle énergétique
9.  **myems_energy_plan_db** - Base de données du plan énergétique
10. **myems_energy_prediction_db** - Base de données de prédiction énergétique
11. **myems_fdd_db** - Base de données de diagnostic de défauts
12. **myems_reporting_db** - Base de données de reporting
13. **myems_production_db** - Base de données de production

### Commandes d'Installation

```bash
# Se rendre dans le répertoire d'installation de la base de données
cd database/install

# Exécuter les scripts SQL dans l'ordre
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

### Mise à jour de la base de données

Les scripts de mise à jour se trouvent dans le répertoire `database/upgrade/`, nommés par version (ex. `upgrade5.10.0.sql`).

Avant toute mise à jour :
1. **Sauvegarder** : sauvegarde complète de toutes les bases obligatoire
2. **Lire les notes** : consulter les commentaires dans le script
3. **Valider en test** : exécuter d’abord sur environnement de test
4. **Ordre des versions** : appliquer les scripts dans l’ordre croissant des versions

### Maintenance

- **Sauvegardes régulières** : quotidiennement, conservation ≥ 30 jours
- **Purge historique** : supprimer régulièrement les données expirées pour éviter la croissance excessive des tables
- **Optimisation** : lancer `OPTIMIZE TABLE` périodiquement
- **Surveillance perf** : monitorer les performances et détecter les anomalies rapidement

---

## Documentation associée

- [Doc officielle MyEMS](https://myems.io/docs/installation/database)
- [API MyEMS](https://gitee.com/myems/myems/tree/master/myems-api/README.md)
- [Acquisition de données](https://gitee.com/myems/myems/tree/master/myems-modbus-tcp/README.md)
- [Agrégation](https://gitee.com/myems/myems/tree/master/myems-aggregation/README.md)
