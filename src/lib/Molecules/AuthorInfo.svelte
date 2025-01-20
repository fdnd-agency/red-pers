<script>
    export let author
</script>

<div class="author-frame">
    <div class="profile">
        <img src={author.avatar_url} alt={author.display_name}>
        <a href="/author/{author.user_id}" class="button hidden-on-mobile">Bekijk profiel</a>
    </div>
    <article>
        <div>
            <h1><p>{author.display_name}</p></h1>
            <p>{author.job_title}</p>
            <p class="hidden-on-mobile">{author.description}</p>
        </div>
        <a href="/author/{author.user_id}" class="button hidden-on-desktop">&gt;</a>
    </article>

</div>

<style>
    .author-frame {
        display: flex;
        align-items: center;
        border: var(--border);
        max-width: 50em;
        padding: 1em;
        margin-bottom: 1em;
    }

    .profile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 1em;
        padding-left: 1em;
        padding-right: 2em;
        height: 100%;
        width: 10em;
    }

    img {
        border-radius: 50%;
    }

    article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .hidden-on-mobile {
        display: none;
    }

    @media only screen and (min-width: 750px) {
        .hidden-on-mobile {
            display: unset;
        }
        .hidden-on-desktop {
            display: none;
        }
    } 
</style>