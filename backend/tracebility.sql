-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 16, 2022 at 11:41 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tracebility`
--

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'RPH'),
(2, 'Distributor'),
(3, 'Hotel'),
(4, 'Konsumen');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `nama_lengkap` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sertifikatHalal` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `nama_lengkap`, `role`, `password`, `sertifikatHalal`) VALUES
(4, 'rph01', 'Name Surname', 1, '$2a$08$wm9M3q/hW8NoIdv5GOoWTOkYDtvpTIffjahR2d0vw7CcO/FMrE7bK', 'LPPOM MUI-1983848'),
(5, 'rph02', 'Name Surname2', 1, '$2a$08$9S7acVv3neMCWQFSaDcw3O4UO5mvL.4eGSfyimxO3Qz.jND4NM/tS', 'LPPOM MUI-1983849'),
(6, 'distrib01', 'Distributor S', 1, '$2a$08$xPzLAT835HUFJRCglp8aietfZWnPn5pQlKuhpb5Wvm4pN57HCPVN.', 'LPPOM MUI-1983844'),
(7, 'distributor1', 'Distributor S', 2, '$2a$08$5/6BQMz01nUbCPTjt.Oks.nBWwLKHKn1XOuK9j8/22HnjgOn96YGG', 'LPPOM MUI-1983842'),
(8, 'distributor2', 'Distributor Z', 2, '$2a$08$WG.RvGgMTNsOqTa1WIoJcepZH6r./9Q3IitxcAZTVB6aU3szsRTAO', 'LPPOM MUI-1983842'),
(10, 'hotel01', 'Hotel Grand Zuri', 3, '$2a$08$B1TqxHP0zyxJD7bbADOpvuN8MGr2FjA9acj45EinIdz3Ma/soO3Su', 'LPPOM MUI-1983811');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
