const findRandomEmptyCell = board => {

    const coordinatesOfEmptyCells = [];

    board.map((row, rowIndex) => row.map((cell, cellIndex) =>
        cell === null ?
            coordinatesOfEmptyCells.push([rowIndex, cellIndex]) :
            null
    ));

    return coordinatesOfEmptyCells[Math.floor(Math.random() * coordinatesOfEmptyCells.length)];
};

export default findRandomEmptyCell;