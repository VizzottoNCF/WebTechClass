-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/10/2025 às 01:34
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dinossauros`
--
CREATE DATABASE IF NOT EXISTS `dinossauros` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dinossauros`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `descobridor`
--

DROP TABLE IF EXISTS `descobridor`;
CREATE TABLE `descobridor` (
  `id` int(11) NOT NULL,
  `nomeDescobridor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `descobridor`
--

INSERT INTO `descobridor` (`id`, `nomeDescobridor`) VALUES
(1, 'Maryanska'),
(2, 'John Bell Hatcher'),
(3, 'Cientistas Alemães'),
(4, 'Museu Americano de História Natural'),
(5, 'Othniel Charles Marsh'),
(6, 'Barnum Brown');

-- --------------------------------------------------------

--
-- Estrutura para tabela `dinos`
--

DROP TABLE IF EXISTS `dinos`;
CREATE TABLE `dinos` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `fk_grupoID` int(11) NOT NULL,
  `toneladas` int(11) NOT NULL,
  `anoDesc` int(11) NOT NULL,
  `fk_DescobridorID` int(11) NOT NULL,
  `fk_EraID` int(11) NOT NULL,
  `vidaIni` int(11) NOT NULL,
  `vidaFim` int(11) NOT NULL,
  `fk_PaisID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dinos`
--

INSERT INTO `dinos` (`id`, `nome`, `fk_grupoID`, `toneladas`, `anoDesc`, `fk_DescobridorID`, `fk_EraID`, `vidaIni`, `vidaFim`, `fk_PaisID`) VALUES
(1, 'Saichania', 1, 4, 1977, 1, 1, 145, 66, 1),
(2, 'Tricerátops', 2, 6, 1887, 2, 1, 70, 66, 2),
(3, 'Kentrossauro', 3, 2, 1909, 3, 2, 201, 145, 3),
(4, 'Pinacossauro', 1, 6, 1999, 4, 1, 85, 75, 4),
(5, 'Alossauro', 4, 3, 1877, 5, 2, 155, 150, 5),
(6, 'Torossauro', 2, 8, 1891, 2, 1, 67, 65, 6),
(7, 'Anquilossauro', 1, 8, 1906, 6, 1, 66, 63, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `eras`
--

DROP TABLE IF EXISTS `eras`;
CREATE TABLE `eras` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `eras`
--

INSERT INTO `eras` (`id`, `nome`) VALUES
(1, 'Cretáceo'),
(2, 'Jurássico');

-- --------------------------------------------------------

--
-- Estrutura para tabela `grupodinos`
--

DROP TABLE IF EXISTS `grupodinos`;
CREATE TABLE `grupodinos` (
  `id` int(11) NOT NULL,
  `nomeGrupo` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `grupodinos`
--

INSERT INTO `grupodinos` (`id`, `nomeGrupo`) VALUES
(1, 'Anquilossauros'),
(2, 'Ceratopsídeos'),
(3, 'Estegossauros'),
(4, 'Terápodes');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pais`
--

DROP TABLE IF EXISTS `pais`;
CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `nomePais` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pais`
--

INSERT INTO `pais` (`id`, `nomePais`) VALUES
(1, 'Mongólia'),
(2, 'Canadá'),
(3, 'Tanzânia'),
(4, 'China'),
(5, 'América do Norte'),
(6, 'Estados Unidos da América');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `descobridor`
--
ALTER TABLE `descobridor`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `dinos`
--
ALTER TABLE `dinos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_grupoID` (`fk_grupoID`),
  ADD KEY `fk_DescobridorID` (`fk_DescobridorID`),
  ADD KEY `fk_EraID` (`fk_EraID`),
  ADD KEY `fk_PaisID` (`fk_PaisID`);

--
-- Índices de tabela `eras`
--
ALTER TABLE `eras`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `grupodinos`
--
ALTER TABLE `grupodinos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `descobridor`
--
ALTER TABLE `descobridor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `dinos`
--
ALTER TABLE `dinos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `eras`
--
ALTER TABLE `eras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `grupodinos`
--
ALTER TABLE `grupodinos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `dinos`
--
ALTER TABLE `dinos`
  ADD CONSTRAINT `dinos_ibfk_1` FOREIGN KEY (`fk_grupoID`) REFERENCES `grupodinos` (`id`),
  ADD CONSTRAINT `dinos_ibfk_2` FOREIGN KEY (`fk_DescobridorID`) REFERENCES `descobridor` (`id`),
  ADD CONSTRAINT `dinos_ibfk_3` FOREIGN KEY (`fk_EraID`) REFERENCES `eras` (`id`),
  ADD CONSTRAINT `dinos_ibfk_4` FOREIGN KEY (`fk_PaisID`) REFERENCES `pais` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
