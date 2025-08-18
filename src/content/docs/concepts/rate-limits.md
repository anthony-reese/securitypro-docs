---
title: Rate Limits
description: This guide outlines essential limits, headers, and backoff strategies.
sidebar:
  label: Rate Limits
  order: 12
---

To ensure fair usage, the API enforces the following rate limits:

- **Standard Plan**: 100 requests per minute
- **Pro Plan**: 1000 requests per minute

Exceeding these limits will result in a `429 Too Many Requests` response.
