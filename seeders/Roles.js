'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Roles', [
        {
            role_name: 'root',
            role_description: 'Administrador del Sistema',
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: 1
        },
        {
            role_name: 'admin',
            role_description: 'Administrador de la Aplicación',
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: 1
        },
        {
            role_name: 'user',
            role_description: 'Usuario de la Aplicación',
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: 1
        }
    ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Roles', null, {});
    }
};