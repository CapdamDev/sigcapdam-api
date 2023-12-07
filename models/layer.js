'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Layer extends Model {
    static associate(models) {
      Layer.belongsTo(models.Category, {
        foreignKey: 'category',
        as: 'categoryData',
      });
    }
  }

  Layer.init({
    name: DataTypes.STRING,
    archive: DataTypes.STRING,
    category: DataTypes.INTEGER, // Assuming category is an integer (foreign key)
    icono: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Layer',
  });

  return Layer;
};
