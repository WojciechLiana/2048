import moveCellsRight from "./moveCellsRight";
import sumCellsRight from "./sumCellsRight";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";

const moveRightHandler = (board) => {

    const cellsMoved = moveCellsRight(board);
    const summedEqualCells = sumCellsRight(cellsMoved);
    return updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells));
};

export default moveRightHandler;