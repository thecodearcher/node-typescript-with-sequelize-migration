import { QueryInterface } from "sequelize";

module.exports = {
  // tslint:disable-next-line: no-shadowed-variable
  up: async (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          name: "email",
          msg: "An account already exists with this email address.",
        },
        validate: {
          isEmail: { msg: "Please check this is a valid email" },
          notEmpty: { msg: "email can't be empty" },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // tslint:disable-next-line:variable-name
  down: async (queryInterface: QueryInterface, Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
    return queryInterface.dropTable("Users");
  },
};
