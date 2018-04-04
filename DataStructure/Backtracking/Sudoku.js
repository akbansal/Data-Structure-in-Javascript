/**
 * Created by ambansa2 on 3/24/18.
 */


// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

function Sudoku(grid){
	let location = [0, 0];
	//exit condition
	if(!unassignedLocation(grid, location)){
		return true;
	}
	let row = location[0];
	let col = location[1];

	for(let num = 1; num <= grid.length; num++){
		if(isNumSafeInLocation(grid, row, col, num)){
			grid[row][col] = num;
			if(Sudoku(grid)){
				return true;
			}
			backtrack++;
			grid[row][col] = 0;
		}
	}
	return false;
}

function unassignedLocation(grid, loc){
	for(let row = 0; row < grid.length; row++) {
		for(let col = 0; col < grid.length; col++) {
			if(grid[row][col] === 0){
				loc[0] = row;
				loc[1] = col;
				return true;
			}
		}
	}
	return false;
}

function isNumSafeInLocation(grid, row, col, num){
	return  !numUsedInRow(grid, row, num) &&
		!numUsedInCol(grid, col, num) &&
		!numUsedIn3x3Box(grid, row - row%3, col - col%3 , num);
}

function numUsedInRow(grid, row, num){
	for(let col = 0; col < 9; col++) {
		if(grid[row][col] === num){
			return true;
		}
	}
	return false;
}


function numUsedInCol(grid, col, num){
	for(let row = 0; row < 9; row++) {
		if(grid[row][col] === num){
			return true;
		}
	}
	return false;
}

function numUsedIn3x3Box(grid, startRow, startCol, num){
	for(let row = 0; row < 3; row++) {
		for(let col = 0; col < 3; col++) {
			if(grid[row+startRow][col+startCol] === num){
				return true;
			}
		}
	}
	return false;
}

function printGrid(grid) {
	for(let row = 0; row < grid.length; row++) {
		let str = "";
		for(let col = 0; col < grid.length; col++) {
			if(col !== 0 && col % 3 === 0){
				str = str + "  " + grid[row][col] + "  ";
			}
			else{
				str = str + grid[row][col] + "  ";
			}
		}
		if(row%3 === 0 ) {
			console.log();
		}
		console.log(str);
	}
	return false;
}

// const gridTemplate = [
//   [0, 0, 0,   0, 0, 0,    0, 0, 0],
//   [0, 0, 0,   0, 0, 0,    0, 0, 0],
//   [0, 0, 0,   0, 0, 0,    0, 0, 0],

//   [0, 0, 0,   0, 0, 0,    0, 0, 0],
//   [0, 0, 0,   0, 0, 0,    0, 0, 0],
//   [0, 0, 0,   0, 0, 0,    0, 0, 0],

//   [0, 0, 0,   0, 0, 0,    0, 0, 0],
//   [0, 0, 0,   0, 0, 0,    0, 0, 0],
//   [0, 0, 0,   0, 0, 0,    0, 0, 0]
// ];

const grid1 = [
	[3, 0, 7,   0, 2, 0,    0, 0, 0],
	[0, 0, 4,   0, 0, 5,    0, 0, 0],
	[9, 6, 0,   0, 0, 4,    0, 8, 0],

	[0, 8, 0,   6, 0, 0,    0, 9, 1],
	[0, 0, 0,   0, 0, 0,    0, 0, 0],
	[1, 9, 0,   0, 0, 3,    0, 2, 0],

	[0, 4, 0,   2, 0, 0,    0, 3, 6],
	[0, 0, 0,   8, 0, 0,    5, 0, 0],
	[0, 0, 0,   0, 5, 0,    1, 0, 9]
]

if(Sudoku(grid1)){
	printGrid(grid1);
	console.log("Total Recursion count is = " + count);
	console.log("Total Backtrack Count is = " + backtrack);
}else{
	console.log('No Solution');
}
