import wp from "$lib/wordpress";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const post = (await wp.posts().slug(params.slug))[0];
    if (!post) {
        throw error(404, 'Post not found');
    }

    const authorPosts = await wp.posts().param('author', post.author).perPage(3);

    const additionalPosts = await wp.posts().perPage(3);

    return {
        post,
        authorPosts,
        additionalPosts
    }
}