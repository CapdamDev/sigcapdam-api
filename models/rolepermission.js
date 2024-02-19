"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class RolePermission extends Model {
		static associate(models) {
			// Define una relación de la base de datos en caso de existir
		}
	}

	RolePermission.init(
		{
			role_id: DataTypes.INTEGER,
			perm_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "RolePermission",
		}
	);

	return RolePermission;
};
