'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Directions', [
      {
        name: 'DIRECCIÓN GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE CONTRALORÍA',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'DIRECCIÓN COMERCIAL',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'DIRECCIÓN ADMINISTRATIVA',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE FINANZAS',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE OPERACIÓN',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE CONSTRUCCIÓN',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      },
      {
        name: 'AYUNTAMIENTO DE MANZANILLO',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directions', null, {});
  }
};
