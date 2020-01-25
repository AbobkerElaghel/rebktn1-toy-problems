/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).

telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

let telephonePad = {
    1 : ['1'],
    2 : ['A','B','C'],
    3 : ['D', 'E', 'F'],
    4 : ['G', 'H', 'I'],
    5 : ['J', 'K', 'L'],
    6 : ['M', 'N', 'O'],
    7 : ['P', 'Q', 'E','S'],
    8 : ['T', 'U', 'V'],
    9 : ['W', 'X', 'Y','Z']
};
//Only Works on 4 digit Numbers, :)
function telephoneWords(digitString) {
    if(digitString.length !== 4){
        return ":) only works on 4 digit String For now :> ! :>";
    }
    let result = [];
    for (let i = 0; i < telephonePad[digitString[0]].length; i++) {
        for (let j = 0; j < telephonePad[digitString[1]].length; j++) {
            for (let k = 0; k < telephonePad[digitString[2]].length; k++) {
                for (let l = 0; l < telephonePad[digitString[3]].length; l++) {
                    result.push(`${telephonePad[digitString[0]][i]}${telephonePad[digitString[1]][j]}${telephonePad[digitString[2]][k]}${telephonePad[digitString[3]][l]}`)
                }
            }
        }
    }
return result;
}

console.log(telephoneWords("2239"));