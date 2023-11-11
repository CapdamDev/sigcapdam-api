const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;
const Role = require('../models').Role;

router.post('/register', function (req, res) {
    if (!req.body.email || !req.body.password || !req.body.nombre) {
        res.status(400).send({
            msg: 'Ingresa un nombre o contraseña válidos.'
        })
    } else {
        Role.findOne({
            where: {
                role_name: 'admin'
            }
        }).then((role) => {
            console.log(role.id);
            User.create({
                nombre: req.body.nombre,
                ape_pat: req.body.ape_pat,
                ape_mat: req.body.ape_mat,
                email: req.body.email,
                password: req.body.password,
                isActive: req.body.isActive,
                role_id: role.id
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => {
                res.status(400).send(error);
            });
        }).catch((error) => {
            res.status(400).send(error);
        });
    }
});

router.post('/login', function (req, res) {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(401).send({
                    message: 'Authentication failed.',
                });
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {
                        expiresIn: 86400 * 30
                    });
                    jwt.verify(token, 'nodeauthsecret', function (err, data) {
                        console.log(err, data);
                    })
                    res.send({
                        success: true,
                        token: 'JWT ' + token
                    });
                } else {
                    res.status(401).send({
                        success: false,
                        msg: 'Credenciales incorrectas.'
                    });
                }
            })
        })
        .catch((error) => res.status(400).send(error));
});

// Logout route
router.post('/logout', (req, res) => {
    res.clearCookie('token');  // Clear the token cookie
    res.status(200).json({ success: true, message: 'Logout successful' });
});

module.exports = router;