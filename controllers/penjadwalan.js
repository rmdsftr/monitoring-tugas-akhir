const { query } = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

exports.listMahasiswa = (req, res) => {
    console.log(req.body);

    const nip = req.session.nip;

    db.query('SELECT * FROM mahasiswa WHERE nip=?', [nip],(error, results)=>{
        if(error){
            console.log(error);
        }

        return res.render('pilih-mahasiswa',{
            daftarMahasiswa : results
        });
    })
}

exports.kirimJanji = (req, res) => {
    const { tanggal, waktu, tempat, pesan, students } = req.body;
    const nip = req.session.nip;
    const status_dosen = "membuat janji";
    const status_mahasiswa = "Belum dikonfirmasi";

    const values = students.map(student => [
        student.nim,
        nip,
        tanggal,
        waktu,
        tempat,
        pesan,
        status_dosen,
        status_mahasiswa
    ]);

    const sql = 'INSERT INTO penjadwalan (nim, nip, tanggal, waktu, tempat, chat_dosen, status_dosen, status_mahasiswa) VALUES ?';

    db.query(sql, [values], (error, results) => {
        if (error) {
            console.error("Error inserting data into database:", error);
            return res.status(500).json({ success: false, message: 'Data gagal diinputkan ke database' });
        }

        alert("Jadwal berhasil dibuat");
        return res.json({ success: true, message: 'Data berhasil diinputkan ke database' });
    });
};

exports.upcoming = (req, res) => {

    const nip = req.session.nip;

    const query = 'SELECT penjadwalan.nim, mahasiswa.nama_mahasiswa, penjadwalan.tanggal, penjadwalan.waktu, penjadwalan.tempat, penjadwalan.status_mahasiswa FROM penjadwalan JOIN mahasiswa ON mahasiswa.nim = penjadwalan.nim WHERE penjadwalan.nip=?';
    db.query(query, [nip], (error, results) =>{
        if(error){
            console.log(error);
        }

        return res.render('jadwal-mendatang',{
            listJadwal: results
        })
    })
    
}