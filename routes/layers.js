const express = require("express");
const fs = require("fs");
const router = express.Router();
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User } = require("../models");
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Establece el directorio para almacenar los archivos usando la carpeta ./public/assets/layers/nombre_de_la_categoria
		const dir = "./public/assets/layers/";
		cb(null, dir);
	},
	filename: function (req, file, cb) {
		// Utiliza req.body.name como nombre de archivo (puede que desees sanitizarlo)
		const sanitizedFileName = req.body.name.replace(/\s+/g, "_"); // Reemplaza los espacios por guiones bajos
		const originalExtension = file.originalname.split(".").pop(); // Obtiene la extensión original del archivo
		const newFileName = `${sanitizedFileName}.${originalExtension}`;
		cb(null, newFileName);
	},
});

const upload = multer({
	storage,
	limits: { fileSize: 10 * 1024 * 1024 }, // Set the file size limit to 10MB
});

const cpUpload = upload.fields([
	{ name: "icono", maxCount: 1 },
	{ name: "archive", maxCount: 1 },
]);

// Agrega una nueva layer
router.post("/", passport.authenticate("jwt", { session: false }), cpUpload, (req, res) => {
	helper.checkPermission(req.user.role_id, "layer_add")
		.then((rolePerm) => {
			const archiveFileName = req.files["archive"][0].filename;
			const iconoFileName = req.files["icono"][0].filename;
			if (!req.body.name || !req.body.category) {
				res.status(400).send({
					msg: "Please pass name or category.",
				});
			} else {
				// Get the category name based on the ID
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
});

// Consulta una layer por su nombre y categoría

router.get("/:category/:name", passport.authenticate("jwt", { session: false }), async (req, res) => {
		try {
			await helper.checkPermission(req.user.role_id, "layer_get");
			const layer = await Layer.findOne({
				where: {
					name: req.params.name,
				},
			});
			if (layer) {
				res.status(404).send({
					success: false,
					msg: "La layer ya existe.",
				});
			} 
			else {
				res.status(200).send({
					success: true,
				});
			}
		} 
		catch (err) {
			res.status(403).send(err);
		}
	}
);

router.get("/all", passport.authenticate("jwt", { session: false }), function (req, res) {
	helper.checkPermission(req.user.role_id, "layer_get_all")
		.then((rolePerm) => {
			Layer.findAll({
				where: {
					isActive: true,
				},
				include: [
					{
						model: Category,
						attributes: ["name", "isActive"],
						as: "categoryData",
						where: {
							isActive: 1,
						},
					},
				],
			})
				.then((layers) => {
					res.status(200).json(layers);
				})
				.catch((error) => {
					res.status(500).json({
						error: "Internal Server Error",
						success: false,
					});
				});
		})
		.catch((error) => {
			if (error.status === 401) {
				res.status(401).json({
					error: "Unauthorized",
				});
			} else {
				res.status(403).json({
					error: "Forbidden",
				});
			}
		});
});

// Consulta una layer por su id
router.get("/:id", passport.authenticate("jwt", { session: false, }), function (req, res) {
		helper.checkPermission(req.user.role_id, "layer_get")
		.then((rolePerm) => {
			Layer.findByPk(req.params.id)
				.then((layer) => {
					if (!layer) {
						res.status(404).json({
							success: false,
							error: "Layer no encontrada",
						});
					} else {
						res.status(200).json(layer);
					}
				})
				.catch((error) => {
					res.status(400).send(error);
				});
		})
		.catch((error) => {
			res.status(403).send(error);
		});
	}
);

router.put("/:id", passport.authenticate("jwt", { session: false }), cpUpload, (req, res) => {
		helper.checkPermission(req.user.role_id, "layer_update")
		.then((rolePerm) => {
			Category.findByPk(req.body.category).then((category) => {
				if (!category) {
					res.status(400).send({
						msg: "ID de categoría inválido.",
					});
				} else {
					Layer.findByPk(req.body.layerId).then((layer) => {
						const archiveFileName = req.files["archive"]
							? req.files["archive"][0].filename
							: layer.archive;
						const iconoFileName = req.files["icono"]
							? req.files["icono"][0].filename
							: layer.icono;

						// Antes de la actualización, verifica si existe una layer con el mismo nombre y categoría, si existe, no actualiza
						Layer.update(
							{
								name: req.body.name,
								archive: archiveFileName,
								category: req.body.category,
								icono: iconoFileName,
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
					});
				}
			});
		});
	}
);

router.delete("/:id", passport.authenticate("jwt", { session: false, }), function (req, res) {
		helper.checkPermission(req.user.role_id, "layer_delete")
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
				error: "Prohibido",
			});
		});
	}
);

module.exports = router;
