-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2023 a las 21:55:32
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
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'POZOS DE CONAGUA', '2023-12-06 14:15:10', '2023-12-06 14:15:10'),
(2, 'CONTRATOS', '2023-12-06 14:15:10', '2023-12-06 14:15:10'),
(3, 'INFRAESTRUCTURA', '2023-12-06 14:15:10', '2023-12-06 14:15:10'),
(4, 'RUTAS', '2023-12-06 14:15:10', '2023-12-06 14:15:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `layers`
--

CREATE TABLE IF NOT EXISTS `layers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `archive` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `icono` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `layers`
--

INSERT INTO `layers` (`id`, `name`, `archive`, `category`, `createdAt`, `updatedAt`, `icono`, `isActive`) VALUES
(1, 'SANTIAGO-SALAGUA', 'SANTIAGOSALAGUA_1.json', '1', '2023-11-14 16:43:52', '2023-12-11 18:04:32', 'SANTIAGO-SALAGUA.png', 1),
(2, 'JALIPA-TAPEIXTLES', 'JALIPATAPEIXTLES_3.json', '1', '2023-11-14 16:44:17', '2023-12-11 17:47:17', NULL, 1),
(3, 'EL COLOMO', 'ELCOLOMO_4.json', '1', '2023-11-14 16:44:34', '2023-12-11 16:09:50', NULL, 1),
(4, 'PEÑA BLANCA', 'PEABLANCA_2.json', '1', '2023-11-14 16:44:51', '2023-11-14 16:44:51', NULL, 1),
(5, 'VENUSTIANO CARRANZA', 'VENUSTIANOCARRANZA.json', '1', '2023-11-14 16:45:21', '2023-11-14 16:45:21', NULL, 1),
(6, 'DESCARGAS', 'DESCARGAS.json', '1', '2023-11-14 16:45:34', '2023-12-11 18:16:49', NULL, 1),
(7, 'CONTRATOS', 'CONTRATOS.json', '2', '2023-11-14 17:30:34', '2023-12-11 18:16:44', NULL, 1),
(9, 'ALCANTARILLA', 'ALCANTARILLA_16.json', '3', '2023-11-15 17:52:45', '2023-12-11 18:16:39', NULL, 1),
(11, 'BOCA DE TORMENTA', 'BOCA_DE_TORMENTA_15.json', '3', '2023-11-15 18:29:19', '2023-12-11 18:13:39', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE IF NOT EXISTS `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perm_name` varchar(255) NOT NULL,
  `perm_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `perm_name` (`perm_name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'user_add', 'Add User', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(2, 'user_update', 'Update User', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(3, 'user_get', 'Get User', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(4, 'user_get_all', 'Get All User', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(5, 'user_delete', 'Delete User', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(6, 'role_add', 'Add Role', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(7, 'role_update', 'Update Role', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(8, 'role_get', 'Get Role', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(9, 'role_get_all', 'Get All Role', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(10, 'role_delete', 'Delete Role', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(11, 'permissions_add', 'Add Permission', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(12, 'permissions_update', 'Update Permission', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(13, 'permissions_get', 'Get Permission', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(14, 'permissions_get_all', 'Get All Permission', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(15, 'permissions_delete', 'Delete Permission', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(16, 'layer_add', 'Add layers', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(17, 'layer_update', 'Update layers', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(18, 'layer_get', 'Get layer', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(19, 'layer_get_all', 'Get all layers', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(20, 'layer_delete', 'Delete layers', '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(21, 'category_add', 'Add category', '2023-12-08 17:30:21', '2023-12-08 17:30:21'),
(22, 'category_update', 'Update category', '2023-12-08 17:30:41', '2023-12-08 17:30:41'),
(23, 'category_get', 'Get category', '2023-12-08 17:31:07', '2023-12-08 17:31:07'),
(24, 'category_get_all', 'Get all categories', '2023-12-08 17:31:18', '2023-12-08 17:31:18'),
(25, 'category_delete', 'Delete category', '2023-12-08 17:31:31', '2023-12-08 17:31:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolepermissions`
--

CREATE TABLE IF NOT EXISTS `rolepermissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `perm_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rolepermissions`
--

INSERT INTO `rolepermissions` (`id`, `role_id`, `perm_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(2, 1, 2, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(3, 1, 3, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(4, 1, 4, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(5, 1, 5, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(6, 1, 6, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(7, 1, 7, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(8, 1, 8, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(9, 1, 9, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(10, 1, 10, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(11, 1, 11, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(12, 1, 12, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(13, 1, 13, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(14, 1, 14, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(15, 1, 15, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(16, 1, 16, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(17, 1, 17, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(18, 1, 18, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(19, 1, 19, '2023-12-06 14:15:08', '2023-12-06 14:15:08'),
(20, 1, 20, '2023-12-06 14:15:08', '2023-12-06 14:15:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `role_description`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'System Admin', '2023-12-06 14:15:08', '2023-12-06 14:15:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
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
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `role_id`, `profilePic`, `nombre`, `ape_pat`, `ape_mat`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'profile.png', 'Programacion', 'Capdam', 'Manzanillo', 'programacion@capdam.gob.mx', '$2b$10$S.KZvTsVn5SFGySwY1PtOeaNf/G1Pxs943rq0kBfi.GvA8xOvmHuO', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
