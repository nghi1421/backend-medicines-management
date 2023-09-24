const Sequelize = require("sequelize");
const session = require("express-session");
const passport = require('passport');

const configSession = (app) => {
    const SequelizeStore = require("connect-session-sequelize")(session.Store);
    const sequelize = new Sequelize(
        process.env.DB_DATABASE_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: process.env.DB_DIALECT,
            logging: false,
            query: {
                "raw": true
            },
            timezone: "+07:00"
        }
    ); 
    const myStore = new SequelizeStore({
        db: sequelize,
    });

    app.use(session({
            secret: process.env.SESSION_SECRET_KEY,
            store: myStore,
            resave: false,
            proxy: true,
            saveUninitialized: false,
        })
    );
    myStore.sync();

    app.use(passport.authenticate('session'))
    
    passport.serializeUser(function (user, cb) {
        console.log('Serialize', user);
        process.nextTick(function () {
            return cb(null, user);
        })
    });
    passport.deserializeUser(function (user, cb) {
        console.log('Deserialize', user);
        process.nextTick(function () {
            return cb(null, user);
        })
    });
}

module.exports = configSession