<<<<<<< HEAD
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
=======
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;
>>>>>>> d1ae341084aa4b73b2345e577e44349876c5525a
