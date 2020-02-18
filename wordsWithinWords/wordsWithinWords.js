/*
Words within Words
Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.
nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'
*/

const nestedWordCount = words => {
    let result = {};
    let maxCountWord;
    let word;
    for (let i = 0; i < words.length; i++) {
        if (words[i][words[i].length - 1].toLowerCase() === 's'){
            words[i] = words[i].slice(0,words[i].length - 1);
        }
        if(result[words[i]]){
            result[words[i]]++;
        }else{
            result[words[i]] = 1;
        }
    }

    maxCountWord = 0;
    for ( let i in result ){
        if( result[i] > maxCountWord ){
            maxCountWord  = result[i];
            word = i;
        }
    }
    return word;
};

console.log(nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]));
