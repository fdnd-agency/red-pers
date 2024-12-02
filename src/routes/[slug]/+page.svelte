<script>
    import ArtikelInfoframe from '$lib/Organism/ArtikelInfoframe.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import ArtikelKlein from '$lib/Molecules/Artikelklein.svelte';
    import Footer from '$lib/Organism/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    const post = data.post;
    import Makersblok from '$lib/Molecules/Makersblok.svelte';
    import Donatiebox from '$lib/Molecules/Donatiebox.svelte';
    import ArtikelTools from '../../lib/Molecules/ArtikelTools.svelte';

    let fontSizeBig = false;

    function changeFontSize() {
        fontSizeBig = !fontSizeBig; // flip value of fontSizeBig
    }
</script>

<Header/>
<ArtikelInfoframe post={post}></ArtikelInfoframe>

<main>
    <ArtikelTools changeFontSizeFunction={changeFontSize}></ArtikelTools>
    {#if post}
    <!-- @html means: there is html in this string, render it -->
    <article>
        <p class:large={fontSizeBig}>{@html post.content.rendered} </p>
        <Donatiebox />
        <h2>Dit artikel werd geschreven door</h2>
        <Makersblok author={post.authors[0]}></Makersblok>
    </article>
  
{:else}
    <p>No post available</p>
{/if}

<h2>Meer van {post.authors[0].display_name}</h2>
<ArtikelKlein posts={data.authorPosts}/>
<h2>Meer van Red Pers</h2>
<ArtikelKlein posts={data.additionalPosts}/>

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