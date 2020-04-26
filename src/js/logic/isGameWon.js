const isGameWon = board => board.some(
    row => row.some(cell => cell === 2048)
);

export default isGameWon;