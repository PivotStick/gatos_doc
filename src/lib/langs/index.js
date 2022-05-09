import { session } from '$app/stores';
import { derived } from 'svelte/store';
import fr from './fr.json';
import en from './en.json';

export const langs = { fr, en };

export const lang = derived(session, ($session) => {
	if ($session.lang in langs) {
		return langs[$session.lang];
	} else {
		const lang = $session.lang.split('-')[0];
		return langs[lang] || langs.fr;
	}
});
