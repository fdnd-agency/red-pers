<script>
    export let fontSizeBig;
    export let changeFontSizeFunction;
    let alertDialog;
    let alertMessage = "";

    function betterAlert(message) { 
        alertDialog.show()
        alertMessage = message;
        setTimeout(() => alertDialog.close(), 2000);
    }
    function share(event) {
        betterAlert("URL Gekopieërd!")
    }
</script>

<dialog bind:this={alertDialog}>
    {alertMessage}
</dialog>
<div class="article-tools">
    <button disabled class="listen"><img src="icons/play.svg" alt="Play">Artikel beluisteren</button>
    <ul>
        <li>
            <button disabled><img src="icons/vector2.svg" alt="Opslaan"></button>
        </li>
        <li>
            <button on:click={share}><img src="icons/vector.svg" alt="Delen"></button>
        </li>
        <li>
            <button on:click={changeFontSizeFunction} class:active={fontSizeBig}><img src="icons/light.svg" alt="Vergroot text"></button>
        </li>
    </ul>
</div>

<style>
    .listen {
        width: max-content;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .article-tools {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3em;
        margin-bottom: 2em;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.5em;
    }

    img {
        width: 1.5em;
        height: 1.5em;
        object-fit: contain;
    }

    button:enabled:hover, button.active {
        filter: invert(1);
        background-color: lightgray;
    }

    dialog {
        position: fixed;
        top: 140px;
        z-index: 6;
        color: white;
        background-color: black;
        border: none;
        padding: 0.5em 1em;
    }
</style>