<main>
<h3>Steun Red Pers</h3>
<section class="donationbox">
    <p class="intro">
      Je las dit artikel gratis, maar dat betekent niet dat het Red Pers niets heeft gekost. Wij bieden jonge, aspirerende journalisten een podium én begeleiding. Dat kunnen we nog beter met jouw steun. Die steun komt met twee voor de prijs van één, want onze sponsor matcht jouw donatie. Geef jij ons vijf euro? Dan ontvangen wij een tientje.
    </p>
  
    <div class="donation-amounts">
      <button aria-label="Doneer 5 euro" class="amount-button">€5</button>
      <button aria-label="Doneer 10 euro" class="amount-button">€10</button>
      <button aria-label="Doneer 20 euro" class="amount-button">€20</button>
      <button aria-label="Doneer 50 euro" class="amount-button">€50</button>
    </div>
  
    <div class="other-donation">
      <button aria-label="Anders, vul zelf bedrag in">ANDERS</button>
    </div>
  </section>
</main>
  
<style>
main{
    --red-main:#E85340;
    --red-main-light: #F9D4CF;
    --red-main-lightest:#FFF4F2;
}

h3{
    color: var(--red-main);
}

p{
    color: var(--red-main);
    padding: 20px;
    font-weight: bold;
}

button{
    background-color: var(--red-main-light);
    color: var(--red-main);
    font-weight: bolder;
}

.donationbox{
    background-color: var(--red-main-lightest);
    outline: 1px solid var(--red-main);
}

.donation-amounts{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.donation-amounts button{
    width: 23%;
    margin-top: -60px;
    padding: 5px;
}

.other-donation{
    padding: 20px;
    margin-top: -50px;
}

.other-donation button{
    width: calc(4 * 25%);
    padding: 10px;
}

.donationbox{
    margin-bottom: 50px;
}

button:hover{
    background-color: var(--red-main);
    color: var(--red-main-lightest);
}

@media (min-width: 530px) {
    .donation-amounts button {
        padding: 10px;
        margin-bottom: 10px;
        width: 24%;
    }

    p{
        margin-bottom: 30px;
    }
}
</style>