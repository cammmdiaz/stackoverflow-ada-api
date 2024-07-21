export enum RequestType {
    postGetAll,
    getCommentsByPostId,
    getCommentsByUserId,
    userGetAll,
    getById,
}

export enum Action {
    REQUEST,
    RESPONSE,
}

export interface Log {
    type: RequestType,
    action: Action,
    params: any | null,
    body: any | null,
}
