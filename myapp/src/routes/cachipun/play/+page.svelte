<script>
	import '../../styles.css';
    import Card from '../../../lib/components/CachipunCard.svelte'
	import CachipunCard from '../../../lib/components/CachipunCard.svelte';

    let playing = true;

    let played_type = ''
    let oponent_type = ''
    let result = ''

    const play = (type) => {
        playing = false
        played_type = type

        const oponent = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        if (oponent == 1) {
            oponent_type = 'grass';
            if (type == 'grass') {
                result = 'TIE'
            } else if (type == 'fire') {
                result = 'YOU LOSE'
            } else {
                result = 'YOU WIN'
            }
        } else if (oponent == 2) {
            oponent_type = 'fire'
            if (type == 'grass') {
                result = 'YOU WIN'
            } else if (type == 'fire') {
                result = 'TIE'
            } else {
                result = 'YOU LOSE'
            }
        } else {
            oponent_type = 'water'
            if (type == 'grass') {
                result = 'YOU LOSE'
            } else if (type == 'fire') {
                result = 'YOU WIN'
            } else {
                result = 'TIE'
            }
        }

        console.log("RESULT:", result)

    }
</script>

<h1>Cachipun</h1>
<div class="app">
	<main>
        {#if playing}
            <div class='container'>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => play('grass')}>
                <Card type='grass' />
                </div>
                <div class='botom-container'>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => play('fire')}>
                        <Card type='fire' />
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => play('water')}>
                        <Card type='water' />
                    </div>
                </div>
            </div>
        {/if}
        {#if !playing}
            <div class="result-container"> 
                <Card type={played_type} />
                <div class='result'> <h1> {result} </h1> </div>

                <Card type={oponent_type} />
            </div>
            <div class='result-footer'>
                <a href='/cachipun'><button type='button'> Play Again </button></a>
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

    .botom-container {
        display: flex;
    }

    .result-container {
        display: flex;
        justify-content: center;
    }

    .result-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .result {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
