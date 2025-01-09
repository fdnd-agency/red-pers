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
</script>

<Header/>

<div class="background">
    <main>
        {#if data.posts && data.posts.length > 0}
            {#each data.posts.slice(0, 5) as post, i}
                <Artikel post={post} isFirst={i === 0} />
            {/each}
        {:else}
            <p>No posts available</p>
        {/if}

        <!-- Overzicht van categorieën -->
        {#each data.categories as category}
            <CategoryPreview categoryName={category.name} categorySlug={category.slug} posts={category.posts} />
        {/each}
    </main>
</div>    

<Footer />

<style>
    .background {
        background-color: #f5f5f5;
    }

    main {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding-top: 1em;
        justify-content: center;
    }
</style> 
