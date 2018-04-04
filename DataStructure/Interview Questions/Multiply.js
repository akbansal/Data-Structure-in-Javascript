
/**
 * Created by ambansa2 on 4/1/18.
 */
function multiply(a,b){
	let result = 0;
	while(a > 0){
		if(a&1 > 0){
			result += b;
		}
		a >>= 1;
		b <<= 1;
	}
	return result;
}

// console.log(multiply(19 , 10));
// console.log(multiply(18, 10));