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

// Crear/guardar un polígono
router.post("/", passport.authenticate("jwt", { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, "polygon_add")
        .then((rolePerm) => {
            if (!req.body.layerId || !req.body.geometry) {
                res.status(400).send({
                    msg: "Por favor, proporciona un layerId y un geometry.",
                });
            } else {
                Polygon.create({
                        layerId: req.body.layerId,
                        properties: req.body.properties,
                        geometry: req.body.geometry,
                    })
                    .then((polygon) => res.status(201).send(polygon))
                    .catch((error) => {
                        res.status(400).send(error);
                    });
            }
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

// Obtener todos los polígonos y enviarlos como GeoJSON
router.get("/all", passport.authenticate("jwt", { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, "polygon_get_all")
        .then((rolePerm) => {
            Polygon.findAll({
                    include: [{
                        model: Layer,
                        as: "layerData",
                    }, ],
                })
                .then((polygons) => {
                    // Add layerData.icon and layerData.color inside polygon.properties
                    // polygons = polygons.map((polygon) => {
                    //     polygon.properties = JSON.parse(polygon.properties);
                    //     polygon.properties.icon = polygon.layerData.icon;
                    //     polygon.properties.color = polygon.layerData.color;
                    //     polygon.properties.layerName = polygon.layerData.name;
                    //     return polygon;
                    // });

                    const geoJSON = {
                        type: "FeatureCollection",
                        features: polygons.map((polygon) => {
                            return {
                                type: "Feature",
                                properties: polygon.properties,
                                geometry: polygon.geometry,
                            };
                        }),
                    };
                    res.status(200).send(geoJSON);
                    // Send polygons as JSON
                    // res.status(200).send(polygons);
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

// Obtener un polígono por ID de layer y enviarlo como GeoJSON
router.get("/:layerId", passport.authenticate("jwt", { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, "polygon_get")
        .then((rolePerm) => {
            Polygon.findAll({
                    where: {
                        layerId: req.params.layerId,
                    },
                })
                .then((polygons) => {
                    // Convert properties into JSON
                    polygons = polygons.map((polygon) => {
                        polygon.properties = JSON.parse(polygon.properties);
                        return polygon;
                    });
                    const geoJSON = {
                        type: "FeatureCollection",
                        features: polygons.map((polygon) => {
                            return {
                                type: "Feature",
                                properties: polygon.properties,
                                geometry: polygon.geometry,
                            };
                        }),
                    };
                    res.status(200).send(geoJSON);
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

module.exports = router;
