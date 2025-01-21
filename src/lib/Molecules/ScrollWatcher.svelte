<script>
    import { onMount } from "svelte";
  
    onMount(() => {
      // Check of CSS scroll-timeline wordt ondersteund
      const supportsScrollTimeline = CSS && CSS.supports("animation-timeline: scroll()");
  
      if (!supportsScrollTimeline) {
        // Fallback: Dynamisch de breedte van .scroll-watcher aanpassen bij scrollen
        const scrollWatcher = document.querySelector(".scroll-watcher");
  
        window.addEventListener("scroll", () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = (scrollTop / docHeight) * 100;
  
          scrollWatcher.style.width = `${scrollProgress}%`;
        });
      }
    });
  </script>
  
  <div class="scroll-watcher"></div>
  
  <style>
    .scroll-watcher {
      height: 0.5em;
      position: fixed;
      top: 0;
      z-index: 1000;
      background-color: var(--accent-color1);
      transform-origin: left;
      width: 100%;
      scale: 0 1;
      animation: scroll-watcher linear;
      animation-timeline: scroll();
      transition: background-image 0.2s ease-in-out;
    }
  
    @keyframes scroll-watcher {
      to {
        scale: 1 1;
      }
    }
  
    @media only screen and (max-width: 861px) {
      .scroll-watcher {
        top: 5em;
      }
    }
  </style>
  