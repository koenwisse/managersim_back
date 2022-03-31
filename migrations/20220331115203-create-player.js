'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastName: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      side: {
        type: Sequelize.STRING
      },
      keeping: {
        type: Sequelize.INTEGER
      },
      tackling: {
        type: Sequelize.INTEGER
      },
      passing: {
        type: Sequelize.INTEGER
      },
      shooting: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      control: {
        type: Sequelize.INTEGER
      },
      heading: {
        type: Sequelize.INTEGER
      },
      dribbling: {
        type: Sequelize.INTEGER
      },
      flair: {
        type: Sequelize.INTEGER
      },
      aggression: {
        type: Sequelize.INTEGER
      },
      stamina: {
        type: Sequelize.INTEGER
      },
      gamesPlayed: {
        type: Sequelize.INTEGER
      },
      averageRating: {
        type: Sequelize.INTEGER
      },
      valuedAt: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('players');
  }
};