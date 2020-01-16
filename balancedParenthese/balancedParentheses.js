/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

<<<<<<< HEAD
isBalanced( "(x + y) - (4)" )	// true
isBalanced( "(((10 ) ()) ((?)(:)))" )	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
isBalanced(" ( () ) ) ( (())")

*/


var isBalanced = function(str) {
	let arr = [];
	let sum1 = 0; 
	let sum2 = 0; 

	for (var i = 0; i < str.length; i++) {
		if(str[i] === '('){
			arr.push('(')
			sum1++;
		}
		else if (str[i] === ')'){
			 if(arr.pop() === undefined)
			 return false;

			 sum2++;
		}
	}
	if(sum1 === sum2)
		return true;
	return false;
}; 
=======
isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {};
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
