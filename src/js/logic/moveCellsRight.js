function moveCellsRight(board) {

    const boardAfterMove = [[], [], [], [], []];

    for (let row = 0; row < 5; row++) {
        const auxiliaryRow = [];
        for (let cell = 0; cell < 5; cell++) {
            board[cell][row] !== null ? auxiliaryRow.push(board[cell][row]) : false;
        }

        while (auxiliaryRow.length !== 5) {
            auxiliaryRow.unshift(null);
        }

        for (let i = 0; i <5; i++) {
            boardAfterMove[i].push(auxiliaryRow[i]);
        }
    }

    return boardAfterMove;
}

export default moveCellsRight;