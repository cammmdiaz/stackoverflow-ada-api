import { postController } from "../controllers/post_controller"
import { Request ,Response, ResponseType} from "../utils/type"
import { ACTION_INCORRECT } from "../utils/message"

export async function routerForPost(request: Request):Promise<Response> {
    
    if (request.action === "/post/all") {
        return await postController.getAll(request.body.from, request.body.to)
    }

    if (request.action === "/post/comments") {
        return await postController.getCommentsByPostId(request.body.postId, request.body.from, request.body.to)
    }

    if (request.action === "/post/user/comments") {
        return await postController.getCommentsByUserId(request.body.userId)
    }

    return { responseType: ResponseType.ERROR, message: ACTION_INCORRECT, body:null }
}