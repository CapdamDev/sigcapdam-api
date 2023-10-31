const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
require("../config/passport")(passport);
const User = require("../models").User;
const Role = require("../models").Role;
const Layer = require("../models").Layer;

router.get("/all", function (req, res) {
	//Find all layers
	Layer.findAll()
		.then((layer) => res.status(201).send(layer))
		.catch((error) => {
			res.status(400).send(error);
		});
});

// Get Layer by name

router.get("/:name", function (req, res) {
	//Find layer by name
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

module.exports = router;
