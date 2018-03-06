/**
 * Javascript Implementation.

 * Reverse the words in string eg -
 * Input : 'The Sky is Blue '.
 * output: 'Blue is Sky The'.
 */


function reverseWords(str) {
  //Assumption. There is only one space between words.
  return str.split(' ').reverse().join(' ');
}

const str = 'The Sky is Blue';
console.log("Before Reverse, String is -> " +  str);
console.log("After  Reverse String is -> " +  reverseWords(str));