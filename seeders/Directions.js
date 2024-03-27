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
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directions', null, {});
  }
};
