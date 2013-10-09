var canvas = document.getElementById("canv");
var context = canvas.getContext('2d');

for (var x = 0; x < 750; x++) {
	for (var y = 0; y < 450; y++) {
		var x0 = scale( 1, -2.5, 750, 0, x);
		var y0 = scale( 1, -1.0, 450, 0, y);

		var itteration = calcItteration(x0, y0)

		if (itteration < 1) {
		    context.fillStyle = 'rgb(150 - (' + itteration * 10 + '), 0, 0)';
		} else if (itteration < 40) {
		    context.fillStyle = 'rgb(' + itteration * 9 + ', 0, 0)';
		} else {
		    context.fillStyle = 'rgb(' + itteration * 5 + ', ' + itteration * 4+', '+itteration * 4+')';
		}

		context.fillRect( x, y, 1, 1 );
	}
}
	
function calcItteration(x0, y0) {
	var iteration = 0;
  var max_iteration = 100;
	var x =0;
	var y = 0;

	while ( x*x + y*y < 2*2  &&  iteration < max_iteration )
	{
		var xtemp = x*x - y*y + x0;
		y = 2*x*y + y0;

		x = xtemp;

		iteration = iteration + 1;
	}

	return iteration;
}
  

//Scales a value from one range to another
function scale(toMax, toMin, fromMax, fromMin, value) {
	return ((toMax - toMin) * (value - fromMin) /	(fromMax - fromMin)) + toMin;
}
