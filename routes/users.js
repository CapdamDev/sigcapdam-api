const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new User
router.post('/', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_add').then((rolePerm) => {
    if (!req.body.role_id || !req.body.email || !req.body.password || !req.body.nombre) {
      res.status(400).send({
        msg: 'Please pass Role ID, email, password, phone or nombre.'
      })
    } else {
      User
        .create({
          nombre: req.body.nombre,
          ape_pat: req.body.ape_pat,
          ape_mat: req.body.ape_mat,
          email: req.body.email,
          password: req.body.password,
          isActive: req.body.isActive,
          role_id: req.body.role_id
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => {
          console.log(error);
          res.status(400).send(error);
        });
    }
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Get List of Users
router.get('/', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_get_all').then((rolePerm) => {
    User
      .findAll({
        include: [
          { 
            model: Role,
            include: [
              {
                model: Permission,
                as: 'permissions'
              }
            ]
          }
        ]
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Get User by ID
router.get('/:id', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_get').then((rolePerm) => {
    User
      .findByPk(req.params.id)
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Update a User
router.put('/:id', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_update').then((rolePerm) => {
    if (!req.body.role_id || !req.body.email || !req.body.nombre || !req.body.ape_pat || !req.body.ape_mat || !req.body.isActive) {
      res.status(400).send({
        msg: 'Pasa todos los param.'
      })
    } else {
      User
        .findByPk(req.params.id)
        .then((user) => {
          User.update({
            nombre: req.body.nombre || user.nombre,
            ape_pat: req.body.ape_pat || user.ape_pat,
            ape_mat: req.body.ape_mat || user.ape_mat,
            email: req.body.email || user.email,
            isActive: req.body.isActive || user.isActive,
            role_id: req.body.role_id || user.role_id
          }, {
            where: {
              id: req.params.id
            }
          }).then(_ => {
            res.status(200).send({
              'message': 'User updated'
            });
          }).catch(err => res.status(400).send(err));
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Delete a User
router.delete('/:id', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_delete').then((rolePerm) => {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass user ID.'
      })
    } else {
      User
        .findByPk(req.params.id)
        .then((user) => {
          if (user) {
            User.destroy({
              where: {
                id: req.params.id
              }
            }).then(_ => {
              res.status(200).send({
                'message': 'User eliminado'
              });
            }).catch(err => res.status(400).send(err));
          } else {
            res.status(404).send({
              'message': 'User no encontrado'
            });
          }
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  }).catch((error) => {
    res.status(403).send(error);
  });
});

module.exports = router;