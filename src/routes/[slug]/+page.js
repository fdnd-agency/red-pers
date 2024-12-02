/** @type {import('./$types').PageLoad} */
import wp from "$lib/wordpress";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const post = (await wp.posts().slug(params.slug))[0];
    // If there is no post, return 404
    if (!post) {
        error(404);
    }

    // Find the 3 most recent posts that have the same author as `post`
    const authorPosts = await wp.posts().param('author', post.author).perPage(3);

    // Fetch the 3 most recent posts
    const additionalPosts = await wp.posts().perPage(3);

    return {
        post,
        authorPosts,
        additionalPosts
    }
}