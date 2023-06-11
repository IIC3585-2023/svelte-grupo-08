<script>
	import { onMount } from "svelte";
    export let type;
    let number;
    export let pokemon;

    onMount(() => {
        if (type == 'grass') {
            number = 1
        } else if (type == 'fire') {
            number = 4
        } else if (type == 'water') {
            number = 7
        }

        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  		.then(response => response.json())
		.then(data => {
			pokemon = data;
        })
    })

</script>

<div class='card'> 
    {#if pokemon}
        <img src={pokemon.sprites.front_default} alt='sprite'/>
    {/if}
</div>

<style>
    .card {
        background-color: aliceblue;
        width: 10rem;
        height: 15rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        vertical-align: text-top;
        text-align: center;
        margin: 24px;
    }
</style>