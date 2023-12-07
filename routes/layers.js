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

// Crear/guardar una layer
router.post('/', passport.authenticate('jwt', {
	session: false
}), function (req, res) {
	helper.checkPermission(req.user.role_id, 'layer_add').then((rolePerm) => {
		if (!req.body.name || !req.body.category) {
			res.status(400).send({
				msg: 'Please pass name or category.'
			})
		} else {
			// Crear una carpeta para el icono de la layer
			try {
				// check if directory already exists
				const dir = './public/assets/layer_icons/';
				if (!fs.existsSync(dir + req.body.category)) {
					fs.mkdirSync(dir + req.body.category);
					console.log("Directory is created.");
				} else {
					console.log("Directory already exists.");
				}
			} catch (err) {
				console.log(err);
			}
			Layer.create({
					name: req.body.name,
					archive: req.body.archive,
					category: req.body.category,
				})
				.then((layer) => res.status(201).send(layer))
				.catch((error) => {
					console.log(error);
					res.status(400).send(error);
				});
		}
	}).catch((error) => {
		res.status(403).send(error);
	});
});

router.get("/all", passport.authenticate("jwt", {
	session: false
}), function (req, res) {
	helper.checkPermission(req.user.role_id, "layer_get_all").then((rolePerm) => {
		Layer.findAll({
				include: [{
					model: Category,
					attributes: ['name'],
					as: 'categoryData'
				}]
			})
			.then((layers) => {
				// Send the layers as a JSON response to the client
				res.status(200).json(layers);
			})
			.catch((error) => {
				res.status(500).json({
					error: "Internal Server Error"
				});
			});
	}).catch((error) => {
		res.status(403).json({
			error: "Forbidden"
		});
	});
});

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
router.put("/:id", passport.authenticate("jwt", {
	session: false
}), function (req, res) {
	helper.checkPermission(req.user.role_id, "layer_update").then((rolePerm) => {
		Layer.update({
				name: req.body.name,
				archive: req.body.archive,
				category: req.body.category,
				icono: req.body.icono,
			}, {
				where: {
					id: req.params.id,
				},
			})
			.then((layer) => res.status(201).send({
				data: "success",
			}))
			.catch((error) => {
				res.status(400).send(error);
			});
	}).catch((error) => {
		res.status(403).json({
			error: "Forbidden"
		});
	});
});


module.exports = router;
