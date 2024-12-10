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


    /* Keyframes for Spooky Blurs and Gradients View Transitions */
    @keyframes pooky-fade-in {
        from {
            opacity: 0;
            transform: scale(0.1) translateY(100px) rotate(45deg);
            filter: blur(50px) brightness(0.6) contrast(1.5) hue-rotate(90deg);
            background: linear-gradient(45deg, #000000, #ff6347, #8a2be2, #00bfff);
        }
        30% {
            opacity: 0.3;
            transform: scale(0.4) translateY(50px) rotate(30deg);
            filter: blur(30px) brightness(0.8) contrast(2) hue-rotate(180deg);
            background: linear-gradient(45deg, #8a2be2, #ff6347, #ff1493, #000000);
        }
        70% {
            opacity: 0.7;
            transform: scale(0.8) translateY(-30px) rotate(60deg);
            filter: blur(10px) brightness(1.2) contrast(1.8) hue-rotate(270deg);
            background: linear-gradient(45deg, #ff1493, #ff6347, #00bfff, #8a2be2);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(0);
            filter: blur(0) brightness(1) contrast(1) hue-rotate(0deg);
            background: linear-gradient(45deg, #ff6347, #ff1493, #8a2be2, #00bfff);
        }
    }

    @keyframes pooky-fade-out {
        to {
            opacity: 0;
            transform: scale(0.2) translateY(100px) rotate(-45deg);
            filter: blur(70px) brightness(0.3) contrast(0.5) hue-rotate(-180deg);
            background: linear-gradient(45deg, #000000, #ff1493, #ff6347, #8a2be2);
        }
    }

    @keyframes pooky-blur-glitch {
        0% {
            transform: scale(1) translateX(0) translateY(0);
            filter: blur(0) brightness(1) contrast(1);
        }
        20% {
            transform: scale(1.05) translateX(-10px) translateY(5px);
            filter: blur(5px) brightness(0.8) contrast(1.5);
        }
        40% {
            transform: scale(1.1) translateX(15px) translateY(-5px);
            filter: blur(15px) brightness(1.2) contrast(2);
        }
        60% {
            transform: scale(1.2) translateX(-20px) translateY(10px);
            filter: blur(25px) brightness(0.6) contrast(2.5);
        }
        80% {
            transform: scale(1.3) translateX(25px) translateY(-15px);
            filter: blur(35px) brightness(0.5) contrast(3);
        }
        100% {
            transform: scale(1) translateX(0) translateY(0);
            filter: blur(0) brightness(1) contrast(1);
        }
    }

    /* Pooky Blurs and Gradients View Transition */
    :root::view-transition-old(root) {
        animation:
            3000ms cubic-bezier(0.4, 0, 1, 1) both pooky-fade-out,
            3000ms cubic-bezier(0.4, 0, 0.2, 1) both pooky-blur-glitch;
        transform-style: preserve-3d;
        background: radial-gradient(circle, #000000, #ff6347, #8a2be2);
    }

    :root::view-transition-new(root) {
        animation:
            3500ms cubic-bezier(0, 0, 0.2, 1) 1500ms both pooky-fade-in,
            3000ms cubic-bezier(0.4, 0, 0.2, 1) both pooky-blur-glitch;
        transform-style: preserve-3d;
        background: radial-gradient(circle, #ff6347, #ff1493, #8a2be2, #00bfff);
    }

    /* Optional motion reduction */
    @media (prefers-reduced-motion) {
        :root::view-transition-old(root),
        :root::view-transition-new(root) {
            animation: none !important;
        }
    }
</style>

