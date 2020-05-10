function moveCellsLeft(board) {

    const boardAfterMove = [[], [], [], []];

    for (let row = 0; row < 4; row++) {
        const auxiliaryRow = [];
        for (let cell = 0; cell < 4; cell++) {
            board[cell][row] !== null ? auxiliaryRow.push(board[cell][row]) : false;
        }
        while (auxiliaryRow.length !== 4) {
            auxiliaryRow.push(null);
        }
        for (let i = 0; i < 4; i++) {
            boardAfterMove[i].push(auxiliaryRow[i]);
        }
    }

    return boardAfterMove;
}

export default moveCellsLeft;