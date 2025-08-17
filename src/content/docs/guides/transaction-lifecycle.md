---
title: Transaction Lifecycle
description: Visual walkthrough of a full flow from deposit to order execution to settlement.
sidebar:
  label: Transaction Lifecycle
  order: 40
---

This guide illustrates a typical end-to-end flow in SecurityPro: **deposit → order execution → settlement**.  
Use this to understand which systems interact and where your integration code runs.

## High-level sequence
![Transaction Lifecycle Sequence](/transaction-lifecycle-sequence.png)

**Notes**
- Webhooks notify you of state changes (`deposit.confirmed`, `order.filled`, `settlement.completed`).
- Polling endpoints (e.g., `/v1/orders/{id}`, `/v1/account/balances`) can be used as a fallback.

## State diagram (order)

![State Diagram](/state-diagram.png)

**Transitions**
- `Created → Rejected` when validation fails (insufficient funds, bad params).
- `Queued → Matched` when the engine finds a counterparty.
- `Partially Filled → Filled` when the remaining quantity executes.
- `Queued → Canceled` on user/API cancel.

**Related docs**
- Auth: [/concepts/authentication/](/concepts/authentication/)
- Rate Limits: [/concepts/rate-limits/](/concepts/rate-limits/)
- Errors: [/concepts/errors/](/concepts/errors/)
- Placing Orders: [/guides/placing-orders/](/guides/placing-orders/)
- Retrieving Balances: [/guides/retrieving-balances/](/guides/retrieving-balances/)
- Webhooks: [/concepts/webhooks/](/concepts/webhooks/)
