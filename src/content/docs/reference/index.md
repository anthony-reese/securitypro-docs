---
title: API Reference
description: REST endpoints for trading, accounts, and market data.
sidebar:
  label: API Reference
---

The SecurityPro API provides REST endpoints for core trading and account functionality.  
Use this section to find detailed specifications for each resource:

## Resources

- **[Account](./account/)** – Retrieve balances, account details, and positions.  
- **[Orders](./orders/)** – Place, cancel, and list orders.  
- **[Market Data](./market-data/)** – Get tickers, order books, and recent trades.  
- **[Webhooks](../concepts/webhooks/)** – Subscribe to asynchronous events.

## Response Format
- All endpoints return **JSON**.  
- Successful responses include `200`-level status codes.  
- Errors return an [error object](../concepts/errors/) with `code`, `message`, and optional `details`.

---

> 💡 **Tip:** For a quickstart example of using the reference, see the [Guides](../guides/code-examples/).