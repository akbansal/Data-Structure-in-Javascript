/**
 * Javascript Implementation.
 * parenthesis-checker - https://practice.geeksforgeeks.org/problems/parenthesis-checker/0

 Given an expression string exp, examine whether the pairs and the orders
 of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
 For example, the program should print
 'balanced' for exp = “[()]{}{[()()]()}” and
 'not balanced' for exp = “[(])”

 Input:
 The first line of input contains an integer T denoting the number of test cases.
 Each test case consist of a string of expression, in a separate line.

 Output:
 Print 'balanced' without quotes if pair of parenthesis are balanced else print
 'not balanced' in a separate line.
 */


function parenthesisChecker(str) {
  let stack = [];
  const openingParenthesis = ['{','(','['];
  const closingParenthesis = ['}',')',']'];
  let result = true;

  for(let index = 0, length = str.length; index < length; index++) {
    const char = str[index];
    if(openingParenthesis.indexOf(char) > -1){
      stack.push(char);
    }
    if(closingParenthesis.indexOf(char) > -1){
      switch(stack.pop()){
        case '{':
          result = char === '}';
          break;
        case '(':
          result = char === ')';
          break;
        case '[':
          result = char === ']';
          break;
      }
      // if result is false then immidiately return 'Non balanced'
      if(!result) {
        return "String is not balanced";
      }
    }
    //console.log("Stack is = " + stack);
  }
  return 'String is balanced';
}

const str = '[()]{}{[()()]()}';
console.log("parenthesis-checker -> " +  parenthesisChecker(str));