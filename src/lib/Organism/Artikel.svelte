<script>
    export let post

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>

<a href="/{post.slug}">
    <article class="article">
        <img loading="lazy" src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" width="25em" height="15em">
        <div class="title-info-text">
            <div class="title">
                <h1 class="artikel-kop">{@html post.title.rendered}</h1>
            </div>
            <div class="info-text">
                <p>
                    <a href="/author/{post.author}" class="author">{post.yoast_head_json.author}</a>
                    <span class="reading-time">
                        <span aria-hidden="true">&minus;</span>
                        <abbr title="Geschatte leestijd">
                            {post.yoast_head_json.twitter_misc["Geschatte leestijd"]?.replace("minuten", "")}
                            <span aria-label="minuten">min</span>
                        </abbr>
                    </span>
                </p>
                <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
            </div>
        </div>
    </article>
</a>

<style>
    article {
        --title-font-size: 28px;
        --title-font-line-height: 32px;

        max-width: 25em;
        width: 100vw;
        border: var(--border);
        background-color: var(--background-color);
    }

    img {
        width: 100%;
        height: 15em;
        border-bottom: var(--border);
    }

    h1 {
        font-family: var(--font-alt);
        font-weight: var(--font-style-bold);
        font-size: var(--title-font-size);
        line-height: var(--title-font-line-height);
        letter-spacing: 0.25px;
    }

    .title {
        width: calc(100% - 1em);
        height: 11em;
        padding: 0.5em;
        overflow: hidden;
    }

    .info-text {
        height: 2em;
        padding: 0 0.5em;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        border-top: var(--border);

        font-size: 12px;
        text-transform: uppercase;
    }

    .author {
        font-weight: bold;
    }

    .author:hover {
        text-decoration: underline;
    }

@media only screen and (width < 35em) {
    article {
        max-width: unset;
        display: flex;
    }

    img {
        width: 42%;
        height: 10em;
        object-fit: cover;
        border-bottom: none;
    }

    .title-info-text {
        display: flex;
        flex-direction: column;
    }

    .title {
        height: 100%;
    }

    h1 {
        font-size: calc(var(--title-font-size) * 2 / 3); /* make font 33% smaller */
        line-height: calc(var(--title-font-line-height) * 2 / 3);
        margin: 0;
    }

    .info-text {
        border-top: none;
        padding: 0 0.5em;
        font-size: 12px;
    }

    .reading-time {
        display: none;
    }
}
</style>
