// place files you want to import through the `$lib` alias in this folder.

export { default as Artikelklein } from'$lib/Molecules/Artikelklein.svelte';

export { default as Footer } from '$lib/Organism/Footer.svelte'

export { default as Header } from '$lib/Organism/Header.svelte';

export { default as Donatiebtn} from '$lib/Molecules/Donatiebtn.svelte';

export { default as Donatiebox } from '$lib/Molecules/Donatiebox.svelte';


// This is an array with the data for categories with all the correct id's and slugs
export const categoriesData = [
    {"id": 9, "name": "Binnenland", "slug": "binnenland"},
    {"id": 1010, "name": "Buitenland", "slug": "buitenland"}, 
    {"id": 7164, "name": "Column", "slug": "column"},
    {"id": 6, "name": "Economie", "slug": "economie"},
    {"id": 4, "name": "Kunst & Media", "slug": "kunst-media"},
    {"id": 3211, "name": "Podcasts", "slug": "podcast"},
    {"id": 63, "name": "Politiek", "slug": "politiek"},
    {"id": 94, "name": "Wetenschap", "slug": "wetenschap"},
];