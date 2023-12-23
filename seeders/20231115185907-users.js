'use strict';

const bcrypt = require('bcrypt');
const { queryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Seed } */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('Start seeding');

    try {
      // Your existing seed code here
      const hashedPassword = await bcrypt.hash('123tamarindo', 10);

      await queryInterface.bulkInsert('Users', [{
        role_id: 1,
        profilePic: 'profile.png',
        nombre: 'Programacion',
        ape_pat: 'Capdam',
        ape_mat: 'Manzanillo',
        email: 'programacion@capdam.gob.mx',
        password: hashedPassword,
        isActive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

      console.log('Seeding complete');
    } catch (error) {
      console.error('Seed Error:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};