---
title: Real-time Price Feed
description: This guide introduces the WebSocket API for streaming live market trades and tickers.
sidebar:
  label: Real-time Price Feed
---

## Overview
SecurityPro offers a WebSocket API for streaming live market prices and trades.

## Endpoint

- **URL (Prod):** `wss://api.securitypro.com/market/ws`
- **Auth:** API key in the subscribe frame (or query string if enabled by your org policy)

## Connect

```js
const ws = new WebSocket('wss://api.securitypro.com/market/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    op: "subscribe",
    channel: "trades",
    symbol: "BTC-USD",
    apiKey: process.env.API_KEY
  }));
};

ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  console.log(msg);
};

ws.onclose = () => {
  // TODO: reconnect with backoff (see below)
};
```

### TypeScript
```ts
import WebSocket from "ws";

const ws = new WebSocket("wss://api.securitypro.com/market/ws");

ws.on("open", () => {
  ws.send(JSON.stringify({ 
    op: "subscribe", 
    channel: "ticker", 
    symbol: "BTC-USD", 
    apiKey: process.env.API_KEY }));
});

ws.on("message", (msg) => {
  const data = JSON.parse(msg.toString());
  if (data.channel === "ticker") console.log("price:", data.price);
});
```

### Python
#### Synchronous Example
```py
import json, websocket

def on_open(ws):
    ws.send(json.dumps({
      "op":"subscribe",
      "channel":"ticker",
      "symbol":"BTC-USD",
      "apiKey": os.getenv("API_KEY") }))

def on_message(ws, message):
    data = json.loads(message)
    if data.get("channel") == "ticker":
        print("price:", data.get("price"))

ws = websocket.WebSocketApp("wss://api.securitypro.com/market/ws",
                            on_open=on_open, on_message=on_message)
ws.run_forever()
```

#### Asynchronous Example
```py
import asyncio, json, os, websockets

async def main():
    uri = "wss://api.securitypro.com/market/ws"
    async with websockets.connect(uri) as ws:
        await ws.send(json.dumps({
            "op": "subscribe",
            "channel": "trades",
            "symbol": "BTC-USD",
            "apiKey": os.getenv("API_KEY")
        }))
        async for raw in ws:
            msg = json.loads(raw)
            print(msg)

asyncio.run(main())
```

## Message Types

### Subscribe (client → server)
```json
{
  "op": "subscribe",
  "channel": "trades",
  "symbol": "BTC-USD",
  "apiKey": "<YOUR_API_KEY>"
}
```

### Trade event (server → client)
```json
{
  "type": "trade",
  "symbol": "BTC-USD",
  "price": "45000.12",
  "size": "0.002",
  "side": "buy",
  "ts": "2025-08-17T14:25:31.125Z"
}
```

### Ticker event (server → client)
```json
{
  "type": "ticker",
  "symbol": "BTC-USD",
  "bid": "44995.00",
  "ask": "45005.00",
  "price": "45000.12",
  "ts": "2025-08-17T14:25:31.125Z"
}
```

### Heartbeat
```json
{ "type": "heartbeat", "ts": "2025-08-17T14:25:32.000Z" }
```
Send a **pong** if required by your org policy:
```json
{ "type": "pong", "ts": "2025-08-17T14:25:32.100Z" }
```

## Reconnect & Backoff
If the socket closes, reconnect with exponential backoff (jitter recommended):
```js
let ws;
let delay = 1000;

function connect() {
  ws = new WebSocket('wss://api.securitypro.com/market/ws');

  ws.onopen = () => {
    delay = 1000;
    ws.send(JSON.stringify({
      op: "subscribe",
      channel: "trades",
      symbol: "BTC-USD",
      apiKey: process.env.API_KEY
    }));
  };

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    console.log(msg);
  };

  ws.onclose = () => {
    const jitter = Math.floor(Math.random() * 250);
    setTimeout(connect, delay + jitter);
    delay = Math.min(delay * 2, 30000);
  };

  ws.onerror = () => ws.close();
}

connect();
```

## Test Real-time Price Feed

```bash
# WebSocket quick test (requires wscat: npm i -g wscat)
wscat -c wss://api.securitypro.com/market/ws
# then paste:
# {"op":"subscribe","channel":"trades","symbol":"BTC-USD","apiKey":"<API_KEY>"}
curl -X GET "$API_BASE/v1/market/ticker?symbol=BTC-USD" \
  -H "X-API-Key: $API_KEY"
```

▶️ [Download Postman Collection](/securitypro.postman_collection.json)

**Tip**: For WS, handle heartbeats and reconnect with backoff.\
For high-throughput feeds, batch updates before UI render.

### Verify

- REST returns `{ "symbol": "BTC-USD", "price": "…", "ts": "…" }`  
- WS delivers continuous trade/ticker messages  
- Example frame:
  ```json
  { "channel": "trades", "symbol": "BTC-USD", "price": "45000.12", "size": "0.005", "side": "buy" }
  ```