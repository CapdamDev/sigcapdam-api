const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
require("../config/passport")(passport);
const User = require("../models").User;
const Role = require("../models").Role;
const Layer = require("../models").Layer;

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
		if(!layer) {
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
