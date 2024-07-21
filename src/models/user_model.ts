import { getAll, getById } from "../external_api/user_api";
import { USER_ID_INCORRECT } from "../utils/message";
import { Post } from "./post";
import { User } from "./user";

const INDEX_FIRST_ELEMENT = 0

class UserModel {
    public async getAll(): Promise<User[]> {
        const usersJson = await getAll();

        // console.info("[resultado] " + JSON.stringify(usersJson.items))

        return usersJson.items
    }

    public async getById(userId: string): Promise<User | null | string> {
        if (userId === "") {
            return USER_ID_INCORRECT
        }

        const userJson = await getById(userId);
        const items = userJson.items

        if (items.length === 0) {
            return null
        }

        return items[INDEX_FIRST_ELEMENT]
    }
}

export const userModel = new UserModel();

// const user = new UserModel()
// user.getAll()
