const express = require('express');
const progressControllers = require('../controllers/progress');


const router = express.Router();

router.get('/upload-progress', (req, res) => {
    res.render('kirim-progress');
})

router.get('/riwayat-progress', progressControllers.riwayatProgress);


module.exports = router;