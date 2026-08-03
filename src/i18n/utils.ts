import { ui, defaultLang, languages } from './ui';

export type Lang = keyof typeof ui;

/** Extract the language from a URL, e.g. /en/work/ -> "en" */
export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

/** Returns a `t(key)` translation function bound to a given language. */
export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/** Prefix a path with the given language, e.g. ("work/", "en") -> "/en/work/" */
export function localizePath(path: string, lang: Lang) {
	const cleanPath = path.replace(/^\/+/, '');
	return `/${lang}/${cleanPath}`;
}

/**
 * Given the current URL and a target language, return the equivalent path
 * in that language by swapping the leading /xx/ segment.
 */
export function getLocalizedAlternate(url: URL, targetLang: Lang) {
	const parts = url.pathname.split('/').filter(Boolean);
	if (parts[0] in ui) {
		parts[0] = targetLang;
	} else {
		parts.unshift(targetLang);
	}
	return '/' + parts.join('/') + '/';
}

export { languages };
