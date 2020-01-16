/*
Even Occurrence
<<<<<<< HEAD
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.

evenOccurrence(  [1, 3, 3, 3, 2, 4, 4, 2, 5 ] ) // 2
evenOccurrence(  ["cat", "dog", "dig", "cat" ] ) // "cat"
evenOccurrence(  [[1,2],[1,2,3], [1,2], [1,2,3]]  ) // [1,2,3]
evenOccurrence(  [{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]  )  // {a:1, b:2}
*/

// time Complexity is O(n4) --- Polynomial 
// won't Function Correctly if the array contain an Object and that object has Functions --- due to JSON.stingify Not stingifying the functions
function evenOccurrence(array){

    if(!Array.isArray(array)){
        return null;
    }
    let evenItems = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           if (JSON.stringify(array[i]) == JSON.stringify(array[j])) {
            evenItems.push(array[i]);
           }
        }
        if(evenItems.length % 2 === 0)
        return evenItems[0];
        else{
            evenItems = [];
        }
    }
        return false;   
}

//----------------------------------------------------------------------------------------------------------------------
// function evenOccurrence(array){

//     if(!Array.isArray(array)){
//         return null;
//     }

//     let evenItems = [];
//     let isObject = false;

//     for (let index = 0; index < array.length; index++) {
//         if(typeof array[index] === "object"){
//         isObject = true;
//         break;
//         }
//     }

//     if(!isObject){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//            if (array[i] === array[j]) {
//             evenItems.push(array[i]);
//            }
//         }
//         if(evenItems.length % 2 === 0)
//         return evenItems[0];
//         else{
//             evenItems = [];
//         }
//     }
//         return false;
//     }
//     else{
//         for (let i = 0; i < array.length; i++) {
//             for (let j = 0; j < array.length; j++) {
//                if (JSON.stringify(array[i]) == JSON.stringify(array[j])) {
//                 evenItems.push(array[i]);
//                }
//             }
//             if(evenItems.length % 2 === 0)
//             return evenItems[0];
//             else{
//                 evenItems = [];
//             }
//         }
//             return false;
//     }

// }

console.log( evenOccurrence(1 ));
=======
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
