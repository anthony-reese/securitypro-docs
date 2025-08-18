---
title: Orders
description: This guide shows how to create and manage orders.
---

### POST /v1/orders
Create a new order.

**Request body**
```json
{
  "symbol": "BTC-USD",
  "side": "buy",
  "type": "market",
  "size": "0.01"
}
```

**Response (201)**
```json
{
  "id": "ord_123",
  "status": "filled",
  "filled_size": "0.01"
}
```