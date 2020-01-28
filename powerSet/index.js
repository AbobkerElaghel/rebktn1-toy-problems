/*
Power Set

Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

  1. All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
  3. Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’.

Example: 

powerSet("a") // [ "", "a" ]
powerSet("ab") // [ "", "a", "ab", "b" ]
a b m o
0 1 2 3
0 01 012 0123 013 02 023 03 1 12 123 13 2 23 3
powerSet("obama") // [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]
e h o r s
0 1 2 3 4

0 1 2 3 4 01 02 03 04 12 13 23 24 34 012 013 014 0123 0124 0134 023 0234 024  034  123 1234 124  134   234  01234
powerSet("horse") // [ "", "e", "eh", "eho", "ehor", "ehors", "ehos" , "ehr", "ehrs", "ehs",   "eo", "eor", "eors",
"eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
*/

function _removeDuplicates(array) {
    return array.filter( (a, b) => array.indexOf(a) === b)
}

function powerSet(string) {
    let visited = [];
    let arr = string.split("").sort();
    arr = _removeDuplicates(arr);
    console.log(arr)
}

powerSet("horse");