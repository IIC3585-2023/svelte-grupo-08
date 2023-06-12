<script>
	import './styles.css';
	import {shinyScore, cachipunScore, typeScore, shinyGames, typeGames, cachipunGames} from './store';
	import { get } from 'svelte/store';
	
	const shinyscore = get(shinyScore);
	const typescore = get(typeScore);
	const cachipunscore = get(cachipunScore);

	const shinygames = get(shinyGames);
	const typegames = get(typeGames);
	const cachipungames = get(cachipunGames);

	const shinyratio = CalculateRatio(shinyscore,shinygames);
	const typeratio = CalculateRatio(typescore,typegames);
	const cachipunratio = CalculateRatio(cachipunscore,cachipungames);

	function CalculateRatio(score,games){
		if (games.n==0){
			return 0;
		}
		return (score.n/games.n).toFixed(2);
	}
</script>

<h1>PokeAPP</h1>
<div class="app">
	<main>
		<div class="game">
			<div>
				<a href='/shiny'><button type='button'> Shiny </button></a>
			</div>
			<div>
				<h1>Shiny Score: {shinyscore.n}</h1>
				<h1>Shiny Win Ratio: {shinyratio}</h1>
			</div>
		</div>
		<div class="game">
			<div>
				<a href='/type'><button type='button'> Type </button></a>
			</div>
			<div>
				<h1>Type Score: {typescore.n}</h1>
				<h1>Type Win Ratio: {typeratio}</h1>
			</div>
		</div>
		<div class="game">
			<div>
				<a href='/cachipun'><button type='button' style="font-size: large;"> Cachipun </button></a>
			</div>
			<div>
				<h1>Cachipun Score: {cachipunscore.n}</h1>
				<h1>Cachipun Win Ratio: {cachipunratio}</h1>
			</div>
		</div>
		<div>
			<a href='/favorite'><button type='button'> Favorite </button></a>
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
		font-size: 100%;
	}

	.game{
		display: inline-flex;
		align-items: center;
		align-self: center;
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
		min-height: 10%;
		max-height: 30%;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
