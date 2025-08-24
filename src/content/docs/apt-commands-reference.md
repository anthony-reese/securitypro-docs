---
title: "Common apt Commands"
description: "A quick reference for apt commands to manage software on Ubuntu."
---

## Introduction

The **Advanced Package Tool (apt)** is the primary command-line utility for managing software on Debian-based systems, including Ubuntu.  
It allows you to **install, update, remove, and inspect** software packages.

This page provides a **reference list of common apt commands**. Unlike tutorials or how-to guides, it is meant to be concise and scannable.

---

## Updating and Upgrading

| Command | Purpose | Example |
|---------|---------|---------|
| `sudo apt update` | Refresh package lists from repositories | `sudo apt update` |
| `sudo apt upgrade` | Upgrade all upgradable packages | `sudo apt upgrade` |
| `sudo apt full-upgrade` | Upgrade packages and handle dependencies (may remove some packages) | `sudo apt full-upgrade` |

---

## Installing and Removing Software

| Command | Purpose | Example |
|---------|---------|---------|
| `sudo apt install <package>` | Install a package | `sudo apt install git` |
| `sudo apt remove <package>` | Remove a package (keep config files) | `sudo apt remove nginx` |
| `sudo apt purge <package>` | Remove a package and its config files | `sudo apt purge nginx` |

---

## Searching and Inspecting Packages

| Command | Purpose | Example |
|---------|---------|---------|
| `apt search <term>` | Search for packages by name/description | `apt search curl` |
| `apt show <package>` | Display detailed information about a package | `apt show htop` |
| `apt list --installed` | List installed packages | `apt list --installed | grep openssl` |

---

## Cleaning and Maintenance

| Command | Purpose | Example |
|---------|---------|---------|
| `sudo apt autoremove` | Remove unused dependencies | `sudo apt autoremove` |
| `sudo apt clean` | Clear downloaded package files in cache | `sudo apt clean` |
| `sudo apt --fix-broken install` | Fix broken dependencies | `sudo apt --fix-broken install` |

---

## Notes

- `apt` is a friendlier interface introduced in newer Ubuntu releases; `apt-get` still works but is more verbose.  
- Always run `sudo apt update` before installing to ensure you have the latest package information.  
- Combine with `man apt` for the complete manual.

---

## References

- [Ubuntu: Package Management with apt](https://ubuntu.com/server/docs/package-management)  
- [man apt](https://manpages.ubuntu.com/manpages/focal/en/man8/apt.8.html)  
