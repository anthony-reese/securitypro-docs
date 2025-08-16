---
title: Authentication
description: API keys and OAuth 2.0 options.
sidebar:
  label: Authentication
  order: 10
---

SecurityPro API uses API keys to authenticate requests. You can obtain your API key from your dashboard.

### API Key

Include your API key in the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY
```
**Example:**
```
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.example.com/users
```

## OAuth 2.0

1. Redirect user to `/oauth2/authorize`.
2. Exchange code at `/oauth2/token` for access token.
3. Use token to access secured resources.

## JSON Web Tokens (JWT)

SecurityPro supports JWT for stateless authentication in advanced integrations.