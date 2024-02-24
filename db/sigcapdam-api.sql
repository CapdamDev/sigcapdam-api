-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-02-2024 a las 18:56:58
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
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`, `isActive`) VALUES
(1, 'POZOS DE CONAGUA', '2023-12-23 18:28:47', '2024-02-14 13:57:26', 1),
(2, 'COMERCIALIZACION', '2023-12-23 18:28:47', '2024-02-14 13:57:28', 1),
(3, 'INFRAESTRUCTURA', '2023-12-23 18:28:47', '2024-02-14 13:57:32', 1),
(4, 'RUTAS', '2023-12-23 18:28:47', '2024-02-14 13:57:35', 1),
(5, 'CARTOGRAFIA MUNICIPAL', '2024-02-08 14:18:31', '2024-02-20 14:18:49', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Departments`
--

INSERT INTO `Departments` (`id`, `name`, `createdAt`, `updatedAt`, `direction_id`, `isActive`) VALUES
(1, 'DEPARTAMENTO JURIDICO', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 1, 1),
(2, 'DEPARTAMENTO TRANSPARENCIA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 1, 1),
(3, 'DEPARTAMENTO DE SISTEMAS E INFORMATICA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 1, 1),
(4, 'DEPARTAMENTO DE COMUNICACIÓN SOCIAL', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 1, 1),
(5, 'NOTIFICADORES E INSPECTORES', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 3, 1),
(6, 'DEPARTAMENTO DE BIENES PATRIMONIALES', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(7, 'DEPARTAMENTO DE TALLER MECANICO', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(8, 'DIRECCIÓN ADMINISTRATIVA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(9, 'DEPARTAMENTO DE RECURSOS HUMANOS', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(10, 'DEPARTAMENTO DE RECURSOS MATERIALES', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(11, 'DEPARTAMENTO DE ALMACEN', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(12, 'DEPARTAMENTO DE SERVICIOS GENERALES', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 4, 1),
(13, 'DEPARTAMENTO DE COBRANZA Y CAJAS', '2024-02-06 13:53:52', '2024-02-19 16:38:46', 2, 1),
(14, 'DEPARTAMENTO DE INSTALACIONES Y REDES', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(15, 'DELEGACION SANTIAGO Y PENÍNSULA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(16, 'DELEGACION VALLE DE LAS GARZAS', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(17, 'DELEGACION ZONA CENTRO Y EL COLOMO', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(18, 'DEPARTAMENTO ELECTROMECÁNICA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(19, 'CALIDAD DEL AGUA Y SANEAMIENTO', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(20, 'ACUEDUCTO ARMERIA-MANZANILLO', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(21, 'DEPARTAMENTO DE PROYECTOS', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 7, 1),
(22, 'DIRECCIÓN DE CONSTRUCCIÓN', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 7, 1),
(23, 'SUPERVISIÓN DE OBRAS', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 7, 1),
(24, 'COMERCIAL ADMINISTRATIVA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 3, 1),
(25, 'ATENCIÓN A USUARIOS', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 3, 1),
(26, 'ACLARACIONES', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 3, 1),
(27, 'DEPARTAMENTOS DE LA CONTRALORÍA', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 2, 1),
(28, 'DEPARTAMENTOS DE FINANZAS', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 5, 1),
(29, 'FACTURACIÓN', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 3, 1),
(30, 'DIRECCIÓN GENERAL', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 1, 1),
(31, 'DIRECCIÓN DE OPERACIÓN', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 6, 1),
(32, 'DIRECCIÓN DE CONSTRUCCIÓN', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 7, 1),
(33, 'AYUNTAMIENTO DE MANZANILLO', '2024-02-06 13:53:52', '2024-02-06 13:53:52', 8, 1);

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
(1, 'DIRECCIÓN GENERAL', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(2, 'DIRECCIÓN DE CONTRALORÍA', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(3, 'DIRECCION COMERCIAL', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(4, 'DIRECIÓN ADMINISTRATIVA', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(5, 'DIRECCION DE FINANZAS', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(6, 'DIRECIÓN DE OPERACIÓN', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(7, 'DIRECCIÓN DE CONSTRUCCIÓN', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1),
(8, 'AYUNTAMIENTO DE MAZANILLO', '2024-02-06 13:49:11', '2024-02-06 13:49:11', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Layers`
--

INSERT INTO `Layers` (`id`, `name`, `archive`, `category`, `createdAt`, `updatedAt`, `icono`, `isActive`) VALUES
(1, 'SANTIAGO-SALAGUA', 'SANTIAGO-SALAGUA.json', '1', '2023-11-14 16:43:52', '2024-02-14 15:46:21', 'SANTIAGO-SALAGUA.png', 1),
(2, 'JALIPA-TAPEIXTLES', 'JALIPA-TAPEIXTLES.json', '1', '2023-11-14 16:44:17', '2023-12-11 17:47:17', 'JALIPA-TAPEIXTLES.png', 1),
(3, 'EL COLOMO', 'EL COLOMO.json', '1', '2023-11-14 16:44:34', '2023-12-11 16:09:50', 'EL COLOMO.png', 1),
(4, 'PEÑA BLANCA', 'PEÑA BLANCA.json', '1', '2023-11-14 16:44:51', '2023-11-14 16:44:51', 'PEÑA BLANCA.png', 1),
(5, 'VENUSTIANO CARRANZA', 'VENUSTIANO CARRANZA.json', '1', '2023-11-14 16:45:21', '2023-11-14 16:45:21', 'VENUSTIANO CARRANZA.png', 1),
(6, 'DESCARGAS', 'DESCARGAS.json', '1', '2023-11-14 16:45:34', '2023-12-11 18:16:49', 'DESCARGAS.png', 1),
(7, 'CONTRATOS', 'CONTRATOS.json', '2', '2023-11-14 17:30:34', '2023-12-11 18:16:44', 'CONTRATOS.png', 1),
(8, 'ALCANTARILLA', 'ALCANTARILLA.json', '3', '2023-11-15 17:52:45', '2023-12-11 18:16:39', 'ALCANTARILLA.png', 1),
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
(22, '201', '201.json', '4', '2023-12-28 18:02:11', '2023-12-28 18:02:11', '201.png', 1),
(23, '203', '203.json', '4', '2023-12-30 17:05:07', '2023-12-30 17:05:07', '203.png', 1),
(24, '204', '204.json', '4', '2023-12-30 17:05:31', '2023-12-30 17:05:31', '204.png', 1),
(25, '205', '205.json', '4', '2023-12-30 17:05:43', '2023-12-30 17:05:43', '205.png', 1),
(26, '206', '206.json', '4', '2023-12-30 17:06:44', '2023-12-30 17:06:44', '206.png', 1),
(27, '207', '207.json', '4', '2023-12-30 17:07:18', '2023-12-30 17:07:18', '207.png', 1),
(28, '208', '208.json', '4', '2023-12-30 17:07:34', '2023-12-30 17:07:34', '208.png', 1),
(29, '209', '209.json', '4', '2023-12-30 17:07:45', '2023-12-30 17:07:45', '209.png', 1),
(30, '210', '210.json', '4', '2023-12-30 17:08:06', '2023-12-30 17:08:06', '210.png', 1),
(31, '211', '211.json', '4', '2024-01-09 13:56:58', '2024-01-09 13:56:58', '211.png', 1),
(32, '212', '212.json', '4', '2024-01-09 13:57:14', '2024-01-09 13:57:14', '212.png', 1),
(33, '213', '213.json', '4', '2024-01-09 13:58:37', '2024-01-09 13:58:37', '213.png', 1),
(34, '214', '214.json', '4', '2024-01-09 14:20:06', '2024-01-09 14:20:06', '214.png', 1),
(35, '215', '215.json', '4', '2024-01-09 14:20:25', '2024-01-09 14:20:25', '215.png', 1),
(36, '216', '216.json', '4', '2024-01-09 14:20:37', '2024-01-09 14:20:37', '216.png', 1),
(37, '217', '217.json', '4', '2024-01-09 14:20:48', '2024-01-09 14:20:48', '217.png', 1),
(38, '218', '218.json', '4', '2024-01-09 14:23:38', '2024-01-09 14:23:38', '218.png', 1),
(39, '219', '219.json', '4', '2024-01-09 14:24:07', '2024-01-09 14:24:07', '219.png', 1),
(40, '220', '220.json', '4', '2024-01-09 14:25:12', '2024-01-09 14:25:12', '220.png', 1),
(41, '221', '221.json', '4', '2024-01-09 14:25:39', '2024-01-09 14:25:39', '221.png', 1),
(42, '222', '222.json', '4', '2024-01-09 14:25:54', '2024-01-09 14:25:54', '222.png', 1),
(43, '223', '223.json', '4', '2024-01-09 14:31:54', '2024-01-09 14:31:54', '223.png', 1),
(44, '224', '224.json', '4', '2024-01-09 14:32:51', '2024-01-09 14:32:51', '224.png', 1),
(45, '226', '226.json', '4', '2024-01-09 14:42:45', '2024-01-09 14:42:45', '226.png', 1),
(46, '229', '229.json', '4', '2024-01-09 14:43:04', '2024-01-09 14:43:04', '229.png', 1),
(47, '230', '230.json', '4', '2024-01-09 14:43:24', '2024-01-09 14:43:24', '230.png', 1),
(48, '234', '234.json', '4', '2024-01-09 14:43:40', '2024-01-09 14:43:40', '234.png', 1),
(49, '300', '300.json', '4', '2024-01-09 14:44:04', '2024-01-09 14:44:04', '300.png', 1),
(50, '301', '301.json', '4', '2024-01-09 14:44:43', '2024-01-09 14:44:43', '301.png', 1),
(51, '302', '302.json', '4', '2024-01-09 14:44:55', '2024-01-09 14:44:55', '302.png', 1),
(52, '303', '303.json', '4', '2024-01-09 14:45:07', '2024-01-09 14:45:07', '303.png', 1),
(53, '304', '304.json', '4', '2024-01-09 14:45:27', '2024-01-09 14:45:27', '304.png', 1),
(54, '305', '305.json', '4', '2024-01-09 14:58:23', '2024-01-09 14:58:23', '305.png', 1),
(55, '306', '306.json', '4', '2024-01-09 15:32:49', '2024-01-09 15:32:49', '306.png', 1),
(56, '307', '307.json', '4', '2024-01-09 15:48:07', '2024-01-09 15:48:07', '307.png', 1),
(57, '308', '308.json', '4', '2024-01-09 15:48:21', '2024-01-09 15:48:21', '308.png', 1),
(58, '309', '309.json', '4', '2024-01-09 15:48:40', '2024-01-09 15:48:40', '309.png', 1),
(59, '310', '310.json', '4', '2024-01-09 15:48:53', '2024-01-09 15:48:53', '310.png', 1),
(60, '313', '313.json', '4', '2024-01-09 15:50:34', '2024-01-09 15:50:34', '313.png', 1),
(61, '314', '314.json', '4', '2024-01-10 13:58:48', '2024-01-10 13:58:48', '314.png', 1),
(62, '316', '316.json', '4', '2024-01-10 13:59:03', '2024-01-10 13:59:03', '316.png', 1),
(63, '317', '317.json', '4', '2024-01-10 13:59:23', '2024-01-10 13:59:23', '317.png', 1),
(64, '321', '321.json', '4', '2024-01-10 13:59:42', '2024-01-10 13:59:42', '321.png', 1),
(65, '322', '322.json', '4', '2024-01-10 13:59:54', '2024-01-10 14:17:14', '322.png', 1),
(66, '323', '323.json', '4', '2024-01-10 14:00:10', '2024-01-10 14:00:10', '323.png', 1),
(67, '324', '324.json', '4', '2024-01-10 14:00:29', '2024-01-10 14:00:29', '324.png', 1),
(68, '325', '325.json', '4', '2024-01-10 14:00:41', '2024-01-10 14:00:41', '325.png', 1),
(69, '326', '326.json', '4', '2024-01-10 14:00:54', '2024-01-10 14:00:54', '326.png', 1),
(70, '401', '401.json', '4', '2024-01-10 14:14:09', '2024-01-10 14:14:09', '401.png', 1),
(71, '402', '402.json', '4', '2024-01-10 14:14:27', '2024-01-10 14:14:27', '402.png', 1),
(72, '403', '403.json', '4', '2024-01-10 14:14:47', '2024-01-10 14:14:47', '403.png', 1),
(73, '404', '404.json', '4', '2024-01-10 14:22:01', '2024-01-10 14:22:01', '404.png', 1),
(74, '405', '405.json', '4', '2024-01-10 14:26:35', '2024-01-10 14:26:41', '405.png', 1),
(75, '501', '501.json', '4', '2024-01-10 14:27:00', '2024-01-10 14:27:00', '501.png', 1),
(76, '502', '502.json', '4', '2024-01-10 14:27:39', '2024-01-10 14:27:39', '502.png', 1),
(77, '503', '503.json', '4', '2024-01-10 14:28:02', '2024-01-10 14:28:02', '503.png', 1),
(78, '504', '504.json', '4', '2024-01-10 14:32:44', '2024-01-10 14:32:44', '504.png', 1),
(79, '601', '601.json', '4', '2024-01-10 14:33:20', '2024-01-10 14:33:20', '601.png', 1),
(80, '602', '602.json', '4', '2024-01-10 14:33:52', '2024-01-10 14:33:52', '602.png', 1),
(81, '603', '603.json', '4', '2024-01-10 14:34:10', '2024-01-10 14:34:10', '603.png', 1),
(82, '604', '604.json', '4', '2024-01-10 14:35:16', '2024-01-10 14:35:16', '604.png', 1),
(83, '605', '605.json', '4', '2024-01-10 14:35:32', '2024-01-10 14:35:32', '605.png', 1),
(84, '606', '606.json', '4', '2024-01-10 14:35:45', '2024-01-10 14:35:45', '606.png', 1),
(85, '607', '607.json', '4', '2024-01-10 14:36:09', '2024-01-10 14:36:09', '607.png', 1),
(86, '608', '608.json', '4', '2024-01-10 14:37:02', '2024-01-10 14:37:02', '608.png', 1),
(87, '609', '609.json', '4', '2024-01-10 14:38:16', '2024-01-10 14:38:16', '609.png', 1),
(88, '610', '610.json', '4', '2024-01-10 14:38:31', '2024-01-10 14:38:31', '610.png', 1),
(89, '611', '611.json', '4', '2024-01-10 14:38:52', '2024-01-10 14:38:52', '611.png', 1),
(90, '612', '612.json', '4', '2024-01-10 14:39:09', '2024-01-10 14:39:09', '612.png', 1),
(91, '613', '613.json', '4', '2024-01-10 14:46:05', '2024-01-10 14:46:05', '613.png', 1),
(92, '614', '614.json', '4', '2024-01-10 14:46:20', '2024-01-10 14:46:20', '614.png', 1),
(93, '615', '615.json', '4', '2024-01-10 14:48:06', '2024-01-10 14:48:06', '615.png', 1),
(94, '616', '616.json', '4', '2024-01-10 14:48:21', '2024-01-10 14:48:21', '616.png', 1),
(95, '617', '617.json', '4', '2024-01-10 15:07:55', '2024-01-10 15:07:55', '617.png', 1),
(96, '618', '618.json', '4', '2024-01-10 15:08:09', '2024-01-10 15:08:09', '618.png', 1),
(97, '620', '620.json', '4', '2024-01-10 15:08:24', '2024-01-10 15:08:24', '620.png', 1),
(98, '621', '621.json', '4', '2024-01-10 15:08:41', '2024-01-10 15:08:41', '621.png', 1),
(99, '622', '622.json', '4', '2024-01-10 15:08:52', '2024-01-10 15:08:52', '622.png', 1),
(100, '623', '623.json', '4', '2024-01-10 15:09:32', '2024-01-10 15:09:32', '623.png', 1),
(101, '624', '624.json', '4', '2024-01-10 15:09:54', '2024-01-10 15:09:54', '624.png', 1),
(102, '626', '626.json', '4', '2024-01-10 15:14:39', '2024-01-10 15:14:39', '626.png', 1),
(103, '627', '627.json', '4', '2024-01-10 15:14:52', '2024-01-10 15:14:52', '627.png', 1),
(104, '628', '628.json', '4', '2024-01-10 15:15:11', '2024-01-10 15:15:11', '628.png', 1),
(105, '629', '629.json', '4', '2024-01-10 15:15:41', '2024-01-10 15:15:41', '629.png', 1),
(106, '631', '631.json', '4', '2024-01-10 15:15:58', '2024-01-10 15:15:58', '631.png', 1),
(107, '700', '700.json', '4', '2024-01-10 15:16:20', '2024-01-10 15:16:20', '700.png', 1),
(108, '701', '701.json', '4', '2024-01-10 15:16:45', '2024-01-10 15:16:45', '701.png', 1),
(109, '702', '702.json', '4', '2024-01-10 15:17:00', '2024-01-10 15:17:00', '702.png', 1),
(110, '703', '703.json', '4', '2024-01-10 15:17:16', '2024-01-10 15:17:16', '703.png', 1),
(111, '704', '704.json', '4', '2024-01-10 15:17:36', '2024-01-10 15:17:36', '704.png', 1),
(112, '705', '705.json', '4', '2024-01-10 15:18:00', '2024-01-10 15:18:00', '705.png', 1),
(113, '706', '706.json', '4', '2024-01-10 15:18:17', '2024-01-10 15:18:17', '706.png', 1),
(114, '707', '707.json', '4', '2024-01-10 15:18:32', '2024-01-10 15:18:32', '707.png', 1),
(115, '709', '709.json', '4', '2024-01-10 15:18:53', '2024-01-10 15:18:53', '709.png', 1),
(116, '710', '710.json', '4', '2024-01-10 15:24:49', '2024-01-10 15:24:49', '710.png', 1),
(117, '711', '711.json', '4', '2024-01-10 15:25:20', '2024-01-10 15:25:20', '711.png', 1),
(118, '712', '712.json', '4', '2024-01-10 15:32:51', '2024-01-10 15:32:51', '712.png', 1),
(119, '713', '713.json', '4', '2024-01-10 15:33:07', '2024-01-10 15:33:07', '713.png', 1),
(120, '714', '714.json', '4', '2024-01-10 15:33:22', '2024-01-10 15:33:22', '714.png', 1),
(121, '715', '715.json', '4', '2024-01-10 15:33:40', '2024-01-10 15:33:40', '715.png', 1),
(122, '716', '716.json', '4', '2024-01-10 15:34:06', '2024-01-10 15:34:06', '716.png', 1),
(123, '717', '717.json', '4', '2024-01-10 15:34:26', '2024-01-10 15:34:26', '717.png', 1),
(124, '718', '718.json', '4', '2024-01-10 15:34:43', '2024-01-10 15:34:43', '718.png', 1),
(125, '719', '719.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '719.png', 1),
(126, '720', '720.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '720.png', 1),
(127, '722', '722.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '722.png', 1),
(128, '723', '723.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '723.png', 1),
(129, '724', '724.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '724.png', 1),
(130, '725', '725.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '725.png', 1),
(131, '726', '726.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '726.png', 1),
(132, '727', '727.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '727.png', 1),
(133, '728', '728.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '728.png', 1),
(134, '729', '729.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '729.png', 1),
(135, '730', '730.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '730.png', 1),
(136, '731', '731.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '731.png', 1),
(137, '732', '732.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '732.png', 1),
(138, '733', '733.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '733.png', 1),
(139, '734', '734.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '734.png', 1),
(140, '736', '736.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '736.png', 1),
(141, '737', '737.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '737.png', 1),
(142, '800', '800.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '800.png', 1),
(143, '801', '801.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '801.png', 1),
(144, '802', '802.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '802.png', 1),
(145, '803', '803.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '803.png', 1),
(146, '804', '804.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '804.png', 1),
(147, '805', '805.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '805.png', 1),
(148, '806', '806.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '806.png', 1),
(149, '807', '807.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '807.png', 1),
(150, '808', '808.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '808.png', 1),
(151, '809', '809.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '809.png', 1),
(152, '810', '810.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '810.png', 1),
(153, '901', '901.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '901.png', 1),
(154, '906', '906.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '906.png', 1),
(155, '953', '953.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '953.png', 1),
(156, '956', '956.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '956.png', 1),
(157, '1001', '1001.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1001.png', 1),
(158, '1002', '1002.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1002.png', 1),
(159, '1003', '1003.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1003.png', 1),
(160, '1005', '1005.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1005.png', 1),
(161, '1006', '1006.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1006.png', 1),
(162, '1007', '1007.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1007.png', 1),
(163, '1009', '1009.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1009.png', 1),
(164, '1010', '1010.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1010.png', 1),
(165, '1011', '1011.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1011.png', 1),
(166, '1012', '1012.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1012.png', 1),
(167, '1013', '1013.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1013.png', 1),
(168, '1018', '1018.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1018.png', 1),
(169, '1019', '1019.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1019.png', 1),
(170, '1020', '1020.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1020.png', 1),
(171, '1023', '1023.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1023.png', 1),
(172, '1024', '1024.json', '4', '2024-01-10 16:37:14', '2024-01-10 16:37:14', '1024.png', 1),
(173, 'COLADERA', 'COLADERA.json', '3', '2024-02-01 13:52:18', '2024-02-01 13:52:18', 'COLADERA.png', 1),
(174, 'DESAGUE', 'DESAGUE.json', '3', '2024-02-01 13:53:35', '2024-02-01 13:53:35', 'DESAGUE.png', 1),
(175, 'POZO DE VISITA', 'POZO_DE_VISITA.json', '3', '2024-02-01 14:19:04', '2024-02-01 14:19:04', 'POZO_DE_VISITA.png', 1),
(176, 'CAJA DE VALVULAS', 'CAJA_DE_VALVULAS.json', '3', '2024-02-01 14:20:51', '2024-02-01 14:20:51', 'CAJA_DE_VALVULAS.png', 1),
(177, 'NO IDENTIFICADO', 'NO_IDENTIFICADO.json', '3', '2024-02-01 14:24:40', '2024-02-01 14:24:40', 'NO_IDENTIFICADO.png', 1),
(178, 'POZOS DE CAPDAM', 'POZOS_DE_CAPDAM.json', '3', '2024-02-01 14:35:00', '2024-02-01 14:35:00', 'POZOS_DE_CAPDAM.png', 1),
(179, 'REBOMBEO AGUA POTABLE', 'REBOMBEO_AGUA_POTABLE.json', '3', '2024-02-01 14:37:53', '2024-02-01 14:37:53', 'REBOMBEO_AGUA_POTABLE.png', 1),
(180, 'REBOMBEO AGUAS NEGRAS', 'REBOMBEO_AGUAS_NEGRAS.json', '3', '2024-02-01 14:38:25', '2024-02-01 14:38:25', 'REBOMBEO_AGUAS_NEGRAS.png', 1),
(181, 'GALERIA', 'GALERIA.json', '3', '2024-02-01 14:38:54', '2024-02-01 14:38:54', 'GALERIA.png', 1),
(182, 'PTAR', 'PTAR.json', '3', '2024-02-01 14:39:52', '2024-02-01 14:39:52', 'PTAR.png', 1),
(183, 'TANQUE DE ALMACENAMIENTO AP', 'TANQUE_DE_ALMACENAMIENTO_AP.json', '3', '2024-02-01 14:41:00', '2024-02-01 14:41:00', 'TANQUE_DE_ALMACENAMIENTO_AP.png', 1),
(184, 'OFICINAS ADMINISTRATIVAS', 'OFICINAS_ADMINISTRATIVAS.json', '3', '2024-02-01 14:42:13', '2024-02-01 14:42:13', 'OFICINAS_ADMINISTRATIVAS.png', 1),
(185, 'RED DE AGUA POTABLE', 'RED_DE_AGUA_POTABLE.json', '3', '2024-02-01 14:42:13', '2024-02-01 14:42:13', 'RED_DE_AGUA_POTABLE.png', 1),
(186, 'ESCURRIMIENTOS', 'ESCURRIMIENTOS.json', '3', '2024-02-02 14:38:30', '2024-02-02 14:38:30', 'ESCURRIMIENTOS.png', 1),
(187, 'RIOS', 'RIOS.json', '3', '2024-02-02 16:09:32', '2024-02-02 16:09:32', 'RIOS.png', 1),
(188, 'ZONAS IRREGULARES', 'ZONAS_IRREGULARES.json', '5', '2024-02-08 14:25:31', '2024-02-08 14:25:31', 'ZONAS_IRREGULARES.png', 1),
(189, 'SIN INFORMACION', 'SIN_INFORMACION.json', '5', '2024-02-08 14:28:20', '2024-02-08 14:28:20', 'SIN_INFORMACION.png', 1),
(190, 'REGIMEN CONDOMINAL', 'REGIMEN_CONDOMINAL.json', '5', '2024-02-08 14:30:54', '2024-02-08 14:30:54', 'REGIMEN_CONDOMINAL.png', 1),
(191, 'MANZANAS', 'MANZANAS.json', '5', '2024-02-08 14:56:58', '2024-02-08 14:56:58', 'MANZANAS.png', 1),
(192, 'FRACCIONAMIENTOS', 'FRACCIONAMIENTOS.json', '5', '2024-02-08 15:06:39', '2024-02-08 15:06:39', 'FRACCIONAMIENTOS.png', 1),
(193, 'CUERPOS DE AGUA', 'CUERPOS_DE_AGUA.json', '5', '2024-02-08 15:09:31', '2024-02-08 15:09:31', 'CUERPOS_DE_AGUA.png', 1),
(194, 'CONDOMINIO', 'CONDOMINIOS.json', '5', '2024-02-08 15:12:10', '2024-02-08 15:15:10', 'CONDOMINIOS.png', 1),
(195, 'COLONIA', 'COLONIA.json', '5', '2024-02-08 15:15:02', '2024-02-08 15:15:02', 'COLONIA.png', 1),
(196, 'MUNICIPIO', 'MUNICIPIO.json', '5', '2024-02-08 15:18:23', '2024-02-08 15:18:23', 'MUNICIPIO.png', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Permissions`
--

INSERT INTO `Permissions` (`id`, `perm_name`, `perm_description`, `createdAt`, `updatedAt`) VALUES
(1, 'user_add', 'Agregar usuario', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(2, 'user_update', 'Actualizar usuario', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(3, 'user_get', 'Obtener un usuario', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(4, 'user_get_all', 'Obtener todos los usuarios', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(5, 'user_delete', 'Borrar usuarios', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(6, 'role_add', 'Agregar rol', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(7, 'role_update', 'Actualizar rol', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(8, 'role_get', 'Obtener un rol', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(9, 'role_get_all', 'Obtener todos los roles', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(10, 'role_delete', 'Borrar rol', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(11, 'permissions_add', 'Agregar permiso', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(12, 'permissions_update', 'Actualizar permiso', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(13, 'permissions_get', 'Obtener un permiso', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(14, 'permissions_get_all', 'Obtener todos los permisos', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(15, 'permissions_delete', 'Borrar un permiso', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(16, 'layer_add', 'Agregar una capa', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(17, 'layer_update', 'Actualizar capa', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(18, 'layer_get', 'Obtener una capa', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(19, 'layer_get_all', 'Obtener todas las capas', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(20, 'layer_delete', 'Borrar una capa', '2023-12-23 18:28:47', '2023-12-23 18:28:47'),
(21, 'category_add', 'Agregar categoría', '2023-12-08 17:30:21', '2023-12-08 17:30:21'),
(22, 'category_update', 'Actualizar categoría', '2023-12-08 17:30:41', '2023-12-08 17:30:41'),
(23, 'category_get', 'Obtener una categoría', '2023-12-08 17:31:07', '2023-12-08 17:31:07'),
(24, 'category_get_all', 'Obtener todas las categorías', '2023-12-08 17:31:18', '2023-12-08 17:31:18'),
(25, 'category_delete', 'Borrar categoría', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(26, 'direction_add', 'Agregar dirección', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(27, 'direction_update', 'Actualizar dirección', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(28, 'direction_get', 'Obtener una dirección', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(29, 'direction_get_all', 'Obtener todas las direcciones', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(30, 'direction_delete', 'Borrar dirección', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(31, 'department_add', 'Agregar departamento', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(32, 'department_update', 'Actualizar departamento', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(33, 'department_get', 'Obtener un departamento', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(34, 'department_get_all', 'Obtener todos los departamentos', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(35, 'department_delete', 'Borrar departamento', '2023-12-08 17:31:31', '2023-12-08 17:31:31'),
(37, 'category_get_inactive', 'Obtener categorias inactivas', '2023-12-08 17:31:18', '2023-12-08 17:31:18'),
(42, 'route_add', 'Agregar una ruta nueva', '2024-02-24 13:59:24', '2024-02-24 13:59:24'),
(43, 'route_update', 'Actualizar una ruta', '2024-02-24 13:59:42', '2024-02-24 13:59:42'),
(44, 'route_get', 'Obtener una ruta', '2024-02-24 14:02:07', '2024-02-24 14:02:07'),
(45, 'route_get_all', 'Obtener todas las rutas', '2024-02-24 14:02:29', '2024-02-24 14:02:29'),
(46, 'route_delete', 'Borrar una ruta', '2024-02-24 14:02:41', '2024-02-24 14:02:41'),
(47, 'route_user_add', 'Asignar un usuario a una ruta', '2024-02-24 14:02:59', '2024-02-24 14:02:59');

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
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `RolePermissions`
--

INSERT INTO `RolePermissions` (`id`, `role_id`, `perm_id`, `createdAt`, `updatedAt`) VALUES
(17, 3, 18, '2024-01-22 16:55:40', '2024-01-22 16:55:40'),
(18, 3, 19, '2024-01-22 16:55:40', '2024-01-22 16:55:40'),
(19, 3, 23, '2024-01-22 16:55:40', '2024-01-22 16:55:40'),
(20, 3, 24, '2024-01-22 16:55:40', '2024-01-22 16:55:40'),
(53, 4, 16, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(55, 4, 17, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(57, 4, 18, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(59, 4, 19, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(61, 4, 20, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(62, 4, 21, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(64, 4, 22, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(66, 4, 23, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(68, 4, 24, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(70, 4, 25, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(72, 4, 1, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(74, 4, 2, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(76, 4, 3, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(78, 4, 4, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(80, 4, 5, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(82, 4, 6, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(84, 4, 7, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(86, 4, 8, '2024-02-09 20:06:52', '2024-02-09 20:06:52'),
(88, 1, 31, '2024-02-09 19:33:43', '2024-02-09 19:33:43'),
(89, 1, 32, '2024-02-09 19:33:43', '2024-02-09 19:33:43'),
(90, 1, 33, '2024-02-09 19:33:43', '2024-02-09 19:33:43'),
(91, 1, 34, '2024-02-09 19:33:43', '2024-02-09 19:33:43'),
(92, 1, 35, '2024-02-09 19:33:43', '2024-02-09 19:33:43'),
(130, 2, 16, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(131, 2, 17, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(132, 2, 18, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(133, 2, 19, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(134, 2, 20, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(135, 2, 21, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(136, 2, 22, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(137, 2, 23, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(138, 2, 36, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(139, 2, 25, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(140, 2, 1, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(141, 2, 2, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(142, 2, 3, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(143, 2, 4, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(144, 2, 5, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(145, 2, 6, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(146, 2, 7, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(147, 2, 8, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(148, 2, 31, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(149, 2, 32, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(150, 2, 33, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(151, 2, 34, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(152, 2, 35, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(153, 2, 9, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(154, 2, 10, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(155, 2, 11, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(156, 2, 12, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(157, 2, 13, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(158, 2, 14, '2024-02-10 14:35:42', '2024-02-10 14:35:42'),
(159, 2, 15, '2024-02-10 14:35:42', '2024-02-10 14:35:42');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`id`, `role_name`, `role_description`, `createdAt`, `updatedAt`, `isActive`) VALUES
(1, 'root', 'ROOT', '2023-12-23 18:28:47', '2023-12-23 18:28:47', 1),
(2, 'admin', 'Admin', '2023-12-26 18:41:59', '2024-02-10 14:35:42', 1),
(3, 'usuario', 'Usuario', '2023-12-26 18:42:11', '2024-02-08 18:33:23', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Routes`
--

INSERT INTO `Routes` (`id`, `routeNumber`, `createdAt`, `updatedAt`, `assignedUser`, `isActive`) VALUES
(1, 101, '2024-02-23 22:47:45', '2024-02-23 22:47:45', 1, 1);

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
('20240224160840-addIsActiveToRoutes.js');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `role_id`, `picture`, `name`, `ape_pat`, `ape_mat`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`, `department_id`) VALUES
(1, 1, 'profile.png', 'Programacion', 'Capdam', 'Manzanillo', 'programacion@capdam.gob.mx', '$2b$10$r5eRb4oBfhqg7PHkUKnao.9ptE7bUyLZ.0TnhLk3ug9j1NMBaGxAy', 1, '2023-12-23 18:28:47', '2023-12-23 18:28:47', 3),
(3, 2, 'profile.png', 'Admin', 'Capdam', 'Manzanillo', 'sistemas@capdam.gob.mx', '$2a$10$jzI2/d2mMjyyBn2VT2zZQ.Nl.2Z91sIZrZdMYmN6GdBGo/4H6iije', 1, '2023-12-30 15:03:42', '2024-02-09 21:52:15', 3),
(4, 3, 'profile.png', 'Enrique de Jesús', 'Ochoa', 'Preciado', 'eochoa11@ucol.mx', '$2a$10$a5JPxiotKowUKDWoJ..N/.gL.64QaQwxc3rhN1h3n2OKcg2h..reS', 1, '2024-01-29 14:07:11', '2024-02-09 21:50:51', 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Departments`
--
ALTER TABLE `Departments`
  ADD CONSTRAINT `Departments_direction_id_foreign_idx` FOREIGN KEY (`direction_id`) REFERENCES `Directions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `Routes`
--
ALTER TABLE `Routes`
  ADD CONSTRAINT `Routes_assignedUser_foreign_idx` FOREIGN KEY (`assignedUser`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_department_id_foreign_idx` FOREIGN KEY (`department_id`) REFERENCES `Departments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
