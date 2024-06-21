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