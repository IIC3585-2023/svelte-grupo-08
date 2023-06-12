<script>
	import '../../styles.css';
</script>

<h1>Guess The Shiny</h1>
<div class="app">
	<main>
		<div class="explanation"> 
			<h1>What Are Shiny Pokemon?</h1>
			<h2>Shiny Pokémon are rare variants of Pokémon that are differently colored than other Pokémon of their species. </h2>
			<h1>How To Play?</h1>
			<h2>You will be presented with two sprites for one pokemon</h2>
			<h2>Is up to you to determine wich of the two is the correct shiny sprite</h2>
		</div>

		<a href="/shiny"><button type='button'>Back</button></a>
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

	button{
		display: block;
  		margin-left: auto;
  		margin-right: auto;
		padding: 0px;
		text-align:center; 
		white-space: nowrap;
		overflow: hidden;
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

	h2 {
		color: #ffcc03;
  		font-size: large;
		text-shadow: rgb(42, 117, 187) 2px 0px 0px, rgb(42, 117, 187) 1.75517px 0.958851px 0px, rgb(42, 117, 187) 1.0806px 1.68294px 0px, rgb(42, 117, 187) 0.141474px 1.99499px 0px, rgb(42, 117, 187) -0.832294px 1.81859px 0px, rgb(42, 117, 187) -1.60229px 1.19694px 0px, rgb(42, 117, 187) -1.97998px 0.28224px 0px, rgb(42, 117, 187) -1.87291px -0.701566px 0px, rgb(42, 117, 187) -1.30729px -1.5136px 0px, rgb(42, 117, 187) -0.421592px -1.95506px 0px, rgb(42, 117, 187) 0.567324px -1.91785px 0px, rgb(42, 117, 187) 1.41734px -1.41108px 0px, rgb(42, 117, 187) 1.92034px -0.558831px 0px;
	}

	.explanation {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
