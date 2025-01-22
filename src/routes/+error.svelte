<script>
    import Header from '$lib/Organism/Header.svelte';
    import Footer from '$lib/Organism/Footer.svelte';
</script>

<Header/>

<div class="container">
    <h1>Oeps! Iets is misgegaan! 🚫</h1>
    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Oops GIF" class="error-gif">
    <p class="error-message">404 - Pagina niet gevonden!</p>
    <p>Het lijkt erop dat de pagina die je zocht, net als je sokken na het wassen, verdwenen is! 🧦</p>
    <a href="/" class="btn">Terug naar de homepage</a>
</div>

<style>
    .container {
        text-align: center;
        background-color: var(--background-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    .error-gif {
        width: 300px;
        height: auto;
    }

    .error-message {
        font-size: 1.5em;
        color: #ff6347; 
    }

    .btn {
        display: inline-block;
        padding: 10px 20px;
        background-color: #ff6347; 
        color: white;
        text-decoration: none;
        border-radius: 5px; 
        transition: background-color 0.3s; 
    }

    .btn:hover {
        background-color: #ff4500;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 30px;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 25px;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 23px;
        }
    }
</style>

<Footer/>