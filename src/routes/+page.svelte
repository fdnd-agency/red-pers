<script>
    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };

    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Artikel from '$lib/Organism/Artikel.svelte';
    import CategoryPreview from '$lib/Organism/CategoryPreview.svelte';

    // Dynamische achtergrondkleur bij scrollen
    function handleBackgroundColorOnScroll() {
        window.addEventListener('scroll', updateBackgroundColor);
    }

    function updateBackgroundColor() {
        const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const hue = Math.min(scrollFraction * 360, 360);

        function setBackground(hue) {
    document.body.style.background = `linear-gradient(${hue}deg, 
        rgb(94, 25, 65),   
        rgb(36, 65, 102),  
        rgb(128, 73, 0),   
        rgb(92, 20, 123),  
        rgb(0, 76, 38) 
    )`;
}
    }

    document.addEventListener('DOMContentLoaded', () => {
        handleBackgroundColorOnScroll();
    });
</script>

<!-- Render Header -->
<Header />

<div class="background">
    <main>
        {#if data.posts}
            {#each data.posts as post}
                <Artikel post={post} />
            {/each}
        {:else}
            <p>No posts available</p>
        {/if}

        {#each data.categories as category}
            <CategoryPreview categoryName={category.name} categorySlug={category.slug} posts={category.posts} />
        {/each}
    </main>
</div>

<!-- Render Footer -->
<Footer />

<style>
.background {
    background: linear-gradient(
        0deg,
        rgb(94, 25, 65),  
        rgb(36, 65, 102), 
        rgb(128, 73, 0),  
        rgb(92, 20, 123), 
        rgb(0, 76, 38) 
    );
}
    main {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding-top: 1em;
        justify-content: center;
    }
</style>
