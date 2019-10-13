mkdir -p ./src/db/migrations 
file=./src/db/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts 
cat > $file << EOF
import { QueryInterface } from "sequelize";

module.exports = {
  // tslint:disable-next-line: no-shadowed-variable
  up: async (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.createTable(TABLE_NAME, {
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
    return queryInterface.dropTable(TABLE_NAME);
  },
};
EOF
echo "Created $1 migration in -> $file"