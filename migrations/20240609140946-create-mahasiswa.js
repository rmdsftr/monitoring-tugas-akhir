'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mahasiswa', {
      nim: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nama_mahasiswa: {
        type: Sequelize.STRING
      },
      judul_tugas_akhir: {
        type: Sequelize.STRING
      },
      fakultas: {
        type: Sequelize.STRING
      },
      departemen: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telepon: {
        type: Sequelize.STRING
      },
      katasandi: {
        type: Sequelize.STRING
      },
      status_bimbingan: {
        type: Sequelize.STRING
      },
      semester: {
        type: Sequelize.INTEGER
      },
      angkatan: {
        type: Sequelize.INTEGER
      },
      tanggal_didaftarkan: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      gambar: {
        type: Sequelize.STRING
      },
      nip: {
        type: Sequelize.STRING,
        references: {
          model: 'dosen',
          key: 'nip'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mahasiswa');
  }
};