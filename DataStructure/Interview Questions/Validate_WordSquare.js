/**
 * Created by ambansa2 on 3/27/18.
 */

function wordSquare(grid, rowNum, colNum) {
	//Exit Condition
	if(rowNum === (grid.length - 1) && colNum === (grid.length - 1) && grid[rowNum][colNum]){
		return true;
	} else {
		for(let col = colNum; col < grid.length; col = -(~col)) {
			if(grid[rowNum][col] !== grid[col][rowNum]){
				return false;
			}
		}
		return wordSquare(grid, rowNum + 1, colNum + 1);
	}
}
let grid = [
	['B', 'A', 'L', 'L'],
	['A', 'R', 'E', 'A'],
	['L', 'C', 'A', 'D'],
	['L', 'A', 'D', 'Y'],
];

console.log(wordSquare(grid,0,0));

