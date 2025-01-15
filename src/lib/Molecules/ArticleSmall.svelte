<script>
    export let posts;
</script>

<div class="articles">
    {#if posts && posts.length > 0} 
        {#each posts as post} 
            <a href="/{post.slug}" class="article-link" aria-label="" data-sveltekit-reload>
                <article>
                    <div>
                        <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
                        <h3>{@html post.title.rendered}</h3>
                    </div>
                    <p>door <strong>{@html post.yoast_head_json.author}</strong></p>
                </article>
            </a>
        {/each}
    {:else}
        <p>Geen artikelen gevonden</p>
    {/if}
</div>

<style>
    .articles {
        display: flex;
        gap: 0.5em;
        align-items: center;
        flex-wrap: wrap;

        margin-bottom: 5em;
    }
    .article-link {
        text-decoration: none; 
    }

    article {
        width: calc(var(--article-width) / 3 - 1em);
        height: 22em;
        border: 1.6px solid #7B7B7A;
        cursor: pointer;

        font-size: smaller;
        overflow-wrap: break-word;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    h3 {
        margin: 0 0.5em;
        color: black;
    }

    article p {
        margin: 0 0.5em;
        color: #7B7B7A;
    }
</style>