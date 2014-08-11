var firstAndLast = function(a){
var pointer = a.length -1;
var newArray = [ a[0] ];
var last = newArray[pointer];
newArray[pointer] = last; 
return newArray;
};
