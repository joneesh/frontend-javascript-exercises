module.exports.reversePlusOne = function(a){
var arrayReverse = a.reverse();
//return arrayReverse.unshift(1);
arrayReverse.unshift(1);
return arrayReverse;
};

module.exports.plusesEverywhere = function(a){
	var array = a.join('+');
	return array;
};

module.exports.arrayQuantityPlusOne = function(a){
	return a.length + 1;
};