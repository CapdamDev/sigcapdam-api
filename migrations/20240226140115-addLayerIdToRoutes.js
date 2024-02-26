'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //-- Add the layer id of the route to the routes table, this is to link the route to a existing layer
    await queryInterface.addColumn('Routes', 'layerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Layers',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Routes', 'layerId');
  }
};
