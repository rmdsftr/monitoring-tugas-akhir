const express = require("express");
const path = require("path");
const { error } = require("console");
const dotenv = require("dotenv");
const sessionMiddleware = require('./middleware/session')

dotenv.config({path : './.env'});

const app = express();

app.use(sessionMiddleware);

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'hbs');

app.get('/buat-janji', (req, res) =>{
  res.render('janji-dosen');
})

app.get('/pilih-mahasiswa', (req, res) =>{
  res.render('pilih-mahasiswa');
})

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/profil', require('./routes/profil'));
app.use('/upload', require('./routes/upload'));
app.use('/list', require('./routes/list'));

app.listen(3000, () =>{
  console.log("server is running on http://localhost:3000/");
});
