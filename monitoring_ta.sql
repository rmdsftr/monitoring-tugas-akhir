-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 08:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monitoring_ta`
--

-- --------------------------------------------------------

--
-- Table structure for table `angkatan`
--

CREATE TABLE `angkatan` (
  `id_angkatan` varchar(25) NOT NULL,
  `tahun` int(5) DEFAULT NULL,
  `enrollment_key` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_koreksi`
--

CREATE TABLE `detail_koreksi` (
  `id_koreksi` int(11) NOT NULL,
  `id_bubble` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `nip` varchar(25) NOT NULL,
  `nama_dosen` varchar(100) DEFAULT NULL,
  `bidang_keahlian` varchar(100) DEFAULT NULL,
  `gelar_akademik` varchar(50) DEFAULT NULL,
  `fakultas` varchar(50) DEFAULT NULL,
  `departemen` varchar(50) DEFAULT NULL,
  `jabatan` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telepon` varchar(25) DEFAULT NULL,
  `katasandi` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `komentar`
--

CREATE TABLE `komentar` (
  `id_bubble` int(11) NOT NULL,
  `bubble_komentar` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `koreksi`
--

CREATE TABLE `koreksi` (
  `id_koreksi` int(11) NOT NULL,
  `tgl_koreksi` date DEFAULT NULL,
  `waktu_koreksi` time DEFAULT NULL,
  `deadline_revisi` date DEFAULT NULL,
  `id_progress` int(11) DEFAULT NULL,
  `nip` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` varchar(25) NOT NULL,
  `nama_mahasiswa` varchar(100) DEFAULT NULL,
  `judul_tugas_akhir` varchar(200) DEFAULT NULL,
  `fakultas` varchar(50) DEFAULT NULL,
  `departemen` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telepon` varchar(25) DEFAULT NULL,
  `katasandi` varchar(12) DEFAULT NULL,
  `id_angkatan` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa_dibimbing`
--

CREATE TABLE `mahasiswa_dibimbing` (
  `nip` varchar(25) NOT NULL,
  `nim` varchar(25) NOT NULL,
  `id_angkatan` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penjadwalan`
--

CREATE TABLE `penjadwalan` (
  `judul_pertemuan` varchar(100) DEFAULT NULL,
  `tempat_janji` varchar(100) DEFAULT NULL,
  `pesan_dosen` varchar(500) DEFAULT NULL,
  `pesan_mahasiswa` varchar(500) DEFAULT NULL,
  `status_dosen` varchar(50) DEFAULT NULL,
  `status_mahasiswa` varchar(50) DEFAULT NULL,
  `nim` varchar(25) NOT NULL,
  `nip` varchar(25) NOT NULL,
  `tgl_janji` date NOT NULL,
  `waktu_janji` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `id_progress` int(11) NOT NULL,
  `progress_ke` int(11) DEFAULT NULL,
  `subjek_dokumen` varchar(100) DEFAULT NULL,
  `pesan` varchar(500) DEFAULT NULL,
  `file_dokumen` varchar(100) DEFAULT NULL,
  `tgl_kirim` date DEFAULT NULL,
  `waktu_kirim` time DEFAULT NULL,
  `status_progress` varchar(50) DEFAULT NULL,
  `nim` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `angkatan`
--
ALTER TABLE `angkatan`
  ADD PRIMARY KEY (`id_angkatan`);

--
-- Indexes for table `detail_koreksi`
--
ALTER TABLE `detail_koreksi`
  ADD PRIMARY KEY (`id_koreksi`,`id_bubble`),
  ADD KEY `id_bubble` (`id_bubble`);

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `komentar`
--
ALTER TABLE `komentar`
  ADD PRIMARY KEY (`id_bubble`);

--
-- Indexes for table `koreksi`
--
ALTER TABLE `koreksi`
  ADD PRIMARY KEY (`id_koreksi`),
  ADD KEY `id_progress` (`id_progress`),
  ADD KEY `nip` (`nip`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`),
  ADD KEY `id_angkatan` (`id_angkatan`);

--
-- Indexes for table `mahasiswa_dibimbing`
--
ALTER TABLE `mahasiswa_dibimbing`
  ADD PRIMARY KEY (`nip`,`nim`,`id_angkatan`),
  ADD KEY `nim` (`nim`),
  ADD KEY `id_angkatan` (`id_angkatan`);

--
-- Indexes for table `penjadwalan`
--
ALTER TABLE `penjadwalan`
  ADD PRIMARY KEY (`nim`,`nip`,`tgl_janji`,`waktu_janji`),
  ADD KEY `nip` (`nip`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`id_progress`),
  ADD KEY `nim` (`nim`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_koreksi`
--
ALTER TABLE `detail_koreksi`
  ADD CONSTRAINT `detail_koreksi_ibfk_1` FOREIGN KEY (`id_koreksi`) REFERENCES `koreksi` (`id_koreksi`),
  ADD CONSTRAINT `detail_koreksi_ibfk_2` FOREIGN KEY (`id_bubble`) REFERENCES `komentar` (`id_bubble`);

--
-- Constraints for table `koreksi`
--
ALTER TABLE `koreksi`
  ADD CONSTRAINT `koreksi_ibfk_1` FOREIGN KEY (`id_progress`) REFERENCES `progress` (`id_progress`),
  ADD CONSTRAINT `koreksi_ibfk_2` FOREIGN KEY (`nip`) REFERENCES `dosen` (`nip`);

--
-- Constraints for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD CONSTRAINT `mahasiswa_ibfk_1` FOREIGN KEY (`id_angkatan`) REFERENCES `angkatan` (`id_angkatan`);

--
-- Constraints for table `mahasiswa_dibimbing`
--
ALTER TABLE `mahasiswa_dibimbing`
  ADD CONSTRAINT `mahasiswa_dibimbing_ibfk_1` FOREIGN KEY (`nip`) REFERENCES `dosen` (`nip`),
  ADD CONSTRAINT `mahasiswa_dibimbing_ibfk_2` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`),
  ADD CONSTRAINT `mahasiswa_dibimbing_ibfk_3` FOREIGN KEY (`id_angkatan`) REFERENCES `angkatan` (`id_angkatan`);

--
-- Constraints for table `penjadwalan`
--
ALTER TABLE `penjadwalan`
  ADD CONSTRAINT `penjadwalan_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`),
  ADD CONSTRAINT `penjadwalan_ibfk_2` FOREIGN KEY (`nip`) REFERENCES `dosen` (`nip`);

--
-- Constraints for table `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `progress_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
