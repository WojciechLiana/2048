import moveCellsUp from "./moveCellsUp";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import sumCellsUp from "./sumCellsUp";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveUpHandler = (board) => {
    const cellsMovedUp = moveCellsUp(board);
    const summedEqualCells = sumCellsUp(cellsMovedUp);

    return checkIfMoveWasDone(board, summedEqualCells) ?
        updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells)) :
        board;
};

export default moveUpHandler;