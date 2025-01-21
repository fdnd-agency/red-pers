<script>
    import { onMount, onDestroy } from 'svelte';

    let year = new Date().getFullYear();

    const updateYear = () => {
        const currentYear = new Date().getFullYear();
        if (currentYear !== year) {
            year = currentYear;
        }
    };

    let interval;

    onMount(() => {
        interval = setInterval(updateYear, 1000 * 60 * 60 * 24); 
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/Footer.css">
</svelte:head>

<footer>
    <img src="images/redpersLogo.webp" alt="Red Pers Logo" height="48px" width="200px">
    <ul class="footer-layout">
        <li class="kopjes">
            <h3 class="kop-4">RUBRIEKEN</h3>
            <ul class="sub-list">
                <li><a href="/">Binnenland</a></li>
                <li><a href="/">Buitenland</a></li>
                <li><a href="/">Columns</a></li>
                <li><a href="/">Economie</a></li>
                <li><a href="/">Kunst & Media</a></li>
                <li><a href="/">Podcast</a></li>
                <li><a href="/">Politiek.</a></li>
                <li><a href="/">Wetenschap</a></li>
            </ul>
        </li>

        <li class="kopjes">
            <h3 class="kop-4">NAVIGATIE</h3>
            <ul class="sub-list">
                <li><a href="/">Colofon</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Doneren</a></li>
                <li><a href="/">Meedoen</a></li>
                <li><a href="/">Over Red Pers</a></li>
            </ul>
        </li>

        <li class="kopjes">
            <h3 class="kop-4">SERVICE</h3>
            <ul class="sub-list">
                <li><a href="/">Tip de redactie</a></li>
                <li><a href="/">Meld een fout</a></li>
            </ul>
        </li>

        <li class="kopjes">
            <h3 class="kop-4">MEER RED PERS</h3>
            <ul class="sub-list">
                <li><a href="/">Nieuwsbrief</a></li>
                <li><a href="/">LinkedIn</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">X Twitter</a></li>
            </ul>
        </li>
    </ul>

    <section class="end-footer">
        <p>© {year} Stichting Red Pers - Alle rechten voorbehouden</p>
        <ul class="end-footer-credits">
            <li><a href="/">Privacystatement</a></li>
            <li><a href="/">Cookiebeleid</a></li>
            <li><a href="/">Copyright</a></li>
        </ul>
    </section>
</footer>

