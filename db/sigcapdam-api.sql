-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2023 a las 22:22:42
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
-- Base de datos: `sigcapdam`
--
CREATE DATABASE IF NOT EXISTS `sigcapdam` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sigcapdam`;

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'user_add', 'Add User', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(2, 'user_update', 'Update User', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(3, 'user_get', 'Get User', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(4, 'user_get_all', 'Get All User', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(5, 'user_delete', 'Delete User', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(6, 'role_add', 'Add Role', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(7, 'role_update', 'Update Role', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(8, 'role_get', 'Get Role', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(9, 'role_get_all', 'Get All Role', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(10, 'role_delete', 'Delete Role', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(11, 'permissions_add', 'Add Permission', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(12, 'permissions_update', 'Update Permission', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(13, 'permissions_get', 'Get Permission', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(14, 'permissions_get_all', 'Get All Permission', '2023-10-25 13:38:08', '2023-10-25 13:38:08'),
(15, 'permissions_delete', 'Delete Permission', '2023-10-25 13:38:08', '2023-10-25 13:38:08');

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rolepermissions`
--

INSERT INTO `rolepermissions` (`id`, `role_id`, `perm_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(2, 1, 2, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(3, 1, 3, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(4, 1, 4, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(5, 1, 5, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(6, 1, 6, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(7, 1, 7, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(8, 1, 8, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(9, 1, 9, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(10, 1, 10, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(11, 1, 11, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(12, 1, 12, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(13, 1, 13, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(14, 1, 14, '2023-10-25 21:08:52', '2023-10-25 21:08:52'),
(15, 1, 15, '2023-10-25 21:08:52', '2023-10-25 21:08:52');

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
(1, 'admin', 'System Admin ', '2023-10-25 13:38:15', '2023-10-25 13:38:15');

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
('20210916024852-create-role.js'),
('20210916024907-create-permission.js'),
('20210916025034-create-user.js'),
('20210916031105-create-role-permission.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

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
(1, 1, 'Enrique de Jesus', 'Ochoa', 'Preciado', 'eochoa11@ucol.mx', '$2a$10$bw5zvNvIwQTUTZuPR5Ai2eMLJNR2DN4ECYLk1BBEZXlGVFBQRNsua', 1, '2023-10-25 19:39:07', '2023-10-25 19:39:07');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
