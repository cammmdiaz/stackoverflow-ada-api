import { userModel } from "../models/user_model";
import { Action, Log, RequestType } from "../models/log"
import { PARAMS_INCORRECT } from "../utils/message"
import { Response, ResponseType } from "../utils/type"
import { User } from "../models/user";
import { logModel } from "../models/log_model";

class UserController {
    async getAll(): Promise<Response> {
        const requestLog: Log = { type: RequestType.userGetAll, action: Action.REQUEST, params: {}, body: null }

        const users: User[] = await userModel.getAll()
        const sucessResponse: Response = { responseType: ResponseType.SUCCESS, message: null, body: users }

        const responseLog: Log = { type: RequestType.userGetAll, action: Action.RESPONSE, params: null, body: sucessResponse }
        logModel.save(requestLog, responseLog)

        return sucessResponse
    }

    async getById(userId: string | null | undefined): Promise<Response> {
        const requestLog: Log = { type: RequestType.getById, action: Action.REQUEST, params: { userId }, body: null }
        if (!userId) {
            const errorResponse: Response = { responseType: ResponseType.ERROR, message: PARAMS_INCORRECT, body: null }
            const responseLog: Log = { type: RequestType.getById, action: Action.RESPONSE, params: null, body: errorResponse }
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const result: User | null | string = await userModel.getById(userId)
        if (typeof result === "string") {
            const error: Response = { responseType: ResponseType.ERROR, message: result, body: null }
            const responseLog: Log = { type: RequestType.getById, action: Action.RESPONSE, params: null, body: error }
            logModel.save(requestLog, responseLog)

            return error
        }

        const sucessResponse: Response = { responseType: ResponseType.SUCCESS, message: null, body: result }

        const responseLog: Log = { type: RequestType.getById, action: Action.RESPONSE, params: null, body: sucessResponse }
        logModel.save(requestLog, responseLog)

        return sucessResponse
    }
}

export const userController = new UserController();