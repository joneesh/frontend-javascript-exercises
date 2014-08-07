module.exports.equalStrings = function(stringOne, stringTwo) {
stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
one != two;
};

module.exports.inBetween = function(lower, middle, upper) {
lower < middle && middle < upper;
};

module.exports.outsideRanges = function(number) {
  number <10 && number >20 && number <= 42 && number >75 && number <=1 && number >= 6;
};

module.exports.nameAndPrice = function(name, price) {
name == 'NYTimes' || name == 'LATimes' && price >= 1;
};