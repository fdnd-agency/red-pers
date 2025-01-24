<script>
    import Dialog from "$lib/Atoms/Dialog.svelte";
</script>

<Dialog>
    <div slot="button" class="donation-button">Doneren</div>
    <article class="popup" slot="content">
        <h2>Doneren</h2>
        <p>Wij bieden jonge, aspirerende journalisten een podium en begeleiding. Dat kunnen we nog beter met jouw steun. Die steun komt met twee voor de prijs van een, want onze sponsor matcht jouw donatie. Geef jij ons vijf euro? Dan ontvangen wij een tientje.</p>
        <fieldset>
            <div class="amount-options">
                <label for="amount-10">
                    <input type="radio" id="amount-10" name="donation" value="10">
                    €10
                </label>
                <label for="amount-25">
                    <input type="radio" id="amount-25" name="donation" value="25">
                    €25
                </label>
                <label for="amount-50">
                    <input type="radio" id="amount-50" name="donation" value="50">
                    €50
                </label>
            </div>
            <label for="amount-other" class="other">
                <input type="radio" id="amount-other" name="donation" value="other"> Ander bedrag:
            </label>
        </fieldset>
    </article>
</Dialog>

<style>
    .donation-button {
        background-color: var(--accent-color1);
        border-radius: 0.125em; 
        color: var(--background-color);
        cursor: pointer;
        padding: 0.5em 0.75em; 
    }

    .donation-button:hover {
        animation: pulse 1s infinite;
        animation-timing-function: linear;
    }
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    article.popup {
        padding: 4rem;
        max-width: 31.25em;
    }

    h2 {
        font-size: 3.2rem;
        margin: 0.2rem 0.2rem;
        text-align: left;
        margin-bottom: 2rem;
        font-family: 'Source serif 4';
    }

    p {
        margin-bottom: 1rem;
        color: var(--alt-text-color);
        font-size: 1rem;
        line-height: 1.2;
        letter-spacing: 0.02em;
    }

    fieldset {
        all: unset;
    }

    .amount-options {
        display: flex;
        justify-content: space-between;
        gap: 0.625em; 
        margin-bottom: 0.625em; 
    }

    .amount-options label:hover {
        background-color: var(--accent-color1);
        transition: background-color 0.3s ease;
    }

    .amount-options input[type="radio"] {
        display: none;
    }

    .amount-options label {
        width: 6em; 
        font-size: 1rem;
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 0.375em 1em; 
        border-radius: 0.125em; 
        text-align: center;
        cursor: pointer;
    }

    .other {
        width: 100%;
        height: 1.25em; 
        font-size: 1rem;
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 0.375em 3.125em; 
        border-radius: 0.125em; 
        text-align: center;
        cursor: pointer;
        margin-top: 0.625em; 
    }

    .other input[type="radio"] {
        display: none;
    }

    .other:hover {
        background-color: var(--accent-color1);
        transition: background-color 0.3s ease;
    }
</style>