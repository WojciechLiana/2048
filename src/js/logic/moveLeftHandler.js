import moveCellsLeft from "./moveCellsLeft";
import sumCellsLeft from "./sumCellsLeft";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveLeftHandler = (board) => {

    const cellsMoved = moveCellsLeft(board);
    const summedEqualCells = sumCellsLeft(cellsMoved);

    return checkIfMoveWasDone(board, summedEqualCells) ?
        updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells)) :
        board;
};

export default moveLeftHandler;