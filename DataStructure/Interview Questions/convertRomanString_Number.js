/**
 * Created by ambansa2 on 3/27/18.
 */

function convertChar2Num(char) {
	switch(char){
		case 'I': return 1;
		case 'V': return 5;
		case 'X': return 10;
		case 'L': return 50;
		case 'C': return 100;
		case 'D': return 500;
		case 'M': return 1000;
		default: return -1;
	}
}
function convertRomanToNumber(romanString) {
	const romanCharacters = romanString.split('');
	let num = convertChar2Num(romanCharacters[0]);

	let currentNum, prevNum;

	for(let index = 1; index < romanCharacters.length; index = -(~index)){
		currentNum = convertChar2Num(romanCharacters[index]);
		prevNum = convertChar2Num(romanCharacters[index - 1]);

		if(currentNum <= prevNum){
			num = num + currentNum;
		}else{
			num = num - (prevNum << 1) + currentNum;
		}

	}
	console.log(" Converting "+romanString);
	return num;
}
console.log(convertRomanToNumber("I")); // 1
console.log(convertRomanToNumber("III")); // 3
console.log(convertRomanToNumber("IV")); // 4
console.log(convertRomanToNumber("VI")); // 6
console.log(convertRomanToNumber("XXVI")); // 26
console.log(convertRomanToNumber("CI")); // 101
