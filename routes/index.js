const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Layer, Category } = require("../models");
const cookieParser = require("cookie-parser");

router.use(cookieParser());

// Middleware para procesar las cookies
router.use(function (req, res, next) {
	// Accede a las cookies y las almacena en el objeto req para que estén disponibles en todas las rutas
	req.parsedCookies = req.cookies;
	next();
});

// Router general del proyecto, se encarga de asignar vistas a un URL determinado

/* GET de la pagina de inicio */
router.get("/", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = req.originalUrl;

	if (!cookies.token) {
		res.render("login");
	} 
	else {
		res.redirect("home", { cookies, url });
	}
});

/* GET de la pagina del login */
router.get("/login", async function (req, res, next) {
	const cookies = req.parsedCookies;

	if (!cookies.token) {
		res.render("login");
	} 
	else {
		res.redirect("home");
	}
});

/* GET de las layers en el home */
router.get("/home", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = "/home";

	if (!cookies.token) {
		res.redirect("/login");
	} 
	else {
		res.render("home", { cookies, url });
	}
});

/* GET layers_dashboard */
router.get("/layers_dashboard", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = req.originalUrl;

	if (!cookies.token) {
		res.redirect("/login");
	} 
	else {
		try {
			// Fetch layers data from the API endpoint
			const response = await fetch("http://localhost:3000/api/v1/layers/all", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: cookies.token,
				},
			});
			const layers = await response.json();

			const response2 = await fetch(
				"http://localhost:3000/api/v1/categories/all",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: cookies.token,
					},
				}
			);
			const categories = await response2.json();

			if (!layers) {
				res.send("Error: Could not fetch layers data");
			} 
			else {
				res.render("layers_dashboard", { layers, cookies, url, categories });
			}
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
});

/* GET users_dashboard */
router.get("/users_dashboard", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = req.originalUrl;

	if (!cookies.token) {
		res.redirect("/login");
	} 
	else {
		try {
			const response = await fetch("http://localhost:3000/api/v1/users/all", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: cookies.token,
				},
			});
			const users = await response.json();

			const response2 = await fetch("http://localhost:3000/api/v1/roles/all", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: cookies.token,
				},
			});
			const roles = await response2.json();

			if (!users) {
				res.send(404);
			} 
			else {
				res.render("users_dashboard", { users, cookies, url, roles });
			}
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
});

/* GET settings */
router.get("/settings", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = req.originalUrl;
	if (!cookies.token) {
		res.redirect("/login");
	} 
	else {
		res.render("settings", { cookies, url });
	}
});

/* GET de la main page */
router.get("/main", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = req.originalUrl;

	if (!cookies.token) {
		res.redirect("/login");
	}
	else {
		res.render("index", { cookies, url });
	}
});


/* GET de la pagina de settings/categories */
router.get("/settings/categories", async function (req, res, next) {
	const cookies = req.parsedCookies;
	const url = req.originalUrl;

	if (!cookies.token) {
		res.redirect("/login");
	} 
	else {
		try {
			const response = await fetch("http://localhost:3000/api/v1/categories/all", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: cookies.token,
				},
			});
			const categories = await response.json();

			if (!categories) {
				res.send(404);
			} 
			else {
				res.render("settings/categories", { categories, cookies, url });
			}
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
});


// /* GET de la pagina de registro */
// router.get('/register', function(req, res, next) {
//   res.render('register');
// });

// /* GET del dashboard principal */
// router.get('/dashboard', function(req, res, next) {
//   res.render('dashboard');
// });

// /* GET de las layers2 (donde se hicieron las primeras pruebas de tipo CRUD de las layers) */
// router.get('/layers2', function(req, res, next) {
//   res.render('layers2');
// });

module.exports = router;
