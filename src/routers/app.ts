import { Request, Response, ResponseType } from "../utils/type"
import { routerForPost } from "./post_router"
import { routerForUser } from "./user_router"
import { ACTION_INCORRECT } from "../utils/message"
import { routerByLog } from "./log_router"

export async function router(data: string): Promise<Response> {
    if (data === "") {
        return { responseType: ResponseType.ERROR, message: ACTION_INCORRECT, body: null }
    }

    const request: Request = JSON.parse(data)
    if (!request || !request.action || request.action === "") {
        return { responseType: ResponseType.ERROR, message: ACTION_INCORRECT, body: null }
    }

    if (request.action.indexOf("/post") === 0) {
        return await routerForPost(request)
    }

    if (request.action.indexOf("/user") === 0) {
        return await routerForUser(request)
    }

    if (request.action.indexOf("/log") === 0) {
        return await routerByLog(request)
    }

    return { responseType: ResponseType.ERROR, message: ACTION_INCORRECT, body:null }
}