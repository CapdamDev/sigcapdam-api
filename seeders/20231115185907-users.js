'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123tamarindo', 10);

    await queryInterface.bulkInsert('users', [{
      role_id: 1,
      nombre: 'Programacion',
      ape_pat: 'Capdam',
      ape_mat: 'Manzanillo',
      email: 'programacion@capdam.gob.mx',
      password: hashedPassword,
      isActive: true,
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rolepermissions', null, {});
  }
};
