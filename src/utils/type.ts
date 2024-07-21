export enum ResponseType {
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
}

export interface Request {
    action: string,
    body: any | null,
}

export interface Response {
    responseType: ResponseType,
    message: string | null,
    body: any | null,
}