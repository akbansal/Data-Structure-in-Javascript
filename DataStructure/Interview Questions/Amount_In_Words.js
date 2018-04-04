/**
 * Created by ambansa2 on 3/27/18.
 */

const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0,n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f (g (x));
const not = x => !x;
const chunk = n => xs =>
	isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];

// numToWords :: (Number a, String a) => a -> String
let numToWords = n => {

	let a = [
		'', 'one', 'two', 'three', 'four',
		'five', 'six', 'seven', 'eight', 'nine',
		'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
		'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
	];

	let b = [
		'', '', 'twenty', 'thirty', 'forty',
		'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
	];

	let g = [
		'', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
		'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
	];

	// this part is really nasty still
	// it might edit this again later to show how Monoids could fix this up
	let makeGroup = ([ones,tens,huns]) => {
		return [
			num(huns) === 0 ? '' : a[huns] + ' hundred ',
			num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
			a[tens+ones] || a[ones]
		].join('');
	};

	let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;

	if (typeof n === 'number')
		return numToWords(String(n));
	else if (n === '0')
		return 'zero';
	else
		return comp (chunk(3)) (reverse) (arr(n))
			.map(makeGroup)
			.map(thousand)
			.filter(comp(not)(isEmpty))
			.reverse()
			.join(' ');
};


console.log(numToWords(11009));
//=> eleven thousand nine

console.log(numToWords(10000001));
//=> ten million one

console.log(numToWords(987));
//=> nine hundred eighty-seven

console.log(numToWords(1015));
//=> one thousand fifteen

console.log(numToWords(55111222333));
//=> fifty-five billion one hundred eleven million two hundred
//   twenty-two thousand three hundred thirty-three

console.log(numToWords("999999999999999999999991"));
//=> nine hundred ninety-nine sextillion nine hundred ninety-nine
//   quintillion nine hundred ninety-nine quadrillion nine hundred
//   ninety-nine trillion nine hundred ninety-nine billion nine
//   hundred ninety-nine million nine hundred ninety-nine thousand
//   nine hundred ninety-one

console.log(numToWords(6000753512));
//=> six billion seven hundred fifty-three thousand five hundred
//   twelve
