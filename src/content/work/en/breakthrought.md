---
title: BreakThrough
publishDate: 2026-08-03
description: |
  Building a bot using the Min Max algorithm for the board game Breakthrough.
tags:
  - Board game
  - Algorithms
  - Min Max
lang: en
---

### **Project Overview**

Breakthrough is a board game where the goal is to move from one side of the board to the other: the first player to reach the opposite end wins. **In terms of movement**, players take turns, moving 1 square at a time, and can only capture diagonally.

Super simple game, right?

---

### **Achievements**

**Min Max**  
For the Min Max part, we **implemented** Min Max with **alpha-beta** optimization, which allows visiting **fewer** branches (the ones that are **useless** anyway) so we can visit as many **interesting** branches as possible.  
Our goal was to keep the board evaluation simple and focus on depth.

**Communication with the game server**  
The **professor** built an API for the **final** competition so that all our **bots** could face off against each other.

---
### **Results**

We **beat** every **level created** by the **professor**.
