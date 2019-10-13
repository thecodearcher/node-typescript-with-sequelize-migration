import Sequelize, { Model } from "sequelize";
import { DB } from "../../shared/database";

export class UserModel extends Model { }
UserModel.init(
    {
        email: {
            type: Sequelize.STRING,
        },
        firstName: {
            type: Sequelize.STRING,
            validate: {
                min: 2,
            },
        },
        lastName: {
            type: Sequelize.STRING,
            validate: {
                min: 2,
            },
        },

    }, {
    sequelize: DB,
    modelName: "Users",
},
);
