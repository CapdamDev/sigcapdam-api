"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Método auxiliar para definir las asociaciones.
		 * Este método no es parte del ciclo de vida de Sequelize.
		 * El archivo `models/index` llamará a este método automáticamente.
		 */
		static associate(models) {
			User.belongsTo(models.Role, {
				foreignKey: "role_id",
				as: "roleData",
			});
		}
	}
	User.init(
		{
			role_id: DataTypes.INTEGER,
			profilePic: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ape_pat: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ape_mat: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	User.beforeSave(async (user, options) => {
		if (user.password) {
			user.password = bcrypt.hashSync(
				user.password,
				bcrypt.genSaltSync(10),
				null
			);
		}
	});
	User.beforeBulkUpdate(async (user, options) => {
		if (user.attributes.password) {
			user.attributes.password = bcrypt.hashSync(
				user.attributes.password,
				bcrypt.genSaltSync(10),
				null
			);
		}
	});
	User.prototype.comparePassword = function (passw, cb) {
		bcrypt.compare(passw, this.password, function (err, isMatch) {
			if (err) {
				return cb(err);
			}
			cb(null, isMatch);
		});
	};
	return User;
};
