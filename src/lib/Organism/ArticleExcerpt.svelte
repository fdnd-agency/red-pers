<script>
    import { getCategoryById } from "$lib/index.js";

    export let post
    const dateFormat = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const category = post ? getCategoryById(post.categories) : null;
</script>

<header>
    {#if post}
        <div class="container">
            <article class="summary">
                <a class="category-name uppercase bold" href="/categorie/{category?.slug}">
                    {category?.name}
                </a>
                <h1>{@html post.title.rendered}</h1>
                <div class="excerpt">
                    {@html post.excerpt.rendered}
                </div>
                <div class="author-and-read-time">
                    <p>Door <a class="bold" href="/author/{post.author}">{post.authors[0].display_name}</a></p>
                    <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
                </div>
            </article>
            <article class="img-container">
                <img width="850" height="400" src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
                <p class="small">
                    {(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}
                </p>
            </article>
        </div>
    {/if}
</header>


<style>
    * {
        text-align: center;
    }

    header {
        width: calc(100vw - 2em);
        background-color: var(--accent-color2);
        padding: 0 1em;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: var(--main-width);
        margin: var(--margin-center);
    }

    .summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        overflow-wrap: break-word;
    }

    .author-and-read-time {
        margin-bottom: 2em;
    }

    h1 {
        font-family: var(--font-alt);
        font-weight: var(--font-weight-bold);
        font-size: 38px;
        line-height: 120%;
        letter-spacing: -1%;
        margin: 0;
    }

    .category-name {
        font-family: var(--font-main);
        font-size: 12px;
        line-height: 220%;
        letter-spacing: 8%;
        color: var(--accent-color1);
    }

    .excerpt {
        font-family: var(--font-main);
        font-weight: var(--font-weight-light);
        font-size: 21px;
        line-height: var(--line-height-small);
        letter-spacing: -1%;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a:hover {
        text-decoration: underline;
    }

    @media only screen and (min-width: 960px) {
        .container {
            flex-direction: row;
            justify-content: center;
            gap: 2em;
            padding-top: 4em;
            max-width: var(--main-width);
        }

        * {
            text-align: start;
        }

        .img-container {
            display: flex;
            flex-direction: column-reverse;
            align-items: end;
            width: 55%;
        }

        .summary {
            width: 45%;
        }

        .author-and-read-time {
            display: flex;
            justify-content: space-between;
        }
    }
</style>