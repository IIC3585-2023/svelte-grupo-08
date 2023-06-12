<script>
	import '../../styles.css';
	import { onMount } from "svelte";
	import Card from '../../../lib/components/ShinyCard.svelte'
	
	import {shinyScore, shinyGames} from '../../store';

	let pokemon;
	let shiny;

	let winner = false;
	let loser = false;

	const checkWin = (number) => {
		if (winner || loser) {
			return
		}

		if (shiny == number) {
			shinyScore.update(o => {
      			o.n++;
      			return o;
    		});
			winner = true
		} else {
			loser = true
		}
		shinyGames.update(o => {
      			o.n++;
      			return o;
    		});
	}

	onMount(async () => {
        const number = Math.floor(Math.random() * (905 - 1 + 1) + 1);
		shiny = Math.floor(Math.random() * (2 - 1 + 1) + 1);
		fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  		.then(response => response.json())
		.then(data => {
			pokemon = data;

  		})
	})
</script>

<h1>Guess The Shiny</h1>
<div class="app">
	<main>
		{#if pokemon}
		<div class='title'> {pokemon.name.toUpperCase()} </div>
		<div class="container">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={() => checkWin(2)}>
				<Card pokemon={pokemon} shiny={shiny == 2}/>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={() => checkWin(1)}>
				<Card pokemon={pokemon} shiny={shiny == 1}/>
			</div>
		</div>
		{/if}
		{#if !pokemon}
		<div>
			<h1> LOADING...</h1>
		</div>
		{/if}
		{#if winner}
			<h1> WINNER </h1>
			<div class="game">
				<a href='/shiny'><button type='button'> Play Again </button></a>
				<a href='/'><button type='button' > Home </button></a>
			</div>
		{/if}
		{#if loser}
			<h1> LOSER </h1>
			<div class="game">
				<a href='/shiny'><button type='button'> Play Again </button></a>
				<a href='/'><button type='button' > Home </button></a>
			</div>
		{/if}
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
		align-items: center;
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

	.container {
		display: flex;
		justify-content: space-between;
		max-width: 500px;
	}

	.title {
		display: flex;
		justify-content: center;
		color: #ffcc03;
  		font-size: xx-large;
		text-shadow: rgb(42, 117, 187) 2px 0px 0px, rgb(42, 117, 187) 1.75517px 0.958851px 0px, rgb(42, 117, 187) 1.0806px 1.68294px 0px, rgb(42, 117, 187) 0.141474px 1.99499px 0px, rgb(42, 117, 187) -0.832294px 1.81859px 0px, rgb(42, 117, 187) -1.60229px 1.19694px 0px, rgb(42, 117, 187) -1.97998px 0.28224px 0px, rgb(42, 117, 187) -1.87291px -0.701566px 0px, rgb(42, 117, 187) -1.30729px -1.5136px 0px, rgb(42, 117, 187) -0.421592px -1.95506px 0px, rgb(42, 117, 187) 0.567324px -1.91785px 0px, rgb(42, 117, 187) 1.41734px -1.41108px 0px, rgb(42, 117, 187) 1.92034px -0.558831px 0px;
	}
</style>
