"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Polygon extends Model {
		static associate(models) {
            Polygon.belongsTo(models.Layer,{
                foreignKey: "layerId",
                as: "layerData",
            })
		}
	}

	Polygon.init(
		{
            layerId: DataTypes.INTEGER,
            properties: DataTypes.JSON,
            geometry: DataTypes.JSON,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Polygon",
		}
	);

	return Polygon;
};
