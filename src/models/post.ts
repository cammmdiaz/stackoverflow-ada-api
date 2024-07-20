import { User } from "./user";

export interface Post {
    score : number,
    lastActivityDate : number,
    creationDate : number,
    postType : string,
    postId : number,
    contentLicense : string,
    link : string,
    owner: User
}