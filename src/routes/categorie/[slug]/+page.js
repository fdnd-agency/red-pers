import wp from "$lib/wordpress";
import { error } from "@sveltejs/kit";
import { categoriesData } from "$lib/index.js";

export async function load({ params }) {
    const category = categoriesData.find((category) => category.slug === params.slug)

    if (!category) {
        error(404)
    }

    return {
        posts: await wp.posts().param("categories", category.id)
    }
}