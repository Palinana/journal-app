const router = require('express').Router();
const User = require('../db/models/user');

router.post('/', (req, res, next) => {
    User.create(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(400).json({
            error: err
          });
      })
})

module.exports = router;