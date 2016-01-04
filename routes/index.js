var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('players').select().then(function(players){
      res.send(players)
  })
});

module.exports = router;
