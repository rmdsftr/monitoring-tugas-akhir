const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const { and } = require("sequelize");
const { SELECT } = require("sequelize/lib/query-types");

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});


exports.loginMahasiswa = (req, res) => {
    console.log(req.body);

    if (!req.session) {
        console.error("Sesi tidak didefinisikan");
        return res.render("error", { message: "Internal server error" });
    }

    const nim = req.body.nim;
    const password = req.body.password;

    db.query('SELECT * FROM mahasiswa WHERE nim=?', [nim], (error, results) => {
        if (error) {
            console.error(error);
        }

        if (results.length === 0) {
            console.log("Akun belum terdaftar");
            return res.render("loginmahasiswa");
        }

        if(results.length > 0){
            const user = results[0];

            if((nim == user.nim) && (password == user.katasandi)){
                console.log("login berhasil")

                req.session.nim = user.nim;
                req.session.nama_mahasiswa = user.nama_mahasiswa;
                req.session.judul = user.judul_tugas_akhir;
                req.session.status = user.status_bimbingan;
                req.session.fakultas = user.fakultas;
                req.session.departemen = user.departemen;
                req.session.semester = user.semester;
                req.session.email = user.email;
                req.session.telepon = user.telepon;
                req.session.gambar = user.gambar;

                return res.render("dashboardmahasiswa",{
                    nim: user.nim,
                    nama_mahasiswa: user.nama_mahasiswa,
                    gambar: user.gambar
                })
            } else {
                console.log("username atau password salah");
                return res.redirect("/loginmahasiswa");
            }
        }

    });
}

exports.loginDosen = (req, res) => {
    console.log(req.body);

    const nip = req.body.nip;
    const password = req.body.password;

    db.query('SELECT * FROM dosen WHERE nip=?',[nip], (error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length === 0){
            console.log("akun belum terdaftar");
            return res.render("logindosen");
        }

        if(results.length > 0){
            const user = results[0];

            if((nip == user.nip) && (password == user.katasandi)){
                console.log("login dosen berhasil")
                return res.render("dashboarddosen");
            } else {
                console.log("NIP atau kata sandi salah");
                return res.redirect("/logindosen");
            }
        }
    })
}