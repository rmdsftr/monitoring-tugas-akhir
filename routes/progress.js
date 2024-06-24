const express = require('express');
const progressControllers = require('../controllers/progress');
const { route } = require('./upload');


const router = express.Router();

router.get('/upload-progress', progressControllers.uploadProgress);

router.get('/riwayat-progress', progressControllers.riwayatProgress);

router.get('/progress-mahasiswa', progressControllers.listProgress);

router.get('/halaman-koreksi/:id_dokumen', progressControllers.halamanKoreksi);


module.exports = router;