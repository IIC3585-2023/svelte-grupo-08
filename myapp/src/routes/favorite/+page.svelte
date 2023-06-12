<script>
	import '../styles.css';
	import { onMount } from "svelte";
    import {favoritePokemon} from '../store';
	import { get } from 'svelte/store';
    import Card from '../../lib/components/ShinyCard.svelte'


    let doYouHaveAFavorite = get(favoritePokemon).name !="none";
    console.log(doYouHaveAFavorite);

	let pokemon;
    let name = get(favoritePokemon).name;

    const BuildPokemon = ()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  		.then(response => response.json())
		.then(data => {
			pokemon = data;
  		})
          doYouHaveAFavorite=true;
          favoritePokemon.update(o => {
      			o.name = name;
				o.url = pokemon.sprites.front_default;
      			return o;
    		});
    }

	onMount(async () => {
		console.log("HOLA");
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  		.then(response => response.json())
		.then(data => {
			pokemon = data;

  		})
	})
</script>

<h1>Favorite Pokemon</h1>
<div class="app">
	<main>
        <div style="    margin-left: auto;
        margin-right: auto;">
            {#if !doYouHaveAFavorite}
            <h1> Pick Your Favorite Pokemon</h1>
            {/if}

            {#if pokemon && doYouHaveAFavorite}
            <div class='title' style="text-align:center"> {pokemon.name.toUpperCase()} </div>
            <div class="container">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div>
                    <Card pokemon={pokemon} shiny={false}/>
                </div>
            </div>
            {/if}
            {#if !pokemon && doYouHaveAFavorite}
            <div>
                <h1> LOADING...</h1>
            </div>
		{/if}
        </div>
		<!--
        <a href='/shiny/play'><button type='button'> Play </button></a>
		<a href='/shiny/about'><button type='button'> About </button></a>
        -->
        <input bind:value={name}>
        <div class="game">
            <a href=''><button type='button' on:click={() => BuildPokemon()}> Set </button></a>
		    <a href='/'><button type='button'> Home </button></a>
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

    .title{
        text-shadow: rgb(42, 117, 187) 2px 0px 0px, rgb(42, 117, 187) 1.75517px 0.958851px 0px, rgb(42, 117, 187) 1.0806px 1.68294px 0px, rgb(42, 117, 187) 0.141474px 1.99499px 0px, rgb(42, 117, 187) -0.832294px 1.81859px 0px, rgb(42, 117, 187) -1.60229px 1.19694px 0px, rgb(42, 117, 187) -1.97998px 0.28224px 0px, rgb(42, 117, 187) -1.87291px -0.701566px 0px, rgb(42, 117, 187) -1.30729px -1.5136px 0px, rgb(42, 117, 187) -0.421592px -1.95506px 0px, rgb(42, 117, 187) 0.567324px -1.91785px 0px, rgb(42, 117, 187) 1.41734px -1.41108px 0px, rgb(42, 117, 187) 1.92034px -0.558831px 0px;
        color: #ffcc03;
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

    input {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #ffcc03;
        border-color: rgb(42, 117, 187);
        border-width: 6px;
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