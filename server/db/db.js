const Sequelize = require('sequelize');
const dbname = 'journal';
const db = new Sequelize(`postgres://localhost:5432/${dbname}`, {logging: false});

module.exports = db;
