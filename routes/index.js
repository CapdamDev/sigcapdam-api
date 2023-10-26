var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* SIGN IN page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* SIGN UP page */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* DASHBOARD page */

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;
