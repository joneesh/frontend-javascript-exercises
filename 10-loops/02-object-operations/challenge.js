module.exports.copy = function(input){
var newObject = {};
for (var property in input){
	newObject[property] = input[property]; 
};
return newObject; 
};


module.exports.extend = function(dest,src){
for (var property in src){
	dest[property] = src[property];
}
return dest;

};

//module.exports.hasElems = function(input){
//for (var property in input) {
//	if (property !== undefined){
//		return true;
//	}
//	return false;
//}
//};

module.exports.hasElems = function(obj, array) {
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] == undefined) {
      return false;
    }
  }
  return true;
};