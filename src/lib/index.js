// place files you want to import through the `$lib` alias in this folder.

export { default as Artikelklein } from'$lib/Molecules/Artikelklein.svelte';

export { default as Footer } from '$lib/Organism/Footer.svelte'

export { default as Header } from '$lib/Organism/Header.svelte';

export { default as Donatiebtn} from '$lib/Molecules/Donatiebtn.svelte';

export { default as Donatiebox } from '$lib/Molecules/Donatiebox.svelte';

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    // Bron: https://css-tricks.com/snippets/javascript/random-hex-color/
    // Bron: https://stackoverflow.com/questions/17204335/convert-decimal-to-hex-missing-padded-0
}

// This is an array with the data for categories with all the correct id's and slugs
export const categoriesData = [
    {id: 9, name: "Binnenland", slug: "binnenland", color: randomColor()},
    {id: 1010, name: "Buitenland", slug: "buitenland", color: randomColor()},
    {id: 7164, name: "Column", slug: "column", color: randomColor()},
    {id: 6, name: "Economie", slug: "economie", color: randomColor()},
    {id: 4, name: "Kunst & Media", slug: "kunst-media", color: randomColor()},
    {id: 3211, name: "Podcasts", slug: "podcast", color: randomColor()},
    {id: 63, name: "Politiek", slug: "politiek", color: randomColor()},
    {id: 94, name: "Wetenschap", slug: "wetenschap", color: randomColor()},
];