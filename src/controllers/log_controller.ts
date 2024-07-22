import { Log } from "../models/log"
import { logModel } from "../models/log_model"
import { Response, ResponseType } from "../utils/type"

class LogController {
    async getAll(): Promise<Response> {
        // For this request, I don't save logs
        const result: Log[] = await logModel.getAll()
        
        const response: Response = { responseType: ResponseType.SUCCESS, message: null, body: result }
        return response
    }
}

export const logController = new LogController()
