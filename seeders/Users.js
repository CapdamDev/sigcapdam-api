'use strict';

const bcrypt = require('bcrypt');
const { queryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('Comenzando la siembra');

    try {
      // Tu código de siembra existente aquí
      const hashedPassword = await bcrypt.hash('123tamarindo', 10);

      await queryInterface.bulkInsert('Users', [{
        role_id: 1,
        picture: 'profile.png',
        name: 'Programacion',
        ape_pat: 'Capdam',
        ape_mat: 'Manzanillo',
        email: 'programacion@capdam.gob.mx',
        password: hashedPassword,
        isActive: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        department_id: 1
      }]);

      console.log('Siembra completa');
    } catch (error) {
      console.error('Error de siembra:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};