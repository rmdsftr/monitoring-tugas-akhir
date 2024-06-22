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
        res.send({ success: true });
    });
}
