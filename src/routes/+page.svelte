<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Artikel from '$lib/Organism/Artikel.svelte';
    import CategoryPreview from '$lib/Organism/CategoryPreview.svelte';
    import Nav from '../lib/Organism/Nav.svelte';
</script>

<Header alwaysSticky={false}/>

<div class="background">
    <main>
        <div class="featured">
            {#if data.posts}
                {#each data.posts as post}
                    <!-- @html means: there is html in this string, render it -->
                    <Artikel post={post} />
                {/each}
            {:else}
                <!-- This will show if no posts are available -->
                <p>No posts available</p>
            {/if}
        </div>

        <Nav alwaysSticky={false} />
    
        {#each data.categories as category}
            <CategoryPreview
                categoryName={category.name}
                categorySlug={category.slug}
                posts={category.posts}
            />
        {/each}
    </main>
</div>

<Footer />

<style>
    .background {
        background-color: var(--paper-color);
    }

    .featured {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
    }
</style>