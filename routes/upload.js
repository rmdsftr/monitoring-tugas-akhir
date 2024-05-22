const express = require('express');
const uploadControllers = require('../controllers/upload');

const router = express.Router();

router.post('/avatar', uploadControllers.avatar);

module.exports = router;