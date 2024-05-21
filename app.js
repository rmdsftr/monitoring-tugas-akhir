const express = require("express");
const path = require("path");
const mysql = require("mysql");
const { error } = require("console");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const session = require ('express-session');


dotenv.config({path : './.env'});

const app = express();

app.use(cookieParser());
app.use(session({
  secret : "kamehameha",
  resave : false,
  saveUninitialized : true,
  cookie : {
    maxAge : 60000*60
  }
}));

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'hbs');

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/profil', require('./routes/profil'));
app.use('/upload', require('./routes/upload'));


app.listen(3000, () =>{
  console.log("server is running on http://localhost:3000/");
});