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
    name: DataTypes.STRING,
    direction_id: DataTypes.INTEGER, // Foreign key for the direction
    isActive: DataTypes.BOOLEAN, // Assuming you have an isActive column
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};
