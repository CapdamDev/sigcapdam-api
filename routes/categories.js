const express = require("express");
const fs = require("fs");
const router = express.Router();
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User } = require("../models");
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");

// Crear/guardar una categoría
router.post("/", passport.authenticate("jwt", {
    session: false,
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_add")
        .then((rolePerm) => {
            if (!req.body.name) {
                res.status(400).send({
                    msg: "Por favor, proporciona un nombre.",
                });
            } else {
                Category.create({
                        name: req.body.name,
                        isActive: 1
                    })
                    .then((category) => res.status(201).send(category))
                    .catch((error) => {
                        res.status(400).send(error);
                    });
            }
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

// Obtener todas las categorías
router.get("/all", passport.authenticate("jwt", { session: false }), function (req, res) {
    // Based on the role_id stored in the cookies, the user will be able to access the categories, if role_id is 1, the user can see active and inactive categories, if role_id is 2, the user can only see active categories.
    helper.checkPermission(req.user.role_id, "category_get_all")
        .then((rolePerm) => {
            Category.findAll({
                    include: [{
                        model: Layer,
                        as: "layers",
                    }, ],
                    where: {
                        isActive: req.user.role_id === 1 ? [0, 1] : 1,
                    },
                })
                .then((categories) => {
                    const categoriesWithCounts = categories.map((category) => {
                        const totalLayers = category.layers.length;
                        const activeLayers = category.layers.filter(layer => layer.isActive === true).length;
                        const inactiveLayers = totalLayers - activeLayers;
                        return {
                            ...category.toJSON(),
                            totalLayers,
                            activeLayers,
                            inactiveLayers
                        };
                    });
                    res.status(200).send(categoriesWithCounts);
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Obtener una categoría por id
router.get("/:id", passport.authenticate("jwt", {
    session: false,
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_get")
        .then((rolePerm) => {
            Category.findByPk(req.params.id, {
                    include: [{
                        model: Layer,
                        as: "layers",
                    }, ],
                })
                .then((category) => {
                    if (!category) {
                        return res.status(404).send({
                            msg: "Categoría no encontrada",
                        });
                    }
                    return res.status(200).send(category);
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

// Actualizar una categoría por id
router.put("/:id", passport.authenticate("jwt", {
    session: false,
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_update")
        .then((rolePerm) => {
            Category.findByPk(req.params.id)
                .then((category) => {
                    if (!category) {
                        return res.status(404).send({
                            msg: "Categoría no encontrada",
                        });
                    }
                    return category
                        .update({
                            name: req.body.name || category.name,
                            isActive: req.body.isActive || category.isActive,
                        })
                        .then(() => res.status(200).send(category))
                        .catch((error) => {
                            res.status(400).send(error);
                        });
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

// Update isActive field to 1
router.put("/activate/:id", passport.authenticate("jwt", {
    session: false,
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_update")
        .then((rolePerm) => {
            Category.findByPk(req.params.id)
                .then((category) => {
                    if (!category) {
                        return res.status(404).send({
                            msg: "Categoría no encontrada",
                        });
                    }
                    return category
                        .update({
                            isActive: 1
                        })
                        .then(() => res.status(200).send(category))
                        .catch((error) => {
                            res.status(400).send(error);
                        });
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

// Eliminar una categoría por id
router.delete("/:id", passport.authenticate("jwt", {
    session: false,
}), function (req, res) {
    helper.checkPermission(req.user.role_id, "category_delete")
        .then((rolePerm) => {
            Category.findByPk(req.params.id)
                .then((category) => {
                    if (!category) {
                        return res.status(400).send({
                            msg: "Categoría no encontrada",
                        });
                    }
                    return category
                        .update({
                            isActive: false
                        })
                        .then(() =>
                            res.status(200).send({
                                msg: "Categoría eliminada exitosamente.",
                            })
                        )
                        .catch((error) => res.status(400).send(error));
                })
                .catch((error) => res.status(400).send(error));
        })
        .catch((error) => {
            res.status(403).send(error);
        });
});

module.exports = router;
