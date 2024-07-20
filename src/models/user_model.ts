import { getAll, getById } from "../external_api/user_api";
import { Post } from "./post";
import { User } from "./user";

class UserModel {
    public async getAll(): Promise<User[]> {
        const usersJson = await getAll();

        // console.info("[resultado] " + JSON.stringify(usersJson.items))

        return usersJson.items
    }

    public async getById(userId: string): Promise<User[] | string> {
        const userjason = await getById(userId);
        return userjason.items
    }
}

const user = new UserModel()
user.getAll()