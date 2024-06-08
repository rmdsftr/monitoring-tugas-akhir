'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('mahasiswa', [{
      nim: "2211522009",
      nama_mahasiswa: "Ramadhani Safitri",
      judul_tugas_akhir: "Pembangunan website monitoring Tugas Akhir",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      email: "ramadhanisgy@gmail.com",
      telepon: "082284745760",
      katasandi: "behelhijau",
      status_bimbingan: "Masih dalam bimbingan",
      semester: 7,
      angkatan: 2020,
      gambar: "profil.jpg",
      nip: "198201182008121002"
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mahasiswa', null,{})
  }
};
