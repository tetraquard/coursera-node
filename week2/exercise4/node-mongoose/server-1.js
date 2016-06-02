var mongoose = require('mongoose');
var assert = require('assert');
var Dishes = require('./Models/dishes-1.js');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting the server: '));
db.once('open', function(){
  console.log('Connection established with the server');
});

var newDish = Dishes({
  name: 'Uthapizza',
  description:'Test'
});

newDish.save(function(err){
  if(err) throw err;
  console.log('Dish Created');

  Dishes.find({},function(err,dishes){
    if(err) throw err;
    console.log(dishes);

    db.collection('dishes').drop(function(){
      db.close();
    });
  });

});
