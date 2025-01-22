<script>
    export let post;
    export let isFirst = false;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>


<a href="/{post.slug}">
    <article class="article {isFirst ? 'first-article' : 'other-articles'}" 
        style={isFirst ? 'max-width:1240px' : 'max-width: 25em;'}>
        
        {#if isFirst}
        <div class="newest">NIEUWSTE ARTIKEL</div>
        {/if}
        
        <img loading={isFirst ? "eager" : "lazy"} src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" width="25em" height="15em">
        
        <div class="everything">
            <div class="title-info-text">
                {#if isFirst}
                    <h1 class="artikel-kop">{@html post.title.rendered}</h1>
                {:else}
                    <div class="title">
                        <h1 class="artikel-kop">{@html post.title.rendered}</h1>
                    </div>
                {/if}
                
                {#if isFirst}
                    <p class="excerpt">{@html post.excerpt.rendered}</p>
                {/if}

                <div class="info-text">
                    <p>
                        <span class="author">{post.yoast_head_json.author}</span>
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
        </div>
    </article>
</a>

<style>
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

    .first-article .everything{
        padding: 1em;
    }

    .first-article .excerpt {
        font-size: 16px;
        line-height: 1.5;
    }

    .info-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: var(--border);
        padding: 0.5em;
        font-size: 12px;
        text-transform: uppercase;
    }

    .author {
        font-weight: bold;
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
            font-size: calc(var(--title-font-size) * 2 / 3);
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

    .other-articles {
        --title-font-size: 28px;
        --title-font-line-height: 32px;
        max-width: 25em;
        border: var(--border);
        background-color: var(--background-color);
    }

    .first-article {
        display: flex;
        position: relative;
        flex-direction: row;
        background-color: var(--background-color);
        max-width: 1240px;
        z-index: 0;
        box-sizing: border-box;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .first-article .newest {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: rgba(255, 0, 0, 0.7);
        color: white;
        font-size: 14px;
        padding: 5px 10px;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 3px;
    }

    .first-article img {
        width: 100%;
        height: 26em;
        border-bottom: var(--border);
        object-fit: cover;
    }

    .first-article h1 {
        font-family: var(--font-alt);
        font-weight: var(--font-style-bold);
        font-size: var(--title-font-size);
        line-height: var(--title-font-line-height);
        letter-spacing: 0.25px;
        transition: color 0.3s ease;
    }

    .first-article .title {
        width: calc(100% - 1em);
        height: 11em;
        padding: 0.5em;
        overflow: hidden;
    }

    .first-article .author {
        font-weight: bold;
    }

    .first-article {
        --title-font-size: 28px;
        --title-font-line-height: 32px;
        border: var(--border);
        background-color: var(--background-color);
        margin-bottom: 1.5em;
        box-sizing: border-box;
        max-width: 1240px;
    }

    .first-article:hover {
        transform: scale(1.02);
    }

    @media only screen and (min-width: 700px) and (max-width: 1055px) {
    .first-article {
        transform: scale(0.95); 
        transform-origin: top center; 
    }

    .first-article img {
        max-width: 60%; 
        height: auto;
    }

    .first-article h1 {
        font-size: calc(var(--title-font-size) * 0.95); 
    }

    .first-article .everything {
        padding: 0.95em; 
    }

}


    @media only screen and (max-width: 700px) {
        .first-article {
            flex-direction: column;
        }

        .first-article .everything{
            padding: 1em;
        }

        .first-article .excerpt{
            width: 90%;
        }
        
        .first-article .info-text {
            width: 90%;
        }

        .first-article img {
            width: 100%;
            height: auto;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 400px){
        .other-articles{
        max-height: 10em;
        }

        .other-articles img{
            max-height: 10em;
        }

        .other-articles h1{
        font-size: 0.8em;
        }

        .first-article{
            max-height: 25em;
        }

        .first-article .excerpt{
            display: none;
        }

        .first-article .info-text{
            display: none;
        }
    }


</style>




