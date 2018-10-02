const Sequelize = require('sequelize');
const db = require('../db');
const user = require('./user');

const Entry = db.define('entry', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    allowNull: false
  }
});

module.exports = Entry;