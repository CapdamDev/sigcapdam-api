var express = require('express');
var router = express.Router();

// Router general del proyecto, 

/* GET de la pagina de inicio */
router.get('/', function(req, res, next) {
  res.render('login');
});

/* GET de la pagina del login */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET de la pagina de registro */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* GET del dashboard principal */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

/* GET de las layers */
router.get('/layers', function(req, res, next) {
  res.render('layers');
});

/* GET de las layers2 (donde se hicieron las primeras pruebas de tipo CRUD de las layers) */
router.get('/layers2', function(req, res, next) {
  res.render('layers2');
});


module.exports = router;
