module.exports.stream = function(conditionalFn,actionFn){
	while (conditionalFn() == true){
		actionFn();
	}
	return false;
};

module.exports.sumNumbers = function(a){
	var counter = 0; 
	var sum = 0;
	while (counter < a.length){
	sum = sum + a[counter];
	counter++;
	}
	return sum;
};

