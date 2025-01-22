<script>
    import Article from '$lib/Organism/Article.svelte';
    
    export let categoryName;
    export let categorySlug;
    export let posts;
</script>

<div>
    <div class="category-name">
        <h1>{categoryName}</h1>
        <a href="/categorie/{categorySlug}">Meer {categoryName} <img src="icons/vector-arrow.svg" alt="Link"></a>
    </div>
    <div class="articles">
        {#each posts as post}
            <Article post={post} />
        {/each}
    </div>
</div>

<style>
    .category-name {
        margin: 3em 0;
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

    a {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    img {
        width: 1.5em;
        height: 1.5em;
    }

    .articles {
        justify-self: start;
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin-top: 1em;
        justify-content: center;
    }
</style>