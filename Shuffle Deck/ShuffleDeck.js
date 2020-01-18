// Shuffle Deck
// Given an array containing a deck of cards, implement a function that shuffles the deck. The helper function orderedDeck() is not necessary for your solution; it is provided to create an ordered deck if you debug your code in the console or using snippets.
// Example:
//      var deck = orderedDeck();     // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
//      shuffleDeck(deck);            // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]


// Note:

// A shuffled deck should be completely random. That means that a given card should be as likely as any other to appear in a given deck index, 
// completely independent of the order of the input deck. Think carefully about how to be sure your algorithm generates a properly shuffled deck– it is easy 
// to accidentally create a biased algorithm.

// A further note on randomness:
// Technically, a computer-shuffled deck will usually be “pseudorandom”, not “truly” random. However, the difference between the two is too small to be detectable by any known test.
// See: http://en.wikipedia.org/wiki/Pseudorandom_number_generator
// A human shuffler is much more biased; it takes around seven normal “riffle” shuffles before a real deck is actually randomized. 
// See: https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf

// Extra credit:
// - Even a naive algorithm can easily run in linear time. However, does your algorithm remain unbiased as N (the deck size) increases? How do you know?
// - Once you have created a properly random, linear algorithm, what is its space complexity? There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).



// You've got Helpers!

var orderedDeck = function() {
    var suits = ['♥', '♣', '♠', '♦'];
    var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    var deck = [];
    suits.forEach(function(suit) {
        values.forEach(function(value) {
            deck.push(value + suit);
        });
    });
    return deck;
};

// so this algorthem is 100% dependent on the Algorthem used in Math.random function 
const shuffleDeck = deck => {
    let resultDeck = new Array(52);
    let PRNG_CURRENT_NUMBER = 52;
    let currentCard;
    let positionOfNewCard;
    let positionsArray = [];

    for (let i = 0; i < deck.length; i++) {
        currentCard = deck[i]; //lets say A♥ 
        positionOfNewCard = (Math.floor((Math.random() * PRNG_CURRENT_NUMBER))); // generate a random position //
        if (!positionsArray.includes(positionOfNewCard)) {
            resultDeck[positionOfNewCard] = currentCard;
            positionsArray.push(positionOfNewCard);
        } else {
            while (positionsArray.includes(positionOfNewCard)) { //UNKNOWN TIME-COMPLIXITY, BECOUSE OF THE PRNG Psudo-randemness 
                positionOfNewCard = (Math.floor((Math.random() * PRNG_CURRENT_NUMBER)));
            }
            resultDeck[positionOfNewCard] = currentCard;
            positionsArray.push(positionOfNewCard);
        }
    }
    return resultDeck;
}


// Math.floor((Math.random()*52)) this should work
//                           v
// we need to create a empty resuilt array  e.g.. resultDeck
// first we need to itraite over the first array 
// take the first element of the array lets say A of hearts 
// generate a random position for it in the resualt array and puts it there <--==--
// the trick here is that THAT POSITION MOST NOT be generated agian.
// so we need to save that position in a array or string or whatever, lets call it a positionsArray
// and every time we reiterate over the deck array agian, we need to check for a position for the second elemnt here its , 2 of hearts
// and we need to make 100000% sure that the PRNG (Pseudorandom number generator) DOES NOT generate a postition that is included in the posititionsArray
// so in order to do that,we need to itrate over the generation of the random number it self, each  time we do that, we check of the generated number is not included on the positions array 
// But the time complixty for this algorathem is hugh // that the downside
// a TRICK we can do is to check the resualt array,if lets say it generated a position 52,51,50. here we can decrise the number in the PRNG,