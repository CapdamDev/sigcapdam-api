'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Roles', [{
            role_name: 'root',
            role_description: 'Administrador del Sistema',
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: 1
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Roles', null, {});
    }
};