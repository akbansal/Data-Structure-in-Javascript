/**
 * Created by ambansa2 on 3/23/18.
 */

// const ZERO = 0;
// const ONE =  255

// function AND(number) {
//   return ONE | number;
// }


// console.log(AND(16));
// //11111111
// //00010000

// //00000000
// //00010000
function multiplyWith3Point5(x){
	return (x<<1) ;
}
//console.log(multiplyWith3Point5(2));

function Add(a,b){
	//console.log(a & b);
	//console.log(a | b);
	return (a & b) + (a|b);
}
//console.log(Add(13, 3));
//console.log(Add(13, -3));
//console.log(Add(-13, -3));

function convertNumberToBinary(n) {
	console.log("Binary representation of number "+n + " is ==> " +convertNumberToBinaryRec(n, []));
}
function convertNumberToBinaryRec(n,str){
	if (n > 1)
		convertNumberToBinaryRec((n>>1),str);
	str.push(Math.floor(n % 2));
	return str.join('');
}

convertNumberToBinary(16);

function findExtraChar(strA, strB){
	let res = 0 ;
	for(let i = 0; i < strA.length; i++){
		res = res ^ strA[i].charCodeAt();
	}
	for(let i = 0; i < strB.length; i++){
		res = res ^ strB[i].charCodeAt();
	}
	return res;
}

function isPalindrom(str){
	return palindromRec(str, 0, str.length - 1);
}

function palindromRec(str, left,  right){
	if(left <= right){
		return true;
	}else{
		if(findExtraChar(str[left], str[right]) === 0){
			str = str.substring(left+1, right);
			console.log("new str is = " +str, str.length-1);
			return palindromRec(str, 0 , str.length-1);
		} else {
			return false;
		}
	}
}

let strA = "malayyalam";
let strB = "aallmmayay";
console.log(String.fromCharCode(findExtraChar(strA, strB)));
console.log("Are Strings "+ strA + " & " + strB + " anagram? => " + (findExtraChar(strA, strB) === 0));
console.log("is String " + strA + " palindrom? => " + isPalindrom(strA));