const express = require('express');
const authControllers = require('../controllers/auth');

const router = express.Router();

router.post('/loginMahasiswa', authControllers.loginMahasiswa);
router.post('/loginDosen', authControllers.loginDosen);

module.exports = router;