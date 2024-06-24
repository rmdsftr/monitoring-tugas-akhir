const mysql = require("mysql");

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

exports.showNotifications = (req, res) => {
    const nip = req.session.nip; 

    db.query('SELECT * FROM progress JOIN mahasiswa ON mahasiswa.nim = progress.nim WHERE progress.nip=?', [nip], (err, results) => {
        if (err) {
            console.error('Error fetching data: ', err);
            res.status(500).send('Error fetching data');
            return;
        }

        res.render('notifikasi-dosen', { notifikasi: results });
    });
};

exports.updateStatus = (req, res) => {
    const { id_dokumen } = req.body;

    db.query('UPDATE progress SET status_notif = "read" WHERE id_dokumen = ?', [id_dokumen], (err, result) => {
        if (err) {
            console.error('Error updating status: ', err);
            res.status(500).send('Error updating status');
            return;
        }

        res.status(200).json({ success: true, id_dokumen });
    });
}

exports.showDocument = (req, res) => {
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

        res.render('koreksi-progress', {
            progressMahasiswa: results
        });
    });
}

exports.koreksiDokumen = (req, res) => {
    const docId = req.params.docId;

    db.query('SELECT * FROM progress WHERE id_dokumen=?', [docId], (error, results) =>{
        if(error){
            console.log(error)
        }

        const nama_dokumen = results[0].nama_dokumen;
        res.render('koreksi', { nama_dokumen: nama_dokumen });
    })
    
}
