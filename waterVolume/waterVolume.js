/*
You are given an array of numbers that each represent the height of an adjoining building.
During torrential rain, water collects in the spaces between buildings.
What is the maximum amount of water collected by the buildings represented by the array?

Explanation: An input of [3,0,3] can be visualized as such:

 __    __
|  |//|  |
|  |//|  |
|  |//|  |
‾‾‾‾‾‾‾‾‾‾
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

Challenge: do this in O(n) with < 2 pass-throughs

volume([ 3, 0, 3 ]) // 3
volume([ 1, 2, 3, 4, 0, 5, 3, 1 ]) // 4
volume([1,2,3,2,1]) // 0

*/

/**
 * @function volume
 * @param {Array} heights, the input array which should contain all the heights
 * @return {number} the maximum amount of water collected by the buildings
 * @note this function well not work correctly of thier are two two long buildings between then two small ones, e.g.. [1,0,0,1] should logically return 2, but the function returns 0 in this case
 * so it needs more work to fix it, in that case the function well be O(N^2);
 * @note TimeComplexity is O(N - 2)
 */
const volume = (heights) => {
    let left, right, result = 0, temp;
    for (let middle = 1; middle <= (heights.length - 2); middle++) {
        left = middle - 1;
        right = middle + 1;
        if(heights[middle] < heights[right] && heights[middle] < heights[left]){
            temp = ( heights[right] <= heights[left] ? heights[right] - heights[middle] : heights[left] - heights[middle]);
            result = result > temp ? result : temp;
        }
    }
    return result;
};

console.log(volume([ 3, 0, 3 ]));