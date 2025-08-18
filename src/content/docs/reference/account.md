---
title: Account
description: This guide explains account and balances endpoints.
---

### GET /v1/account/balances
Return balances and available funds.

**Response (200)**
```json
[
  { "asset": "USD", "total": "1000.00", "available": "800.00" },
  { "asset": "BTC", "total": "0.050", "available": "0.050" }
]