<script>
	import './styles.css';
	import {shinyScore, cachipunScore, typeScore} from './store';
	import { get } from 'svelte/store';
	
	const shinyscore = get(shinyScore);
	const typescore = get(typeScore);
	const cachipunscore = get(cachipunScore);
</script>

<h1>PokeAPP</h1>
<div class="app">
	<main>
		<div>
			<a href='/shiny'><button type='button'> Shiny </button></a>
			<h1>Shiny Score: {shinyscore.n}</h1>
		</div>
		<div>
			<a href='/type'><button type='button'> Type </button></a>
			<h1>Type Score: {typescore.n}</h1>
		</div>
		<div>
			<a href='/cachipun'><button type='button'> Cachipun </button></a>
			<h1>Cachipun Score: {cachipunscore.n}</h1>
		</div>
	</main>

	<footer>
		<p>by grupo 8</p>
	</footer>
</div>

<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.game{
		display: inline-flex;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
