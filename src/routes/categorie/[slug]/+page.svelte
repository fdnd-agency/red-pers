<script>
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';

    
    export let data;



    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>

<Header alwaysSticky={false}/>
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

/* Container voor posts */
    .posts-container {
        display: flex;
        flex-direction: column; /* Artikelen onder elkaar */
        gap: 1rem; /* Ruimte tussen de artikelen */
        padding: 3em 1.5em; /* Ruimte aan de zijkanten */
        align-items: center; /* Zorgt ervoor dat de posts in het midden staan */
        justify-content: center; /* Geeft meer ruimte rondom */
        box-sizing: border-box; /* Zorgt ervoor dat padding binnen de breedte valt */
    }

    .background{
        background-color: var(--paper-color);
    }

    
    /* Individuele post-kaart */
    .post-card {
        display: flex;
        justify-content: space-between; /* Zorgt ervoor dat de afbeelding altijd rechts komt */
        align-items: flex-start; /* Zorgt ervoor dat de titel bovenaan staat */
        width: 100%;
        max-width: 800px; /* Max breedte van het artikel */
        margin: 0 auto;
        padding: 1rem; /* Kleinere padding */
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box; /* Zorgt ervoor dat padding binnen de breedte valt */
        position: relative; /* Voor positionering van de info onderaan */
    }
    
    /* Afbeelding in de post - rechtse afbeelding */
    .post-image {
        object-fit: cover;
        width: 200px; /* Zorgt voor een breedte van de afbeelding */
        height: auto;
        border: 1px solid black;
        flex-shrink: 0; /* Zorgt ervoor dat de afbeelding niet krimpt */
    }
    
    /* Post-inhoud */
    .post-title {
        font-size: 1.2rem;
        margin: 0; /* Geen marge boven of onder de titel */
        flex-grow: 1; /* Zorgt ervoor dat de titel ruimte krijgt */
        padding-right: 1rem; /* Ruimte tussen de titel en de afbeelding */
    }
    
    /* Titel-link */
    .post-title-link {
        text-decoration: none;
        color: inherit;
    }
    
    .post-title-link:hover {
        text-decoration: underline;
    }
    
    /* Datum, leestijd, en auteur in de hoek onderaan */
    .post-meta {
        font-size: 0.8rem; /* Kleinere tekst voor de metadata */
        position: absolute;
        bottom: 0.5rem; /* Een beetje afstand van de onderkant */
        left: 1rem; /* Plaatst het naar links in de hoek */
        display: flex;
        gap: 0.2rem;
    }

    .post-author {
        font-weight: var(--font-style-bold); /* Vetgedrukte auteur */
    }
    
    @media (max-width: 768px) {
        .post-card {
            max-width: 600px; /* Kleinere max breedte voor tablets en kleiner */
        }
    
        .post-image {
            width: 120px; /* Kleinere afbeelding voor tablets */
            height: 120px; /* Zorgt dat de afbeelding proportioneel is */
        }
    }
    
    @media (max-width: 480px) {
        .post-title {
            font-size: 1rem; /* Kleinere titel op mobiele apparaten */
        }
    
        .post-meta {
            font-size: 0.7rem; /* Nog kleinere tekst voor mobiel */
        }
    
        .post-image {
            width: 100px; /* Kleinere afbeelding voor mobiele apparaten */
            height: 100px; /* Zorgt dat de afbeelding proportioneel is */
        }
    }
    
</style>
