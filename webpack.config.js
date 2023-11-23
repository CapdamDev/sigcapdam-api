const path = require("path");

module.exports = {
	mode: "production",
	entry: "./bin/www",
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/",
		filename: "final.js",
	},
	target: "node",
    externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
};
