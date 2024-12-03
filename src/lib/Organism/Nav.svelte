<script>
    import { categoriesData } from "$lib/index.js";
  import { onMount } from "svelte";

    let sticky = false;

    onMount(() => {
        window.addEventListener('scroll', () => {
            sticky = window.scrollY > 710;
        })
    })
</script>

<div class="container" class:sticky={sticky}>
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

    .sticky {
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

    ul {
        width: var(--main-width);
        height: 100%;
        display: flex;
        align-items: center;
        padding: 10px 0;
        margin: 0;
        justify-content: space-evenly;
        gap: 20px;
        list-style: none;
        font-family: var(--menu-item);
        font-size: 14px;

        border-top: var(--border);
        border-bottom: var(--border);
    }

    .sticky ul {
        border-top: none;
        padding: 10px calc((100vw - var(--main-width)) / 2);
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