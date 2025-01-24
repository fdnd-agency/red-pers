<script>
    import ArticleExcerpt from '$lib/Organism/ArticleExcerpt.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import ArticleSmall from '$lib/Molecules/ArticleSmall.svelte';
    import Footer from '$lib/Organism/Footer.svelte';
    import AuthorInfo from '$lib/Molecules/AuthorInfo.svelte';
    import DonationBox from '$lib/Molecules/DonationBox.svelte';
    import ArticleTools from '../../lib/Molecules/ArticleTools.svelte';
    import ScrollWatcher from '$lib/Molecules/ScrollWatcher.svelte';

    export let data;
    
    const post = data.post;
    let fontSizeBig = false;

    function changeFontSize() {
        fontSizeBig = !fontSizeBig;
    }
</script>

<Header/>
<ScrollWatcher />
<ArticleExcerpt post={post}></ArticleExcerpt>

<main>
    <ArticleTools fontSizeBig={fontSizeBig} changeFontSizeFunction={changeFontSize}></ArticleTools>
    {#if post}
    <article>
        <div class="content" class:large={fontSizeBig}>{@html post.content.rendered}</div>
        <DonationBox />
        <h2>Dit artikel werd geschreven door</h2>
        <AuthorInfo author={post.authors[0]}></AuthorInfo>
    </article>
  
    {:else}
        <p>No post available</p>
    {/if}

    <h2>Meer van {post.authors[0].display_name}</h2>
    <ArticleSmall posts={data.authorPosts}/>
    <h2>Meer van Red Pers</h2>
    <ArticleSmall posts={data.additionalPosts}/>
</main>

<Footer/>

<style>
    main {
        max-width: var(--article-width);
        padding: 0 1em;
    }

    .content {
        font-size: 18px;
        font-style: 'source-serif-pro';
    }

    :global(.content a) {
        color: var(--accent-color1);
    }

    :global(.content p) {
        font-family: var(--font-alt);
        line-height: 30px;
    }

    :global(.content a:hover) {
        text-decoration: underline;
    }

    .large {
        font-size: 20px;
    }

    article {
        margin-bottom: 5em;
    }

    :global(.wp-block-gallery, .wp-block-image) {
        margin: 0;
        margin-bottom: 1em;
    }
    
    :global(article img) {
        width: 100%;
        height: auto;
    }
</style>