import { IUser, UserModel } from ".";
import { BaseController } from "../baseController";

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class UserController extends BaseController {
    // private _userService = new UserService();

    public getUserDetails = async (id) => {
    }

    public addUser = async (user: IUser) => {
        console.log(UserModel);
        const i = await UserModel.create(user);
        return this.sendResponse(i);
    }
}
