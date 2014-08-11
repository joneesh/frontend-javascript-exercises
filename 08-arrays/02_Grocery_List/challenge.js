

module.exports.addItem = function(add, array){
	if(array.indexOf(add) != -1) {
		array.splice(array.lenght -1, 1, add); 
	}else {
		array.push(add); 
	};
return array;
};


module.exports.reverseSortedList = function(a){
	var sort = a.sort();
	return sort.reverse();
};