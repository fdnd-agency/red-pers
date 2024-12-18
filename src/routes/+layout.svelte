<link rel="stylesheet" href="/global.css">


<slot></slot>

<script>
    import { onNavigate } from '$app/navigation';

onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>

<style>
/* Kerstthema overgangsanimaties */
/* Fade-out animatie voor oude pagina */
@keyframes simple-fade-out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.95); /* Kleine schaalverkleining voor een subtiel effect */
    }
}

/* Fade-in animatie voor nieuwe pagina */
@keyframes simple-fade-in {
    0% {
        opacity: 0;
        transform: scale(1.05); /* Start iets groter voor een vloeiende overgang */
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Toepassing van de View Transition animaties */
:root::view-transition-old(root) {
    animation: simple-fade-out 4000ms ease-in-out both;
    background: radial-gradient(circle, #fef5e7, #ffe4c4); /* Subtiele kerstkleuren: zacht wit naar crème */
}

:root::view-transition-new(root) {
    animation: simple-fade-in 4000ms ease-in-out both;
    background: radial-gradient(circle, #e3f9fe, #d0f0fd); /* Subtiele winterkleuren: lichtblauw */
}

/* Optionele reductie voor motion */
@media (prefers-reduced-motion) {
    :root::view-transition-old(root),
    :root::view-transition-new(root) {
        animation: none !important;
    }
}


/* Sneeuwval toe te voegen aan de overgang */
@keyframes snow-fall {
    0% {
        transform: translateY(-100px) translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateY(200px) translateX(-50px);
        opacity: 0;
    }
}

.snowflake {
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    animation: snow-fall 3s linear infinite;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

.snowflake:nth-child(2) {
    left: 25%;
    animation-duration: 4s;
    animation-delay: 0.5s;
}

.snowflake:nth-child(3) {
    left: 75%;
    animation-duration: 5s;
    animation-delay: 1s;
}

/* Optionele reductie voor motion */
@media (prefers-reduced-motion) {
    :root::view-transition-old(root),
    :root::view-transition-new(root) {
        animation: none !important;
    }

    .snowflake {
        animation: none !important;
    }
}

</style>

<div class="snowflakes">
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
</div>
