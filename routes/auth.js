var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy(function(username, password, done){
  console.log(username);
  knex('users').select().where('username', username).first()
  .then(function(user){
    console.log(user);
    if(user && bcrypt.compareSync(password, user.hash)){
      return done(null, user);
    }else{
      return done(null, false, {message: 'invalid username or password'});
    }
  })
  .catch(function(error){
    console.log(error);
    return done(error);
  });
}));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  knex('users').where('id', id).first()
  .then(function(user){
    if(user){
      done(null, user);
    }else{
      done('user not found');
    }
  }).catch(function(err){
      done(error);
  });
});

router.post('/login',
 passport.authenticate('local', {failureRedirect: '/'}),
 function(req, res){
   console.log('here');
   res.redirect('/players');
});

router.post('/signup', function(req, res){
  knex('users').insert({username: req.body.name, hash: bcrypt.hashSync(req.body.password, 10)})
  .then(function(){
    res.redirect('/');
  }).catch(function(error){
    console.log(error);
  });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/')
})


module.exports = {router: router, passport: passport, isAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/');
    }
  }
};
