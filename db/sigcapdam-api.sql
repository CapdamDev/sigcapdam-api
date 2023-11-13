-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2023 a las 22:57:46
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

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
-- Estructura de tabla para la tabla `layers`
--

DROP TABLE IF EXISTS `layers`;
CREATE TABLE IF NOT EXISTS `layers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `layers`
--

INSERT INTO `layers` (`id`, `name`, `category`, `createdAt`, `updatedAt`) VALUES
(1, '3_DE_MAYO_44.geojson', 'zona', '2023-11-10 19:49:33', '2023-11-10 19:49:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perm_name` varchar(255) NOT NULL,
  `perm_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `perm_name` (`perm_name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'user_add', 'Add User', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(2, 'user_update', 'Update User', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(3, 'user_get', 'Get User', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(4, 'user_get_all', 'Get All User', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(5, 'user_delete', 'Delete User', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(6, 'role_add', 'Add Role', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(7, 'role_update', 'Update Role', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(8, 'role_get', 'Get Role', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(9, 'role_get_all', 'Get All Role', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(10, 'role_delete', 'Delete Role', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(11, 'permissions_add', 'Add Permission', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(12, 'permissions_update', 'Update Permission', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(13, 'permissions_get', 'Get Permission', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(14, 'permissions_get_all', 'Get All Permission', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(15, 'permissions_delete', 'Delete Permission', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(16, 'layer_add', 'Add layer', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(17, 'layer_update', 'Update layer', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(18, 'layer_get', 'Get layer', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(19, 'layer_get_all', 'Get all layers', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(20, 'layer_delete', 'Delete layers', '2023-11-10 18:48:41', '2023-11-10 18:48:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolepermissions`
--

DROP TABLE IF EXISTS `rolepermissions`;
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
(1, 1, 1, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(2, 1, 2, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(3, 1, 3, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(4, 1, 4, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(5, 1, 5, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(6, 1, 6, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(7, 1, 7, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(8, 1, 8, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(9, 1, 9, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(10, 1, 10, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(11, 1, 11, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(12, 1, 12, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(13, 1, 13, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(14, 1, 14, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(15, 1, 15, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(16, 1, 16, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(17, 1, 17, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(18, 1, 18, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(19, 1, 19, '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(20, 1, 20, '2023-11-10 18:48:41', '2023-11-10 18:48:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `role_description`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'System Admin', '2023-11-10 18:48:41', '2023-11-10 18:48:41'),
(2, 'user', 'Usuario', '2023-11-11 15:51:03', '2023-11-11 15:51:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
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
('20231031150143-create-layer.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
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
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `role_id`, `nombre`, `ape_pat`, `ape_mat`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Enrique', 'Ochoa', 'Preciado', 'eochoa11@ucol.mx', '$2a$10$r94pYsLfVgnB26BkfqqQmOxnFPsqOgfEjm/YnWsq97k/tChB1CcnS', 1, '2023-11-10 18:49:10', '2023-11-11 15:51:57');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
