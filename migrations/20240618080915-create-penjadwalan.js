'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('penjadwalan',{
      nim: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
          model: 'mahasiswa',
          key: 'nim',
        },
      },
      nip: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
          model: 'dosen',
          key: 'nip',
        },
      },
      tanggal: {
        type: Sequelize.DATEONLY,
        primaryKey: true,
      },
      waktu: {
        type: Sequelize.TIME,
        primaryKey: true,
      },
      tempat: {
        type: Sequelize.STRING,
      },
      judul_pertemuan: {
        type: Sequelize.STRING,
      },
      chat_dosen: {
        type: Sequelize.TEXT,
      },
      chat_mahasiswa: {
        type: Sequelize.TEXT,
      },
      status_dosen: {
        type: Sequelize.STRING,
      },
      status_mahasiswa: {
        type: Sequelize.STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('penjadwalan');
  }
};
