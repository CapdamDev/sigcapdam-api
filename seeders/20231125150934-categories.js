'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [{
                name: 'POZOS DE CONAGUA',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CONTRATOS',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'INFRAESTRUCTURA',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'RUTAS',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};