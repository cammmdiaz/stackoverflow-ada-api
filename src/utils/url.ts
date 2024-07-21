const USER_BASE_URL: string = "https://api.stackexchange.com/2.3/users"

// IMPORTANT: since I have a key that has limited calls, I will always return from the first page, only 80 elements

export const USER_URL_ALL: string = `${USER_BASE_URL}?page=1&pagesize=80&order=desc&sort=reputation&site=stackoverflow`

export const USER_URL_BY_ID: string = `${USER_BASE_URL}/%s?order=desc&sort=reputation&site=stackoverflow`

const POST_BASE_URL: string ="https://api.stackexchange.com/2.3/posts"

export const POST_URL_ALL: string = `${POST_BASE_URL}?page=1&pagesize=80&fromdate=%i&todate=%i&order=desc&sort=activity&site=stackoverflow`

export const COMMENTS_URL_BY_POST = `${POST_BASE_URL}/%s/comments?page=1&pagesize=80&fromdate=%i&todate=%i&order=desc&sort=creation&site=stackoverflow`

export const COMMENTS_URL_BY_USER = `${USER_BASE_URL}/%s/comments?page=1&pagesize=80&order=desc&sort=creation&site=stackoverflow`
