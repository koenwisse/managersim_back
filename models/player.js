'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  player.init({
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    position: DataTypes.STRING,
    side: DataTypes.STRING,
    keeping: DataTypes.INTEGER,
    tackling: DataTypes.INTEGER,
    passing: DataTypes.INTEGER,
    shooting: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    control: DataTypes.INTEGER,
    heading: DataTypes.INTEGER,
    dribbling: DataTypes.INTEGER,
    flair: DataTypes.INTEGER,
    aggression: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    gamesPlayed: DataTypes.INTEGER,
    averageRating: DataTypes.INTEGER,
    valuedAt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};