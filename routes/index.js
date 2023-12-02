var express = require('express');
var router = express.Router();
var passport = require('passport');
var Layer = require('../models').Layer;
var Category = require('../models').Category;
var cookieParser = require('cookie-parser');

// Utiliza el middleware cookie-parser para analizar las cookies
router.use(cookieParser());

// Middleware para procesar las cookies
router.use(function(req, res, next) {
  // Accede a las cookies y almacénalas en el objeto req para que estén disponibles en todas las rutas
  req.parsedCookies = req.cookies;
  next();
});

// Router general del proyecto

/* GET de la pagina de inicio */
router.get('/', async function(req, res, next) {
  res.render('login');
});

/* GET de la pagina del login */
router.get('/login', async function(req, res, next) {
  res.render('login');
});

/* GET de las layers en el home */
router.get('/home', async function(req, res, next) {
  const cookies = req.parsedCookies;
  res.render('home', { cookies } );
});

/* GET layers_dashboard */
router.get('/layers_dashboard', async function (req, res, next) {
  const cookies = req.parsedCookies;

  if(!token){
    res.redirect('/login');
  } else{
      try {
        // Fetch layers data from the API endpoint
        const response = await fetch('http://localhost:3000/api/v1/layers/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': cookies.token,
          },
        });
        const layers = await response.json();

        if(!layers){
          res.send('Error: Could not fetch layers data');
        }
        else{
          // res.send(layers);
          res.render('layers_dashboard', { layers });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }
});

/* GET users_dashboard */
router.get('/users_dashboard', async function(req, res, next) {
  res.render('users_dashboard');
});

/* GET settings */
router.get('/settings', async function(req, res, next) {
  res.render('settings');
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
