<script>
	import '../../styles.css';
	import normalIcon from '../../../lib/images/types/normal.png'
	import grassIcon from '../../../lib/images/types/grass.png'
	import fireIcon from '../../../lib/images/types/fire.png'
	import waterIcon from '../../../lib/images/types/water.png'
	import electricIcon from '../../../lib/images/types/electric.png'
	import rockIcon from '../../../lib/images/types/rock.png'
	import fightingIcon from '../../../lib/images/types/fighting.png'
	import psychicIcon from '../../../lib/images/types/psychic.png'
	import ghostIcon from '../../../lib/images/types/ghost.png'
	import poisionIcon from '../../../lib/images/types/poison.png'
	import flyingIcon from '../../../lib/images/types/flying.png'
	import groundIcon from '../../../lib/images/types/ground.png'
	import dragonIcon from '../../../lib/images/types/dragon.png'
	import iceIcon from '../../../lib/images/types/ice.png'
	import bugIcon from '../../../lib/images/types/bug.png'
	import steelIcon from '../../../lib/images/types/steel.png'
	import darkIcon from '../../../lib/images/types/dark.png'
	import fairyIcon from '../../../lib/images/types/fairy.png'
	import { onMount } from 'svelte';
	import Card from '../../../lib/components/TypeCard.svelte';
	import {typeScore, typeGames} from '../../store';
	
	const types = [
		{name: 'normal', icon: normalIcon},
		{name: 'grass', icon: grassIcon},
		{name: 'fire', icon: fireIcon },
		{name: 'water', icon: waterIcon },
		{name: 'electric', icon: electricIcon},
		{name: 'rock', icon: rockIcon },
		{name: 'fighting', icon: fightingIcon},
		{name: 'psychich', icon: psychicIcon},
		{name: 'ghost', icon: ghostIcon},
		{name: 'posion', icon: poisionIcon },
		{name: 'flying', icon: flyingIcon},
		{name: 'ground', icon: groundIcon},
		{name: 'dragon', icon: dragonIcon},
		{name: 'ice', icon: iceIcon},
		{name: 'bug', icon: bugIcon},
		{name: 'steel', icon: steelIcon},
		{name: 'dark', icon: darkIcon},
		{name: 'fairy', icon: fairyIcon}	,
	]

	let pokemon;
	let winner = false;
	let loser = false;
	let playing = true;

	let winning_type = ''

	const checkWin = (type) => {
		if (!playing) {
			return
		}

		playing = false;
		if (type == winning_type) {
			winner=true
			typeScore.update(o => {
      			o.n++;
      			return o;
    		});
			console.log("WINNER")
		} else {
			loser=true
			console.log("LOSER")
		}
		typeGames.update(o => {
      			o.n++;
      			return o;
    		});
	}

	onMount(() => {
		const number = Math.floor(Math.random() * (1010 - 1 + 1) + 1);
		fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  		.then(response => response.json())
		.then(data => {
			pokemon = data;
			winning_type = pokemon.types[0].type.name;
  		})
	})

</script>

<h1>Guess The Type</h1>
<div class="app">
	<main>
		<div class="container">
			{#if pokemon}
			<div>
				<Card pokemon={pokemon} />
			</div>
			{/if}

			{#if !pokemon}
				<h1> Loading...</h1>
			{/if}

			{#if playing}
				<div class="buttons-container">
					{#each types as type}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={() => {checkWin(type.name)}}>
							<img src={type.icon} alt={type.name} width="100"/>
						</div>
					{/each}
				</div>
			{/if}

			{#if !playing}
				
				{#each types as type}
					{#if type.name == winning_type}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div>
							<img src={type.icon} alt={type.name} width="200"/>
						</div>
					{/if}
				{/each}

				{#if winner}
					<h1>YOU WIN</h1>
				{/if}

				{#if loser}
					<h1> YOU LOSE</h1>
				{/if}
				<div class="game" >
					<a href='/type'><button type='button'> Play Again </button></a>
					<a href='/'><button type='button' > Home </button></a>
				</div>
			{/if}

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

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.buttons-container {
		display: flex;
		flex-wrap: wrap;
	}

	.buttons-container>*{
		flex: 15%;
		
	}
</style>
