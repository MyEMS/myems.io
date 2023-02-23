---
sidebar_position: 1
---

# Einführung

MyEMS ist ein branchenführendes Open Source Energiemanagementsystem und basiert auf Python und React.
Es wird zum Sammeln, Verarbeiten, Analysieren, Berichten und Anzeigen von Energiedaten von Gebäuden, Fabriken, Einkaufszentren, Rechenzentren und Unternehmenszonen verwendet.
MyEMS wird von einem erfahrenen Entwicklungsteam entwickelt und gewartet, und der Quellcode des Systems wird unter MIT-Lizenz veröffentlicht.
Verwendung von Open Source, um die Ziele der CO2-Peak-Kohlenstoffneutralität zu erreichen.


## <a id="myems-architecture" />MyEMS Architektur

![MyEMS Architecture Function View](/img/architecture-function-view.png)

![MyEMS Architecture Site View](/img/architecture-site-view-de.png)

![MyEMS Data Flow](/img/myems-data-flow-de.svg)

## <a id="myems-ui-presentation" />MyEMS UI-Präsentation

![MyEMS Space EnergyCategory1](/img/myems-space-energycategory1.gif)

![MyEMS Space EnergyCategory2](/img/myems-space-energycategory2.gif)

![MyEMS Space EnergyCategory3](/img/myems-space-energycategory3.gif)

![MyEMS Large Screen Dashboard](/img/myems-large-screen-dashboard.gif)


## <a id="myems-features" />MyEMS Funktionen (Community Edition)

Nutzer der Community Edition müssen das entsprechende Urheberrecht und LOGO von MyEMS behalten, und es ist verboten, diese zu ändern und zu löschen. Im Falle eines Verstoßes bleibt das Recht vorbehalten, den Verletzer zur Verantwortung zu ziehen.

| Eigenschaften                    | Gemeinschaftsausgabe | Erläuterung   |
| :---                             |      :----:          |  :----:       |
| Open Source                      | ✔️                 | MIT License      |
| Pricing                          | Free                 |              |
| Change Name and Logo             | ️❌                  | Bei Verstößen bestehen rechtliche Risiken |
| Modbus TCP Protocol              | ✔️                 | Datenerfassung, https://modbus.org/       |
| Number of Data Points            | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Number of Meters                 | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Number of Spaces                 | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Number of Equipments             | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Number of Tenants                | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Number of Stores                 | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Number of Shop Floors            | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Combined Equipments Number       | Unbegrenzt        | Die tatsächliche Zahl ist durch die obere Grenze der Serverressourcen begrenzt |
| Docker                           | ✔️             | https://hub.docker.com/u/myems |
| MySQL                            | ✔️             | http://mysql.com/    |
| Percona Server for MySQL         | ✔️             | https://www.percona.com/ |
| MariaDB                          | ✔️             | https://mariadb.org/ |
| SingleStore                      | ✔️             | https://www.singlestore.com/ |
| OceanBase                         | ✔️             | https://www.oceanbase.com/ |
| AWS Cloud                        | ✔️             | https://aws.amazon.com/ |
| Azure Cloud                      | ✔️             | https://azure.microsoft.com/ |
| Alibaba Cloud                    | ✔️             | https://aliyun.com/ |
| Private Cloud                    | ✔️             |                      |
| Data Comparison                  | ✔️             | Jahr für Jahr, Monat für Monat, Freier Vergleich, Kein Vergleich |
| Excel Exporter                   | ✔️             | Echte Excel-Datei, keine CSV-Datei, Tabellen, Liniendiagramme, Säulendiagramme, Kreisdiagramme |
| Meter/Meter Energy Report        | ✔️             | Cascade select Space, Multiple Compare Types, Multiple Period Types, Reporting Period Total Consumption, Base Period Total Consumption, Reporting Period Ton of Standard Coal, Reporting Period Ton of Carbon Dioxide Emissions, Reporting Period Trend, Related Parameters Data, Detailed Data, Export to Excel |
| Meter/Carbon Dioxide Emissions Report | ✔️          |                      |
| Meter/Meter Cost Report          | ✔️             |                      |
| Meter/Meter Trend Data           | ✔️             |                      |
| Meter/Meter Realtime Data        | ✔️             |                      |
| Meter/Master Meter Submeters Balance | ✔️         |                      |
| Meter/Meter Tracking             | ✔️             |                      |
| Meter/Meter Batch Analysis       | ✔️             |                      |
| Meter/Virtual Meter Energy Report  | ✔️             |                      |
| Meter/Virtual Meter Carbon Dioxide Emissions Report | ✔ |                    |
| Meter/Virtual Meter Cost Report    | ✔️             |                      |
| Meter/Offline Meter Energy Report  | ✔️             |                      |
| Meter/Offline Meter Carbon Dioxide Emissions Report | ✔ |                    |
| Meter/Offline Meter Cost Report    | ✔️             |                      |
| Meter/Offline Meter Batch Analysis       | ✔️             |                      |
| Space/Energy Category Data       | ✔️             |                      |
| Space/Energy Item Data           | ✔️             |                      |
| Space/Carbon Dioxide Emissions Report | ✔️          |                      |
| Space/Cost Data                  | ✔️             |                      |
| Space/Output Data                | ✔️             |                      |
| Space/Income Data                | ✔️             |                      |
| Space/Efficiency Data            | ✔️             |                      |
| Space/Load Data                  | ✔️             |                      |
| Space/Statistics                 | ✔️             |                      |
| Equipment/Energy Category Data   | ✔️             |                      |
| Equipment/Energy Item Data       | ✔️             |                      |
| Equipment/Carbon Dioxide Emissions Report | ✔️          |                      |
| Equipment/Cost Data              | ✔️             |                      |
| Equipment/Output Data            | ✔️             |                      |
| Equipment/Income Data            | ✔️             |                      |
| Equipment/Efficiency Data        | ✔️             |                      |
| Equipment/Load Data              | ✔️             |                      |
| Equipment/Statistics             | ✔️             |                      |
| Equipment/Batch Analysis         | ✔️             |                      |
| Equipment/Equipment Tracking     | ✔️             |                      |
| Tenant/Energy Category Data      | ✔️             |                      |
| Tenant/Energy Item Data          | ✔️             |                      |
| Tenant/Carbon Dioxide Emissions Report | ✔️          |                      |
| Tenant/Cost Data                 | ✔️             |                      |
| Tenant/Load Data                 | ✔️             |                      |
| Tenant/Statistics                | ✔️             |                      |
| Tenant/Tenant Bill               | ✔️             |                      |
| Store/Energy Category Data       | ✔️             |                      |
| Store/Energy Item Data           | ✔️             |                      |
| Store/Carbon Dioxide Emissions Report | ✔️          |                      |
| Store/Cost Data                  | ✔️             |                      |
| Store/Load Data                  | ✔️             |                      |
| Store/Statistics                 | ✔️             |                      |
| Shopfloor/Energy Category Data   | ✔️             |                      |
| Shopfloor/Energy Item Data       | ✔️             |                      |
| Shopfloor/Carbon Dioxide Emissions Report | ✔️          |                      |
| Shopfloor/Cost Data              | ✔️             |                      |
| Shopfloor/Load Data              | ✔️             |                      |
| Shopfloor/Statistics             | ✔️             |                      |
| Combined Equipment/Energy Category Data | ✔️      |                      |
| Combined Equipment/Energy Item Data     | ✔️      |                      |
| Combined Equipment/Carbon Dioxide Emissions Report | ✔️          |                      |
| Combined Equipment/Cost Data            | ✔️      |                      |
| Combined Equipment/Output Data          | ✔️      |                      |
| Combined Equipment/Income Data          | ✔️      |                      |
| Combined Equipment/Efficiency Data      | ✔️      |                      |
| Combined Equipment/Load Data            | ✔️      |                      |
| Combined Equipment/Statistics           | ✔️      |                      |
| Combined Equipment/Batch Analysis       | ✔️      |                      |
| Energy Dashboard                 | ✔️             |                      |
| Energy Flow Diagram              | ✔️             |                      |
| Distribution System              | ✔️             |                      |
| RESTful API                         | ✔️          | Based on Python. Providing interfaces of system configuration, energy report and excel exporter |
| Web UI                           | ✔️             | Based on ReactJS. Providing energy data virtualization. |
| Admin UI                         | ✔️             | Based on AngularJS (version 1.x). Providing system configuration. |
| Online Community Customer Support| ✔️             |                      |


## <a id="myems-downloads" />MyEMS Downloads (Community Edition)

[1]. [https://github.com/myems/myems](https://github.com/myems/myems)

[2]. [https://gitee.com/myems/myems](https://gitee.com/myems/myems) 

[3]. [https://bitbucket.org/myems/myems](https://bitbucket.org/myems/myems) 

[4]. [https://gitlab.com/myems/myems](https://gitlab.com/myems/myems)

[5]. [https://gitcode.net/myems/myems](https://gitcode.net/myems/myems) 
