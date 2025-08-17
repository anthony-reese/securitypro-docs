---
title: Real-time Price Feed
description: Subscribe to live prices over WebSocket.
sidebar:
  label: Real-time Price Feed
---

**TypeScript**
```ts
import WebSocket from "ws";

const ws = new WebSocket("wss://ws.securitypro.example/market");

ws.on("open", () => {
  ws.send(JSON.stringify({ op: "subscribe", channel: "ticker", symbol: "BTC-USD" }));
});

ws.on("message", (msg) => {
  const data = JSON.parse(msg.toString());
  if (data.channel === "ticker") console.log("price:", data.price);
});
```

**Python**
```py
import json, websocket

def on_open(ws):
    ws.send(json.dumps({"op":"subscribe","channel":"ticker","symbol":"BTC-USD"}))

def on_message(ws, message):
    data = json.loads(message)
    if data.get("channel") == "ticker":
        print("price:", data.get("price"))

ws = websocket.WebSocketApp("wss://ws.securitypro.example/market",
                            on_open=on_open, on_message=on_message)
ws.run_forever()
```

## Test Real-time Price Feed

```bash
# (REST) Get latest ticker for BTC-USD
curl -X GET "$API_BASE/v1/market/ticker?symbol=BTC-USD" \
  -H "X-API-Key: $API_KEY"
```
```
(WebSocket) Subscribe to live trades (example JSON frame)
Connect to: wss://api.example.com/market/ws
Then send:
{"op":"subscribe","channel":"trades","symbol":"BTC-USD","apiKey":"<API_KEY>"}
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