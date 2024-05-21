const mysql = require('mysql');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

exports.editProfilMahasiswa = (req, res) => {
    console.log(req.body);

    const dosen = req.body.dosen;
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

        req.session.dosen = dosen;
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
    const { nim, oldpassword, newpassword, confirmpassword } = req.body;

    // Retrieve the current password from the primary database
    db.query('SELECT password FROM mahasiswa WHERE nim = ?', [nim], (error, results) => {
        if(error) {
            console.error("Error retrieving current password from primary database:", error);
            return res.status(500).send("Internal server error");
        }

        if(results.length === 0) {
            return res.status(404).send("User not found");
        }

        const currentPassword = results[0].password;

        // Compare the old password with the current password
        if(old_password !== currentPassword) {
            return res.status(400).send("Old password is incorrect");
        }

        // Update the password in the monitoring_ta database
        monitoringDb.query('UPDATE mahasiswa SET password = ? WHERE nim = ?', [new_password, nim], (error, results) => {
            if(error) {
                console.error("Error updating password in monitoring_ta database:", error);
                return res.status(500).send("Internal server error");
            }

            console.log("Password berhasil diperbarui di monitoring_ta database");
            res.redirect("/profil/profilmahasiswa");
        });
    });
}