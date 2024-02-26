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
      Route.belongsTo(models.Layer, {
        foreignKey: 'layerId',
        as: 'layerData',
        targetKey: 'id', //
      });
    }
  }
  Route.init({
    routeNumber: DataTypes.INTEGER,
    assignedUser: DataTypes.INTEGER,
    layerId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};