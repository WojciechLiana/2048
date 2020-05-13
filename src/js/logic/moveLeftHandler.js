import moveCellsLeft from "./moveCellsLeft";
import sumCellsLeft from "./sumCellsLeft";
import put2inRandomEmptyCell from "./put2inRandomEmptyCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveLeftHandler = (board) => {

    const cellsMoved = moveCellsLeft(board);
    const summedEqualCells = sumCellsLeft(cellsMoved);
    const cellsMovedAgain = moveCellsLeft(summedEqualCells);

    return checkIfMoveWasDone(board, cellsMovedAgain) ?
        put2inRandomEmptyCell(cellsMovedAgain, findRandomEmptyCell(cellsMovedAgain)) :
        board;
};

export default moveLeftHandler;