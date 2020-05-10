const sumCellsLeft = (board) => {
    const newBoard = JSON.parse(JSON.stringify(board));

    for (let row = 0; row < 3; row++) {
        for (let cell = 0; cell < 4; cell++) {
            if ((newBoard[row][cell] === newBoard[row + 1][cell]) && (newBoard[row][cell] !== null)) {
                newBoard[row][cell] *= 2;
                newBoard[row + 1][cell] = null;
            }
        }
    }

    return newBoard;
};

export default sumCellsLeft;