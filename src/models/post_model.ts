import { getAll, getCommentsByPostId, getCommentsByUserId } from "../external_api/post_api";
import { Post } from "./post";

class PostModel {
    public async getAll(from: string, to: string): Promise<Post[]> {
        const postsJson = await getAll(from,to);
        return postsJson.items
    }

    public async getCommentsByPostId(postId: string, from: string, to: string): Promise<Post[]> {
        const commentsJson = await getCommentsByPostId(postId,from,to);
        return commentsJson.items
    }

    public async getCommentsByUserId(userId: string): Promise<Post[]> {
        const commentsJson = await getCommentsByUserId(userId);
        return commentsJson.items
    }
}

export const postModel = new PostModel ();