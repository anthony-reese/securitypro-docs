---
title: Quickstart
description: Create an API key, set environment variables, and make your first request.
sidebar:
  label: Quickstart
  order: 2
---

## 1) Create an API key
- Sign in to the dashboard
- Create a key and copy the value (store securely)

## 2) Set environment variables
```bash
# Linux/Mac
export API_BASE="https://api.securitypro.example"
export API_KEY="sk_live_***"

# Windows PowerShell
$env:API_BASE="https://api.securitypro.example"
$env:API_KEY="sk_live_***"
```

## 3) Make your first call

**TypeScript / JavaScript**
```ts
const res = await fetch(`${process.env.API_BASE}/v1/account/balances`, {
  headers: { 'X-API-Key': process.env.API_KEY! }
});
const data = await res.json();
console.log(data);
```

**Python**
```py
import os, requests
API_BASE = os.getenv("API_BASE")
API_KEY = os.getenv("API_KEY")

r = requests.get(f"{API_BASE}/v1/account/balances",
                 headers={"X-API-Key": API_KEY})
print(r.json())
```