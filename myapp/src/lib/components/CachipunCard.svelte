<script>
	import { onMount } from "svelte";
    import FireIcon from '../images/types/fire.png'
    import WaterIcon from '../images/types/water.png'
    import GrassIcon from '../images/types/grass.png'

    export let type;
    let number;
    let pokemon;
    let icon;

    onMount(() => {
        if (type == 'grass') {
            number = 1 
            icon = GrassIcon;
        } else if (type == 'fire') {
            number = 4
            icon = FireIcon;
        } else if (type == 'water') {
            number = 7
            icon = WaterIcon;
        }

        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  		.then(response => response.json())
		.then(data => {
			pokemon = data;
        })
    })

</script>

<div class='card' id={`${type}`}> 
    {#if pokemon}
        <img src={pokemon.sprites.front_default} alt='sprite'/>
        <img src={icon} alt={`${type}`} width="100" />
    {/if}
</div>

<style>
    .card {
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

    #fire {
        background-color: lightsalmon;
    }

    #water {
        background-color: lightblue;
    }

    #grass {
        background-color: lightgreen;
    }
</style>