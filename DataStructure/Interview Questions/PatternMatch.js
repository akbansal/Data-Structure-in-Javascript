/**
 * Created by ambansa2 on 3/31/18.
 */
// https://www.careercup.com/question?id=5699926989209600

// comparison of two strings if they are the same, use o(1) space
// abc \ b is equal to ab
// abc \ ca equals abcA
//
// \ b = backspace
// \ c = CapsLock

function match(str, pattern){
	let CAPSLOCK = false;

	let matchRec = (str, left, right) => {
		if(left > right){ //Exit condition
			return str;
		}else{
			const char = str[left];
			if(char === "\\" && str[left+1] === 'b'){ //Backslash case
				str = str.substring(0, left - 1) + str.substring(left+2); // remove '{char}\b' from the string
				left--; //removing the character should reduce the left index.
			}else if(char === "\\" && str[left+1] === 'c'){ //Capsloack case
				CAPSLOCK = !CAPSLOCK;
				str = str.substring(0, left) + str.substring(left+2); //remove '\c' from the string.
			}else{
				if(CAPSLOCK){
					//convert the current char to upper case.
					str = str.substring(0, left) + str.charAt(left).toUpperCase() + str.substring(left+1);
				}
				left++;
			}
			return matchRec(str, left, str.length - 1);
		}
	};
	console.log("str '" +str + "' and pattern '" + pattern +"' matches ==> " );
	str = matchRec(str, 0, str.length - 1);
	return str === pattern;
}

console.log(match("abc\\b", "ab"));
console.log(match("abc\\ca", "abcA"));
console.log(match("abc\\bde\\cfd", "abdeFD"));
console.log(match("\\ba", "a"));
console.log(match("abc\\cde\\cfd", "abcDEfd"));
console.log(match("a\\ba", "a"));
console.log(match("a\\b\\cb", "B"));
console.log(match("a\\b", ""));
console.log(match("\\cz", "Z"));
console.log(match("Abc\\b\\bt", "At"));
console.log(match("\\caef\\b\\c\\bt", "At"));
console.log(match("\\ca", "B"));

