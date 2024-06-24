
module.exports = (sequelize, DataTypes) => {
    const koreksi = sequelize.define('koreksi', {
      id_dokumen: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: 'progress',
            key: 'id_dokumen',
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
      chat_dosen: {
        type: DataTypes.TEXT,
      },
    });
  
    koreksi.associate = (models) => {
      koreksi.belongsTo(models.progress, { foreignKey: 'id_dokumen' });
    };
  
    return penjadwalan;
  };  