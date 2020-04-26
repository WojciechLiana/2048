import moveCellsDown from "./moveCellsDown";
import sumCellsDown from "./sumCellsDown";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveDownHandler = (board) => {
    const cellsMoved = moveCellsDown(board);
    const summedEqualCells = sumCellsDown(cellsMoved);

    return checkIfMoveWasDone(board, summedEqualCells) ?
        updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells)) :
        board;
};

export default moveDownHandler;