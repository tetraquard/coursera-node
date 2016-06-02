var mongoose = require('mongoose');
var assert = require('assert');
var Dishes = require('./Models/dishes-1.js');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'Error connecting the server: '));
db.once('open',function(){
  console.log('Connection established with the server');

  Dishes.create({
    name: 'Jalapenno',
    description:'Test 2'
  },function(err,dish){
    if(err) throw err;

    console.log('Dish Created!');
    console.log(dish)
    var dish_id = dish._id;

    setTimeout(function(){
      Dishes.findByIdAndUpdate(dish_id,{
          $set: {
            description: "Test 2 Updated..."
          }
        },{
            new: true
          })
          .exec(function (err,dish) {
            if(err) throw err;
            console.log("Updated Dish...");
            console.log(dish);

            db.collection('dishes').drop(function(){
              db.close();
            });

          })
    },3000);
  });
});
