const express = require("express");
const fs = require("fs");
const router = express.Router();
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User, Route , Polygon} = require("../models");
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { Op } = require("sequelize");

// Register a new user (when it's new and doesn't have an access token), assign the default user role
// router.post('/', passport.authenticate("jwt", { session: false }), function (req, res) {
//   if (!req.body.email || !req.body.password || !req.body.name) {
//       res.status(400).send({
//           msg: 'Enter a valid name or password.'
//       })
//   } 
//   else {
//       Role.findOne({
//           where: {
//               role_name: 'usuario'
//           }
//       })
//       .then((role) => {
//           User.create({
//               role_id: 3,
//               picture: "profile.png",
//               name: req.body.name,
//               ape_pat: req.body.ape_pat,
//               ape_mat: req.body.ape_mat,
//               email: req.body.email,
//               password: req.body.password,
//               isActive: 1
//           })
//           .then((user) => res.status(201).send(user))
//           .catch((error) => {
//               res.status(400).send(error);
//           });
//       })
//       .catch((error) => {
//           res.status(400).send(error);
//     });
//   }
// });

// Agrega un nuevo usuario
router.post("/new", passport.authenticate("jwt", { session: false }), (req, res) => {
  helper.checkPermission(req.user.role_id, "user_add")
    .then((rolePerm) => {
      if (!req.body.email || !req.body.password) {
        res.status(400).send({
          msg: "Por favor, proporciona un nombre o contraseña.",
        });
      } else {
        // Check if user already exists with the same email
        User.findOne({
          where: {
            email: req.body.email,
          },
        })
          .then((user) => {
            if (user) {
              return res.status(400).send({
                msg: "Ya existe un usuario con ese correo.",
              });
            } else {
              // Data is valid and a new user can be registered
              User.create({
                role_id: req.body.role_id,
                picture: "profile.png", //pictureFileName,
                name: req.body.name,
                ape_pat: req.body.ape_pat,
                ape_mat: req.body.ape_mat,
                email: req.body.email,
                password: req.body.password,
                isActive: "1",
              })
                .then((user) => res.status(201).send(user))
                .catch((error) => {
                  res.status(400).send(error);
                });
            }
          })
          .catch((error) => {
            res.status(403).send(error);
          });
      }
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

router.get("/all", passport.authenticate("jwt", { session: false }), function (req, res) {
  helper.checkPermission(req.user.role_id, "user_get_all")
    .then((rolePerm) => {
      User.findAll({
        where: {
          role_id: {
            [Op.gt]: 1,
          },
          isActive: true,
        },
        include: [
          {
            model: Role,
            attributes: ["role_name", "role_description"],
            as: "roleData",
          },
          {
            model: Department,
            attributes: ["name"],
            as: "departmentData",
          },
        ],
      })
        .then((users) => {
          // Send the users as a JSON response to the client
          res.status(200).json(users);
        })
        .catch((error) => {
          res.status(500).json({
            error: "Internal Server Error",
          });
        });
    })
    .catch((error) => {
      res.status(403).json({
        error: "Forbidden",
      });
    });
});

// Obtener un usuario por ID
router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_get').then((rolePerm) => {
    User.findByPk(req.params.id)
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Actualizar un usuario
router.put('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_update')
    .then((rolePerm) => {
      if (!req.body.role_id || !req.body.email || !req.body.name || !req.body.ape_pat || !req.body.ape_mat) {
        res.status(400).send({
          msg: 'Pasa todos los parámetros.'
        })
      } else {
        User.findByPk(req.params.id)
          .then((user) => {
            // Si no se manda password, se mantiene el que ya tiene
            if (req.body.password.length == 0 || req.body.password == null || req.body.password == undefined || req.body.password == '') {
              User.update({
                role_id: req.body.role_id || user.role_id,
                name: req.body.name || user.name,
                ape_pat: req.body.ape_pat || user.ape_pat,
                ape_mat: req.body.ape_mat || user.ape_mat,
                email: req.body.email || user.email,
                // isActive: req.body.isActive || user.isActive,
                role_id: req.body.role_id || user.role_id,
                picture: req.body.picture || user.picture
              }, {
                where: {
                  id: req.params.id
                }
              })
                .then((response) => {
                  res.status(201).send({
                    data: "success",
                    message: "User updated sin contraseña",
                  });
                })
                .catch(err => res.status(400).send(err));
            } else {
              User.update({
                role_id: req.body.role_id || user.role_id,
                nombre: req.body.name || user.name,
                ape_pat: req.body.ape_pat || user.ape_pat,
                ape_mat: req.body.ape_mat || user.ape_mat,
                email: req.body.email || user.email,
                password: req.body.password || user.password,
                // isActive: req.body.isActive || user.isActive,
                role_id: req.body.role_id || user.role_id
              }, {
                where: {
                  id: req.params.id
                }
              })
                .then((response) => {
                  res.status(201).send({
                    data: "success",
                    message: "User updated con contraseña",
                  });
                })
                .catch(err => res.status(400).send(err));
            }
          })
          .catch((error) => {
            res.status(400).send(error);
          });
      }
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

// Borra un usuario
router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_delete').then((rolePerm) => {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass user ID.'
      })
    } else {
      User.findByPk(req.params.id)
        .then((user) => {
          if (user) {
            if (user.role_id === 1) {
              res.status(403).send({
                'message': 'No puedes eliminar al usuario root',
                'success': false
              });
            } else {
              User.destroy({
                where: {
                  id: req.params.id
                }
              })
                .then(_ => {
                  res.status(200).send({
                    'message': 'Usuario eliminado'
                  });
                })
                .catch(err => res.status(400).send(err));
            }
          } else {
            res.status(404).send({
              'message': 'Usuario no encontrado'
            });
          }
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  })
    .catch((error) => {
      res.status(403).send(error);
    });
});

module.exports = router;