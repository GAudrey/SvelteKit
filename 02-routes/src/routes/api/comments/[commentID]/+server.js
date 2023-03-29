import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentID } = params;
    const comment = comments.find((comment) => comment.id === parseInt(commentID));

    return json(comment);
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentID } = params;
    const { text } = await request.json();
    const comment = comments.find((comment) => comment.id === parseInt(commentID));

    comment.text = text;

    return json(comment);
}

export async function DELETE(requestEvent) {
    const { params } = requestEvent;
    const{ commentID } = params;
    const deletedComment = comments.find((comment) => comment.id === parseInt(commentID));
    const index = comments.findIndex((comment) => comment.id === parseInt(commentID));

    comments.splice(index, 1);

    return json(deletedComment);
}