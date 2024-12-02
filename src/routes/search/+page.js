/** @type {import('./$types').PageLoad} */
import wp from "$lib/wordpress";

export async function load({url}) {
    const searchterm = url.searchParams.get("searchterm");
    return {
        posts: await wp.posts().search(searchterm),
        searchterm
    }
}