import { userController } from "../controllers/user_controller"
import { Request } from "../utils/request_type"

export async function routerForUser(request: Request) {
    if (request.action === "/user/all") {
        return await userController.getAll()
    }

    if (request.action === "/user/id") {
        return await userController.getById(request.body.userId)
    }

    return "This action was not found"
}