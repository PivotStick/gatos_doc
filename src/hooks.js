/**
 * @type {import("@sveltejs/kit").GetSession}
 */
export const getSession = async ({ request }) => {
	const languages = request.headers.get('accept-language');

	return {
		lang: /[^,;]+/.exec(languages)[0]
	};
};
