const express = require("express");
const fs = require("fs");
const router = express.Router();
const User = require("../models").User;
const Role = require("../models").Role;
const Category = require("../models").Category;
const Permission = require("../models").Permission;
const Layer = require("../models").Layer;
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Get the category name to be used to save the files in the correct category folder
		Category.findByPk(req.body.category).then((category) => {
			if (!category) {
				res.status(400).send({
					msg: "Invalid category ID.",
				});
			} else {
				// Set the directory to store the files using the ./public/assets/layers/category.name folder
				const dir = "./public/assets/layers/";
				const categoryDir = dir + category.name;

				cb(null, categoryDir);
			}
		});
		// cb(null, "./public/assets/layers/POZOS DE CONAGUA");
	},
	filename: function (req, file, cb) {
		// Use the req.body.name as the filename (you may want to sanitize it)
		const sanitizedFileName = req.body.name.replace(/\s+/g, "_"); // Replace spaces with underscores
		const originalExtension = file.originalname.split(".").pop(); // Get the original file extension
		const newFileName = `${sanitizedFileName}.${originalExtension}`;
		cb(null, newFileName);
	},
});

const upload = multer({ storage });

const cpUpload = upload.fields([
	{ name: "icono", maxCount: 1 },
	{ name: "archive", maxCount: 1 },
]);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	cpUpload,
	(req, res) => {
		helper
			.checkPermission(req.user.role_id, "layer_add")
			.then((rolePerm) => {
				if (!req.body.name || !req.body.category) {
					res.status(400).send({
						msg: "Please pass name or category.",
					});
				} else {
					// Get the category name based on the ID

					console.log("DATA: ", req.body);
					console.log("FILES: ", req.files);

					Category.findByPk(req.body.category)
						.then((category) => {
							if (!category) {
								res.status(400).send({
									msg: "Invalid category ID.",
								});
							} else {
								// Create a directory for the category icon
								try {
									// Check if directory already exists
									const dir = "./public/assets/layer_icons/";
									const categoryDir = dir + category.name;
									if (!fs.existsSync(categoryDir)) {
										fs.mkdirSync(categoryDir);
										console.log("Directory is created.");
									} else {
										console.log("Directory already exists.");
									}
								} catch (err) {
									console.log(err);
								}

								const archiveFileName = req.files["archive"][0].filename;
								const iconoFileName = req.files["icono"][0].filename;

								console.log("DATA: ", req.body);
								console.log("FILES: ", req.files);

								Layer.create({
									name: req.body.name,
									archive: archiveFileName,
									category: req.body.category,
									icono: iconoFileName,
									isActive: 1,
								})
									.then((layer) => res.status(201).send(layer))
									.catch((error) => {
										console.log(error);
										res.status(400).send(error);
									});
							}
						})
						.catch((error) => {
							console.log(error);
							res.status(400).send(error);
						});
				}
			})
			.catch((error) => {
				res.status(403).send(error);
			});
	}
);

router.get(
	"/all",
	passport.authenticate("jwt", {
		session: false,
	}),
	function (req, res) {
		helper
			.checkPermission(req.user.role_id, "layer_get_all")
			.then((rolePerm) => {
				Layer.findAll({
					where: {
						isActive: true,
					},
					include: [
						{
							model: Category,
							attributes: ["name"],
							as: "categoryData",
						},
					],
				})
					.then((layers) => {
						// Send the layers as a JSON response to the client
						res.status(200).json(layers);
					})
					.catch((error) => {
						res.status(500).json({
							error: "Internal Server Error",
						});
					});
			})
			.catch((error) => {
				res.status(403).json({
					error: "Forbidden",
				});
			});
	}
);

// Consulta una layer por su id
router.get(
	"/:id",
	passport.authenticate("jwt", {
		session: false,
	}),
	function (req, res) {
		helper
			.checkPermission(req.user.role_id, "layer_get")
			.then((rolePerm) => {
				Layer.findByPk(req.params.id)
					.then((layer) => res.status(200).send(layer))
					.catch((error) => {
						res.status(400).send(error);
					});
			})
			.catch((error) => {
				res.status(403).send(error);
			});
	}
);

// Actualiza los datos generales de la layer
router.put(
	"/:id",
	passport.authenticate("jwt", {
		session: false,
	}),
	function (req, res) {
		helper
			.checkPermission(req.user.role_id, "layer_update")
			.then((rolePerm) => {
				Layer.update(
					{
						name: req.body.name,
						archive: req.body.archive,
						category: req.body.category,
						icono: req.body.icono,
					},
					{
						where: {
							id: req.params.id,
						},
					}
				)
					.then((layer) =>
						res.status(201).send({
							data: "success",
						})
					)
					.catch((error) => {
						res.status(400).send(error);
					});
			})
			.catch((error) => {
				res.status(403).json({
					error: "Forbidden",
				});
			});
	}
);

router.delete(
	"/:id",
	passport.authenticate("jwt", {
		session: false,
	}),
	function (req, res) {
		helper
			.checkPermission(req.user.role_id, "layer_delete")
			.then((rolePerm) => {
				Layer.update(
					{
						isActive: false,
					},
					{
						where: {
							id: req.params.id,
						},
					}
				)
					.then((layer) =>
						res.status(201).send({
							data: "success",
						})
					)
					.catch((error) => {
						res.status(400).send(error);
					});
			})
			.catch((error) => {
				res.status(403).json({
					error: "Forbidden",
				});
			});
	}
);

module.exports = router;
