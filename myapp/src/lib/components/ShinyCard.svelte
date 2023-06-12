<script>
    export let pokemon;
    export let shiny;

</script>

<div class="card"> 
    <img src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt='sprite'/>
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