import moveCellsUp from "./moveCellsUp";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import sumCellsUp from "./sumCellsUp";

const moveUpHandler = (board)=> {
    const cellsMovedUp = moveCellsUp(board);
    const summedEqualCells = sumCellsUp(cellsMovedUp);

    return updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells));
};

export default moveUpHandler;