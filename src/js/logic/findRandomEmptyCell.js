const findRandomEmptyCell = board => {

    const rowsAndIndexesOfEmptyCells = [];

    board.map((row, rowIndex) => row.map((cell, cellIndex) =>
        cell === null ?
            rowsAndIndexesOfEmptyCells.push([rowIndex, cellIndex]) :
            null
    ));

    return rowsAndIndexesOfEmptyCells[Math.floor(Math.random() * rowsAndIndexesOfEmptyCells.length)];
};

export default findRandomEmptyCell;