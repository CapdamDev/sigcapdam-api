const express = require("express");
const fs = require("fs");
const router = express.Router();
const { Category, Department, Direction, Layer, Permission, Role, RolePermission, User, Route } = require("../models");
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const helper = new Helper();
const cookieParser = require("cookie-parser");
const multer = require("multer");

router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    helper.checkPermission(req.user.role_id, 'route_add')
    .then((rolePerm) => {
        if (!req.body.routeNumber || !req.body.assignedUser) {
            res.status(400).send({
                msg: 'Please pass Route name or description.'
            });
        } else {
            Route.create({
                    routeNumber: req.body.routeNumber,
                    assignedUser: req.body.assignedUser,
                    isActive: 1,
                })
            .then((route) => res.status(201).send(route))
            .catch((error) => {
                res.status(400).send({
                    success: false,
                    msg: error
                });
            });
        }
    })
    .catch((error) => {
        res.status(403).send({
            success: false,
            msg: error
        });
    });
});

router.get('/all', passport.authenticate('jwt', { session: false }), async function (req, res) {
    try {
        helper.checkPermission(req.user.role_id, 'route_get_all');
        const routes = await Route.findAll({
            where: {
                isActive: true
            },
            include: [{
                model: User,
                as: 'assignedUserData',
                attributes: ['id', 'name']
            }, {
                model: Layer,
                as: 'layerData',
                attributes: ['id', 'archive']
            }]
        });

        const processedRoutes = await Promise.all(routes.map(async route => {
            const archivePath = 'http://localhost:3000/assets/layers/' + route.layerData.archive;

            try {
                function isEmptyID(feature) {
                    return feature.properties.ID_ === '' || feature.properties.ID_ === null || feature.properties.ID_ === undefined;
                }
                const layerDataInformation = await fetch(archivePath).then(res => res.json());
                const totalContracts = layerDataInformation.features.length;
                // From the features.properties.ID, we can determine if the contract has CveCat or not
                const totalContractsNoCat = layerDataInformation.features.filter(isEmptyID).length;
                const totalContractsCat = totalContracts - totalContractsNoCat;
                return {
                    ...route.toJSON(),
                    layerData: {
                        archive: route.layerData.archive,
                        data: layerDataInformation
                    },
                    totalContracts,
                    totalContractsCat,
                    totalContractsNoCat
                };
            } catch (err) {
                console.error('Error processing JSON file:', err);
                console.log(archivePath);
                // Handle error gracefully, e.g., provide a fallback value or omit the route
                return null;
            }
        }));

        res.status(200).send(processedRoutes.filter(route => route !== null));

    } catch (error) {
        console.error('Error processing routes:', error);
        res.status(400).send(error);
    }
});

router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    const id = req.params.id;

    // Check if id is valid
    if (!id || id === '0' || id === 0 || id === 'undefined' || id === undefined || id === null || isNaN(id)) {
    return res.status(400).send({ error: 'Invalid ID provided' });
    }

    // Continue with permission check and database query
    helper.checkPermission(req.user.role_id, 'route_get')
    .then((rolePerm) => {
        Route.findOne({
        where: {
            id,
        },
        })
        .then((route) => {
            res.status(200).send(route);
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
