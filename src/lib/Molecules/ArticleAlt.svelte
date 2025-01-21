<script>
    export let post;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>

<a href="/{post.slug}" class="post-title-link">
    <article class="post-card">
        <h3 class="post-title">{@html post.title.rendered}</h3>
        <img 
            src={post.yoast_head_json.og_image[0].url} 
            alt="Artikel afbeelding" 
            class="post-image" 
            width="350" 
            height="350" 
        />
        <div class="post-meta">
            <p class="post-date">
                {(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}
            </p>
            <p class="post-read-time">
                {post.yoast_head_json.twitter_misc["Geschatte leestijd"]}
            </p>
            <p class="post-author">{post.yoast_head_json.author}</p>
        </div>
    </article>
</a>

<style>
    .post-title-link {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
    }

    .post-title-link:hover {
        text-decoration: underline;
    }

    .post-card {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: 10em;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        position: relative;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .post-card:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    }

    .post-image {
        object-fit: cover;
        width: 200px;
        height: 100%;
        border: 1px solid black;
        flex-shrink: 0;
    }

    .post-title {
        font-size: 1.2rem;
        margin: 0;
        flex-grow: 1;
        padding-right: 1rem;
    }

    .post-meta {
        font-size: 0.8rem;
        position: absolute;
        bottom: 0.5rem;
        left: 1rem;
        display: flex;
        gap: 0.2rem;
    }

    .post-author {
        font-weight: var(--font-style-bold);
    }

    @media (max-width: 768px) {
        .post-card {
            max-width: 600px;
            width: 100%;
        }

        .post-image {
            width: 120px;
            height: 120px;
        }
    }

    @media (max-width: 480px) {
        .post-title {
            font-size: 1rem;
        }

        .post-meta {
            font-size: 0.7rem;
        }

        .post-image {
            width: 100px;
            height: 100px;
        }
    }

    @media and screen (max-width: 360px) {
        .post-title {
            font-size: 5px;
        }

        .post-meta {
            font-size: 0.6rem;
        }

        .post-image {
            width: 60px;
            height: 60px;
        }
    }
</style>