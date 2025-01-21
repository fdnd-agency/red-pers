<script>
    import SearchBar from "$lib/Molecules/SearchBar.svelte";
    import NewsLetter from "$lib/Molecules/NewsLetter.svelte";
    import DonationButton from "$lib/Molecules/DonationButton.svelte";
    import MobileNav from "$lib/Organism/MobileNav.svelte";
    import Nav from "$lib/Organism/Nav.svelte";
    import { onMount } from "svelte";

    export let alwaysSticky = true;

    const dateFormat = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric'
    };

    let sticky = alwaysSticky;
    
    if (!alwaysSticky) {
        onMount(() => {
            window.addEventListener("scroll", () => {
                sticky = window.scrollY > 50;
            });
        });
    }
</script>

<header class:sticky={sticky} class:animate={!alwaysSticky}>
    <section class="top wide-screen-only">
        <ul>
            <li>Colofon</li>
            <li>Over</li>
            <li>Meedoen</li>
            <li>Contact</li>
        </ul>
    </section>
    <section class="main-header">
        <div class="main-header-inner">
            <div class="date">
                <div class="small-screen-only toggle-nav-container">
                    <input class="toggle-nav" type="checkbox" id="toggle-nav"aria-label="Menu" />
                    <label for="toggle-nav">
                        <svg viewBox="0 0 18 14" width="36" height="28" class="nav-icon">
                            <path d="M 1 0 h 16 a 1 1 0 0 1 0 2 h -16 a 1 1 0 0 1 0 -2"></path>
                            <path d="M 1 6 h 16 a 1 1 0 0 1 0 2 h -16 a 1 1 0 0 1 0 -2"></path>
                            <path d="M 1 12 h 16 a 1 1 0 0 1 0 2 h -16 a 1 1 0 0 1 0 -2"></path>
                        </svg>
                    </label>
                </div>
                <p class="date-bold uppercase wide-screen-only">{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
                <p class="uppercase wide-screen-only">Podium voor de journalistiek</p>
            </div>
            <a href="/" class="logo-container">
                <img src="/RedPers_Logo_Cmyk_Black.webp" alt="RedPers logo" width="280" height="70" />
            </a>
            <ul>
                <li class="wide-screen-only"><NewsLetter/></li>
                <li class="wide-screen-only"><DonationButton /></li>
                <li class="search">
                    <SearchBar resultsPage="/search" name="searchterm" placeholder="Zoeken..." />
                </li>
            </ul>
        </div>
    </section>
    {#if alwaysSticky}
        <Nav alwaysSticky={alwaysSticky} />
    {/if}
    <MobileNav />
</header>

<style>
    .main-header {
        background-color: var(--paper-color);
        padding: 3em 0;
        width: 100vw;
        z-index: 100;
        padding: 0 0;
        background-color: var(--background-color);
        --search-background-color: var(--background-color);
        overflow: hidden; 

        height: 80px;
    }

    .main-header-inner {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;

        max-width: var(--main-width);
        padding: 0 10px;
        border-top: var(--border);
        border-bottom: var(--border);
        margin: 0 auto;
    }

    .sticky .main-header {
        position: fixed;
        top: -1px; 
        left: 0;
        z-index: 100;
        border-bottom: var(--border);
    }

    .logo-container {
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
        --search-bar-width: 20em;
        z-index: 2;
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

    .toggle-nav-container {
        width: 36px;
        height: 28px;
        position: relative;
    }

    .toggle-nav-container input, .nav-icon {
        position: absolute;
        top: 0;
        left: 0;
    }

    .toggle-nav-container input {
        opacity: 0;
    }

    .toggle-nav-container:has(input:focus) {
        outline: 1px solid purple;
        outline-offset: 3px;
    }

    .nav-icon {
        cursor: pointer;
    }

    .nav-icon path {
        transition: transform 500ms, opacity 500ms;
    }
    
    .nav-icon path:nth-of-type(1) {
        transform-origin: 1px 1px;
    }
    
    .nav-icon path:nth-of-type(3) {
        transform-origin: 1px 13px;
    }

    header:has(.toggle-nav:checked) path:nth-of-type(1) {
        transform: rotate(45deg);
    }

    header:has(.toggle-nav:checked) path:nth-of-type(2) {
        opacity: 0;
    }

    header:has(.toggle-nav:checked) path:nth-of-type(3) {
        transform: rotate(-45deg);
    }

    @keyframes shrink-header {
        0% {
            padding: 3em 0;
            background-color: var(--paper-color);
            --search-background-color: var(--paper-color);
            border-bottom: none;
        }
        50% {
            padding: 0 0;
            background-color: var(--background-color);
            --search-background-color: var(--background-color);
            height: 140px;
            border-bottom: var(--border);
        }
        100% {
            padding: 0 0;
            background-color: var(--background-color);
            --search-background-color: var(--background-color);

            height: 80px;
            border-bottom: var(--border);
        }
    }

    .small-screen-only {
        display: none;
    }
    
    @media only screen and (min-width: 861px) {
        .animate .main-header {
            height: 80px;
            padding: 0 0;
            background-color: var(--paper-color);
            border-bottom: var(--border);
        }

        .sticky {
            margin-bottom: 70px;
        }

        @supports(animation-timeline: view()) {
            .sticky.animate {
                margin-bottom: 230px;
            }
            
            .animate .main-header {
                height: 140px;
                animation: auto linear shrink-header both;
                border-bottom: none;

                animation-timeline: view();
                animation-range: 100vh calc(100vh + 40em);
            }
        }
    }

    @media only screen and (max-width: 860px) {
        .wide-screen-only {
            display: none;
        }

        .small-screen-only {
            display: initial;
        }


        .main-header {
            position: fixed;
            top: -1px; 
            left: 0;
            border-bottom: var(--border);
            z-index: 1;
            --search-background-color: var(--background-color);
        }
    }
</style>