module.exports.sumNumbers = function (a){
	var sum = 0;
	for (var counter = 0; counter < a.length ; counter ++){
		 sum += a[counter];
	} 
	return sum;
};

module.exports.splitAndLowerCaseString = function(a){
	var result = a.toLowerCase();
	return result.split(",");
}
;

//module.exports.addIndex = function(inputData) {
//var array = []; 
//for (var i = 0; i < inputData.length; i++) { 
//array.push(i + " is " + inputData[i]); 
//} 
//return array; 
//};

module.exports.addIndex = function(a){
	var array = new Array();
	for (var counter = 0; counter < a.length ; counter ++){
		 array[counter] = counter + " is "+ a[counter]; // array[0]= "0 is (value of 1st index)"
}
return array;
}
;

// var nums = [zero, one, two, three]
//module.exports.addIndex = function(a){
//	array = new Array(a);
//	for(var property in a){
//		array = property + " is "+ a[property];
//	}
//	return array.split(",");  // returned ["3 is three"]
//}
//;

