/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
<<<<<<< HEAD
longestRun("cabcccccccbvcbfd") // [ 2, 8 ]
*/

function longestRun(string) {
    let count = 0;
    let char = '';
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        char = string[i];
        for (let j = 0; j < string.length - 1; j++) {
            if (string[j] === string[j + 1] || string[j] === char) {
                count++;
            } else {
                arr.push(count);
                count = 0;
            }
        }
    }
    return (Math.max(...arr));
}