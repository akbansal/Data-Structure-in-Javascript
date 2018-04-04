/**
 * Created by ambansa2 on 3/24/18.
 */
/**
 * Created by ambansa2 on 3/23/18.
 */

function isSafe(board, nextRow, nextCol) {
	/* is knight's this new location safe? */
	return (
			nextRow >= 0 && nextRow <= (board.length - 1) && //row should be with in board Range 0 - board.length
			nextCol >= 0 && nextCol <= (board.length - 1) && //col should be with in board Range
			board[nextRow][nextCol] === 0);   				      //borad's cell should be empty i.e. 0
}

function solveKnightTourRecursive(board, currentRow, currentCol, moveNum, knightPossibleMoves) {
	// Exit condition: If Knight has travelled all cells
	if (moveNum === (board.length * board.length) +1 ){
		return true;
	}else{
		// Knight can have at max 8 moves.
		for(let i = 0; i < 8; i=-(~i)) {
			let nextRow = currentRow + knightPossibleMoves[i][0];
			let nextCol = currentCol + knightPossibleMoves[i][1];

			if (isSafe(board, nextRow, nextCol)) {
				board[nextRow][nextCol] = moveNum;
				if (solveKnightTourRecursive(board, nextRow, nextCol, moveNum + 1, knightPossibleMoves)) {
					return true;
				} else {
					board[nextRow][nextCol] = 0; //Backtrack Condition
				}
			}
		}
		return false;
	}
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

function solveKnightTour() {
	let board = [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	];
	board[0][0] = 1; //Initial Position on Empty Board.
	let knightPossibleMoves = [
		[2,  1],
		[1,  2],
		[2, -1],
		[1, -2],
		[-2, 1],
		[-1, 2],
		[-2,-1],
		[-1,-2]
	];
	if(solveKnightTourRecursive(board, 0, 0, 2, knightPossibleMoves)) {
		printSolution(board);
	}else{
		console.log("Solution does not exist");
	}
}
solveKnightTour();