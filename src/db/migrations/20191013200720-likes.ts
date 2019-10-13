import { QueryInterface } from "sequelize";

module.exports = {
  // tslint:disable-next-line: no-shadowed-variable
  up: async (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.createTable("likes", {
      // add table columns here
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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

  down: async (queryInterface: QueryInterface, Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
    return queryInterface.dropTable("likes");
  },
};
