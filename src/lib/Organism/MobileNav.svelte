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
        translate: calc(-50vw - 1px) 0; 
        transition-property: transform display;
        transition-duration: 1s;
        transition-behavior: allow-discrete;
        z-index: 1;
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

    :global(header:has(.toggle-nav:checked) nav) {
        translate: 0 0;
        display: flex;

        @starting-style {
            translate: calc(-50vw - 1px) 0; 
        }
    }

    :global(header:has(.toggle-nav:checked) .overlay) {
        width: 100vw;
        height: calc(100vh - 80px);
        position: fixed;
        top: 80px;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    @media only screen and (min-width: 861px) {
        .mobile-datum {
            display: none;
        }

        .container {
            display: none;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 860px) {
    nav li {
    }

    nav li a {
        font-size: 0.8em;
    }

    nav ul {
        padding-left: 4em;
        padding-top: 1em;
        gap: 1em;
    }

    nav {
        height: auto;
    }
}

@media screen and (min-width: 400px) and (max-width: 600px) {
    nav{
        width: 40vw;
    }
}

@media screen and (min-width: 600px) and (max-width: 860px) {
    nav{
        width: 30vw;
    }
}

</style>