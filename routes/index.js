'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/', function(req, res, next){
  models.Post.findAll().then(function(records){
    res.render('index', {
      records: records
    });
  });
});

router.get('/logout', function(req,res,next){
  req.logout();
  req.flash('info', 'You have been logged out.');
  res.redirect('/');
});

router.get('/contact', function(req, res, next){
  res.render('contact', {
    name: req.query.name,
    lastname: req.query.lastname,
  });
});

router.post('/contact2', function(req, res, next){
  res.render('contact', {
    name: req.body.name,
    lastname: req.body.lastname,
  });
});

router.get('/about', function(req, res, next){
  res.render('about', {
    name: req.query.name,
    lastname: req.query.lastname,
  });
});

module.exports = router;
