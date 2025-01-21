<script>
    import { onMount } from "svelte";
  
    let scrollProgress = 0; 
  
    onMount(() => {
      const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = (scrollTop / docHeight) * 100;
      };
  
      window.addEventListener("scroll", updateScrollProgress);
  
      return () => window.removeEventListener("scroll", updateScrollProgress);
    });
  </script>
  
  <style>
    .scroll-watcher {
      position: fixed;
      top: 0;
      left: 0;
      height: 0.5em;
      background-color: #D5302D;
      z-index: 1000;
    }

    @media only screen and (max-width: 861px) {
        .scroll-watcher {
            top: 5em;
        }   
    }
  
  </style>
  
  <div
    class="scroll-watcher"
    style="width: {scrollProgress}%"
  ></div>
  

  