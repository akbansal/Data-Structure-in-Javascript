/**
 * Created by ambansa2 on 4/1/18.
 */

let Dictionary = ['POON', 'PLEE', 'SAME', 'POIE', 'PLEA', 'PLIE', 'POIN'];

function OneCharDiff(start){
	let startArr = start.split('');
	let returnedWord = null;
	let BreakLoop = {};
	try {
		Dictionary.forEach((word, wIndex)=> {
			let diff = 0;
			//console.log("word = " + word);
			word.split('').forEach((char, index)=> {
				if(char !== startArr[index]){
					diff++;
				}
			});
			//console.log("Diff is "+diff);
			if(diff === 1) {
				returnedWord = word;
				Dictionary[wIndex] = '';
				throw BreakLoop;
			}
		});
	}
	catch(e){
		if (e !== BreakLoop) throw e;
	}
	return returnedWord;

}
function wordLadder(start, target){
	let path = [];
	path.push(start);
	while(start !== target){
		start = OneCharDiff(start);
		path.push(start);
		if(!start){
			console.log("No word Ladder Chain exist");
			break;
		}
	}
	console.log(path);


}

wordLadder("TOON", "PLEA");
