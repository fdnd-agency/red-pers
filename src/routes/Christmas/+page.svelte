<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };

    import { onMount } from 'svelte';
    import Footer from '$lib/Organism/Footer.svelte';
    import Header  from '$lib/Organism/Header copy.svelte';
    import Artikel from '$lib/Organism/Artikel copy.svelte';
    import CategoryPreview from '$lib/Organism/CategoryPreview copy.svelte'; 

    // Play audio automatically when component is mounted
    onMount(() => {
        const audio = document.getElementById('christmas-audio');
        if (audio) {
            audio.play().catch((error) => {
                console.error("Audio play failed:", error);
            });
        }
    });
</script>

<!-- Snowflakes container -->
<div class="snowflakes">
    {#each Array(500).fill() as _, index}
        <div class="snowflake" style="animation-delay: {index * 0.2}s; left: {Math.random() * 100}%;"></div>
    {/each}
</div>

<audio id="christmas-audio" autoplay loop>
    <source src="/we-wish-you-a-merry-christmas-128367.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>

<Header />

<div class="background">
    <div class="svg-container">
        <svg width="732px" height="75px" viewBox="114 88 732 82" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <filter id="glow" width="200%" height="200%" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="12.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g id="Light1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(129.000000, 117.000000) rotate(9.000000) translate(-129.000000, -117.000000) translate(119.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#FF3E3E" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="-5.68434189e-14" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(229.000000, 117.000000) rotate(-9.000000) translate(-229.000000, -117.000000) translate(219.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#50F446" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="4.26325641e-14" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(329.000000, 117.000000) rotate(5.000000) translate(-329.000000, -117.000000) translate(319.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#FF9F19" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="-7.10542736e-15" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(429.000000, 117.000000) rotate(-2.000000) translate(-429.000000, -117.000000) translate(419.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#221DFF" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="-1.42108547e-14" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(529.000000, 117.000000) rotate(-9.000000) translate(-529.000000, -117.000000) translate(519.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#FFFFFF" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="2.84217094e-14" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy-5" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(629.000000, 117.000000) rotate(18.000000) translate(-629.000000, -117.000000) translate(619.000000, 89.000000)">
                <ellipse class="light" id="Oval" stroke="#F51F1F" fill="#FF3E3E" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="-1.42108547e-14" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy-7" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(729.000000, 117.000000) rotate(3.000000) translate(-729.000000, -117.000000) translate(719.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#50F346" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="2.13162821e-14" width="16" height="22" rx="4"></rect>
            </g>
            <g id="Light1-Copy-6" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(829.000000, 117.000000) rotate(-13.000000) translate(-829.000000, -117.000000) translate(819.000000, 89.000000)">
                <ellipse class="light" id="Oval" fill="#FF9F1A" cx="10" cy="37.5" rx="10" ry="18.5"></ellipse>
                <rect id="Rectangle" fill="#496E4C" x="2" y="0" width="16" height="22" rx="4"></rect>
            </g>
            <path d="M137,94 C137,94 213.5,102 227,95.5 C240.5,89 319,89.0008917 330.5,91.5 C342,93.9991083 423.5,99.5 431,92.5 C438.5,85.5 511,99.5 529,91 C547,82.5 635.5,96.5 635.5,96.5 C635.5,96.5 720,104 735,97.5 C750,91 826,96.5 826,96.5" id="Path-2" stroke="#496E4C" stroke-width="1" fill="none"></path>
        </svg>
    </div>
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

<Footer />

<style>
 .background {
    background-image: url('/black-background-with-snowflakes-falling-style-cartoon-depicting-christmas-concept_1273183-1014.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

    .svg-container {
        display: flex;
        justify-content: center;
        align-items: flex-start; /* Adjusted to position higher */
    }

    svg {
        display: block;
        margin-top: 5px; /* Adjust to move it higher */
    }

 /* Glow animation for lights, going from dim to bright from left to right */
@keyframes glowAnimation {
    0% {
        opacity: 0.2; /* Dim at the start */
    }
    50% {
        opacity: 1; /* Bright at the middle */
    }
    100% {
        opacity: 0.2; /* Return to dim */
    }
}

/* Add a delay for each light to create a staggered effect */
.light {
    animation: glowAnimation 2s ease-in-out infinite;
}




    main {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding-top: 1em;
        justify-content: center;
    }

    .snowflakes {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        pointer-events: none;
        z-index: 1000;
    }

    .snowflake {
        position: absolute;
        top: -10px;
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        animation: snow-fall 10s linear infinite;
        opacity: 0.8;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    }

    @keyframes snow-fall {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) translateX(-50px);
            opacity: 0;
        }
    }
</style>
