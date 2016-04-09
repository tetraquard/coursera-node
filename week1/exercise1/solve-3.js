var argv = require('yargs')
		.usage('Usage: node $0 --l=[num] --b=[num]')
		.demand(['l','b'])
		.argv;



var rec = require('./rectangle-2.js');

function solveRec(l,b){
	console.log("The dimensions of the rectangle is l = " + l + " and b = " + b);

	rec(l,b,function(error,rectangle){
		if(error){
			console.log(error);
		}else{
			console.log("the area is " + rectangle.area() +  " and the perimeter is " + rectangle.perimeter());
		}
	});
}

solveRec(argv.l,argv.b);