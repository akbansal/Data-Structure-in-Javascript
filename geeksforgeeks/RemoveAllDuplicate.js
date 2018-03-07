/**
 * Created by ambansa2 on 3/6/18.
 */
var _ = require('underscore');

/**
 * Javascript Implementation.
 * removeAllDuplicate - https://practice.geeksforgeeks.org/problems/recursively-remove-all-adjacent-duplicates/0

 Given a string, recursively remove adjacent duplicate characters from string.
 The output string should not have any adjacent duplicates.


 Input:
 geeksforgeek
 acaaabbbacdddd

 Output:
 gksforgk
 acac

 */


function removeAllDuplicate(str) {
  let result = '';
  let lastChar = str[0];
  let lastIndex = 0;

  for(let index = 0, length = str.length; index < length; index++) {
    console.log("iteration # " + index);
    const char = str[index];
    if(char !== lastChar){
      //continue;
      console.log("result = " + str.substring(0, lastIndex));

      result = str.substring(lastIndex, index).replace('Amit')
      console.log("result = " + result);
      lastChar = char;
      lastIndex = index;
    }
    else{
      console.log('In else block = ' + char + " , " + index);
      lastChar = char;
      lastIndex = index;
    }
  }
  return result;
}

const str = 'geeksforgeek';
console.log("removeAllDuplicate -> " +  removeAllDuplicate(str));