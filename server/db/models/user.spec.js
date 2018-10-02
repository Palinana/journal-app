const {expect} = require('chai');
const db = require('../index');
const User = db.model('user');

describe('User model', function () {
  after(function () {
    return db.sync({ force: true })
  })

    const user  = {
        "username": "test_name_user_model_spec"
    }

  before(function () {
    return User.create({
      username: user.username
    })
  })

  describe('values', function () {
    describe('username', function () {
      it('should be a string', function () {
        expect(user.username).to.be.a('string')
      })

      it('should be required', function () {
        expect(!!user.username).to.be.true
      })

    }) 
  })
})