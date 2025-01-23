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
      top: 78px;
      left: 0;
      height: 0.3em;
      background-color: #D5302D;
      z-index: 3;
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
  

  