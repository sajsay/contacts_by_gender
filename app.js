var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// YOUR CODE HERE
app.get('/', function(req, res) {
  res.render('template', {
    allStudents: data
  })
});

app.get('/male', function(req, res){
  var male = data.filter(function(person){
    if(person.gender === 'Male'){
      return true;
    } else {
      return false;
    }
  })
  res.render('template',{
    allStudents: male
  })
})

app.get('/female', function(req, res){
  var female = data.filter(function(person){
    if(person.gender === 'Female'){
      return true;
    } else {
      return false;
    }
  })
  res.render('template',{
    allStudents: female
  })
})

app.listen(3000);
