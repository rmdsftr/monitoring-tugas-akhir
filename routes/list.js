const express = require('express');
const listControllers = require('../controllers/list');
const { route } = require('.');

const router = express.Router()

router.get('/daftarmahasiswa', listControllers.showAngkatan);

router.get('/dashboarddosen', (req, res) =>{
    res.redirect("/dashboarddosen");
});

router.get("/angkatan/:angkatan", listControllers.showListMahasiswa);

router.get('/daftarmahasiswa', (req, res) => {
    res.redirect("daftarmahasiswa");
})

router.get("/nim/:nim", listControllers.showMahasiswaProfile);

router.get('/namamahasiswa', (req, res) => {
    res.redirect("namamahasiswa");
})


module.exports = router;