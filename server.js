const express = require('express');
const app = express();
const path = require('path');

// require the List "database"
const stdDb = require('./data/students-db');


app.get('/', function (req, res) {
    res.send('<h1>Welcome to school!</h1>');
  });

  app.get('/home', function (req, res) {
    res.render('home');
  });

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));


  app.get('/students', function(req, res) {
    res.render('students/index', {
      students: stdDb.getAll ()
    });
  });


app.listen(3000, function() {
    console.log('Listening on port 3000');
  });
