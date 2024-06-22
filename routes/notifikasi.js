const express = require('express');
const router = express.Router();
const notificationControllers = require('../controllers/notifikasi');

router.get('/notifikasi-dosen', notificationControllers.showNotifications);

router.post('/update-status', notificationControllers.updateStatus);

module.exports = router;