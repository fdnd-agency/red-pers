<input type="checkbox" id="popup-toggle">

<label class="open-popup-btn" for="popup-toggle">Nieuwsbrief</label>

<section class="overlay">
    <article class="popup">
        <label class="close-btn" for="popup-toggle">&times;</label>
        <h2>Nieuwsbrief</h2>
        <p>
            Elke drie weken houden we je op de hoogte van wat we schreven en wat we 
            lazen in de Red Pers-nieuwsbrief.
        </p>
        <button class="subscribe-btn">Schrijf je hier in!</button>
    </article>
</section>

<style>
    .open-popup-btn {
        cursor: pointer;
        display: block;
        margin: 2rem auto;
    }

    .open-popup-btn:hover{
        transform: scale(1.1);
        transition: all ease 500ms;
        text-decoration: underline;
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
        /* display: container; */
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        border: none;
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
    }

    .subscribe-btn:hover {
        background-color: var(----accent-color1);
        transition: background-color 0.3s ease;
    }

    #popup-toggle:checked ~ .overlay {
        display: flex;
    }

    #popup-toggle {
        display: none;
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

        .subscribe-btn {
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

        .subscribe-btn {
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

        .subscribe-btn {
            font-size: 0.6rem;
            padding: 0.6rem 1rem;
        }
    }
</style>