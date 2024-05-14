const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
  });

exports.register = (req, res) =>{
    console.log(req.body);

    const nama = req.body.nama;
    const nim = req.body.nim;
    const email = req.body.email;
    const password = req.body.password;

    db.query('SELECT nim FROM mahasiswa WHERE nim =?', [nim], async (error, results) =>{
        if(error){
            console.log(error);
        } 

        if(results.length > 0){
            console.log("NIM is already in use");
            return res.render("registrasimahasiswa");
        } else{
            
            let hashedPassword = await bcrypt.hash(password, 8);

            db.query('INSERT INTO mahasiswa SET?',{nama_mahasiswa:nama, nim:nim, email:email, katasandi:hashedPassword}, (error, results) => {
                if(error){
                    console.log(error);
                    return res.render("registrasimahasiswa");
                } else{
                    console.log(results);
                    return res.render("dashboardmahasiswa");
                }
            })
        }
    })
}

exports.login = (req, res) => {
    const nim = req.body.nim;
    const password = req.body.password;

    db.query('SELECT * FROM mahasiswa WHERE nim=?', [nim], async (error, results) => {
        if (error) {
            console.error("Error saat mencari akun:", error);
            return res.status(500).send("Terjadi kesalahan saat mencari akun");
        }

        if (results.length === 0) {
            console.log("Akun belum terdaftar");
            return res.status(401).send("Akun belum terdaftar");
        }

        const user = results[0];
        const hashedPassword = user.katasandi;

        console.log("Hashed Password from Database:", hashedPassword);
        console.log("Password yang Dimasukkan:", password);

        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
                console.error("Error saat membandingkan password:", err);
                return res.status(500).send("Terjadi kesalahan saat membandingkan password");
            }

            console.log("Apakah Password Cocok?", isMatch);

            if (isMatch) {
                console.log("Login berhasil");
                return res.render("dashboardmahasiswa");
            } else {
                console.log("NIM atau password salah");
                return res.status(401).send("NIM atau password salah");
            }
        });
    });
};