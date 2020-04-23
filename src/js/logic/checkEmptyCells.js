const checkEmptyCells = board=> board.some(
    row => row.some(cell => cell === null)
);

export default checkEmptyCells;