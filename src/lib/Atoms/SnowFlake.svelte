<script>
    // Bron: https://codepen.io/alphardex/pen/dyPorwJ
    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    const size = rand(5, 15); // px
    const opacity = rand(0, 1);
    const x = rand(0, 100); // vw
    const y = rand(0, 100); // vw
    const speed = rand(1, 4); // vh / s
</script>

<div class="flake" style="--size: {size}; --opacity: {opacity}; --x: {x}; --y: {y}; --speed: {speed}" />

<style>
    .flake {
        width: calc(var(--size) * 1px);
        height: calc(var(--size) * 1px);
        border-radius: calc(var(--size) * 1px);
        opacity: var(--opacity);
        background-color: white;
        border: 1px solid black;

        position: fixed;
        animation: flake linear infinite;
        animation-duration: calc(100s / var(--speed));
        animation-delay: calc(var(--y) * -100s / var(--speed));
        left: calc(var(--x) * 1vw);

        z-index: 1;
        pointer-events: none; /* allow user to click through snow */
    }

    @keyframes flake {
        from {
            top: 0;
        }
        to {
            top: 100vh;
        }
    }
</style>