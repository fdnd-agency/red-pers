<script>
    import ArticleInfoFrame from '$lib/Organism/ArticleInfoFrame.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import ArticleSmall from '$lib/Molecules/ArticleSmall.svelte';
    import Footer from '$lib/Organism/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    const post = data.post;
    import AuthorInfo from '$lib/Molecules/AuthorInfo.svelte';
    import DonationBox from '$lib/Molecules/DonationBox.svelte';
    import ArticleTools from '../../lib/Molecules/ArticleTools.svelte';

    let fontSizeBig = false;

    function changeFontSize() {
        fontSizeBig = !fontSizeBig; // flip value of fontSizeBig
    }
</script>

<Header/>
<ArticleInfoFrame post={post}></ArticleInfoFrame>

<main>
    <ArticleTools changeFontSizeFunction={changeFontSize}></ArticleTools>
    {#if post}
    <!-- @html means: there is html in this string, render it -->
    <article>
        <p class:large={fontSizeBig}>{@html post.content.rendered} </p>
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

    .large {
        font-size: large;
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