module.exports.getKeys = function(input){
var array = [];
for (var property in input){
array.push(property); 
}; 
return array; 
};


module.exports.getValues = function(input){
var array = [];
for (var property in input){
	array.push(input[property]); 
};
return array; 
};


module.exports.objectToArray = function(a){
	var array = [];
	for (var property in a){
		 array.push(property +" is "+ a[property]); 
}
return array;
}
;
