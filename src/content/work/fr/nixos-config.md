---
title: NixOS Config
startDate: 2026-04-01
description:  
  Configuration NixOS versionnée et reproductible.
tags:
  - Linux
  - Déclaratif
  - Reproductibilité
lang: fr
---

### **Pourquoi NixOS, c'est trop cool ?**

Avec NixOS, **ma configuration est versionnée sur Git** ! Je peux :
- La **montrer** facilement.
- L'installer sur un nouveau système super facilement

---
### **Mon approche (déclarative et modulaire)**

C’était ma **première fois** en mode **déclaratif**, donc il y a sûrement mieux à faire *(et je sais qu’il y a plein de "rabbit holes" sur l'archi des config NixOS)*.
Mon objectif ? **Utiliser au maximum les `include`** pour :
- **Séparer les composants** dans des fichiers dédiés.
- Garder une structure **modulaire et maintenable**.

---
### **Le côté reproductible (le vrai kiff)**

1. **Restauration instantanée** :
   Si je perds mon ordinateur → un `git pull` puis `sudo nixos-rebuild switch` et **hop** ! Mon environnement est **identique** *(d’un point de vue logiciel, hein… les backups de fichiers, c’est pas magique non plus)*.

2. **Gestion des versions avec `flake.nix`** *(un peu comme un `cargo.toml`)* :
   - Définir **la version du système** et des **packages** à installer.
   - **Par projet** : Créer un `flake.nix` avec des versions **fixées** de Python, Node, Java, etc.
   - Un simple `nix develop` et **hop** → on atterrit dans un **environnement prêt à l’emploi** avec tous les packages nécessaires.

---
### **En résumé**
Ma config est **en développement intensif**, donc elle va évoluer. Mais elle est *(ou sera)* **bien documentée** sur GitHub.

👉 **[Lien vers ma config NixOS](https://github.com/moicsam/nixos-config)**
