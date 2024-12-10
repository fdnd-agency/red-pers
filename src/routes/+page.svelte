<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
    
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Artikel from '$lib/Organism/Artikel.svelte';
    import CategoryPreview from '$lib/Organism/CategoryPreview.svelte';
    import Nav from '../lib/Organism/Nav.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        for (let i = 0; i < data.categories.length; i++) {
            document.body.style.setProperty(`--cat-${i}`, data.categories[i].color);
        }
    });
</script>

<Header alwaysSticky={false}/>

<div class="background">
    <main>
        {#if data.posts}
            {#each data.posts as post}
                <!-- @html means: there is html in this string, render it -->
                <Artikel post={post} />
            {/each}
        {:else}
            <!-- This will show if no posts are available -->
            <p>No posts available</p>
        {/if}

        <Nav alwaysSticky={false} />
    
        {#each data.categories as category}
            <CategoryPreview
                categoryName={category.name}
                categorySlug={category.slug}
                posts={category.posts}
                color={category.color}
            />
        {/each}
    </main>
</div>

<Footer />

<style>
    .background {
        background-color: var(--paper-color);
    }
    main {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
    }
    :global(body) {
        animation: auto linear pop-art both;

        animation-timeline: view();
        animation-range: 230vh 900vh;
    }

    @keyframes pop-art {
        0% {
            --paper-color: var(--cat-0);
        }
        12.5% {
            --paper-color: var(--cat-1);
        }
        25% {
            --paper-color: var(--cat-2);
        }
        37.5% {
            --paper-color: var(--cat-3);
        }
        50% {
            --paper-color: var(--cat-4);
        }
        62.5% {
            --paper-color: var(--cat-5);
        }
        75% {
            --paper-color: var(--cat-6);
        }
        87.5% {
            --paper-color: var(--cat-7);
        }
    }
</style>