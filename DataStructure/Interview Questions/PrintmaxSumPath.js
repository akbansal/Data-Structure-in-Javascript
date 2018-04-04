/**
 * Created by ambansa2 on 4/1/18.
 */
const grid1 = [
	[10, 10, 2,  0, 20, 4 ],
	[ 1,  0, 0, 30,  2, 5 ],
	[ 0, 10, 4,  0,  2, 0 ],
	[ 1,  0, 2, 20,  0, 4 ]
]


const PrintMaxSumPath = function(grid){
	function findMax(row, startIndex, endIndex){
		let maxIndex = -1, max = 0;
		for (let col = startIndex; col <= endIndex; col++ ){
			if(row[col] > max){
				max = row[col];
				maxIndex = col;
			}
		}
		return maxIndex;
	}

	let path = [];
	let maxIndex =  -1;

	for(let row = 0; row < grid.length; row++ ){
		if(maxIndex < 0){
			maxIndex = findMax(grid[row], 0, grid[0].length - 1);
		} else {
			maxIndex = findMax(grid[row], maxIndex - 1, maxIndex + 1);

		}
		path.push(grid[row][maxIndex]);
	}
	console.log(path.join(' --> '));
}

PrintMaxSumPath(grid1);