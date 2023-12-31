'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Permissions', [{
                perm_name: 'user_add',
                perm_description: 'Add User',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_update',
                perm_description: 'Update User',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_get',
                perm_description: 'Get User',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_get_all',
                perm_description: 'Get All User',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_delete',
                perm_description: 'Delete User',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_add',
                perm_description: 'Add Role',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_update',
                perm_description: 'Update Role',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_get',
                perm_description: 'Get Role',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_get_all',
                perm_description: 'Get All Role',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_delete',
                perm_description: 'Delete Role',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_add',
                perm_description: 'Add Permission',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_update',
                perm_description: 'Update Permission',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_get',
                perm_description: 'Get Permission',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_get_all',
                perm_description: 'Get All Permission',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_delete',
                perm_description: 'Delete Permission',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_add',
                perm_description: 'Add Product',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_update',
                perm_description: 'Update Product',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_get',
                perm_description: 'Get Product',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_get_all',
                perm_description: 'Get All Product',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_delete',
                perm_description: 'Delete Product',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_add',
                perm_description: 'Add Category',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_update',
                perm_description: 'Update Category',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_get',
                perm_description: 'Get Category',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_get_all',
                perm_description: 'Get All Categories',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_delete',
                perm_description: 'Delete Category',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Permissions', null, {});
    }
};