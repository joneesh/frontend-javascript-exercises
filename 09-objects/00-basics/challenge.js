module.exports.createCourse = function(courseTitle,courseDuration,courseStudents){
	var courseNew = new Object();
		 courseNew.title = courseTitle;
		 courseNew.duration = courseDuration;
		 courseNew.students = courseStudents;
		 return courseNew;
};

module.exports.addProperty = function(object,newProp,newValue){
 	object[newProp] = newValue;
 		return object;
};

//module.exports.formLetter = function(letter){
//var newLetter = "[ letter ]";
//return "Hi" + [newLetter.recipient] + ",\n\n" + [msg] + "Regards,\n" + recipient;
//};

module.exports.formLetter = function(x) { 
	var letter = x; 
	return 'Hello ' + letter.recipient + ',\n\n' + letter.msg + 
	'\n\nSincerely,\n' + letter.sender; };

//module.exports.canIGet = function(item, money){
//	var prices = {
//        Air : 999,
//        MacBook: 1299,
//        Pro: 2499,
//        Sticker : 1,
//};
//};

module.exports.canIGet = function(item, money) { 
	var products = { 'MacBook Air': 999, 'MacBook Pro': 1299, 
	'Mac Pro': 2499, 'Apple Sticker': 1 }; 
	return products[item] <= money; };