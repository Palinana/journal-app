const router = require('express').Router();

router.use('/', require('./entries'));
router.use('/users', require('./users'));
router.use('/login', require('./login'));
router.use('/register', require('./register'));

module.exports = router;