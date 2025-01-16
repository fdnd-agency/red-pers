<div class="scroll-watcher"></div>

<style>

.scroll-watcher {
      height: 10px;
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

@keyframes scroll-watcher{
    to { scale: 1 1;}
    }

</style>