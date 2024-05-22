const mysql = require('mysql');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

exports.editProfilMahasiswa = (req, res) => {
    console.log(req.body);

    const nama_dosen = req.session.dosen;
    const nama = req.body.nama_mahasiswa;
    const nim = req.body.nim;
    const status_bimbingan = req.body.status_bimbingan;
    const judul = req.body.judul;
    const fakultas = req.body.fakultas;
    const departemen = req.body.departemen;
    const semester = req.body.semester;
    const email = req.body.email;
    const telepon = req.body.telepon;

    db.query('UPDATE mahasiswa SET judul_tugas_akhir=?, fakultas=?, departemen=?, semester=?, email=?, telepon=? WHERE nim=?', [judul, fakultas, departemen, semester, email, telepon, nim], (error, results) =>{
        if(error){
            console.log(error);
        }

        req.session.dosen = nama_dosen;
        req.session.nama_mahasiswa = nama;
        req.session.nim = nim;
        req.session.status_bimbingan = status_bimbingan;
        req.session.judul = judul;
        req.session.fakultas = fakultas;
        req.session.departemen = departemen;
        req.session.semester = semester;
        req.session.email = email;
        req.session.telepon = telepon;

        console.log("data berhasil diperbarui");
        res.redirect("/profil/profilmahasiswa");
    });

}

exports.ubahpassword = (req, res) => {
    const nim = req.body.nim;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;

    db.query('SELECT katasandi FROM mahasiswa WHERE nim = ?', [nim], (error, results) => {
        if(error) {
            console.error("Error retrieving current password from primary database:", error);
            return res.status(500).send("Internal server error");
        }

        if(results.length === 0) {
            return res.status(404).send("User not found");
        }

        const currentPassword = results[0].katasandi;

        if(oldPassword !== currentPassword) {
            return res.status(400).send("Old password is incorrect");
        }

        db.query('UPDATE mahasiswa SET katasandi = ? WHERE nim = ?', [newPassword, nim], (error, results) => {
            if(error) {
                console.error("Error updating password in monitoring_ta database:", error);
                return res.status(500).send("Internal server error");
            }

            console.log("Password berhasil diperbarui di monitoring_ta database");
            res.redirect("/profil/profilmahasiswa");
        });
    });
}