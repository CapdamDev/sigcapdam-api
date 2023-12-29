-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-12-2023 a las 19:02:36
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
-- Base de datos: `sigcapdam-api`
--
CREATE DATABASE IF NOT EXISTS `sigcapdam-api` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sigcapdam-api`;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'POZOS DE CONAGUA', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(2, 'COMERCIALIZACION', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(3, 'INFRAESTRUCTURA', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(4, 'RUTAS', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(5, 'CARTOGRAFIA MUNICIPAL', '2023-12-26 19:50:35', '2023-12-26 19:50:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Layers`
--

DROP TABLE IF EXISTS `Layers`;
CREATE TABLE IF NOT EXISTS `Layers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `archive` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `icono` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Layers`
--

INSERT INTO `Layers` (`id`, `name`, `archive`, `category`, `createdAt`, `updatedAt`, `icono`, `isActive`) VALUES
(1, 'SANTIAGO-SALAGUA', 'SANTIAGO-SALAGUA.json', '1', '2023-11-14 16:43:52', '2023-12-11 18:04:32', 'SANTIAGO-SALAGUA.png', 1),
(2, 'JALIPA-TAPEIXTLES', 'JALIPA-TAPEIXTLES.json', '1', '2023-11-14 16:44:17', '2023-12-11 17:47:17', 'JALIPA-TAPEIXTLES.png', 1),
(3, 'EL COLOMO', 'EL COLOMO.json', '1', '2023-11-14 16:44:34', '2023-12-11 16:09:50', 'EL COLOMO.png', 1),
(4, 'PEÑA BLANCA', 'PEÑA BLANCA.json', '1', '2023-11-14 16:44:51', '2023-11-14 16:44:51', 'PEÑA BLANCA.png', 1),
(5, 'VENUSTIANO CARRANZA', 'VENUSTIANO CARRANZA.json', '1', '2023-11-14 16:45:21', '2023-11-14 16:45:21', 'VENUSTIANO CARRANZA.png', 1),
(6, 'DESCARGAS', 'DESCARGAS.json', '1', '2023-11-14 16:45:34', '2023-12-11 18:16:49', 'DESCARGAS.png', 1),
(7, 'CONTRATOS', 'CONTRATOS.json', '2', '2023-11-14 17:30:34', '2023-12-11 18:16:44', 'CONTRATOS.png', 1),
(8, 'ALCANTARILLA', 'ALCANTARILLA,json', '3', '2023-11-15 17:52:45', '2023-12-11 18:16:39', 'ALCANTARILLA.png', 1),
(9, 'BOCA DE TORMENTA', 'BOCA DE TORMENTA.json', '3', '2023-11-15 18:29:19', '2023-12-27 16:49:12', 'BOCA DE TORMENTA.png', 1),
(10, '101', '101.json', '4', '2023-12-28 14:58:56', '2023-12-28 14:58:56', '101.png', 1),
(11, '102', '102.json', '4', '2023-12-28 15:00:31', '2023-12-28 15:00:31', '102.png', 1),
(12, '103', '103.json', '4', '2023-12-28 15:01:52', '2023-12-28 15:01:52', '103.png', 1),
(13, '104', '104.json', '4', '2023-12-28 15:03:00', '2023-12-28 15:03:00', '104.png', 1),
(14, '105', '105.json', '4', '2023-12-28 15:54:55', '2023-12-28 15:54:55', '105.png', 1),
(15, '106', '106.json', '4', '2023-12-28 15:55:08', '2023-12-28 15:55:08', '106.png', 1),
(16, '107', '107.json', '4', '2023-12-28 15:55:23', '2023-12-28 15:55:23', '107.png', 1),
(17, '108', '108.json', '4', '2023-12-28 15:56:16', '2023-12-28 15:56:16', '108.png', 1),
(18, '111', '111.json', '4', '2023-12-28 15:56:32', '2023-12-28 15:56:32', '111.png', 1),
(19, '200', '200.json', '4', '2023-12-28 16:44:17', '2023-12-28 16:44:17', '200.png', 1),
(21, 'Demo2', 'Demo.json', '1', '2023-12-28 17:36:47', '2023-12-28 17:37:16', 'Demo.png', 1),
(22, '201', '201.json', '4', '2023-12-28 18:02:11', '2023-12-28 18:02:11', '201.png', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Permissions`
--

INSERT INTO `Permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'user_add', 'Add User', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(2, 'user_update', 'Update User', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(3, 'user_get', 'Get User', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(4, 'user_get_all', 'Get All User', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(5, 'user_delete', 'Delete User', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(6, 'role_add', 'Add Role', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(7, 'role_update', 'Update Role', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(8, 'role_get', 'Get Role', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(9, 'role_get_all', 'Get All Role', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(10, 'role_delete', 'Delete Role', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(11, 'permissions_add', 'Add Permission', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(12, 'permissions_update', 'Update Permission', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(13, 'permissions_get', 'Get Permission', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(14, 'permissions_get_all', 'Get All Permission', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(15, 'permissions_delete', 'Delete Permission', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(16, 'layer_add', 'Add Product', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(17, 'layer_update', 'Update Product', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(18, 'layer_get', 'Get Product', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(19, 'layer_get_all', 'Get All Product', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(20, 'layer_delete', 'Delete Product', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(21, 'category_add', 'Add category', '2023-12-08 17:30:21', '2023-12-08 17:30:21'),
(22, 'category_update', 'Update category', '2023-12-08 17:30:41', '2023-12-08 17:30:41'),
(23, 'category_get', 'Get category', '2023-12-08 17:31:07', '2023-12-08 17:31:07'),
(24, 'category_get_all', 'Get all categories', '2023-12-08 17:31:18', '2023-12-08 17:31:18'),
(25, 'category_delete', 'Delete category', '2023-12-08 17:31:31', '2023-12-08 17:31:31');

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `RolePermissions`
--

INSERT INTO `RolePermissions` (`id`, `role_id`, `perm_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(2, 1, 2, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(3, 1, 3, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(4, 1, 4, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(5, 1, 5, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(6, 1, 6, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(7, 1, 7, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(8, 1, 8, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(9, 1, 9, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(10, 1, 10, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(11, 1, 11, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(12, 1, 12, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(13, 1, 13, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(14, 1, 14, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(15, 1, 15, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(16, 1, 16, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(17, 1, 17, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(18, 1, 18, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(19, 1, 19, '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(20, 1, 20, '2023-12-23 18:28:47', '2023-12-23 18:28:47');

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
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`id`, `role_name`, `role_description`, `createdAt`, `updatedAt`) VALUES
(1, 'root', 'System Admin', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(2, 'admin', 'System Administrator', '2023-12-26 18:41:59', '2023-12-26 18:41:59'),
(3, 'user', 'System user', '2023-12-26 18:42:11', '2023-12-26 18:42:11');

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
('20231206213519-addLayerIcon.js'),
('20231209183149-addIsActiveLayerColumn.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `profilePic` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `ape_pat` varchar(255) NOT NULL,
  `ape_mat` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `role_id`, `profilePic`, `nombre`, `ape_pat`, `ape_mat`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'profile.png', 'Programacion', 'Capdam', 'Manzanillo', 'programacion@capdam.gob.mx', '$2b$10$r5eRb4oBfhqg7PHkUKnao.9ptE7bUyLZ.0TnhLk3ug9j1NMBaGxAy', 1, '2023-12-23 18:28:47', '2023-12-23 18:28:47');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
