const express = require("express");
const fs = require("fs");
const router = express.Router();
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User, Route } = require("../models");
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
		// Check the size of the file
		if (file.size > 50 * 1024 * 1024) {
			return cb(new Error("File size is too large. Max file size is 50MB."));
		}
		// Utiliza req.body.name como nombre de archivo (puede que desees sanitizarlo)
		const sanitizedFileName = req.body.name.replace(/\s+/g, "_"); // Reemplaza los espacios por guiones bajos
		const originalExtension = file.originalname.split(".").pop(); // Obtiene la extensión original del archivo
		const newFileName = `${sanitizedFileName}.${originalExtension}`;
		const filePath = `./public/assets/layers/${newFileName}`;
		fs.access(filePath, fs.constants.F_OK, (err) => {
			if (err) {
				// File does not exist, proceed with the upload
				cb(null, newFileName);
			} else {
				// File already exists, do nothing
				cb(null, "");
			}
		});
	},
});

const upload = multer({
	storage,
	limits: { fileSize: 50 * 1024 * 1024 }, 
});

// Ruta para subir los dos archivos
router.post("/upload", upload.fields([
	{ name: "archive", maxCount: 1 },
	{ name: "icono", maxCount: 1 },
]), (req, res) => {
	try {
		if (!req.files || !req.files["archive"] || !req.files["icono"]) {
			res.status(400).send({
				success: false,
				msg: "Please upload both archive and icono files.",
			});
		} else {
			res.status(200).send({
				success: true,
				msg: "Files uploaded successfully.",
			});
		}
	} catch (error) {
		res.status(500).send({
			success: false,
			msg: "Internal Server Error",
		});
	}
});

// Agrega una nueva layer
router.post("/", passport.authenticate("jwt", { session: false }), upload.fields([
	{ name: "archive", maxCount: 1 },
	{ name: "icono", maxCount: 1 },
]), (req, res) => {
	helper.checkPermission(req.user.role_id, "layer_add")
		.then((rolePerm) => {
			const archiveFileName = req.files["archive"][0].filename;
			console.log(req.files["archive"][0]["filename"]);
			const iconoFileName = req.files["icono"][0].filename;
			console.log(req.files["icono"][0]["filename"]);
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
		} else {
			res.status(200).send({
				success: true,
			});
		}
	} catch (err) {
		res.status(403).send(err);
	}
});

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

router.get("/routes", passport.authenticate("jwt", { session: false }), function (req, res) {
	helper.checkPermission(req.user.role_id, "layer_get_all")
		.then((rolePerm) => {
			Layer.findAll({
				where: {
					category: 4,
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

// Consulta una layer por su id y anexa la info del JSON de la layer
// router.get("/:id", passport.authenticate("jwt", { session: false }), function (req, res) {
// 	helper.checkPermission(req.user.role_id, "layer_get")
// 		.then((rolePerm) => {
// 			Layer.findByPk(req.params.id)
// 				.then((layer) => {
// 					if (!layer) {
// 						res.status(404).json({
// 							success: false,
// 							error: "Layer no encontrada",
// 						});
// 					} else {
// 						const layerJson = JSON.parse(
// 							fs.readFileSync(`./public/assets/layers/${layer.name}.json`, "utf8")
// 						);
// 						res.status(200).json({
// 							layer: layer,
// 							layerJson: layerJson,
// 						});
// 					}
// 				})
// 				.catch((error) => {
// 					res.status(400).send(error);
// 				});
// 		})
// 		.catch((error) => {
// 			res.status(403).send(error);
// 		});
// });

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
});

router.put("/:id", passport.authenticate("jwt", { session: false }), upload.fields([
	{ name: "archive", maxCount: 1 },
	{ name: "icono", maxCount: 1 },
]), (req, res) => {
	helper.checkPermission(req.user.role_id, "layer_update")
		.then(() => {
			Category.findByPk(req.body.category).then((category) => {
				if (!category) {
					res.status(400).send({
						msg: "ID de categoría inválido.",
					});
				} else {
					Layer.findByPk(req.body.layerId).then(() => {
						let archiveFileName;
						let iconoFileName;
						
						if (req.files && req.files["archive"] && req.files["archive"][0]) {
							archiveFileName = req.files["archive"][0].filename;
						}
						
						if (req.files && req.files["icono"] && req.files["icono"][0]) {
							iconoFileName = req.files["icono"][0].filename;
						}

						// Log the archiveFileName and iconoFileName
						console.log(archiveFileName);
						console.log(iconoFileName);

						
						if(archiveFileName !== 'undefined' && iconoFileName !== 'undefined' || archiveFileName !== undefined || iconoFileName !== undefined) {
							// Handle the case when either archiveFileName or iconoFileName is defined
							// Update the layer with the provided information
							Layer.update(
								{
									name: req.body.name,
									category: req.body.category,
									archive: archiveFileName,
									icono: iconoFileName,
								},
								{
									where: {
										id: req.params.id,
									},
								}
							)
								.then(() =>
									res.status(201).send({
										data: "success",
									})
								)
								.catch((error) => {
									res.status(400).send(error);
								});
						}
						else if(archiveFileName !== 'undefined' && iconoFileName === 'undefined') {
							// Handle the case when archiveFileName is defined but iconoFileName is not defined
							// Update the layer with the provided information
							Layer.update(
								{
									name: req.body.name,
									category: req.body.category,
									archive: archiveFileName,
								},
								{
									where: {
										id: req.params.id,
									},
								}
							)
								.then(() =>
									res.status(201).send({
										data: "success",
									})
								)
								.catch((error) => {
									res.status(400).send(error);
								});
						}
						else if(archiveFileName === 'undefined' && iconoFileName !== 'undefined') {
							// Handle the case when archiveFileName is not defined but iconoFileName is defined
							// Update the layer with the provided information
							Layer.update(
								{
									name: req.body.name,
									category: req.body.category,
									icono: iconoFileName,
								},
								{
									where: {
										id: req.params.id,
									},
								}
							)
								.then(() =>
									res.status(201).send({
										data: "success",
									})
								)
								.catch((error) => {
									res.status(400).send(error);
								});
						}
						else {
							// Antes de la actualización, verifica si existe una layer con el mismo nombre y categoría, si existe, no actualiza
							Layer.update(
								{
									name: req.body.name,
									category: req.body.category,
								},
								{
									where: {
										id: req.params.id,
									},
								}
							)
								.then(() =>
									res.status(201).send({
										data: "success",
									})
								)
								.catch((error) => {
									res.status(400).send(error);
								});
						} 
					});
				}
			});
		});
});

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
});

module.exports = router;
