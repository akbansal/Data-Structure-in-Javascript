/**
 * Created by ambansa2 on 4/1/18.
 */

function printGrid(grid) {
	for(let row = 0; row < grid.length; row++) {
		let str = "";
		for(let col = 0; col < grid.length; col++) {
			str = str + grid[row][col] + "  ";

		}
		console.log(str);
	}
	return false;
}


function RatinMaze(grid){

	function ratinMazeRec(grid, row, col){
		if(row === grid.length - 1 && col === grid[0].length -1){
			grid[row][col] = 1;
			return true;
		}
		if(isSafe(grid, row, col)){
			//console.log("yes " + row, col + " is safe" );
			grid[row][col] = 1;

			if(ratinMazeRec(grid, row, col+1)){
				return true;
			}
			if(ratinMazeRec(grid, row+1, col)){
				return true;
			}
			grid[row][col] = 0;
		}
		return false;
	}

	return ratinMazeRec(grid, 0, 0);
}

function isSafe(grid, row, col){
	return grid[row][col] !== -1;
}

const grid1 = [
		[ 0, -1, -1, -1],
	[ 0,  0, -1,  0],
	[-1,  0, -1, -1],
	[ 0,  0,  0,  0]
]

if(RatinMaze(grid1)){
	printGrid(grid1);
}else{
	console.log('No Solution');
}


