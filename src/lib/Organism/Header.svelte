<script>
    /** @type {import('./$types').PageData} */

    export let hasNav = false;

    const dateFormat = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric'
    };
    const dateFormatSmall = {
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    }
    import SearchBar from "$lib/Molecules/SearchBar.svelte";
    import Nieuwsbrief from "$lib/Molecules/Nieuwsbrief.svelte";
    import Donatiebtn from "$lib/Molecules/Donatiebtn.svelte";
    import { onMount } from "svelte";
    import Nav from "./Nav.svelte";

    let sticky = false;
    
    function checkScroll() {
        sticky = window.scrollY > 50;
    }

    onMount(() => {
        window.addEventListener("scroll", checkScroll);
    });
</script>

<header class:has-sticky={sticky}>
    <section class="top">
        <ul>
            <li>Colofon</li>
            <li>Over</li>
            <li>Meedoen</li>
            <li>Contact</li>
        </ul>
    </section>
    <section class="main-header" class:sticky={sticky}>
        <div class="main-header-inner">
            <div class="date">
                <p class="date-bold uppercase">{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
                <p class="uppercase">Podium voor de journalistiek</p>
            </div>
            <a href="/">
                <img src="/RedPers_Logo_Cmyk_Black.webp" alt="RedPers logo" width="280" height="70" />
            </a>
            <ul>
                <li><Nieuwsbrief /></li>
                <li><Donatiebtn /></li>
                <li class="search">
                    <SearchBar resultsPage="/search" name="searchterm" placeholder="Zoeken..." />
                </li>
            </ul>
        </div>
    </section>
    {#if hasNav}
        <Nav />
    {/if}
</header>

<style>
    .main-header {
        background-color: var(--paper-color);
        padding: 3em 0;
        width: 100vw;
        height: 140px;
        overflow-y: hidden; /* Hide the inner borders */

        /* Bron: https://kizu.dev/scroll-driven-animations/ */
        animation: auto linear shrink-header both;

        animation-timeline: view();
        animation-range:
            100vh
            calc(100vh + 40em);
    }

    .has-sticky {
        /* Total height of main-header */
        margin-bottom: 230px;
    }

    .main-header-inner {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;

        width: var(--main-width);
        border-top: var(--border);
        border-bottom: var(--border);
        margin: 0 auto;
    }

    .sticky {
        position: fixed;
        top: -1px; /* Hide upper inner border */
        left: 0;
        border-bottom: 1px solid black;
    }

    a {
        height: 50%;
    }
    
    img {
        height: 100%;
        object-fit: contain;
    }

    .main-header ul {
        display: flex; 
        list-style: none; 
        margin: 0;
        cursor: pointer;
        padding: 0;
        margin-left: 50px;
        gap: 20px;
        font-family: var(--menu-item);
    }

    .date {
        display: flex;
        flex-direction: column; 
        margin-right: 20px;
    }

    .date p {
        margin: 0;
        font-family:var(--menu-item);
        font-size: 14px;
    }

    .date-bold {
        font-weight: bold;
        text-wrap: nowrap;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 15px; 
        padding: 0;
        margin: 0;
    }

    .search {
        --search-bar-width:
    }

    .top li:hover {
        color: #000000;
        background-color: #f0f0f0;
        transition: var(--hover);
    }

    ul li {
        display: flex;
        align-items: center;
    }

    .top {
        background-color: black;
        display: flex;
        color: white;
        justify-content: end;
    }
    
    .top ul {
        display: flex;
        list-style: none;
        margin: 0;
        cursor: pointer;
        padding: 0;
    }

    .top li {
        padding: 15px;
        font-family: var(--menu-item);
        font-size: 14px;
    }

    @keyframes shrink-header {
        0% {
            padding: 3em 0;
            background-color: var(--paper-color);
        }
        50% {
            padding: 0 0;
            background-color: var(--background-color);
            height: 140px;
        }
        100% {
            padding: 0 0;
            background-color: var(--background-color);

            height: 80px;
        }
    }
</style>