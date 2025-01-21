<script>
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Nav from '$lib/Organism/Nav.svelte';
    import ArticleAlt from '$lib/Molecules/ArticleAlt.svelte';
    import ScrollWatcher from '$lib/Molecules/ScrollWatcher.svelte';
    
    export let data;
</script>

<Header/>
<ScrollWatcher />
<div class="background">
    <div class="category-name">
        <h1>{data.category.name}</h1>
    </div>
    <main class="posts-container">
        {#if data.posts}
            {#each data.posts as post}
                <ArticleAlt post={post} />
            {/each}
        {:else}
            <p class="no-posts-message">No posts available</p>
        {/if}
    </main>
</div>

<Footer />

<style>

    
.category-name {
        border-top: 8px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        background-color: black;
        color: white;
        margin: 0;
        padding: 0.5em;
    }
    .posts-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 3em 1.5em;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    .background {
        background-color: var(--paper-color);
    }
</style>
