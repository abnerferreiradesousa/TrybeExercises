'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Books", [
      {
        title: "A volta dos que nao foram",
        author: "Abner",
        pageQuantity: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Books", null, {});
  }
};
