"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

// Obtener la configuración de la base de datos de las variables de entorno
const config = {
	username: "root",
	password: "",
	database: "sigcapdam-api",
	host: "localhost",
	dialect: "mysql",
	timezone: "-06:00",
	dialectOptions: {
		dateStrings: true,
		typeCast: function (field, next) { // for reading from database
			if (field.type === 'DATETIME') {
			return field.string()
			}
			return next()
		},
	},
};

const db = {};

let sequelize;

// Si no se utiliza una variable de entorno, se crea una instancia de Sequelize con la configuración proporcionada
sequelize = new Sequelize(
	config
);

fs.readdirSync(__dirname)
	.filter((file) => {
		// Filtrar los archivos del directorio actual que sean archivos JavaScript y no sean el archivo actual ni archivos ocultos
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		// Importar el modelo y agregarlo al objeto db
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		// Si el modelo tiene una función "associate", se llama para establecer las asociaciones entre los modelos
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
