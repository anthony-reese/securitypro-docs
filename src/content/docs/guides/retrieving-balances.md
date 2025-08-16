---
title: Retrieving Balances
description: Fetch account balances and available funds.
sidebar:
  label: Retrieving Balances
---

**TypeScript / JavaScript**
```ts
const res = await fetch(`${process.env.API_BASE}/v1/account/balances`, {
  headers: { "X-API-Key": process.env.API_KEY! }
});
console.log(await res.json());
```

**Python**
```py
import os, requests
API_BASE, API_KEY = os.getenv("API_BASE"), os.getenv("API_KEY")
r = requests.get(f"{API_BASE}/v1/account/balances",
                 headers={"X-API-Key": API_KEY})
print(r.json())
```