<script>
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import SearchBar from '$lib/Molecules/SearchBar.svelte';
    import ScrollWatcher from '$lib/Molecules/ScrollWatcher.svelte';

    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
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
        {#each data.posts as post}
        <!-- @html means: there is html in this string, render it -->
            <a href="/{post.slug}">
                <h3>{@html post.title.rendered}</h3>
            </a>
            <p>{@html post.excerpt.rendered}</p>
            <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
            <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
            <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
            <p>{post.yoast_head_json.author}</p>
        {/each}
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

    a {
        color: var(--background-color);
    }

    .search-main {
        max-width: 30em;
        --search-bar-width: 32.5em;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        max-width: 100%;
        height: auto;
    }
</style>