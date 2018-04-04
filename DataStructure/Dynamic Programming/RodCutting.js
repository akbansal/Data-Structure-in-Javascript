/**
 * Created by ambansa2 on 4/2/18.
 */


// s[n,w] = Math.Max (s[n-1][w], value[n] + s[n-1][w - weight[n]];

const ORIGINAL_ROD_LENGTH = 5;
const CUT_ROD_LIST = [0, 1, 2, 3, 4 ];
const PRICES_LIST = [0, 2, 5, 7, 3];
const grid = [];

function RodCutting(grid){
	for(let row = 0; row < CUT_ROD_LIST.length; row++) { //We already counted 0 in our prices array
		let tempArr = [];
		for (let col = 0; col <= ORIGINAL_ROD_LENGTH; col++) {
			tempArr.push(0);
		}
		grid.push(tempArr);
	}

	printGrid(grid);
	for(let rodPiece = 1; rodPiece < CUT_ROD_LIST.length; rodPiece++){ // rodPiece is the individual pieces of rod in this ex: 0,1,2,3,4
		for(let rodLength = 1; rodLength <= ORIGINAL_ROD_LENGTH; rodLength++ ){

			const dontTakeItem = grid[rodPiece - 1][rodLength];
			let takeItem = 0;

			if( rodPiece <= rodLength) {
				takeItem = PRICES_LIST[rodPiece] + grid[rodPiece-1][rodLength - rodPiece];
			}

			grid[rodPiece][rodLength] = Math.max( dontTakeItem , takeItem);
		}
	}
	  printGrid(grid);
	 console.log("Total maximum profit would be = " + grid[CUT_ROD_LIST.length-1][ORIGINAL_ROD_LENGTH]);

	for(let  rodPiece= CUT_ROD_LIST.length-1 , rodLength = ORIGINAL_ROD_LENGTH; rodPiece > 0; rodPiece--) {
		if(grid[rodPiece][rodLength] !== 0 && grid[rodPiece][rodLength] != grid[rodPiece - 1][rodLength]){
			console.log("Items considered is - " + rodPiece);
			rodLength = rodLength - rodPiece;
		}
	}
}

function printGrid(board) {
	console.log("");
	for(let row = 0; row < board.length; row++) {
		let str = '';
		for (let col = 0; col < board[0].length; col++){
			str = str + board[row][col] + " ";
		}
		console.log(str);
	}
}

RodCutting(grid);