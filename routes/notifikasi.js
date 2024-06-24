const express = require('express');
const router = express.Router();
const notificationControllers = require('../controllers/notifikasi');

router.get('/notifikasi-dosen', notificationControllers.showNotifications);

router.post('/update-status', notificationControllers.updateStatus);

router.get('/koreksi-progress/:id_dokumen', notificationControllers.showDocument);

router.get('/koreksi/:docId', notificationControllers.koreksiDokumen);



module.exports = router;