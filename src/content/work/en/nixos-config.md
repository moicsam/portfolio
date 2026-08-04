---
title: NixOS Config
publishDate: 2026-08-03
description:  
  A versioned and reproducible NixOS configuration.
tags:
  - Linux
  - Declarative
  - Reproducibility
lang: en
---

### **Why is NixOS so cool?**

With NixOS, **my configuration is versioned on Git**! I can:
- **Show it off** easily.
- Install it on a new system super easily.

---
### **My approach (declarative and modular)**

This was my **first time** going full **declarative**, so there's surely a better way to do it *(and I know there are plenty of "rabbit holes" when it comes to NixOS config architecture)*.
My goal? **Use `include`s as much as possible** to:
- **Separate components** into dedicated files.
- Keep a **modular and maintainable** structure.

---
### **The reproducible part (the real payoff)**

1. **Instant restoration**:
   If I lose my computer → a `git pull` then `sudo nixos-rebuild switch` and **boom**! My environment is **identical** *(from a software standpoint, mind you... file backups aren't magic either)*.

2. **Version management with `flake.nix`** *(kind of like a `cargo.toml`)*:
   - Define **the system version** and the **packages** to install.
   - **Per project**: Create a `flake.nix` with **pinned** versions of Python, Node, Java, etc.
   - A simple `nix develop` and **boom** → you land in a **ready-to-use environment** with all the necessary packages.

---
### **In summary**
My config is **under heavy development**, so it will keep evolving. But it is *(or will be)* **well documented** on GitHub.

👉 **[Link to my NixOS config](https://github.com/moicsam/nixos-config)**
