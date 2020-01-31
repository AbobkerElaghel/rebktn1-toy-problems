/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

const SquareMatrixGenerator = length => {
    let matrix = [];
    for (let i = 0; i < length ; i++) {
        matrix.push(new Array(length));
    }
    return matrix;
};

const checkRow = (matrix,positionX,positionY) => {
    let tempCounter = 0;
    element = matrix[positionX][positionY];
    for (let i = 0; i < matrix[positionX].length ; i++) {
        if(element === matrix[positionX][i]){
            tempCounter++;
        }
    }
    return tempCounter < 2;
};

const checkcolumn = (matrix,positionX,positionY) => {
    let tempCounter = 0;
    element = matrix[positionX][positionY];
    for (let i = 0; i < matrix[positionY].length ; i++) {
        if(element === matrix[i][positionY]){
            tempCounter++;
        }
    }
    return tempCounter < 2;
};


function sudokuChecker(board) {
    const length = Math.sqrt(board.length);
    let matrix = SquareMatrixGenerator(length);
    let conter = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length ; j++) {
            matrix[i][j] = board[conter];
            conter++;
        }
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length ; j++) {
            if(! (checkRow(matrix,i,j) && checkcolumn(matrix,i,j)) ){
                return false;
            }
        }
    }
    return true;
}


console.log(sudokuChecker("735814296"));



