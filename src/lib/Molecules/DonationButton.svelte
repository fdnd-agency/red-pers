<input type="checkbox" id="donation-toggle">

<label class="donation-button" for="donation-toggle">Doneren</label>

<section class="overlay">
    <article class="popup">
        <label class="close-btn" for="donation-toggle">&times;</label>
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
</section>

<style>
    .donation-button {
        background-color: var(--accent-color1);
        border-radius: 2px;
        color: var(--background-color);
        cursor: pointer;
        padding: 8px 12px;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: none;
        align-items: center;
        justify-content: center;
    }

    article.popup {
        background-color: var(--background-color);
        border: 2px solid black;
        padding: 4rem;
        max-width: 500px;
        position: relative;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        border: none;
    }

    #donation-toggle:checked ~ .overlay {
        display: flex;
    }

    #donation-toggle {
        display: none;
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
        gap: 10px;
        margin-bottom: 10px;
    }

    .amount-options label:hover {
        background-color: var(--accent-color1);
        transition: background-color 0.3s ease;
    }

    .amount-options input[type="radio"] {
        display: none;
    }

    .amount-options label {
        width: 95px;
        font-size: 1rem;
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 6px 16px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
    }

    .other {
        width: 100%;
        height: 20px;
        font-size: 1rem;
        background-color: var(--text-color);
        color: var(--background-color);
        padding: 6px 50px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
        margin-top: 10px;
    }

    .other input[type="radio"] {
        display: none;
    }

    .other:hover {
        background-color: var(--accent-color1);
        transition: background-color 0.3s ease;
    }

    /* Media Queries */
    @media (max-width: 1024px) {
        .popup {
            padding: 3rem;
            max-width: 450px;
        }

        .popup h2 {
            font-size: 2.8rem;
        }

        .popup p {
            font-size: 1rem;
            line-height: 1.4;
        }

        .amount-options label,
        .other {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 768px) {
        .popup {
            padding: 2rem;
            max-width: 400px;
        }

        .popup h2 {
            font-size: 2.4rem;
        }

        .popup p {
            font-size: 0.8rem;
            line-height: 1.3;
        }

        .amount-options label,
        .other {
            font-size: 0.8rem;
            padding: 0.8rem 1.2rem;
        }
    }

    @media (max-width: 480px) {
        .popup {
            padding: 1.5rem;
            max-width: 350px;
        }

        .popup h2 {
            font-size: 2rem;
        }

        .popup p {
            font-size: 0.6rem;
            line-height: 1.2;
        }

        .amount-options label,
        .other {
            font-size: 0.6rem;
            padding: 0.6rem 1rem;
        }
    }
</style>