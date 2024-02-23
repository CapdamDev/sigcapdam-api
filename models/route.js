'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    static associate(models) {
      Route.belongsTo(models.User, {
        foreignKey: 'assignedUser',
        as: 'assignedUserData',
        targetKey: 'id', // Add this line to specify the target key
      });
    }
  }
  Route.init({
    routeNumber: DataTypes.INTEGER,
    assignedUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};