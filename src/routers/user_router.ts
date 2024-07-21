import { userController } from "../controllers/user_controller"
import { Request,Response, ResponseType } from "../utils/type"
import { ACTION_INCORRECT } from "../utils/message"

export async function routerForUser(request: Request):Promise<Response> {
    if (request.action === "/user/all") {
        return await userController.getAll()
    }

    if (request.action === "/user/id") {
        return await userController.getById(request?.body?.userId)
    }

    return { responseType: ResponseType.ERROR, message: ACTION_INCORRECT, body:null }
}