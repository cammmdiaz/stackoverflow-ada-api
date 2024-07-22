import { logController } from "../controllers/log_controller";
import { ACTION_INCORRECT } from "../utils/message";
import { Request, Response, ResponseType } from "../utils/type";

export async function routerByLog(Request: Request): Promise<Response> {
    if (Request.action === "/log/all") {
        return await logController.getAll()
    }

    return { responseType: ResponseType.ERROR, message: ACTION_INCORRECT, body: null }
}