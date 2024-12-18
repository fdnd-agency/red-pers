<script>
    import { goto } from '$app/navigation'; // SvelteKit router
    import { createEventDispatcher, onMount } from 'svelte';

    export let isOn = false; 

    let audio;

    onMount(() => {
        audio = new Audio('/ho-ho-ho-merry-christmas-santa-claus-181123.mp3'); // Replace with your actual audio file path

        audio.addEventListener('error', (error) => {
            console.error('Error loading audio:', error);
        });
    });

    const dispatch = createEventDispatcher();

    const toggleSwitch = async () => {
        isOn = !isOn; 
        dispatch('toggle', { isOn });

        if (isOn) {
            if (audio.readyState >= audio.HAVE_ENOUGH_DATA) { 
                audio.play(); 
            } else {
                console.warn("Audio not ready for playback."); 
            }

            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    goto('/Christmas');
                });
            } else {
                goto('/Christmas');
            }
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSwitch();
        }
    };
</script>

<style>
    :root {
        --on-color: #f00; /* Kerstlicht aan (rood) */
        --off-color: #555; /* Kerstlicht uit (grijs) */
        --knob-color: white; /* Kleur van de knop */
        --shadow-color: rgba(0, 0, 0, 0.2);
    }

    .switch {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        background: var(--off-color);
        border-radius: 20px;
        width: 70px;
        height: 30px;
        position: relative;
        box-shadow: 0 4px 10px var(--shadow-color);
        transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .switch.on {
        background: var(--on-color);
        box-shadow: 0 0 15px var(--on-color), 0 0 30px var(--on-color);
    }

    .knob {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 26px;
        height: 26px;
        background: var(--knob-color);
        border-radius: 50%;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        box-shadow: 0 2px 5px var(--shadow-color);
    }

    .switch.on .knob {
        transform: translateX(40px);
        box-shadow: 0 0 10px var(--knob-color), 0 0 20px var(--knob-color);
    }

    /* Kerstlichtjes */
    .lights {
        position: absolute;
        top: -20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    .light {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: red;
        animation: blink 1.5s infinite;
    }

    .light:nth-child(2) {
        background: green;
        animation-delay: 0.3s;
    }

    .light:nth-child(3) {
        background: yellow;
        animation-delay: 0.6s;
    }

    .light:nth-child(4) {
        background: blue;
        animation-delay: 0.9s;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
    }

    .label {
        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        color: var(--on-color);
        transition: color 0.3s ease-in-out;
    }

    .switch.on + .label {
        color: var(--on-color);
    }
</style>

<div 
    role="button" 
    tabindex="0" 
    class="switch {isOn ? 'on' : ''}" 
    on:click={toggleSwitch} 
    on:keydown={handleKeyDown} 
    aria-pressed={isOn}
>
    <div class="lights">
        <div class="light"></div>
        <div class="light"></div>
        <div class="light"></div>
        <div class="light"></div>
    </div>
    
    <div class="knob"></div>
</div>
<span class="label">{isOn ? 'Aan' : 'Uit'}</span>