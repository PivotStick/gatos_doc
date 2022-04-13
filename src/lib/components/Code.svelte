<script>
	import H from 'highlight.js';

	export let src = '';
	export let lang = 'javascript';

	$: result = H.highlight(lang, src);
</script>

<code>
	{@html result.value}
</code>

<style global lang="scss">
	code {
		padding: 1em;
		border-radius: 0.5em;
		background-color: #1e1e1e;
		color: #d4d4d4;
		display: block;
		font-family: 'Consolas', monospace;
		white-space: pre-wrap;

		.hljs- {
			&keyword {
				color: #569cd6;
			}

			&comment {
				color: #6a9955;
			}

			&title.class_ {
				color: #4ec9b0;
			}

			&property {
				color: #9cdcfe;
			}

			&string {
				color: #ce9178;
			}

			&number {
				color: #b5cea8;
			}

			&built_in,
			&title.function_ {
				color: #dcdcaa;
			}
		}
	}
</style>
