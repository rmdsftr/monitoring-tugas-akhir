const express = require('express');
const uploadControllers = require('../controllers/upload');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/avatar', uploadControllers.avatar);

router.post('/kirim-progress', upload.single('dokumen'), uploadControllers.uploadProgress);

module.exports = router;