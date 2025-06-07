---
title: Endpoints Directory
description: Full list of SecurityPro API endpoints.
---

## Authentication

### `GET /oauth2/authorize`
Redirect user to authorize access.

### `POST /oauth2/token`
Exchange auth code or refresh token for access token.

### `GET /me`
Get current authenticated user.

---

## Users

### `POST /users`
Create a new user.

### `GET /users/{user_id}`
Get user by ID.

### `PATCH /users/{user_id}`
Update user.

### `DELETE /users/{user_id}`
Delete user.

---

## Roles

### `GET /roles`
Get all roles.

### `POST /users/{user_id}/roles`
Assign role to user.
