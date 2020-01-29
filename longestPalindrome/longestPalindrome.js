/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/
const isPalindrome = string => string == string.split('').reverse().join('');
function longestPalindrome(string) {
    let result = "";
    let arr = [];
    for (let i = 0; i < string.length ; i++) {
        for (let j = i+1; j < string.length  ; j++) {
            if(string[i] === string[j]){
                for (let k = i; k <= j ; k++) {
                    result+=string[k];
                }
                if(isPalindrome(result)){
                    arr.push(result);
                    result = '';
                }
                result = '';
            }
        }
    }
    return arr.reduce((a, b) => { return a.length > b.length ? a : b; });
}
