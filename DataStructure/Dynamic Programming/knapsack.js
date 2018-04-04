/**
 * Created by ambansa2 on 4/2/18.
 */


// s[n,w] = Math.Max (s[n-1][w], value[n] + s[n-1][w - weight[n]];

const NUM_ITEMS = 3;
const KNAPSACK_CAPACITY = 5;
const WEIGHT = [4,2,3];
const VALUES = [10,4,7];
const grid = [];

function Knapsack(grid){
	for(let item = 0; item <= NUM_ITEMS; item++) {
		let tempArr = [];
		for (let wt = 0; wt <= KNAPSACK_CAPACITY; wt++) {
			tempArr.push(0);
		}
		grid.push(tempArr);
	}
	//printGrid(grid);
	for(let item = 1; item <= NUM_ITEMS; item++){
		for(let wt = 1; wt<= KNAPSACK_CAPACITY; wt++ ){
			const dontTakeItem = grid[item-1][wt];
			let takeItem = 0;
			if(wt >= WEIGHT[item - 1]){
				takeItem = VALUES[item-1] + grid[item-1][wt - WEIGHT[item - 1]];
			}
			grid[item][wt] = Math.max( dontTakeItem , takeItem);
		}
	}
	console.log("Total maximum profit would be = " + grid[NUM_ITEMS][KNAPSACK_CAPACITY]);

	for(let item = NUM_ITEMS, wt = KNAPSACK_CAPACITY; item > 0; item--) {
		if(grid[item][wt] !== 0 && grid[item][wt] != grid[item - 1][wt]){
			console.log("Items considered is - " + item);
			wt = wt - WEIGHT[item - 1];
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

Knapsack(grid);