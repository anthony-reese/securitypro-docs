---
title: Placing Orders
description: This guide shows how to submit market and limit orders via REST with idempotency.
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

## Test Placing Orders

```bash
# Create a market order (BTC-USD)
curl -X POST "$API_BASE/v1/orders" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $API_KEY" \
  -d '{
    "symbol": "BTC-USD",
    "side": "buy",
    "type": "market",
    "quantity": "0.01",
    "client_order_id": "demo-$(date +%s)"
  }'
  ```

:::tip[📥 Download]

<a href="/securitypro.postman_collection.json"
   download="securitypro.postman.json"
   class="button-link">
  Download Postman Collection
</a>

:::

**Tip**: Replace `$API_BASE` and `$API_KEY` with your environment values. \
Check fills with `GET /v1/orders/{order_id}` or listen for the `order.filled` webhook.

### Verify

- `202 Accepted` → order accepted into the matching engine  
- `200 OK` with `{ "order_id": "...", "status": "filled" | "partial" }`  
- Webhook `order.filled` confirms settlement flow
