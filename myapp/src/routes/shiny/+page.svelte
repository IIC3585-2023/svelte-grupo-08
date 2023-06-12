<script>
	import '../styles.css';
	import { onMount } from "svelte";

	onMount(async () => {
		console.log("HOLA")
	})
</script>

<h1>Guess The Shiny</h1>
<div class="app">
	<main style="align-items:center">
		<a href='/shiny/play'><button type='button'> Play </button></a>
		<a href='/shiny/about'><button type='button'> About </button></a>
		<a href='/'><button type='button'> Home </button></a>
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
