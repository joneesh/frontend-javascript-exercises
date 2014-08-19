module.exports.formLetter = function(firstName, senderName, message) {
return console.log( "Hello " + firstName+ ",\n\n" + message + "\n\nSincerely, \n" + senderName );
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
var word1 = bigString.substring(startA, endA) ; 
var word2 = bigString.substring(startB, endB) ; 
var result = word1 + word2;
return result;
};

module.exports.findFirstMatch = function(text, searchString) {
return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
 var word1 = text.indexOf(searchString);
 var word2 = text.lastIndexOf(searchString);
return text.substring(word1, word2);
};
