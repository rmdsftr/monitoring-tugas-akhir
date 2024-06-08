const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{
    const mahasiswa = sequelize.define('mahasiswa',{
        nim:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        nama_mahasiswa: DataTypes.STRING,
        judul_tugas_akhir: DataTypes.STRING,
        fakultas: DataTypes.STRING,
        departemen: DataTypes.STRING,
        email: DataTypes.STRING,
        telepon: DataTypes.STRING,
        katasandi: DataTypes.STRING,
        status_bimbingan: DataTypes.STRING,
        semester: DataTypes.INTEGER,
        angkatan: DataTypes.INTEGER,
        gambar: DataTypes.STRING,
        nip:{
            type: DataTypes.STRING,
            references: {
                model: 'dosen',
                key: 'nip'
            }
        },
        tableName: 'mahasiswa',
        timestamps: false
    });

    mahasiswa.associate = function(models){
        mahasiswa.belongsTo(models.dosen, {
            foreignKey: 'nip',
            as: 'dosen'
        });
    }
    return mahasiswa;
}