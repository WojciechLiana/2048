import moveCellsLeft from "./moveCellsLeft";
import sumCellsLeft from "./sumCellsLeft";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveLeftHandler = (board) => {

    const cellsMoved = moveCellsLeft(board);
    const summedEqualCells = sumCellsLeft(cellsMoved);
    const cellsMovedAgain = moveCellsLeft(summedEqualCells);

    return checkIfMoveWasDone(board, cellsMovedAgain) ?
        updateTableWithRandomCell(cellsMovedAgain, findRandomEmptyCell(cellsMovedAgain)) :
        board;
};

export default moveLeftHandler;