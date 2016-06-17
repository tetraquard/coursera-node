var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

var dboper = require('./operation')

// url on which we communicate with monogdb conFusion db
var url = 'mongodb://localhost:27017/conFusion';
MongoClient.connect(url,function(err,db){
	//Check for any error, if there, it makes our application fail and
	//print an appropriate error message.
	assert.equal(err,null);

	console.log("Connected correctly to the Server");

	var collection = db.collection("dishes");

	collection.insertOne({name:"Dish 1", description:"Test dish"},

		//inserting data

		function(err,result){
			assert.equal(err,null);
			console.log("After insert: ");
			console.log(result.ops);

			//printing the collection

			collection.find({}).toArray(function(err,docs){
				assert.equal(err,null);
				console.log("Found: ");
				console.log(docs);

				//dropping a collection

				db.dropCollection("dishes",function(err, result){
					assert.equal(err,null);
					db.close();
			});
		});
	});
});
