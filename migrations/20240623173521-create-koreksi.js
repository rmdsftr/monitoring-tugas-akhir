'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('koreksi',{
      id_dokumen:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'progress',
          key: 'id_dokumen'
        }
      },
      tanggal_koreksi: {
        type: Sequelize.DATEONLY,
        primaryKey: true,
        defaultValue: Sequelize.NOW
      },
      waktu_koreksi: {
        type: Sequelize.TIME,
        primaryKey: true,
        defaultValue: Sequelize.NOW
      },
      chat_dosen: {
        type: Sequelize.TEXT,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('koreksi');
  }
};