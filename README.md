# SecurityPro Docs

**SecurityPro Docs** is a developer documentation site for the SecurityPro API. It provides guides, reference, and runnable examples to help developers integrate authentication, webhooks, rate limits, and more.

Built with **[Astro Starlight](https://docs.astro.build/en/guides/starlight/)**, the site includes dark/light mode, full-text search, sidebar navigation, and Markdown/MDX authoring.

---

## Features
- Docs-as-code (Markdown/MDX, Git)
- Grouped sidebar & search
- Dark/light theme
- Runnable cURL & code samples (TS/Python)
- OpenAPI & Postman artifacts
- Easy deploy to Netlify/GitHub Pages

---

## Project Structure

```
securitypro-docs/
├── public/
│ ├── favicon.ico
│ ├── openapi.yaml
│ ├── redoc.html
│ ├── securitypro.postman_collection.json
│ ├── state-diagram.png
│ ├── transaction-lifecycle-sequence.png
├── src/
│ ├── content/
│ │ ├── docs/
│ │ │ ├── 404.md
│ │ │ ├── concepts/
│ │ │ │ ├── authentication.md
│ │ │ │ ├── endpoints-overview.md
│ │ │ │ ├── errors.md
│ │ │ │ ├── rate-limits.md
│ │ │ │ ├── responses.md
│ │ │ │ ├── webhooks.md
│ │ │ ├── getting-started.md
│ │ │ ├── guides/
│ │ │ │ ├── code-examples.md
│ │ │ │ ├── placing-orders.md
│ │ │ │ ├── realtime-price-feed.md
│ │ │ │ ├── retrieving-balances.md
│ │ │ │ ├── transaction-lifecycle.md
│ │ │ ├── index.mdx
│ │ │ ├── reference/
│ │ │ │ ├── account.md
│ │ │ │ ├── index.mdx
│ │ │ │ ├── market-data.md
│ │ │ │ ├── orders.md
│ │ │ │ ├── reference.md
│ ├── data/
│ │ └── sidebar.js
├── astro.config.mjs
├── package.json
└── README.md
```

## Local Development

```bash
npm install

npm run dev

# => http://localhost:4321
```

If you need LAN access: `npm run dev -- --host`

## Build & Deploy

```bash
npm run build
```

- **Netlify**: push main → auto-deploy, or drag-and-drop `dist/`.

- **GitHub Pages**: set `site` in `astro.config.mjs`, then publish the `dist/` output.


```ts
export default defineConfig({
  site: 'https://securitypro-docs.netlify.app',
});
```

## Authoring Notes

- **Guides & Concepts**: add Markdown in `src/content/docs/guides` or `concepts`.

- **Reference**: add per-resource pages in `src/content/docs/reference` and keep `openapi.yaml` in `public/` for Redoc/Swagger tooling.

- **Postman**: update `public/securitypro.postman_collection.json` to match new/changed endpoints.

- **Images/Diagrams**: place under `public/` and reference with absolute paths (e.g. `/state-diagram.png`).

## Adding a New Endpoint (Quick Checklist)

1. Update `public/openapi.yaml` (paths, schemas, examples).

2. Add or edit a reference page (e.g., `src/content/docs/reference/orders.md`).

3. Add a guide snippet under `guides/` if the endpoint benefits from a tutorial.

4. Add cURL + TS/Python samples and, if applicable, a webhook or WS example.

5. Update Postman collection and verify authentication headers.

## License

[MIT](https://mit-license.org)