import moveCellsRight from "./moveCellsRight";
import sumCellsRight from "./sumCellsRight";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveRightHandler = (board) => {

    const cellsMoved = moveCellsRight(board);
    const summedEqualCells = sumCellsRight(cellsMoved);

    return checkIfMoveWasDone(board, summedEqualCells) ?
        updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells)) :
        board;
};

export default moveRightHandler;