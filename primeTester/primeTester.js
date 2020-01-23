/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/


primeTester = n => {
    if (n === 1) {
        return false;
    }
    //Leaner Time Complexity//

    for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
        if ((n / i) % 1 === 0) {
            return false;
        }
    }
    return true;
}


for (let index = 1; index <= 1000; index++) {
    console.log(primeTester(index), index)
}