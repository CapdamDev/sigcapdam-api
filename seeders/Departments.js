'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      {
        name: 'Programacion',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 1,
        isActive: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
