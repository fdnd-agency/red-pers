<div class="scroll-watcher"></div>

<style>

.scroll-watcher {
      height: 5px;
      position: fixed;
      top: 76.5px;
      z-index: 1000;
      background-color: var(--accent-color1);
      transform-origin: left;
      width: 100%;
      scale: 0 1;
      animation: scroll-watcher linear;
      animation-timeline: scroll();
      transition: background-image 0.2s linear; 
    }

@keyframes scroll-watcher{
    to { scale: 1 1;}
    }

    @media only screen and (max-width: 861px) {
        .scroll-watcher {
            top: 5em;
        }   

    }

</style>