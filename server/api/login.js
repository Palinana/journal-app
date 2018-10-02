const router = require('express').Router();
const User = require('../db/models/user');

router.post('/', (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
      if (!user) {
        res.status(401).send('Wrong username.')
      }
      else {
        res.status(200).send(user);
      }
    })
    .catch(next)
})

module.exports = router;