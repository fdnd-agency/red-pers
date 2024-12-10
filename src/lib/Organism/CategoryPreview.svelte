<script>
    import Artikel from '$lib/Organism/Artikel.svelte';
    
    export let categoryName;
    export let categorySlug;
    export let posts;
    export let color;
</script>

<div style="--category-color: {color}">
    <div class="category-name">
        <h1>{categoryName}</h1>
        <a href="/categorie/{categorySlug}">Meer {categoryName} <img src="/Vector-arrow.svg" alt="Link"></a>
    </div>
    <div class="articles">
        {#each posts as post}
            <Artikel post={post} />
        {/each}
    </div>
</div>

<style>
    .category-name {
        margin: 3em 0;
        border-top: 8px solid var(--category-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        background-color: var(--category-color);
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