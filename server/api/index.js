const router = require('express').Router();

router.use('/', require('./entries'));
router.use('/users', require('./users'));

module.exports = router;