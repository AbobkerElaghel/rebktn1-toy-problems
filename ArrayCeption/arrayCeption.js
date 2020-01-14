// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

var n = 0;
const arrayCeption = (array) => {
    if (!Array.isArray(array))
        return;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (array[i].length) {
                n++;
            }
            arrayCeption(array[i])
        }
    }
}
arrayCeption([
    [10, 20],
    [
        [30, [40]]
    ]
]);
console.log(n);