import { userModel } from "../models/user_model";

class UserController {
    async getAll() {
        return await userModel.getAll()
    }

    async getById(userId: string) {
        return await userModel.getById(userId)
    }
}

export const userController = new UserController();