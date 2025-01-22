<script>
    export let changeFontSizeFunction;

    function betterAlert(message) { 
        alertDialog.show()
        alertMessage.innerText = message;
        setTimeout(() => alertDialog.close(), 2000);
    }
    function share(event) {
        if (navigator.share) { 
            navigator.share({url: window.top.location});
        } else {
            navigator.clipboard.writeText(window.top.location);
            betterAlert("URL Gekopieërd!")
        }
    }
</script>

<div class="article-tools">
    <button class="listen"><img src="icons/play.svg" alt="Play">Artikel beluisteren</button>
    <ul>
        <li>
            <button><img src="icons/vector2.svg" alt="Opslaan"></button>
        </li>
        <li>
            <button on:click={share}><img src="icons/vector.svg" alt="Delen"></button>
        </li>
        <li>
            <button on:click={changeFontSizeFunction}><img src="icons/light.svg" alt="Vergroot text"></button>
        </li>
    </ul>
</div>

<style>
    .listen {
        width: max-content;
        color: var(--text-color);
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

    button {
        width: 2.5em;
        height: 2.5em;
        background-color: lightgray;
        padding: 0.5em;
    }

    button:hover {
        filter: invert(1);
        transition: var(--hover);
    }

    img {
        width: 1.5em;
        height: 1.5em;
        object-fit: contain;
    }
</style>