/**
 * Created by ambansa2 on 3/23/18.
 */

function isSafe(board, row, col) {
	let i, j;

	/* Check this row on left side */
	for (i = 0; i < col; i++)
		if (board[row][i])
			return false;

	/* Check upper diagonal on left side */
	for (i=row, j=col; i>=0 && j>=0; i--, j--)
		if (board[i][j])
			return false;

	/* Check lower diagonal on left side */
	for (i=row, j=col; j>=0 && i<board.length; i++, j--)
		if (board[i][j])
			return false;

	return true;
}


function solveNQUtil(board, col) {
	// Exit condition: If all queens are placed then return true
	if (col === board.length){
		return true;
	}

	// Consider this column and try placing this queen in all rows one by one.
	for (let row = 0; row < board.length; row++) {
		// Check if queen can be placed on board[row][col]
		if (isSafe(board, row, col)) {
			// Place this queen in board[i][col]
			board[row][col] = 1;

			// recursion to place rest of the queens
			if (solveNQUtil(board, col + 1)){
				return true;
			}

			// BACKTRACK and RESET
			// If placing queen in board[row][col] doesn't lead to a solution, then remove queen from board[i][col]
			board[row][col] = 0;
		}
	}
	// If queen can not be place in any row in this colum col then return false.
	return false;
}

function printSolution(board) {
	for(let row = 0; row < board.length; row++) {
		let str = '';
		for (let col = 0; col < board.length; col++){
			str = str + board[row][col] + " ";
		}
		console.log(str);
	}
}


function solveNQ() {

	let board8x8 = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0]
	];

	let board4x4 = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];

	if(!solveNQUtil(board8x8, 0)) {
		console.log("Solution does not exist");
		return false;
	}
	printSolution(board8x8);
	return true;
}

solveNQ();