const checkPossibleMovesUpDown = (board) => {
    for (let row = 0; row < 4; row++) {
        for (let cell = 0; cell < 3; cell++) {
            if (board[row][cell] === board[row][cell + 1]) {
                return true;
            }
        }
    }
    return false;
};

export default checkPossibleMovesUpDown;