<script>
    import { categoriesData } from "$lib/index.js";

    const dateFormat = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric'
    };
</script>

<div class="container">
    <div class="overlay" />
    <nav>
        <ul>
            <li><a href="/">Voorpagina</a></li>
            {#each categoriesData as category}
                <li><a href="/categorie/{category.slug}">{category.name}</a></li>
            {/each}
        </ul>
        <ul class="nav-2">
            <li><a href="/">Colofon</a></li>
            <li><a href="/">Over</a></li>
            <li><a href="/">Meedoen</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
</div>
<section class="mobile-datum">
    <div class="datum uppercase">
        <p>{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
        <p class="uppercase">podium voor de journalistiek</p>
    </div>
</section>

<style>
    nav {
        position: fixed;
        top: 80px;
        left: 0;
        width: 50vw;
        height: calc(100vh - 80px);
        display: none;
        background-color: var(--background-color);
        flex-direction: column;
        justify-content: space-between;
        border-right: var(--border);
        translate: calc(-50vw - 1px) 0; /* width + border */
        transition-property: transform display;
        transition-duration: 1s;
        transition-behavior: allow-discrete;
    }

    :global(header:has(.toggle-nav:checked) nav) {
        translate: 0 0;
        display: flex;

        @starting-style {
            translate: calc(-50vw - 1px) 0; /* width + border */
            /* Bron: https://www.youtube.com/watch?v=vmDEHAzj2XE */
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding-left: 4em;
        padding-top: 2em;

        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .nav-2 {
        background-color: black;
    }

    .nav-2 a {
        color: var(--background-color);
    }

    .mobile-datum {
        margin-top: 6em;
        
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: smaller;
        border-bottom: 1px solid rgba(154, 154, 154, 0.679);
    }

    .mobile-datum p {
        margin: 0;
    }

    :global(header:has(.toggle-nav:checked) .overlay) {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }

    @media only screen and (min-width: 861px) {
        .mobile-datum {
            display: none;
        }
    }
</style>