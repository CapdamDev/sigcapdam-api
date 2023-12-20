const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
require("../config/passport")(passport);
// const User = require('../models').User;
// const Role = require('../models').Role;
// const Permission = require('../models').Permission;
// const RolePermission = require('../models').RolePermission;
const { User, Role, Permission, RolePermission } = require("../models");
const bodyParser = require("body-parser");
const session = require("express-session");

// Archivo de login y registro de usuarios

router.post("/register", function (req, res) {
	if (!req.body.email || !req.body.password || !req.body.nombre) {
		res.status(400).send({
			msg: "Ingresa un nombre o contraseña válidos.",
		});
	} else {
		Role.findOne({
			where: {
				role_name: "admin",
			},
		})
			.then((role) => {
				User.create({
					nombre: req.body.nombre,
					ape_pat: req.body.ape_pat,
					ape_mat: req.body.ape_mat,
					email: req.body.email,
					password: req.body.password,
					isActive: req.body.isActive,
					role_id: role.id,
				})
					.then((user) => res.status(201).send(user))
					.catch((error) => {
						res.status(400).send(error);
					});
			})
			.catch((error) => {
				res.status(400).send(error);
			});
	}
});

router.post("/login", function (req, res) {
	User.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((user) => {
			if (!user) {
				return res.status(401).send({
					message: "Authentication failed.",
				});
			}

			user.comparePassword(req.body.password, (err, isMatch) => {
				if (isMatch && !err) {
					var token = jwt.sign(
						JSON.parse(JSON.stringify(user)),
						"nodeauthsecret",
						{
							expiresIn: 86400 * 30,
						}
					);

					// Save cookies immediately
					res.cookie("token", "JWT " + token, { httpOnly: true, secure: true });

					RolePermission.findAll({ where: { role_id: user.role_id } }).then(
						(RolePermission) => {
							var permIds = RolePermission.map((rp) => rp.perm_id);
							Permission.findAll({ where: { id: permIds } }).then(
								(permissions) => {
									var permNames = permissions.map((p) => p.perm_name);

									// Fetch role details based on role_id
									Role.findOne({ where: { id: user.role_id } })
										.then((role) => {
											res.cookie("role_id", user.role_id);
											res.cookie("user_id", user.id);
											res.cookie("role_name", role.role_name); // Assuming user.role_name is accessible
											res.cookie("user_email", user.email);
											res.cookie("user_name", user.nombre);
											res.cookie("profilePic", user.profilePic);
											res.send({ success: true });
										})
										.catch((error) => {
											res.status(400).send(error);
										});
								}
							);
						}
					);
				} else {
					res.status(401).send({
						success: false,
						msg: "Credenciales incorrectas.",
					});
				}
			});
		})
		.catch((error) => res.status(400).send(error));
});

// Logout route
router.post("/logout", (req, res) => {
	// Clear cookies
	res.clearCookie("token");
	res.clearCookie("role_id");
	res.clearCookie("role_name");
	res.clearCookie("user_email");
	res.clearCookie("user_id");
	res.clearCookie("user_name");
	res.clearCookie("profilePic");
	// Send JSON to confirm delete
	res.status(200).redirect("/");
});

module.exports = router;
