---
title: CantelCox
publishDate: 2026-08-03
description:  
  Simulation of a fictional Canadian mobile operator deploying a modern BSS architecture for individual and SME subscribers, covering the full lifecycle of mobile lines.
tags:
  - Microservice
  - Architecture
  - Coursework
lang: en
---

### **Project Overview**

This project consists of a **microservice architecture** designed to manage the **lifecycle of a mobile line**. We had **2 months** to build it.

---

### **Achievements**

#### **Design and architecture**
We started by:
1. **Modeling the architecture with DDD**:
   - Mapping out the **Bounded Contexts**.
   - Identifying the **aggregates**.
   - Determining the **services to create** based on these elements.

2. **Implementation and DevOps**:
   - Setting up **Docker** for each service to streamline **CI/CD** pipelines.
   - Using a **hexagonal architecture** for each service.

#### **Tech stack**
In addition to the architecture, the stack includes:
- **Gateway**: KrakenD
- **Load Balancer**: Nginx
- **Cache**: Valkey
- **Database**: PostgreSQL

**Observability** (4 golden signals and distributed tracing):
- Prometheus
- Grafana
- Jaeger

---
### **Results**
We built a **scalable and resilient application**.
