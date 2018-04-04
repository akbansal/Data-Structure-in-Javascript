/**
 * Created by ambansa2 on 4/2/18.
 */

let fibCache={};
//Bottoms up appraoch
function fib(n){
  fibCache[0] = 0;
  fibCache[1] = 1;
  for(let i=2; i<=n; i++ ){
      fibCache[i] = fibCache[i-1] + fibCache[i-2];
  }
  console.log(fibCache);
  return fibCache[n];

}

console.log(fib(20));

let fibDPCache = {};
fibDPCache[0] = 0;
fibDPCache[1] = 1;

function fibDP(n){
	if(n===0 || n===1){
		return fibDPCache[n];
	}
	if(!fibDPCache[n]){
		fibDPCache[n-1] = fibDP(n-1);
		fibDPCache[n-2] = fibDP(n-2);

		fibDPCache[n] = fibDPCache[n-1] + fibDPCache[n-2];
	}
	return fibDPCache[n];
}
console.log(fibDP(100));