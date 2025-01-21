<script>
    import { onMount } from "svelte";
  
    let scrollProgress = 0; // De voortgangsbalk in percentage
  
    // Wanneer de component wordt gemonteerd, voeg een scroll-eventlistener toe
    onMount(() => {
      const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = (scrollTop / docHeight) * 100;
      };
  
      // Voeg scroll event listener toe
      window.addEventListener("scroll", updateScrollProgress);
  
      // Verwijder de event listener wanneer de component wordt vernietigd
      return () => window.removeEventListener("scroll", updateScrollProgress);
    });
  </script>
  
  <style>
    .scroll-watcher {
      position: fixed;
      top: 0;
      left: 0;
      height: 5px;
      background-color: #3498db;
      z-index: 1000;
    }
  
  </style>
  
  <!-- Scroll watcher element -->
  <div
    class="scroll-watcher"
    style="width: {scrollProgress}%"
  ></div>
  

  