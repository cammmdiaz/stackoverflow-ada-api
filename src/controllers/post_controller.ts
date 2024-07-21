import { Action, Log, RequestType } from "../models/log"
import { logModel } from "../models/log_model"
import { Post } from "../models/post"
import { postModel } from "../models/post_model"
import { getValidDate } from "../utils/date"
import { DATE_INCORRECT, PARAMS_INCORRECT } from "../utils/message"
import { Response, ResponseType } from "../utils/type"

class PostController {
    async getAll(from: string | null | undefined, to: string | null | undefined): Promise<Response> {
        const requestLog: Log = { type: RequestType.postGetAll, action: Action.REQUEST, params: { from, to }, body: null }
        if (!from || !to) {
            const errorResponse: Response = { responseType: ResponseType.ERROR, message: PARAMS_INCORRECT, body: null }
            const responseLog: Log = { type: RequestType.postGetAll, action: Action.RESPONSE, params: null, body: errorResponse }
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const fromDate: Date | null = getValidDate(from)
        const toDate: Date | null = getValidDate(to)
        if (!fromDate || !toDate) {
            const errorResponse: Response = { responseType: ResponseType.ERROR, message: DATE_INCORRECT, body: null }
            const responseLog: Log = { type: RequestType.postGetAll, action: Action.RESPONSE, params: null, body: errorResponse }
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const posts: Post[] = await postModel.getAll(fromDate.getTime(), toDate.getTime())
        const sucessResponse: Response = { responseType: ResponseType.SUCCESS, message: null, body: posts }

        const responseLog: Log = { type: RequestType.postGetAll, action: Action.RESPONSE, params: null, body: sucessResponse }
        logModel.save(requestLog, responseLog)

        return sucessResponse
    }

    async getCommentsByPostId(postId: string | null | undefined, from: string | null | undefined, to: string | null | undefined): Promise<Response> {
        const requestLog: Log = { type: RequestType.getCommentsByPostId, action: Action.REQUEST, params: { postId, from, to }, body: null }
        if (!postId || postId === "" || !from || !to) {
            const errorResponse: Response = { responseType: ResponseType.ERROR, message: PARAMS_INCORRECT, body: null }
            const responseLog: Log = { type: RequestType.getCommentsByPostId, action: Action.RESPONSE, params: null, body: errorResponse }
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const fromDate: Date | null = getValidDate(from)
        const toDate: Date | null = getValidDate(to)
        if (!fromDate || !toDate) {
            const errorResponse: Response = { responseType: ResponseType.ERROR, message: DATE_INCORRECT, body: null }
            const responseLog: Log = { type: RequestType.postGetAll, action: Action.RESPONSE, params: null, body: errorResponse }
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const posts: Post[] = await postModel.getCommentsByPostId(postId, from, to)
        const sucessResponse: Response = { responseType: ResponseType.SUCCESS, message: null, body: posts }

        const responseLog: Log = { type: RequestType.getCommentsByPostId, action: Action.RESPONSE, params: null, body: sucessResponse }
        logModel.save(requestLog, responseLog)

        return sucessResponse
    }

    async getCommentsByUserId(userId: string | null | undefined) {
        const requestLog: Log = { type: RequestType.getCommentsByUserId, action: Action.REQUEST, params: { userId }, body: null }
        if (!userId || userId === "") {
            const errorResponse: Response = { responseType: ResponseType.ERROR, message: PARAMS_INCORRECT, body: null }
            const responseLog: Log = { type: RequestType.getCommentsByUserId, action: Action.RESPONSE, params: null, body: errorResponse }
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const posts: Post[] = await postModel.getCommentsByUserId(userId)
        const sucessResponse: Response = { responseType: ResponseType.SUCCESS, message: null, body: posts }

        const responseLog: Log = { type: RequestType.getCommentsByUserId, action: Action.RESPONSE, params: null, body: sucessResponse }
        logModel.save(requestLog, responseLog)

        return sucessResponse
    }
}

export const postController = new PostController();