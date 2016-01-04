var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('players').select().then(function(players){
      res.render('players', {player: players});
  });

});

module.exports = router;
