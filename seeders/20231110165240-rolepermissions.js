'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('RolePermissions', [{
                role_id: 1,
                perm_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 5,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 6,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 7,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 8,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 9,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 10,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 11,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 12,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 13,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 14,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 15,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 16,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 17,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 18,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 19,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              role_id: 1,
              perm_id: 20,
              createdAt: new Date(),
              updatedAt: new Date()
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('RolePermissions', null, {});
    }
};