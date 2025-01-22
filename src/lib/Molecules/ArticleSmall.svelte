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
        border: 0.1em solid black;
        cursor: pointer;

        font-size: smaller;
        overflow-wrap: break-word;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    article:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    img {
        width: 100%;
        height: 9.5em;
        object-fit: cover;
    }

    h3 {
        margin: 0 0.5em;
        color: black;
    }

    article p {
        margin: 0 0.5em;
    }
</style>