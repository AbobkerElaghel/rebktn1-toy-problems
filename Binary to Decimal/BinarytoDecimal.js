// Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). 
// You may use the parseInt function that takes in just one argument.

// Examples
// Input	Output
// n: "0"	 0
// n: "1"	 1
// n:"10"	 2
// n:"11"	 3
// n:"100"	 4
// n:"101"	 5
// n:"110"	 6
// n:"111"	 7
// n:"1000"	 8 


/**
 *
 * @param {string} n the binary string input
 * @return {Number|TypeError} the result in decimal
 */
function binaryToDecimal (n) {
    let base = 0;
    let result = 0;
    if(typeof n !== 'string'){
        return new TypeError("input must be a binary string");
    }
    if(!(/^[0-1]+$/.test(n))){
        return new TypeError("input is invalid, must be binary string");
    }

    for (let i = n.length - 1; i >= 0 ; i--) {
        if(n[i] == 1){
            result+=Math.pow(2,base);
        }
        base++;
    }
    return result;
}

console.log(binaryToDecimal('1111110'));