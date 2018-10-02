const {expect} = require('chai');
const db = require('../index');
const Entry = db.model('entry');
const User = db.model('user');

describe('Entry model', function () {
  after(function () {
    return db.sync({ force: true })
  })

  const entry  = {
    "userId": 1,
    "name": "test_name_entry_model_spec",
    "description": "test_description_entry_model"
  }

  before(function () {
    User.create({
        username: 'test'
    })
    return Entry.create({
        userId: entry.userId,
        name: entry.name,
        description: entry.description
    })
  })

  describe('values', function () {
    describe('name', function () {
      it('should be a string', function () {
        expect(entry.name).to.be.a('string')
      })

    }) 
    
    describe('description', function () {
        it('should be a string', function () {
          expect(entry.description).to.be.a('string')
        })
    }) 
  })
})