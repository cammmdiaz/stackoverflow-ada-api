export interface Request {
    action: string,
    body: any | null,
}

export enum ResponseType {
    ERROR,
    SUCCESS,
}

export interface Response {
    responseType: ResponseType,
    message: string | null,
    body: any | null,
}