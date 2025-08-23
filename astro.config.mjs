// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import linuxSidebar, { gettingStarted, guides } from './src/data/sidebar.js';

// https://securitypro-docs.netlify.app
export default defineConfig({
	site: 'https://securitypro-docs.netlify.app',
	integrations: [
		starlight({
			title: 'SecurityPro Docs',
			social: [{ icon: 'netlify', label: 'Netlify', href: 'https://securitypro-docs.netlify.app' }],
			sidebar: [
				{ label: 'Getting Started', items: gettingStarted.map(({ label, href }) => ({ label, link: href })) },
				{ label: 'Guides', items: guides.map(({ label, href }) => ({ label, link: href })) },
				{ label: 'API Reference', autogenerate: { directory: 'reference', collapsed: false } },
				...linuxSidebar
			],
		}),
	],
	vite: { resolve: { alias: { '@': '/src' } } },
});
