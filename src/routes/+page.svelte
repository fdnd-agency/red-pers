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

</script>

<Header/>

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

        <Nav />
    
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
        justify-content: center;
    }
</style>