/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
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
};

function sumOfPrimes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if(primeTester(i)){
            sum+=i;
        }
    }
    return sum;
}

console.log(sumOfPrimes(13));


