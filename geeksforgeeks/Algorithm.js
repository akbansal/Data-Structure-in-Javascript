//Calculate sum of all numbers present in a string

function sum(string){
	var sum = 0,
		temp = "";
	for(var index = 0; index < string.length; index++){
    	if(!isNaN(parseInt(string[index]))){
			temp = temp + string[index];
		}else{
			if(temp.length > 0) {
				sum = sum + parseInt(temp);
			}
			temp = "";
		}
	}
  return sum;
}
console.log(sum("1afdnfsd12mdzdf132Df"));



function removeSpace(string){
	var str = string.trim(), result="",
		  strArr = str.split(' ');
  
	for(var index = 0; index < strArr.length; index++){
		console.log("String Index is ="+strArr[index]+"/");
       // strArr[index] = strArr[index].trim();
    if(strArr[index] !== " "){
      if(strArr[index] === "."){
				result = result.trim();
	    	result = result + strArr[index] + " ";  
  	  }else{
	 			result = result + " " + strArr[index];
    	}
    }
    console.log("result is = "+result)
  }
  return result;
      
}
console.log(removeSpace("   Hello Geeks . Welcome   to  GeeksforGeeks   .    "));



//Print shortest path to print a string on screen
//http://www.geeksforgeeks.org/print-shortest-path-print-string-screen/

function shortestPath(string){
	var curX = 0, curY = 0, nextX, nextY, char_ascii, a_ascii, b_ascii, index,
		Grid_Column = 5;

	for(index = 0; index < string.length; index++){
		char_ascii = string.charCodeAt(index);
		a_ascii = 'A'.charCodeAt();
		//b_ascii = 'B'.charCodeAt();
		//console.log("char_ascii = "+char_ascii);
		//console.log("a_ascii = "+a_ascii);
		//console.log("b_ascii = "+b_ascii);
    	nextX = Math.floor((char_ascii - a_ascii) / Grid_Column);
		nextY = (char_ascii - a_ascii ) % Grid_Column;
		
		while(curX < nextX){
			console.log("Move Down");
			curX++;
		}
		
		while(curX > nextX){
			console.log("Move Up");
			curX--;
		}
		
		while(curY < nextY){
			console.log("Move Right");
			curY++;
		}
		
		while(curY > nextY){
			console.log("Move Left");
			curY--;
		}
		console.log("Press OK");
	}
}
console.log(shortestPath("COZY"));



//Lower case to upper case – An interesting fact
//http://www.geeksforgeeks.org/lower-case-upper-case-interesting-fact/
function convertToUpperCase(string){
	var index, temp ="", char;
	for(index = 0; index< string.length; index++){
		char = string.charCodeAt(index);
		//console.log("before char = "+char);
		char &= ~(1 << 5);
		//console.log("after char = "+char);
		temp = temp + (String.fromCharCode(char));
	}
  return temp;
}
console.log(convertToUpperCase("geekforgeek"));


//Find a duplicate in a given set of n+1 distincr integers from 1...n range. Only 1 integer is duplicate
/* Problem 001 - 
	You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
	Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
	For example, given:
	  [1, 7, 3, 4]
	your function would return:
	  [84, 12, 28, 21]
	by calculating:
	  [7*3*4, 1*3*4, 1*7*4, 1*7*3]

	Note - Do not use division in your solution.
*/
//O(n) time and O(n) Space
function getProductsOfAllIntsExceptAtIndex(array){
	var productsOfAllIntsExceptAtIndex = [];
	
	var productSoFar = 1;
	for(var index=0; index< array.length; index++){
		productsOfAllIntsExceptAtIndex[index] = productSoFar;
		productSoFar = productSoFar * parseInt(array[index]);
	}
	
	productSoFar = 1;
	for(index = array.length - 1; index >= 0; index--){
		productsOfAllIntsExceptAtIndex[index] = productsOfAllIntsExceptAtIndex[index] * productSoFar;
		productSoFar = productSoFar * parseInt(array[index]);
	}
	return productsOfAllIntsExceptAtIndex;
}
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));


