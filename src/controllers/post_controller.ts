import { postModel } from "../models/post_model"

class PostController {
    async getAll(from: string, to: string) {
        return await postModel.getAll(from, to)
    }

    async getCommentsByPostId(postId: string, from: string, to: string) {
        return await postModel.getCommentsByPostId(postId, from, to)
    }

    async getCommentsByUserId(userId: string) {
        return await postModel.getCommentsByUserId(userId)
    }
}

export const postController = new PostController();