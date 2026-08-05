---
title: BreakThrough
startDate: 2026-03-01
endDate: 2026-04-30
description: |
  Création d'un Bot utilisant l'algorithme Min Max pour le jeu de plateau breakthrough.
tags:
  - Jeu de plateau
  - Algorithmie
  - Min Max
lang: fr
---

### **Présentation du projet**

BreakThrough est un jeu de plateau où le but est de passer d’un bord à l’autre : le premier qui arrive à l’autre bout du plateau gagne. **Niveau déplacement**, c’est chacun son tour : 1 case, et on peut manger qu’en diagonale.

Super simple comme jeu, hein.

---

### **Réalisations**

**Min Max**  
Pour la partie Min Max, on a **implémenté** Min Max avec l’optimisation **alpha-bêta**, qui permet de visiter **moins** de branches (celles qui, de toute façon, sont **nules**) et ainsi de visiter le plus de branches **interessante** possible.  
Notre objectif était d’avoir une évaluation de plateau simple et de se concentrer sur la profondeur.

**Communication avec le serveur de jeux**  
Le **professeur** a fait une API pour la compétition **finale** afin que tous nos **bots** **puissent** s’affronter.

---
### **Résultats**

Nous avons **battu** tous les **niveaux créés** par le **professeur**.
