/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
<<<<<<< HEAD
                
=======
>>>>>>> e0a8a91ab345806b6359660d6fbed12596065f4a
*/

// HELPERS

var numbersToWords = {
<<<<<<< HEAD
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

var numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion'
};


function numberToEnglish(number) {
    if (num <= 99) {
        if (num <= 20) {
            return numbersToWords["num"];
        }
        let quotient = num % 10;
        if (quotient === 0) {
            return numbersToWords["num"]
        } else {
            return `${numbersToWords[`${num-quotient}`]}-${numbersToWords[quotient]}`
    }
}else{//!!!!!//the recursive case goes here//!!!!!//
    let remainder = math.floor(num / somethingh);
    return numberToEnglish();
}

}


function lessFourPlaces(number) {
    if (num < 9999) {
        let remainder = Math.floor(num / 1000);
        return `${numbersToWords[remainder]}-${numbersToPlace[1000]}-${lessThreePlaces(number%1000)}`
    }
}


function lessThreePlaces(number) {
    if (num < 999) {
        let remainder = Math.floor(num / 100);
        return `${numbersToWords[remainder]}-${numbersToPlace[100]}-${lessTwoPlaces(number%100)}`
    }
}

function lessTwoPlaces(num) {
    if (num <= 99) {
        if (num <= 20) {
            return numbersToWords["num"];
        }
        let quotient = num % 10;
        if (quotient === 0) {
            return numbersToWords["num"]
        } else {
            return `${numbersToWords[`${num-quotient}`]}-${numbersToWords[quotient]}`
        }
    }
}



//the pattern is Clear put i cant seem to grasp it 9:30
//it is defientlly have a recursive nature 9:47
=======
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion'
};

function numberToEnglish(number) {
  // your code here...
}
>>>>>>> e0a8a91ab345806b6359660d6fbed12596065f4a
