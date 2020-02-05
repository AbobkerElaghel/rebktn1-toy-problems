/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/

function flatten(arr,result = []) {
    result = result || [];
    if(Array.isArray(arr)){
        for (let i = 0; i < arr.length ; i++) {
            result = flatten(arr[i],result);
        }
    }else{
        result.push(arr);
        return result
    }
    return result;
}
console.log(flatten([ [1, 1], [4], 3, [3], 4, [6, 7],[1,2,3,[100],5,6]]));