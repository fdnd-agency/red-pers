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
@keyframes retro-liquid-line-out {
    0% {
        opacity: 1;
        transform: scale(1) translateY(0) skew(0deg);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        filter: hue-rotate(0deg) brightness(1) contrast(1) saturate(1);
    }
    10% {
        clip-path: polygon(30% 5%, 90% 0, 70% 95%, 10% 85%);
        transform: scale(1.2) translateY(-50px) rotate(10deg) skew(15deg);
        filter: hue-rotate(90deg) brightness(1.2) contrast(1.5) saturate(1.5); /* Slight brightness increase, more saturation */
    }
    30% {
        clip-path: polygon(0 25%, 95% 5%, 90% 75%, 5% 95%);
        transform: scale(1.5) translateY(-100px) rotate(-20deg) skew(30deg);
        filter: hue-rotate(180deg) brightness(1.4) contrast(2) saturate(2); /* Brighter and more saturated */
    }
    50% {
        clip-path: polygon(35% 0, 90% 20%, 95% 90%, 25% 100%);
        transform: scale(2) translateY(-150px) rotate(30deg) skew(45deg);
        filter: hue-rotate(270deg) brightness(1.5) contrast(2.5) saturate(3); /* Even more vibrant */
    }
    70% {
        clip-path: polygon(5% 15%, 85% 0, 60% 85%, 10% 100%);
        transform: scale(2.5) translateY(-200px) rotate(-40deg) skew(60deg);
        filter: hue-rotate(330deg) brightness(1.6) contrast(3) saturate(4); /* Getting more intense */
    }
    90% {
        clip-path: polygon(50% 5%, 80% 30%, 50% 95%, 15% 80%);
        transform: scale(3) translateY(-250px) rotate(50deg) skew(75deg);
        filter: hue-rotate(400deg) brightness(1.8) contrast(4) saturate(5); /* Colors "tripping" */
    }
    100% {
        opacity: 0;
        transform: scale(3.5) translateY(-300px) rotate(60deg) skew(30deg);
        clip-path: polygon(50% 0, 100% 25%, 50% 100%, 0 75%);
        filter: hue-rotate(480deg) brightness(1) contrast(5) saturate(6); /* Final vibrant color burst */
    }
}

@keyframes retro-liquid-line-in {
    0% {
        opacity: 0;
        transform: scale(0.4) translateY(300px) rotate(-60deg) skew(-90deg);
        clip-path: polygon(50% 0, 100% 25%, 50% 100%, 0 75%);
        filter: hue-rotate(480deg) brightness(1) contrast(5) saturate(6); /* Starting with vibrant colors */
    }
    10% {
        clip-path: polygon(50% 5%, 80% 30%, 50% 95%, 15% 80%);
        transform: scale(0.6) translateY(250px) rotate(-50deg) skew(-75deg);
        filter: hue-rotate(400deg) brightness(1.2) contrast(4) saturate(5);
    }
    30% {
        clip-path: polygon(5% 15%, 85% 0, 60% 85%, 10% 100%);
        transform: scale(0.8) translateY(200px) rotate(40deg) skew(-60deg);
        filter: hue-rotate(330deg) brightness(1.3) contrast(3) saturate(4);
    }
    50% {
        clip-path: polygon(35% 0, 90% 20%, 95% 90%, 25% 100%);
        transform: scale(1) translateY(150px) rotate(-30deg) skew(-45deg);
        filter: hue-rotate(270deg) brightness(1.4) contrast(2.5) saturate(3);
    }
    70% {
        clip-path: polygon(0 25%, 95% 5%, 90% 75%, 5% 95%);
        transform: scale(1.5) translateY(100px) rotate(20deg) skew(-30deg);
        filter: hue-rotate(180deg) brightness(1.5) contrast(2) saturate(2);
    }
    90% {
        clip-path: polygon(30% 5%, 90% 0, 70% 95%, 10% 85%);
        transform: scale(2) translateY(50px) rotate(-10deg) skew(-15deg);
        filter: hue-rotate(90deg) brightness(1.6) contrast(1.5) saturate(1.5);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0) rotate(0deg) skew(0deg);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        filter: hue-rotate(0deg) brightness(1) contrast(1) saturate(1);
    }
}

:root::view-transition-old(root) {
    animation:
        7000ms ease-in-out both retro-liquid-line-out; /* Smoother transition */
    transform-style: preserve-3d;
}

:root::view-transition-new(root) {
    animation:
        7000ms ease-in-out 1000ms both retro-liquid-line-in; 
    transform-style: preserve-3d;
}

/* Optional motion reduction */
@media (prefers-reduced-motion) {
    :root::view-transition-old(root),
    :root::view-transition-new(root) {
        animation: none !important;
    }
}

</style>


