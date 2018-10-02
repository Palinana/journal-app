const {expect} = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const User = db.model('user');

describe('User routes', () => {
  after(() => {
    return db.sync({force: true})
  })

  describe('GET routes', () => {
    const testUser = {
        "username": "test_person_user_spec",
    }

    before(() => {
      return User.create({
        username: testUser.username
      })
    })

    it('GET /api/users', () => {
      return request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].username).to.be.equal(testUser.username)
        })
    })

    it('GET /api/users/1', () => {
        return request(app)
          .get('/api/users/1')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('id', 1)
            expect(res.body).to.have.property('username',testUser.username)
          })
      })
  }) 
}) 