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
/* Animatie voor het uitschoppen van de oude pagina naar links */
@keyframes slide-out-left {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-100%);
        opacity: 0; /* Verdoezelen bij het uitschoppen */
    }
}

/* Animatie voor de nieuwe pagina die van rechts komt */
@keyframes slide-in-right {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1; /* Nieuwe pagina verschijnt van rechts */
    }
}

/* Toepassing van de View Transition animaties voor schuif-effect */
:root::view-transition-old(root) {
    animation: slide-out-left 4000ms ease-in-out both;
    background: #f1e0d6; /* Zachte kerstachtige kleur met een crème tint */
    box-shadow: inset 0px 0px 30px rgba(255, 0, 0, 0.2); /* Subtiele kerstglans met een rode tint */
}

:root::view-transition-new(root) {
    animation: slide-in-right 4000ms ease-in-out both;
    background: #e3f9fe; /* Koude, frisse winterkleuren voor een fijne overgang */
    box-shadow: inset 0px 0px 20px rgba(0, 255, 255, 0.2); /* Koele wintergloed met een blauwe tint */
}

/* Optionele reductie voor motion: Als een gebruiker geen animaties wenst, zet deze dan uit */
@media (prefers-reduced-motion) {
    :root::view-transition-old(root),
    :root::view-transition-new(root) {
        animation: none !important;
    }
}

</style>

