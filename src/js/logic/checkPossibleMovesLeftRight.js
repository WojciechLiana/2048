const checkPossibleMovesLeftRight = (board) => {
    for (let row = 0; row < 3; row++) {
        for (let cell = 0; cell < 4; cell++) {
            if (board[row][cell] === board[row+1][cell]) {
                return true;
            }
        }
    }
    return false;
};

export default checkPossibleMovesLeftRight;