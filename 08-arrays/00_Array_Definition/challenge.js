module.exports.newArray = function(a,b,c,d){
	var numbers = [a,b,c,d];
	return numbers;
};


//module.exports.firstAndLast = function(a){
//var pointer = a.length -1;
//var newArray = [ a[0] ];
//var last = newArray[pointer];
//newArray[pointer] = last; 
//return newArray;

module.exports.firstAndLast = function(a){
var pointer = a.length -1;
var newArray = [a[0]];
newArray[1] = a[a.length -1];
return newArray;
};