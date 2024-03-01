"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Layer extends Model {
    static associate(models) {
      Layer.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "categoryData",
      });

      Layer.hasMany(models.Polygon, {
        foreignKey: "layerId",
        as: "polygons",
      });
    }
  }

  Layer.init(
    {
      name: DataTypes.STRING,     
      icon: DataTypes.STRING,
      color: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Layer",
    }
  );

  return Layer;
};
