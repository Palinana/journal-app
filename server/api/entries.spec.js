const {expect} = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Entry = db.model('entry');
const User = db.model('user');

const testEntry = {
    "userId": 1,
    "name": "test_name_entries",
    "description": "test_description"
}

describe('Entry routes', () => {
    after(() => {
      return db.sync({force: true})
    })

    before(() => {
      User.create({
          username: 'test_entries_username'
      })

      return Entry.create({
          userId: testEntry.userId,
          name: testEntry.name,
          description: testEntry.description
      })
    })
    
  describe('/api/:userId/entries', () => {
    it('GET /api/:userId/entries', () => {
      return request(app)
        .get(`/api/${testEntry.userId}/entries`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal(testEntry.name)
          expect(res.body[0].description).to.be.equal(testEntry.description)
        })
    })

    it('GET /api/:userId/entries/:entryId', () => {
        const userId = 1;
        const entryId = 1;
        return request(app)
          .get(`/api/${userId}/entries/${entryId}`)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('id', 1)
            expect(res.body).to.have.property('name',testEntry.name)
            expect(res.body).to.have.property('description',testEntry.description)
          })
      })
  }) 
}) 