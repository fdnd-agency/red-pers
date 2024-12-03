
    <div class="scroll-watcher"></div>
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
    .scroll-watcher{
        height: 10px;
        position: fixed;
        top: 0;
        z-index: 1000;
        background-color: #D5302D;
        transform-origin: left;
        width: 100%;
        scale: 0 1;
        animation: scroll-watcher linear;
        animation-timeline: scroll()
    }

    article > img {
    filter: blur(10px); 
    animation: fade-in 1s linear forwards;
    animation-timeline: view();
    animation-range: contain;
}

@keyframes fade-in {
    to {
        filter: blur(0); 
    }
}


    @keyframes scroll-watcher{
        to { scale: 1 1;}
    }
</style>