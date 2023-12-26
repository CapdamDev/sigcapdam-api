const express = require("express");
const fs = require("fs");
const router = express.Router();
const User = require("../models").User;
const Role = require("../models").Role;
const Category = require("../models").Category;
const Permission = require("../models").Permission;
const Layer = require("../models").Layer;
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");

// Crear/guardar una category
router.post("/", passport.authenticate("jwt", {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_add").then((rolePerm) => {
        if (!req.body.name) {
            res.status(400).send({
                msg: "Please pass name."
            });
        } else {
            Category.create({
                    name: req.body.name
                })
                .then((category) => res.status(201).send(category))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Obtener todas las categories
router.get("/all", passport.authenticate("jwt", {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_get_all").then((rolePerm) => {
            Category.findAll({
                include: [{
                    model: Layer,
                    as: "layers"
                }]
            })
            .then((categories) => res.status(200).send(categories))
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Obtener una category por id
router.get("/:id", passport.authenticate("jwt", {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_get").then((rolePerm) => {
        Category.findByPk(req.params.id, {
                include: [{
                    model: Layer,
                    as: "layers"
                }]
            })
            .then((category) => {
                if (!category) {
                    return res.status(404).send({
                        msg: "Category Not Found"
                    });
                }
                return res.status(200).send(category);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});

module.exports = router;
