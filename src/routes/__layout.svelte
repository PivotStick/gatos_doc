<svelte:head>
	<title>Gatos Doc</title>
</svelte:head>

<slot />

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	@font-face {
		font-family: 'Consolas';
		src: url('/fonts/Concolas.tff');
	}

	:root {
		font-family: 'Rubik', sans-serif;
	}

	*,
	*::before,
	*::after {
		padding: 0;
		margin: 0;

		box-sizing: border-box;

		transition: none cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;
	}

	h1 {
		font-family: 'Bebas Neue', sans-serif;
	}
</style>
