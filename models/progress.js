
module.exports = (sequelize, DataTypes) => {
    const progress = sequelize.define('progress', {
        id_dokumen:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
      subjek_dokumen: {
        type: DataTypes.STRING,
      },
      nama_dokumen: {
        type: DataTypes.STRING,
      },
      tanggal_kirim: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      waktu_kirim: {
        type: DataTypes.TIME,
        defaultValue: DataTypes.NOW
      },
      chat_mahasiswa: {
        type: DataTypes.TEXT,
      },
      tanggal_koreksi:{
        type: DataTypes.DATEONLY
      },
      waktu_koreksi:{
        type: DataTypes.TIME,
      },
      deadline_revisi:{
        type: DataTypes.DATEONLY
      },
      chat_dosen:{
        type: DataTypes.TEXT,
      },
      status_progress: {
        type: DataTypes.STRING,
      }
    });
  
    progress.associate = (models) => {
      progress.belongsTo(models.dosen, { foreignKey: 'nip' });
      progress.belongsTo(models.mahasiswa, { foreignKey: 'nim' });
    };
  
    return progress;
  };  