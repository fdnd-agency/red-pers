<button popovertarget="donation" popovertargetaction="show" class="donation-button">
    <img src="./4128927.png" alt="donation button" class="button-icon">Doneren
</button>

<div popover="auto" id="donation" class="popup">
    <button popovertarget="donation" popovertargetaction="hide" class="close-button" aria-label="Sluit">x</button>
    <h2>Doneren</h2>
    <p>Wij bieden jonge, aspirerende journalisten een podium en begeleiding. Dat kunnen we nog beter met jouw steun. Die steun komt met twee voor de prijs van een, want onze sponsor matcht jouw donatie, Geef jij ons vijf euro? Dan ontvangen wij een tientje.</p>
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
</div>

<style>
    h2 {
        font-size: 3.2rem;
        margin: 0.2rem 0.2rem;
        text-align: left;
        margin-bottom: 2rem;
        font-family: 'Source serif 4';
    }

    p {
        margin-bottom: 1rem;
        color: #757575;
        font-size: 1rem;
        line-height: 1.2;
        letter-spacing: 0.02em;
    }

    fieldset {
        all: unset;
        padding: 0;
    }

    .popup {
        background-color: white;
        border: 2px solid black;
        padding: 4rem;
        max-width: 500px;
        position: relative;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .donation-button {
        all: unset;
        --btn-color: #8a0000;
        --btn-text: #ffffff;
        background-color: var(--accent-color1);
        border-radius: 2px;
        color: var(--btn-text);
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 8px 12px;
    }

    input[type="radio"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    .button-icon {
        width: 20px;
        height: auto;
        filter: invert(1) grayscale(1) brightness(100%);
        margin-right: 8px;
    }

    .donation-button:focus-visible {
        outline: 2px solid #000000;
    }

    .amount-options {
        display: flex;
        justify-content: space-between;
        gap: 10px; 
        margin-bottom: 10px; 
    }

    .amount-options label {
        width: 95px;
        font-size: 1rem;
    }

    label {
        display: inline-block;
        padding: 8px 16px;
        background-color: black;
        color: white;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 1.2rem;
        width: 100%;
        border-radius: 2px;
        text-align: center;
        transition: all 0.3s ease;
    }

    label:hover,
    label:focus-within {
        background-color: #D5302D;
        transition: background-color 0.3s ease;
    }

    .other {
        height: 20px;
        width: 100%;
        font-size: 1rem;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: #000;
        cursor: pointer;
        padding: 5px;
    }

    .close-button:hover {
        color: #E85340;
    }

   /* Mediaquery for screens smaller than 560px */
@media (max-width: 560px) {
    /* Adjust popup for smaller screens */

    .popup {
        width: 400px;
        height: 220px;
    }

    h2{
        margin-top: -10px;
    }

    /* Reducing size of the radio options */
    .amount-options {
        justify-content: center;
        align-items: center;
    }

    .amount-options label {
        font-size: 14px; /* Smaller text for the labels */
        padding: 6px 12px; /* Smaller padding for the labels */
    }

    /* 'Other amount' inputfield adjustments */
    .other {
        width: 91%; /* Full width of the popup */
        height: 20px;
    }

    /* Reducing size of the close button */
    .close-button {
        font-size: 18px;
        top: 5px;
        right: 5px;
    }
}

/* Mediaquery for screens smaller than 520px */
@media (max-width: 520px) {
    .popup {
        width: 380px;
        height: 200px;
    }

    h2 {
        font-size: 36px;
        margin-top: -20px;
    }


    .other {
        height: 20px; /* Smaller input height */
    }

}

/* Mediaquery for screens smaller than 450px */
@media (max-width: 490px) {
    .popup {
        width: 300px;
        height: 160px;
    }

    h2 {
        font-size: 28px; 
        margin-top: -40px;
    }

    p {
        font-size: 14px;
    }

    .amount-options label {
        font-size: 14px;
        padding: 5px 10px;
        width: 60px;
        height: 12px;
    }

    .other {
        height: 18px; 
        width: 87%;
    }
}

/* Mediaquery for screens smaller than 420px */
@media (max-width: 420px) {
    .popup {
        width: 280px;
        height: 160px;
    }

    h2 {
        font-size: 26px; /* Even smaller headingtext */
        margin-top: -45px;
    }

    p {
        font-size: 14px;
    }

    .amount-options label {
        font-size: 11px;
    }

    .other {
        height: 18px; /* Reducing size of the input height */
    }
}

/* Mediaquery for screens smaller than 380px */
@media (max-width: 390px) {
    .popup {
        width: 230px;
        height: 110px;
    }

    h2 {
        font-size: 20px; /* Very small headingtext */
    }

    p {
        font-size: 12px; /* small text for the paragraph */
    }

    .amount-options {
        justify-content: center;
    }

    .amount-options label {
        font-size: 10px;
        padding: 4px 8px;
    }

    .other {
        height: 10px; /* Reducing size of the input */
        font-size: 10px;
    }
}

/* Mediaquery for screens smaller than 380px */
@media (max-width: 340px) {
    .popup {
        width: 220px;
        height: 100px;
    }

    h2 {
        font-size: 18px; /* Very small headingtext */
    }

    p {
        font-size: 11px; /* small text for the paragraph */
    }

    .amount-options {
        justify-content: center;
    }

    .amount-options label {
        font-size: 10px;
        padding: 4px 8px;
    }

    .other {
        height: 10px; /* Reducing size of the input */
        font-size: 10px;
    }
}

/* Popup animatie effect */
@keyframes popup-zoom {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}


/* Toepassing van animatie aan de popup */
.popup {
    animation: popup-zoom 0.6s ease-out, popup-shake 0.3s ease 0.3s;
}

</style>