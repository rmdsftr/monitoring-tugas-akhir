module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dosen', [
      {
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
      },{
      nip: "196404091995121001",
      nama_dosen: "Prof. Ir Surya Afnarius, M.Sc.,Ph.D",
      gelar: "Professor",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      jabatan: "Guru Besar Sistem Informasi",
      email: "suryaafnarius@gmail.com",
      telepon: "082377859085",
      password: "surya64",
      gambar: "surya.jpg" 
      },{
      nip: "198410062012121001",
      nama_dosen: "Ricky Akbar, M.Kom",
      gelar: "Magister",
      fakultas: "Teknologi Informasi",
      departemen: "Sistem Informasi",
      jabatan: "Sekretaris Departemen",
      email: "rickyakbar@gmail.com",
      telepon: "081266758897",
      password: "ricky84",
      gambar: "ricky.jpg" 
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dosen', null, {});
  },
};