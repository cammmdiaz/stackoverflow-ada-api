import { Request } from "../utils/request_type"
import { routerForPost } from "./post_router"
import { routerForUser } from "./user_router"

export async function router(data: string) {
    const request: Request = JSON.parse(data)
    //todo validar.
    if (request.action.indexOf("/post")=== 0) {
        return await routerForPost(request)
    }

    if (request.action.indexOf("/user")=== 0) {
        return await routerForUser(request)
    }

    return "This action was not found"
}