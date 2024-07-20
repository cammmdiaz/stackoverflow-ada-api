import { sprintf } from 'sprintf-js';
import { CLIENT_ID, CLIENT_SECRECT } from "../utils/key";
import { USER_URL_ALL } from "../utils/url";
import { USER_URL_BY_ID } from "../utils/url";

async function getAll(): Promise<any> {
    const response = await fetch(USER_URL_ALL, {
        method: "GET",
        headers: {
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRECT,
        }
    })

    const data = await response.json()
    // console.log(data)
    return data
}

async function getById(userId: string): Promise<any> {
    const url = sprintf(USER_URL_BY_ID, userId)
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRECT,
        }
    })
    const data = await response.json()
    // console.log(data)
    return data
}

export { getAll, getById }

// getById()
// getAll()
