var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('players').select().then(function(players){
      var authenticated = req.isAuthenticated();
      var user;
      if(req.user){
        user = req.user.username;
      }
      console.log(user);
      res.render('players', {player: players, authenticated: authenticated, user: user});
  });
});

router.post('/', function(req, res, next){
  knex('players').insert({first_name: req.body.first_name,
  last_name: req.body.last_name, age: req.body.age, position: req.body.position,
  experience: req.body.experience})
  .then(function(){
    res.redirect('/players');
  })
  .catch(function(error){
    console.error(error);
  });
});

router.get('/:id', function(req, res){
  knex('players').select().where('id', req.params.id).first().then(function(player){
    console.log(player);
    res.render('player', {player: player});
  }).catch(function(error){
    res.render('error', {error: error});
  });
});

module.exports = router;
