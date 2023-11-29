var express = require('express');
var router = express.Router();
var passport = require('passport');
var Layer = require('../models').Layer;
var Category = require('../models').Category;

// Router general del proyecto, 

/* GET de la pagina de inicio */
router.get('/', function(req, res, next) {
  res.render('login');
});

// router.post('/login', async function(req, res, next) {
//   const { email, password } = req.body;
//   console.log(email, password);

//   if (email && password) {
//     try {
//       const response = await fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         res.send(data.error);
//         // res.render('login', { error: data.error });
//       } else {
//         // Save the JWT token in the session to make it available to the angular app
//         // success: true,
//         // token: 'JWT ' + token,
//         // role_id: user.role_id,
//         // role_name: role.role_name, // Add role_name to the response
//         // user_email: user.email,
//         // permissions: permNames,
//         res.redirect(`/home?token=${data.token}&role_id=${data.role_id}&role_name=${data.role_name}&user_email=${data.user_email}&permissions=${data.permissions}`);
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// });

/* GET de la pagina del login */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET de las layers */
router.get('/home',async function(req, res, next) {
  const { token, role_id, role_name, user_email, permissions } = req.query;
  console.log(token, role_id, role_name, user_email, permissions);
  res.render('home', { token, role_id, role_name, user_email, permissions });
});

/* GET layers_dashboard */
router.get('/layers_dashboard', async function (req, res, next) {
  try {
    // Fetch layers data from the API endpoint
    const response = await fetch('http://localhost:3000/api/v1/layers/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const layers = await response.json();
    // Render the 'layers_dashboard' view and pass the layers data
    res.render('layers_dashboard', { layers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/* GET users_dashboard */
router.get('/users_dashboard', function(req, res, next) {
  res.render('users_dashboard');
});

/* GET settings */
router.get('/settings', function(req, res, next) {
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
