// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://moi.github.io',
  base: '/test2',
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
		routing: {
			prefixDefaultLocale: true, // /fr/... et /en/... — pas de racine ambiguë
		},
	},
});
