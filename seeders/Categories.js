'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [
            {
                name: 'POZOS DE CONAGUA',
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: 1
            },
            {
                name: 'COMERCIALIZACION',
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: 1
            },
            {
                name: 'INFRAESTRUCTURA',
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: 1
            },
            {
                name: 'RUTAS',
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: 1
            },
            {
                name: 'CARTOGRAFIA MUNICIPAL',
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: 1
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};