<script>
    import Dialog from "$lib/Atoms/Dialog.svelte";
</script>

<Dialog>
    <div slot="button" class="open-button">Nieuwsbrief</div>
    <article slot="content" class="popup">
        <h2>Nieuwsbrief</h2>
        <p>
            Elke drie weken houden we je op de hoogte van wat we schreven en wat we 
            lazen in de Red Pers-nieuwsbrief.
        </p>
        <button class="subscribe-btn">Schrijf je hier in!</button>
    </article>
</Dialog>

<style>
    .open-button {
        cursor: pointer;
        display: block;
        transition: all ease-in-out 500ms;
    }

    .open-button:hover{
        transform: scale(1.1);
        text-decoration: underline;
    }

    article.popup {
        padding: 4rem;
        max-width: 500px;
    }

    .popup h2 {
        font-size: 3.2rem;
        margin: 0.2rem 0.2rem;
        text-align: left;
        margin-bottom: 2rem;
        font-family: 'Source serif 4';
    }

    .popup p {
        margin-bottom: 1rem;
        color: var(--alt-text-color);
        font-size: 1rem;
        line-height: 1.2;
        letter-spacing: 0.02em;
    }

    .subscribe-btn {
        background-color: var(--text-color);
        color: var(--paper-color);
        padding: 1rem 1.5rem;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 1.2rem;
        width: 100%;
        border-radius: 2px;
        transition: background-color 0.3s ease;
    }

    .subscribe-btn:hover {
        background-color: var(--accent-color1);
    }
</style>