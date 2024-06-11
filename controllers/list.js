const mysql = require('mysql');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
})

exports.showAngkatan = (req, res) => {
    const nip = req.session.nip;
    
    db.query('SELECT angkatan, COUNT(*) as jumlah FROM mahasiswa WHERE nip=? GROUP BY angkatan',[nip], (error, results) =>{
        if(error){
            console.log(error)
        }

        return res.render("daftarmahasiswa", {angkatan: results});
    })
}

exports.showListMahasiswa = (req, res) => {

    const angkatan = req.params.angkatan;
    const nip = req.session.nip;

    db.query("SELECT * FROM mahasiswa WHERE angkatan=? and nip=?", [angkatan, nip], (error, results) => {
        if(error){
            console.log(error);
        }

        return res.render("namamahasiswa", {
            angkatan: angkatan,
            listMahasiswa: results
        });
    });
};

exports.showMahasiswaProfile = (req, res) => {
    const nim = req.params.nim;
    const nip = req.session.nip;

    db.query("SELECT * FROM mahasiswa WHERE nim=? and nip=?", [nim, nip], (error, results) =>{
        if(error){
            console.log(error);
        }

        return res.render("lihatprofilmahasiswa", {
            nim: nim,
            profilMahasiswa: results
        })
    })
}