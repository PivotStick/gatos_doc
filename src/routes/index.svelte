<script>
	import Code from '$lib/components/Code.svelte';
	import { lang } from '$lib/langs';
</script>

<section>
	<div>
		<h1>{$lang.app_name}.</h1>
		<Code src={$lang.codes.overview} />
	</div>
</section>

<section>
	<p>Coucou :)</p>
</section>

<style lang="scss">
	section {
		min-height: 100vh;
		padding: 3em 25vw;

		&:first-child {
			h1 {
				font-size: 6em;
				font-weight: 900;
				letter-spacing: 0.25em;
				text-transform: uppercase;
			}

			p {
				font-size: 1em;
				font-weight: 100;
				text-align: end;
				text-transform: lowercase;
			}

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
