const express = require('express');
const router = express.Router();
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User } = require("../models");
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Crear permiso
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'permissions_add')
    .then((rolePerm) => {
        if (!req.body.perm_name || !req.body.perm_description) {
            res.status(400).send({
                msg: 'Please pass permission name or description.'
            })
        } 
        else {
            Permission
                .create({
                    perm_name: req.body.perm_name,
                    perm_description: req.body.perm_description
                })
                .then((perm) => res.status(201).send(perm))
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    })
    .catch((error) => {
        res.status(403).send(error);
    });
});

// Obtener lista de todos los permisos
router.get('/all', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'permissions_get_all')
    .then((rolePerm) => {
        Permission
            .findAll()
            .then((perms) => res.status(200).send(perms))
            .catch((error) => {
                res.status(400).send(error);
            });
    })
    .catch((error) => {
        res.status(403).send(error);
    });
});

// Obtener un permiso por ID
router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'permissions_get')
    .then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass permission ID.'
            })
        } 
        else {
            Permission.findByPk(req.params.id)
            .then((perm) => {
                if (perm) {
                    res.status(200).send(perm);
                } else {
                    res.status(404).send({
                        'message': 'permission not found'
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

// Obtener lista de permisos por rol
router.get('/role/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'permissions_get')
    .then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass role ID.'
            })
        } 
        else {
            Role.findByPk(req.params.id, {
                include: {
                    model: Permission,
                    as: 'permissions',
                }
            })
            .then((role) => res.status(200).send(role.permissions))
            .catch((error) => {
                res.status(400).send(error);
            });
        }
    })
    .catch((error) => {
        res.status(403).send(error);
    });
});

// Actualizar un permiso
router.put('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'permissions_update')
    .then((rolePerm) => {
        if (!req.params.id || !req.body.perm_name || !req.body.perm_description) {
            res.status(400).send({
                msg: 'Please pass permission ID, name or description.'
            })
        } 
        else {
            Permission.findByPk(req.params.id)
            .then((perm) => {
                Permission.update({
                    perm_name: req.body.perm_name || perm.perm_name,
                    perm_description: req.body.perm_description || perm.perm_description
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'permission updated'
                    });
                }).catch(err => res.status(400).send(err));
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

// Borrar un permiso
router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'permissions_delete')
    .then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass permission ID.'
            })
        } 
        else {
            Permission.findByPk(req.params.id)
            .then((perm) => {
                if (perm) {
                    perm.destroy({
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'permission deleted'
                        });
                    }).catch(err => res.status(400).send(err));
                } else {
                    res.status(404).send({
                        'message': 'permission not found'
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