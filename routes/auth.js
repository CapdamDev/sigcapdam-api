const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
require("../config/passport")(passport);
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User, Route , Polygon} = require("../models");
const bodyParser = require("body-parser");
const session = require("express-session");

// Archivo de login y registro de usuarios

router.post("/register", function (req, res) {
	if (!req.body.email || !req.body.password || !req.body.name) {
		res.status(400).send({
			msg: "Ingresa un name o contraseña válidos.",
		});
	} else {
		Role.findOne({
			where: {
				role_name: "admin",
			},
		})
			.then((role) => {
				User.create({
					name: req.body.name,
					ape_pat: req.body.ape_pat,
					ape_mat: req.body.ape_mat,
					email: req.body.email,
					password: req.body.password,
					isActive: req.body.isActive,
					role_id: role.id,
					picture: req.body.picture,
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
					message: "Autenticación fallida.",
				});
			}

			user.comparePassword(req.body.password, (err, isMatch) => {
				if (isMatch && !err) {
					var rememberMe = req.body.rememberMe;
					console.log(rememberMe);

					var expires;

					if (rememberMe === false) {
						expires = 60 * 30; // 30 minutos a partir de ahora
						// expires = 5;
					} else {
						// expires = 86400 * 30; // 86400 minutos a partir de ahora, expira en un mes
						// Expires in 5 hours
						expires = 60 * 60 * 5;
						// expires = 5;
					}

					var token = jwt.sign(
						{ id: user.id }, // Set the id on the payload
						"nodeauthsecret",
						{
							header: {
								alg: "HS256",
								typ: "JWT",
							},
							expiresIn: expires, // Set the expiration time for the token
						}
					);

					// Format the token correctly
					var formattedToken = "JWT " + token;

					// Guardar las cookies inmediatamente
					res.cookie("token", formattedToken, { httpOnly: true, secure: true });

					RolePermission.findAll({ where: { role_id: user.role_id } }).then(
						(RolePermission) => {
							var permIds = RolePermission.map((rp) => rp.perm_id);
							Permission.findAll({ where: { id: permIds } }).then(
								(permissions) => {
									var permNames = permissions.map((p) => p.perm_name);

									// Obtener detalles del rol basado en role_id
									Role.findOne({ where: { id: user.role_id } })
										.then((role) => {
											res.cookie("role_id", user.role_id);
											res.cookie("user_id", user.id);
											res.cookie("role_name", role.role_name); // Suponiendo que user.role_name es accesible
											res.cookie("role_description", role.role_description);
											res.cookie("user_email", user.email);
											res.cookie("user_name", user.name);
											res.cookie("picture", user.picture);
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

// Check if user is authenticated, logged and token is not expired
router.get("/check", passport.authenticate("jwt", { session: false }), function (req, res) {
	res.status(200).send(req.user);
});


// Ruta de cierre de sesión
router.post("/logout", (req, res) => {
	// Limpiar las cookies
	res.clearCookie("token");
	res.clearCookie("role_id");
	res.clearCookie("role_name");
	res.clearCookie("role_description");
	res.clearCookie("user_email");
	res.clearCookie("user_id");
	res.clearCookie("user_name");
	res.clearCookie("picture");
	res.status(200).redirect("/login");
});

module.exports = router;
