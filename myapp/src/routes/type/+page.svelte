<script>
	import '../styles.css';
	
</script>

<h1>PokeAPP</h1>
<div class="app">
	<main>
		<a href='/shiny'><button type='button'> HOLA </button></a>
		<a href='/type'><button type='button'> HOLA </button></a>
		<a href='/cachipun'><button type='button'> HOLA </button></a>
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
