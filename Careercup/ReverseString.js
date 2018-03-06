/**
 * Reverse this string 1+2*3-20. Note: 20 must be retained as is. Expected
 * output: 20-3*2+1
 */


function reverseString(str) {
  let startIndex = 0;
  let stack = [];
  for(let i = 0, length = str.length; i < length; i++) {
    const char = str[i];
    if(isNaN(char)){
      let subStr = str.substring(startIndex, i);
      stack.push(subStr);
      stack.push(str[i]);
      startIndex = i+1;
    }
  }
  if(startIndex < str.length){
    let subStr = str.substring(startIndex);
    stack.push(subStr);
  }
  return stack.reverse().join('');
}

const str = "1+2*3-20+2000+";
console.log("Before Reverse String is -> " +  str);
const reverseStr = reverseString(str);
console.log("After  Reverse String is -> " +  reverseStr);