const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: process.env.DB_DIALECT, // Specify the database dialect (e.g., 'mysql', 'postgres', 'sqlite')
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

module.exports = sequelize;
