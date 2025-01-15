<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Article from '$lib/Organism/Article.svelte';
    import CategoryPreview from '$lib/Organism/CategoryPreview.svelte';
    import Nav from '../lib/Organism/Nav.svelte';

</script>

<Header alwaysSticky={false}/>

<div class="background">
    <main>
        <div class="featured">
            {#if data.posts && data.posts.length > 0}
            {#each data.posts.slice(0, 4) as post, i}
                <Article post={post} isFirst={i === 0} />
            {/each}
            
        {:else}
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