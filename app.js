const express = require("express");
const path = require("path");
const mysql = require("mysql");
const { error } = require("console");
const dotenv = require("dotenv");

dotenv.config({path : './.env'});

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'hbs');

const db = mysql.createConnection({
  host : process.env.DATABASE_HOST,
  user : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE
});

db.connect( (error) => {
  if(error){
    console.log(error);
  } else{
    console.log("MySQL Connected");
  }
});


app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


app.listen(3000, () =>{
  console.log("server is running on http://localhost:3000/");
});