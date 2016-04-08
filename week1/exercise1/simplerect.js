var rect = {
	perimeter: function (x,y) {
		return (2*(x+y));
	},
	area: function (x,y) {
		return (x*y);
	}
};

function solveRec(l,b) {

	console.log("Solving for rectangle with l = " + l + " and b = " + b);

	if (l < 0 || b < 0 ) {
		console.log("The rectangle should have dimensions greater than zero: l = " + l + " b = " + b);
	}
	else{
		console.log("The dimensions of the rectangle are : " + l + ", " + b + " where area is " + rect.area(l,b)
					 + " and primeter is " + rect.perimeter(l,b));
	}
}

solveRec(2,4);
solveRec(-2,4);

