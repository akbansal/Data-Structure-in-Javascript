/**
 * Created by ambansa2 on 3/6/18.
 */
/**
 * Javascript Implementation.
 * charByCount - https://www.careercup.com/question?id=5662443448565760

 You have a string aaabbdcccccf, transform it the following way => a3b2d1c5f1
 ie: aabbaa -> a2b2a2 not a4b2

 Input:
 acaaabbbacdddd
 aaabbdcccccf
 aabbaa

 Output:
 a1c1a3b3a1c1d4
 a3b2d1c5f1
 a2b2a2

 */


function charByCount(str) {
  let result = "";
  let lastChar = str[0];
  let counter = 0;
  for(let index = 0, length = str.length; index < length; index++) {
    const char = str[index];
    if(char === lastChar) {
      counter++;
    } else {
      result = result + lastChar + counter;
      counter = 1; //reset the counter
      lastChar = char; //reset the lastChar
    }
    // if str is ending with same last chars e.g. 'acaaabbbacdddd'
    if(index === str.length - 1 && counter > 0) {
      result = result +  lastChar + counter;
    }
  }
  console.log(result);
}

const str1 = 'acaaabbbacdddd'; // a1c1a3b3a1c1
const str2 = 'aaabbdcccccf'; // a3b2d1c5
const str3 = 'aabbaa'; // a2b2

console.log("charByCount -> "+str1);
charByCount(str1);

console.log("charByCount -> "+str2);
charByCount(str2);

console.log("charByCount -> "+str3);
charByCount(str3);
