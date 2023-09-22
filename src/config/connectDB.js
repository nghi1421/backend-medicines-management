require('dotenv').config();
const Sequelize = require('sequelize');

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

module.exports = sequelize;