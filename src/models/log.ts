export enum RequestType {
    postGetAll = "postGetAll",
    getCommentsByPostId = "getCommentsByPostId",
    getCommentsByUserId = "getCommentsByUserId",
    userGetAll = "userGetAll",
    getById = "getById",
}

export enum Action {
    REQUEST = "REQUEST",
    RESPONSE = "RESPONSE",
}

export interface Log {
    type: RequestType,
    action: Action,
    params: any | null,
    body: any | null,
}
