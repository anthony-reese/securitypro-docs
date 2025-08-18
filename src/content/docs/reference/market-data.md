---
title: Market Data
description: This guide provides code samples for tickers, order books, and recent trades.
sidebar:
  label: Market Data
---

## GET /v1/market/ticker
Return the latest price and 24h stats for a symbol.

**Query params**
- `symbol` (string, required) — e.g., `BTC-USD`

**Response (200)**
```json
{
  "symbol": "BTC-USD",
  "price": "67350.42",
  "open_24h": "66120.13",
  "high_24h": "67800.00",
  "low_24h": "65010.20",
  "volume_24h": "2150.45",
  "timestamp": "2025-08-17T13:14:15Z"
}
```

## GET /v1/market/orderbook
Return aggregated bids/asks.

**Query params**
- `symbol` (string, required)
- `depth` (integer, optional, default `50`) — number of price levels per side

**Response (200)**
```json
{
  "symbol": "BTC-USD",
  "bids": [["67340.00","0.210"], ["67339.50","0.120"]],
  "asks": [["67351.00","0.180"], ["67352.25","0.095"]],
  "timestamp": "2025-08-17T13:14:15Z"
}
```

## GET /v1/market/trades
Return recent trades for a symbol (most recent first).

**Query params**
- `symbol` (string, required)
- `limit` (integer, optional, default `100`, max `1000`)

**Response (200)**
```json
[
  {
    "trade_id": "t_8934234",
    "symbol": "BTC-USD",
    "side": "buy",
    "price": "67348.90",
    "size": "0.004",
    "timestamp": "2025-08-17T13:14:10Z"
  }
]
```

**Notes**
- All endpoints require the `X-API-Key` header.
- Timestamps are ISO 8601 in UTC.
- See [Rate Limits](/concepts/rate-limits/) and [Error](/concepts/errors).