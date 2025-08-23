---
title: "Ubuntu Server Setup"
description: "A walkthrough for installing and configuring Ubuntu Server with essential CLI tools."
---

# 1. Introduction

This walkthrough will guide you through installing Ubuntu Server 22.04 in a local virtual machine and preparing the sever with essential command-line tools. By the end, you will have a basic but working Linux server environment with a simple web service running.

This guide is written for developers, students, or sysadmins new to Linux who want hands-on experience with the server edition of Ubuntu in a safe, local environment. No prior Linux administration experience is required, though some familiarity with the command line will help.

# 2. Prerequisites

Before starting, make sure you have:

- A virtualization tool such as VirtualBox, VMware, or WSL2. This allows you to run Ubuntu in a contained environment without affecting your main operating system.

- Ubuntu Server 22.04 ISO image, downloadable from the [Ubuntu website](https://ubuntu.com/download/server).

- Basic command-line knowledge (navigating directories, running commands with `sudo`).

# 3. Install Ubuntu Server

1. Open your virtualization tool and create a new virtual machine. Allocate at least 2 CPU cores, 2 GB of RAM, and 20 GB of disk space.

2. Mount the Ubuntu Server ISO as the VM’s boot device.

3. Start the VM and follow the on-screen installer prompts:
    - Select your language and region/timezone.

    - Create a user account with a strong password.

    - Choose default options unless you have specific requirements.

4. After installation completes, reboot the VM. You should see a login prompt for your new Ubuntu system.

    <figure>
        <img src="/cpu-ram.jpg"
            alt="VM settings">
        <figcaption>VirtualBox VM setup wizard showing CPU/RAM settings.</figcaption>
    </figure>

# 4. Update the System

Keeping your system up to date ensures you have the latest security patches and software.
    
1. Log in with the username you created.

2. Update package lists:
    ```bash
    sudo apt update
    ```

3. Upgrade installed packages:
    ```bash
    sudo apt upgrade
    ```

4. Verify the update by checking OS version and kernel:
    ```bash
    lsb_release -a 
    uname -r
    ```

    <figure>
        <img src="/apt-upgrade.jpg"
            alt="apt upgrade">
        <figcaption>Terminal showing successful <b>apt upgrade</b> with updated packages.</figcaption>
    </figure>

# 5. Install Essential Tools
    
Ubuntu Server starts with a minimal set of packages. Let’s add some common tools:

- Git (for source code version control): 
    ```bash
    sudo apt install git
    ```

- curl (for testing APIs and fetching data over HTTP):
    ```bash
    sudo apt install curl
    ```

- htop (optional; real-time process monitor):
    ```bash
    sudo apt install htop
    ```

After installation, you can test:

```bash
git --version
curl --version
htop --version
```
<figure>
    <img src="/htop.jpg"
        alt="htop running">
    <figcaption><b>htop</b> running in terminal.</figcaption>
</figure>
    
# 6. Set Up a Simple Web Service

To confirm our environment works, we’ll install nginx, a lightweight web server.

1. Install nginx:
    ```bash
    sudo apt install nginx
    ```

2. Start the service:
    ```bash
    sudo systemctl start nginx
    ```

3. Check status:
    ```bash
    sudo systemctl status nginx
    ```
    Look for `Active: active (running)` in the output.

    <figure>
        <img src="/nginx-service-status.jpg"
            alt="nginx service status">
        <figcaption>nginx service status showing active.</figcaption>
    </figure>

# 7. Test the Service

1. From inside the VM, run:
    ```bash
    curl http://localhost
    ```
You should see HTML output starting with `<html><head><title>Welcome to nginx!</title></head>`.

2. If your VM uses a bridged or NAT network, open a browser on your host machine and visit http://127.0.0.1 or the VM’s assigned IP.

3. You should see the default **"Welcome to nginx!"** page.

    <figure>
        <img src="/nginx-welcome-page.jpg"
            alt="nginx welcome page">
        <figcaption>nginx welcome page in browser.</figcaption>
    </figure>

# 8. Next Steps

Congratulations! You now have a basic Ubuntu Server VM with tools and a running web service.

From here you can:

- Secure the server with a firewall:
    ```bash
    sudo ufw allow 'Nginx HTTP'
    sudo ufw enable
    ```

- Add HTTPS with Let’s Encrypt using certbot.

- Explore the [Ubuntu Server documentation](https://ubuntu.com/server/docs) for advanced configuration and best practices.

# Troubleshooting

:::tip[Common Issues]

**Package not found**  
If you see an error like:

E: Unable to locate package nginx

Make sure you ran `sudo apt update` before attempting installation.

**Service not active**  
If `systemctl status nginx` shows `inactive` or `failed`, try restarting the service:  

```bash
sudo systemctl restart nginx
```

Check logs with:
```bash
journalctl -xe
```

**No nginx welcome page in browser**

- Confirm the VM network mode allows host access (e.g., “Bridged” or “NAT with port forwarding”).

- Run `ip addr` in the VM to find the correct IP, then open `http://<VM-IP>` in your host browser.