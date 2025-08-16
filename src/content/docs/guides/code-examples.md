---
title: Code Examples
description: TypeScript and Python snippets for common tasks.
sidebar:
  label: Code Examples
  order: 1
---

## Creating a User

```bash
curl -X POST https://api.securitypro.com/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
