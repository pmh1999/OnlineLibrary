'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isbn: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      publishYear: {
        type: Sequelize.DECIMAL
      },
      language: {
        type: Sequelize.STRING
      },
      haveCD: {
        type: Sequelize.BOOLEAN
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      imagePath: {
        type: Sequelize.TEXT
      },
      thumbnailPath: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};