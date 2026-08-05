---
title: Stage à Icube
startDate: 2025-04-01
endDate: 2025-06-23
description:
  Stage effectué au laboratoire de recherche Icube pour l'entreprise Viso Rando, lors de ma deuxième année de BUT.
tags:
  - Dev
  - IA
  - Stage
  - Python
lang: fr
---

### Présentation du projet

**Problématique** : Comment générer des graphes de sentiers à partir de traces GPS ?  
En randonnée, des milliers de traces GPS (suites de coordonnées GPS) sont créées chaque jour. Ces traces ne sont pas aléatoires : elles suivent des chemins réels. Les chercheurs se sont donc demandé :  
*"Comment reconstruire les chemins empruntés par les randonneurs à partir de toutes ces traces ?"*

C’est sur ce sujet que j’ai travaillé pendant mon stage, **non pas sur la partie recherche**, mais sur la partie technique de la gestion des données et sur **leur** mise en forme pour l'IA.  
L’objectif ? Trouver une méthode **moins coûteuse** pour obtenir des cartes à jour, sans avoir à envoyer des équipes sur le terrain pour cartographier les montagnes.

---

### Réalisations

#### Base de données géographique

Ma première mission était de créer une **base de données** avec `PostgreSQL` pour centraliser et normaliser les données issues de fichiers `.geojson` ou `.gpx` (du `XML` déguisé). Ainsi que de créer les scripts Python afin de migrer facilement les données des fichiers dans la base et également d'avoir un moyen **facile** de les exporter au format GeoJSON (mort à l'`XML`, c'est trop lourd pour rien).

### Contribution à un modèle d’IA

La majeure partie de mon stage a consisté à **assister un étudiant en master** dans le développement d’un modèle d’IA.  
Mon rôle, c’était de m’occuper du **pré- et post-traitement des données**, car comme le dit l’adage : *"Garbage in, garbage out"*.

##### Étapes clés :
1. **Nettoyage des données** :
   - Suppression des points trop éloignés les uns des autres.
   - Filtrage des traces avec trop peu de points.

2. **Préparation des données pour le modèle** :
   - Création de **cartes de chaleur** représentant la densité des traces par pixel.

3. **Génération des jeux d’entraînement** :
   - Découpage de la carte en **images de taille fixe** pour l’entraînement.

4. **Génération des jeux de supervision** :
   - Récupération des données **OpenStreetMap** (OSM) via leur API pour la zone étudiée.
   - Nettoyage pour ne garder que les **chemins couverts par nos traces**.
   - Conversion en **raster bitmap** pour servir de référence (ground truth).

5. **Post-traitement** :
   - Après inférence, **assemblage des images** générées par le réseau.
   - Retransformation en **données géographiques exploitables**.

---
### Résultats

**Centralisation des données** :
J’ai simplifié le stockage des données géographiques de mon tuteur, qui les conservait auparavant dans des fichiers aux **formats variés et incohérents**.

**Optimisation du workflow IA** :
Mon collègue a pu **se concentrer sur le cœur du modèle** grâce à :
- Une **méthode simplifiée** pour générer des jeux de données, **quelle que soit la source** (tant qu’OSM a des traces).
- Un processus **plus propre et efficace** que l’ancienne méthode de correction.

**Performance du modèle** :
Notre pipeline a permis d’**entraîner un modèle dépassant l’état de l’art**, grâce à :
- Des **données propres et structurées**.
- Un **modèle affiné** par nos soins.
