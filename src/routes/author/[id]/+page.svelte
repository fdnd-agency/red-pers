<script>
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Article from '$lib/Organism/Article.svelte';
    
    export let data;

    const posts = data.posts;
    const author = posts && posts.length > 0 ? posts[0].authors[0] : null; 

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>

<Header/>

<main>
    {#if author}
        <div class="author-info-container">
            <img class="author-img" src={author.avatar_url} alt={author.display_name}>
            <div class="author-info">
                <h1>{author.display_name}</h1>
                <p class="author-title">{author.job_title}</p>
                <p class="author-description">{author.description}</p>
            </div>
        </div>
    {/if}
    {#if posts}
        <div class="articles">
            {#each posts as post}
                <Article post={post} />
            {/each}
        </div>
    {:else}
        <p>No posts available</p>
    {/if}
</main>

<Footer />

<style>
    main {
        margin-top: 3em;
    }

    .author-info-container {
        width: calc(100% - 10em);
        min-width: min(500px, 100%);
        margin: var(--margin-center);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    
    .author-img {
        width: calc(100% - 2px);
        margin: var(--margin-center);
        border: var(--border);
    }

    .author-info {
        border: var(--border);
        padding: 2em 3em;
    }

    .author-title {
        color: gray;
    }

    .author-description {
        border-top: 1px solid gray;
        padding-top: 1em;
    }

    .articles {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin-top: 2em;
        justify-content: center;
    }

    @media only screen and (min-width: 820px) {
        .author-info-container {
            flex-direction: row;
            width: auto;
            max-width: var(--main-width);
            height: 25em;
        }

        .author-img {
            width: auto;
        }
    }
</style>