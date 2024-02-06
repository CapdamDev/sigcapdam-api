'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.User, {
        foreignKey: "department_id",
        as: "users",
      });
      Department.belongsTo(models.Direction, {
        foreignKey: "direction_id",
        as: "directionData",
      })
    }
  }
  Department.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};