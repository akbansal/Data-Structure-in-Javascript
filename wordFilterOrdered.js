/*
You have an unsorted list of characters, duplicates are allowed, i.e.

  chars = ['g', 't', 's', 'a', 'b', 'i', 'e', 'g', 'g']

and a list of words

words = ["abs", "table", "bags", "bib", "big", "egg"]

write a function wordFilterOrdered now requires that the characters show up 
IN ORDER (though not consecutively) to create the word.
 i.e., "big" will work because b, i, and g show up as the
 4th, 5th, and 6th elements, but "abs" will not because the "s"
 appears before the "a" and "b" in chars

chars = ['g', 't', 's', 'a', 'b', 'i', 'e', 'g', 'g']
#         0    1    2    3    4    5    6    7    8

>>> wordFilterOrdered(words, chars)
['big', 'egg']

*/

const chars = ['g', 't', 's', 'a', 'b', 'i', 'e', 'g', 'g'];
const words = ["abs", "table", "bags", "bib", "big", "egg", "cdor"];

function wordInOrder(word, chars){
  
  function wordInOrderRec(wordArr, charsArr, wordIndex, charIndex){
    if (wordArr[wordIndex] === undefined && charIndex <= charsArr.length) {
      return true;
    }
    if (wordIndex < wordArr.length && charIndex === charsArr.length) {
      return false;
    }

    if (wordIndex === wordArr.length || charIndex === charsArr.length){
      return false;
    }
    
    
    if (wordArr[wordIndex] === charsArr[charIndex]){
      return wordInOrderRec(wordArr, charsArr, wordIndex+1, charIndex+1);
    }else{
      return wordInOrderRec(wordArr, charsArr, wordIndex, charIndex+1);
    }
  }

  return wordInOrderRec(word.split(''), chars, 0, 0, 1);
}

function wordFilterOrdered(words, chars){
  let returnArr = [];
  words.forEach( (word) => {
    if(wordInOrder(word, chars)){
      returnArr.push(word);
    }
  });
  return returnArr;
}
console.log(wordFilterOrdered(words, chars)); //['big', 'egg']