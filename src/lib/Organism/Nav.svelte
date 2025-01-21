<script>
    export let alwaysSticky = false;

    import { categoriesData } from "$lib/index.js";
    import { onMount } from "svelte";

    let sticky = alwaysSticky;
    let container;
    let hidden = false;

    onMount(() => {
        let scrolledSoFar = 0;
        let prevScroll = 0;

        window.addEventListener('scroll', () => {
            sticky = container?.getBoundingClientRect()?.y <= 78;

            if (sticky || alwaysSticky) {
                let scrollDiff = window.scrollY - prevScroll;
                if (Math.sign(scrollDiff) == Math.sign(scrolledSoFar)) {
                    // sign(a) returns 1 if a is positive and -1 if a is negative
                    // still scrolling in same direction
                    scrolledSoFar += scrollDiff;
                } else {
                    // reversed direction, restart count
                    scrolledSoFar = scrollDiff;
                }

                if (scrolledSoFar < -100) {
                    // scrolled up by > 100px
                    hidden = false;
                } else if (scrolledSoFar > 200) {
                    // scrolled down by > 200px
                    hidden = true;
                }
            } else {
                scrolledSoFar = 0;
                hidden = false;
            }
            prevScroll = window.scrollY;
        })
    })
</script>

<div class="container" class:sticky={sticky} bind:this={container} class:always-sticky={alwaysSticky} class:hidden={hidden}>
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
    .sticky:not(.always-sticky) {
        margin-bottom: 7em;
    }

    nav {
        background-color: var(--paper-color);
    }

    .sticky nav {
        position: fixed;
        top: 5em;
        z-index: 1;
        left: 0;
        background-color: var(--background-color);
        transition: top 1s;
    }

    .hidden nav {
        top: 2em;
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
        margin: var(--margin-center);
        
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