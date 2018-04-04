/**
 * Created by ambansa2 on 4/2/18.
 */


// s[n,w] = Math.Max (s[n-1][w], value[n] + s[n-1][w - weight[n]];

const NUM_COINS = 3;
const TOTAL_VALUE = 4;
const VALUES = [1, 2, 3];
const grid = [];

function Knapsack(grid){

	for (let coin = 0; coin <= NUM_COINS; coin++) {
		let tempArr = [];
		for(let val = 0; val <= TOTAL_VALUE; val++) {
				tempArr.push(0);
		}
		grid.push(tempArr);
	}
	printGrid(grid);
	for (let coin = 0; coin <= NUM_COINS; coin++) {
			grid[coin][0] = 1;
	}
	printGrid(grid);

	for (let coin = 1; coin <= NUM_COINS; coin++) {
		for(let val = 1; val <= VALUES.length; val++) {

			if(VALUES[coin - 1] <= val) {
				grid[coin][val] = grid[coin - 1][val] + grid[coin][val - VALUES[coin - 1]];
			}
			else {
				grid[coin][val] = grid[coin - 1][val];
			}

		}
	}
	printGrid(grid);
	//console.log("Total maximum profit would be = " + grid[NUM_ITEMS][KNAPSACK_CAPACITY]);

	// for(let item = NUM_ITEMS, wt = KNAPSACK_CAPACITY; item > 0; item--) {
	// 	if(grid[item][wt] !== 0 && grid[item][wt] != grid[item - 1][wt]){
	// 		console.log("Items considered is - " + item);
	// 		wt = wt - WEIGHT[item - 1];
	// 	}
	// }

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

Knapsack(grid);