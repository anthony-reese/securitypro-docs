---
title: Code Examples
description: Practical examples of using the SecurityPro API.
---

## Creating a User

```bash
curl -X POST https://api.securitypro.com/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
