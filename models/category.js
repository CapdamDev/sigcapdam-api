"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
/**
 * Representa un modelo de categoría.
 * @class
 * @extends Model
 */
  class Category extends Model {
    static associate(models) {
      // Define la asociación aquí desde la capa hasta la categoría
      Category.hasMany(models.Layer, {
        as: "layers",
        foreignKey: "category",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
