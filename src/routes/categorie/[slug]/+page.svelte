<script>
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Nav from '$lib/Organism/Nav.svelte';

    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>

<Header alwaysSticky={true}/>
<Nav alwaysSticky={true}/>
<div class="background">
<main class="posts-container">
    {#if data.posts}
        {#each data.posts as post}
            <article class="post-card">
                <a href="/{post.slug}" class="post-title-link">
                    <h3 class="post-title">{@html post.title.rendered}</h3>
                </a>
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
        {/each}
    {:else}
        <p class="no-posts-message">No posts available</p>
    {/if}
</main>
</div>

<Footer />

<style>
    .posts-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 3em 1.5em;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    .background {
        background-color: var(--paper-color);
    }

    .post-card {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        position: relative;
    }

    .post-image {
        object-fit: cover;
        width: 200px;
        height: auto;
        border: 1px solid black;
        flex-shrink: 0;
    }

    .post-title {
        font-size: 1.2rem;
        margin: 0;
        flex-grow: 1;
        padding-right: 1rem;
    }

    .post-title-link {
        text-decoration: none;
        color: inherit;
    }

    .post-title-link:hover {
        text-decoration: underline;
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
</style>
