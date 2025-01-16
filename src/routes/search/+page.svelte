<script>
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import SearchBar from '$lib/Molecules/SearchBar.svelte';
    import ArticleAlt from '$lib/Molecules/ArticleAlt.svelte';
    import ScrollWatcher from '$lib/Molecules/ScrollWatcher.svelte';

    export let data;
</script>

<Header/>
<ScrollWatcher />

<main>
    <h2 class="category-title">

    </h2>
  
    <div class="search-main">
        <SearchBar resultsPage="/search" name="searchterm" alwaysOpen="false" value={data.searchterm} placeholder="Zoeken..." />
    </div>
    {#if data.posts.length > 0}
        <h1>Zoekresultaten voor &quot;{data.searchterm}&quot; :</h1>
        <div class="posts-container">
            {#each data.posts as post}
                <ArticleAlt post={post} />
            {/each}
        </div>
    {:else}
        <!-- This will show if no posts are available -->
        <h1>Geen resultaten gevonden voor: &quot;{data.searchterm}&quot;</h1>
    {/if}
</main>

<Footer/>

<style>
    h1 {
        text-align: center;
        margin: 2em;
    }

    .search-main {
        max-width: 30em;
        --search-bar-width: 32.5em;
        --search-background-color: var(--background-color);
        margin-left: auto;
        margin-right: auto;
    }

    .posts-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
</style>