"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Piet",
          lastName: "Verburg",
          email: "piet@verburg.com",
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jos",
          lastName: "Hendriks",
          email: "jos@hendriks.com",
          password: 5678,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
