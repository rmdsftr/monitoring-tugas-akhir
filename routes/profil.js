const express = require('express')
const router = express.Router()
const profilControllers = require('../controllers/profil');

router.get('/profilMahasiswa', (req, res) =>{
    const nama_dosen = req.session.dosen;
    const nim = req.session.nim;
    const nama_mahasiswa = req.session.nama_mahasiswa;
    const judul = req.session.judul;
    const fakultas = req.session.fakultas;
    const departemen = req.session.departemen;
    const semester = req.session.semester;
    const email = req.session.email;
    const telepon = req.session.telepon;
    const status_bimbingan = req.session.status;

    res.render("profilmahasiswa",{
        nama_dosen : nama_dosen,
        nim: nim,
        nama_mahasiswa: nama_mahasiswa,
        status_bimbingan : status_bimbingan,
        judul : judul,
        fakultas : fakultas,
        departemen : departemen,
        semester : semester,
        email : email,
        telepon : telepon
    });
});

router.get('/editProfilMahasiswa', (req, res) =>{
    const nama_dosen = req.session.dosen;
    const nim = req.session.nim;
    const nama_mahasiswa = req.session.nama_mahasiswa;
    const judul = req.session.judul;
    const fakultas = req.session.fakultas;
    const departemen = req.session.departemen;
    const semester = req.session.semester;
    const email = req.session.email;
    const telepon = req.session.telepon;
    const status = req.session.status;

    res.render("editprofilmahasiswa",{
        nama_dosen: nama_dosen,
        nim: nim,
        nama_mahasiswa: nama_mahasiswa,
        judul : judul,
        fakultas : fakultas,
        departemen : departemen,
        semester : semester,
        email : email,
        telepon : telepon,
        status_bimbingan : status
    });
});

router.get('/ubahpassword', (req, res)=>{
    res.render("ubahpassword");
});

router.get('/edit', (req, res)=>{
    const image = req.session.image;
    res.render("editprofilmahasiswa",{
        image: image
    })
})

router.post('/ubahpassword', profilControllers.ubahpassword )
router.post('/edit', profilControllers.editProfilMahasiswa);

module.exports = router;