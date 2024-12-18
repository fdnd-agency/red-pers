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


/* Optionele reductie voor motion */
@media (prefers-reduced-motion) {
    :root::view-transition-old(root),
    :root::view-transition-new(root) {
        animation: none !important;
    }
}

</style>

