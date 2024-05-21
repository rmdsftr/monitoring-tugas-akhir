const express = require('express');
const mysql = require('mysql');
const path = require('path');

const router = express.Router();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/avatar', upload.single("image"), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        const fileName = req.file.filename; 
        const nim = req.body.nim;

        db.query("UPDATE mahasiswa SET gambar = ? WHERE nim = ?", [fileName, nim], (err, result) => {
            if (err) {
                console.error("Error inserting into database:", err);
                return res.status(500).send("Internal Server Error");
            } else {
                console.log("Foto profil berhasil diperbarui");
                return res.redirect("/profil/edit");
            }
        });
    } catch (err) {
        console.error("Error handling request:", err);
        return res.status(400).send("Bad Request");
    }
});

module.exports = router;
