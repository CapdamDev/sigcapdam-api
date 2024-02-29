-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-02-2024 a las 21:06:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sigcapdam`
--
CREATE DATABASE IF NOT EXISTS `sigcapdam` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sigcapdam`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categories`
--

DROP TABLE IF EXISTS `Categories`;
CREATE TABLE IF NOT EXISTS `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`, `isActive`) VALUES
(1, 'POZOS DE CONAGUA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(2, 'COMERCIALIZACION', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(3, 'INFRAESTRUCTURA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(4, 'RUTAS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(5, 'CARTOGRAFIA MUNICIPAL', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Departments`
--

DROP TABLE IF EXISTS `Departments`;
CREATE TABLE IF NOT EXISTS `Departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `direction_id` int(11) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `Departments_direction_id_foreign_idx` (`direction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Departments`
--

INSERT INTO `Departments` (`id`, `name`, `createdAt`, `updatedAt`, `direction_id`, `isActive`) VALUES
(1, 'DEPARTAMENTO JURÍDICO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1, 1),
(2, 'DEPARTAMENTO DE TRANSPARENCIA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1, 1),
(3, 'DEPARTAMENTO DE SISTEMAS E INFORMÁTICA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1, 1),
(4, 'DEPARTAMENTO DE COMUNICACIÓN SOCIAL', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1, 1),
(5, 'NOTIFICADORES E INSPECTORES', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 3, 1),
(6, 'DEPARTAMENTO DE BIENES PATRIMONIALES', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(7, 'DEPARTAMENTO DE TALLER MECÁNICO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(8, 'DIRECCIÓN ADMINISTRATIVA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(9, 'DEPARTAMENTO DE RECURSOS HUMANOS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(10, 'DEPARTAMENTO DE RECURSOS MATERIALES', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(11, 'DEPARTAMENTO DE ALMACÉN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(12, 'DEPARTAMENTO DE SERVICIOS GENERALES', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 4, 1),
(13, 'DEPARTAMENTO DE COBRANZA Y CAJAS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 2, 1),
(14, 'DEPARTAMENTO DE INSTALACIONES Y REDES', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(15, 'DELEGACIÓN SANTIAGO Y PENINSULA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(16, 'DELEGACIÓN VALLE DE LAS GARZAS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(17, 'DELEGACIÓN ZONA CENTRO Y EL COLOMO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(18, 'DEPARTAMENTO ELECTROMECÁNICA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(19, 'CALIDAD DEL AGUA Y SANEAMIENTO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(20, 'ACUEDUCTO ARMERÍA-MANZANILLO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(21, 'DEPARTAMENTO DE PROYECTOS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 7, 1),
(22, 'DIRECCIÓN DE CONSTRUCCIÓN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 7, 1),
(23, 'SUPERVISIÓN DE OBRAS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 7, 1),
(24, 'COMERCIAL ADMINISTRATIVA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 3, 1),
(25, 'ATENCIÓN A USUARIOS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 3, 1),
(26, 'ACLARACIONES', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 3, 1),
(27, 'DEPARTAMENTOS DE LA CONTRALORÍA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 2, 1),
(28, 'DEPARTAMENTOS DE FINANZAS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 5, 1),
(29, 'FACTURACIÓN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 3, 1),
(30, 'DIRECCIÓN GENERAL', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1, 1),
(31, 'DIRECCIÓN DE OPERACIÓN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 6, 1),
(32, 'DIRECCIÓN DE CONSTRUCCIÓN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 7, 1),
(33, 'AYUNTAMIENTO DE MANZANILLO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Directions`
--

DROP TABLE IF EXISTS `Directions`;
CREATE TABLE IF NOT EXISTS `Directions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Directions`
--

INSERT INTO `Directions` (`id`, `name`, `createdAt`, `updatedAt`, `isActive`) VALUES
(1, 'DIRECCIÓN GENERAL', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(2, 'DIRECCIÓN DE CONTRALORÍA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(3, 'DIRECCIÓN COMERCIAL', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(4, 'DIRECCIÓN ADMINISTRATIVA', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(5, 'DIRECCIÓN DE FINANZAS', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(6, 'DIRECCIÓN DE OPERACIÓN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(7, 'DIRECCIÓN DE CONSTRUCCIÓN', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(8, 'AYUNTAMIENTO DE MANZANILLO', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Layers`
--

DROP TABLE IF EXISTS `Layers`;
CREATE TABLE IF NOT EXISTS `Layers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `categoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Layers_categoryId_foreign_idx` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Layers`
--

INSERT INTO `Layers` (`id`, `name`, `icon`, `color`, `createdAt`, `updatedAt`, `isActive`, `categoryId`) VALUES
(1, '1003', '1003.png', '#a627ab', '2024-02-29 20:45:37', '2024-02-29 20:45:37', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Permissions`
--

DROP TABLE IF EXISTS `Permissions`;
CREATE TABLE IF NOT EXISTS `Permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perm_name` varchar(255) NOT NULL,
  `perm_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `perm_name` (`perm_name`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Permissions`
--

INSERT INTO `Permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'user_add', 'Agregar usuario', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(2, 'user_update', 'Actualizar usuario', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(3, 'user_get', 'Obtener usuario', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(4, 'user_get_all', 'Obtener todos los usuarios', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(5, 'user_delete', 'Borrar usuario', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(6, 'role_add', 'Agregar rol', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(7, 'role_update', 'Actualizar rol', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(8, 'role_get', 'Obtener rol', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(9, 'role_get_all', 'Obtener todos los roles', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(10, 'role_delete', 'Borrar rol', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(11, 'permissions_add', 'Agregar permiso', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(12, 'permissions_update', 'Actualizar permiso', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(13, 'permissions_get', 'Obtener permiso', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(14, 'permissions_get_all', 'Obtener todos los permisos', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(15, 'permissions_delete', 'Borrar permiso', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(16, 'layer_add', 'Agregar capa', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(17, 'layer_update', 'Actualizar capa', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(18, 'layer_get', 'Obtener capa', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(19, 'layer_get_all', 'Obtener todas las capas', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(20, 'layer_delete', 'Borrar capa', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(21, 'category_add', 'Agregar categoria', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(22, 'category_update', 'Actualizar categoria', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(23, 'category_get', 'Obtener categoria', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(24, 'category_get_all', 'Obtener todas las categorias', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(25, 'category_delete', 'Borrar categoria', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(26, 'category_get_inactive', 'Obtener categorias inactivas', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(27, 'direction_add', 'Agregar direccion', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(28, 'direction_update', 'Actualizar direccion', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(29, 'direction_get', 'Obtener direccion', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(30, 'direction_get_all', 'Obtener todas las direcciones', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(31, 'direction_delete', 'Borrar direccion', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(32, 'department_add', 'Agregar departamento', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(33, 'department_update', 'Actualizar departamento', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(34, 'department_get', 'Obtener departamento', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(35, 'department_get_all', 'Obtener todos los departamentos', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(36, 'department_delete', 'Borrar departamento', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(37, 'route_add', 'Agregar ruta', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(38, 'route_update', 'Actualizar ruta', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(39, 'route_get', 'Obtener ruta', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(40, 'route_get_all', 'Obtener todas las rutas', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(41, 'route_delete', 'Borrar ruta', '2024-02-29 19:45:05', '2024-02-29 19:45:05'),
(42, 'route_user_add', 'Agregar usuario a ruta', '2024-02-29 19:45:05', '2024-02-29 19:45:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Polygons`
--

DROP TABLE IF EXISTS `Polygons`;
CREATE TABLE IF NOT EXISTS `Polygons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `layerId` int(11) DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`properties`)),
  `geometry` geometry DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `layerId` (`layerId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Polygons`
--

INSERT INTO `Polygons` (`id`, `layerId`, `properties`, `geometry`, `createdAt`, `updatedAt`) VALUES
(3, 1, '{\"ID_\": \"\", \"CLAVE\": \"07-28-42-050-004-000\", \"RUTA\": 1003.0, \"COLOR_1\": \"166,39,171\", \"X\": 581696.820889, \"Y\": 2107412.72089}', 0x000000000106000000010000000103000000010000000600000036e773d64c0e5ac010be5371d90e3340446e1b324d0e5ac05a1136ccd00e3340a37cf9514d0e5ac0c0643f03c80e3340e141b204500e5ac0df266fc3c90e3340a4ff8e104f0e5ac0a5256326db0e334036e773d64c0e5ac010be5371d90e3340, '2024-02-29 13:54:07', '2024-02-29 13:54:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RolePermissions`
--

DROP TABLE IF EXISTS `RolePermissions`;
CREATE TABLE IF NOT EXISTS `RolePermissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `perm_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Roles`
--

DROP TABLE IF EXISTS `Roles`;
CREATE TABLE IF NOT EXISTS `Roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`id`, `role_name`, `role_description`, `createdAt`, `updatedAt`, `isActive`) VALUES
(1, 'root', 'Administrador del Sistema', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(2, 'admin', 'Administrador de la Aplicación', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1),
(3, 'user', 'Usuario de la Aplicación', '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Routes`
--

DROP TABLE IF EXISTS `Routes`;
CREATE TABLE IF NOT EXISTS `Routes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `routeNumber` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `assignedUser` int(11) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `Routes_assignedUser_foreign_idx` (`assignedUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE IF NOT EXISTS `SequelizeMeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20231025202524-create-permission.js'),
('20231025202524-create-role-permission.js'),
('20231025202524-create-role.js'),
('20231025202524-create-user.js'),
('20231031150143-create-layer.js'),
('20231125150452-create-category.js'),
('20231209183149-addIsActiveLayerColumn.js'),
('20240202184610-add-isActive-to-Categories.js'),
('20240206194006-create-direction.js'),
('20240206194133-create-department.js'),
('20240206195450-addDepartmentToUser.js'),
('20240206195800-addDirectionIdToDepartment.js'),
('20240206200350-addIsActiveToDepartmentAndDirection.js'),
('20240207160253-addIsActiveToRoles.js'),
('20240215150447-changeNombreToNameUsers.js'),
('20240223212355-create-route.js'),
('20240223214420-addUserIdRelationInRoutes.js'),
('20240224160840-addIsActiveToRoutes.js'),
('20240229191257-createPolygonsTable.js'),
('20240229191901-addCategoryIdToLayersTable.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `picture` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ape_pat` varchar(255) NOT NULL,
  `ape_mat` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `Users_department_id_foreign_idx` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `role_id`, `picture`, `name`, `ape_pat`, `ape_mat`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`, `department_id`) VALUES
(1, 1, 'profile.png', 'Programacion', 'Capdam', 'Manzanillo', 'programacion@capdam.gob.mx', '$2b$10$aJWsFRcDOI4pC1IQVI2vW..yX2FlHyq1GkN2ES8EMVrr8S8ka8NNO', 1, '2024-02-29 19:45:05', '2024-02-29 19:45:05', 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Departments`
--
ALTER TABLE `Departments`
  ADD CONSTRAINT `Departments_direction_id_foreign_idx` FOREIGN KEY (`direction_id`) REFERENCES `Directions` (`id`) ON UPDATE SET NULL;

--
-- Filtros para la tabla `Layers`
--
ALTER TABLE `Layers`
  ADD CONSTRAINT `Layers_categoryId_foreign_idx` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `Polygons`
--
ALTER TABLE `Polygons`
  ADD CONSTRAINT `Polygons_ibfk_1` FOREIGN KEY (`layerId`) REFERENCES `Layers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Routes`
--
ALTER TABLE `Routes`
  ADD CONSTRAINT `Routes_assignedUser_foreign_idx` FOREIGN KEY (`assignedUser`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_department_id_foreign_idx` FOREIGN KEY (`department_id`) REFERENCES `Departments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
