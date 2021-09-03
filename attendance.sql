-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2021 at 05:22 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `Name` varchar(250) NOT NULL,
  `Date` varchar(250) NOT NULL,
  `Time` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`Name`, `Date`, `Time`) VALUES
('-BILL GATES', '03/09/2021', '08:50:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) UNSIGNED NOT NULL,
  `Name` varchar(250) NOT NULL,
  `ImgLink` varchar(250) NOT NULL,
  `Roll` int(11) NOT NULL,
  `Dept` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Name`, `ImgLink`, `Roll`, `Dept`) VALUES
(1, 'Elon Musk', 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg', 2, 'CSE'),
(2, 'Bill Gates', 'https://content.fortune.com/wp-content/uploads/2020/09/CNV.10.20.FORTUNE_BILL_AND_MELINDA_GATES_030-vertical.jpg', 65, '65'),
(3, 'Satya Nandella', 'https://media.wired.com/photos/5cd03fc84ef5ad318eea3885/master/w_2560%2Cc_limit/microsoft-3590.jpg', 28, 'CSE'),
(45, 'Ratan Tata', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2Fb0c032466eb88b109f20d7d9f6b4e0a8%2F0x0.jpg', 2, 'Cse'),
(70, 'Warren buffet', 'https://photos5.appleinsider.com/gallery/41760-80988-40551-78134-34561-62472-warren-buffet-head-xl-xl-xl.jpg', 45, 'CSE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
