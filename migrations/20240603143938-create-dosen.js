'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dosen', {
      nip:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nama_dosen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gelar: {
        type: Sequelize.STRING,
        allowNull:false
      },
      fakultas: {
        type: Sequelize.STRING,
        allowNull: false
      },
      departemen: {
        type: Sequelize.STRING,
        allowNull:false
      },
      jabatan: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      telepon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gambar: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('dosen');
  }
};
