const mysql = require('mysql');
const path = require('path');
const multer = require('multer');

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