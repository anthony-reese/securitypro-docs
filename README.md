# SecurityPro Docs

**SecurityPro Docs** is a developer documentation site for the SecurityPro API. The documentation provides guides, reference materials, and code examples to help developers integrate authentication, webhooks, rate limits, and more.

Built with [Astro Starlight](https://docs.astro.build/en/guides/starlight/), the site supports dark/light mode, sidebar navigation, and Markdown content management.

## Features

- Clean and responsive design
- Dark/light mode toggle
- Sidebar with grouped sections
- Search functionality
- Markdown-based content
- Easy deployment with Netlify or GitHub Pages

## Project Structure
```
securitypro-docs/
├── src/
│ └── content/docs/
│ ├── authentication.md
│ ├── endpoints.md
│ ├── examples.md
│ ├── rate-limits.md
│ ├── errors.md
│ ├── webhooks.md
│ └── reference/
├── public/
├── astro.config.mjs
├── package.json
└── README.md
```

## Installation

```bash
npm install
```
## Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view locally.

## Deploy

Deploy to Netlify or GitHub Pages. You can configure the base site URL in `astro.config.mjs`.

Example:

```ts
site: 'https://securitypro-docs.netlify.app',
```

## License

[MIT](https://mit-license.org)