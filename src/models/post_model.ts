import { getAll, getCommentsByPostId, getCommentsByUserId } from "../external_api/post_api";
import { BAD_REQUEST } from "../utils/message";
import { Post } from "./post";

class PostModel {
    public async getAll(from: number, to: number): Promise<Post[] | string> {
        const postsJson = await getAll(from, to);
        if (postsJson?.error_id) {
            return BAD_REQUEST + postsJson?.error_message + " " + postsJson?.error_name
        }
        return postsJson.items
    }

    public async getCommentsByPostId(postId: string, from: number, to: number): Promise<Post[] | string> {
        const commentsJson = await getCommentsByPostId(postId, from, to);
        if (commentsJson?.error_id) {
            return BAD_REQUEST + commentsJson?.error_message + " " + commentsJson?.error_name
        }
        return commentsJson.items
    }

    public async getCommentsByUserId(userId: string): Promise<Post[] | string> {
        const commentsJson = await getCommentsByUserId(userId);
        if (commentsJson?.error_id) {
            return BAD_REQUEST + commentsJson?.error_message + " " + commentsJson?.error_name
        }
        return commentsJson.items
    }
}

export const postModel = new PostModel();