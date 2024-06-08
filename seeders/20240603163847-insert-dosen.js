'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('dosen',[{
    nip: "198201182008121002",
    nama_dosen: "Husnil Kamil, M.T",
    gelar: "Magister",
    fakultas: "Teknologi Informasi",
    departemen: "Sistem Informasi",
    jabatan: "kepala departemen",
    email: "husnilkamil@gmail.com",
    telepon: "081234567890",
    password: "husnil82",
    gambar: "profil.jpg"
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dosen',null,{});
  }
};
