"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Layer extends Model {
    static associate(models) {
      Layer.belongsTo(models.Category, {
        foreignKey: "category",
        as: "categoryData",
      });
    }
  }

  Layer.init(
    {
      name: DataTypes.STRING, // Nombre del campo para el nombre de la capa
      archive: DataTypes.STRING, // Nombre del campo para el archivo de la capa
      category: DataTypes.INTEGER, // Nombre del campo para la categoría de la capa (clave foránea)
      icono: DataTypes.STRING, // Nombre del campo para el icono de la capa
      isActive: DataTypes.BOOLEAN, // Nombre del campo para indicar si la capa está activa o no
    },
    {
      sequelize,
      modelName: "Layer",
    }
  );

  return Layer;
};
