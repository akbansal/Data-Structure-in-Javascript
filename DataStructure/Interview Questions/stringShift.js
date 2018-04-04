/**
 * Created by ambansa2 on 4/1/18.
 */

function stringShift(str, num){
	let result = '';
	let newStr = str.toLowerCase();
	let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');

	newStr.split('').forEach((letter, index) => {
		if(letter === ''){
			result += letter;
		}
		let currentIndex = alphabets.indexOf(letter);
		let newIndex = currentIndex + num;

		if(newIndex > 25 ) newIndex = newIndex - 26;
		if(newIndex < 0  ) newIndex = newIndex + 26;

		if(letter.toUpperCase() === str[index]){
			result += alphabets[newIndex].toUpperCase();
		}else{
			result += alphabets[newIndex];
		}
	});
	return result;
}

console.log(stringShift("anjika", -4));

