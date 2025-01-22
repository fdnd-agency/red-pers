import wp from "$lib/wordpress";
import { categoriesData } from "$lib";

export async function load() {
    return {
        posts: await wp.posts().perPage(4), 
        categories: await Promise.all(categoriesData.map(async (category) => ({
            name: category.name,
            slug: category.slug,
            posts: await wp.posts().param('categories', category.id).perPage(3),
            color: category.color
        })))
    }
}