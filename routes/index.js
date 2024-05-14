const express = require('express');
const router = express.Router();


router.get("/", (req, res) =>{
  res.render("index");
});

router.get("/logindosen", (req, res) =>{
  res.render("logindosen");
});

router.get("/registerdosen", (req, res) =>{
  res.render("registerdosen");
});

router.get("/dashboarddosen", (req, res) => {
  res.render("dashboarddosen");
});

router.get("/profildosen", (req, res) => {
  res.render("profildosen");
});

router.get("/daftarmahasiswa", (req,res) => {
  res.render("daftarmahasiswa");
});

router.get("/namamahasiswa", (req, res) => {
  res.render("namamahasiswa");
});

router.get("/lihatprofilmahasiswa", (req, res) => {
  res.render("lihatprofilmahasiswa");
});

router.get("/loginmahasiswa", (req, res) => {
  res.render("loginmahasiswa");
});

router.get("/registrasimahasiswa", (req, res) => {
  res.render("registrasimahasiswa");
});

router.get("/dashboardmahasiswa", (req, res) => {
  res.render("dashboardmahasiswa");
});

router.get("/profilmahasiswa", (req, res) => {
  res.render("profilmahasiswa");
});

module.exports = router;
