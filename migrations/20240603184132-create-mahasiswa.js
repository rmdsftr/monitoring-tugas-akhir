'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mahasiswa', {
      nim:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nama_mahasiswa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      judul_tugas_akhir: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fakultas: {
        type: Sequelize.STRING,
        allowNull:false
      },
      departemen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telepon: {
        type: Sequelize.STRING,
        allowNull: true
      },
      katasandi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status_bimbingan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      semester: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      angkatan: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gambar: {
        type: Sequelize.STRING,
        allowNull:true
      },
      nip:{
          type: Sequelize.STRING,
          allowNull: false,
          references: {
              model: 'dosen',
              key: 'nip'
          }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('mahasiswa');
  }
};