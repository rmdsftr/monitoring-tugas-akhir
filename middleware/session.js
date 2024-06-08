const cookieParser = require('cookie-parser')
const session = require ('express-session');
const MySqlStore = require('express-mysql-session')(session);

const sessionStore = new MySqlStore({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'monitoring_ta'
})

const sessionMiddleware = [
    cookieParser(),
    session({
        key: 'simota',
        secret : "kamehameha",
        store: sessionStore,
        resave : false,
        saveUninitialized : true,
        cookie : {
            maxAge : 60000*60,
            secure: false,
            httpOnly: true
  }
    })
]

module.exports = sessionMiddleware;
