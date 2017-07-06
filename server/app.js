const express = require('express');
const bodyParser = require('body-parser');

//require mongoose and connect
var mongoose = require('mongoose');
mongoose.Promise('bluebird');
var url = 'mongodb://localhost:27017/derikurniawan1';
mongoose.connect(url, (err, res)=>{
  if(err){
    console.log('something wrong on database');
  }
  console.log('you are connoct to database on ', url);
});

var foods = require('./routes/food');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/food', foods);

app.listen(3000, ()=>{
  console.log('you are on port 3000');
})

module.exports = app;
