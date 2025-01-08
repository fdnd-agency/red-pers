<script>
    export let alwaysSticky = false;

    import { categoriesData } from "$lib/index.js";
    import { onMount } from "svelte";

    let sticky = alwaysSticky;
    let container;

    if (!alwaysSticky) {
        onMount(() => {
            window.addEventListener('scroll', () => {
                sticky = container?.getBoundingClientRect()?.y <= 78; // Bron: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
            })
        })
    }
</script>

<div class="container" class:sticky={sticky} bind:this={container} class:alwaysSticky={alwaysSticky}>
    <nav>
        <div class="nav-items">
            <ul>
                <li><a href="/">Voorpagina</a></li>
                {#each categoriesData as category}
                    <li><a href="/categorie/{category.slug}">{category.name}</a></li>
                {/each}
            </ul>
        </div>
    </nav>
</div>

<style>
    .container {
        margin-top: 2em;
    }

    /* if sticky is true but alwaysSticky is false */
    .sticky:not(.alwaysSticky) {
        margin-bottom: 7em;
    }

    nav {
        background-color: var(--paper-color);
    }

    .sticky nav {
        position: fixed;
        top: 5em;
        left: 0;
        background-color: var(--background-color);
    }

    .nav-items {
        max-width: var(--main-width);
        height: 100%;
        border-top: var(--border);
        border-bottom: var(--border);
    }

    .sticky .nav-items {
        max-width: 100vw;
        width: 100vw;
        border-top: none;
        border-bottom: var(--border-light);
    }

    ul {
        width: 100%;
        max-width: var(--main-width);
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        padding: 10px 0;
        margin: 0 auto;
        
        list-style: none;
        font-family: var(--menu-item);
        font-size: 14px;
    }

    a {
        font-family: var(--menu-item);
        font-size: 14px;
    }

    a:hover {
        color: #ff0000;
        transition: var(--hover);
    }

    @media only screen and (max-width: 860px) {
        .container {
            display: none;
        }
    }
</style>