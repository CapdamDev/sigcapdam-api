const express = require("express");
const fs = require("fs");
const router = express.Router();
const { User, Role, Category, Permission, Layer, Department, Direction } = require("../models");
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { Op } = require("sequelize");

// Crear/guardar un departamento
router.post("/", passport.authenticate("jwt", {
        session: false,
    }),
    function (req, res) {
        helper.checkPermission(req.user.role_id, "department_add")
        .then((rolePerm) => {
            if (!req.body.name) {
                res.status(400).send({
                    msg: "Por favor, proporciona un nombre.",
                });
            } 
            else {
                Department.create({
                    name: req.body.name,
                    direction_id: req.body.direction_id,
                    isActive: 1
                })
                .then((department) => res.status(201).send(department))
                .catch((error) => {
                    res.status(400).send(error);
                });
            }
        })
        .catch((error) => {
            res.status(403).send(error);
        });
    }
);

// Obtener todos los departamentos
router.get("/all", passport.authenticate("jwt", { session: false, }),
function (req, res) {
    helper.checkPermission(req.user.role_id, "department_get_all")
    .then((rolePerm) => {
        Department.findAll({
            where:{
                isActive: true
            },
            include: [
                {
                    model: Direction,
                    as: "directionData",
                },
            ],
        })
        .then((departments) => res.status(200).send(departments))
        .catch((error) => {
            res.status(400).send(error);
        });
    })
    .catch((error) => {
        res.status(403).send(error);
    });
});

// Obtener un departamento por ID
router.get("/:id", passport.authenticate("jwt", {
        session: false,
    }),
    function (req, res) {
        helper.checkPermission(req.user.role_id, "department_get")
        .then((rolePerm) => {
            if (!req.params.id) {
                res.status(400).send({
                    msg: "Por favor, proporciona un ID.",
                });
            } 
            else {
                Department.findByPk(req.params.id, {
                    include: [
                        {
                            model: Direction,
                            as: "directionData",
                        },
                    ],
                })
                .then((department) => {
                    if (department) {
                        res.status(200).send(department);
                    } 
                    else {
                        res.status(404).send({
                            msg: "Departamento no encontrado."
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
    }
);


// Actualizar un departamento
router.put("/:id", passport.authenticate("jwt", {
        session: false,
    }),
    function (req, res) {
        helper.checkPermission(req.user.role_id, "department_update")
        .then((rolePerm) => {
            if (!req.params.id) {
                res.status(400).send({
                    msg: "Por favor, proporciona un ID.",
                });
            } 
            else {
                Department.findByPk(req.params.id)
                .then((department) => {
                    if (department) {
                        department.update({
                            name: req.body.name,
                            direction_id: req.body.direction_id,
                        })
                        .then((department) => res.status(200).send(department))
                        .catch((error) => {
                            res.status(400).send(error);
                        });
                    } 
                    else {
                        res.status(404).send({
                            msg: "Departamento no encontrado."
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
    }
);

// Borrar un departamento
router.delete("/:id", passport.authenticate("jwt", {
        session: false,
    }),
    function (req, res) {
        helper.checkPermission(req.user.role_id, "department_delete")
        .then((rolePerm) => {
            if (!req.params.id) {
                res.status(400).send({
                    msg: "Por favor, proporciona un ID.",
                });
            } 
            else {
                Department.findByPk(req.params.id)
                .then((department) => {
                    if (department) {
                        department.update({
                            isActive: 0
                        })
                        .then(_ => {
                            res.status(200).send({
                                msg: "Departamento eliminado correctamente."
                            });
                        })
                        .catch((error) => {
                            res.status(400).send(error);
                        });
                    } 
                    else {
                        res.status(404).send({
                            msg: "Departamento no encontrado."
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
    }
);

module.exports = router;
