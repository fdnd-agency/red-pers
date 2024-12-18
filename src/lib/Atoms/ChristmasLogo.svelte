<div class='logo'>
    <div class='balls'>
        {#each "RED" as char}
            <div class='ball'>
                <div class="hanger"></div>
                <span>{char}</span>
            </div>
        {/each}
    </div>
    <span>PERS</span>
</div>

<style>
.logo {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: black;
    font-family: 'Underwood';
}

.balls {
    display: flex;
    position: relative;
    margin-right: 10px;

    transition: transform 1s;
}

.ball {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: -10px;
    border-radius: 100%;
    color: var(--background-color);
    border: var(--border);

    --hanger-color: rgb(77, 85, 75);

    transition: transform 1s;
}

.logo:hover .balls {
    transform: rotate(180deg);
}

.logo:hover .ball {
    transform: rotate(-180deg);
}

.ball:nth-child(odd) {
    background-image: linear-gradient(to bottom, #b53131 50%, #692626);
    box-shadow:inset 0px 2px 1px  #CE0000, inset 0px -4px 0px 2px #490303;
    z-index: 2;
}

.ball:nth-child(even) {
    background-color: var(--text-color);
    background-image: linear-gradient(to bottom, #31673e 50%, #165625);
    box-shadow:inset 0px 2px 1px  #023402, inset 0px -4px 0px 2px var(--text-color);
    z-index: 1;
}

.hanger:before {
    content: '';
    display: block;
    position: relative;

    --size: 6px;
    width: var(--size);
    height: var(--size);
    left: calc(5px - var(--size));
    top: -11px;

    border-radius: var(--size);
    border: 3px solid var(--hanger-color);
}

.hanger {
    position: relative;

    background-color: var(--hanger-color);
    
    width: 10px;
    height: 3px;
    top: -25px;
    margin-bottom: -10px;
}

.hanger:after {
    content: '';
    display: block;
    position: relative;

    background-color: var(--hanger-color);
    border-radius: 2px;

    width: 16px;
    height: 5px;

    top: -9px;
    left: calc(5px - 16px / 2);
}
</style>