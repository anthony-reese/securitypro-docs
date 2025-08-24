---
title: "Using curl to Test APIs"
description: "A task-oriented guide for making API requests with curl on Linux."
---

## Introduction

`curl` is a versatile command-line tool used to send HTTP requests. Developers and system administrators often use it to test APIs, download files, and debug network issues. This guide walks through common tasks with curl.

## Prerequisites

- A Linux or macOS system (Ubuntu typically has curl preinstalled).
- Basic familiarity with HTTP requests.

## Send a Simple GET Request

```bash
curl https://api.github.com/users/octocat
```

This fetches a JSON object containing details for the GitHub user octocat.

## Add Headers

Include an authorization header when accessing APIs:

```bash
curl -H "Authorization: Bearer $TOKEN" https://api.example.com/data
```

## POST Data

Send a JSON payload to an API endpoint:

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"name":"test","value":42}' \
https://api.example.com/submit
```

## Save Output to a File

```bash
curl -o response.json https://api.github.com/users/octocat
```

## Pretty-print JSON with jq (Optional)

Combine curl with `jq` for readable JSON output:

```bash
curl https://api.github.com/users/octocat | jq .
```

## Automating with a Script

Save multiple curl calls in a shell script (`test-api.sh`):

```bash
#!/bin/bash
curl -s https://api.example.com/health | jq .
curl -s -H "Authorization: Bearer $TOKEN" https://api.example.com/data | jq .
```

Run with:

```bash
bash test-api.sh
```

## Troubleshooting

:::tip[Common Issues]

**SSL certificate errors**

Use `-k` to ignore SSL warnings (not recommended in production):

```bash
curl -k https://self-signed.badssl.com/
```

**Debugging requests**
Use `-v` for verbose output:

```bash
curl -v https://api.example.com/data
```