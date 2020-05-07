import moveCellsRight from "./moveCellsRight";
import sumCellsRight from "./sumCellsRight";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveRightHandler = (board) => {

    const cellsMoved = moveCellsRight(board);
    const summedEqualCells = sumCellsRight(cellsMoved);
    const cellsMovedAgain = moveCellsRight(summedEqualCells);

    return checkIfMoveWasDone(board, cellsMovedAgain) ?
        updateTableWithRandomCell(cellsMovedAgain, findRandomEmptyCell(cellsMovedAgain)) :
        board;
};

export default moveRightHandler;