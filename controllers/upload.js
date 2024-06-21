const mysql = require('mysql');
const path = require('path');
const multer = require('multer');
const progress = require('../models/progress');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.avatar = (req, res) =>{
    upload.single('avatar')(req, res, (err) => {
        try {
            if (err instanceof multer.MulterError) {
                console.error("Multer error:", err);
                return res.status(400).send("Multer Error");
            } else if (err) {
                console.error("Unknown error:", err);
                return res.status(500).send("Unknown Error");
            }

            if (!req.file) {
                return res.status(400).send("No file uploaded");
            }

            const fileName = req.file.filename; 
            const nim = req.body.nim;


            db.query("UPDATE mahasiswa SET gambar = ? WHERE nim = ?", [fileName, nim], (err, result) => {
                if (err) {
                    console.error("Error updating database:", err);
                    return res.status(500).send("Database Error");
                } else {
                    console.log("Foto profil berhasil diperbarui");
                    req.session.image = image;
                    return res.redirect("/profil/edit");
                }
            });
        } catch (err) {
            console.error("Error handling request:", err);
            return res.status(400).send("Bad Request");
        }
    });
}


exports.uploadProgress = (req, res) => {
    console.log("memproses pengiriman progress");

    const nim = req.session.nim;
    const subjek = req.body.subjek;
    const dokumen = req.file.filename;
    const pesan = req.body.pesan;

    const now = new Date();
    const tanggalKirim = now.toISOString().split('T')[0]; 
    const waktuKirim = now.toTimeString().split(' ')[0]; 
    const status_progress = "Terkirim";

    db.query('SELECT * FROM mahasiswa WHERE nim=?', [nim], (error, hasil) => {
        if(error){
            console.log(error);
        }

        const nip = hasil[0].nip;

        const query = 'INSERT INTO progress (nim, nip, subjek_dokumen, nama_dokumen, tanggal_kirim, waktu_kirim, chat_mahasiswa, status_progress) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [nim, nip, subjek, dokumen, tanggalKirim, waktuKirim, pesan, status_progress], (err, result) => {
            if (err) {
                console.error('Error inserting data: ', err);
                res.status(500).send('Error inserting data');
                return;
            }
            console.log("data berhasil dikirm");
            
            db.query('SELECT * FROM progress WHERE nim=? and status_progress=? ORDER BY id_dokumen DESC', [nim, status_progress], (err, result) => {
                if (err) {
                    console.error('Error fetching data: ', err);
                    res.status(500).send('Error fetching data');
                    return;
                }
                return res.render("riwayat-progress", {
                    listProgress: result
                });
            });
        });

    })
}