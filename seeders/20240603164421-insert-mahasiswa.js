'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('mahasiswa', [{
      nim:"2011522009",
      nama_mahasiswa: "Ramadhani Safitri",
      judul_tugas_akhir: "Pembangunan website monitoring Tugas Akhir",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      email: "ramadhanisgy@gmail.com",
      telepon: "082284745760",
      katasandi: "behelhijau",
      status_bimbingan: "Masih dalam bimbingan",
      semester: 9,
      angkatan: 2020,
      tanggal_didaftarkan: "2024-06-03",
      gambar: "rani.jpg",
      nip:"198201182008121002"
   }, {
      nim: "2011523007",
      nama_mahasiswa: "Cindy Arwinda Putri",
      judul_tugas_akhir: "Sistem Penunjang Keputusan untuk pemilihan Tugas Akhir terbaik",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      email: "cindyarwinda@gmail.com",
      telepon: "081234567890",
      katasandi: "cindy07",
      status_bimbingan: "Masih dalam bimbingan",
      semester: 9,
      angkatan: 2020,
      tanggal_didaftarkan: "2024-06-03",
      gambar: "profil.jpg",
      nip: "198201182008121002"
   }, {
      nim: "1911521015",
      nama_mahasiswa: "Nurul Afani",
      judul_tugas_akhir: "Penggunaan Data Mining untuk memprediksi angka kematian akibat merokok",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      email: "nurul@gmail.com",
      telepon: "082268006400",
      katasandi: "nurulzz",
      status_bimbingan: "Masih dalam bimbingan",
      semester: 11,
      angkatan: 2019,
      tanggal_didaftarkan: "2024-06-03",
      gambar: "profil.jpg",
      nip: "198201182008121002"
   }, {
      nim: "2111521017",
      nama_mahasiswa: "Ghina anfasha nurhadi",
      judul_tugas_akhir: "Sistem penunjang keputusan untuk penjurusan siswa kelas 12",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      email: "ghina@gmail.com",
      telepon: "082378493794",
      katasandi: "ghina17",
      status_bimbingan: "Masih dalam bimbingan",
      semester: 7,
      angkatan: 2021,
      tanggal_didaftarkan: "2024-06-03",
      gambar: "profil.jpg",
      nip: "196404091995121001"
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mahasiswa', null,{})
  }
};
