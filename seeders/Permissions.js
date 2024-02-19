'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Permissions', [
            {
                perm_name: 'user_add',
                perm_description: 'Agregar usuario',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_update',
                perm_description: 'Actualizar usuario',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_get',
                perm_description: 'Obtener usuario',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_get_all',
                perm_description: 'Obtener todos los usuarios',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'user_delete',
                perm_description: 'Borrar usuario',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_add',
                perm_description: 'Agregar rol',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_update',
                perm_description: 'Actualizar rol',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_get',
                perm_description: 'Obtener rol',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_get_all',
                perm_description: 'Obtener todos los roles',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'role_delete',
                perm_description: 'Borrar rol',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_add',
                perm_description: 'Agregar permiso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_update',
                perm_description: 'Actualizar permiso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_get',
                perm_description: 'Obtener permiso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_get_all',
                perm_description: 'Obtener todos los permisos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'permissions_delete',
                perm_description: 'Borrar permiso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_add',
                perm_description: 'Agregar capa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_update',
                perm_description: 'Actualizar capa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_get',
                perm_description: 'Obtener capa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_get_all',
                perm_description: 'Obtener todas las capas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'layer_delete',
                perm_description: 'Borrar capa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_add',
                perm_description: 'Agregar categoria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_update',
                perm_description: 'Actualizar categoria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_get',
                perm_description: 'Obtener categoria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_get_all',
                perm_description: 'Obtener todas las categorias',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'category_delete',
                perm_description: 'Borrar categoria',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'direction_add',
                perm_description: 'Agregar direccion',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'direction_update',
                perm_description: 'Actualizar direccion',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'direction_get',
                perm_description: 'Obtener direccion',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'direction_get_all',
                perm_description: 'Obtener todas las direcciones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'direction_delete',
                perm_description: 'Borrar direccion',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'department_add',
                perm_description: 'Agregar departamento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'department_update',
                perm_description: 'Actualizar departamento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'department_get',
                perm_description: 'Obtener departamento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'department_get_all',
                perm_description: 'Obtener todos los departamentos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                perm_name: 'department_delete',
                perm_description: 'Borrar departamento',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Permissions', null, {});
    }
};