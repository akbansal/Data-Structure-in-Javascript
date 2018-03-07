/**
 * Created by ambansa2 on 3/6/18.
 */
/**
 * Javascript Implementation.
 * uniqueCharByCount - https://www.careercup.com/question?id=5721038127104000

 Given a string, print out all of the unique characters
 and the number of times it appeared in the string

 Input:
 geeksforgeek
 acaaabbbacdddd

 Output:
 { g: 2, e: 4, k: 2, s: 1, f: 1, o: 1, r: 1 }
 { a: 5, c: 2, b: 3, d: 4 }
 */


function uniqueCharByCount(str) {
  let charByCountMap = {};

  for(let index = 0, length = str.length; index < length; index++) {
    const char = str[index];
    if(!charByCountMap[char]){
      charByCountMap[char] = 1;
    }
    else{
      charByCountMap[char] = charByCountMap[char] + 1;
    }
  }
  console.log(charByCountMap);
}

const str = 'acaaabbbacdddd';
console.log("uniqueCharByCount -> "+str+" \n");
uniqueCharByCount(str);