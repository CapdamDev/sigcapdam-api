"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Layer extends Model {
    static associate(models) {
      Layer.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "categoryData",
      });
    }
  }

  Layer.init(
    {
      name: DataTypes.STRING,     
      icon: DataTypes.STRING,
      color: DataTypes.STRING,
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
