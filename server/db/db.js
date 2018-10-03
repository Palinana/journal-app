const Sequelize = require('sequelize');
let db
if (process.env.DATABASE_URL) {
    db = new Sequelize(process.env.DATABASE_URL)
} else {
    const dbname = 'journal';
    db = new Sequelize(`postgres://localhost:5432/${dbname}`, {logging: false});
}

module.exports = db;
