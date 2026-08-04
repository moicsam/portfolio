---
title: CantelCox
publishDate: 2026-08-03
description:  
  Simulation d'un opérateur mobile canadien fictif déployant une architecture BSS moderne pour les abonnés particuliers et PME, couvrant le cycle de vie des lignes mobiles.
tags:
  - Microservice
  - Architecture
  - Cours
lang: fr
---

### **Présentation du projet**

Ce projet consiste en une **architecture microservice** conçue pour gérer le **cycle de vie d’une ligne mobile**. Nous avons eu **2 mois** pour le réaliser.

---

### **Réalisations**

#### **Conception et architecture**
Nous avons commencé par :
1. **Modéliser l’architecture en DDD** :
   - Tracer la **carte des Bounded Contexts**.
   - Identifier les **agrégats**.
   - Déterminer les **services à créer** à partir de ces éléments.

2. **Implémentation et DevOps** :
   - Mise en place de **Docker** pour chaque service afin de faciliter les pipelines **CI/CD**.
   - Utilisation d’une **architecture hexagonale** pour chaque service.

#### **Stack technique**
En plus de l’architecture, la stack comprend :
- **Gateway** : KrakenD
- **Load Balancer** : Nginx
- **Cache** : Valkey
- **Base de données** : PostgreSQL

**Observabilité** (4 signaux d’or et tracing distribué) :
- Prometheus
- Grafana
- Jaeger

---
### **Résultats**
Nous avons développé une **application scalable et résiliente**.
