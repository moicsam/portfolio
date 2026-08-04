// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://moicsam.github.io',
  base: '/portfolio',
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
		routing: {
			prefixDefaultLocale: true, // /fr/... et /en/... — pas de racine ambiguë
		},
	},
});
