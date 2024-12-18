<script>
    export let alwaysSticky;

    import { categoriesData } from "$lib/index.js";
    import { onMount } from "svelte";

    let sticky = alwaysSticky;

    if (!alwaysSticky) {
        onMount(() => {
            window.addEventListener('scroll', () => {
                sticky = window.scrollY > 710;
            })
        })
    }
</script>

<div class="container" class:sticky={sticky} class:alwaysSticky={alwaysSticky}>
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
        margin-bottom: 3em;
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
        width: 100vw;
        height: 100%;
    }

    ul {
        width: 100%;
        max-width: var(--main-width);
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;

        padding: 10px 0;
        margin: 0 auto;
        
        list-style: none;
        font-family: var(--menu-item);
        font-size: 14px;

        border-top: var(--border);
        border-bottom: var(--border);
    }

    .sticky ul {
        border-top: none;
    }

    a {
        font-family: var(--menu-item);
        text-transform: uppercase;
    }

    a:hover {
        color: #ff0000;
        transition: var(--hover);
    }
</style>