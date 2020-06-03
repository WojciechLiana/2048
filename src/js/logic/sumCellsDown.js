const sumCellsDown = (board) => {
    const newBoard = JSON.parse(JSON.stringify(board));
    for (let row = 0; row < 4; row++) {
        for (let cell = 3; cell >=0; cell--) {
            if(newBoard[row][cell] === newBoard[row][cell-1] && newBoard[row][cell] !== null){
                newBoard[row][cell] *= 2;
                newBoard[row][cell-1] = null;
            }
        }
        newBoard[row] = updateRowAfterSum(newBoard[row]);
    }

    return newBoard;
};

const updateRowAfterSum = (row)=> {
    const newRow =   row.filter(cell => cell !== null);

    while(newRow.length !== 4){
        newRow.unshift(null)
    }
    return newRow;
};

export {sumCellsDown, updateRowAfterSum};