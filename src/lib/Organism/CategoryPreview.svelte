<script>
    import Article from '$lib/Organism/Article.svelte';
    
    export let categoryName;
    export let categorySlug;
    export let posts;
</script>

<div>
    <div class="category-name">
        <h1>{categoryName}</h1>
        <a href="/categorie/{categorySlug}"> Meer {categoryName} <img src="icons/vector-arrow.svg" alt="Link"></a>
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

    a:hover {
        transform: scale(1.1);
        transition: all ease 500ms;
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

    @media screen and (min-width: 320px) and (max-width: 380px) {
        a {
            font-size: 0.8em;
            padding: 1em;
        }

        h1 {
            font-size: 1.5em;
        }
    }

    @media screen and (min-width: 380px) and (max-width: 560px) {
        a {
            font-size: 1em;
            padding: 1.2em;
        }

        h1 {
            font-size: 1.8em;
        }
    }

    
</style>