/*
You have an unsorted list of characters, duplicates are allowed, i.e.

  chars = ['g', 't', 's', 'a', 'b', 'i', 'e', 'g', 'g']

and a list of words

words = ["abs", "table", "bags", "bib", "big", "egg"]

write a function wordFilter which filters the list of words into only
ones that can be made from the list of characters.each character in chars
can only used once

  >>> wordFilter(words, chars)
  ["abs", "bags", "big", "egg"]
*/

console.clear();

function createCharCountMap (charArr = []) {
  let charCountmap = {};

  for(let index = 0, length = charArr.length; index < length; index++){
    const char = charArr[index];
    charCountmap[char] = charCountmap[char] ? charCountmap[char] + 1 : 1;
  }
  return charCountmap;
}



function wordFilter(words, chars){
  let returnArr = [];
  const charsCountMap = createCharCountMap(chars);
  // console.log("charsCountMap => ", charsCountMap );

  words.forEach( (word) => {
    const wordCountMap = createCharCountMap(word);
    let wordFoundFlag = true;
    
    Object.keys(wordCountMap).forEach((key) =>{
      if (wordFoundFlag && (!charsCountMap[key] || (wordCountMap[key] > charsCountMap[key] ))){
        // console.log("not suotable word - ", word);
        wordFoundFlag = false;
      }
    });
    if (wordFoundFlag) {
      // console.log("Adding - ", word);
      returnArr.push(word);  
    } 
  });
  return returnArr;
}

const chars = ['g', 't', 's', 'a', 'b', 'i', 'e', 'g', 'g'];
const words = ["abs", "table", "bags", "bib", "big", "egg"];

console.log(wordFilter(words, chars)); 
//Should Return ["abs", "bags", "big", "egg"]