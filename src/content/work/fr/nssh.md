---
title: NSSH (Not Secure SHell)
startDate: 2025-04-14
endDate: 2025-06-10
description:  
  Une version non sécurisée de SSH, implémentée en Rust pour apprendre la cryptographie.
tags:
  - Rust
  - Cryptographie
  - Réseau
lang: fr
---

### **Présentation du projet**

**NSSH** (*Not Secure SHell*) est une version de SSH **volontairement non sécurisée**, car c’est moi qui ai construit les **briques cryptographiques** utilisées pour mettre en place le **tunnel chiffré**.

Mis à part ça, c’était **super fun** à faire ! Ce projet m’a permis de :
- Apprendre **le Rust**.
- Implémenter **AES et RSA** comme vu en cours.
- Pour le fun, j’ai aussi implémenté **SHA-256** à partir de [d'une spec](https://csrc.nist.gov/files/pubs/fips/180-2/final/docs/fips180-2.pdf).
- Refaire un peu de **sockets TCP** pour simuler ma connexion SSH.

Bref, plein de trucs rigolos pour un **super projet** *(l’Amérique n’aura pas mes données !)*.

---
### **Documentation**
Une documentation plus technique est disponible sur mon dépôt :
👉 **[GitHub - NSSH](https://github.com/moicsam/nssh)**
