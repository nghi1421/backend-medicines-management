const express = require('express');
const routes = require('./routes/api')
const passport = require('passport')
require('dotenv').config();
const User = require('./models/index').users
const bodyParser = require('body-parser')
const sequelize = require('./config/connectDB');
const session = require('./config/session');
const handlePassport = require('./controllers/passportController');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('cookie-parser')());

routes(app);
session(app);
handlePassport();

function checkConnectDB() {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnectDB();

app.listen(port, () => {
    console.log("Backend Nodejs is runing on the port : " + port)
})