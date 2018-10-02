const router = require('express').Router();
const {User} = require('../db/models');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
      .then(user => {
        if (user === null) {
          const error = new Error('User not found!');
          error.status = 404;
          throw error;
        }
        res.status(200).send(user);
    })
      .catch(next)
})

router.post('/', function (req, res, next) {
    User.create(req.body)
    .then(user => {
        if (!req.body.username) {
          const error = new Error('Username cannot be empty!');
          error.status = 400;
          throw error;
        }
        res.redirect(`/${user.id}/entries`);
    })
    .catch(next);
});

module.exports = router