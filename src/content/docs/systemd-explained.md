---
title: "How Ubuntu Services Are Managed with systemd"
description: "An explanation of how systemd manages services on Ubuntu, including units, targets, and lifecycle states."
---

## Introduction

Modern versions of Ubuntu (from 15.04 onward) use **systemd** as their init system — the first process that starts when the kernel boots and the parent of all other processes.  
systemd replaced Upstart and SysV init to provide a faster, more reliable, and more consistent way of managing services.  

This document explains *how* systemd manages services, focusing on **units**, **service lifecycle**, **dependencies**, and **logging**.

---

## Units: The Building Blocks of systemd

In systemd, everything is a **unit**. A unit is a configuration file that tells systemd how to manage a resource. Common types include:

- **Service units (`.service`)** – describe background processes like web servers (`nginx.service`) or databases (`mysql.service`).
- **Target units (`.target`)** – group other units together, similar to the old “runlevels”.
- **Socket units (`.socket`)** – define network or IPC sockets systemd listens on, activating services on demand.
- **Timer units (`.timer`)** – schedule jobs, similar to cron.

Example service unit file (simplified):

```ini
[Unit]
Description=NGINX Web Server
After=network.target

[Service]
ExecStart=/usr/sbin/nginx -g 'daemon off;'
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
Restart=always

[Install]
WantedBy=multi-user.target
```

## Service Lifecycle

systemd provides fine-grained control over starting, stopping, and enabling services:

- **Start/Stop/Restart immediately**
    ```bash
    sudo systemctl start nginx
    sudo systemctl stop nginx
    sudo systemctl restart nginx
    ```

- **Enable/Disable at boot**
    ```bash
    sudo systemctl enable nginx   # start automatically on boot
    sudo systemctl disable nginx  # prevent automatic start
    ```

- **Check status**
    ```bash
    systemctl status nginx
    ```

This shows whether the service is **active**, **inactive**, or **failed**, along with recent log output.

## Dependencies and Ordering

Units can depend on each other. For example, a web server may require the network stack before starting. Dependencies are expressed with directives:

- `After=` – ensures ordering (start this unit only after another one has started).

- `Requires=` – makes one unit depend on another; if the required unit fails, so does the dependent one.

Example:
```ini
[Unit]
Description=My Web App
Requires=network.target
After=network.target
```

This guarantees the web app won’t attempt to start before networking is available.

## Targets: Grouping Units

**Targets** are collections of units that represent a desired system state. They replace SysV’s runlevels:

- `multi-user.target` → non-graphical, multi-user environment (servers often boot into this).

- `graphical.target` → includes a desktop environment.

- `rescue.target` → single-user mode for troubleshooting.

You can switch targets with:

```bash
sudo systemctl isolate multi-user.target
```

## Logs and Debugging

systemd integrates tightly with `journald`, a logging system. You can view logs for services or the system:

- Logs for a specific service:
    ```bash
    journalctl -u nginx.service
    ```

- Show only the latest entries and follow new ones:
    ```bash
    journalctl -u nginx.service -f
    ```

- General system logs:
    ```bash
    journalctl -b
    ```

This unified logging makes troubleshooting easier compared to older init systems.

## Conclusion

systemd is more than just a replacement for init — it’s a **comprehensive service manager** that:

- Provides consistent service lifecycle management.

- Handles dependencies and ordering automatically.

- Groups services into logical targets.

- Centralizes logging for easier debugging.

By understanding how units, targets, and journald work together, you can confidently manage and troubleshoot services on Ubuntu.

## References

- [systemd documentation](https://systemd.io/)

- [Ubuntu Server Guide: systemd](https://ubuntu.com/server)