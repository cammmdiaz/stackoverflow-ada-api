import { postController } from "../controllers/post_controller"
import { Request } from "../utils/request_type"

export async function routerForPost(request: Request) {
    if (request.action === "/post/all") {
        return await postController.getAll(request.body.from, request.body.to)
    }

    if (request.action === "/post/comments") {
        return await postController.getCommentsByPostId(request.body.postId, request.body.from, request.body.to)
    }

    if (request.action === "/post/user/comments") {
        return await postController.getCommentsByUserId(request.body.userId)
    }

    return "This action was not found"
}