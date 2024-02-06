'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direction extends Model {
    static associate(models) {
      // Define the association here
      Direction.hasMany(models.Department, {
        foreignKey: "direction_id",
        as: "departments",
      });
    }
  }
  Direction.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Direction',
  });
  return Direction;
};