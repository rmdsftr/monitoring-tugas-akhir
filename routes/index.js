const express = require('express');
const router = express.Router();


router.get("/", (req, res) =>{
  console.log(req.session);

  if(req.session && req.session.nip){
    res.render("dashboarddosen",{
      nip: req.session.nip,
      nama_dosen: req.session.nama_dosen,
      jumlah: req.session.jumlah
    })
  } else if(req.session && req.session.nim){
    res.render("dashboardmahasiswa",{
      nim: req.session.nim,
      nama_mahasiswa: req.session.nama_mahasiswa,
      nama_dosen: req.session.dosen
    })
  } else {
    res.render("index");
  }

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


module.exports = router;
