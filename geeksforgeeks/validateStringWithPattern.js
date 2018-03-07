/**
 * Created by ambansa2 on 3/6/18.
 */
/**
 * Javascript Implementation.
 * validateStringWithPattern - https://www.careercup.com/question?id=5659201272545280

 Given an input string and ordering string, need to return true if
 the ordering string is present in Input string.

 input = "hello world!"
 ordering = "hlo!"
 result = FALSE (all Ls are not before all Os)

 input = "hello world!"
 ordering = "!od"
 result = FALSE (the input has '!' coming after 'o' and after 'd',
 but the pattern needs it to come before 'o' and 'd')

 input = "hello world!"
 ordering = "he!"
 result = TRUE

 input = "aaaabbbcccc"
 ordering = "ac"
 result = TRUE

 */


function validateStringWithPattern(str, pattern) {
  let map = {};

  for(let index = 0, length = str.length; index < length; index++) {
    const char = str[index];
    if(map[char]) {
      map[char].push(index);
    } else {
      map[char] = [index];
    }
  }

  for(let index = 1, length = pattern.length; index < length; index++) {
    let mapCharArr1 = map[pattern[index-1]];
    let mapCharArr2 = map[pattern[index]];
    //First index of second char should be more than the last index of first char.
    if(mapCharArr2[0] < mapCharArr1[mapCharArr1.length - 1]){
      return false;
    }
  }
  return true;
}

//Test Case 1
let str = 'hello world!';
let pattern1 = 'hlo!';
let pattern2 = '!od';
let pattern3 = 'he!';
console.log("Validating String -> '"+ str + "' with Pattern -> '" +pattern1  + "' ===> " + validateStringWithPattern(str, pattern1));
console.log("Validating String -> '"+ str + "' with Pattern -> '" +pattern2  + "' ===> " + validateStringWithPattern(str, pattern2));
console.log("Validating String -> '"+ str + "' with Pattern -> '" +pattern3  + "' ===> " + validateStringWithPattern(str, pattern3));

//Test Case 2
str = 'aaaabbbcccc';
pattern1 = 'ac';

console.log("Validating String -> '"+ str + "' with Pattern -> '" +pattern1  + "' ===> " + validateStringWithPattern(str, pattern1));

