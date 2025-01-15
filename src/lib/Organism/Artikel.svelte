

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

        <!-- Voeg hier de badge toe voor het nieuwste artikel -->
        {#if isFirst}
        <div class="newest">NIEUWSTE ARTIKEL</div>
        {/if}
        
        <img loading={isFirst ? "eager" : "lazy"} src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" width="25em" height="15em">

        
        <div class="everything">
        <div class="title-info-text">
            <div class="title">
                <h1 class="artikel-kop">{@html post.title.rendered}</h1>
            </div>
            
            <!-- Excerpt alleen zichtbaar als het eerste artikel is -->
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
        padding: 2em;
        width: 50%;
    }

    .first-article .excerpt {
    font-size: 16px; /* Pas eventueel de lettergrootte aan voor de excerpt */
    margin-top: -5em;
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

.other-articles {
        --title-font-size: 28px;
        --title-font-line-height: 32px;
        max-width: 25em;
        border: var(--border);
        background-color: var(--background-color);
    }


    .first-article {
        display: flex;
        margin-top: 20px;
        position: relative;
        flex-direction: row;  /* Zorgt ervoor dat afbeelding en tekst naast elkaar staan */
        border-left: 4px solid #D5302D; /* Rode lijn aan de linkerkant voor accent */
        background-color: var(--background-color);
        max-width: 1240px;
        margin-bottom: 1.5em;
        box-sizing: border-box;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Zachte overgang voor de hover-effecten */
    }

    .first-article .newest {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(255, 0, 0, 0.7); /* Rood met doorzichtige achtergrond */
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
        object-fit: cover; /* Zorgt ervoor dat de afbeelding niet uitgerekt wordt */
    }

    .first-article h1 {
        font-family: var(--font-alt);
        font-weight: var(--font-style-bold);
        font-size: var(--title-font-size);
        line-height: var(--title-font-line-height);
        letter-spacing: 0.25px;
        transition: color 0.3s ease; /* Zachte overgang voor kleurverandering bij hover */
    }

    .first-article .title {
        width: calc(100% - 1em);
        height: 11em;
        padding: 0.5em;
        overflow: hidden;
    }

    .first-article .info-text {
        height: 2em;
        padding: 0 0.5em;
        display: flex;

        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        text-transform: uppercase;
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
        border-left: 4px solid red;
        max-width: 1240px;
    }

    /* Hover effect */
    .first-article:hover {
        transform: scale(1.02);  /* Vergroot het artikel subtiel */
    }


    /* Media Query voor mobiele apparaten */
    @media only screen and (max-width: 768px) {
        .first-article {
            flex-direction: column;  /* Zorgt ervoor dat afbeelding en tekst onder elkaar staan op mobiele schermen */
            gap: 1em;
        }

        .first-article img {
            width: 100%;  /* Afbeelding neemt de volledige breedte in op mobiel */
            height: auto;
        }
    }
</style>


