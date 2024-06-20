
module.exports = (sequelize, DataTypes) => {
    const penjadwalan = sequelize.define('penjadwalan', {
      nim: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'mahasiswa',
          key: 'nim',
        },
      },
      nip: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'dosen',
          key: 'nip',
        },
      },
      tanggal: {
        type: DataTypes.DATEONLY,
        primaryKey: true,
      },
      waktu: {
        type: DataTypes.TIME,
        primaryKey: true,
      },
      tempat: {
        type: DataTypes.STRING,
      },
      judul_pertemuan: {
        type: DataTypes.STRING,
      },
      chat_dosen: {
        type: DataTypes.TEXT,
      },
      chat_mahasiswa: {
        type: DataTypes.TEXT,
      },
      status_dosen: {
        type: DataTypes.STRING,
      },
      status_mahasiswa: {
        type: DataTypes.STRING,
      }
    });
  
    penjadwalan.associate = (models) => {
      penjadwalan.belongsTo(models.dosen, { foreignKey: 'nip' });
      penjadwalan.belongsTo(models.mahasiswa, { foreignKey: 'nim' });
    };
  
    return penjadwalan;
  };  