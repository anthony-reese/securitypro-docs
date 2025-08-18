---
title: Retrieving Balances
description: This guide shows how to fetch account balances and available funds.
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

## Test Retrieving Balances

```bash
# Get account balances
curl -X GET "$API_BASE/v1/account/balances" \
  -H "X-API-Key: $API_KEY"
```

:::tip[📥 Download]

<a href="/securitypro.postman_collection.json"
   download="securitypro.postman.json"
   class="button-link">
  Download Postman Collection
</a>

:::

**Tip**: Expect a list of assets with `available`, `hold`, and `total`.\
Use `X-Request-Id` in headers to trace calls in logs.

### Verify

- `200 OK` with a JSON list of assets  
- Example:
  ```json
  [
    { "asset": "USD", "available": "1000.00", "hold": "0", "total": "1000.00" },
    { "asset": "BTC", "available": "0.05", "hold": "0.01", "total": "0.06" }
  ]
  ```