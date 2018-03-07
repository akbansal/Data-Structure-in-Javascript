/**
 * Created by ambansa2 on 3/6/18.
 */
/**
 * Javascript Implementation.
 * reverseStringInPlace - https://www.careercup.com/question?id=5694329337151488

 Write program for the following case
 Reverse string (string is stored in an array)
 Input:- "This is an example"
 Output:-sihT si na elpmaxe

 */


function reverseStringInPlace(str) {
  let words = str.split(' ');
  for(let index = 0, length = words.length; index < length; index++) {
    words[index] = words[index].split('').reverse().join('');
  }
  return words.join(' ');
}

let str = 'This is an example';
console.log("reverseStringInPlace ->");
console.log("Input  : " + str);
console.log("Output : " + reverseStringInPlace(str));

