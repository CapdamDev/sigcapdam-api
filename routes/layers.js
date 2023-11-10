const express = require("express");
const router = express.Router();
const Layer = require("../models").Layer;
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();

// Create a new Layer
router.post('/', passport.authenticate('jwt', {
	session: false
}), function (req, res) {
	helper.checkPermission(req.user.role_id, 'layer_add').then((rolePerm) => {
		if (!req.body.name || !req.body.category || !req.body.content) {
			res.status(400).send({
				msg: 'Please pass name, category and content.'
			})
		} else {
			Layer
				.create({
					name: req.body.name,
					category: req.body.category,
					content: req.body.content
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

// Consulta todas las layers
router.get("/all", function (req, res) {
	Layer.findAll()
		.then((layer) => res.status(201).send(layer))
		.catch((error) => {
			res.status(400).send(error);
		});
});

// Consulta una layer por nombre
router.get("/:name", function (req, res) {
	Layer.findOne({
			where: {
				name: req.params.name,
			},
		})
		.then((layer) => res.status(201).send(layer))
		.catch((error) => {
			res.status(400).send(error);
		});
});

// Actualiza una layer cuando se modifica su contenido
router.put("/:name", function (req, res) {
	Layer.findOne({
			where: {
				name: req.params.name,
			}
		})
		.then(layer => {
			if (!layer) {
				return res.status(404).send({
					message: 'Layer Not Found',
				});
			}

			Layer.update({
					content: req.body.content || layer.content,
					updatedAt: new Date()
				})
				.then(() => res.status(200).send(layer))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
});

module.exports = router;
