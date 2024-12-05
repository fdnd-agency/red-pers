<div class="scroll-watcher" style="background-image: {gradientStyle}"></div>

<style>

.scroll-watcher {
      height: 10px;
      position: fixed;
      top: 0;
      z-index: 1000;
      background-color: #D5302D; /* Fallback kleur */
      transform-origin: left;
      width: 100%;
      scale: 0 1;
      animation: scroll-watcher linear;
      animation-timeline: scroll();
      transition: background-image 0.2s ease-in-out; /* Vloeiende overgang van gradient */
    }

@keyframes scroll-watcher{
    to { scale: 1 1;}
    }

</style>

<script>
    import { onMount } from 'svelte';
    
    let gradientStyle = 'linear-gradient(to right, #ff7e5f, #feb47b)';
  
    const updateGradientOnScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const hue = Math.floor(scrollPercentage * 360); 
      const saturation = 100;  
      const lightness = 50;   
  
      gradientStyle = `linear-gradient(to right, hsl(${hue}, ${saturation}%, ${lightness}%), hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness}%))`;
    };
  
    onMount(() => {
      window.addEventListener('scroll', updateGradientOnScroll);
  
      return () => {
        window.removeEventListener('scroll', updateGradientOnScroll);
      };
    });
  </script>
  
