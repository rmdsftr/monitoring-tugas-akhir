const express = require("express");
const path = require("path");
const { error } = require("console");
const dotenv = require("dotenv");
const sessionMiddleware = require('./middleware/session')
const exphbs = require('express-handlebars');


dotenv.config({path : './.env'});

const app = express();

app.use(sessionMiddleware);

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({extended:false}));
app.use(express.json());


const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: false, 
  helpers: {
    eq: function (a, b) {
      return a === b;
    }
  }
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/profil', require('./routes/profil'));
app.use('/upload', require('./routes/upload'));
app.use('/list', require('./routes/list'));
app.use('/penjadwalan', require('./routes/penjadwalan'));
app.use('/progress', require('./routes/progress'));
app.use('/upload', require('./routes/upload'));
app.use('/notifikasi', require('./routes/notifikasi'));

app.listen(3000, () =>{
  console.log("server is running on http://localhost:3000/");
});
