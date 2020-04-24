const sumCellsRight = (board) => {
    const newBoard = JSON.parse(JSON.stringify(board));

    for (let row = 4; row > 0; row--) {
        for (let cell = 0; cell < 5; cell++) {
            if ((newBoard[row][cell] === newBoard[row - 1][cell]) && (newBoard[row][cell] !== null)) {
                newBoard[row][cell] *= 2;
                newBoard[row - 1][cell] = null;
            }
        }
    }

    return moveCellsAfterSum(newBoard);
};

const moveCellsAfterSum = (board) => {
    const newBoard = JSON.parse(JSON.stringify(board));
    for (let row = 4; row > 0; row--) {
        for (let cell = 0; cell < 5; cell++) {
            if ((newBoard[row][cell] === null) && (newBoard[row][cell] < newBoard[row - 1][cell])) {
                newBoard[row][cell] = newBoard[row - 1][cell];
                newBoard[row - 1][cell] = null;
            }
        }
    }
    return newBoard;
};

export default sumCellsRight;