var express = require('express');
//index test
var index = express.Router();

module.exports = function(app){
  index.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.use(index);
};
