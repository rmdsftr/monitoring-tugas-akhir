const express = require('express');
const router = express.Router();


router.get("/", (req, res) =>{
  console.log(req.session);
  res.render("index");
});

router.get("/loginmahasiswa", (req, res) => {
    const error = req.session.error;
    req.session.error = null;
    res.render("loginmahasiswa", {error : error});
});

router.get("/dashboardmahasiswa", (req, res) => {
    const nim = req.session.nim;
    const nama_mahasiswa = req.session.nama_mahasiswa;
    const nama_dosen = req.session.dosen;
    
    res.render("dashboardmahasiswa",{
      nim: nim,
      nama_mahasiswa: nama_mahasiswa,
      nama_dosen: nama_dosen
    });
});

router.get("/logindosen", (req, res) =>{
  const error = req.session.error;
  req.session.error = null;
  res.render("logindosen", {error: error});
});

router.get("/dashboarddosen", (req, res) => {
  const nip = req.session.nip;
  const nama_dosen = req.session.nama_dosen;
  res.render("dashboarddosen",{
    nip: nip,
    nama_dosen: nama_dosen
  });
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

module.exports = router;
