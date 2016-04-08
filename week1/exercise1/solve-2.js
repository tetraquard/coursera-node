var rect = require('./rectangle-2.js');

function solveRect(l,b){

	console.log ("The dimensions of the rectangle is l = " + l + ", b = " + b);

	rect(l,b,function(err,rectangle){
		if (err){
			console.log(err);
		}
		else{
			console.log("The perimeter of the rectangle given is " + rectangle.perimeter() + " and area is " + rectangle.area());
		}
	});
};

solveRect(1,4);
solveRect(-1,84);

