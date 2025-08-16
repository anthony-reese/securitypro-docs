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