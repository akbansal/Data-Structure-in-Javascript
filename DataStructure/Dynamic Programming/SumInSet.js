/**
 * Created by ambansa2 on 4/2/18.
 */


// s[n,w] = Math.Max (s[n-1][w], value[n] + s[n-1][w - weight[n]];

const SUM = 9;
const ARRAY = [5,2,1,3];
const grid = [];

function SumInSet(grid){
	for(let row = 0; row <= ARRAY.length; row++) {
		let tempArr = [];
		for (let col = 0; col <= SUM; col++) {
			tempArr.push(0);
		}
		grid.push(tempArr);
	}
	for(let row = 0; row <= ARRAY.length; row++) {
		grid[row][0] = 1;
	}
	printGrid(grid);
	for(let row = 1; row <= ARRAY.length; row++){
		for(let col = 1; col <= SUM; col++ ){
			if(col < ARRAY[row-1]){
				grid[row][col] = grid[row-1][col];
			}
			else{
				if(grid[row - 1][col] === 1){
					grid[row][col] = grid[row - 1][col];
				}else{
					grid[row][col] = grid[row - 1][col-ARRAY[row -1]];
				}
			}
		}
	}
	printGrid(grid);
	console.log("Sum of " + SUM + " exist in set => "+ grid[ARRAY.length][SUM]);


	/*for(let item = NUM_ITEMS, wt = KNAPSACK_CAPACITY; item > 0; item--) {
		if(grid[item][wt] !== 0 && grid[item][wt] != grid[item - 1][wt]){
			console.log("Items considered is - " + item);
			wt = wt - WEIGHT[item - 1];
		}
	}*/
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

SumInSet(grid);