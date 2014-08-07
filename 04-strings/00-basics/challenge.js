module.exports.formLetter = function(firstName, senderName, message) {
console.log("Hello " + firstName + ",\n\n");
console.log(message+ ".\n\n");
console.log("Regards,\n" + senderName);
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
var word1 = bigString.substring(startA, endA) ; 
var word2 = bigString.substring(startB, endB) ; 
var result = word1 + word2;
result;
};

module.exports.findFirstMatch = function(text, searchString) {
text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
var word1 = text.indexOf(searchString)
var word2 = text.lastIndexOf(searchString)
text.substring(word1, word2);
};
