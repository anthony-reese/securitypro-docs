---
title: Placing Orders
description: Submit market and limit orders via REST with idempotency.
sidebar:
  label: Placing Orders
  order: 2
---

## Create a market order

**TypeScript / JavaScript**
```ts
const body = { symbol: "BTC-USD", side: "buy", type: "market", size: "0.01" };

const res = await fetch(`${process.env.API_BASE}/v1/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": process.env.API_KEY!,
    "Idempotency-Key": crypto.randomUUID()
  },
  body: JSON.stringify(body)
});
console.log(await res.json());
```

**Python**
```py
import os, requests, uuid
API_BASE, API_KEY = os.getenv("API_BASE"), os.getenv("API_KEY")

payload = {"symbol":"BTC-USD","side":"buy","type":"market","size":"0.01"}
r = requests.post(f"{API_BASE}/v1/orders",
                  headers={"X-API-Key": API_KEY,
                           "Content-Type": "application/json",
                           "Idempotency-Key": str(uuid.uuid4())},
                  json=payload)
print(r.json())
```

