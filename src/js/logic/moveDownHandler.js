import moveCellsDown from "./moveCellsDown";
import sumCellsDown from "./sumCellsDown";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";

const moveDownHandler = (board)=> {
    const cellsMoved = moveCellsDown(board);
    const summedEqualCells = sumCellsDown(cellsMoved);

    return updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells));
};

export default moveDownHandler;