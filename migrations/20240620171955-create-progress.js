'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('progress',{
      id_dokumen:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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
      subjek_dokumen: {
        type: Sequelize.STRING,
      },
      nama_dokumen: {
        type: Sequelize.STRING,
      },
      tanggal_kirim: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      waktu_kirim: {
        type: Sequelize.TIME,
        defaultValue: Sequelize.NOW
      },
      chat_mahasiswa: {
        type: Sequelize.TEXT,
      },
      tanggal_koreksi:{
        type: Sequelize.DATEONLY
      },
      waktu_koreksi:{
        type: Sequelize.TIME,
      },
      deadline_revisi:{
        type: Sequelize.DATEONLY
      },
      chat_dosen:{
        type: Sequelize.TEXT,
      },
      status_progress: {
        type: Sequelize.STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('progress');
  }
};
