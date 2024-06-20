const express = require('express');
const router = express.Router();
const penjadwalanControllers = require('../controllers/penjadwalan');
const { route } = require('.');

router.get('/janji-dosen', (req, res) =>{
    res.render('janji-dosen');
});

router.get('/pilih-mahasiswa', penjadwalanControllers.listMahasiswa);

router.post('/kirim-janji', penjadwalanControllers.kirimJanji);

router.get('/jadwal-mendatang', penjadwalanControllers.upcoming);

module.exports = router;