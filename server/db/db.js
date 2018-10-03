const Sequelize = require('sequelize');
let db
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    db = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging:  true //false
    })
} else {
    const dbname = 'journal';
    db = new Sequelize(`postgres://localhost:5432/${dbname}`, {logging: false});
}

module.exports = db;
