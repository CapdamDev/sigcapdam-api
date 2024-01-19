"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
require("dotenv").config();
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "production";

// Obtener la configuración de la base de datos de las variables de entorno
const config = {
	username: process.env.DB_USERNAME || "root",
	password: process.env.DB_PASSWORD || "",
	database: process.env.DB_DATABASE || "sigcapdam-apis",
	host: process.env.DB_HOST || "127.0.0.1",
	dialect: process.env.DB_DIALECT || "mysql",
};

const db = {};

let sequelize;
if (config.use_env_variable) {
	// Si se utiliza una variable de entorno para la conexión a la base de datos, se crea una instancia de Sequelize con esa variable
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} 
else {
	// Si no se utiliza una variable de entorno, se crea una instancia de Sequelize con la configuración proporcionada
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

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
