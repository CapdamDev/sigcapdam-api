-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-11-2023 a las 15:45:56
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
  `archive` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `layers`
--

INSERT INTO `layers` (`id`, `name`, `archive`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'SANTIAGO-SALAGUA', 'SANTIAGOSALAGUA_1.json', 'POZOS DE CONAGUA', '2023-11-14 16:43:52', '2023-11-14 16:43:52'),
(2, 'JALIPA-TAPEIXTLES', 'JALIPATAPEIXTLES_3.json', 'POZOS DE CONAGUA', '2023-11-14 16:44:17', '2023-11-14 16:44:17'),
(3, 'EL COLOMO', 'ELCOLOMO_4.json', 'POZOS DE CONAGUA', '2023-11-14 16:44:34', '2023-11-14 16:44:34'),
(4, 'PEÑA BLANCA', 'PEABLANCA_2.json', 'POZOS DE CONAGUA', '2023-11-14 16:44:51', '2023-11-14 16:44:51'),
(5, 'VENUSTIANO CARRANZA', 'VENUSTIANOCARRANZA.json', 'POZOS DE CONAGUA', '2023-11-14 16:45:21', '2023-11-14 16:45:21'),
(6, 'DESCARGAS', 'DESCARGAS.json', 'POZOS DE CONAGUA', '2023-11-14 16:45:34', '2023-11-14 16:45:34'),
(7, 'CONTRATOS', 'CONTRATOS.json', 'CONTRATOS', '2023-11-14 17:30:34', '2023-11-14 17:30:34'),
(9, 'ALCANTARILLA', 'ALCANTARILLA_16.json', 'INFRAESTRUCTURA', '2023-11-15 17:52:45', '2023-11-15 17:52:45'),
(10, 'ALMACENAMIENTO DE AGUA', 'ALMACENAMIENTO_DE_AGUA_16.json', 'INFRAESTRUCTURA', '2023-11-15 18:25:38', '2023-11-15 18:25:38'),
(11, 'BOCA DE TORMENTA', 'BOCA_DE_TORMENTA_15.json', 'INFRAESTRUCTURA', '2023-11-15 18:29:19', '2023-11-15 18:29:19'),
(12, 'CAJA DE AGUA', 'CAJA_DE_AGUA_14.json', 'INFRAESTRUCTURA', '2023-11-15 18:30:55', '2023-11-15 18:30:55'),
(13, 'CANAL', 'CANAL_13.json', 'INFRAESTRUCTURA', '2023-11-15 18:33:17', '2023-11-15 18:33:17'),
(14, 'CANALETA', 'CANALETA_12.json', 'INFRAESTRUCTURA', '2023-11-15 18:36:28', '2023-11-15 18:36:28');

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
(1, 'user_add', 'Add User', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(2, 'user_update', 'Update User', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(3, 'user_get', 'Get User', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(4, 'user_get_all', 'Get All User', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(5, 'user_delete', 'Delete User', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(6, 'role_add', 'Add Role', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(7, 'role_update', 'Update Role', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(8, 'role_get', 'Get Role', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(9, 'role_get_all', 'Get All Role', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(10, 'role_delete', 'Delete Role', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(11, 'permissions_add', 'Add Permission', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(12, 'permissions_update', 'Update Permission', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(13, 'permissions_get', 'Get Permission', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(14, 'permissions_get_all', 'Get All Permission', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(15, 'permissions_delete', 'Delete Permission', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(16, 'layer_add', 'Add Product', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(17, 'layer_update', 'Update Product', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(18, 'layer_get', 'Get Product', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(19, 'layer_get_all', 'Get All Product', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(20, 'layer_delete', 'Delete Product', '2023-11-15 19:23:15', '2023-11-15 19:23:15');

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rolepermissions`
--

INSERT INTO `rolepermissions` (`id`, `role_id`, `perm_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(2, 1, 2, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(3, 1, 3, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(4, 1, 4, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(5, 1, 5, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(6, 1, 6, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(7, 1, 7, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(8, 1, 8, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(9, 1, 9, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(10, 1, 10, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(11, 1, 11, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(12, 1, 12, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(13, 1, 13, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(14, 1, 14, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(15, 1, 15, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(16, 1, 16, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(17, 1, 17, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(18, 1, 18, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(19, 1, 19, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(20, 1, 20, '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(21, 2, 2, '2023-11-16 17:48:43', '2023-11-16 17:48:43'),
(22, 2, 18, '2023-11-16 17:48:43', '2023-11-16 17:48:43'),
(23, 2, 19, '2023-11-16 17:48:43', '2023-11-16 17:48:43');

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
(1, 'root', 'System Admin', '2023-11-15 19:23:15', '2023-11-15 19:23:15'),
(2, 'usuario', 'Usuario base', '2023-11-16 16:26:11', '2023-11-16 16:26:11');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `role_id`, `nombre`, `ape_pat`, `ape_mat`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Programacion', 'Capdam', 'Manzanillo', 'programacion@capdam.gob.mx', '$2b$10$uyk942MdWo1nv6lJAGW7D.DEgMXZi.RnxcSPslyznmUgPoJkuBN.G', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'Enrique', 'Ochoa', 'Preciado', 'eochoa11@ucol.mx', '$2a$10$BFHV16UNYIWzVgHe8Ns8N.BNJGTwgG1tZSUu11Gr3UycQg1OM3Sty', 1, '2023-11-16 16:31:57', '2023-11-16 16:31:57');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
