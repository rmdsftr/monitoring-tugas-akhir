const express = require('express');
const router = express.Router();


router.get("/", (req, res) =>{
  console.log(req.session);
  console.log(req.session.id);
  res.render("index",{
    nim: '2211522009',
    nama_mahasiswa: 'ramadhani safitri'
  });
});

router.get("/profilMahasiswa", (req, res)=>{
  res.render("profilmahasiswa");
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
  const error = req.session.error;
  req.session.error = null;
  res.render("loginmahasiswa", {error : error});
});

router.get("/registrasimahasiswa", (req, res) => {
  res.render("registrasimahasiswa");
});

router.get("/dashboardmahasiswa", (req, res) => {
  const nim = req.session.nim;
  const nama_mahasiswa = req.session.nama_mahasiswa;
  const gambar = req.session.gambar;
  
  res.render("dashboardmahasiswa",{
    nim: nim,
    nama_mahasiswa: nama_mahasiswa,
    gambar : gambar
  });
});

router.get("/profilmahasiswa", (req, res) => {
  res.render("profilmahasiswa");
});

module.exports = router;
