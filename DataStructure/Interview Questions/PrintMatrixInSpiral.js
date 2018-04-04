/**
 * Created by ambansa2 on 3/31/18.
 */
const grid = [
	[ 1, 2, 3, 4],
	[ 5, 6, 7, 8],
	[ 9,10,11,12],
	[13,14,15,16],
];



const printSpiral = function(grid){

	function rec(grid, rowX, colX, rowY, colY, str){
		if(colX >= (grid[0].length/2) || rowX >= (grid.length/2)){
			return str;
		}
		//left > right
		for(let col = colX; col <= colY; col++){
			str = str + grid[rowX][col] + ', ';
		}


		//up > bottom -
		for(let row = rowX + 1; row <= rowY; row++){
			str = str + grid[row][colY] + ", ";
		}

		//right > left
		for(let col = colY - 1; col >= colX; col--){
			str = str + grid[rowY][col] + ', ';
		}

		//bottom > up
		for(let row = rowY - 1; row > rowX; row--){
			str = str + grid[row][colX] + ", ";
		}
		return rec(grid, rowX + 1, colX + 1, rowY - 1, colY - 1, str);
	}

	let str = rec(grid, 0, 0, grid[0].length-1, grid.length - 1, "");
	console.log(str);
}


printSpiral(grid);

