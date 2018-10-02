const router = require('express').Router();
const { Entry, User } = require('../db/models');

router.get('/users/:userId/entries', function(req, res, next) {
      Entry.findAll({
        where: {
          userId: req.params.userId
        },
        include: [{
          all: true
        }]
      })
        .then(communityMembers => res.json(communityMembers))
        .catch(next);
});

router.get('/users/:userId/entries/:entryId', function(req, res, next) { 
  Entry.findById(req.params.entryId, 
      {where:{
        userId: req.params.userId
      },
      include: [{
        all: true
      }]
      })
      .then(result => {
          if (result === null) {
            const error = new Error('Entry not found!');
            error.status = 404;
            throw error;
          }
          res.status(200).send(result);
      })
      .catch(next);
});

router.post('/users/:userId/entries', function (req, res, next) {
  Entry.create({ 
     name: req.body.name,
     description: req.body.description,
     userId: req.params.userId
  })
    .then(entry => res.json(entry))  
    .catch(next);
});

module.exports = router;