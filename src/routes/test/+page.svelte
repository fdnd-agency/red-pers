<div class="scroll-watcher" style="background-image: {gradientStyle}"></div>
    <main>
       
        <!-- Artikel 1 -->
        <article>
            <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Licht en natuur">
            <h2>Het Belang van Duurzaam Leven</h2>
            <p>In de afgelopen jaren is er steeds meer aandacht gekomen voor duurzaamheid. Duurzaam leven heeft niet alleen voordelen voor het milieu, maar ook voor onze gezondheid en het behoud van natuurlijke hulpbronnen.</p>
            <p>Door kleine veranderingen in ons dagelijks leven aan te brengen, kunnen we bijdragen aan een duurzamere toekomst. Denk hierbij aan het verminderen van afval, het kiezen van herbruikbare producten en het bevorderen van energie-efficiëntie.</p>
        </article>
    
        <!-- Artikel 2 -->
        <article>
            <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Bos en natuur">
            <h2>De Toekomst van Kunstmatige Intelligentie</h2>
            <p>Kunstmatige intelligentie (AI) is een technologie die onze samenleving op verschillende manieren transformeert. Van zelfrijdende auto's tot geavanceerde data-analyse, AI speelt een steeds grotere rol in onze dagelijkse lives.</p>
            <p>Er is echter ook bezorgdheid over de impact van AI op de werkgelegenheid en de ethische vraagstukken die hiermee gepaard gaan. Het is belangrijk dat we zorgvuldig omgaan met de ontwikkeling van AI om een evenwicht te vinden tussen technologische vooruitgang en maatschappelijke verantwoordelijkheid.</p>
        </article>
    
        <!-- Artikel 3 -->
        <article>
            <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Bergen en lucht">
            <h2>De Impact van Sociale Media op Jongeren</h2>
            <p>Sociale media is niet meer weg te denken uit het leven van jongeren. Het gebruik van platforms zoals Instagram, TikTok en Snapchat heeft niet alleen invloed op hoe jongeren communiceren, maar ook op hun zelfbeeld en geestelijke gezondheid.</p>
            <p>Onderzoeken tonen aan dat overmatig gebruik van sociale media kan leiden tot gevoelens van isolatie, angst en depressie. Het is belangrijk voor ouders en opvoeders om de impact van sociale media op jongeren te begrijpen en hen te begeleiden in het verantwoord gebruiken van deze platforms.</p>
        </article>
    
        <!-- Artikel 4 -->
        <article>
            <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="Fjorden en natuur">
            <h2>Gezonde Eetgewoonten voor een Betere Levensstijl</h2>
            <p>Een gezond dieet is essentieel voor het behouden van een gezonde levensstijl. Het kiezen van voedzame voeding kan niet alleen je fysieke gezondheid verbeteren, maar ook je energie en algehele welzijn verhogen.</p>
            <p>Het is belangrijk om een evenwichtige benadering te hebben en te kiezen voor een gevarieerd dieet dat rijk is aan groenten, fruit, volkorenproducten en magere eiwitten. Daarnaast is het essentieel om voldoende water te drinken en te zorgen voor regelmatige lichaamsbeweging.</p>
        </article>
    </main>

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

article > img {
    filter: blur(50px); 
    animation: fade-in 1s linear forwards;
    animation-timeline: view();
    animation-range: entry;
}

@keyframes fade-in {
    to {
        filter: blur(0); 
    }
}

@media (prefers-reduced-motion: reduce) {
  /* Zet animaties en bewegingen uit voor gebruikers die reduced motion prefereren */
  article > img {
    animation: none;
    transition: none;
  }
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
  
    // Voeg scroll event listener toe bij component mounten
    onMount(() => {
      window.addEventListener('scroll', updateGradientOnScroll);
  
      // Verwijder de event listener bij unmounten van de component
      return () => {
        window.removeEventListener('scroll', updateGradientOnScroll);
      };
    });
  </script>
  