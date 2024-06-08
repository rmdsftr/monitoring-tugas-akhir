const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const dosen = sequelize.define('dosen', {
        nip:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        nama_dosen: DataTypes.STRING,
        gelar: DataTypes.STRING,
        fakultas: DataTypes.STRING,
        departemen: DataTypes.STRING,
        jabatan: DataTypes.STRING,
        email: DataTypes.STRING,
        telepon: DataTypes.STRING,
        password: DataTypes.STRING,
        gambar: DataTypes.STRING,
    },{
        tableName: 'dosen',
        timestamps: false
    });

    dosen.associate = function(models){
        dosen.hasMany(models.mahasiswa,{
            foreignKey: 'nip',
            as: 'mahasiswa'
        });
    }
    return dosen;
}