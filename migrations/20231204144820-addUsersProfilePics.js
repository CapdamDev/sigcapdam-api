'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'profilePic',
        {
          type: Sequelize.STRING,
          allowNull: false,
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Users', 'profilePic')
    ])
  }
};
