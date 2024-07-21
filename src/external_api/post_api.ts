import { CLIENT_ID, CLIENT_SECRECT } from "../utils/key";
import { COMMENTS_URL_BY_POST, COMMENTS_URL_BY_USER, POST_URL_ALL } from "../utils/url";
import { sprintf } from 'sprintf-js';

async function getAll(from: number, to: number): Promise<any> {
  const url = sprintf(POST_URL_ALL, from, to)
  // console.log(url)
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "client_id": CLIENT_ID,
      "client_secret": CLIENT_SECRECT,
    }
  }
  )
  const data = await response.json()
  // console.log(data)
  return data
}

async function getCommentsByPostId(postId: string, from: number, to: number): Promise<any> {
  const url = sprintf(COMMENTS_URL_BY_POST, postId, from, to)
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "client_id": CLIENT_ID,
      "client_secret": CLIENT_SECRECT,
    }
  }
  )
  const data = await response.json()
  //console.log(data)
  return data
}

async function getCommentsByUserId(userId: string): Promise<any> {
  const url = sprintf(COMMENTS_URL_BY_USER,userId)
  // console.log(url)
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "client_id": CLIENT_ID,
      "client_secret": CLIENT_SECRECT,
    }
  }
  )
  const data = await response.json()
  // console.log(data)
  return data
}

export { getAll, getCommentsByPostId, getCommentsByUserId };

// getAll("1719792000", "1721174400")
// getCommentsByPostId("78752899", "1719792000", "1721174400")
// getCommentsByUserId("9393102")
