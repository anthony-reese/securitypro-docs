---
title: Sample Responses
description: Typical JSON/XML payloads and fields.
sidebar:
  label: Responses
  order: 99
---

Get a better understanding of what to expect from API calls.

---

## Successful Responses

These responses indicate that the request was processed correctly. 

<details>
<summary>POST /users → 201 Created</summary>

```json
{
  "id": "user_12345",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "role": "admin",
  "created_at": "2025-06-07T15:34:12Z"
}
```
</details>

<details> 
<summary>POST /oauth2/token → 200 OK</summary>

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "def50200e8d8...",
  "scope": "read write"
}
```
</details>

## Error Responses

These indicate issues such as invalid requests or missing data.

<details> 
<summary>GET /users/{id} → 404 Not Found</summary>

```json
{
  "error": "User not found",
  "code": 404,
  "message": "The requested user ID does not exist."
}
```
</details>

<details> 
<summary>POST /users → 400 Bad Request</summary>

```json
{
  "error": "Missing required field: email",
  "code": 400,
  "message": "The 'email' field is required to create a new user."
}
```
</details>

## Webhook Payloads

<details> 
<summary>user.created Event</summary>

These payloads are sent to your configured webhook endpoint when key events occur, such as new user creation or token revocation. Use these to trigger workflows or sync with external systems.

```json
{
  "event": "user.created",
  "timestamp": "2025-06-07T16:10:45Z",
  "data": {
    "id": "user_67890",
    "email": "new.user@example.com",
    "name": "New User"
  }
}
```
</details>

<details> 
<summary>user.created Event</summary>

```json
{
  "event": "token.revoked",
  "timestamp": "2025-06-07T17:42:30Z",
  "data": {
    "user_id": "user_12345",
    "token_id": "token_xyz987"
  }
}
```
</details>