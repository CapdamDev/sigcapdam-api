'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      {
        name: 'DEPARTAMENTO JURÍDICO',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 1,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE TRANSPARENCIA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 1,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE SISTEMAS E INFORMÁTICA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 1,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE COMUNICACIÓN SOCIAL',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 1,
        isActive: 1
      },
      {
        name: 'NOTIFICADORES E INSPECTORES',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 3,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE BIENES PATRIMONIALES',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE TALLER MECÁNICO',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DIRECCIÓN ADMINISTRATIVA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE RECURSOS HUMANOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE RECURSOS MATERIALES',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE ALMACÉN',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE SERVICIOS GENERALES',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 4,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE COBRANZA Y CAJAS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 2,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE INSTALACIONES Y REDES',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'DELEGACIÓN SANTIAGO Y PENINSULA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'DELEGACIÓN VALLE DE LAS GARZAS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'DELEGACIÓN ZONA CENTRO Y EL COLOMO',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO ELECTROMECÁNICA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'CALIDAD DEL AGUA Y SANEAMIENTO',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'ACUEDUCTO ARMERÍA-MANZANILLO',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTO DE PROYECTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 7,
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE CONSTRUCCIÓN',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 7,
        isActive: 1
      },
      {
        name: 'SUPERVISIÓN DE OBRAS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 7,
        isActive: 1
      },
      {
        name: 'COMERCIAL ADMINISTRATIVA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 3,
        isActive: 1
      },
      {
        name: 'ATENCIÓN A USUARIOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 3,
        isActive: 1
      },
      {
        name: 'ACLARACIONES',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 3,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTOS DE LA CONTRALORÍA',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 2,
        isActive: 1
      },
      {
        name: 'DEPARTAMENTOS DE FINANZAS',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 5,
        isActive: 1
      },
      {
        name: 'FACTURACIÓN',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 3,
        isActive: 1
      },
      {
        name: 'DIRECCIÓN GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 1,
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE OPERACIÓN',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 6,
        isActive: 1
      },
      {
        name: 'DIRECCIÓN DE CONSTRUCCIÓN',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 7,
        isActive: 1
      },
      {
        name: 'AYUNTAMIENTO DE MANZANILLO',
        createdAt: new Date(),
        updatedAt: new Date(),
        direction_id: 8,
        isActive: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
