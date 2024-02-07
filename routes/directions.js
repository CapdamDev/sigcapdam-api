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

// Crear/guardar una dirección
router.post("/", passport.authenticate("jwt", {
        session: false,
    }),
    function (req, res) {
        helper.checkPermission(req.user.role_id, "direction_add")
        .then((rolePerm) => {
            if (!req.body.name) {
                res.status(400).send({
                    msg: "Por favor, proporciona un nombre.",
                });
            } 
            else {
                Direction.create({
                    name: req.body.name,
                    isActive: 1
                })
                .then((direction) => res.status(201).send(direction))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
            }
        })
        .catch((error) => {
            res.status(403).send(error);
        });
    }
);

// Obtener todas las direcciones
router.get("/all", passport.authenticate("jwt", {
        session: false,
    }),
    function (req, res) {
        helper.checkPermission(req.user.role_id, "direction_get_all")
        .then((rolePerm) => {
            Direction.findAll({
                where:{
                    isActive: true
                },
                include: [
                    {
                        model: Department,
                        as: "departmentsData",
                    },
                ],
            })
            .then((directions) => {
                const directionsWithTotalDepartments = directions.map(direction => {
                    const totalDepartments = direction.departmentsData.length;
                    return {
                        ...direction.toJSON(),
                        totalDepartments
                    };
                });
                res.status(200).send(directionsWithTotalDepartments);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(403).send(error);
        });
    }
);

module.exports = router;
