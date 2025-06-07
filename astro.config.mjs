// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://securitypro-docs.netlify.app
export default defineConfig({
	site: 'https://securitypro-docs.netlify.app',
	integrations: [
		starlight({
			title: 'SecurityPro Docs',
			social: [{ icon: 'netlify', label: 'Netlify', href: 'https://securitypro-docs.netlify.app' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Authentication', link: '/authentication' },
            			{ label: 'API Endpoints Overview', link: '/endpoints' },
            			{ label: 'Code Examples', link: '/examples' },
            			{ label: 'Rate Limits', link: '/rate-limits' },
						{ label: 'Error Handling', link: '/errors' },
					],
				},
				{
					label: 'Advanced',
					items: [
      					{ label: 'Webhooks', link: '/webhooks' },
					],
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
