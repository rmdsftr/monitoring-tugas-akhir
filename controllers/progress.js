const { query } = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

exports.riwayatProgress = (req, res) => {
    const nim = req.session.nim;
    const status_progress = "Terkirim";

    db.query('SELECT * FROM progress WHERE nim=? and status_progress=?', [nim, status_progress], (error, results) =>{
        if(error){
            console.log(error);
        }

        return res.render("riwayat-progress", {
            listProgress: results
        })
    })
}

exports.listProgress = (req, res) => {
    const nip = req.session.nip;
    const status_progress = "Terkirim";

    db.query('SELECT * FROM progress JOIN mahasiswa ON mahasiswa.nim = progress.nim WHERE progress.nip=? and status_progress=?', [nip, status_progress], (error, results) => {
        if(error){
            console.log(error);
        }

        return res.render('progress-mahasiswa', {
            daftarProgress:results
        })
    })
}

exports.halamanKoreksi = (req, res) => {
        const { id_dokumen } = req.params;
    
        db.query('SELECT * FROM progress JOIN mahasiswa ON mahasiswa.nim = progress.nim WHERE progress.id_dokumen = ?', [id_dokumen], (error, results) => {
            if (error) {
                console.error('Error fetching updated progress: ', error);
                return res.status(500).send('Error fetching updated progress');
            }
    
            if (results.length === 0) {
                console.warn('No matching records found for id_dokumen:', id_dokumen);
                return res.status(404).send('No matching records found');
            }
    
            res.render('halaman-koreksi', {
                progressMahasiswa: results
            });
        });
    
}

exports.uploadProgress = (req, res) => {
    const nama_dosen = req.session.dosen;

    return res.render('kirim-progress', {
        nama_dosen: nama_dosen
    })
}